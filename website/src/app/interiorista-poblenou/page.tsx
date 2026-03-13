import { type Metadata } from 'next'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { LatestProjects } from '@/components/LatestProjects'
import { FAQAccordion } from './faq-accordion'

const faqItems = [
  {
    question: '¿Cuánto cuesta reformar un loft en Poblenou?',
    schemaAnswer:
      'El coste de reformar un loft en Poblenou oscila entre 900 y 1.600 €/m². Los espacios suelen ser amplios (80-200 m²) y cuentan con instalaciones industriales que requieren adaptación: cableado eléctrico industrial, conducciones de agua antiguas y sistemas de ventilación sobredimensionados. Para un loft típico, el presupuesto total se sitúa entre 72.000 y 320.000 €. Solicita un presupuesto personalizado y gratuito.',
    answer: (
      <>
        <p>
          El coste de reformar un loft en Poblenou oscila entre{' '}
          <strong className="font-semibold text-neutral-950">
            900 y 1.600&nbsp;€/m²
          </strong>
          . Los espacios suelen ser amplios (80-200&nbsp;m²) y cuentan con
          instalaciones industriales que requieren adaptación: cableado eléctrico
          industrial, conducciones de agua antiguas y sistemas de ventilación
          sobredimensionados.
        </p>
        <p>
          Para un loft típico, el presupuesto total se sitúa entre{' '}
          <strong className="font-semibold text-neutral-950">
            72.000 y 320.000&nbsp;€
          </strong>
          .
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Solicita un presupuesto personalizado
          </Link>{' '}
          y gratuito.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Se puede convertir un local industrial en vivienda en Poblenou?',
    schemaAnswer:
      'Sí, el cambio de uso de local industrial a vivienda es posible en Poblenou, pero requiere obtener la cédula de habitabilidad. El espacio debe cumplir la normativa vigente de ventilación, luz natural, superficie mínima por estancia y accesibilidad. Es necesario tramitar el cambio de uso ante el Ajuntament de Barcelona, lo que implica un proyecto técnico visado y licencia urbanística. Nuestros interioristas y arquitectos gestionan todo el proceso.',
    answer: (
      <>
        <p>
          Sí, el{' '}
          <strong className="font-semibold text-neutral-950">
            cambio de uso de local industrial a vivienda
          </strong>{' '}
          es posible en Poblenou, pero requiere obtener la{' '}
          <strong className="font-semibold text-neutral-950">
            cédula de habitabilidad
          </strong>
          .
        </p>
        <p>
          El espacio debe cumplir la normativa vigente de ventilación, luz
          natural, superficie mínima por estancia y accesibilidad. Es necesario
          tramitar el cambio de uso ante el Ajuntament de Barcelona, lo que
          implica un proyecto técnico visado y licencia urbanística.
        </p>
        <p>
          Nuestros interioristas y arquitectos gestionan todo el proceso.
        </p>
      </>
    ),
  },
  {
    question: '¿Cómo conservar el carácter industrial en una reforma?',
    schemaAnswer:
      'El carácter industrial se conserva manteniendo elementos estructurales originales: vigas metálicas vistas, muros de ladrillo expuesto, suelos de hormigón pulido y grandes ventanales industriales. Es clave respetar las proporciones del espacio original, las dobles alturas y la entrada de luz natural. Nuestro enfoque combina estos elementos brutos con mobiliario contemporáneo, creando un contraste entre lo industrial y lo refinado.',
    answer: (
      <>
        <p>
          El carácter industrial se conserva manteniendo elementos estructurales
          originales:{' '}
          <strong className="font-semibold text-neutral-950">
            vigas metálicas vistas
          </strong>
          , muros de{' '}
          <strong className="font-semibold text-neutral-950">
            ladrillo expuesto
          </strong>
          , suelos de{' '}
          <strong className="font-semibold text-neutral-950">
            hormigón pulido
          </strong>{' '}
          y grandes ventanales industriales.
        </p>
        <p>
          Es clave respetar las proporciones del espacio original, las dobles
          alturas y la entrada de luz natural. Nuestro enfoque combina estos
          elementos brutos con mobiliario contemporáneo, creando un contraste
          entre lo industrial y lo refinado.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Poblenou es buena zona para invertir en un local comercial?',
    schemaAnswer:
      'Sí, Poblenou es una de las zonas con mayor proyección de Barcelona. El distrito @22, aprobado en el año 2000, ha transformado el barrio en un polo de innovación tecnológica con startups, coworkings y empresas digitales. La Rambla del Poblenou es el eje comercial principal con una oferta gastronómica emergente. La proximidad a la playa y la llegada de nuevos residentes jóvenes y creativos impulsan la demanda de restaurantes, cafeterías, galerías y estudios creativos.',
    answer: (
      <>
        <p>
          Sí, Poblenou es una de las zonas con{' '}
          <strong className="font-semibold text-neutral-950">
            mayor proyección de Barcelona
          </strong>
          . El{' '}
          <strong className="font-semibold text-neutral-950">
            distrito @22
          </strong>
          , aprobado en el año 2000, ha transformado el barrio en un polo de
          innovación tecnológica con startups, coworkings y empresas digitales.
        </p>
        <p>
          La Rambla del Poblenou es el eje comercial principal con una oferta
          gastronómica emergente. La proximidad a la playa y la llegada de nuevos
          residentes jóvenes y creativos impulsan la demanda de restaurantes,
          cafeterías, galerías y estudios creativos.
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
          name: 'Interiorista Poblenou',
          item: 'https://www.interioristabarcelona.com/interiorista-poblenou/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'Interiorista Barcelona — Poblenou',
      url: 'https://www.interioristabarcelona.com/interiorista-poblenou/',
      description:
        'Interioristas en Poblenou, Barcelona. Reconversión de espacios industriales en lofts, diseño de oficinas y locales comerciales en el distrito @22.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rambla del Poblenou, 130',
        addressLocality: 'Barcelona',
        postalCode: '08018',
        addressCountry: 'ES',
      },
      areaServed: {
        '@type': 'Neighborhood',
        name: 'Poblenou, Barcelona',
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
  ],
}

export const metadata: Metadata = {
  title: 'Interiorista en Poblenou | Diseño de Interiores Poblenou Barcelona',
  description:
    'Interioristas en Poblenou, Barcelona. Reconversión de espacios industriales en lofts, diseño de oficinas y locales comerciales en el distrito @22. Presupuesto gratuito.',
  alternates: {
    canonical: '/interiorista-poblenou/',
  },
}

export default function InterioristaPoblenou() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Interiorismo en Poblenou"
        title="Tu interiorista en Poblenou"
      >
        <p>
          Nuestros interioristas están especializados en la reconversión de
          espacios industriales en Poblenou. Transformamos antiguas fábricas y
          naves en lofts, oficinas creativas y locales comerciales, conservando
          el carácter industrial que define este barrio en plena transformación.
        </p>
      </PageIntro>

      {/* 2. Contexto arquitectónico de Poblenou */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Poblenou: del Manchester catalán al distrito de la innovación
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              Poblenou fue el corazón industrial de Barcelona durante los siglos
              XIX y XX, conocido como el{' '}
              <strong className="font-semibold text-neutral-950">
                Manchester catalán
              </strong>{' '}
              por su concentración de fábricas textiles, almacenes y naves
              industriales. Este patrimonio industrial ha dejado un legado
              arquitectónico único: edificios de ladrillo visto con grandes
              ventanales, estructuras metálicas a la vista, techos de doble
              altura y espacios diáfanos de proporciones generosas.
            </p>
            <p>
              Con la aprobación del{' '}
              <strong className="font-semibold text-neutral-950">
                plan urbanístico 22@
              </strong>{' '}
              en el año 2000, Poblenou inició una transformación profunda. Las
              antiguas fábricas conviven hoy con obra nueva, y el barrio se ha
              convertido en un polo de{' '}
              <strong className="font-semibold text-neutral-950">
                innovación tecnológica y creatividad
              </strong>
              : startups, estudios de diseño, coworkings y empresas digitales se
              instalan en espacios que antes albergaban telares y calderas.
            </p>
            <p>
              La Rambla del Poblenou vertebra la vida comercial del barrio, con
              terrazas, restaurantes y pequeños comercios de proximidad. La
              cercanía a la playa, los parques urbanos y la comunidad joven y
              creativa que lo habita hacen de Poblenou uno de los barrios más
              atractivos y dinámicos de Barcelona para vivir y trabajar.
            </p>
          </div>

          <h2 className="mt-16 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Diseño interior con ADN industrial
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              El patrimonio industrial de Poblenou no es un obstáculo, sino una{' '}
              <strong className="font-semibold text-neutral-950">
                oportunidad de diseño extraordinaria
              </strong>
              . Las vigas metálicas vistas, los muros de ladrillo expuesto, los
              suelos de hormigón pulido y los ventanales sobredimensionados de
              las antiguas fábricas son elementos que aportan carácter,
              autenticidad y una estética difícil de replicar en obra nueva.
            </p>
            <p>
              Nuestro enfoque consiste en{' '}
              <strong className="font-semibold text-neutral-950">
                preservar estos elementos brutos y combinarlos con el confort
                contemporáneo
              </strong>
              . Los espacios de doble altura permiten crear entreplantas y
              mezzanines que multiplican la superficie útil sin sacrificar la
              sensación de amplitud. Las grandes superficies acristaladas
              inundan los interiores de luz natural, reduciendo el consumo
              energético.
            </p>
            <p>
              Más allá de la vivienda, diseñamos{' '}
              <strong className="font-semibold text-neutral-950">
                espacios comerciales
              </strong>{' '}
              que aprovechan el carácter industrial: restaurantes con cocinas
              abiertas bajo estructuras metálicas, galerías de arte en naves
              diáfanas, estudios creativos con luz cenital y oficinas que
              combinan la estética raw con la funcionalidad del espacio de
              trabajo moderno.
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* 3. Servicios */}
      <SectionIntro
        title="Servicios para tu proyecto en Poblenou"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Ofrecemos servicios especializados en la transformación de espacios
          industriales y el diseño de interiores adaptado al carácter único de
          Poblenou.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Diseño de interiores">
            Lofts y espacios diáfanos con carácter industrial. Diseños que
            respetan la esencia del espacio original.{' '}
            <Link
              href="/diseno-interiores/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio de diseño de interiores
            </Link>
          </GridListItem>
          <GridListItem title="Interiorismo comercial">
            Restaurantes, galerías y coworkings en antiguos espacios
            industriales reconvertidos.{' '}
            <Link
              href="/interiorismo-comercial/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio de interiorismo comercial
            </Link>
          </GridListItem>
          <GridListItem title="Reforma de oficinas">
            Espacios de trabajo creativos y funcionales en el distrito @22,
            adaptados a startups y empresas digitales.{' '}
            <Link
              href="/reforma-oficinas/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio de reforma de oficinas
            </Link>
          </GridListItem>
          <GridListItem title="Ampliación de vivienda">
            Reconversión de naves y locales industriales en viviendas amplias
            con entreplantas y mezzanines.{' '}
            <Link
              href="/ampliacion-vivienda/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio de ampliación de vivienda
            </Link>
          </GridListItem>
          <GridListItem title="Home staging">
            Puesta en escena profesional de lofts y espacios industriales
            reconvertidos para maximizar su valor de venta.{' '}
            <Link
              href="/home-staging/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio de home staging
            </Link>
          </GridListItem>
          <GridListItem title="Asesoría compra vivienda">
            Evaluación técnica de locales y naves industriales antes de comprar.
            Analizamos el potencial de reconversión y estimamos costes.{' '}
            <Link
              href="/asesoria-compra-vivienda/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio de asesoría
            </Link>
          </GridListItem>
        </GridList>
      </Container>

      {/* 4. FAQ */}
      <SectionIntro
        title="Preguntas frecuentes sobre interiorismo en Poblenou"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre reformas e
          interiorismo en el barrio de Poblenou.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <FAQAccordion items={faqItems} />
        </FadeIn>
      </Container>

      {/* 5. Contact */}
      <ContactSection />

      {/* 6. Proyectos destacados */}
      <LatestProjects />
    </RootLayout>
  )
}
