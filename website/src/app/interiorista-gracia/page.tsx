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
    question: '¿Cuánto cuesta reformar un piso en Gràcia?',
    schemaAnswer:
      'El coste de reformar un piso en Gràcia oscila entre 700 y 1.300 €/m². Los pisos en Gràcia suelen ser más pequeños que en otros barrios (entre 50 y 80 m²), lo que sitúa el presupuesto total entre 35.000 y 104.000 €. Muchos edificios del barrio datan de los años 60-70, con estructuras más sencillas que las fincas modernistas del Eixample, lo que puede simplificar y abaratar ciertos aspectos de la reforma. Solicita un presupuesto personalizado y gratuito.',
    answer: (
      <>
        <p>
          El coste de reformar un piso en Gràcia oscila entre{' '}
          <strong className="font-semibold text-neutral-950">
            700 y 1.300&nbsp;€/m²
          </strong>
          . Los pisos en Gràcia suelen ser más pequeños que en otros barrios
          (entre 50 y 80&nbsp;m²), lo que sitúa el presupuesto total entre
          35.000 y 104.000&nbsp;€.
        </p>
        <p>
          Muchos edificios del barrio datan de los años 60-70, con estructuras
          más sencillas que las fincas modernistas del Eixample, lo que puede
          simplificar y abaratar ciertos aspectos de la reforma.
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
    question: '¿Es difícil reformar en un edificio antiguo de Gràcia?',
    schemaAnswer:
      'Reformar en edificios antiguos de Gràcia presenta retos específicos: muchos carecen de ascensor, las escaleras son estrechas y el transporte de materiales puede ser complicado. Sin embargo, la escala más reducida de los pisos (comparado con el Eixample) hace que los proyectos avancen más rápido. Nuestros interioristas conocen las particularidades constructivas del barrio y coordinan los gremios para minimizar las molestias.',
    answer: (
      <>
        <p>
          Reformar en edificios antiguos de Gràcia presenta retos específicos:
          muchos{' '}
          <strong className="font-semibold text-neutral-950">
            carecen de ascensor
          </strong>
          , las escaleras son estrechas y el transporte de materiales puede ser
          complicado.
        </p>
        <p>
          Sin embargo, la escala más reducida de los pisos (comparado con el
          Eixample) hace que los proyectos avancen más rápido. Nuestros
          interioristas conocen las particularidades constructivas del barrio y
          coordinan los gremios para minimizar las molestias.
        </p>
      </>
    ),
  },
  {
    question: '¿Cómo ganar luminosidad en un piso interior de Gràcia?',
    schemaAnswer:
      'La falta de luz natural es un problema habitual en Gràcia debido a la trama urbana densa y las calles estrechas. Las soluciones más eficaces incluyen: uso estratégico de espejos para multiplicar la luz existente, paleta de colores claros en paredes y techos, sustitución de tabiques opacos por tabiques de cristal o pavés, y aprovechamiento máximo de los patios de luces. Un interiorista puede transformar un piso oscuro en un espacio luminoso y acogedor.',
    answer: (
      <>
        <p>
          La falta de luz natural es un problema habitual en Gràcia debido a la{' '}
          <strong className="font-semibold text-neutral-950">
            trama urbana densa
          </strong>{' '}
          y las calles estrechas. Las soluciones más eficaces incluyen:
        </p>
        <p>
          Uso estratégico de espejos para multiplicar la luz existente, paleta de
          colores claros en paredes y techos, sustitución de tabiques opacos por{' '}
          <strong className="font-semibold text-neutral-950">
            tabiques de cristal o pavés
          </strong>
          , y aprovechamiento máximo de los patios de luces.
        </p>
        <p>
          Un interiorista puede transformar un piso oscuro en un espacio luminoso
          y acogedor.
        </p>
      </>
    ),
  },
  {
    question: '¿Se puede unir dos pisos en Gràcia?',
    schemaAnswer:
      'Sí, es posible unir dos pisos en Gràcia, pero requiere una licencia de obra mayor y un estudio estructural previo. Es una solución cada vez más demandada en el barrio, donde los pisos pequeños (40-60 m²) pueden resultar insuficientes para familias. El proceso implica la apertura de un hueco en el forjado, refuerzo estructural si es necesario, y la redistribución completa del espacio resultante. Nuestros interioristas gestionan todo el proceso, desde los permisos hasta la entrega final.',
    answer: (
      <>
        <p>
          Sí, es posible unir dos pisos en Gràcia, pero requiere una{' '}
          <strong className="font-semibold text-neutral-950">
            licencia de obra mayor
          </strong>{' '}
          y un estudio estructural previo. Es una solución cada vez más
          demandada en el barrio, donde los pisos pequeños (40-60&nbsp;m²) pueden
          resultar insuficientes para familias.
        </p>
        <p>
          El proceso implica la apertura de un hueco en el forjado, refuerzo
          estructural si es necesario, y la redistribución completa del espacio
          resultante. Nuestros interioristas gestionan todo el proceso, desde los
          permisos hasta la entrega final.
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
          name: 'Interiorista Gràcia',
          item: 'https://www.interioristabarcelona.com/interiorista-gracia/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'Interiorista Barcelona — Gràcia',
      description:
        'Interioristas especializados en el barrio de Gràcia, Barcelona. Reforma de pisos, optimización de espacios pequeños y diseño funcional.',
      url: 'https://www.interioristabarcelona.com/interiorista-gracia/',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Carrer de Mallorca, 237',
        addressLocality: 'Barcelona',
        postalCode: '08008',
        addressCountry: 'ES',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Gràcia, Barcelona',
      },
      priceRange: '€€',
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
  title: 'Interiorista en Gràcia | Diseño de Interiores Gràcia Barcelona',
  description:
    'Interioristas en Gràcia, Barcelona. Reforma de pisos en edificios de los años 60-80, optimización de espacios pequeños y diseño funcional. Presupuesto gratuito.',
  alternates: {
    canonical: '/interiorista-gracia/',
  },
}

