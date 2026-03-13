import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
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
    question: '¿Cuanto cuesta reformar un piso en Terrassa?',
    schemaAnswer:
      'El coste de una reforma integral en Terrassa oscila entre 600 y 1.100 €/m². Para un piso típico de los años 60-80 de entre 65 y 95 m², el presupuesto total se sitúa entre 39.000 y 104.500 €. Los precios son competitivos respecto a Barcelona, lo que permite destinar más presupuesto a calidades y acabados. Solicita un presupuesto personalizado y gratuito.',
    answer: (
      <>
        <p>
          El coste de una reforma integral en Terrassa oscila entre{' '}
          <strong className="font-semibold text-neutral-950">
            600 y 1.100&nbsp;€/m²
          </strong>
          , dependiendo del estado del inmueble y las calidades elegidas.
        </p>
        <p>
          Para un piso típico de los años 60-80 de entre 65 y 95&nbsp;m², el
          presupuesto total se sitúa entre{' '}
          <strong className="font-semibold text-neutral-950">
            39.000 y 104.500&nbsp;€
          </strong>
          . Los precios son competitivos respecto a Barcelona, lo que permite
          destinar más presupuesto a calidades y acabados.
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
    question: '¿Tenéis interioristas que conozcan Terrassa?',
    schemaAnswer:
      'Sí, varios miembros del colectivo trabajan habitualmente en Terrassa y el Vallès Occidental. Conocen las particularidades de las viviendas de la zona, la normativa del Ajuntament de Terrassa y los proveedores y empresas constructoras locales. Esto garantiza un seguimiento cercano de la obra y una gestión eficiente del proyecto.',
    answer: (
      <>
        <p>
          Sí, varios{' '}
          <strong className="font-semibold text-neutral-950">
            miembros del colectivo trabajan habitualmente en Terrassa
          </strong>{' '}
          y el Vallès Occidental. Algunos de ellos están basados en la propia
          ciudad o en localidades cercanas.
        </p>
        <p>
          Conocen las particularidades de las viviendas de la zona, la normativa
          del Ajuntament de Terrassa y los proveedores y empresas constructoras
          locales. Esto garantiza un seguimiento cercano de la obra y una
          gestión eficiente del proyecto.
        </p>
      </>
    ),
  },
  {
    question: '¿Se puede reformar una masía cerca de Terrassa?',
    schemaAnswer:
      'Sí, las masías del Vallès son un patrimonio excepcional. Nuestros arquitectos tienen experiencia en rehabilitación de masías catalanas, conservando elementos originales como la piedra, las vigas de madera y los arcos, y adaptándolas al confort moderno con aislamiento, calefacción eficiente y cocinas y baños contemporáneos.',
    answer: (
      <>
        <p>
          Sí, las{' '}
          <strong className="font-semibold text-neutral-950">
            masías del Vallès
          </strong>{' '}
          son un patrimonio excepcional. Nuestros arquitectos tienen experiencia
          en rehabilitación de masías catalanas, conservando elementos originales
          como la piedra, las vigas de madera y los arcos.
        </p>
        <p>
          Adaptamos estas construcciones al confort moderno con aislamiento,
          calefacción eficiente y cocinas y baños contemporáneos, sin perder el
          carácter rural y la autenticidad de la masía.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué posibilidades ofrecen los antiguos vapors de Terrassa?',
    schemaAnswer:
      'Los antiguos vapores (fábricas textiles) de Terrassa ofrecen espacios diáfanos con alturas generosas, ideales para lofts, estudios o locales comerciales. Requieren un cambio de uso y la adaptación de instalaciones, pero su estructura industrial permite crear ambientes únicos con grandes ventanales, techos altos y materiales nobles como el ladrillo visto y las cerchas metálicas.',
    answer: (
      <>
        <p>
          Los antiguos{' '}
          <strong className="font-semibold text-neutral-950">
            vapores (fábricas textiles)
          </strong>{' '}
          de Terrassa ofrecen espacios diáfanos con alturas generosas, ideales
          para lofts, estudios o locales comerciales.
        </p>
        <p>
          Requieren un cambio de uso y la adaptación de instalaciones, pero su
          estructura industrial permite crear ambientes únicos con grandes
          ventanales, techos altos y materiales nobles como el ladrillo visto y
          las cerchas metálicas.
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
          name: 'Interiorista Terrassa',
          item: 'https://www.interioristabarcelona.com/interiorista-terrassa/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'Interiorista Barcelona — Terrassa',
      url: 'https://www.interioristabarcelona.com/interiorista-terrassa/',
      description:
        'Interioristas en Terrassa. Profesionales del colectivo en el Vallès Occidental: reforma de pisos, rehabilitación de masías y reconversión de espacios industriales.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Terrassa',
        addressRegion: 'Barcelona',
        addressCountry: 'ES',
      },
      areaServed: {
        '@type': 'City',
        name: 'Terrassa',
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
  title: 'Interiorista en Terrassa | Diseño de Interiores Terrassa',
  description:
    'Interioristas en Terrassa. Profesionales del colectivo en el Vallès Occidental: reforma de pisos, rehabilitación de masías y reconversión de espacios industriales. Presupuesto gratuito.',
  alternates: {
    canonical: '/interiorista-terrassa/',
  },
}

export default function InterioristaTerrassaPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Interiorismo en Terrassa"
        title="Tu interiorista en Terrassa"
      >
        <p>
          Miembros de nuestro colectivo trabajan directamente en Terrassa y el
          Vallès Occidental. Interioristas y arquitectos que conocen la ciudad,
          sus tipologías de vivienda y sus proveedores locales para llevar a cabo
          tu proyecto de reforma o diseño de interiores.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. Contexto arquitectónico */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Terrassa: patrimonio industrial y raíces catalanas
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              Con más de 225.000 habitantes, Terrassa es una de las ciudades más
              grandes de Cataluña y la capital del Vallès Occidental, a unos
              30&nbsp;km de Barcelona. Su historia está marcada por la{' '}
              <strong className="font-semibold text-neutral-950">
                industria textil
              </strong>
              , que dejó un legado arquitectónico excepcional: los{' '}
              <strong className="font-semibold text-neutral-950">vapors</strong>{' '}
              (antiguas fábricas) modernistas que hoy definen buena parte del
              paisaje urbano del centro.
            </p>
            <p>
              La ciudad alberga el{' '}
              <strong className="font-semibold text-neutral-950">
                Conjunt Monumental de les Esglésies de Sant Pere
              </strong>
              , declarado Patrimonio de la Humanidad por la UNESCO, testimonio de
              siglos de historia que se refleja también en la arquitectura civil
              de sus calles.
            </p>
            <p>
              El parque de viviendas de Terrassa es muy diverso:{' '}
              <strong className="font-semibold text-neutral-950">
                masías rurales
              </strong>{' '}
              en las afueras, cerca del Parc Natural de Sant Llorenç del Munt i
              l&apos;Obac; edificios industriales modernistas en proceso de
              reconversión en el centro; bloques de pisos de los años 60 a 80
              que constituyen gran parte del parque residencial; y promociones de
              obra nueva en los ensanches más recientes. Todo ello con más
              espacio y precios más asequibles que Barcelona, y excelentes
              conexiones por FGC y Rodalies.
            </p>
          </div>

          <h2 className="mt-16 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Del vapor a la masía: interiorismo con carácter
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              Terrassa ofrece una oportunidad única para el interiorismo por la{' '}
              <strong className="font-semibold text-neutral-950">
                diversidad de tipologías
              </strong>{' '}
              de sus inmuebles. La reconversión de antiguos vapors industriales
              en viviendas tipo loft o espacios comerciales, la rehabilitación de
              masías catalanas con siglos de historia, y la renovación de pisos
              en bloques residenciales son proyectos que requieren enfoques muy
              distintos.
            </p>
            <p>
              Nuestros miembros que operan en Terrassa conocen los{' '}
              <strong className="font-semibold text-neutral-950">
                proveedores y empresas constructoras locales
              </strong>
              , lo que facilita una gestión eficiente y un seguimiento cercano de
              cada obra. Trabajan con la normativa del Ajuntament de Terrassa y
              dominan los trámites de licencias de obra y cambio de uso.
            </p>
            <p>
              La{' '}
              <strong className="font-semibold text-neutral-950">
                eficiencia energética
              </strong>{' '}
              es un reto especial en Terrassa, tanto en los edificios antiguos
              con escaso aislamiento como en las masías que necesitan adaptarse
              al confort contemporáneo. Nuestros profesionales integran
              soluciones de aislamiento, climatización y ventilación que
              respetan el carácter industrial o rural del inmueble.
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* 3. Servicios */}
      <SectionIntro
        title="Servicios para tu proyecto en Terrassa"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Ofrecemos un abanico completo de servicios adaptados a las
          particularidades de los inmuebles de Terrassa y el Vallès Occidental.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Diseño de interiores">
            Proyectos integrales de interiorismo en Terrassa, adaptados a cada
            tipología de vivienda.{' '}
            <Link
              href="/diseno-interiores/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Reforma de masías">
            Rehabilitación de masías del Vallès conservando elementos originales
            y adaptándolas al confort moderno.{' '}
            <Link
              href="/reforma-masias/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Interiorismo comercial">
            Diseño de locales en antiguos vapors industriales y espacios
            comerciales en el centro de Terrassa.{' '}
            <Link
              href="/interiorismo-comercial/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Ampliación de vivienda">
            Redistribución de pisos y casas para ganar espacio y funcionalidad.{' '}
            <Link
              href="/ampliacion-vivienda/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Rehabilitación energética">
            Eficiencia energética en edificios antiguos, masías y bloques
            residenciales de Terrassa.{' '}
            <Link
              href="/rehabilitacion-energetica/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Asesoría compra vivienda">
            Evaluación profesional de inmuebles en Terrassa antes de la compra:
            potencial, estado y coste de reforma.{' '}
            <Link
              href="/asesoria-compra-vivienda/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
        </GridList>
      </Container>

      {/* 4. FAQ */}
      <SectionIntro
        title="Preguntas frecuentes sobre interiorismo en Terrassa"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre reformas e
          interiorismo en Terrassa y el Vallès Occidental.
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
