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
    question: '¿Cuánto cuesta reformar un piso en el Eixample?',
    schemaAnswer:
      'El coste de una reforma integral en el Eixample oscila entre 800 y 1.500 €/m², dependiendo de los elementos modernistas a conservar (mosaicos hidráulicos, molduras, carpinterías de época). Para un piso típico del Eixample de 80 a 120 m², el presupuesto total se sitúa entre 64.000 y 180.000 €. Solicita un presupuesto personalizado y gratuito.',
    answer: (
      <>
        <p>
          El coste de una reforma integral en el Eixample oscila entre{' '}
          <strong className="font-semibold text-neutral-950">
            800 y 1.500&nbsp;€/m²
          </strong>
          , dependiendo de los elementos modernistas a conservar (mosaicos
          hidráulicos, molduras, carpinterías de época).
        </p>
        <p>
          Para un piso típico del Eixample de 80 a 120&nbsp;m², el presupuesto
          total se sitúa entre{' '}
          <strong className="font-semibold text-neutral-950">
            64.000 y 180.000&nbsp;€
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
      '¿Necesito licencia de obras para reformar en el Eixample?',
    schemaAnswer:
      'Depende del alcance de la reforma. Las reformas menores (obra menor) como cambios de pavimento, pintura o actualización de instalaciones requieren una comunicación previa al Ajuntament de Barcelona. Las reformas que afectan a la estructura, fachada o elementos comunes (obra mayor) necesitan una licencia de obra mayor. Además, muchas fincas del Eixample tienen algún grado de protección patrimonial, lo que puede requerir autorizaciones adicionales. Nuestros interioristas gestionan todos los trámites necesarios.',
    answer: (
      <>
        <p>
          Depende del alcance de la reforma. Las reformas menores (
          <strong className="font-semibold text-neutral-950">obra menor</strong>
          ) como cambios de pavimento, pintura o actualización de instalaciones
          requieren una comunicación previa al Ajuntament de Barcelona.
        </p>
        <p>
          Las reformas que afectan a la estructura, fachada o elementos comunes (
          <strong className="font-semibold text-neutral-950">obra mayor</strong>
          ) necesitan una licencia de obra mayor. Además, muchas fincas del
          Eixample tienen algún grado de{' '}
          <strong className="font-semibold text-neutral-950">
            protección patrimonial
          </strong>
          , lo que puede requerir autorizaciones adicionales.
        </p>
        <p>
          Nuestros interioristas gestionan todos los trámites necesarios.
        </p>
      </>
    ),
  },
  {
    question: '¿Se pueden conservar los mosaicos hidráulicos originales?',
    schemaAnswer:
      'Sí, la restauración de mosaicos hidráulicos es una de nuestras especialidades. Utilizamos técnicas de consolidación para recuperar las piezas originales: limpieza profunda, reparación de baldosas dañadas, rejuntado y sellado protector. Cuando faltan piezas, trabajamos con talleres artesanales que reproducen los diseños originales. También es posible combinar los mosaicos restaurados con materiales modernos, creando un diálogo entre lo antiguo y lo contemporáneo.',
    answer: (
      <>
        <p>
          Sí, la{' '}
          <strong className="font-semibold text-neutral-950">
            restauración de mosaicos hidráulicos
          </strong>{' '}
          es una de nuestras especialidades. Utilizamos técnicas de
          consolidación para recuperar las piezas originales: limpieza profunda,
          reparación de baldosas dañadas, rejuntado y sellado protector.
        </p>
        <p>
          Cuando faltan piezas, trabajamos con talleres artesanales que
          reproducen los diseños originales. También es posible combinar los
          mosaicos restaurados con materiales modernos, creando un diálogo entre
          lo antiguo y lo contemporáneo.
        </p>
      </>
    ),
  },
  {
    question: '¿Cuánto dura una reforma integral en el Eixample?',
    schemaAnswer:
      'Una reforma integral en el Eixample dura entre 3 y 6 meses, dependiendo del alcance del proyecto. Los pisos modernistas pueden requerir más tiempo debido a trabajos estructurales específicos: refuerzo de forjados, actualización de bajantes comunitarios o restauración de elementos ornamentales. El plazo también depende de la obtención de licencias, que en Barcelona puede tardar entre 1 y 3 meses adicionales para obra mayor.',
    answer: (
      <>
        <p>
          Una reforma integral en el Eixample dura entre{' '}
          <strong className="font-semibold text-neutral-950">
            3 y 6 meses
          </strong>
          , dependiendo del alcance del proyecto.
        </p>
        <p>
          Los pisos modernistas pueden requerir más tiempo debido a trabajos
          estructurales específicos: refuerzo de forjados, actualización de
          bajantes comunitarios o restauración de elementos ornamentales.
        </p>
        <p>
          El plazo también depende de la obtención de licencias, que en Barcelona
          puede tardar entre 1 y 3 meses adicionales para obra mayor.
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
          name: 'Interiorista Eixample',
          item: 'https://www.interiorista-barcelona.com/interiorista-eixample/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'Interiorista Barcelona — Eixample',
      url: 'https://www.interiorista-barcelona.com/interiorista-eixample/',
      description:
        'Interioristas especializados en el Eixample de Barcelona. Reformas de pisos modernistas, conservación de mosaicos hidráulicos y diseño interior respetando el patrimonio.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Carrer de Mallorca, 237',
        addressLocality: 'Barcelona',
        postalCode: '08008',
        addressCountry: 'ES',
      },
      areaServed: {
        '@type': 'Neighborhood',
        name: 'Eixample, Barcelona',
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
  title: 'Interiorista en el Eixample | Reforma de Pisos Barcelona',
  description:
    'Reforma de pisos en el Eixample de Barcelona: conservación de mosaicos hidráulicos, molduras y elementos modernistas. Interioristas especializados en el patrimonio del Eixample. Presupuesto gratuito.',
  openGraph: {
    title: 'Interiorista en el Eixample | Reforma de Pisos Barcelona',
    description:
      'Reforma de pisos en el Eixample de Barcelona: conservación de mosaicos hidráulicos, molduras y elementos modernistas. Interioristas especializados en el patrimonio del Eixample. Presupuesto gratuito.',
  },
  alternates: {
    canonical: '/interiorista-eixample/',
  },
}

export default function InterioristaEixamplePage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Interiorismo en Eixample"
        title="Tu interiorista en el Eixample de Barcelona"
      >
        <p>
          Nuestros interioristas y diseñadores de interiores están especializados
          en los pisos modernistas del Eixample. Reformas integrales, restauración
          de elementos originales y diseño interior que respeta el patrimonio
          arquitectónico del distrito más emblemático de Barcelona.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. El patrimonio modernista del Eixample */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            El patrimonio modernista del Eixample
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              El Eixample, trazado por Ildefons Cerdà en 1859, es el distrito más
              representativo del urbanismo barcelonés. Su icónica cuadrícula de
              manzanas octogonales alberga la mayor concentración de{' '}
              <strong className="font-semibold text-neutral-950">
                arquitectura modernista
              </strong>{' '}
              del mundo, con obras maestras de Gaudí, Domènech i Montaner y Puig i
              Cadafalch.
            </p>
            <p>
              Los pisos del Eixample se caracterizan por elementos arquitectónicos
              singulares:{' '}
              <strong className="font-semibold text-neutral-950">
                mosaicos hidráulicos
              </strong>{' '}
              artesanales, techos altos de 3,5 metros o más, molduras de escayola
              ornamentales, carpinterías de época con contraventanas interiores y
              balcones de hierro forjado. Estos elementos confieren a cada vivienda
              un carácter único e irrepetible.
            </p>
            <p>
              Sin embargo, estos pisos centenarios también presentan retos
              importantes: instalaciones eléctricas y de fontanería obsoletas,
              distribuciones compartimentadas con largos pasillos y habitaciones en
              serie, falta de aislamiento térmico y acústico, y cocinas y baños que
              no responden a las necesidades actuales.
            </p>
          </div>

          <h2 className="mt-16 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Nuestro enfoque en el Eixample
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              Nuestro trabajo en el Eixample se basa en un principio fundamental:{' '}
              <strong className="font-semibold text-neutral-950">
                preservar el carácter original del piso mientras lo adaptamos a la
                vida contemporánea
              </strong>
              . Cada proyecto es una oportunidad de poner en valor los elementos
              patrimoniales que hacen único el inmueble.
            </p>
            <p>
              Apostamos por espacios abiertos y diáfanos que aprovechan los techos
              altos y la luz natural de las amplias ventanas del Eixample. Las
              distribuciones compartimentadas se transforman en ambientes fluidos,
              manteniendo la esencia modernista con soluciones contemporáneas.
            </p>
            <p>
              La{' '}
              <strong className="font-semibold text-neutral-950">
                eficiencia energética
              </strong>{' '}
              es una prioridad en cada reforma: aislamiento térmico por el
              interior, sustitución de ventanas respetando la estética original,
              sistemas de climatización eficientes y soluciones de ventilación
              adaptadas a la estructura del edificio.
            </p>
            <p>
              En cocinas y baños, diseñamos espacios funcionales y modernos que se
              integran armoniosamente con el resto de la vivienda centenaria,
              resolviendo los retos técnicos que plantean los bajantes y las
              instalaciones comunitarias de estos edificios.
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* 3. Servicios */}
      <SectionIntro
        title="Servicios para tu proyecto en el Eixample"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Ofrecemos un abanico completo de servicios adaptados a las
          particularidades de los inmuebles del Eixample.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Diseño de interiores">
            Pisos modernistas requieren una visión integral que combine la
            preservación del patrimonio con las necesidades de la vida actual.{' '}
            <Link
              href="/diseno-interiores/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Rehabilitación energética">
            Aislamiento y eficiencia en edificios centenarios. Soluciones
            adaptadas a la estructura y normativa del Eixample.{' '}
            <Link
              href="/rehabilitacion-energetica/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Ampliación de vivienda">
            Redistribución de espacios compartimentados para crear ambientes
            abiertos y funcionales aprovechando los techos altos.{' '}
            <Link
              href="/ampliacion-vivienda/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Asesoría compra vivienda">
            Contravisita profesional antes de comprar un piso modernista.
            Evaluamos el potencial y estimamos el coste de la reforma.{' '}
            <Link
              href="/asesoria-compra-vivienda/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Decoración de interiores">
            Styling que respeta el carácter original del piso, combinando piezas
            contemporáneas con los elementos modernistas existentes.{' '}
            <Link
              href="/decoracion-interiores/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Arquitecto">
            Proyectos con licencia de obra mayor: intervenciones estructurales,
            modificación de fachadas y reformas en fincas protegidas.{' '}
            <Link
              href="/arquitecto/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
        </GridList>
      </Container>

      {/* 4. FAQ */}
      <SectionIntro
        title="Preguntas frecuentes sobre interiorismo en el Eixample"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre reformas e
          interiorismo en el Eixample de Barcelona.
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
