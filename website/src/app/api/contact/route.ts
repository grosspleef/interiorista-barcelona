import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY environment variable is not set')
  }
  return new Resend(process.env.RESEND_API_KEY)
}

const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 3
const ipRequests = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = ipRequests.get(ip)

  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

interface ContactBody {
  name?: string
  firstName?: string
  lastName?: string
  email: string
  phone: string
  postalCode: string
  surface?: string
  budget: string
  message?: string
  description?: string
  timeSlot?: string
  _honeypot?: string
  source?: string
}

function validate(body: ContactBody): string | null {
  const email = body.email?.trim()
  const phone = body.phone?.trim()
  const name =
    body.name?.trim() ||
    [body.firstName?.trim(), body.lastName?.trim()].filter(Boolean).join(' ')

  if (!name) return 'El nombre es obligatorio.'
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return 'El email no es válido.'
  if (!phone) return 'El teléfono es obligatorio.'
  if (!body.postalCode?.trim()) return 'El código postal es obligatorio.'
  if (!body.budget?.trim()) return 'El presupuesto es obligatorio.'
  if (!(body.message?.trim() || body.description?.trim()))
    return 'La descripción del proyecto es obligatoria.'
  return null
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Inténtalo de nuevo en un minuto.' },
        { status: 429 },
      )
    }

    const body: ContactBody = await request.json()

    // Honeypot check
    if (body._honeypot) {
      // Silently accept but don't send email
      return NextResponse.json({ success: true })
    }

    const error = validate(body)
    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    const name =
      body.name?.trim() ||
      [body.firstName?.trim(), body.lastName?.trim()].filter(Boolean).join(' ')
    const message = (body.message || body.description || '').trim()
    const source = body.source || 'Formulario de contacto'

    // Email to the team
    const { error: resendError } = await getResend().emails.send({
      from: 'Interiorista Barcelona <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL_TO!,
      replyTo: body.email.trim(),
      subject: `Nueva solicitud de ${name}`,
      html: `
        <h2>Nueva solicitud de contacto</h2>
        <p><strong>Origen:</strong> ${source}</p>
        <hr />
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Nombre</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${body.email.trim()}">${body.email.trim()}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold">Teléfono</td><td style="padding:8px"><a href="tel:${body.phone.trim()}">${body.phone.trim()}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold">Código postal</td><td style="padding:8px">${body.postalCode?.trim()}</td></tr>
          ${body.surface?.trim() ? `<tr><td style="padding:8px;font-weight:bold">Superficie</td><td style="padding:8px">${body.surface.trim()} m²</td></tr>` : ''}
          <tr><td style="padding:8px;font-weight:bold">Presupuesto</td><td style="padding:8px">${body.budget?.trim()}</td></tr>
          ${body.timeSlot?.trim() ? `<tr><td style="padding:8px;font-weight:bold">Franja horaria</td><td style="padding:8px">${body.timeSlot.trim()}</td></tr>` : ''}
        </table>
        <hr />
        <h3>Descripción del proyecto</h3>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    if (resendError) {
      console.error('Resend error:', resendError)
      return NextResponse.json(
        { error: 'Error al enviar el mensaje. Inténtalo de nuevo.' },
        { status: 500 },
      )
    }

    // Confirmation email to the client
    await getResend().emails.send({
      from: 'Interiorista Barcelona <onboarding@resend.dev>',
      to: body.email.trim(),
      subject: 'Hemos recibido tu solicitud — Interiorista Barcelona',
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#171717">¡Gracias por contactarnos, ${name}!</h2>
          <p style="color:#525252;line-height:1.6">
            Hemos recibido tu solicitud correctamente. Nuestro equipo de interioristas
            la revisará y se pondrá en contacto contigo en las próximas
            <strong>24-48 horas laborables</strong>.
          </p>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />
          <h3 style="color:#171717;font-size:14px">Resumen de tu solicitud</h3>
          <table style="border-collapse:collapse;width:100%;font-size:14px;color:#525252">
            <tr><td style="padding:6px 0;font-weight:bold">Presupuesto</td><td style="padding:6px 0">${body.budget?.trim()}</td></tr>
            ${body.surface?.trim() ? `<tr><td style="padding:6px 0;font-weight:bold">Superficie</td><td style="padding:6px 0">${body.surface.trim()} m²</td></tr>` : ''}
            <tr><td style="padding:6px 0;font-weight:bold">Código postal</td><td style="padding:6px 0">${body.postalCode?.trim()}</td></tr>
          </table>
          <p style="color:#525252;line-height:1.6;margin-top:16px">
            <strong>Tu proyecto:</strong><br />
            ${message.replace(/\n/g, '<br />')}
          </p>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0" />
          <p style="color:#a3a3a3;font-size:12px">
            Este email ha sido enviado automáticamente desde
            <a href="https://www.interiorista-barcelona.com" style="color:#a3a3a3">interiorista-barcelona.com</a>.
            No respondas directamente a este mensaje.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('Contact API error:', e)
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 },
    )
  }
}