export default function InterioristaGracia() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <PageIntro eyebrow="Interiorismo en Gràcia" title="Tu interiorista en Gràcia">
        <p>
          Gràcia conserva el alma de pueblo que la define desde antes de su
          anexión a Barcelona. Nuestros interioristas conocen las
          particularidades de sus edificios y diseñan espacios que respetan el
          carácter único del barrio.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Gràcia: un pueblo dentro de la ciudad
          </h2>
          <div className="mt-6 max-w-3xl space-y-6 text-base text-neutral-600">
            <p>
              Antiguo municipio independiente anexionado a Barcelona en 1897,
              Gràcia conserva su{' '}
              <strong className="font-semibold text-neutral-950">
                carácter de pueblo
              </strong>{' '}
              con sus plazas emblemáticas — Plaça del Sol, Plaça de la Virreina,
              Plaça de la Vila de Gràcia — y sus calles estrechas bordeadas de
              pequeños edificios de 3 a 5 plantas.
            </p>
            <p>
              La mayoría de las viviendas del barrio datan de los{' '}
              <strong className="font-semibold text-neutral-950">
                años 1960-1980
              </strong>
              , con pisos que oscilan típicamente entre 50 y 80&nbsp;m². Estos
              inmuebles presentan retos específicos para el interiorismo:
              distribuciones compartimentadas con pasillos largos, falta de luz
              natural en las habitaciones interiores, instalaciones eléctricas y
              de fontanería envejecidas, y cocinas y baños de dimensiones
              reducidas.
            </p>
            <p>
              A diferencia de las fincas modernistas del Eixample, los edificios
              de Gràcia suelen tener estructuras más sencillas, pero las calles
              estrechas y la ausencia frecuente de ascensor complican la
              logística de las reformas. Un interiorista con experiencia en el
              barrio marca la diferencia.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Optimizar cada metro cuadrado
          </h2>
          <div className="mt-6 max-w-3xl space-y-6 text-base text-neutral-600">
            <p>
              En Gràcia, cada metro cuadrado cuenta. Los precios del barrio se
              han disparado en los últimos años, convirtiendo la{' '}
              <strong className="font-semibold text-neutral-950">
                optimización del espacio
              </strong>{' '}
              en una prioridad absoluta para cualquier proyecto de interiorismo.
            </p>
            <p>
              Nuestros interioristas son expertos en transformar pisos
              compartimentados en espacios abiertos y funcionales: cocinas
              abiertas al salón, muebles a medida con almacenaje integrado,
              soluciones multifuncionales para dormitorios-estudio y zonas de día
              que se adaptan a diferentes usos.
            </p>
            <p>
              Cada proyecto en Gràcia busca el equilibrio entre funcionalidad
              contemporánea y el{' '}
              <strong className="font-semibold text-neutral-950">
                espíritu bohemio y creativo
              </strong>{' '}
              que caracteriza al barrio. Materiales naturales, colores cálidos,
              piezas vintage y elementos artesanales se integran en diseños
              modernos que reflejan la identidad de Gràcia.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro
          title="Servicios de interiorismo en Gràcia"
          className="mb-12"
        >
          <p>
            Nuestros interioristas ofrecen soluciones adaptadas a las
            particularidades de los pisos y edificios de Gràcia.
          </p>
        </SectionIntro>
        <GridList>
          <GridListItem title="Diseño de interiores">
            Espacios funcionales en pisos compactos de Gràcia, con
            redistribuciones inteligentes que aprovechan cada rincón.{' '}
            <Link
              href="/diseno-interiores/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Decoración de interiores">
            Estilo bohemio y contemporáneo que refleja la personalidad creativa
            del barrio, sin necesidad de obras.{' '}
            <Link
              href="/decoracion-interiores/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Ampliación de vivienda">
            Unión de pisos contiguos y redistribución completa para ganar
            espacio habitable en edificios de Gràcia.{' '}
            <Link
              href="/ampliacion-vivienda/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Home staging">
            Puesta en escena profesional para vender o alquilar tu piso en
            Gràcia de forma rápida y al mejor precio.{' '}
            <Link
              href="/home-staging/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Interiorismo accesible">
            Adaptación de viviendas en edificios sin ascensor y mejora de la
            accesibilidad interior del hogar.{' '}
            <Link
              href="/interiorismo-accesible/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Asesoría compra vivienda">
            Evaluación profesional del potencial de un piso en Gràcia antes de
            firmar la compra.{' '}
            <Link
              href="/asesoria-compra-vivienda/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
        </GridList>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro
          title="Preguntas frecuentes sobre interiorismo en Gràcia"
          className="mb-12"
        >
          <p>
            Resolvemos las dudas más habituales sobre reformas e interiorismo en
            el barrio de Gràcia.
          </p>
        </SectionIntro>
        <FadeIn>
          <FAQAccordion items={faqItems} />
        </FadeIn>
      </Container>

      <ContactSection />

      <LatestProjects />
    </RootLayout>
  )
}
