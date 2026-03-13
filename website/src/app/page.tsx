import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { LocalExpertise } from '@/components/LocalExpertise'
import { NeighborhoodsSection } from '@/components/NeighborhoodsSection'
import { LatestProjects } from '@/components/LatestProjects'
import { RootLayout } from '@/components/RootLayout'
import { ServicesGrid } from '@/components/ServicesGrid'
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
      'Como expatriados, nos daba miedo reformar en un país nuevo. Nuestra diseñadora hizo que todo el proceso fuera muy sencillo, desde los permisos hasta la decoración final. Estamos encantados con nuestro nuevo piso en el Born.',
    client: 'Sarah & Tom W., reforma de apartamento en el Born',
  },
]


export const metadata: Metadata = {
  description:
    'Colectivo de más de 25 interioristas y arquitectos en Barcelona. Interiorismo, decoración, home staging, interiorismo comercial y rehabilitación.',
  alternates: {
    canonical: '/',
  },
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
              'Colectivo de diseñadores de interiores y arquitectos en Barcelona',
            url: 'https://www.interiorista-barcelona.com',
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
              'Decoración',
              'Asesoramiento compra vivienda',
              'Compra sobre plano',
              'Home staging',
              'Interiorismo accesible',
              'Arquitecto',
              'Ampliación de vivienda',
              'Interiorismo comercial',
              'Reforma de oficinas',
              'Licitaciones de arquitectura',
              'Rehabilitación energética',
              'Reforma de masías',
              'Paisajismo',
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
            Más de 25 profesionales especializados en interiorismo,
            decoración, home staging, interiorismo comercial y rehabilitación.
          </p>
        </FadeIn>
      </Container>

      {/* 3. Barrios */}
      <NeighborhoodsSection />

      {/* 4. Servicios */}
      <ServicesGrid />

      {/* 5. Proyectos destacados */}
      <LatestProjects eyebrow="Proyectos" />

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
