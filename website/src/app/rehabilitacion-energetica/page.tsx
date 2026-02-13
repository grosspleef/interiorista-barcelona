import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { PricingBlock } from '@/components/PricingBlock'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { ProjectShowcase, type Project } from '@/components/ProjectShowcase'
import {
  TestimonialSlider,
  type TestimonialItem,
} from '@/components/TestimonialSlider'
import { FAQAccordion } from './faq-accordion'

const serviceProjects: Project[] = [
  {
    title: 'Rehabilitación energética de finca modernista en Eixample',
    description:
      '420 m² en edificio de 1905: aislamiento SATE en patio interior, sustitución de ventanas con protección del patrimonio, aerotermia centralizada y certificación energética de E a B.',
    year: '2025',
    category: 'Rehabilitación energética integral',
  },
  {
    title: 'Mejora energética de piso pasante en Gràcia',
    description:
      '95 m² con doble orientación: aislamiento interior con lana mineral, ventanas de altas prestaciones, VMC doble flujo e instalación solar fotovoltaica en cubierta comunitaria.',
    year: '2024',
    category: 'Rehabilitación energética vivienda',
  },
  {
    title: 'Rehabilitación integral de cubierta y envolvente en Poblenou',
    description:
      'Comunidad de 12 viviendas: aislamiento de cubierta plana con cubierta verde, SATE en fachada posterior, sustitución de carpinterías y reducción del 62% en consumo energético.',
    year: '2024',
    category: 'Rehabilitación energética comunitaria',
  },
]

