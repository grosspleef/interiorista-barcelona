import { useId } from 'react'
import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { RootLayout } from '@/components/RootLayout'
import imageMeeting from '@/images/meeting.jpg'

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
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
        {props.required && <span className="text-red-400"> *</span>}
      </label>
    </div>
  )
}

function ContactForm() {
  return (
    <FadeIn>
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Solicita tu presupuesto
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nombre" name="name" autoComplete="name" required />
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
          <TextInput label="Superficie (m²)" name="surface" />
          <TextInput label="Presupuesto estimado" name="budget" required />
          <TextInput label="Descripción del proyecto" name="message" required />
        </div>
        <Button type="submit" className="mt-10">
          Enviar solicitud
        </Button>
      </form>
    </FadeIn>
  )
}


export const metadata: Metadata = {
  title: 'Contacto — Interiorista Barcelona',
  description:
    'Contacta con nuestro equipo de interioristas en Barcelona. Presupuesto gratuito y sin compromiso para tu proyecto de interiorismo o reforma.',
}

export default function Contacto() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contacto" title="Hablemos de tu proyecto">
        <p>
          Le agradecemos que nos haga llegar su solicitud a través del
          formulario a continuación. Al recibir su mensaje, nos pondremos en
          contacto con usted para hablar de su proyecto y proponerle una cita
          en el lugar de las obras.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <FadeIn className="flex items-center justify-center">
            <StylizedImage
              src={imageMeeting}
              shape={1}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center"
            />
          </FadeIn>
        </div>
      </Container>
    </RootLayout>
  )
}
