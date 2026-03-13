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
    question: '¿Cuánto cuesta reformar una casa en Sitges?',
    schemaAnswer:
      'El coste de reformar una casa en Sitges oscila entre 1.200 y 2.200 €/m². Sitges es una zona premium donde las casas suelen tener superficies de 100 a 300 m². El presupuesto total de una reforma integral se sitúa entre 120.000 y 660.000 €. La proximidad a la playa y las vistas al mar incrementan significativamente el valor de la propiedad. Solicita un presupuesto personalizado y gratuito.',
    answer: (
      <>
        <p>
          El coste de reformar una casa en Sitges oscila entre{' '}
          <strong className="font-semibold text-neutral-950">
            1.200 y 2.200&nbsp;€/m²
          </strong>
          . Sitges es una zona premium donde las casas suelen tener superficies
          de 100 a 300&nbsp;m².
        </p>
        <p>
          El presupuesto total de una reforma integral se sitúa entre{' '}
          <strong className="font-semibold text-neutral-950">
            120.000 y 660.000&nbsp;€
          </strong>
          . La proximidad a la playa y las vistas al mar incrementan
          significativamente el valor de la propiedad.
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
    question: '¿Tenéis arquitectos que trabajen en Sitges?',
    schemaAnswer:
      'Sí, varios arquitectos e interioristas del colectivo operan en Sitges y la comarca del Garraf. Conocen la normativa urbanística local y las particularidades de las construcciones costeras, incluyendo los requisitos específicos para materiales resistentes a la salinidad y la humedad marina.',
    answer: (
      <>
        <p>
          Sí,{' '}
          <strong className="font-semibold text-neutral-950">
            varios arquitectos e interioristas del colectivo operan en Sitges y
            la comarca del Garraf
          </strong>
          . Conocen la normativa urbanística local y las particularidades de las
          construcciones costeras.
        </p>
        <p>
          Esto incluye los requisitos específicos para materiales resistentes a
          la salinidad y la humedad marina, así como el conocimiento de los
          proveedores y constructoras de la zona.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué permisos necesito para reformar en Sitges?',
    schemaAnswer:
      'El Ajuntament de Sitges tiene normativa específica, especialmente en el casco antiguo donde hay numerosos edificios protegidos. Las reformas interiores sin afectación estructural suelen requerir comunicación previa, mientras que las reformas estructurales o en edificios catalogados exigen licencia de obra mayor. Nuestros arquitectos gestionan todos los trámites de licencia de obra.',
    answer: (
      <>
        <p>
          El Ajuntament de Sitges tiene{' '}
          <strong className="font-semibold text-neutral-950">
            normativa específica, especialmente en el casco antiguo
          </strong>{' '}
          donde hay numerosos edificios protegidos. Las reformas interiores sin
          afectación estructural suelen requerir comunicación previa.
        </p>
        <p>
          Las reformas estructurales o en edificios catalogados exigen{' '}
          <strong className="font-semibold text-neutral-950">
            licencia de obra mayor
          </strong>
          . Nuestros arquitectos gestionan todos los trámites de licencia de
          obra.
        </p>
      </>
    ),
  },
  {
    question: '¿Se puede diseñar un alojamiento turístico en Sitges?',
    schemaAnswer:
      'Sí, Sitges es un destino turístico de primer nivel con una fuerte demanda de alojamientos de calidad. Diseñamos apartamentos vacacionales y boutique hotels optimizando la rentabilidad con un interiorismo que conecta con la identidad mediterránea del pueblo. Nuestros interioristas crean espacios que combinan funcionalidad para el huésped con una experiencia visual memorable.',
    answer: (
      <>
        <p>
          Sí,{' '}
          <strong className="font-semibold text-neutral-950">
            Sitges es un destino turístico de primer nivel
          </strong>{' '}
          con una fuerte demanda de alojamientos de calidad. Diseñamos
          apartamentos vacacionales y boutique hotels optimizando la
          rentabilidad con un interiorismo que conecta con la identidad
          mediterránea del pueblo.
        </p>
        <p>
          Nuestros interioristas crean espacios que combinan funcionalidad para
          el huésped con una experiencia visual memorable, maximizando las
          valoraciones y la ocupación.
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
          name: 'Arquitecto Sitges',
          item: 'https://www.interioristabarcelona.com/interiorista-sitges/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'Interiorista Barcelona — Sitges',
      description:
        'Arquitectos e interioristas en Sitges. Profesionales del colectivo en el Garraf: reforma de casas, villas costeras y alojamientos turísticos con diseño mediterráneo.',
      url: 'https://www.interioristabarcelona.com/interiorista-sitges/',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Carrer de Mallorca, 237',
        addressLocality: 'Barcelona',
        postalCode: '08008',
        addressCountry: 'ES',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Sitges',
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
  title: 'Arquitecto e Interiorista en Sitges | Diseño de Interiores Sitges',
  description:
    'Arquitectos e interioristas en Sitges. Profesionales del colectivo en el Garraf: reforma de casas, villas costeras y alojamientos turísticos con diseño mediterráneo. Presupuesto gratuito.',
  alternates: {
    canonical: '/interiorista-sitges/',
  },
}

export default function InterioristaSitges() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <PageIntro
        eyebrow="Arquitectura e interiorismo en Sitges"
        title="Tu arquitecto e interiorista en Sitges"
      >
        <p>
          Sitges es uno de los destinos costeros más exclusivos de Cataluña,
          a solo 40 km al sur de Barcelona. Varios arquitectos e interioristas
          de nuestro colectivo operan directamente en Sitges y la costa del
          Garraf, ofreciendo un servicio de proximidad para proyectos de
          arquitectura, reforma integral y diseño de interiores.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Sitges: arquitectura mediterránea y diseño costero
          </h2>
          <div className="mt-6 max-w-3xl space-y-6 text-base text-neutral-600">
            <p>
              Sitges es una villa costera con un{' '}
              <strong className="font-semibold text-neutral-950">
                patrimonio arquitectónico excepcional
              </strong>
              , desde el Palau Maricel y el Museu Cau Ferrat hasta las villas
              modernistas del paseo marítimo. Con unos 30.000 habitantes y una
              importante comunidad de expatriados británicos, franceses y
              holandeses, es uno de los mercados inmobiliarios más premium de la
              costa catalana.
            </p>
            <p>
              El parque residencial de Sitges es diverso:{' '}
              <strong className="font-semibold text-neutral-950">
                villas modernistas en el casco antiguo, casas en los barrios de
                Vinyet y Levantina
              </strong>
              , apartamentos modernos cerca de la playa y masías en el Parc
              Natural del Garraf. Esta variedad tipológica exige arquitectos que
              dominen tanto la rehabilitación patrimonial como el diseño
              contemporáneo.
            </p>
            <p>
              Sitges es además un{' '}
              <strong className="font-semibold text-neutral-950">
                destino turístico de primer nivel
              </strong>
              , famoso por su festival de cine, sus playas y su vida cultural.
              Muchos propietarios buscan rentabilizar sus inmuebles como
              alojamientos turísticos o boutique hotels, lo que genera una
              demanda creciente de interiorismo orientado a la hospitalidad.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Arquitectura e interiorismo con alma mediterránea
          </h2>
          <div className="mt-6 max-w-3xl space-y-6 text-base text-neutral-600">
            <p>
              Diseñar en primera línea de costa implica{' '}
              <strong className="font-semibold text-neutral-950">
                desafíos específicos: salinidad, humedad marina y exposición
                solar intensa
              </strong>
              . Nuestros arquitectos seleccionan materiales resistentes a estos
              factores — piedra natural, madera tratada, paredes encaladas,
              carpintería de aluminio marino — y diseñan espacios que maximizan
              la vida interior-exterior: terrazas, piscinas, pérgolas y vistas
              al mar.
            </p>
            <p>
              Para los{' '}
              <strong className="font-semibold text-neutral-950">
                alojamientos turísticos y boutique hotels
              </strong>
              , nuestros interioristas crean ambientes que conectan con la
              identidad mediterránea de Sitges: tonos naturales, texturas
              artesanales y una iluminación que aprovecha la luz del Mediterráneo.
              Cada proyecto se optimiza para maximizar la rentabilidad y las
              valoraciones de los huéspedes.
            </p>
            <p>
              Los{' '}
              <strong className="font-semibold text-neutral-950">
                arquitectos del colectivo que operan en Sitges
              </strong>{' '}
              conocen la normativa urbanística local, las restricciones del
              casco antiguo y las particularidades de la construcción costera.
              La{' '}
              <strong className="font-semibold text-neutral-950">
                eficiencia energética
              </strong>{' '}
              es prioritaria en un clima donde el sol es recurso y desafío:
              aislamiento térmico, ventilación cruzada, protecciones solares
              pasivas y paneles solares para reducir el consumo sin renunciar al
              confort.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro
          title="Servicios de arquitectura e interiorismo en Sitges"
          className="mb-12"
        >
          <p>
            Nuestros arquitectos e interioristas ofrecen soluciones adaptadas a
            las villas, casas costeras y proyectos de hospitalidad de Sitges y
            el Garraf.
          </p>
        </SectionIntro>
        <GridList>
          <GridListItem title="Arquitecto">
            Obra nueva, rehabilitación y reforma integral en Sitges con gestión
            completa del proyecto.{' '}
            <Link
              href="/arquitecto/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Diseño de interiores">
            Proyectos integrales para casas y villas costeras en Sitges y el
            Garraf.{' '}
            <Link
              href="/diseno-interiores/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Paisajismo">
            Jardines mediterráneos, piscinas y terrazas coordinados con el
            diseño interior.{' '}
            <Link
              href="/paisajismo/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Interiorismo comercial">
            Boutique hotels, restaurantes y espacios de hospitalidad con
            identidad mediterránea.{' '}
            <Link
              href="/interiorismo-comercial/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Home staging">
            Preparación profesional de viviendas para venta o alquiler en el
            mercado premium de Sitges.{' '}
            <Link
              href="/home-staging/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Asesoría compra vivienda">
            Evaluación profesional antes de comprar en Sitges: estado
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
          title="Preguntas frecuentes sobre arquitectura e interiorismo en Sitges"
          className="mb-12"
        >
          <p>
            Resolvemos las dudas más habituales sobre reformas, arquitectura e
            interiorismo en casas y villas de Sitges.
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
