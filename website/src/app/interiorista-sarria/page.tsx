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
    question: '¿Cuánto cuesta reformar una casa en Sarrià?',
    schemaAnswer:
      'El coste de reformar una casa en Sarrià oscila entre 1.200 y 2.000 €/m². Las casas unifamiliares del barrio son significativamente más grandes que los pisos de otros distritos, con superficies habituales de 150 a 300 m². Además, el jardín y la terraza requieren presupuesto adicional de paisajismo e instalaciones exteriores. El presupuesto total de una reforma integral suele situarse entre 180.000 y 600.000 €. Solicita un presupuesto personalizado y gratuito.',
    answer: (
      <>
        <p>
          El coste de reformar una casa en Sarrià oscila entre{' '}
          <strong className="font-semibold text-neutral-950">
            1.200 y 2.000&nbsp;€/m²
          </strong>
          . Las casas unifamiliares del barrio son significativamente más grandes
          que los pisos de otros distritos, con superficies habituales de 150 a
          300&nbsp;m².
        </p>
        <p>
          Además, el jardín y la terraza requieren presupuesto adicional de
          paisajismo e instalaciones exteriores. El presupuesto total de una
          reforma integral suele situarse entre{' '}
          <strong className="font-semibold text-neutral-950">
            180.000 y 600.000&nbsp;€
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
    question: '¿Se puede ampliar una casa unifamiliar en Sarrià?',
    schemaAnswer:
      'La posibilidad de ampliar una casa en Sarrià depende del Plan General Metropolitano y de la edificabilidad de la parcela. Según la normativa urbanística, cada parcela tiene un coeficiente de edificabilidad que determina cuántos metros cuadrados se pueden construir. Es posible ampliar en planta (añadiendo superficie al jardín) o en altura (levantando una planta adicional). En todos los casos se requiere una licencia de obra mayor y un proyecto técnico de arquitecto. Nuestros arquitectos evalúan la viabilidad antes de iniciar el proyecto.',
    answer: (
      <>
        <p>
          La posibilidad de ampliar una casa en Sarrià depende del{' '}
          <strong className="font-semibold text-neutral-950">
            Plan General Metropolitano
          </strong>{' '}
          y de la edificabilidad de la parcela. Según la normativa urbanística,
          cada parcela tiene un coeficiente de edificabilidad que determina
          cuántos metros cuadrados se pueden construir.
        </p>
        <p>
          Es posible ampliar en planta (añadiendo superficie al jardín) o en
          altura (levantando una planta adicional). En todos los casos se
          requiere una{' '}
          <strong className="font-semibold text-neutral-950">
            licencia de obra mayor
          </strong>{' '}
          y un proyecto técnico de arquitecto. Nuestros arquitectos evalúan la
          viabilidad antes de iniciar el proyecto.
        </p>
      </>
    ),
  },
  {
    question: '¿Cómo integrar un jardín en el diseño interior?',
    schemaAnswer:
      'La integración jardín-interior es una de las claves del interiorismo en Sarrià. Las soluciones más eficaces incluyen: crear continuidad visual entre interior y exterior mediante pavimentos y materiales que fluyan de dentro a fuera, instalar grandes ventanales o puertas correderas que difuminen la frontera, diseñar porches acristalados como espacios de transición, y coordinar el paisajismo del jardín con la paleta cromática y estilística del interiorismo. Nuestros interioristas trabajan en equipo con paisajistas para lograr un resultado coherente.',
    answer: (
      <>
        <p>
          La integración jardín-interior es una de las claves del interiorismo
          en Sarrià. Las soluciones más eficaces incluyen: crear{' '}
          <strong className="font-semibold text-neutral-950">
            continuidad visual entre interior y exterior
          </strong>{' '}
          mediante pavimentos y materiales que fluyan de dentro a fuera.
        </p>
        <p>
          Instalar grandes ventanales o puertas correderas que difuminen la
          frontera, diseñar{' '}
          <strong className="font-semibold text-neutral-950">
            porches acristalados
          </strong>{' '}
          como espacios de transición, y coordinar el paisajismo del jardín con
          la paleta cromática y estilística del interiorismo.
        </p>
        <p>
          Nuestros interioristas trabajan en equipo con paisajistas para lograr
          un resultado coherente.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Merece la pena rehabilitar una casa antigua en Sarrià o construir nueva?',
    schemaAnswer:
      'Depende del estado estructural de la casa. En muchos casos, rehabilitar es más sostenible y permite conservar el carácter original de la vivienda: molduras, suelos hidráulicos, carpintería de madera, jardines maduros. Sin embargo, la construcción nueva ofrece más libertad funcional y permite optimizar la eficiencia energética desde cero. Nuestros arquitectos e interioristas analizan cada caso para recomendar la mejor opción en función del estado del inmueble, el presupuesto disponible y los objetivos del cliente.',
    answer: (
      <>
        <p>
          Depende del estado estructural de la casa. En muchos casos,{' '}
          <strong className="font-semibold text-neutral-950">
            rehabilitar es más sostenible
          </strong>{' '}
          y permite conservar el carácter original de la vivienda: molduras,
          suelos hidráulicos, carpintería de madera, jardines maduros.
        </p>
        <p>
          Sin embargo, la construcción nueva ofrece más{' '}
          <strong className="font-semibold text-neutral-950">
            libertad funcional
          </strong>{' '}
          y permite optimizar la eficiencia energética desde cero. Nuestros
          arquitectos e interioristas analizan cada caso para recomendar la
          mejor opción en función del estado del inmueble, el presupuesto
          disponible y los objetivos del cliente.
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
          name: 'Interiorista Sarrià',
          item: 'https://www.interioristabarcelona.com/interiorista-sarria/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'Interiorista Barcelona — Sarrià-Sant Gervasi',
      description:
        'Interioristas especializados en Sarrià-Sant Gervasi, Barcelona. Diseño de casas unifamiliares, integración jardín-interior y reformas de alto standing.',
      url: 'https://www.interioristabarcelona.com/interiorista-sarria/',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Carrer de Mallorca, 237',
        addressLocality: 'Barcelona',
        postalCode: '08008',
        addressCountry: 'ES',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Sarrià-Sant Gervasi, Barcelona',
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
    'Interiorista en Sarrià | Diseño de Interiores Sarrià-Sant Gervasi Barcelona',
  description:
    'Interioristas en Sarrià-Sant Gervasi, Barcelona. Diseño de casas unifamiliares, integración jardín-interior y reformas de alto standing. Presupuesto gratuito.',
  alternates: {
    canonical: '/interiorista-sarria/',
  },
}

export default function InterioristaSarria() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <PageIntro
        eyebrow="Interiorismo en Sarrià"
        title="Tu interiorista en Sarrià-Sant Gervasi"
      >
        <p>
          Sarrià-Sant Gervasi es el distrito residencial más exclusivo de
          Barcelona, con casas unifamiliares, jardines privados y un entorno
          privilegiado al pie de Collserola. Nuestros interioristas diseñan
          espacios a la altura de este enclave único.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Sarrià-Sant Gervasi: residencial de alto standing
          </h2>
          <div className="mt-6 max-w-3xl space-y-6 text-base text-neutral-600">
            <p>
              Antiguo pueblo independiente anexionado a Barcelona en 1921,
              Sarrià conserva un{' '}
              <strong className="font-semibold text-neutral-950">
                carácter de villa residencial
              </strong>{' '}
              con calles tranquilas, plazas arboladas y una arquitectura que
              combina torres modernistas, casas entre medianeras y edificios
              señoriales de alto standing.
            </p>
            <p>
              El distrito alberga la mayor concentración de{' '}
              <strong className="font-semibold text-neutral-950">
                casas unifamiliares con jardín
              </strong>{' '}
              de toda Barcelona. Desde torres aisladas con parcelas amplias
              hasta casas entre medianeras con patio posterior, la tipología de
              vivienda en Sarrià es radicalmente distinta a la de los barrios
              céntricos. Esta singularidad exige un enfoque de interiorismo
              diferente, centrado en la relación con el exterior y la gestión
              de grandes superficies.
            </p>
            <p>
              La proximidad al{' '}
              <strong className="font-semibold text-neutral-950">
                parque natural de Collserola
              </strong>
              , la presencia de colegios internacionales y una comunidad de
              familias expatriadas convierten a Sarrià en un barrio con una
              demanda muy específica de interiorismo: viviendas amplias,
              funcionales y conectadas con la naturaleza.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Diseño interior para casas con jardín
          </h2>
          <div className="mt-6 max-w-3xl space-y-6 text-base text-neutral-600">
            <p>
              Diseñar una casa unifamiliar no tiene nada que ver con reformar un
              piso. En Sarrià, el reto principal es crear una{' '}
              <strong className="font-semibold text-neutral-950">
                continuidad interior-exterior
              </strong>{' '}
              que integre terrazas, jardines y porches en el proyecto de
              interiorismo. Grandes ventanales que maximizan las vistas a la
              montaña, puertas correderas que difuminan la frontera entre
              salón y jardín, y materiales naturales — madera, piedra, lino —
              que crean un diálogo con el entorno.
            </p>
            <p>
              Nuestros interioristas trabajan la{' '}
              <strong className="font-semibold text-neutral-950">
                integración de piscinas, outdoor living
              </strong>{' '}
              y zonas de barbacoa como extensiones del hogar, no como elementos
              aislados. El paisajismo se coordina con el diseño interior para
              lograr una experiencia coherente desde el primer paso.
            </p>
            <p>
              En casas de gran superficie (200-400&nbsp;m²), la{' '}
              <strong className="font-semibold text-neutral-950">
                eficiencia energética
              </strong>{' '}
              cobra especial importancia. Aislamiento térmico, aerotermia,
              paneles solares y domótica inteligente son elementos que
              integramos en el proyecto para reducir el consumo y mejorar el
              confort en viviendas de estas dimensiones.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro
          title="Servicios de interiorismo en Sarrià"
          className="mb-12"
        >
          <p>
            Nuestros interioristas ofrecen soluciones adaptadas a las casas
            unifamiliares y viviendas de alto standing de Sarrià-Sant Gervasi.
          </p>
        </SectionIntro>
        <GridList>
          <GridListItem title="Diseño de interiores">
            Proyectos integrales para casas unifamiliares con jardín, torres y
            pisos de alto standing en Sarrià.{' '}
            <Link
              href="/diseno-interiores/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Paisajismo">
            Diseño de jardines y espacios exteriores coordinado con el
            interiorismo para una experiencia coherente.{' '}
            <Link
              href="/paisajismo/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Ampliación de vivienda">
            Ampliaciones y reformas de torres y casas unifamiliares,
            aprovechando la edificabilidad de la parcela.{' '}
            <Link
              href="/ampliacion-vivienda/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Rehabilitación energética">
            Eficiencia energética en casas grandes: aislamiento, aerotermia,
            paneles solares y domótica.{' '}
            <Link
              href="/rehabilitacion-energetica/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Arquitecto">
            Proyectos de obra nueva y rehabilitación estructural para casas y
            torres en Sarrià.{' '}
            <Link
              href="/arquitecto/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Asesoría compra vivienda">
            Evaluación profesional de casas y torres antes de la compra:
            estado estructural, potencial de reforma y costes estimados.{' '}
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
          title="Preguntas frecuentes sobre interiorismo en Sarrià"
          className="mb-12"
        >
          <p>
            Resolvemos las dudas más habituales sobre reformas e interiorismo
            en casas y viviendas de Sarrià-Sant Gervasi.
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
