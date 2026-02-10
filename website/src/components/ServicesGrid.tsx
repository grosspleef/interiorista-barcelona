import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'

const services = [
  {
    name: 'Interiorismo',
    description:
      'Diseño de interiores personalizado para hogares y espacios de vida únicos.',
    href: '/interiorista/',
  },
  {
    name: 'Reformas integrales',
    description:
      'Gestión completa de tu reforma, desde el diseño hasta la entrega de llaves.',
    href: '/reformas-integrales/',
  },
  {
    name: 'Arquitectura de interiores',
    description:
      'Transformación estructural de espacios con visión arquitectónica.',
    href: '/arquitecto-interiores/',
  },
  {
    name: 'Decoración',
    description:
      'Selección de mobiliario, textiles y acabados para dar vida a tu espacio.',
    href: '/decorador-interiores/',
  },
  {
    name: 'Home staging',
    description:
      'Preparación y puesta en escena de inmuebles para venta o alquiler.',
    href: '/home-staging/',
  },
  {
    name: 'Diseño comercial',
    description:
      'Interiorismo para restaurantes, oficinas, hoteles y locales comerciales.',
    href: '/diseno-comercial/',
  },
]

export function ServicesGrid() {
  return (
    <>
      <SectionIntro
        eyebrow="Servicios"
        title="Soluciones integrales de interiorismo en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Nuestro colectivo cubre todas las disciplinas del diseño de interiores,
          desde la reforma integral hasta la decoración y el home staging.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <FadeIn key={service.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={service.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <span className="font-display text-2xl font-semibold text-neutral-950">
                      {service.name}
                    </span>
                  </Link>
                </h3>
                <p className="mt-4 text-base text-neutral-600">
                  {service.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
