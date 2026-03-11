'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import imageContacto from '@/images/interiorismo-lujo-penthouse-paseo-de-gracia-barcelona.webp'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full rounded-xl border border-neutral-950 bg-white px-4 pt-8 pb-2 text-sm/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-4 -mt-3 origin-left text-sm/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
        {props.required && <span className="text-red-400"> *</span>}
      </label>
    </div>
  )
}

function TextAreaInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...props}
        placeholder=" "
        rows={3}
        className="peer block w-full rounded-xl border border-neutral-950 bg-white px-4 pt-8 pb-2 text-sm/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-4 left-4 origin-left text-sm/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-1.5 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
        {props.required && <span className="text-red-400"> *</span>}
      </label>
    </div>
  )
}

export function ContactSection() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'Formulario de página' }),
      })

      const json = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(json.error || 'Error al enviar el mensaje.')
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage('Error de conexión. Inténtalo de nuevo.')
    }
  }

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl border border-neutral-950 bg-white px-6 py-20 sm:mx-0 sm:py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-medium text-balance text-neutral-950 sm:text-4xl">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="mt-4 text-sm/6 text-neutral-950">
                Te agradecemos que compartas los detalles de tu proyecto a
                través del formulario a continuación. Al recibir tu solicitud,
                nos pondremos en contacto contigo para hablar de tu proyecto y
                proponerte una visita en el lugar de las obras.
              </p>

              {status === 'success' ? (
                <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                  <p className="font-display text-lg font-semibold text-green-900">
                    Solicitud enviada correctamente
                  </p>
                  <p className="mt-2 text-sm text-green-700">
                    Nos pondremos en contacto contigo en las próximas 24-48
                    horas.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm font-semibold text-green-700 underline"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form className="mt-8" onSubmit={handleSubmit}>
                  {/* Honeypot — hidden from users */}
                  <input
                    type="text"
                    name="_honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute h-0 w-0 overflow-hidden opacity-0"
                  />
                  <div className="isolate grid grid-cols-2 gap-3">
                    <TextInput
                      label="Nombre"
                      name="firstName"
                      autoComplete="given-name"
                      required
                    />
                    <TextInput
                      label="Apellido"
                      name="lastName"
                      autoComplete="family-name"
                      required
                    />
                    <TextInput
                      label="Email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                    />
                    <TextInput
                      label="Teléfono"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      required
                    />
                    <TextInput
                      label="Código postal"
                      name="postalCode"
                      autoComplete="postal-code"
                      required
                    />
                    <TextInput
                      label="Superficie (m²)"
                      name="surface"
                      type="text"
                      inputMode="numeric"
                    />
                    <div className="col-span-2">
                      <TextAreaInput
                        label="Descripción del proyecto"
                        name="description"
                        required
                      />
                    </div>
                    <TextInput
                      label="Presupuesto estimado"
                      name="budget"
                      required
                    />
                    <TextInput
                      label="Franja horaria preferida"
                      name="timeSlot"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
                  )}

                  <Button
                    type="submit"
                    className="mt-8"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading'
                      ? 'Enviando...'
                      : 'Enviar solicitud'}
                  </Button>
                </form>
              )}
            </div>
            <div className="relative hidden lg:block">
              <Image
                src={imageContacto}
                alt="Interior de un proyecto de diseño en Barcelona"
                className="h-full w-full rounded-3xl object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
