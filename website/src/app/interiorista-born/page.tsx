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
    question: '¿Cuánto cuesta reformar un piso en el Born?',
    schemaAnswer:
      'El coste de reformar un piso en el Born oscila entre 1.000 y 1.800 €/m². Es una zona premium con edificios medievales que presentan muros de carga gruesos de piedra, vigas de madera originales y techos abovedados. Estos elementos arquitectónicos requieren técnicas especializadas de rehabilitación que pueden incrementar el presupuesto respecto a una reforma estándar. Solicita un presupuesto personalizado para tu proyecto en el Born.',
    answer: (
      <>
        <p>
          El coste de reformar un piso en el Born oscila entre{' '}
          <strong className="font-semibold text-neutral-950">
            1.000 y 1.800&nbsp;€/m²
          </strong>
          . Es una zona premium con edificios medievales que presentan muros de
          carga gruesos de piedra, vigas de madera originales y techos
          abovedados.
        </p>
        <p>
          Estos elementos arquitectónicos requieren técnicas especializadas de
          rehabilitación que pueden incrementar el presupuesto respecto a una
          reforma estándar.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Solicita un presupuesto personalizado
          </Link>{' '}
          para tu proyecto en el Born.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué restricciones hay para reformar en Ciutat Vella?',
    schemaAnswer:
      'El Born, como parte de Ciutat Vella, está sujeto al Plan Especial de Protección del Patrimonio Arquitectónico y Catálogo del distrito. Esto implica limitaciones en la modificación de fachadas, elementos estructurales y espacios comunes. Además, existen normas específicas de ocupación turística y se requieren licencias especiales para determinadas intervenciones. Un interiorista con experiencia en Ciutat Vella conoce estos trámites y puede agilizar el proceso.',
    answer: (
      <>
        <p>
          El Born, como parte de Ciutat Vella, está sujeto al{' '}
          <strong className="font-semibold text-neutral-950">
            Plan Especial de Protección del Patrimonio Arquitectónico
          </strong>{' '}
          y Catálogo del distrito. Esto implica limitaciones en la modificación
          de fachadas, elementos estructurales y espacios comunes.
        </p>
        <p>
          Además, existen normas específicas de ocupación turística y se
          requieren{' '}
          <strong className="font-semibold text-neutral-950">
            licencias especiales
          </strong>{' '}
          para determinadas intervenciones.
        </p>
        <p>
          Un interiorista con experiencia en Ciutat Vella conoce estos trámites
          y puede agilizar el proceso.
        </p>
      </>
    ),
  },
  {
    question: '¿Se puede hacer un loft en el Born?',
    schemaAnswer:
      'Sí, muchos locales comerciales y antiguos talleres artesanales del Born se han reconvertido en lofts residenciales. Las alturas generosas de las plantas bajas (a menudo superiores a 4 metros) permiten crear espacios diáfanos espectaculares. Sin embargo, este tipo de proyecto requiere un cambio de uso y una licencia urbanística específica del Ayuntamiento de Barcelona. Nuestros interioristas te asesoran sobre la viabilidad y gestionan los trámites necesarios.',
    answer: (
      <>
        <p>
          Sí, muchos locales comerciales y antiguos talleres artesanales del Born
          se han reconvertido en{' '}
          <strong className="font-semibold text-neutral-950">
            lofts residenciales
          </strong>
          . Las alturas generosas de las plantas bajas (a menudo superiores a
          4&nbsp;metros) permiten crear espacios diáfanos espectaculares.
        </p>
        <p>
          Sin embargo, este tipo de proyecto requiere un{' '}
          <strong className="font-semibold text-neutral-950">
            cambio de uso
          </strong>{' '}
          y una licencia urbanística específica del Ayuntamiento de Barcelona.
        </p>
        <p>
          Nuestros interioristas te asesoran sobre la viabilidad y gestionan los
          trámites necesarios.
        </p>
      </>
    ),
  },
  {
    question: '¿Es viable instalar ascensor en un edificio del Born?',
    schemaAnswer:
      'Es complicado pero posible. La estructura medieval de muchos edificios del Born presenta escaleras estrechas y núcleos reducidos que dificultan la instalación de un ascensor convencional. Sin embargo, existen soluciones como mini-ascensores hidráulicos, plataformas elevadoras o ascensores de dimensiones reducidas que se adaptan a estos espacios. Un estudio técnico previo determinará la viabilidad y la mejor solución para cada caso.',
    answer: (
      <>
        <p>
          Es complicado pero posible. La estructura medieval de muchos edificios
          del Born presenta escaleras estrechas y núcleos reducidos que
          dificultan la instalación de un ascensor convencional.
        </p>
        <p>
          Sin embargo, existen soluciones como{' '}
          <strong className="font-semibold text-neutral-950">
            mini-ascensores hidráulicos
          </strong>
          , plataformas elevadoras o ascensores de dimensiones reducidas que se
          adaptan a estos espacios.
        </p>
        <p>
          Un estudio técnico previo determinará la viabilidad y la mejor
          solución para cada caso.
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
          name: 'Interiorista Born',
          item: 'https://www.interiorista-barcelona.com/interiorista-born/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id':
        'https://www.interiorista-barcelona.com/interiorista-born/#localbusiness',
      name: 'Interiorista Barcelona — El Born',
      description:
        'Interioristas especializados en el Born y Ciutat Vella, Barcelona. Rehabilitación de edificios medievales, conversión de locales en lofts y diseño interior con carácter histórico.',
      url: 'https://www.interiorista-barcelona.com/interiorista-born/',
      telephone: '+34 93 000 00 00',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Barcelona',
        addressRegion: 'Cataluña',
        postalCode: '08003',
        addressCountry: 'ES',
      },
      areaServed: {
        '@type': 'Place',
        name: 'El Born, Barcelona',
      },
      priceRange: '€€€',
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
  title: 'Lofts en el Born | Interiorista Ciutat Vella Barcelona',
  description:
    'Interiorista en el Born y Ciutat Vella, Barcelona. Conversión de locales en lofts, restauración de edificios medievales y diseño interior con carácter histórico. Presupuesto gratuito.',
  alternates: {
    canonical: '/interiorista-born/',
  },
}

