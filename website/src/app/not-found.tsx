import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

const quickLinks = [
  { label: 'Proyectos', href: '/proyectos/' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Quiénes somos', href: '/quienes-somos/' },
  { label: 'Precios', href: '/precios/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contacto', href: '/contacto/' },
]

const popularServices = [
  { label: 'Interiorismo', href: '/diseno-interiores/' },
  { label: 'Decoración', href: '/decoracion-interiores/' },
  { label: 'Reforma integral', href: '/reforma-integral/' },
  { label: 'Home staging', href: '/home-staging/' },
]

export default function NotFound() {
  return (
    <RootLayout>
      <Container className="flex min-h-[70vh] items-center pt-24 sm:pt-32 lg:pt-40">
        <FadeIn className="w-full max-w-2xl">
          <p className="font-display text-8xl font-semibold text-neutral-950 sm:text-9xl">
            404
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
            Página no encontrada
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Lo sentimos, la página que buscas no existe o ha sido trasladada.
          </p>

          <div className="mt-10 border-t border-neutral-200 pt-10">
            <h2 className="font-display text-base font-semibold text-neutral-950">
              Páginas principales
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition hover:text-neutral-950"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-neutral-200 pt-8">
            <h2 className="font-display text-base font-semibold text-neutral-950">
              Servicios populares
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {popularServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="inline-flex rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                  clipRule="evenodd"
                />
              </svg>
              Volver al inicio
            </Link>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
