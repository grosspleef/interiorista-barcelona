import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { PricingBlock } from '@/components/PricingBlock'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { ProjectShowcase, type Project } from '@/components/ProjectShowcase'
import {
  TestimonialSlider,
  type TestimonialItem,
} from '@/components/TestimonialSlider'
import { FAQAccordion } from './faq-accordion'

const serviceProjects: Project[] = [
  {
    title: 'Terraza de ático en Eixample',
    description:
      '35 m², diseño mediterráneo con pérgola, jardineras de aromáticas y sistema de riego por goteo.',
    year: '2025',
    category: 'Terraza urbana',
  },
  {
    title: 'Jardín de masía en Sant Cugat',
    description:
      '400 m², restauración de jardín con piscina, olivos centenarios y zona de huerto.',
    year: '2024',
    category: 'Jardín residencial',
  },
  {
    title: 'Patio interior de finca modernista en Gràcia',
    description:
      '25 m², jardín vertical y fuente ornamental. Transformación de patio en desuso en oasis vegetal.',
    year: '2024',
    category: 'Patio interior',
  },
]

const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'Transformaron nuestra terraza de ático en un auténtico jardín mediterráneo. La selección de plantas aromáticas y el sistema de riego fueron perfectos para el clima de Barcelona. Ahora cenamos fuera cada noche.',
    client: 'Marta y Jordi P., terraza de ático en Eixample',
  },
  {
    quote:
      'El paisajista entendió exactamente lo que queríamos para el jardín de la masía: respetar los olivos centenarios e integrar una zona de huerto y piscina. El resultado es espectacular y de bajo mantenimiento.',
    client: 'Lluís R., jardín de masía en Sant Cugat',
  },
  {
    quote:
      "We wanted to create a green rooftop terrace in our Eixample building. The landscape designer selected drought-resistant plants and designed an irrigation system that works perfectly with Barcelona's climate. Absolutely love it.",
    client: 'Sarah M., rooftop terrace in Eixample',
  },
]

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

