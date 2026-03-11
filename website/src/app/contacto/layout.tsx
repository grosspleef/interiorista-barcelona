import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto — Interiorista Barcelona',
  description:
    'Contacta con nuestro equipo de interioristas en Barcelona. Presupuesto gratuito y sin compromiso para tu proyecto de interiorismo o reforma.',
  alternates: {
    canonical: '/contacto/',
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
