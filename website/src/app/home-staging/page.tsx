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
import imageDiagnostico from '@/images/diagnostico-home-staging-piso-gracia-barcelona.jpg'
import imageSalonStaging from '@/images/home-staging-salon-eixample-barcelona.jpg'
import imageReportaje from '@/images/reportaje-fotografico-home-staging-born-barcelona.jpg'
import imageDormitorioPremium from '@/images/home-staging-dormitorio-premium-sarria-barcelona.jpg'
import {
  ProjectShowcase,
  type Project,
} from '@/components/ProjectShowcase'
import {
  TestimonialSlider,
  type TestimonialItem,
} from '@/components/TestimonialSlider'
import { FAQAccordion } from './faq-accordion'

const serviceProjects: Project[] = [
  {
    title: 'Home staging piso 3 habitaciones en Eixample',
    description:
      '95 m² preparado para venta: despersonalización, redistribución del mobiliario existente y styling completo. Vendido en 12 días al precio de salida.',
    year: '2025',
    category: 'Home staging residencial',
    image: imageSalonStaging,
  },
  {
    title: 'Staging apartamento turístico en El Born',
    description:
      '55 m² de staging para alquiler vacacional: mobiliario de alquiler, textiles mediterráneos y fotografía profesional. Ocupación +35 % respecto al trimestre anterior.',
    year: '2024',
    category: 'Staging alquiler',
    image: imageReportaje,
  },
  {
    title: 'Home staging ático en Sarrià',
    description:
      '140 m² con terraza: posicionamiento premium, mobiliario de diseño alquilado y reportaje fotográfico profesional. Vendido un 10 % por encima del precio inicial.',
    year: '2024',
    category: 'Home staging premium',
    image: imageDormitorioPremium,
  },
]