const faqItems = [
  {
    question:
      '¿Qué tipos de espacios exteriores se pueden diseñar en Barcelona?',
    schemaAnswer:
      'Terrazas de áticos, balcones, patios interiores de fincas, jardines de casas, rooftops, entornos de piscina, jardines comunitarios, huertos urbanos. También diseño vegetal de interiores: muros vegetales, jardineras de oficinas, jardines verticales. Para espacios comerciales, consulta nuestro servicio de interiorismo comercial.',
    answer: (
      <>
        <p>
          <strong className="font-semibold text-neutral-950">
            Terrazas de áticos
          </strong>
          , balcones, patios interiores de fincas, jardines de casas, rooftops,
          entornos de piscina, jardines comunitarios y huertos urbanos.
        </p>
        <p>
          También realizamos{' '}
          <strong className="font-semibold text-neutral-950">
            diseño vegetal de interiores
          </strong>
          : muros vegetales, jardineras de oficinas y jardines verticales.
        </p>
        <p>
          Para espacios comerciales, consulta nuestro{' '}
          <Link
            href="/interiorismo-comercial/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            servicio de interiorismo comercial
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question:
      '¿Cuál es la diferencia entre un paisajista, un jardinero y un arquitecto paisajista?',
    schemaAnswer:
      'El jardinero mantiene y planta. El paisajista diseña y coordina proyectos de espacios exteriores. El arquitecto paisajista tiene título universitario (Grado en Paisajismo, UPC) y puede firmar proyectos de gran escala. El colectivo reúne los tres perfiles para adaptarse a cada proyecto.',
    answer: (
      <>
        <p>
          El{' '}
          <strong className="font-semibold text-neutral-950">jardinero</strong>{' '}
          mantiene y planta. El{' '}
          <strong className="font-semibold text-neutral-950">paisajista</strong>{' '}
          diseña y coordina proyectos de espacios exteriores. El{' '}
          <strong className="font-semibold text-neutral-950">
            arquitecto paisajista
          </strong>{' '}
          tiene título universitario (Grado en Paisajismo, UPC) y puede firmar
          proyectos de gran escala.
        </p>
        <p>
          El colectivo reúne los tres perfiles para adaptarse a cada proyecto.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Qué plantas son las más adecuadas para el clima de Barcelona?',
    schemaAnswer:
      'Especies mediterráneas de bajo consumo hídrico: lavanda, romero, buganvilla, jazmín, olivo, cítricos, palmeras, aromáticas. El paisajista selecciona en función de la orientación, el viento y el tipo de suelo.',
    answer: (
      <>
        <p>
          Especies mediterráneas de bajo consumo hídrico:{' '}
          <strong className="font-semibold text-neutral-950">
            lavanda, romero, buganvilla, jazmín, olivo, cítricos, palmeras y
            aromáticas
          </strong>
          .
        </p>
        <p>
          El paisajista selecciona en función de la orientación, el viento y el
          tipo de suelo.
        </p>
      </>
    ),
  },
  {
    question: '¿Dónde intervenís como paisajistas?',
    schemaAnswer:
      "Barcelona ciudad (Eixample, Gràcia, Sarrià, Poblenou, Les Corts) y área metropolitana: Sant Cugat, Sabadell, Castelldefels, Sitges, Badalona, L'Hospitalet y alrededores. Contacta con nosotros para solicitar un presupuesto gratuito.",
    answer: (
      <>
        <p>
          <strong className="font-semibold text-neutral-950">
            Barcelona ciudad
          </strong>{' '}
          (Eixample, Gràcia, Sarrià, Poblenou, Les Corts) y área metropolitana:
          Sant Cugat, Sabadell, Castelldefels, Sitges, Badalona,
          L&apos;Hospitalet y alrededores.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Contacta con nosotros
          </Link>{' '}
          para solicitar un presupuesto gratuito.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Se puede instalar un jardín vertical o un muro vegetal en un piso?',
    schemaAnswer:
      'Sí. Los jardines verticales se adaptan a interiores y exteriores. El paisajista evalúa la luminosidad, la humedad y la estructura del soporte. Es una solución ideal para pisos sin terraza que quieren integrar vegetación.',
    answer: (
      <>
        <p>
          Sí. Los{' '}
          <strong className="font-semibold text-neutral-950">
            jardines verticales
          </strong>{' '}
          se adaptan a interiores y exteriores. El paisajista evalúa la
          luminosidad, la humedad y la estructura del soporte.
        </p>
        <p>
          Es una solución ideal para pisos sin terraza que quieren integrar
          vegetación.
        </p>
      </>
    ),
  },
  {
    question: '¿Podéis diseñar espacios exteriores para negocios?',
    schemaAnswer:
      'Sí: terrazas de restaurantes, patios de hoteles, halls vegetalizados, jardines de oficinas. Consulta nuestro servicio de interiorismo comercial para proyectos integrales.',
    answer: (
      <>
        <p>
          Sí:{' '}
          <strong className="font-semibold text-neutral-950">
            terrazas de restaurantes, patios de hoteles, halls vegetalizados,
            jardines de oficinas
          </strong>
          .
        </p>
        <p>
          Consulta nuestro{' '}
          <Link
            href="/interiorismo-comercial/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            servicio de interiorismo comercial
          </Link>{' '}
          para proyectos integrales.
        </p>
      </>
    ),
  },
]

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://www.interioristabarcelona.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Nuestros servicios',
          item: 'https://www.interioristabarcelona.com/servicios/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Paisajismo',
          item: 'https://www.interioristabarcelona.com/paisajismo/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id':
        'https://www.interioristabarcelona.com/paisajismo/#service',
      name: 'Paisajismo en Barcelona',
      description:
        'Servicio de paisajismo en Barcelona: diseño de jardines, terrazas, áticos y espacios exteriores mediterráneos. Paisajistas profesionales en Barcelona y alrededores.',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      serviceType: 'Paisajismo',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '45',
        unitText: 'por m²',
        description: 'Proyecto de paisajismo desde 45 €/m²',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        ratingCount: '3',
      },
    },
    {
      '@type': 'Organization',
      name: 'Interiorista Barcelona',
      url: 'https://www.interioristabarcelona.com',
      description:
        'Colectivo de interioristas y arquitectos de interior en Barcelona',
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
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.schemaAnswer,
        },
      })),
    },
    ...serviceTestimonials.map((t) => ({
      '@type': 'Review' as const,
      itemReviewed: {
        '@id':
          'https://www.interioristabarcelona.com/paisajismo/#service',
      },
      reviewRating: {
        '@type': 'Rating' as const,
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person' as const,
        name: t.client.split(',')[0],
      },
      reviewBody: t.quote,
    })),
    ...serviceProjects.map((p) => ({
      '@type': 'CreativeWork' as const,
      name: p.title,
      description: p.description,
      dateCreated: p.year,
      genre: p.category,
      creator: {
        '@type': 'Organization' as const,
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      locationCreated: {
        '@type': 'Place' as const,
        address: {
          '@type': 'PostalAddress' as const,
          addressLocality: 'Barcelona',
          addressCountry: 'ES',
        },
      },
    })),
  ],
}

