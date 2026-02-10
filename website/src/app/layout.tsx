import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Interiorista Barcelona',
    default:
      'Interiorista Barcelona - Colectivo de interioristas y arquitectos de interior en Barcelona',
  },
  description:
    'Colectivo de más de 25 interioristas y arquitectos en Barcelona. Interiorismo, decoración, home staging, interiorismo comercial y rehabilitación.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
