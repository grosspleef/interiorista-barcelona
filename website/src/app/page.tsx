import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { LocalExpertise } from '@/components/LocalExpertise'
import { NeighborhoodsSection } from '@/components/NeighborhoodsSection'
import { ProjectShowcase } from '@/components/ProjectShowcase'
import { RootLayout } from '@/components/RootLayout'
import { ServicesGrid } from '@/components/ServicesGrid'
import { StatList, StatListItem } from '@/components/StatList'
import { TestimonialSlider } from '@/components/TestimonialSlider'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

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

const projects = [
  {
    title: 'Reforma integral piso Eixample',
    description:
      'Transformación completa de un piso de 120m² en el Eixample, combinando elementos modernistas con diseño contemporáneo.',
    year: '2024',
    category: 'Interiorismo',
    image: imageLaptop,
  },
  {
    title: 'Diseño restaurante Born',
    description:
      'Interiorismo completo para un restaurante de cocina mediterránea en el corazón del Born.',
    year: '2024',
    category: 'Interiorismo comercial',
    image: imageMeeting,
  },
  {
    title: 'Ático contemporáneo Sarrià',
    description:
      'Diseño de interiores para un ático de lujo con vistas panorámicas en Sarrià-Sant Gervasi.',
    year: '2023',
    category: 'Decoración de interiores',
    image: imageWhiteboard,
  },
]

export const metadata: Metadata = {
  description:
    'Colectivo de más de 25 interioristas y arquitectos en Barcelona. Interiorismo, decoración, home staging, interiorismo comercial y rehabilitación.',
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
      <ProjectShowcase
        eyebrow="Proyectos"
        title="Nuestros últimos proyectos de interiorismo"
        subtitle="Descubre una selección de proyectos realizados por los miembros de nuestro colectivo en Barcelona."
        projects={projects}
      />

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
