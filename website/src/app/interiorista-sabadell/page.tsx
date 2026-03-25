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
    question: '¿Cuánto cuesta reformar un piso en Sabadell?',
    schemaAnswer:
      'El coste de una reforma integral en Sabadell oscila entre 600 y 1.200 €/m². Los pisos típicos de los años 60-80 tienen entre 60 y 90 m², lo que sitúa el presupuesto total entre 36.000 y 108.000 €. Los precios son más accesibles que en Barcelona ciudad, tanto en mano de obra como en materiales.',
    answer: (
      <>
        <p>
          El coste de una reforma integral en Sabadell oscila entre{' '}
          <strong className="font-semibold text-neutral-950">
            600 y 1.200&nbsp;€/m²
          </strong>
          . Los pisos típicos de los años 60-80 tienen entre 60 y 90&nbsp;m², lo
          que sitúa el presupuesto total entre{' '}
          <strong className="font-semibold text-neutral-950">
            36.000 y 108.000&nbsp;€
          </strong>
          .
        </p>
        <p>
          Los precios son más accesibles que en Barcelona ciudad, tanto en mano
          de obra como en materiales.
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
      '¿Hay interioristas del colectivo que trabajen en Sabadell?',
    schemaAnswer:
      'Sí, contamos con profesionales que operan directamente en el Vallès Occidental. Conocen el mercado inmobiliario local de Sabadell y trabajan habitualmente con constructoras y proveedores de la zona, lo que facilita la gestión del proyecto y optimiza los plazos.',
    answer: (
      <>
        <p>
          Sí, contamos con{' '}
          <strong className="font-semibold text-neutral-950">
            profesionales que operan directamente en el Vallès Occidental
          </strong>
          . Conocen el mercado inmobiliario local de Sabadell y trabajan
          habitualmente con constructoras y proveedores de la zona.
        </p>
        <p>
          Esta proximidad facilita la gestión del proyecto y optimiza los plazos
          de ejecución.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Merece la pena reformar un piso de los años 70 en Sabadell?',
    schemaAnswer:
      'Sí, estos pisos tienen distribuciones compartimentadas y materiales obsoletos, pero ofrecen buena superficie y una estructura sólida. Una reforma integral los transforma completamente: espacios abiertos, instalaciones nuevas y acabados modernos. Además, la inversión se revaloriza significativamente en el mercado inmobiliario de Sabadell.',
    answer: (
      <>
        <p>
          Sí, estos pisos tienen distribuciones compartimentadas y materiales
          obsoletos, pero ofrecen{' '}
          <strong className="font-semibold text-neutral-950">
            buena superficie y una estructura sólida
          </strong>
          .
        </p>
        <p>
          Una reforma integral los transforma completamente: espacios abiertos,
          instalaciones nuevas y acabados modernos. Además, la inversión se
          revaloriza significativamente en el mercado inmobiliario de Sabadell.
        </p>
      </>
    ),
  },
  {
    question: '¿Cuánto tarda una reforma integral en Sabadell?',
    schemaAnswer:
      'Una reforma integral en Sabadell dura entre 2 y 4 meses para un piso estándar de 70 a 90 m². Los plazos de licencia en el Ajuntament de Sabadell suelen ser más cortos que en Barcelona, lo que agiliza el inicio de las obras.',
    answer: (
      <>
        <p>
          Una reforma integral en Sabadell dura entre{' '}
          <strong className="font-semibold text-neutral-950">
            2 y 4 meses
          </strong>{' '}
          para un piso estándar de 70 a 90&nbsp;m².
        </p>
        <p>
          Los plazos de licencia en el{' '}
          <strong className="font-semibold text-neutral-950">
            Ajuntament de Sabadell
          </strong>{' '}
          suelen ser más cortos que en Barcelona, lo que agiliza el inicio de las
          obras.
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
          item: 'https://www.interiorista-barcelona.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Interiorista Sabadell',
          item: 'https://www.interiorista-barcelona.com/interiorista-sabadell/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'Interiorista Barcelona — Sabadell',
      url: 'https://www.interiorista-barcelona.com/interiorista-sabadell/',
      description:
        'Interioristas en Sabadell. Profesionales del colectivo operan directamente en el Vallès: reforma de pisos, modernización de viviendas y diseño funcional a precios accesibles.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sabadell',
        addressRegion: 'Barcelona',
        postalCode: '08201',
        addressCountry: 'ES',
      },
      areaServed: {
        '@type': 'City',
        name: 'Sabadell',
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
  title: 'Interiorista en Sabadell | Diseño de Interiores Sabadell',
  description:
    'Interioristas en Sabadell. Profesionales del colectivo operan directamente en el Vallès: reforma de pisos, modernización de viviendas y diseño funcional a precios accesibles. Presupuesto gratuito.',
  openGraph: {
    title: 'Interiorista en Sabadell | Diseño de Interiores Sabadell',
    description:
      'Interioristas en Sabadell. Profesionales del colectivo operan directamente en el Vallès: reforma de pisos, modernización de viviendas y diseño funcional a precios accesibles. Presupuesto gratuito.',
  },
  alternates: {
    canonical: '/interiorista-sabadell/',
  },
}

export default function InterioristaSabadellPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Interiorismo en Sabadell"
        title="Tu interiorista en Sabadell"
      >
        <p>
          Nuestro colectivo cuenta con profesionales que trabajan directamente en
          el Vallès Occidental. Interioristas basados en Sabadell y alrededores
          que conocen la realidad del mercado local: reformas integrales de
          pisos, modernización de viviendas y diseño funcional a precios
          accesibles.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. Contexto arquitectónico */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Sabadell: patrimonio industrial y vivienda accesible
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              Sabadell, con más de 215.000 habitantes, es una de las ciudades con
              mayor peso económico de Cataluña. Su historia como{' '}
              <strong className="font-semibold text-neutral-950">
                capital textil del Vallès
              </strong>{' '}
              ha dejado un legado arquitectónico singular: fábricas modernistas
              reconvertidas, edificios del centro histórico con elementos
              ornamentales de época y monumentos emblemáticos como la Torre de
              l&apos;Aigua.
            </p>
            <p>
              El parque de vivienda de Sabadell es diverso: el centro conserva{' '}
              <strong className="font-semibold text-neutral-950">
                edificios modernistas y de principios del siglo&nbsp;XX
              </strong>
              , mientras que los barrios residenciales se caracterizan por bloques
              de 4 a 6 plantas construidos durante el{' '}
              <strong className="font-semibold text-neutral-950">
                boom de los años 60-80
              </strong>
              , con pisos de 60 a 90&nbsp;m². Las zonas próximas al Parc Fluvial
              del Riu Ripoll albergan promociones más recientes.
            </p>
            <p>
              Sabadell ofrece precios inmobiliarios considerablemente más
              accesibles que Barcelona o Sant Cugat, excelente conexión por FGC y
              Rodalies (a 30 minutos de Barcelona) y una oferta de servicios
              propia de una gran ciudad. Es un destino cada vez más atractivo
              para familias y profesionales que buscan calidad de vida.
            </p>
          </div>

          <h2 className="mt-16 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Modernizar pisos de los años 60-80
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              Gran parte del parque residencial de Sabadell fue construido entre
              los años 60 y 80, durante la etapa de fuerte crecimiento urbano.
              Estos pisos presentan retos comunes:{' '}
              <strong className="font-semibold text-neutral-950">
                baños pequeños, cocinas de galera, pasillos oscuros y
                aislamiento insuficiente
              </strong>
              . Sin embargo, sus superficies generosas y estructuras sólidas los
              convierten en excelentes candidatos para una reforma integral.
            </p>
            <p>
              Nuestros interioristas transforman estas distribuciones
              compartimentadas en{' '}
              <strong className="font-semibold text-neutral-950">
                espacios abiertos y luminosos
              </strong>
              : cocinas integradas con el salón, baños ampliados, sistemas
              eléctricos y de fontanería completamente renovados, y soluciones de
              aislamiento térmico y acústico adaptadas a cada edificio.
            </p>
            <p>
              Los miembros del colectivo que operan en Sabadell conocen las{' '}
              <strong className="font-semibold text-neutral-950">
                normativas urbanísticas locales
              </strong>
              , los proveedores y constructoras de la zona, así como los plazos
              habituales del Ajuntament. Esta proximidad se traduce en una
              gestión más ágil y eficiente de cada proyecto.
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* 3. Servicios */}
      <SectionIntro
        title="Servicios para tu proyecto en Sabadell"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Ofrecemos servicios integrales de interiorismo adaptados a las
          particularidades del mercado inmobiliario de Sabadell.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Diseño de interiores">
            Reformas integrales de pisos en Sabadell. Proyecto completo desde el
            diseño hasta la ejecución de obra.{' '}
            <Link
              href="/diseno-interiores/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Ampliación de vivienda">
            Redistribución y apertura de espacios en pisos compartimentados.
            Cocinas integradas, tabiques eliminados y ambientes diáfanos.{' '}
            <Link
              href="/ampliacion-vivienda/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Rehabilitación energética">
            Aislamiento térmico y acústico en edificios de los años 60-80.
            Mejora del confort y reducción del consumo energético.{' '}
            <Link
              href="/rehabilitacion-energetica/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Decoración de interiores">
            Estilo actualizado para pisos reformados. Selección de materiales,
            mobiliario y acabados coherentes con el proyecto.{' '}
            <Link
              href="/decoracion-interiores/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Home staging">
            Vender tu piso más rápido en Sabadell. Preparación profesional de la
            vivienda para maximizar su atractivo en el mercado.{' '}
            <Link
              href="/home-staging/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Asesoría compra vivienda">
            Contravisita profesional antes de comprar. Evaluamos el estado real
            del piso y estimamos el coste de la reforma necesaria.{' '}
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
        title="Preguntas frecuentes sobre interiorismo en Sabadell"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre reformas e
          interiorismo en Sabadell.
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
