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
      subject: `🏠 Nueva solicitud — ${name} (${body.postalCode?.trim()})`,
      html: `
        <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;max-width:640px;margin:0 auto;background-color:#ffffff">
          <!-- Header -->
          <div style="background-color:#171717;padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:#ffffff;font-size:20px;font-weight:600;margin:0">Nueva solicitud de contacto</h1>
            <p style="color:#a3a3a3;font-size:13px;margin:6px 0 0">Origen: ${source} · ${new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
          </div>

          <!-- Client info -->
          <div style="padding:24px 32px;border:1px solid #e5e5e5;border-top:none">
            <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#a3a3a3;margin:0 0 16px">Datos del cliente</h2>
            <table style="border-collapse:collapse;width:100%;font-size:14px;color:#171717">
              <tr>
                <td style="padding:10px 12px;font-weight:600;background:#fafafa;border:1px solid #f0f0f0;width:35%">Nombre</td>
                <td style="padding:10px 12px;border:1px solid #f0f0f0">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-weight:600;background:#fafafa;border:1px solid #f0f0f0">Email</td>
                <td style="padding:10px 12px;border:1px solid #f0f0f0"><a href="mailto:${body.email.trim()}" style="color:#2563eb;text-decoration:none">${body.email.trim()}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-weight:600;background:#fafafa;border:1px solid #f0f0f0">Teléfono</td>
                <td style="padding:10px 12px;border:1px solid #f0f0f0"><a href="tel:${body.phone.trim()}" style="color:#2563eb;text-decoration:none">${body.phone.trim()}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-weight:600;background:#fafafa;border:1px solid #f0f0f0">Código postal</td>
                <td style="padding:10px 12px;border:1px solid #f0f0f0">${body.postalCode?.trim()}</td>
              </tr>
            </table>

            <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#a3a3a3;margin:24px 0 16px">Detalles del proyecto</h2>
            <table style="border-collapse:collapse;width:100%;font-size:14px;color:#171717">
              <tr>
                <td style="padding:10px 12px;font-weight:600;background:#fafafa;border:1px solid #f0f0f0;width:35%">Presupuesto</td>
                <td style="padding:10px 12px;border:1px solid #f0f0f0">${body.budget?.trim()}</td>
              </tr>
              ${body.surface?.trim() ? `<tr><td style="padding:10px 12px;font-weight:600;background:#fafafa;border:1px solid #f0f0f0">Superficie</td><td style="padding:10px 12px;border:1px solid #f0f0f0">${body.surface.trim()} m²</td></tr>` : ''}
              ${body.timeSlot?.trim() ? `<tr><td style="padding:10px 12px;font-weight:600;background:#fafafa;border:1px solid #f0f0f0">Franja horaria</td><td style="padding:10px 12px;border:1px solid #f0f0f0">${body.timeSlot.trim()}</td></tr>` : ''}
            </table>

            <div style="margin-top:24px;padding:16px;background:#fafafa;border-radius:8px;border:1px solid #f0f0f0">
              <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#a3a3a3;margin:0 0 8px">Descripción</h3>
              <p style="color:#171717;font-size:14px;line-height:1.6;margin:0">${message.replace(/\n/g, '<br />')}</p>
            </div>
          </div>

          <!-- Quick actions -->
          <div style="padding:20px 32px;background:#fafafa;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 12px 12px;text-align:center">
            <a href="mailto:${body.email.trim()}" style="display:inline-block;padding:10px 24px;background:#171717;color:#ffffff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600">Responder al cliente</a>
            <a href="tel:${body.phone.trim()}" style="display:inline-block;padding:10px 24px;background:#ffffff;color:#171717;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;border:1px solid #d4d4d4;margin-left:8px">Llamar</a>
          </div>
        </div>
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
        <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;background-color:#ffffff">
          <!-- Header -->
          <div style="background-color:#171717;padding:32px;border-radius:12px 12px 0 0;text-align:center">
            <h1 style="color:#ffffff;font-size:22px;font-weight:600;margin:0;letter-spacing:-0.3px">Interiorista Barcelona</h1>
          </div>

          <!-- Main content -->
          <div style="padding:32px;border:1px solid #e5e5e5;border-top:none">
            <h2 style="color:#171717;font-size:20px;font-weight:600;margin:0 0 8px">¡Gracias por contactarnos, ${name}!</h2>
            <p style="color:#525252;font-size:15px;line-height:1.7;margin:0 0 24px">
              Hemos recibido tu solicitud correctamente. Nuestro equipo de interioristas
              la revisará y <strong>nos pondremos en contacto contigo muy pronto</strong>
              para hablar de tu proyecto y proponerte una visita.
            </p>

            <!-- Summary box -->
            <div style="background:#fafafa;border-radius:10px;border:1px solid #f0f0f0;padding:20px;margin-bottom:24px">
              <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#a3a3a3;margin:0 0 14px">Resumen de tu solicitud</h3>
              <table style="border-collapse:collapse;width:100%;font-size:14px;color:#171717">
                <tr>
                  <td style="padding:8px 0;font-weight:600;color:#525252;width:40%">Presupuesto</td>
                  <td style="padding:8px 0">${body.budget?.trim()}</td>
                </tr>
                ${body.surface?.trim() ? `<tr><td style="padding:8px 0;font-weight:600;color:#525252">Superficie</td><td style="padding:8px 0">${body.surface.trim()} m²</td></tr>` : ''}
                <tr>
                  <td style="padding:8px 0;font-weight:600;color:#525252">Código postal</td>
                  <td style="padding:8px 0">${body.postalCode?.trim()}</td>
                </tr>
              </table>
            </div>

            <!-- Project description -->
            <div style="background:#fafafa;border-radius:10px;border:1px solid #f0f0f0;padding:20px;margin-bottom:24px">
              <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#a3a3a3;margin:0 0 10px">Tu proyecto</h3>
              <p style="color:#171717;font-size:14px;line-height:1.6;margin:0">${message.replace(/\n/g, '<br />')}</p>
            </div>

            <!-- Next steps -->
            <div style="background:#f0fdf4;border-radius:10px;border:1px solid #bbf7d0;padding:20px">
              <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#15803d;margin:0 0 10px">Próximos pasos</h3>
              <ol style="color:#166534;font-size:14px;line-height:1.7;margin:0;padding-left:18px">
                <li>Nuestro equipo analizará tu solicitud</li>
                <li>Te contactaremos para una primera conversación</li>
                <li>Programaremos una visita al lugar del proyecto</li>
              </ol>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding:20px 32px;background:#fafafa;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 12px 12px;text-align:center">
            <p style="color:#a3a3a3;font-size:12px;margin:0 0 8px">
              ¿Tienes alguna pregunta? Contáctanos en
              <a href="mailto:info@interiorista-barcelona.com" style="color:#525252;text-decoration:underline">info@interiorista-barcelona.com</a>
            </p>
            <p style="color:#d4d4d4;font-size:11px;margin:0">
              <a href="https://www.interiorista-barcelona.com" style="color:#d4d4d4;text-decoration:none">interiorista-barcelona.com</a>
              · Barcelona, España
            </p>
          </div>
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