const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'Gracias a la rehabilitación energética, nuestras facturas de gas se han reducido un 55% y en verano ya no necesitamos aire acondicionado. El interiorista gestionó toda la tramitación de las ayudas Next Generation y el resultado estético es impecable.',
    client: 'Marta y Àlex R., rehabilitación energética en Eixample',
  },
  {
    quote:
      'Teníamos un piso con certificación G y ahora es B. Lo mejor fue que el interiorista integró la mejora energética con la reforma estética: las ventanas nuevas, el aislamiento interior y la aerotermia se diseñaron como parte del proyecto global.',
    client: 'Carla M., mejora energética en Gràcia',
  },
  {
    quote:
      "We wanted to improve our flat's energy efficiency but were worried about the heritage restrictions in our Eixample building. Our designer found solutions that respected the façade while dramatically improving insulation and comfort. The EU grants covered 60% of the cost.",
    client: 'David & Sarah K., energy retrofit in Eixample',
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
    question: '¿Qué es el certificado de eficiencia energética (CEE)?',
    schemaAnswer:
      'El certificado de eficiencia energética (CEE) es un documento obligatorio para vender o alquilar una vivienda en España. Clasifica el inmueble de la A (más eficiente) a la G (menos eficiente) según su consumo energético y emisiones de CO₂. En Barcelona, la mayoría de edificios anteriores a 1980 tienen calificación E, F o G. La rehabilitación energética permite mejorar esta calificación, aumentando el valor del inmueble y reduciendo los costes energéticos.',
    answer: (
      <>
        <p>
          El certificado de eficiencia energética (CEE) es un{' '}
          <strong className="font-semibold text-neutral-950">
            documento obligatorio para vender o alquilar
          </strong>{' '}
          una vivienda en España. Clasifica el inmueble de la A (más eficiente)
          a la G (menos eficiente) según su consumo energético y emisiones de
          CO₂.
        </p>
        <p>
          En Barcelona, la mayoría de edificios anteriores a 1980 tienen
          calificación E, F o G. La rehabilitación energética permite mejorar
          esta calificación, aumentando el valor del inmueble y reduciendo los
          costes energéticos.
        </p>
      </>
    ),
  },
  {
    question: '¿Cuánto cuesta una rehabilitación energética?',
    schemaAnswer:
      'El coste de una rehabilitación energética varía según el alcance de las actuaciones: un aislamiento interior ronda los 40-60 €/m², la sustitución de ventanas entre 400-800 €/unidad, y la instalación de aerotermia entre 8.000-15.000 € para una vivienda. Un proyecto integral de rehabilitación energética parte de los 50 €/m² de honorarios de proyecto. Además, las subvenciones Next Generation EU cubren entre el 40% y el 80% de la inversión, reduciendo significativamente el coste final.',
    answer: (
      <>
        <p>
          El coste varía según el alcance de las actuaciones: un aislamiento
          interior ronda los{' '}
          <strong className="font-semibold text-neutral-950">
            40-60&nbsp;€/m²
          </strong>
          , la sustitución de ventanas entre 400-800&nbsp;€/unidad, y la
          instalación de aerotermia entre 8.000-15.000&nbsp;€ para una vivienda.
        </p>
        <p>
          Un proyecto integral de rehabilitación energética parte de los{' '}
          <strong className="font-semibold text-neutral-950">
            50&nbsp;€/m²
          </strong>{' '}
          de honorarios de proyecto. Además, las{' '}
          <strong className="font-semibold text-neutral-950">
            subvenciones Next Generation EU
          </strong>{' '}
          cubren entre el 40% y el 80% de la inversión.
        </p>
        <p>
          Consulta nuestras{' '}
          <Link
            href="/precios/#rehabilitacion-energetica"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            tarifas de rehabilitación energética
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: '¿Qué subvenciones puedo solicitar en 2026?',
    schemaAnswer:
      "En 2026 siguen vigentes varias líneas de ayuda para rehabilitación energética: los fondos Next Generation EU (40-80% de subvención, plazo hasta febrero de 2026), el programa PREE del IDAE, las ayudas de la Agència de l'Habitatge de Catalunya, deducciones en el IRPF del 20% al 60%, reducción del IBI hasta el 50% durante 3 años, e IVA reducido del 10% en obras de rehabilitación. Tu interiorista gestiona la tramitación de las ayudas aplicables a tu proyecto.",
    answer: (
      <>
        <p>
          En 2026 siguen vigentes varias líneas de ayuda para rehabilitación
          energética:
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Next Generation EU
          </strong>{' '}
          (40-80% de subvención, plazo hasta febrero de 2026),{' '}
          <strong className="font-semibold text-neutral-950">PREE</strong> del
          IDAE, ayudas de la{' '}
          <strong className="font-semibold text-neutral-950">
            Agència de l&apos;Habitatge de Catalunya
          </strong>
          , deducciones IRPF del 20% al 60%, reducción del IBI hasta el 50%
          durante 3 años, e IVA reducido del 10%.
        </p>
        <p>
          Tu interiorista gestiona la tramitación de las ayudas aplicables a tu
          proyecto.{' '}
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Solicita asesoramiento
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: '¿Cuánto tiempo dura una rehabilitación energética?',
    schemaAnswer:
      'La duración de una rehabilitación energética depende del alcance: un aislamiento interior de un piso se realiza en 2-3 semanas, la sustitución de ventanas en 1-2 semanas, y la instalación de aerotermia en 3-5 días. Un proyecto integral de rehabilitación energética de una vivienda completa puede durar entre 6 y 12 semanas. Para actuaciones comunitarias (SATE, cubierta), los plazos se amplían a 3-6 meses.',
    answer: (
      <>
        <p>
          La duración depende del alcance: un aislamiento interior de un piso se
          realiza en{' '}
          <strong className="font-semibold text-neutral-950">
            2-3 semanas
          </strong>
          , la sustitución de ventanas en 1-2 semanas, y la instalación de
          aerotermia en 3-5 días.
        </p>
        <p>
          Un proyecto integral de rehabilitación energética de una vivienda
          completa puede durar entre{' '}
          <strong className="font-semibold text-neutral-950">
            6 y 12 semanas
          </strong>
          . Para actuaciones comunitarias (SATE, cubierta), los plazos se
          amplían a 3-6 meses.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Mi edificio tiene fachada protegida, puedo hacer rehabilitación energética?',
    schemaAnswer:
      'Sí, la rehabilitación energética es posible en edificios con fachada protegida en Barcelona. Cuando no se puede intervenir en la fachada exterior (SATE), se opta por aislamiento térmico por el interior, sustitución de ventanas manteniendo la carpintería original o replicando el diseño histórico, y mejora de la cubierta y medianeras. Nuestros interioristas tienen experiencia con el Plan Especial de Protección del Patrimonio de Barcelona y gestionan los permisos necesarios.',
    answer: (
      <>
        <p>
          Sí, la rehabilitación energética es posible en edificios con fachada
          protegida. Cuando no se puede intervenir en la fachada exterior
          (SATE), se opta por{' '}
          <strong className="font-semibold text-neutral-950">
            aislamiento térmico por el interior
          </strong>
          , sustitución de ventanas manteniendo la carpintería original o
          replicando el diseño histórico, y mejora de la cubierta y medianeras.
        </p>
        <p>
          Nuestros interioristas tienen experiencia con el{' '}
          <strong className="font-semibold text-neutral-950">
            Plan Especial de Protección del Patrimonio
          </strong>{' '}
          de Barcelona y gestionan los permisos necesarios.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué es la aerotermia y por qué es ideal para Barcelona?',
    schemaAnswer:
      'La aerotermia es un sistema de climatización que extrae energía del aire exterior para calentar o enfriar la vivienda y producir agua caliente sanitaria. Es especialmente eficiente en el clima mediterráneo de Barcelona, donde las temperaturas rara vez bajan de 5°C, lo que permite un rendimiento (COP) de 4-5: por cada kWh de electricidad consumido, genera 4-5 kWh de calor. Combinada con paneles solares fotovoltaicos, permite reducir la factura energética hasta un 70%.',
    answer: (
      <>
        <p>
          La aerotermia es un sistema de climatización que extrae energía del
          aire exterior para{' '}
          <strong className="font-semibold text-neutral-950">
            calentar o enfriar la vivienda y producir agua caliente
          </strong>
          . Es especialmente eficiente en el clima mediterráneo de Barcelona,
          donde las temperaturas rara vez bajan de 5&nbsp;°C.
        </p>
        <p>
          Su rendimiento (COP) es de 4-5: por cada kWh de electricidad
          consumido, genera 4-5&nbsp;kWh de calor. Combinada con{' '}
          <strong className="font-semibold text-neutral-950">
            paneles solares fotovoltaicos
          </strong>
          , permite reducir la factura energética hasta un 70%.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Es necesario rehabilitar todo el edificio o puedo actuar solo en mi piso?',
    schemaAnswer:
      'Puedes actuar solo en tu vivienda con mejoras como el aislamiento interior, la sustitución de ventanas, la instalación de aerotermia y la mejora de la iluminación. Sin embargo, las actuaciones más efectivas (SATE en fachada, aislamiento de cubierta, energía solar comunitaria) requieren acuerdo de la comunidad de propietarios. Nuestros interioristas te asesoran sobre las actuaciones más rentables según tu situación y, si procede, te ayudan a presentar el proyecto a la comunidad.',
    answer: (
      <>
        <p>
          Puedes actuar solo en tu vivienda con mejoras como el{' '}
          <strong className="font-semibold text-neutral-950">
            aislamiento interior, sustitución de ventanas, aerotermia
          </strong>{' '}
          y mejora de la iluminación.
        </p>
        <p>
          Sin embargo, las actuaciones más efectivas (SATE en fachada,
          aislamiento de cubierta, energía solar comunitaria) requieren acuerdo
          de la{' '}
          <strong className="font-semibold text-neutral-950">
            comunidad de propietarios
          </strong>
          . Nuestros interioristas te asesoran sobre las actuaciones más
          rentables y, si procede, te ayudan a presentar el proyecto a la
          comunidad.
        </p>
      </>
    ),
  },
  {
    question: '¿Dónde intervenís en Barcelona y alrededores?',
    schemaAnswer:
      "Nuestras prestaciones de rehabilitación energética se realizan en Barcelona ciudad y en las principales ciudades del área metropolitana. Intervenimos en los principales barrios de Barcelona: Eixample, Gràcia, El Born, Sarrià, Poblenou, Les Corts, Sant Andreu y Sants-Montjuïc. También intervenimos en las ciudades del área metropolitana: Sant Cugat, Sabadell, Castelldefels, Sitges, Badalona, L'Hospitalet de Llobregat y alrededores. Contacta con nosotros para solicitar un presupuesto gratuito.",
    answer: (
      <>
        <p>
          Nuestras prestaciones de rehabilitación energética se realizan en{' '}
          <strong className="font-semibold text-neutral-950">
            Barcelona ciudad
          </strong>{' '}
          y en las principales ciudades del área metropolitana.
        </p>
        <p>
          Intervenimos en los principales barrios de Barcelona: Eixample,
          Gràcia, El Born, Sarrià, Poblenou, Les Corts, Sant Andreu y
          Sants-Montjuïc.
        </p>
        <p>
          También intervenimos en las ciudades del área metropolitana: Sant
          Cugat, Sabadell, Castelldefels, Sitges, Badalona, L&apos;Hospitalet de
          Llobregat y alrededores.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Contacta con nosotros
          </Link>{' '}
          para solicitar un presupuesto gratuito.
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
          name: 'Rehabilitación energética',
          item: 'https://www.interioristabarcelona.com/rehabilitacion-energetica/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id':
        'https://www.interioristabarcelona.com/rehabilitacion-energetica/#service',
      name: 'Rehabilitación energética en Barcelona',
      description:
        'Servicio de rehabilitación energética en Barcelona: diagnóstico, aislamiento térmico, ventanas de altas prestaciones, aerotermia, gestión de subvenciones Next Generation EU y certificación energética.',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      serviceType: 'Rehabilitación energética',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '50',
        unitText: 'por m²',
        description: 'Proyecto de rehabilitación energética desde 50 €/m²',
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
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
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
    ...serviceTestimonials.map((t) => ({
      '@type': 'Review' as const,
      itemReviewed: {
        '@id':
          'https://www.interioristabarcelona.com/rehabilitacion-energetica/#service',
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
    ...serviceProjects.map((p) => ({
      '@type': 'CreativeWork' as const,
      name: p.title,
      description: p.description,
      dateCreated: p.year,
      genre: p.category,
      creator: {
        '@type': 'Organization' as const,
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      locationCreated: {
        '@type': 'Place' as const,
        address: {
          '@type': 'PostalAddress' as const,
          addressLocality: 'Barcelona',
          addressCountry: 'ES',
        },
      },
    })),
  ],
}

export const metadata: Metadata = {
  title: 'Rehabilitación energética en Barcelona | Subvenciones 2026',
  description:
    'Rehabilitación energética en Barcelona: aislamiento térmico, aerotermia, ventanas de altas prestaciones y gestión de subvenciones Next Generation EU. Diagnóstico gratuito por interioristas titulados.',
}

export default function RehabilitacionEnergeticaPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Nuestros servicios"
        title="Rehabilitación energética en Barcelona"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Mejora la eficiencia energética de tu vivienda con ayudas de hasta el
          80%
        </p>
        <p className="mt-6">
          Nuestros interioristas y arquitectos de interior te acompañan en tu
          proyecto de rehabilitación energética en Barcelona: diagnóstico,
          aislamiento térmico, ventanas de altas prestaciones, aerotermia,
          gestión de subvenciones y certificación energética.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar diagnóstico gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. ¿Cuándo plantearse una rehabilitación energética? */}
      <SectionIntro
        eyebrow="Indicadores"
        title="¿Cuándo plantearse una rehabilitación energética?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Si reconoces alguna de estas situaciones, tu vivienda podría
          beneficiarse de una intervención energética profesional.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Facturas energéticas elevadas">
            Un consumo desproporcionado de calefacción o aire acondicionado
            suele indicar deficiencias en el aislamiento térmico o en los
            sistemas de climatización de la vivienda.
          </GridListItem>
          <GridListItem title="Certificación energética deficiente">
            Si tu CEE indica una calificación E, F o G, existe un amplio margen
            de mejora que puede aumentar el valor de tu inmueble y reducir los
            costes de explotación.
          </GridListItem>
          <GridListItem title="Sobrecalentamiento en verano">
            En el clima mediterráneo de Barcelona, una envolvente térmica
            deficiente provoca temperaturas interiores superiores a 30&nbsp;°C
            en verano sin climatización mecánica.
          </GridListItem>
          <GridListItem title="ITE obligatoria">
            Los edificios de más de 45 años en Barcelona deben pasar la
            Inspección Técnica de Edificios. Aprovechar la ITE para integrar
            mejoras energéticas optimiza la inversión.
          </GridListItem>
          <GridListItem title="Obras de reforma planificadas">
            Si ya tienes prevista una{' '}
            <Link
              href="/diseno-interiores/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              reforma integral
            </Link>
            , integrar la rehabilitación energética permite compartir costes de
            obra y minimizar las molestias.
          </GridListItem>
          <GridListItem title="Subvenciones históricas disponibles">
            Los fondos Next Generation EU ofrecen ayudas del 40% al 80%, con
            plazo hasta febrero de 2026. Es una oportunidad sin precedentes para
            rehabilitar con apoyo público.
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. ¿Por qué contar con un interiorista? */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué contar con un interiorista para tu rehabilitación energética?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          La rehabilitación energética no tiene por qué sacrificar la estética.
          Un interiorista titulado integra eficiencia y diseño en un proyecto
          coherente.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Estética + eficiencia">
            El interiorista diseña soluciones energéticas que se integran
            armoniosamente en el espacio: el aislamiento interior se convierte
            en una oportunidad de rediseño, no en un sacrificio.
          </GridListItem>
          <GridListItem title="Visión integral del espacio">
            Coordina la rehabilitación energética con el resto de la reforma
            para evitar duplicidades, reducir costes y garantizar un resultado
            coherente en todos los aspectos del proyecto.
          </GridListItem>
          <GridListItem title="Gestión de subvenciones">
            Te asesora sobre las ayudas disponibles (Next Generation EU, PREE,
            deducciones IRPF) y gestiona la tramitación administrativa para
            maximizar la financiación pública.
          </GridListItem>
          <GridListItem title="Cumplimiento normativo CTE">
            Garantiza que las soluciones adoptadas cumplen con el Código Técnico
            de la Edificación (CTE) y la normativa de eficiencia energética
            vigente en Cataluña.
          </GridListItem>
          <GridListItem title="Coordinación de gremios especializados">
            Selecciona y coordina a instaladores certificados de aerotermia,
            SATE, carpintería de altas prestaciones y energía solar, asegurando
            la calidad de cada actuación.
          </GridListItem>
          <GridListItem title="Patrimonio protegido">
            Tiene experiencia en edificios con protección patrimonial del
            Eixample y otros barrios históricos de Barcelona, encontrando
            soluciones que respetan las restricciones urbanísticas.
          </GridListItem>
        </GridList>
      </Container>

      {/* 4. Materiales y soluciones — intro */}
      <SectionIntro
        eyebrow="Soluciones"
        title="Materiales y soluciones técnicas para la rehabilitación energética"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Cada vivienda requiere un diagnóstico específico. Estas son las
          principales familias de soluciones que aplicamos en los proyectos de
          rehabilitación energética en Barcelona.
        </p>
      </SectionIntro>

      {/* 5. 3 bloques de soluciones técnicas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Aislamiento térmico y envolvente"
          image={{ src: imageWhiteboard }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              El aislamiento de la envolvente es la actuación con mayor impacto
              en la eficiencia energética de un edificio. Reducir las pérdidas
              térmicas por paredes, cubiertas y suelos puede disminuir el
              consumo energético hasta un{' '}
              <strong className="font-semibold text-neutral-950">50%</strong>.
            </p>
            <p>
              En Barcelona, las soluciones más frecuentes son el{' '}
              <strong className="font-semibold text-neutral-950">
                SATE (Sistema de Aislamiento Térmico Exterior)
              </strong>{' '}
              cuando la fachada lo permite, y el aislamiento por el interior con
              lana mineral o paneles de fibra de madera cuando la fachada está
              protegida.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="SATE (fachada exterior)">
              Aislamiento térmico por el exterior: elimina puentes térmicos y no
              reduce la superficie habitable. Ideal para fachadas no protegidas.
            </ListItem>
            <ListItem title="Aislamiento interior">
              Lana mineral, fibra de madera o paneles de poliisocianurato (PIR).
              Solución para edificios con fachada protegida del Eixample.
            </ListItem>
            <ListItem title="Cubierta y suelos">
              Aislamiento de cubiertas planas (XPS, cubiertas verdes) y suelos
              sobre espacios no calefactados o garajes.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Ventanas de altas prestaciones"
          image={{ src: imageLaptop, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Las ventanas representan entre el{' '}
              <strong className="font-semibold text-neutral-950">
                25% y el 30%
              </strong>{' '}
              de las pérdidas energéticas de una vivienda. Sustituir
              carpinterías antiguas por ventanas de altas prestaciones mejora el
              confort térmico y acústico de forma inmediata.
            </p>
            <p>
              En el clima mediterráneo de Barcelona, es fundamental equilibrar
              el aislamiento térmico con la{' '}
              <strong className="font-semibold text-neutral-950">
                protección solar
              </strong>
              : vidrios con control solar, persianas venecianas integradas o
              lamas orientables permiten reducir la ganancia solar en verano sin
              perder luminosidad.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Doble y triple acristalamiento">
              Vidrios bajo emisivos con cámara de gas argón: Uw inferior a
              1,3&nbsp;W/m²K para doble y 0,8&nbsp;W/m²K para triple.
            </ListItem>
            <ListItem title="Protección solar">
              Vidrios con factor solar g inferior a 0,35, persianas venecianas
              integradas o lamas orientables para el control de la radiación en
              verano.
            </ListItem>
            <ListItem title="Galerías del Eixample">
              Soluciones específicas para las galerías acristaladas de las
              fincas modernistas: doble ventana, vidrios selectivos y
              ventilación controlada.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Sistemas de climatización y energía"
          image={{ src: imageMeeting, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Una vez mejorada la envolvente térmica, es el momento de optimizar
              los sistemas activos de climatización y producción de energía. La{' '}
              <strong className="font-semibold text-neutral-950">
                aerotermia
              </strong>{' '}
              es la tecnología más eficiente para el clima mediterráneo de
              Barcelona.
            </p>
            <p>
              Combinada con suelo radiante refrescante, la aerotermia
              proporciona calefacción en invierno y refrigeración en verano con
              un consumo eléctrico mínimo. La{' '}
              <strong className="font-semibold text-neutral-950">
                ventilación mecánica controlada (VMC) doble flujo
              </strong>{' '}
              recupera el calor del aire expulsado y garantiza una renovación
              constante del aire interior.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Aerotermia">
              Bomba de calor aire-agua para calefacción, refrigeración y ACS.
              COP de 4-5 en clima mediterráneo, ideal para sustituir calderas de
              gas.
            </ListItem>
            <ListItem title="VMC doble flujo">
              Ventilación mecánica con recuperación de calor (eficiencia
              &gt;85%): aire fresco filtrado sin pérdidas térmicas.
            </ListItem>
            <ListItem title="Solar fotovoltaica y LED">
              Paneles solares en cubierta comunitaria e iluminación LED de bajo
              consumo para reducir la dependencia de la red eléctrica.
            </ListItem>
          </List>
        </Section>
      </div>

      {/* 6. Ayudas y subvenciones */}
      <SectionIntro
        eyebrow="Financiación"
        title="Ayudas y subvenciones para la rehabilitación energética en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Existen múltiples líneas de financiación pública que pueden cubrir una
          parte significativa de la inversión. Tu interiorista gestiona la
          tramitación de las ayudas aplicables.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Next Generation EU (40-80%)">
            Fondos europeos para rehabilitación energética de edificios
            residenciales. Subvención del 40% al 80% según la mejora alcanzada
            en el CEE. Plazo hasta febrero de 2026.
          </GridListItem>
          <GridListItem title="PREE — Programa del IDAE">
            Programa de Rehabilitación Energética de Edificios del IDAE:
            subvenciones para envolvente térmica, instalaciones térmicas e
            iluminación en edificios existentes.
          </GridListItem>
          <GridListItem title="Agència de l'Habitatge de Catalunya">
            Ayudas autonómicas para la rehabilitación de viviendas en Cataluña,
            complementarias a los fondos estatales y europeos, con criterios
            sociales y territoriales.
          </GridListItem>
          <GridListItem title="Deducciones IRPF (20%, 40%, 60%)">
            Deducciones en la declaración de la renta por obras de mejora
            energética: 20% por reducción de demanda, 40% por reducción de
            consumo de energía primaria no renovable, 60% en edificios
            residenciales.
          </GridListItem>
          <GridListItem title="Reducción IBI (50%, 3 años)">
            Los municipios pueden bonificar hasta el 50% del Impuesto sobre
            Bienes Inmuebles durante 3 años para viviendas con mejoras
            energéticas acreditadas.
          </GridListItem>
          <GridListItem title="IVA reducido (10% vs 21%)">
            Las obras de rehabilitación energética en viviendas de más de 2 años
            tributan al 10% de IVA en lugar del 21% general, reduciendo el coste
            final de la intervención.
          </GridListItem>
        </GridList>
      </Container>

      {/* 7. Particularidades de Barcelona */}
      <SectionIntro
        eyebrow="Contexto local"
        title="Particularidades de la rehabilitación energética en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Barcelona tiene un contexto urbano, climático y patrimonial único que
          requiere soluciones adaptadas a cada barrio y tipología de edificio.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Fincas modernistas del Eixample">
            Edificios de 1880-1930 con fachadas ornamentadas, galerías
            acristaladas y muros de obra de fábrica de 30-50&nbsp;cm. Requieren
            aislamiento interior y ventanas respetuosas con el patrimonio.
          </GridListItem>
          <GridListItem title="Clima mediterráneo">
            Inviernos suaves y veranos calurosos exigen un equilibrio entre
            aislamiento térmico y protección solar. La aerotermia rinde
            especialmente bien con temperaturas exteriores moderadas.
          </GridListItem>
          <GridListItem title="Edificios protegidos">
            El Plan Especial de Protección del Patrimonio de Barcelona restringe
            las intervenciones en fachadas protegidas, obligando a soluciones de
            aislamiento interior y ventanas compatibles con el entorno.
          </GridListItem>
          <GridListItem title="Cubiertas planas y terrazas">
            Las cubiertas planas típicas de Barcelona ofrecen una oportunidad
            excelente para cubiertas verdes (aislamiento + retención pluvial),
            paneles solares y aislamiento XPS sobre forjado.
          </GridListItem>
          <GridListItem title="Comunidades de propietarios">
            Las actuaciones en elementos comunes (fachada, cubierta, energía
            solar) requieren acuerdo de la comunidad. Nuestros interioristas
            preparan informes técnicos y presupuestos para presentar en junta.
          </GridListItem>
          <GridListItem title="ITE + rehabilitación integrada">
            Combinar la Inspección Técnica de Edificios con un proyecto de
            rehabilitación energética permite optimizar la inversión, aprovechar
            andamiajes y acceder a subvenciones adicionales.
          </GridListItem>
        </GridList>
      </Container>

      {/* 8. Tu colaboración con un interiorista — intro */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Tu proyecto de rehabilitación energética en 3 etapas"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Te acompañamos desde el diagnóstico inicial hasta la certificación
          energética final, coordinando todos los agentes del proyecto para
          garantizar el resultado.
        </p>
      </SectionIntro>

      {/* 9. Proceso en 3 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Diagnóstico energético y visita"
          image={{ src: imageWhiteboard }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              El interiorista visita tu vivienda para realizar un{' '}
              <strong className="font-semibold text-neutral-950">
                diagnóstico energético completo
              </strong>
              : análisis de la envolvente térmica, estado de las instalaciones,
              detección de puentes térmicos y evaluación del certificado
              energético actual.
            </p>
            <p>
              Estudia las particularidades del edificio (protección patrimonial,
              normativa urbanística, estado de la ITE) y evalúa las opciones de
              intervención más eficaces según tu presupuesto y objetivos.
            </p>
            <p>
              Te informa sobre las{' '}
              <strong className="font-semibold text-neutral-950">
                subvenciones y ayudas disponibles
              </strong>{' '}
              y proporciona una primera estimación orientativa de la inversión y
              del ahorro energético esperado.
            </p>
          </div>
        </Section>

        <Section
          title="Estudio técnico y proyecto de rehabilitación"
          image={{ src: imageLaptop, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Elaboramos el proyecto técnico de rehabilitación energética con
              simulaciones de demanda y consumo, selección de materiales y
              sistemas, y{' '}
              <strong className="font-semibold text-neutral-950">
                estimación detallada del ahorro
              </strong>{' '}
              y del retorno de la inversión.
            </p>
            <p>
              El proyecto integra las mejoras energéticas con el diseño interior
              para garantizar un resultado estético y funcional coherente.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Simulación energética">
              Modelado térmico del edificio para cuantificar el ahorro esperado
              y seleccionar las soluciones óptimas.
            </ListItem>
            <ListItem title="Selección de materiales">
              Especificación técnica de aislamientos, carpinterías, sistemas de
              climatización y elementos de control solar.
            </ListItem>
            <ListItem title="Tramitación de ayudas">
              Preparación de la documentación necesaria para solicitar las
              subvenciones Next Generation EU, PREE y ayudas autonómicas.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Ejecución de obra y certificación"
          image={{ src: imageMeeting, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Coordinamos todos los gremios especializados:{' '}
              <strong className="font-semibold text-neutral-950">
                instaladores SATE certificados, carpinteros de ventanas,
                técnicos de aerotermia
              </strong>
              , electricistas y otros profesionales necesarios.
            </p>
            <p>
              Realizamos visitas periódicas a la obra para controlar la calidad
              de ejecución, verificar el cumplimiento de las especificaciones
              técnicas y asegurar los plazos previstos.
            </p>
            <p>
              Al finalizar la obra, gestionamos la{' '}
              <strong className="font-semibold text-neutral-950">
                emisión del nuevo certificado energético
              </strong>{' '}
              y la justificación documental de las subvenciones recibidas.
            </p>
          </div>
        </Section>
      </div>

      {/* 10. Tarifas */}
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <PricingBlock
          id="tarifas-rehabilitacion-energetica"
          name="Tarifas de rehabilitación energética"
          description="Servicio integral de rehabilitación energética para viviendas y comunidades en Barcelona. Desde el diagnóstico gratuito hasta la certificación final, te acompañamos en cada etapa."
          href="/contacto/"
          ctaLabel="Solicitar diagnóstico gratuito"
          image={{ src: imageWhiteboard, shape: 0 }}
          showCounter={false}
          tiers={[
            {
              name: 'Diagnóstico energético',
              price: 'Gratuito',
              description:
                'Visita a tu vivienda, evaluación de la envolvente térmica, análisis del CEE actual y primera estimación de mejoras y subvenciones disponibles.',
            },
            {
              name: 'Proyecto de rehabilitación energética',
              price: 'Desde 50 €/m²',
              description:
                'Proyecto técnico completo: simulación energética, selección de materiales, tramitación de subvenciones y coordinación con el diseño interior.',
              highlighted: true,
            },
            {
              name: 'Seguimiento de obra + certificación',
              price: '10 % del presupuesto',
              description:
                'Coordinación de gremios, control de calidad, visitas de obra y gestión del nuevo certificado energético al finalizar.',
            },
          ]}
        />
      </div>

      {/* 11. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre rehabilitación energética en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre rehabilitación
          energética, subvenciones y soluciones técnicas.
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
      <ProjectShowcase
        title="Proyectos de rehabilitación energética en Barcelona"
        subtitle="Descubre algunos proyectos de rehabilitación energética realizados por los miembros del colectivo."
        projects={serviceProjects}
      />

      {/* 14. Testimonios */}
      <TestimonialSlider
        className="mt-24 sm:mt-32 lg:mt-40"
        testimonials={serviceTestimonials}
      />
    </RootLayout>
  )
}
