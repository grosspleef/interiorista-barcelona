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
    question: '¿Cuánto cuesta reformar una casa en Sant Cugat?',
    schemaAnswer:
      'El coste de reformar una casa en Sant Cugat oscila entre 1.000 y 1.800 €/m². Las casas en Sant Cugat suelen ser grandes, con superficies habituales de 150 a 400 m². Los jardines y piscinas suman al presupuesto de forma significativa. El presupuesto total de una reforma integral suele situarse entre 150.000 y 720.000 €. Solicita un presupuesto personalizado y gratuito.',
    answer: (
      <>
        <p>
          El coste de reformar una casa en Sant Cugat oscila entre{' '}
          <strong className="font-semibold text-neutral-950">
            1.000 y 1.800&nbsp;€/m²
          </strong>
          . Las casas en Sant Cugat suelen ser grandes, con superficies
          habituales de 150 a 400&nbsp;m².
        </p>
        <p>
          Los jardines y piscinas suman al presupuesto de forma significativa. El
          presupuesto total de una reforma integral suele situarse entre{' '}
          <strong className="font-semibold text-neutral-950">
            150.000 y 720.000&nbsp;€
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
      '¿Tenéis interioristas que trabajen directamente en Sant Cugat?',
    schemaAnswer:
      'Sí, varios miembros del colectivo operan directamente en Sant Cugat y el Vallès. Conocen la normativa local, los proveedores de la zona y las particularidades de las viviendas vallesanas. Esto permite un seguimiento cercano de la obra y una relación directa con los artesanos y constructoras locales.',
    answer: (
      <>
        <p>
          Sí,{' '}
          <strong className="font-semibold text-neutral-950">
            varios miembros del colectivo operan directamente en Sant Cugat y el
            Vallès
          </strong>
          . Conocen la normativa local, los proveedores de la zona y las
          particularidades de las viviendas vallesanas.
        </p>
        <p>
          Esto permite un seguimiento cercano de la obra y una relación directa
          con los artesanos y constructoras locales.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué permisos necesito para reformar en Sant Cugat?',
    schemaAnswer:
      'Necesitarás una licencia de obra menor o mayor según el alcance de la reforma. El Ajuntament de Sant Cugat tiene normativa propia y plazos distintos a los de Barcelona. Las reformas interiores sin afectación estructural suelen requerir comunicación previa o licencia menor, mientras que las reformas estructurales, ampliaciones o cambios de fachada exigen licencia de obra mayor. Nuestros arquitectos gestionan todos los trámites urbanísticos.',
    answer: (
      <>
        <p>
          Necesitarás una{' '}
          <strong className="font-semibold text-neutral-950">
            licencia de obra menor o mayor
          </strong>{' '}
          según el alcance de la reforma. El Ajuntament de Sant Cugat tiene
          normativa propia y plazos distintos a los de Barcelona.
        </p>
        <p>
          Las reformas interiores sin afectación estructural suelen requerir
          comunicación previa o licencia menor, mientras que las reformas
          estructurales, ampliaciones o cambios de fachada exigen{' '}
          <strong className="font-semibold text-neutral-950">
            licencia de obra mayor
          </strong>
          . Nuestros arquitectos gestionan todos los trámites urbanísticos.
        </p>
      </>
    ),
  },
  {
    question: '¿Se puede ampliar una torre en Sant Cugat?',
    schemaAnswer:
      'Depende de la edificabilidad de la parcela según el POUM (Plan de Ordenación Urbanística Municipal) de Sant Cugat. Muchas torres tienen potencial de ampliación en planta baja o construyendo una planta adicional. Es necesario un estudio urbanístico previo para verificar el coeficiente de edificabilidad, las distancias a lindes y la altura máxima permitida. Nuestros arquitectos evalúan la viabilidad antes de iniciar el proyecto.',
    answer: (
      <>
        <p>
          Depende de la edificabilidad de la parcela según el{' '}
          <strong className="font-semibold text-neutral-950">
            POUM (Plan de Ordenación Urbanística Municipal)
          </strong>{' '}
          de Sant Cugat. Muchas torres tienen potencial de ampliación en planta
          baja o construyendo una planta adicional.
        </p>
        <p>
          Es necesario un estudio urbanístico previo para verificar el
          coeficiente de edificabilidad, las distancias a lindes y la altura
          máxima permitida. Nuestros arquitectos evalúan la viabilidad antes de
          iniciar el proyecto.
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
          name: 'Interiorista Sant Cugat',
          item: 'https://www.interiorista-barcelona.com/interiorista-sant-cugat/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'Interiorista Barcelona — Sant Cugat del Vallès',
      description:
        'Interioristas en Sant Cugat del Vallès. Miembros del colectivo operan directamente en Sant Cugat: reforma de torres, diseño de casas con jardín y proyectos de alto standing.',
      url: 'https://www.interiorista-barcelona.com/interiorista-sant-cugat/',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Carrer de Mallorca, 237',
        addressLocality: 'Barcelona',
        postalCode: '08008',
        addressCountry: 'ES',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Sant Cugat del Vallès',
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
  title:
    'Interiorista en Sant Cugat del Vallès | Diseño de Interiores Sant Cugat',
  description:
    'Interioristas en Sant Cugat del Vallès. Miembros del colectivo operan directamente en Sant Cugat: reforma de torres, diseño de casas con jardín y proyectos de alto standing. Presupuesto gratuito.',
  openGraph: {
    title:
      'Interiorista en Sant Cugat del Vallès | Diseño de Interiores Sant Cugat',
    description:
      'Interioristas en Sant Cugat del Vallès. Miembros del colectivo operan directamente en Sant Cugat: reforma de torres, diseño de casas con jardín y proyectos de alto standing. Presupuesto gratuito.',
  },
  alternates: {
    canonical: '/interiorista-sant-cugat/',
  },
}

export default function InterioristaSantCugat() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <PageIntro
        eyebrow="Interiorismo en Sant Cugat"
        title="Tu interiorista en Sant Cugat del Vallès"
      >
        <p>
          Sant Cugat del Vallès es uno de los municipios residenciales más
          exclusivos de Cataluña, a solo 20 minutos de Barcelona en FGC. Varios
          miembros de nuestro colectivo están radicados o operan directamente en
          Sant Cugat y el Vallès, ofreciendo un servicio de proximidad para
          proyectos de interiorismo, reforma y obra nueva.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Sant Cugat: vida residencial a 20 minutos de Barcelona
          </h2>
          <div className="mt-6 max-w-3xl space-y-6 text-base text-neutral-600">
            <p>
              Sant Cugat del Vallès es uno de los{' '}
              <strong className="font-semibold text-neutral-950">
                municipios con mayor renta per cápita de Cataluña
              </strong>
              , con una población de unos 90.000 habitantes y una calidad de
              vida que atrae a familias, profesionales y expatriados. La
              conexión por FGC permite llegar a Plaça Catalunya en 20 minutos,
              combinando la tranquilidad de una ciudad residencial con la
              proximidad a Barcelona.
            </p>
            <p>
              El parque residencial de Sant Cugat se caracteriza por{' '}
              <strong className="font-semibold text-neutral-950">
                torres (casas unifamiliares aisladas) con jardín y piscina
              </strong>
              , adosados en urbanizaciones como Valldoreix, Mira-sol o Les
              Planes, y edificios de viviendas modernas en el centro urbano. La
              presencia de colegios internacionales de referencia atrae a
              familias expatriadas con una demanda de interiorismo muy
              específica.
            </p>
            <p>
              La proximidad al{' '}
              <strong className="font-semibold text-neutral-950">
                Parc Natural de Collserola
              </strong>{' '}
              y el carácter históricamente rural de Sant Cugat — con su
              monasterio benedictino, sus masías y sus calles empedradas — crean
              un entorno único donde conviven la arquitectura tradicional y los
              desarrollos contemporáneos, todo ello con las comodidades urbanas
              de una ciudad moderna.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Interiorismo para casas con personalidad
          </h2>
          <div className="mt-6 max-w-3xl space-y-6 text-base text-neutral-600">
            <p>
              Las viviendas de Sant Cugat tienen superficies generosas, de{' '}
              <strong className="font-semibold text-neutral-950">
                150 a 400&nbsp;m²
              </strong>
              , lo que permite trabajar con programas funcionales amplios y una
              relación interior-exterior que es la esencia del estilo de vida
              vallesano. Jardines, porches, piscinas y barbacoas no son
              complementos: son parte integral del proyecto de interiorismo.
            </p>
            <p>
              Nuestros interioristas trabajan con{' '}
              <strong className="font-semibold text-neutral-950">
                materiales naturales adaptados al clima del Vallès
              </strong>{' '}
              — madera, piedra, lino, microcemento — y diseñan espacios
              pensados para la vida familiar: home offices para profesionales
              que teletrabajan o se desplazan a Barcelona, zonas de juego,
              suites parentales generosas y cocinas abiertas al jardín.
            </p>
            <p>
              Los{' '}
              <strong className="font-semibold text-neutral-950">
                miembros del colectivo radicados en la zona
              </strong>{' '}
              conocen los proveedores locales, las constructoras del Vallès y la
              normativa urbanística de Sant Cugat. Esta proximidad permite un
              seguimiento más estrecho de la obra y un acceso directo a
              artesanos y talleres de la comarca. En casas de gran superficie,
              la{' '}
              <strong className="font-semibold text-neutral-950">
                eficiencia energética
              </strong>{' '}
              es prioritaria: aislamiento térmico, aerotermia, paneles solares y
              domótica inteligente para reducir el consumo sin renunciar al
              confort.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro
          title="Servicios de interiorismo en Sant Cugat"
          className="mb-12"
        >
          <p>
            Nuestros interioristas ofrecen soluciones adaptadas a las torres,
            adosados y viviendas de alto standing de Sant Cugat del Vallès.
          </p>
        </SectionIntro>
        <GridList>
          <GridListItem title="Diseño de interiores">
            Proyectos integrales para torres y casas unifamiliares en Sant
            Cugat.{' '}
            <Link
              href="/diseno-interiores/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Paisajismo">
            Jardines, piscinas y espacios exteriores coordinados con el diseño
            interior.{' '}
            <Link
              href="/paisajismo/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Ampliación de vivienda">
            Ampliaciones de torres y adosados aprovechando la edificabilidad de
            la parcela.{' '}
            <Link
              href="/ampliacion-vivienda/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Arquitecto">
            Obra nueva y rehabilitación en el Vallès, con gestión integral del
            proyecto.{' '}
            <Link
              href="/arquitecto/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Rehabilitación energética">
            Eficiencia energética en casas grandes: aislamiento, aerotermia y
            domótica.{' '}
            <Link
              href="/rehabilitacion-energetica/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Asesoría compra vivienda">
            Evaluación profesional antes de comprar en Sant Cugat: estado
            estructural, potencial de reforma y costes estimados.{' '}
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
          title="Preguntas frecuentes sobre interiorismo en Sant Cugat"
          className="mb-12"
        >
          <p>
            Resolvemos las dudas más habituales sobre reformas e interiorismo en
            casas y viviendas de Sant Cugat del Vallès.
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
