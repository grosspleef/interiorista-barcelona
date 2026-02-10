import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { LocalExpertise } from '@/components/LocalExpertise'
import { NeighborhoodsSection } from '@/components/NeighborhoodsSection'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { ServicesGrid } from '@/components/ServicesGrid'
import { StatList, StatListItem } from '@/components/StatList'
import { TestimonialSlider } from '@/components/TestimonialSlider'

const testimonials = [
  {
    quote:
      'Encontrar al interiorista adecuado para nuestra reforma fue fácil gracias a este colectivo. El resultado superó todas nuestras expectativas y el proceso fue totalmente transparente.',
    client: 'María L., propietaria en Eixample',
  },
  {
    quote:
      'Nos ayudaron a transformar nuestro piso en Gràcia con un presupuesto ajustado. El interiorista entendió perfectamente lo que buscábamos y nos guió en cada decisión.',
    client: 'Jordi P., reforma integral en Gràcia',
  },
  {
    quote:
      'As expats, we were nervous about renovating in a new country. Our designer made the whole process seamless — from permits to final styling. We love our new apartment in Born.',
    client: 'Sarah & Tom W., apartamento en el Born',
  },
]

const projects = [
  {
    title: 'Reforma integral piso Eixample',
    description:
      'Transformación completa de un piso de 120m² en el Eixample, combinando elementos modernistas con diseño contemporáneo.',
    year: '2024',
    category: 'Reforma integral',
  },
  {
    title: 'Diseño restaurante Born',
    description:
      'Interiorismo completo para un restaurante de cocina mediterránea en el corazón del Born.',
    year: '2024',
    category: 'Diseño comercial',
  },
  {
    title: 'Ático contemporáneo Sarrià',
    description:
      'Diseño de interiores para un ático de lujo con vistas panorámicas en Sarrià-Sant Gervasi.',
    year: '2023',
    category: 'Interiorismo',
  },
]

export const metadata: Metadata = {
  description:
    'Colectivo de más de 25 interioristas y arquitectos de interior en Barcelona. Interiorismo, reformas integrales, decoración y diseño de espacios comerciales.',
}

export default function Home() {
  return (
    <RootLayout>
      {/* Schema.org Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Interiorista Barcelona',
            description:
              'Colectivo de interioristas y arquitectos de interior en Barcelona',
            url: 'https://www.interioristabarcelona.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Carrer de Mallorca, 237',
              addressLocality: 'Barcelona',
              postalCode: '08008',
              addressCountry: 'ES',
            },
            areaServed: {
              '@type': 'City',
              name: 'Barcelona',
            },
            knowsAbout: [
              'Interiorismo',
              'Reformas integrales',
              'Arquitectura de interiores',
              'Decoración',
              'Home staging',
              'Diseño comercial',
            ],
          }),
        }}
      />

      {/* 1. Hero */}
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Tu colectivo de interioristas en Barcelona.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Más de 25 profesionales especializados en interiorismo, reformas
            integrales, decoración y arquitectura de interiores.
          </p>
          <div className="mt-8">
            <Button href="/contacto/">Pedir presupuesto</Button>
          </div>
        </FadeIn>
      </Container>

      {/* 2. Stats */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <StatList>
          <StatListItem value="25+" label="Profesionales" />
          <StatListItem value="150+" label="Proyectos" />
          <StatListItem value="12+" label="Barrios" />
          <StatListItem value="15" label="Años experiencia media" />
        </StatList>
      </Container>

      {/* 3. Barrios */}
      <NeighborhoodsSection />

      {/* 4. Servicios */}
      <ServicesGrid />

      {/* 5. Proyectos destacados */}
      <SectionIntro
        eyebrow="Proyectos"
        title="Nuestros últimos proyectos de interiorismo"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Descubre una selección de proyectos realizados por los miembros de
          nuestro colectivo en Barcelona.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeIn key={project.title} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <p className="flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={project.year} className="font-semibold">
                    {project.year}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{project.category}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {project.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {project.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      {/* 5b. Expertise locale SEO */}
      <LocalExpertise />

      {/* 6. Testimonials */}
      <TestimonialSlider
        className="mt-24 sm:mt-32 lg:mt-40"
        testimonials={testimonials}
      />

      {/* 7. Contact */}
      <ContactSection />
    </RootLayout>
  )
}
