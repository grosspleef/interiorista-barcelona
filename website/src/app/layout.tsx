import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.interioristabarcelona.com'),
  title: {
    template: '%s - Interiorista Barcelona',
    default:
      'Interiorista Barcelona - Colectivo de diseñadores de interiores y arquitectos en Barcelona',
  },
  description:
    'Colectivo de más de 25 diseñadores de interiores y arquitectos en Barcelona. Diseño de interiores, decoración, home staging, interiorismo comercial y rehabilitación.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Interiorista Barcelona',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Interiorista Barcelona — Colectivo de diseñadores de interiores',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