const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'Teníamos el piso en venta desde hacía 4 meses sin visitas. Después del home staging lo vendimos en 2 semanas al precio que queríamos. La inversión se recuperó con creces.',
    client: 'Ana y Marc R., venta de piso en Eixample',
  },
  {
    quote:
      'Como agente inmobiliario, recomiendo siempre el home staging a mis clientes vendedores. Los pisos preparados se venden más rápido y a mejor precio. El equipo de Interiorista Barcelona es de total confianza.',
    client: 'Carlos M., agente inmobiliario en Barcelona',
  },
  {
    quote:
      'Necesitábamos vender nuestro piso en Gràcia antes de mudarnos. El equipo de home staging lo transformó en solo dos días — parecía la portada de una revista. Se vendió en 10 días, por encima del precio de salida.',
    client: 'Emily & David W., venta de propiedad en Gràcia',
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
    question: '¿Cuánto cuesta hacer home staging en Barcelona?',
    schemaAnswer:
      'El precio del home staging en Barcelona depende del tamaño y estado del inmueble. La consulta inicial es gratuita. Un home staging residencial completo parte desde 990 €: pisos de hasta 60 m² desde 1.200 €, de 61 a 100 m² desde 1.800 € y de más de 101 m² desde 2.500 €. También ofrecemos staging virtual desde 150 € por estancia para pisos vacíos.',
    answer: (
      <>
        <p>
          El precio del home staging en Barcelona depende del{' '}
          <strong className="font-semibold text-neutral-950">
            tamaño y estado del inmueble
          </strong>
          . La consulta inicial es gratuita.
        </p>
        <p>
          Un home staging residencial completo parte desde 990&nbsp;€: pisos de
          hasta 60&nbsp;m² desde 1.200&nbsp;€, de 61 a 100&nbsp;m² desde
          1.800&nbsp;€ y de más de 101&nbsp;m² desde 2.500&nbsp;€.
        </p>
        <p>
          También ofrecemos{' '}
          <strong className="font-semibold text-neutral-950">
            staging virtual
          </strong>{' '}
          desde 150&nbsp;€ por estancia para pisos vacíos.
        </p>
      </>
    ),
  },
  {
    question: '¿Cuánto más rápido se vende un piso con home staging?',
    schemaAnswer:
      'Según estudios del mercado inmobiliario español, un inmueble con home staging profesional se vende de media un 50 % más rápido que sin preparación. Además, el precio final de venta puede ser entre un 5 y un 15 % superior, lo que compensa ampliamente la inversión en staging.',
    answer: (
      <>
        <p>
          Según estudios del mercado inmobiliario español, un inmueble con home
          staging profesional se vende de media un{' '}
          <strong className="font-semibold text-neutral-950">
            50&nbsp;% más rápido
          </strong>{' '}
          que sin preparación.
        </p>
        <p>
          Además, el precio final de venta puede ser entre un{' '}
          <strong className="font-semibold text-neutral-950">
            5 y un 15&nbsp;% superior
          </strong>
          , lo que compensa ampliamente la inversión en staging.
        </p>
      </>
    ),
  },
  {
    question: '¿Es lo mismo home staging que decoración de interiores?',
    schemaAnswer:
      'No. El home staging tiene como objetivo preparar un inmueble para la venta o el alquiler, creando un espacio neutro y atractivo para el mayor número de compradores posibles. La decoración de interiores, en cambio, se centra en personalizar un espacio según los gustos y el estilo de vida de quien lo habita. Son servicios complementarios pero con objetivos distintos.',
    answer: (
      <>
        <p>
          No. El home staging tiene como objetivo{' '}
          <strong className="font-semibold text-neutral-950">
            preparar un inmueble para la venta o el alquiler
          </strong>
          , creando un espacio neutro y atractivo para el mayor número de
          compradores posibles.
        </p>
        <p>
          La decoración de interiores, en cambio, se centra en{' '}
          <strong className="font-semibold text-neutral-950">
            personalizar un espacio
          </strong>{' '}
          según los gustos y el estilo de vida de quien lo habita. Son servicios
          complementarios pero con objetivos distintos.
        </p>
        <p>
          Descubre nuestro{' '}
          <Link
            href="/decoracion-interiores/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            servicio de decoración de interiores
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: '¿El home staging funciona también para alquileres?',
    schemaAnswer:
      'Sí, el home staging es especialmente eficaz en el mercado de alquiler de Barcelona, donde la competencia entre propiedades es alta. Un piso preparado con staging reduce el tiempo de vacancia y permite posicionar el precio de alquiler en el rango superior del mercado. Trabajamos tanto con alquileres de larga duración como con alquileres turísticos y de temporada.',
    answer: (
      <>
        <p>
          Sí, el home staging es especialmente eficaz en el{' '}
          <strong className="font-semibold text-neutral-950">
            mercado de alquiler de Barcelona
          </strong>
          , donde la competencia entre propiedades es alta.
        </p>
        <p>
          Un piso preparado con staging reduce el tiempo de vacancia y permite
          posicionar el precio de alquiler en el rango superior del mercado.
          Trabajamos tanto con alquileres de larga duración como con alquileres
          turísticos y de temporada.
        </p>
      </>
    ),
  },
  {
    question: '¿Dónde ofrecéis home staging en Barcelona?',
    schemaAnswer:
      'Nuestro servicio de home staging se realiza en Barcelona ciudad y en las principales ciudades del área metropolitana. Intervenimos en los principales barrios de Barcelona: Eixample, Gràcia, El Born, Sarrià, Poblenou, Les Corts, Sant Andreu y Sants-Montjuïc. También intervenimos en Sant Cugat, Sabadell, Castelldefels, Sitges, Badalona, L\'Hospitalet de Llobregat y alrededores. Contacta con nosotros para solicitar un presupuesto gratuito.',
    answer: (
      <>
        <p>
          Nuestro servicio de home staging se realiza en{' '}
          <strong className="font-semibold text-neutral-950">
            Barcelona ciudad
          </strong>{' '}
          y en las principales ciudades del área metropolitana.
        </p>
        <p>
          Intervenimos en los principales barrios de Barcelona: Eixample, Gràcia,
          El Born, Sarrià, Poblenou, Les Corts, Sant Andreu y Sants-Montjuïc.
        </p>
        <p>
          También intervenimos en Sant Cugat, Sabadell, Castelldefels, Sitges,
          Badalona, L&apos;Hospitalet de Llobregat y alrededores.
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
    question: '¿Se puede hacer staging en un piso vacío?',
    schemaAnswer:
      'Sí, para pisos vacíos ofrecemos dos opciones: staging virtual con renders fotorrealistas desde 150 € por estancia, ideal para portales inmobiliarios; o staging físico con mobiliario de alquiler, que permite crear ambientes reales para las visitas. Ambas opciones son muy efectivas para ayudar a los compradores a visualizar el potencial del espacio.',
    answer: (
      <>
        <p>
          Sí, para pisos vacíos ofrecemos dos opciones:{' '}
          <strong className="font-semibold text-neutral-950">
            staging virtual
          </strong>{' '}
          con renders fotorrealistas desde 150&nbsp;€ por estancia, ideal para
          portales inmobiliarios; o{' '}
          <strong className="font-semibold text-neutral-950">
            staging físico con mobiliario de alquiler
          </strong>
          , que permite crear ambientes reales para las visitas.
        </p>
        <p>
          Ambas opciones son muy efectivas para ayudar a los compradores a
          visualizar el potencial del espacio.
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
          name: 'Home staging',
          item: 'https://www.interioristabarcelona.com/home-staging/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id':
        'https://www.interioristabarcelona.com/home-staging/#service',
      name: 'Home staging en Barcelona',
      description:
        'Servicio profesional de home staging en Barcelona: preparación de inmuebles para venta o alquiler con puesta en escena, styling y fotografía profesional.',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      serviceType: 'Home staging',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '990',
        description: 'Home staging residencial desde 990 €',
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
          'https://www.interioristabarcelona.com/home-staging/#service',
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
  title: 'Home Staging en Barcelona | Vende tu Piso Más Rápido',
  description:
    'Servicio profesional de home staging en Barcelona. Preparamos tu piso para vender un 50 % más rápido y hasta un 15 % más caro. Presupuesto gratuito.',
}

export default function HomeStagingPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Nuestros servicios"
        title="Home Staging en Barcelona"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Vende tu piso más rápido y al mejor precio
        </p>
        <p className="mt-6">
          Desde 2006, los home stagers del colectivo preparan inmuebles para la
          venta y el alquiler en Barcelona y alrededores. Un piso con staging
          profesional se vende un 50&nbsp;% más rápido y hasta un 15&nbsp;% más
          caro — tanto en viviendas residenciales como en propiedades
          comerciales.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. ¿Por qué hacer home staging en Barcelona? */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué hacer home staging en Barcelona?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          En un mercado donde el precio medio supera los 5.000&nbsp;€/m² y el
          57&nbsp;% de los agentes inmobiliarios ya recurre al staging, preparar
          tu inmueble no es un gasto — es la inversión con mayor retorno antes
          de vender.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Venta más rápida">
            Los inmuebles con home staging profesional se venden de media un
            50&nbsp;% más rápido. Menos tiempo en el mercado significa menos
            gastos de mantenimiento y menos negociación a la baja.
          </GridListItem>
          <GridListItem title="Mayor precio de venta">
            El precio final es entre un 5 y un 15&nbsp;% superior, lo que
            compensa la inversión en staging entre 3 y 6 veces.
          </GridListItem>
          <GridListItem title="Primera impresión en portales">
            En Idealista y Fotocasa, las fotos profesionales de un piso
            preparado atraen hasta 3 veces más visitas que un anuncio estándar.
          </GridListItem>
          <GridListItem title="Despersonalización estratégica">
            Un staging neutro y cuidado ayuda a los compradores a proyectarse en
            el espacio, eliminando elementos personales que pueden frenar la
            decisión de compra.
          </GridListItem>
          <GridListItem title="Optimización del espacio">
            La reorganización profesional del mobiliario hace que los pisos
            pequeños típicos de Barcelona parezcan más amplios y funcionales.
          </GridListItem>
          <GridListItem title="Asesoramiento integral">
            Desde el decluttering inicial hasta el reportaje fotográfico final,
            te acompañamos en cada paso del proceso de preparación.
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. Tu colaboración con un home stager profesional */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Tu colaboración con un home stager profesional"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          El home stager trabaja contigo para entender tu inmueble, identificar
          el perfil de comprador objetivo y crear una puesta en escena que genere
          una conexión emocional inmediata. Cada detalle — desde la distribución
          del mobiliario hasta la iluminación — se diseña para maximizar el
          atractivo del espacio en el mercado de Barcelona.
        </p>
      </SectionIntro>

      {/* 4. Proceso en 3 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Diagnóstico y plan de staging"
          image={{ src: imageDiagnostico }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Visita al inmueble para evaluar su estado actual y definir el{' '}
              <strong className="font-semibold text-neutral-950">
                perfil de comprador objetivo
              </strong>
              . Analizamos el mercado de la zona, los pisos competidores y el
              posicionamiento de precio.
            </p>
            <p>
              Recomendaciones de{' '}
              <strong className="font-semibold text-neutral-950">
                decluttering y despersonalización
              </strong>
              : qué retirar, qué reorganizar y qué pequeñas reparaciones
              conviene hacer antes del staging.
            </p>
            <p>
              Entrega de un plan de staging detallado con presupuesto cerrado,
              cronograma de ejecución y previsión de retorno sobre la inversión.
            </p>
          </div>
        </Section>

        <Section
          title="Puesta en escena del inmueble"
          image={{ src: imageSalonStaging, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Selección y colocación del mobiliario —{' '}
              <strong className="font-semibold text-neutral-950">
                aprovechando el existente y completando con piezas de alquiler
              </strong>{' '}
              — para crear ambientes atractivos y funcionales.
            </p>
            <p>
              Styling con textiles, accesorios e iluminación diseñado para
              transmitir una{' '}
              <strong className="font-semibold text-neutral-950">
                atmósfera aspiracional
              </strong>{' '}
              que conecte con el comprador objetivo.
            </p>
            <p>
              Optimización de cada estancia para que las fotografías reflejen el
              máximo potencial del espacio.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Mobiliario">
              Redistribución del existente y aporte de piezas de alquiler.
            </ListItem>
            <ListItem title="Textiles e iluminación">
              Ropa de cama, cortinas, cojines y puntos de luz estratégicos.
            </ListItem>
            <ListItem title="Detalles decorativos">
              Plantas, arte, libros y accesorios para dar vida al espacio.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Reportaje fotográfico y entrega"
          image={{ src: imageReportaje, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              <strong className="font-semibold text-neutral-950">
                Reportaje fotográfico profesional
              </strong>{' '}
              optimizado para portales inmobiliarios (Idealista, Fotocasa) y
              redes sociales del agente.
            </p>
            <p>
              Revisión final del inmueble con el propietario o agente para
              asegurar que todo está listo para las visitas de compradores
              potenciales.
            </p>
            <p>
              Para pisos vacíos, ofrecemos también{' '}
              <strong className="font-semibold text-neutral-950">
                staging virtual
              </strong>
              : renders fotorrealistas que permiten amueblar digitalmente cada
              estancia a una fracción del coste del staging físico.
            </p>
          </div>
        </Section>

      {/* 5. Tarifas */}
      <PricingBlock
        id="tarifas-home-staging"
        name="Tarifas de home staging"
        description="Servicio profesional de home staging para inmuebles en venta o alquiler en Barcelona. Desde la consulta gratuita hasta el reportaje fotográfico final."
        href="/contacto/"
        ctaLabel="Solicitar presupuesto gratuito"
        image={{ src: imageDormitorioPremium, shape: 0 }}
        showCounter={false}
        tiers={[
          {
            name: 'Consulta inicial',
            price: 'Gratuita',
            description:
              'Primera visita al inmueble para evaluar su estado, analizar el mercado de la zona y definir la estrategia de staging.',
          },
          {
            name: 'Home staging residencial',
            price: 'Desde 990 €',
            description:
              'Staging completo: diagnóstico, plan de acción, puesta en escena con mobiliario y accesorios, y reportaje fotográfico profesional. Pisos ≤60 m²: 1.200 € · 61-100 m²: 1.800 € · ≥101 m²: desde 2.500 €.',
            highlighted: true,
          },
          {
            name: 'Staging virtual',
            price: 'Desde 150 €/estancia',
            description:
              'Puesta en escena digital para pisos vacíos: renders fotorrealistas para portales inmobiliarios.',
          },
        ]}
      />
      </div>

      {/* 6. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre home staging en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre nuestro servicio de
          home staging.
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
        title="Proyectos de home staging en Barcelona"
        subtitle="Descubre algunos proyectos de home staging realizados por los miembros del colectivo."
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