export const metadata: Metadata = {
  title: 'Paisajismo en Barcelona | Diseño de jardines y terrazas 2026',
  description:
    'Paisajismo en Barcelona: diseño de jardines, terrazas, áticos y espacios exteriores mediterráneos. Presupuesto gratuito. Paisajistas profesionales en Barcelona y alrededores.',
}

export default function PaisajismoPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Nuestros servicios"
        title="Paisajismo en Barcelona"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Diseño de jardines, terrazas y espacios exteriores mediterráneos
        </p>
        <p className="mt-6">
          Los paisajistas del colectivo te acompañan en la concepción,
          realización y mantenimiento de espacios exteriores (jardines, terrazas,
          áticos, patios interiores, jardines comunitarios, rooftops, entornos de
          piscina) e interiores (diseño vegetal, muros vegetales) en Barcelona y
          alrededores.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. ¿Por qué contratar un paisajista en Barcelona? */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué contratar un paisajista en Barcelona?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Un paisajista profesional aporta una visión experta para transformar
          tus espacios exteriores, seleccionando las especies adecuadas al clima
          mediterráneo y optimizando cada metro cuadrado disponible.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Diseño adaptado al clima mediterráneo">
            Selección de especies resistentes a la sequía, gestión de la
            insolación intensa y protección contra el viento marino.
          </GridListItem>
          <GridListItem title="Optimización de espacios urbanos">
            Terrazas de áticos, balcones, patios interiores de fincas del
            Eixample, rooftops: maximizar cada metro cuadrado de exterior en la
            ciudad.
          </GridListItem>
          <GridListItem title="Selección vegetal experta">
            Plantas autóctonas y mediterráneas (lavanda, buganvilla, olivos,
            cítricos, aromáticas) que prosperan en Barcelona con bajo consumo de
            agua.
          </GridListItem>
          <GridListItem title="Integración con la arquitectura existente">
            Diseño que respeta y realza el estilo del inmueble (modernista,
            contemporáneo, masía catalana).
          </GridListItem>
          <GridListItem title="Sostenibilidad y eco-paisajismo">
            Técnicas inspiradas en la permacultura: materiales locales,
            reutilización, riego eficiente por goteo, respeto de la
            biodiversidad urbana.
          </GridListItem>
          <GridListItem title="Aumento del valor del inmueble">
            Un espacio exterior bien diseñado revaloriza tu vivienda y mejora tu
            calidad de vida en la ciudad.
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. Tu colaboración con un paisajista */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Tu colaboración con un paisajista en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          El paisajista te acompaña en cada etapa: analiza tu espacio exterior,
          diseña un proyecto adaptado al clima y a tu estilo de vida, y coordina
          la ejecución hasta la entrega final. Si el proyecto requiere obra
          estructural, un{' '}
          <Link
            href="/diseno-interiores/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            diseñador de interiores
          </Link>{' '}
          puede completar la intervención. Para jardines de masías catalanas,
          consulta nuestro servicio de{' '}
          <Link
            href="/reforma-masias/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            reforma de masías
          </Link>
          .
        </p>
      </SectionIntro>

      {/* 4. Proceso en 3 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Visita consejo y análisis del espacio"
          image={{ src: imageWhiteboard }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Desde la primera visita, el paisajista trabaja contigo en tu
              domicilio en Barcelona. Te escucha para comprender tus necesidades:
              zona de convivialidad, huerto urbano, zona de relax, zona
              infantil, piscina...
            </p>
            <p>
              Analiza el espacio existente:{' '}
              <strong className="font-semibold text-neutral-950">
                orientación solar, exposición al viento, naturaleza del suelo,
                vegetación existente
              </strong>{' '}
              y luminosidad (para espacios interiores).
            </p>
            <p>
              Realiza un diagnóstico completo identificando las{' '}
              <strong className="font-semibold text-neutral-950">
                fortalezas y problemáticas
              </strong>{' '}
              del lugar para definir las líneas directrices del proyecto
              paisajístico.
            </p>
          </div>
        </Section>

        <Section
          title="Proyecto de paisajismo"
          image={{ src: imageLaptop, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              El paisajista elabora una{' '}
              <strong className="font-semibold text-neutral-950">
                propuesta gráfica
              </strong>
              : bocetos, croquis, planos y visualizaciones 3D que definen la
              distribución del espacio, la selección de mobiliario exterior y las
              zonas de plantación.
            </p>
            <p>
              Prepara los{' '}
              <strong className="font-semibold text-neutral-950">
                detalles técnicos
              </strong>{' '}
              para la empresa de jardinería que ejecutará: selección de
              materiales, contenedores, mobiliario y diseño (interior o
              exterior). Posibilidad de mobiliario a medida (jardinera, fuente,
              mueble de exterior).
            </p>
            <p>
              Entrega una estimación del{' '}
              <strong className="font-semibold text-neutral-950">
                coste del proyecto
              </strong>{' '}
              con desglose por partidas.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Planos y bocetos">
              Croquis, planos de plantación y visualizaciones 3D del espacio.
            </ListItem>
            <ListItem title="Paleta vegetal">
              Selección de especies adaptadas al clima, orientación y tipo de
              suelo.
            </ListItem>
            <ListItem title="Presupuesto detallado">
              Desglose por partidas: plantas, materiales, mobiliario, riego y
              mano de obra.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Ejecución y coordinación"
          image={{ src: imageMeeting, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Tres modalidades de ejecución: el paisajista{' '}
              <strong className="font-semibold text-neutral-950">
                ejecuta directamente
              </strong>
              , supervisa a una empresa de jardinería, o te ofrece{' '}
              <strong className="font-semibold text-neutral-950">
                coaching para ejecución propia
              </strong>
              .
            </p>
            <p>
              Consulta de empresas, asistencia en selección de presupuestos y
              coordinación integral de la obra. Si el proyecto incluye un{' '}
              <Link
                href="/ampliacion-vivienda/"
                className="font-semibold text-neutral-950 underline hover:text-neutral-700"
              >
                cerramiento de terraza
              </Link>
              , el paisajista coordina con el arquitecto.
            </p>
            <p>
              <strong className="font-semibold text-neutral-950">
                Entrega con instrucciones de mantenimiento
              </strong>
              : calendario de riego, poda estacional, fertilización y cuidados
              específicos para cada especie.
            </p>
          </div>
        </Section>
      </div>

      {/* 5. Tarifas */}
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <PricingBlock
          id="tarifas-paisajismo"
          name="Tarifas de un paisajista en Barcelona"
          description="Servicio de paisajismo para viviendas y espacios exteriores en Barcelona. Desde la primera consulta hasta la entrega final con guía de mantenimiento."
          href="/contacto/"
          ctaLabel="Solicitar presupuesto gratuito"
          image={{ src: imageWhiteboard, shape: 0 }}
          showCounter={false}
          tiers={[
            {
              name: 'Consulta de paisajismo',
              price: '90 €/h',
              description:
                'Visita a domicilio para evaluar el espacio, estudiar orientación/suelo y definir el proyecto. Descontada del proyecto (2ª etapa).',
            },
            {
              name: 'Proyecto de paisajismo',
              price: 'Desde 45 €/m²',
              description:
                'Proyecto completo: planos, selección vegetal, materiales y presupuesto. ≤30 m²: desde 1.200 € · 31-100 m²: 55 €/m² · 101-300 m²: 50 €/m² · ≥301 m²: 45 €/m².',
              highlighted: true,
            },
            {
              name: 'Ejecución / supervisión',
              price: '9 % del presupuesto',
              description:
                'Coordinación de la obra, seguimiento del plantado y entrega con guía de mantenimiento.',
            },
          ]}
        />
      </div>

      {/* 6. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre paisajismo en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre nuestros servicios de
          paisajismo.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <FAQAccordion items={faqItems} />
        </FadeIn>
      </Container>

      {/* 7. Contact */}
      <ContactSection />

      {/* 8. Proyectos destacados */}
      <ProjectShowcase
        title="Proyectos de paisajismo en Barcelona"
        subtitle="Descubre algunos proyectos de paisajismo realizados por los miembros del colectivo."
        projects={serviceProjects}
      />

      {/* 9. Testimonios */}
      <TestimonialSlider
        className="mt-24 sm:mt-32 lg:mt-40"
        testimonials={serviceTestimonials}
      />
    </RootLayout>
  )
}
