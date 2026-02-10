import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { services } from '@/lib/services'
import type { Service } from '@/lib/services'

function ServiceCard({ service }: { service: Service }) {
  return (
    <FadeIn className="flex">
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
  )
}

export function ServicesGrid() {
  return (
    <>
      <SectionIntro
        eyebrow="Servicios"
        title="Soluciones integrales de interiorismo y arquitectura en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Nuestro colectivo cubre todas las disciplinas del diseño de interiores
          y la arquitectura: desde la decoración hasta la rehabilitación
          energética, pasando por el home staging y los proyectos comerciales.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
