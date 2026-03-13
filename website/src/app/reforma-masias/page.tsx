import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { ServiceSummary } from '@/components/ServiceSummary'
import { PricingBlock } from '@/components/PricingBlock'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageFachada from '@/images/reforma-masia-fachada-piedra-restaurada-campagne-barcelona.webp'
import imageSalon from '@/images/reforma-masia-salon-vigas-madera-boveda-catalana.webp'
import imageCocina from '@/images/reforma-masia-cocina-chimenea-piedra-suelo-terracota.jpg.webp'
import imageVistaAerea from '@/images/reforma-masia-vista-aerea-valles-piscina-olivar.webp'
import imageSuite from '@/images/reforma-masia-suite-combles-piedra-chaux-bano-abierto.webp'
import imageTerraza from '@/images/reforma-masia-terraza-pergola-vinedo-penedes.webp'
import imageSalonVitree from '@/images/reforma-masia-salon-baie-vitree-campagne-catalane.webp'
import { LatestProjects } from '@/components/LatestProjects'
import {
  TestimonialSlider,
  type TestimonialItem,
} from '@/components/TestimonialSlider'
import { FAQAccordion } from './faq-accordion'

const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'Heredamos la masía familiar en un estado precario y no sabíamos por dónde empezar. El interiorista coordinó todo el proceso: la consolidación de los muros, la restauración de las bóvedas y un diseño interior que respeta la historia de la casa. Ahora es nuestra residencia principal.',
    client: 'Jordi y Neus P., reforma de masía en el Vallès Oriental',
  },
  {
    quote:
      'Queríamos convertir una antigua masía agrícola en casa de fin de semana. El equipo gestionó el cambio de uso, resolvió los problemas estructurales y creó espacios luminosos sin perder el carácter rústico. El resultado ha superado nuestras expectativas.',
    client: 'Marc y Laura S., conversión de masía en el Maresme',
  },
  {
    quote:
      'Compramos una masía del siglo XVII en las afueras de Barcelona y necesitábamos especialistas que entendieran la construcción tradicional catalana. El equipo conservó los muros de piedra y los techos abovedados mientras creaba un interior completamente moderno. Gestionaron todos los permisos y coordinaron a los canteros y carpinteros de maravilla.',
    client: 'James & Emily W., reforma de masía en el Penedès',
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
    question: '¿Cuánto cuesta reformar una masía en Cataluña?',
    schemaAnswer:
      'El coste de reformar una masía en Cataluña oscila entre 900 y 1.500 €/m² dependiendo del estado de conservación, la complejidad estructural y el nivel de acabados. Una reforma integral de una masía de 400 m² puede situarse entre 360.000 € y 600.000 €. Este presupuesto incluye consolidación estructural, rehabilitación de cubierta, instalaciones completas, carpintería, acabados interiores y honorarios técnicos. Las subvenciones de rehabilitación pueden cubrir parte de la inversión.',
    answer: (
      <>
        <p>
          El coste oscila entre{' '}
          <strong className="font-semibold text-neutral-950">
            900 y 1.500&nbsp;€/m²
          </strong>{' '}
          dependiendo del estado de conservación, la complejidad estructural y
          el nivel de acabados.
        </p>
        <p>
          Una reforma integral de una masía de 400&nbsp;m² puede situarse entre{' '}
          <strong className="font-semibold text-neutral-950">
            360.000&nbsp;€ y 600.000&nbsp;€
          </strong>
          . Este presupuesto incluye consolidación estructural, rehabilitación
          de cubierta, instalaciones completas, carpintería, acabados interiores
          y honorarios técnicos.
        </p>
        <p>
          Consulta nuestras{' '}
          <Link
            href="/precios/#reforma-masias"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            tarifas de reforma de masías
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: '¿Qué permisos necesito para reformar una masía?',
    schemaAnswer:
      'Para reformar una masía en Cataluña necesitas una licencia de obra mayor otorgada por el ayuntamiento correspondiente. Además, debes consultar el POUM (Plan de Ordenación Urbanística Municipal) para verificar las condiciones de edificabilidad en suelo rural. Si la masía está incluida en el catálogo municipal de masías o tiene protección BCIN/BCIL como patrimonio cultural, se aplican restricciones adicionales. Nuestro equipo gestiona toda la tramitación urbanística.',
    answer: (
      <>
        <p>
          Para reformar una masía necesitas una{' '}
          <strong className="font-semibold text-neutral-950">
            licencia de obra mayor
          </strong>{' '}
          otorgada por el ayuntamiento correspondiente. Además, debes consultar
          el{' '}
          <strong className="font-semibold text-neutral-950">
            POUM (Plan de Ordenación Urbanística Municipal)
          </strong>{' '}
          para verificar las condiciones de edificabilidad en suelo rural.
        </p>
        <p>
          Si la masía está incluida en el catálogo municipal de masías o tiene
          protección BCIN/BCIL como patrimonio cultural, se aplican
          restricciones adicionales. Nuestro equipo gestiona toda la tramitación
          urbanística.
        </p>
      </>
    ),
  },
  {
    question: '¿Cuánto tiempo dura la reforma de una masía?',
    schemaAnswer:
      'La duración de la reforma de una masía depende del alcance de la intervención. Una reforma integral suele durar entre 12 y 24 meses: 2-3 meses para el proyecto y licencias, 8-18 meses de obra según la superficie y la complejidad estructural, y 1-2 meses para acabados y entrega. Las masías con problemas estructurales graves o con protección patrimonial pueden requerir plazos más largos.',
    answer: (
      <>
        <p>
          La duración depende del alcance de la intervención. Una reforma
          integral suele durar entre{' '}
          <strong className="font-semibold text-neutral-950">
            12 y 24 meses
          </strong>
          : 2-3 meses para el proyecto y licencias, 8-18 meses de obra según la
          superficie y la complejidad estructural, y 1-2 meses para acabados y
          entrega.
        </p>
        <p>
          Las masías con problemas estructurales graves o con protección
          patrimonial pueden requerir plazos más largos.
        </p>
      </>
    ),
  },
  {
    question: '¿Puedo convertir una masía agrícola en vivienda?',
    schemaAnswer:
      'Sí, es posible convertir una masía agrícola en vivienda, pero requiere un cambio de uso urbanístico. La viabilidad depende del POUM del municipio, que regula los usos permitidos en suelo no urbanizable. En muchos municipios catalanes, las masías catalogadas pueden obtener el cambio de uso a vivienda. El proceso incluye: informe urbanístico previo, proyecto técnico con justificación del cambio de uso, licencia de obra mayor y certificado de final de obra con la nueva calificación.',
    answer: (
      <>
        <p>
          Sí, es posible, pero requiere un{' '}
          <strong className="font-semibold text-neutral-950">
            cambio de uso urbanístico
          </strong>
          . La viabilidad depende del POUM del municipio, que regula los usos
          permitidos en suelo no urbanizable.
        </p>
        <p>
          En muchos municipios catalanes, las masías catalogadas pueden obtener
          el cambio de uso a vivienda. El proceso incluye: informe urbanístico
          previo, proyecto técnico, licencia de obra mayor y certificado de
          final de obra con la nueva calificación.
        </p>
      </>
    ),
  },
  {
    question: '¿Cómo preservar los elementos originales durante la reforma?',
    schemaAnswer:
      'Preservar los elementos originales de una masía (bóveda catalana, muros de piedra, vigas de madera, pavimentos de terracota, chimeneas) requiere un diagnóstico previo detallado y técnicas de restauración especializadas. Los canteros y carpinteros con experiencia en patrimonio vernáculo catalán utilizan morteros de cal, tratamientos de madera compatibles y técnicas de consolidación reversibles. Nuestro equipo identifica y protege cada elemento de valor antes de iniciar la obra.',
    answer: (
      <>
        <p>
          Preservar los elementos originales (bóveda catalana, muros de piedra,
          vigas de madera, pavimentos de terracota, chimeneas) requiere un{' '}
          <strong className="font-semibold text-neutral-950">
            diagnóstico previo detallado
          </strong>{' '}
          y técnicas de restauración especializadas.
        </p>
        <p>
          Los canteros y carpinteros con experiencia en patrimonio vernáculo
          catalán utilizan{' '}
          <strong className="font-semibold text-neutral-950">
            morteros de cal, tratamientos de madera compatibles
          </strong>{' '}
          y técnicas de consolidación reversibles. Nuestro equipo identifica y
          protege cada elemento de valor antes de iniciar la obra.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué subvenciones existen para rehabilitar masías en 2026?',
    schemaAnswer:
      "En 2026 existen varias líneas de ayuda aplicables a la rehabilitación de masías en Cataluña: los fondos Next Generation EU para rehabilitación energética (40-80% de subvención), las ayudas de la Agència de l'Habitatge de Catalunya para rehabilitación de viviendas rurales, subvenciones municipales para masías catalogadas, deducciones en el IRPF del 20% al 60% por mejoras energéticas, y el IVA reducido del 10% en obras de rehabilitación. La combinación de estas ayudas puede cubrir una parte significativa de la inversión.",
    answer: (
      <>
        <p>
          En 2026 existen varias líneas de ayuda aplicables a la rehabilitación
          de masías:
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Next Generation EU
          </strong>{' '}
          para rehabilitación energética (40-80%), ayudas de la{' '}
          <strong className="font-semibold text-neutral-950">
            Agència de l&apos;Habitatge de Catalunya
          </strong>{' '}
          para viviendas rurales, subvenciones municipales para masías
          catalogadas, deducciones IRPF del 20% al 60% por mejoras energéticas,
          e IVA reducido del 10%.
        </p>
        <p>
          La combinación de estas ayudas puede cubrir una parte significativa de
          la inversión.{' '}
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Consulta con nuestro equipo
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question:
      '¿Qué hace especial la reforma de una masía frente a una vivienda urbana?',
    schemaAnswer:
      'La reforma de una masía presenta particularidades que la diferencian de una vivienda urbana: muros portantes de piedra de gran espesor que requieren técnicas de consolidación específicas, cubiertas con estructura de vigas de madera y teja árabe, bóvedas catalanas que deben preservarse, instalaciones inexistentes o muy antiguas que hay que crear desde cero, normativa urbanística de suelo rural diferente a la urbana, y accesibilidad limitada que complica la logística de obra. Por eso es fundamental contar con profesionales con experiencia en patrimonio vernáculo catalán.',
    answer: (
      <>
        <p>
          La reforma de una masía presenta particularidades únicas:{' '}
          <strong className="font-semibold text-neutral-950">
            muros portantes de piedra
          </strong>{' '}
          que requieren técnicas de consolidación específicas, cubiertas con
          vigas de madera y teja árabe, bóvedas catalanas que deben preservarse,
          e instalaciones que hay que crear prácticamente desde cero.
        </p>
        <p>
          Además, la{' '}
          <strong className="font-semibold text-neutral-950">
            normativa urbanística de suelo rural
          </strong>{' '}
          es diferente a la urbana, y la accesibilidad limitada complica la
          logística de obra. Por eso es fundamental contar con profesionales con
          experiencia en patrimonio vernáculo catalán.
        </p>
      </>
    ),
  },
  {
    question: '¿En qué comarcas de Barcelona intervenís?',
    schemaAnswer:
      'Intervenimos en las principales comarcas con masías de la provincia de Barcelona y alrededores: Vallès Oriental y Occidental, Maresme, Alt Penedès, Baix Llobregat, Garraf y la zona del Montseny (Osona). También atendemos proyectos en comarcas limítrofes como el Bages, el Berguedà y la Garrotxa. Contacta con nosotros para consultar la disponibilidad en tu zona.',
    answer: (
      <>
        <p>
          Intervenimos en las principales comarcas con masías de la provincia de
          Barcelona y alrededores:{' '}
          <strong className="font-semibold text-neutral-950">
            Vallès Oriental y Occidental, Maresme, Alt Penedès, Baix Llobregat,
            Garraf
          </strong>{' '}
          y la zona del{' '}
          <strong className="font-semibold text-neutral-950">
            Montseny (Osona)
          </strong>
          .
        </p>
        <p>
          También atendemos proyectos en comarcas limítrofes como el Bages, el
          Berguedà y la Garrotxa.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Contacta con nosotros
          </Link>{' '}
          para consultar la disponibilidad en tu zona.
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
          name: 'Reforma de masías',
          item: 'https://www.interioristabarcelona.com/reforma-masias/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.interioristabarcelona.com/reforma-masias/#service',
      name: 'Reforma de masías en Barcelona y Cataluña',
      description:
        'Servicio de reforma y rehabilitación de masías catalanas: consolidación estructural, restauración de elementos patrimoniales, mejora energética, diseño interior y gestión de permisos urbanísticos.',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Barcelona',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Cataluña',
        },
      ],
      serviceType: 'Reforma y rehabilitación de masías',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '60',
        unitText: 'por m²',
        description: 'Proyecto de reforma integral de masía desde 60 €/m²',
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
      areaServed: [
        { '@type': 'City', name: 'Barcelona' },
        { '@type': 'City', name: 'Sant Cugat del Vallès' },
        { '@type': 'City', name: 'Sabadell' },
        { '@type': 'City', name: 'Terrassa' },
        { '@type': 'City', name: 'Sitges' },
        { '@type': 'City', name: 'Mataró' },
        { '@type': 'City', name: 'Manresa' },
      ],
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
        '@id': 'https://www.interioristabarcelona.com/reforma-masias/#service',
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
  ],
}

export const metadata: Metadata = {
  title: 'Reforma de masías en Barcelona y Cataluña | Rehabilitación 2026',
  description:
    'Reforma y rehabilitación de masías catalanas: consolidación estructural, restauración de elementos patrimoniales, mejora energética y diseño interior. Presupuesto gratuito por interioristas y arquitectos titulados.',
  openGraph: {
    type: 'website',
    title: 'Reforma de masías en Barcelona y Cataluña | Rehabilitación 2026',
    description:
      'Reforma y rehabilitación de masías catalanas: consolidación estructural, restauración de elementos patrimoniales, mejora energética y diseño interior. Presupuesto gratuito por interioristas y arquitectos titulados.',
  },
  alternates: {
    canonical: '/reforma-masias/',
  },
}

export default function ReformaMasiasPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Nuestros servicios"
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Nuestros servicios' },
        ]}
        title="Reforma de masías en Barcelona y Cataluña"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Rehabilitación integral de masías catalanas: preservar la
          autenticidad, crear espacios de vida contemporáneos
        </p>
        <p className="mt-6">
          Nuestros interioristas y arquitectos te acompañan en la reforma de tu
          masía: consolidación estructural, restauración de elementos
          patrimoniales, mejora energética, diseño interior y gestión de
          permisos urbanísticos.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      <ServiceSummary
        title="En resumen: Reforma de masías en Cataluña"
        items={[
          { label: 'Plazo medio', value: '8 a 18 meses' },
          { label: 'Zona', value: 'Cataluña (Vallès, Penedès, Empordà, Garrotxa)' },
          { label: 'Incluye', value: 'Diagnóstico, proyecto, licencias, obra' },
          { label: 'Patrimonio', value: 'Restauración respetuosa de elementos históricos' },
          { label: 'Normativa', value: 'Urbanismo rural y patrimonio cultural' },
        ]}
      />

      {/* 2. ¿Cuándo plantearse la reforma de una masía? */}
      <SectionIntro
        eyebrow="Indicadores"
        title="¿Cuándo plantearse la reforma de una masía?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Si reconoces alguna de estas situaciones, es el momento de consultar a
          un profesional para evaluar tu proyecto de masía.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Masía heredada">
            Has heredado una masía familiar y quieres rehabilitarla para
            convertirla en tu residencia principal o secundaria, preservando su
            carácter histórico.
          </GridListItem>
          <GridListItem title="Adquisición reciente">
            Has comprado o estás pensando en adquirir una masía y necesitas
            evaluar el alcance de la reforma y la viabilidad del proyecto antes
            de comprometerte.
          </GridListItem>
          <GridListItem title="Segunda residencia">
            Quieres transformar una masía en tu refugio de fin de semana o
            vacaciones, con todas las comodidades contemporáneas sin perder la
            esencia rústica.
          </GridListItem>
          <GridListItem title="Conversión de uso agrícola a residencial">
            Tu masía tiene un uso agrícola o está abandonada y deseas
            convertirla en vivienda, lo que requiere un cambio de uso
            urbanístico y un proyecto específico.
          </GridListItem>
          <GridListItem title="Problemas estructurales visibles">
            Grietas en muros, vigas dañadas, cubierta con filtraciones o
            cimientos inestables: señales que requieren una intervención de
            consolidación estructural urgente.
          </GridListItem>
          <GridListItem title="Mejora energética obligatoria">
            Tu masía carece de aislamiento térmico, calefacción eficiente o
            instalaciones actualizadas, y los costes energéticos son
            insostenibles.{' '}
            <Link
              href="/rehabilitacion-energetica/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Consulta nuestro servicio de rehabilitación energética
            </Link>
            .
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. ¿Por qué contar con un interiorista? */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué contar con un interiorista para reformar tu masía?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          La reforma de una masía no es una reforma convencional. Requiere una
          visión integral que combine patrimonio, técnica y diseño.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Visión integral interior + exterior">
            El interiorista coordina la reforma estructural con el diseño de
            interiores para que cada decisión técnica sea también una decisión
            estética, desde los muros de piedra hasta el mobiliario a medida.
          </GridListItem>
          <GridListItem title="Preservación del patrimonio vernáculo">
            Identifica y protege los elementos de valor patrimonial — bóvedas
            catalanas, arcadas de piedra, vigas de madera, pavimentos originales
            — integrándolos en el diseño contemporáneo.
          </GridListItem>
          <GridListItem title="Gestión normativa rural">
            Domina la normativa específica del suelo rural catalán: POUM,
            catálogos municipales de masías, licencias de obra mayor y
            protecciones BCIN/BCIL del patrimonio cultural.
          </GridListItem>
          <GridListItem title="Coordinación de gremios especializados">
            Selecciona y coordina canteros, carpinteros de armar, albañiles
            especializados en obra de piedra, herreros y otros oficios
            tradicionales imprescindibles en la rehabilitación de masías.
          </GridListItem>
          <GridListItem title="Rehabilitación energética integrada">
            Integra la mejora energética (aislamiento, aerotermia, carpinterías)
            como parte del proyecto global, garantizando soluciones compatibles
            con los materiales históricos.
          </GridListItem>
          <GridListItem title="Presupuesto y plazos controlados">
            Establece un presupuesto detallado por partidas y un calendario de
            obra realista, gestionando las contingencias habituales en la
            rehabilitación de edificios antiguos.
          </GridListItem>
        </GridList>
      </Container>

      {/* 4. Elementos arquitectónicos de la masía catalana */}
      <SectionIntro
        eyebrow="Patrimonio"
        title="Elementos arquitectónicos de la masía catalana"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          La masía catalana es un patrimonio vernáculo único. Cada elemento
          constructivo — piedra, madera, cerámica — cuenta una historia de
          siglos que merece ser preservada e integrada en el diseño
          contemporáneo.
        </p>
      </SectionIntro>

      {/* 5. 3 bloques de materiales y técnicas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Muros de piedra y bóvedas catalanas"
          image={{ src: imageFachada, alt: 'Fachada de piedra restaurada de masía cerca de Barcelona' }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Los{' '}
              <strong className="font-semibold text-neutral-950">
                muros portantes de piedra
              </strong>{' '}
              son el elemento estructural fundamental de la masía catalana, con
              espesores de 50 a 80&nbsp;cm. Su consolidación requiere técnicas
              compatibles: inyecciones de mortero de cal, cosido de grietas con
              varillas de acero inoxidable y rejuntado con morteros
              tradicionales.
            </p>
            <p>
              La{' '}
              <strong className="font-semibold text-neutral-950">
                bóveda catalana
              </strong>{' '}
              (volta catalana) es una de las señas de identidad de la
              arquitectura vernácula. Su restauración exige albañiles
              especializados que dominen la técnica de construcción con rasilla
              cerámica y mortero rápido.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Consolidación de muros de piedra">
              Inyecciones de mortero de cal, cosido de grietas, recalce de
              cimentaciones y restauración de aparejos de piedra originales.
            </ListItem>
            <ListItem title="Restauración de bóvedas">
              Reparación y refuerzo de bóvedas catalanas, arcos y arcadas con
              técnicas tradicionales y materiales compatibles.
            </ListItem>
            <ListItem title="Aislamiento compatible">
              Aislamiento térmico por el interior con materiales transpirables
              (cal-cáñamo, fibra de madera) que respetan la permeabilidad al
              vapor de los muros de piedra.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Vigas de madera y cubiertas tradicionales"
          image={{ src: imageSalon, shape: 1, alt: 'Salón con vigas de madera y bóveda catalana en masía' }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Las{' '}
              <strong className="font-semibold text-neutral-950">
                vigas de madera
              </strong>{' '}
              de las masías catalanas (generalmente de roble o pino) son
              elementos estructurales y decorativos de gran valor. Su
              recuperación incluye tratamientos contra xilófagos, refuerzo
              estructural cuando es necesario y acabados que respetan la pátina
              original.
            </p>
            <p>
              La{' '}
              <strong className="font-semibold text-neutral-950">
                cubierta tradicional
              </strong>{' '}
              con teja árabe sobre entramado de madera requiere una
              rehabilitación cuidadosa: sustitución selectiva de piezas dañadas,
              impermeabilización compatible y aislamiento térmico que no altere
              la ventilación natural del conjunto.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Tratamiento y recuperación de vigas">
              Diagnóstico del estado de la madera, tratamiento curativo y
              preventivo contra insectos xilófagos, refuerzos puntuales con
              prótesis de madera o resina epoxi.
            </ListItem>
            <ListItem title="Rehabilitación de cubiertas">
              Desmontaje y recolocación de teja árabe original, reparación del
              entramado de madera, impermeabilización transpirable y aislamiento
              con fibra de madera.
            </ListItem>
            <ListItem title="Forjados y entreplantas">
              Refuerzo de forjados de madera existentes o creación de nuevos
              forjados compatibles con la estructura de piedra de la masía.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Pavimentos, chimeneas y elementos decorativos"
          image={{ src: imageCocina, shape: 2, alt: 'Cocina con chimenea de piedra y suelo de terracota en masía' }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Los{' '}
              <strong className="font-semibold text-neutral-950">
                pavimentos originales
              </strong>{' '}
              de las masías — baldosa hidráulica, terracota artesanal, losa de
              piedra — son piezas de gran valor que merecen ser recuperadas.
              Cuando su estado no lo permite, se buscan materiales artesanales
              contemporáneos que dialogan con el entorno histórico.
            </p>
            <p>
              Las{' '}
              <strong className="font-semibold text-neutral-950">
                chimeneas, escaleras de piedra, puertas antiguas
              </strong>{' '}
              y otros elementos decorativos son el alma de la masía. Su
              restauración cuidadosa y su integración en el proyecto de
              interiorismo confieren a cada casa un carácter único e
              irreproducible.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Recuperación de pavimentos">
              Limpieza, reparación y tratamiento de suelos de baldosa
              hidráulica, terracota y piedra natural. Reposición con piezas
              artesanales cuando es necesario.
            </ListItem>
            <ListItem title="Restauración de chimeneas">
              Recuperación de chimeneas de piedra o ladrillo: limpieza, refuerzo
              del conducto, restauración del hogar y adaptación para uso
              moderno.
            </ListItem>
            <ListItem title="Carpintería y herrería antiguas">
              Restauración de puertas, ventanas, barandillas y herrajes
              originales. Adaptación de carpinterías para integrar doble
              acristalamiento cuando es posible.
            </ListItem>
          </List>
        </Section>
      </div>

      {/* 6. Normativa y permisos */}
      <SectionIntro
        eyebrow="Normativa"
        title="Normativa y permisos para reformar una masía en Cataluña"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          La reforma de una masía está sujeta a una normativa urbanística
          específica del suelo rural catalán. Tu interiorista gestiona toda la
          tramitación administrativa.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Catálogo municipal de masías">
            Muchos municipios catalanes tienen un catálogo de masías y casas
            rurales que regula las intervenciones permitidas según el nivel de
            protección asignado a cada edificio.
          </GridListItem>
          <GridListItem title="POUM — Normativa urbanística rural">
            El Plan de Ordenación Urbanística Municipal establece las
            condiciones de edificabilidad, usos permitidos y parámetros de
            reforma en suelo no urbanizable donde se ubican las masías.
          </GridListItem>
          <GridListItem title="Licencia de obra mayor">
            Toda reforma integral de masía requiere licencia de obra mayor del
            ayuntamiento, con proyecto técnico visado por el colegio profesional
            correspondiente.
          </GridListItem>
          <GridListItem title="BCIN/BCIL — Patrimonio cultural">
            Las masías declaradas Bien Cultural de Interés Nacional (BCIN) o
            Local (BCIL) tienen restricciones adicionales y requieren
            autorización de la Generalitat de Catalunya.
          </GridListItem>
          <GridListItem title="Subvenciones de rehabilitación">
            Fondos Next Generation EU, ayudas de la Agència de l&apos;Habitatge
            de Catalunya y subvenciones municipales para la rehabilitación de
            masías catalogadas y mejora energética del parque rural.
          </GridListItem>
          <GridListItem title="Certificado energético">
            Al finalizar la reforma, es obligatorio obtener el certificado de
            eficiencia energética (CEE) de la vivienda.{' '}
            <Link
              href="/rehabilitacion-energetica/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              Más sobre rehabilitación energética
            </Link>
            .
          </GridListItem>
        </GridList>
      </Container>

      {/* 7. Tu proyecto en 3 etapas — intro */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Tu proyecto de reforma de masía en 3 etapas"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Te acompañamos desde la primera visita hasta la entrega de llaves,
          coordinando todos los agentes del proyecto para garantizar un
          resultado fiel a tu visión.
        </p>
      </SectionIntro>

      {/* 8. Proceso en 3 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Evaluación y diagnóstico"
          image={{ src: imageVistaAerea, alt: 'Vista aérea de masía con piscina y olivar en el Vallès' }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              El interiorista visita la masía para realizar un{' '}
              <strong className="font-semibold text-neutral-950">
                diagnóstico completo
              </strong>
              : estado de los muros de piedra, vigas y cubierta, presencia de
              humedad, estabilidad de cimientos, estado de las instalaciones y
              evaluación de los elementos patrimoniales a preservar.
            </p>
            <p>
              Estudia la{' '}
              <strong className="font-semibold text-neutral-950">
                situación urbanística
              </strong>{' '}
              de la finca (catálogo de masías, POUM, protecciones patrimoniales)
              y evalúa la viabilidad del proyecto según tus objetivos y
              presupuesto.
            </p>
            <p>
              Si estás en fase de compra, ofrecemos un{' '}
              <strong className="font-semibold text-neutral-950">
                servicio de asesoría pre-compra
              </strong>{' '}
              para evaluar el potencial de la masía y estimar la inversión
              necesaria antes de comprometerte.{' '}
              <Link
                href="/asesoria-compra-vivienda/"
                className="font-semibold text-neutral-950 underline hover:text-neutral-700"
              >
                Consulta nuestro servicio de asesoría de compra
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section
          title="Proyecto y diseño"
          image={{ src: imageSuite, shape: 1, alt: 'Suite bajo techo de piedra y cal con baño abierto en masía' }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Elaboramos el{' '}
              <strong className="font-semibold text-neutral-950">
                proyecto de ejecución
              </strong>{' '}
              con planos arquitectónicos, cálculo estructural, instalaciones,
              selección de materiales y visualizaciones 3D para que puedas
              anticipar el resultado final.
            </p>
            <p>
              El proyecto integra las decisiones de interiorismo — distribución,
              materiales, iluminación, mobiliario — con las soluciones
              estructurales y energéticas, para un resultado coherente en todos
              los aspectos.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Planos y visualizaciones 3D">
              Plantas, alzados, secciones y renders fotorrealistas que permiten
              visualizar el resultado antes de iniciar la obra.
            </ListItem>
            <ListItem title="Selección de materiales">
              Especificación de piedra, madera, cerámica, carpinterías y
              acabados, priorizando materiales artesanales y locales compatibles
              con la masía.
            </ListItem>
            <ListItem title="Tramitación de licencias">
              Preparación y presentación de toda la documentación necesaria para
              obtener la licencia de obra mayor y las autorizaciones
              patrimoniales.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Ejecución de obra y entrega"
          image={{ src: imageTerraza, shape: 2, alt: 'Terraza con pérgola y viñedo en masía del Penedès' }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Coordinamos todos los{' '}
              <strong className="font-semibold text-neutral-950">
                gremios especializados
              </strong>
              : canteros, carpinteros de armar, albañiles de obra de piedra,
              herreros, instaladores y pintores. Cada oficio interviene en el
              momento preciso para respetar el calendario de obra.
            </p>
            <p>
              Realizamos visitas periódicas a la obra para controlar la calidad
              de ejecución, verificar el cumplimiento de las especificaciones
              técnicas y asegurar los plazos previstos.
            </p>
            <p>
              Al finalizar, gestionamos las{' '}
              <strong className="font-semibold text-neutral-950">
                certificaciones
              </strong>{' '}
              (final de obra, habitabilidad, certificado energético) y la
              justificación documental de las subvenciones recibidas.
            </p>
          </div>
        </Section>

      {/* 9. Zonas de intervención */}
      <SectionIntro
        eyebrow="Zonas"
        title="Zonas de intervención: comarcas con masías"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Intervenimos en las principales comarcas de la provincia de Barcelona
          y alrededores donde se concentra el patrimonio de masías catalanas.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Vallès Oriental y Occidental">
            Una de las comarcas con mayor concentración de masías catalanas,
            desde pequeñas masías de secano hasta grandes propiedades
            señoriales. Excelente comunicación con Barcelona por autopista y
            tren.
          </GridListItem>
          <GridListItem title="Maresme">
            Masías costeras y de interior con el atractivo añadido de la
            proximidad al mar. Muchas masías del Maresme combinan el uso
            agrícola con espacios residenciales de gran calidad.
          </GridListItem>
          <GridListItem title="Alt Penedès">
            Tierra de viñedos y masías vinícolas con un patrimonio
            arquitectónico excepcional. Muchos proyectos combinan la
            rehabilitación de la masía con la puesta en valor de la finca
            agrícola.
          </GridListItem>
          <GridListItem title="Baix Llobregat">
            Masías del delta y del interior con proximidad inmediata a
            Barcelona. Proyectos que equilibran la vida rural con las
            necesidades de conectividad urbana.
          </GridListItem>
          <GridListItem title="Garraf">
            Masías en un entorno de gran belleza paisajística entre viñedos y el
            Parque Natural del Garraf. Normativa específica de protección del
            paisaje que requiere proyectos sensibles con el entorno.
          </GridListItem>
          <GridListItem title="Montseny y Osona">
            Masías de montaña en un entorno natural privilegiado. Los proyectos
            en esta zona requieren especial atención al aislamiento térmico y a
            la integración paisajística.
          </GridListItem>
        </GridList>
      </Container>

      {/* 10. Tarifas */}
      <PricingBlock
        id="tarifas-reforma-masias"
        name="Tarifas de reforma de masías"
        description="Servicio integral de reforma y rehabilitación de masías en Barcelona y Cataluña. Desde la visita de diagnóstico hasta la entrega de llaves, te acompañamos en cada etapa de tu proyecto."
        href="/contacto/"
        ctaLabel="Solicitar presupuesto gratuito"
        image={{ src: imageSalonVitree, shape: 0, alt: 'Salón con gran ventanal en masía de la campiña catalana' }}
        showCounter={false}
        tiers={[
          {
            name: 'Visita consejo + diagnóstico',
            price: 'Desde 250 €',
            description:
              'Visita a la masía, evaluación del estado estructural, análisis normativo urbanístico y primera estimación del alcance y presupuesto de la reforma.',
          },
          {
            name: 'Proyecto de reforma integral',
            price: 'Desde 60 €/m²',
            description:
              'Proyecto de ejecución completo: planos, cálculo estructural, selección de materiales, visualizaciones 3D, tramitación de licencias y dirección de obra.',
            highlighted: true,
          },
          {
            name: 'Seguimiento de obra',
            price: '10 % del presupuesto de obra',
            description:
              'Coordinación de gremios especializados, control de calidad, visitas de obra periódicas y gestión de certificaciones al finalizar.',
          },
        ]}
      />
      </div>

      {/* 11. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre la reforma de masías en Cataluña"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre la reforma de masías:
          costes, permisos, plazos y técnicas de restauración.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <FAQAccordion items={faqItems} />
        </FadeIn>
      </Container>

      {/* 12. Contacto */}
      <ContactSection />

      {/* 13. Proyectos destacados */}
      <LatestProjects />

      {/* 14. Testimonios */}
      <TestimonialSlider
        className="mt-24 sm:mt-32 lg:mt-40"
        testimonials={serviceTestimonials}
      />
    </RootLayout>
  )
}