export default function InterioristaBornPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Interiorismo en el Born"
        title="Tu interiorista en el Born"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Diseño de interiores en el corazón medieval de Barcelona
        </p>
        <p className="mt-6">
          El Born es un barrio donde cada piedra cuenta una historia. Nuestros
          interioristas especializados en Ciutat Vella rehabilitan edificios
          centenarios, convierten antiguos talleres en lofts contemporáneos y
          crean interiores que fusionan el patrimonio medieval con el confort
          moderno.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. Contexto arquitectónico del Born */}
      <SectionIntro
        eyebrow="El barrio"
        title="El Born: historia y diseño en cada piedra"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Enclavado en el corazón de Ciutat Vella, el Born es uno de los
          barrios más antiguos y con mayor personalidad de Barcelona. Sus
          calles estrechas —los característicos <em>carrers</em> medievales—
          albergan edificios de los siglos XIV al XVIII con una arquitectura
          única que exige un enfoque especializado en interiorismo.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Los inmuebles del Born se caracterizan por sus{' '}
              <strong className="font-semibold text-neutral-950">
                muros de carga de piedra
              </strong>{' '}
              de gran espesor, vigas de madera originales y techos abovedados
              que confieren a cada espacio un carácter irrepetible. Las plantas
              bajas, antiguamente ocupadas por talleres artesanales y comercios,
              ofrecen alturas generosas ideales para la conversión en lofts
              residenciales o espacios comerciales con personalidad.
            </p>
            <p>
              La proximidad al Passeig del Born, a la basílica de Santa Maria
              del Mar y al Parc de la Ciutadella convierte a este barrio en una
              de las zonas más cotizadas de Barcelona, donde convive una mezcla
              vibrante de residentes, boutiques de diseñador, galerías de arte
              y restaurantes de autor.
            </p>
          </div>
        </FadeIn>
      </Container>

      <SectionIntro
        eyebrow="Nuestra especialización"
        title="Rehabilitar respetando la historia"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Trabajar en un edificio medieval del Born requiere un conocimiento
          profundo de las técnicas constructivas históricas y de la normativa de
          protección patrimonial de Ciutat Vella.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Nuestros interioristas preservan los{' '}
              <strong className="font-semibold text-neutral-950">
                elementos originales
              </strong>{' '}
              que dan alma a cada espacio: arcos de piedra, vigas de madera
              centenarias, ladrillo visto y pavimentos hidráulicos. A la vez,
              integran las instalaciones modernas —climatización, electricidad,
              domótica— de forma respetuosa con la envolvente histórica.
            </p>
            <p>
              Más allá de la vivienda, el Born ofrece oportunidades únicas para
              el{' '}
              <strong className="font-semibold text-neutral-950">
                interiorismo comercial y hotelero
              </strong>
              : boutiques en antiguos obradores, restaurantes en bodegas
              abovedadas, hoteles boutique en palacios rehabilitados. Cada
              proyecto es una oportunidad de poner en valor el patrimonio
              construido del barrio.
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* 3. Servicios para el Born */}
      <SectionIntro
        eyebrow="Servicios"
        title="Nuestros servicios de interiorismo para el Born"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Ofrecemos un abanico completo de servicios adaptados a las
          particularidades de los inmuebles de Ciutat Vella.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Diseño de interiores">
            Proyectos integrales en edificios históricos del Born, respetando
            muros de carga, vigas de madera y techos abovedados originales.{' '}
            <Link
              href="/diseno-interiores/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Interiorismo comercial">
            Boutiques, restaurantes y galerías con carácter propio, integrados
            en los espacios singulares de las plantas bajas del Born.{' '}
            <Link
              href="/interiorismo-comercial/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Rehabilitación energética">
            Mejora de la eficiencia energética en muros de piedra centenarios,
            con soluciones de aislamiento compatibles con el patrimonio.{' '}
            <Link
              href="/rehabilitacion-energetica/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Licitaciones arquitectura">
            Gestión de licencias y trámites urbanísticos específicos de Ciutat
            Vella, incluyendo el Plan Especial de Protección del Patrimonio.{' '}
            <Link
              href="/licitaciones-arquitectura/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Decoración de interiores">
            Fusión de lo antiguo y lo contemporáneo: mobiliario, textiles y
            luminarias que dialogan con los elementos históricos del espacio.{' '}
            <Link
              href="/decoracion-interiores/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Asesoría compra vivienda">
            Evaluación del potencial de un inmueble histórico en el Born antes
            de la compra: estructura, viabilidad de reforma y estimación de
            costes.{' '}
            <Link
              href="/asesoria-compra-vivienda/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
        </GridList>
      </Container>

      {/* 4. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre interiorismo en el Born"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre reformas y diseño de
          interiores en el Born y Ciutat Vella.
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
