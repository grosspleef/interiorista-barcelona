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
import imageEstudioViabilidad from '@/images/estudio-viabilidad-terraza-atico-sant-gervasi-barcelona.jpg'
import imageProyectoTecnico from '@/images/proyecto-tecnico-union-pisos-les-corts-barcelona.jpg'
import imageChantier from '@/images/chantier-altillo-loft-poble-sec-barcelona.jpg'
import imageVerriere from '@/images/verriere-terraza-habitable-horta-guinardo-barcelona.jpg'
import { LatestProjects } from '@/components/LatestProjects'
import {
  TestimonialSlider,
  type TestimonialItem,
} from '@/components/TestimonialSlider'
import { FAQAccordion } from './faq-accordion'

const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'Queríamos cerrar la terraza del ático sin perder luminosidad. El equipo diseñó una solución con vidrios de control solar que nos permite disfrutar del espacio todo el año. La tramitación de la licencia fue impecable.',
    client: 'Laura y Marc T., cerramiento ático en Sarrià',
  },
  {
    quote:
      'Unir los dos pisos fue la mejor decisión. El interiorista gestionó todo: el estudio estructural, la licencia de obra mayor y la coordinación de gremios. En 5 meses teníamos 150 m² perfectamente distribuidos.',
    client: 'Familia Rodríguez-Soler, unión de pisos en Eixample',
  },
  {
    quote:
      'Compramos un loft en Poblenou con una altura de techo increíble pero sin suficientes habitaciones. El equipo construyó un altillo que duplicó nuestro espacio útil. La gestión de la licencia de obras la llevaron ellos íntegramente — sin estrés.',
    client: 'James & Sophie K., ampliación con altillo en Poblenou',
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
    question: '¿Cuánto cuesta ampliar una vivienda en Barcelona?',
    schemaAnswer:
      'El coste de una ampliación de vivienda en Barcelona parte de 1.200 €/m² para la ejecución de obra, dependiendo de la tipología (cerramiento de terraza, unión de pisos, altillo, sobrelevación). Los honorarios de proyecto oscilan entre 60 y 90 €/m². A esto hay que sumar las tasas de licencia de obra mayor (3-5 % del presupuesto) y los honorarios de los estudios técnicos (estructural, energético). En total, el coste medio de una ampliación se sitúa entre 1.500 y 2.500 €/m² todo incluido.',
    answer: (
      <>
        <p>
          El coste de una ampliación de vivienda en Barcelona parte de{' '}
          <strong className="font-semibold text-neutral-950">
            1.200&nbsp;€/m²
          </strong>{' '}
          para la ejecución de obra, dependiendo de la tipología (cerramiento de
          terraza, unión de pisos, altillo, sobrelevación).
        </p>
        <p>
          Los honorarios de proyecto oscilan entre{' '}
          <strong className="font-semibold text-neutral-950">
            60 y 90&nbsp;€/m²
          </strong>
          . A esto hay que sumar las tasas de licencia de obra mayor (3-5&nbsp;%
          del presupuesto) y los honorarios de los estudios técnicos
          (estructural, energético).
        </p>
        <p>
          En total, el coste medio de una ampliación se sitúa entre{' '}
          <strong className="font-semibold text-neutral-950">
            1.500 y 2.500&nbsp;€/m²
          </strong>{' '}
          todo incluido.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué licencia necesito para ampliar mi piso en Barcelona?',
    schemaAnswer:
      'Toda ampliación de superficie habitable en Barcelona requiere una licencia de obra mayor, tramitada ante el Ayuntamiento de Barcelona. Es necesario presentar un proyecto técnico firmado por un arquitecto colegiado e inscrito en el COAC. El plazo de tramitación es de 2 a 4 meses y el coste de las tasas representa entre el 3 % y el 5 % del presupuesto de ejecución material.',
    answer: (
      <>
        <p>
          Toda ampliación de superficie habitable en Barcelona requiere una{' '}
          <strong className="font-semibold text-neutral-950">
            licencia de obra mayor
          </strong>
          , tramitada ante el Ayuntamiento de Barcelona.
        </p>
        <p>
          Es necesario presentar un{' '}
          <strong className="font-semibold text-neutral-950">
            proyecto técnico firmado por un arquitecto colegiado
          </strong>{' '}
          e inscrito en el COAC. El plazo de tramitación es de 2 a 4 meses y el
          coste de las tasas representa entre el 3&nbsp;% y el 5&nbsp;% del
          presupuesto de ejecución material.
        </p>
        <p>
          Nuestros{' '}
          <Link
            href="/arquitecto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            arquitectos colegiados
          </Link>{' '}
          se encargan de toda la tramitación.
        </p>
      </>
    ),
  },
  {
    question: '¿Se puede cerrar una terraza en Barcelona?',
    schemaAnswer:
      'Sí, cerrar una terraza en Barcelona es posible pero requiere licencia de obra mayor ya que se modifica la envolvente del edificio y se aumenta la superficie construida. Es imprescindible verificar la edificabilidad restante de la finca según el Plan General Metropolitano (PGM) y obtener el acuerdo de la comunidad de propietarios (mayoría de 3/5 según el Codi Civil de Catalunya). El proyecto debe cumplir el CTE (Código Técnico de la Edificación) en materia de aislamiento térmico y ventilación.',
    answer: (
      <>
        <p>
          Sí, cerrar una terraza en Barcelona es posible pero requiere{' '}
          <strong className="font-semibold text-neutral-950">
            licencia de obra mayor
          </strong>{' '}
          ya que se modifica la envolvente del edificio y se aumenta la
          superficie construida.
        </p>
        <p>
          Es imprescindible verificar la{' '}
          <strong className="font-semibold text-neutral-950">
            edificabilidad restante
          </strong>{' '}
          de la finca según el Plan General Metropolitano (PGM) y obtener el
          acuerdo de la comunidad de propietarios (mayoría de 3/5 según el Codi
          Civil de Catalunya).
        </p>
        <p>
          El proyecto debe cumplir el CTE (Código Técnico de la Edificación) en
          materia de aislamiento térmico y ventilación.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Cuánto tarda en tramitarse una licencia de obra mayor en Barcelona?',
    schemaAnswer:
      'El plazo medio de tramitación de una licencia de obra mayor en Barcelona es de 2 a 4 meses, desde el depósito del expediente completo hasta la resolución favorable. Este plazo puede variar según el distrito y la complejidad del proyecto. En caso de requerimientos técnicos del Ayuntamiento, el plazo se amplía. Es recomendable contar con un arquitecto experimentado que prepare un expediente completo para evitar requerimientos y acelerar la tramitación.',
    answer: (
      <>
        <p>
          El plazo medio de tramitación de una licencia de obra mayor en
          Barcelona es de{' '}
          <strong className="font-semibold text-neutral-950">
            2 a 4 meses
          </strong>
          , desde el depósito del expediente completo hasta la resolución
          favorable.
        </p>
        <p>
          Este plazo puede variar según el distrito y la complejidad del
          proyecto. En caso de requerimientos técnicos del Ayuntamiento, el
          plazo se amplía.
        </p>
        <p>
          Es recomendable contar con un{' '}
          <Link
            href="/arquitecto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            arquitecto experimentado
          </Link>{' '}
          que prepare un expediente completo para evitar requerimientos y
          acelerar la tramitación.
        </p>
      </>
    ),
  },
  {
    question: '¿Necesito permiso de la comunidad de propietarios?',
    schemaAnswer:
      'Sí, cualquier ampliación que afecte a elementos comunes del edificio (fachada, cubierta, estructura, patios) requiere el acuerdo de la comunidad de propietarios. Según el Codi Civil de Catalunya (Libro 5), se necesita una mayoría de 3/5 de los propietarios para obras que modifiquen elementos comunes. En caso de cerramiento de terraza, unión de pisos o sobrelevación, es obligatorio presentar el proyecto técnico en la junta de propietarios.',
    answer: (
      <>
        <p>
          Sí, cualquier ampliación que afecte a{' '}
          <strong className="font-semibold text-neutral-950">
            elementos comunes del edificio
          </strong>{' '}
          (fachada, cubierta, estructura, patios) requiere el acuerdo de la
          comunidad de propietarios.
        </p>
        <p>
          Según el Codi Civil de Catalunya (Libro 5), se necesita una{' '}
          <strong className="font-semibold text-neutral-950">
            mayoría de 3/5
          </strong>{' '}
          de los propietarios para obras que modifiquen elementos comunes.
        </p>
        <p>
          En caso de cerramiento de terraza, unión de pisos o sobrelevación, es
          obligatorio presentar el proyecto técnico en la junta de propietarios.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Qué es la cédula de habitabilidad y la necesito tras una ampliación?',
    schemaAnswer:
      'La cédula de habitabilidad es un documento administrativo que acredita que una vivienda cumple las condiciones mínimas de habitabilidad según el Decreto 141/2012 de la Generalitat de Catalunya. Tras una ampliación, es obligatorio solicitar una nueva cédula de habitabilidad de segunda ocupación que refleje la nueva superficie y distribución. Sin esta cédula, no se pueden dar de alta los suministros de agua, gas y electricidad en la parte ampliada.',
    answer: (
      <>
        <p>
          La cédula de habitabilidad es un documento administrativo que acredita
          que una vivienda cumple las{' '}
          <strong className="font-semibold text-neutral-950">
            condiciones mínimas de habitabilidad
          </strong>{' '}
          según el Decreto 141/2012 de la Generalitat de Catalunya.
        </p>
        <p>
          Tras una ampliación, es obligatorio solicitar una{' '}
          <strong className="font-semibold text-neutral-950">
            nueva cédula de habitabilidad de segunda ocupación
          </strong>{' '}
          que refleje la nueva superficie y distribución.
        </p>
        <p>
          Sin esta cédula, no se pueden dar de alta los suministros de agua, gas
          y electricidad en la parte ampliada.
        </p>
      </>
    ),
  },
  {
    question: '¿Se pueden unir dos pisos en Barcelona?',
    schemaAnswer:
      'Sí, la unión de dos pisos (unificación vertical u horizontal) es una de las ampliaciones más habituales en Barcelona. Requiere un estudio estructural para determinar la viabilidad de apertura del forjado o muro de carga, licencia de obra mayor y acuerdo de la comunidad de propietarios. Es necesario actualizar la división horizontal de la finca en el Registro de la Propiedad y solicitar nueva cédula de habitabilidad para la vivienda unificada.',
    answer: (
      <>
        <p>
          Sí, la unión de dos pisos (unificación vertical u horizontal) es una
          de las ampliaciones más habituales en Barcelona. Requiere un{' '}
          <strong className="font-semibold text-neutral-950">
            estudio estructural
          </strong>{' '}
          para determinar la viabilidad de apertura del forjado o muro de carga.
        </p>
        <p>
          Además, necesitas{' '}
          <strong className="font-semibold text-neutral-950">
            licencia de obra mayor
          </strong>{' '}
          y acuerdo de la comunidad de propietarios.
        </p>
        <p>
          Es necesario actualizar la división horizontal de la finca en el
          Registro de la Propiedad y solicitar nueva cédula de habitabilidad
          para la vivienda unificada.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué tipos de ampliación son posibles en Barcelona?',
    schemaAnswer:
      'Los principales tipos de ampliación de vivienda en Barcelona son: cerramiento de terraza o balcón (integrar el espacio exterior), unión de pisos (horizontal o vertical, muy habitual en el Eixample), construcción de altillo o entreplanta (en locales o lofts con suficiente altura libre), sobrelevación de edificio (añadir plantas, sujeto a la edificabilidad del PGM), y ampliación en planta baja o jardín (en viviendas unifamiliares). Cada tipología tiene requisitos normativos específicos que analizamos en el estudio de viabilidad.',
    answer: (
      <>
        <p>Los principales tipos de ampliación de vivienda en Barcelona son:</p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Cerramiento de terraza o balcón
          </strong>{' '}
          — integrar el espacio exterior como superficie habitable.{' '}
          <strong className="font-semibold text-neutral-950">
            Unión de pisos
          </strong>{' '}
          — horizontal o vertical, muy habitual en el Eixample.{' '}
          <strong className="font-semibold text-neutral-950">
            Altillo o entreplanta
          </strong>{' '}
          — en locales o lofts con suficiente altura libre.{' '}
          <strong className="font-semibold text-neutral-950">
            Sobrelevación de edificio
          </strong>{' '}
          — añadir plantas, sujeto a la edificabilidad del PGM.{' '}
          <strong className="font-semibold text-neutral-950">
            Ampliación en planta baja o jardín
          </strong>{' '}
          — en viviendas unifamiliares.
        </p>
        <p>
          Cada tipología tiene requisitos normativos específicos que analizamos
          en el estudio de viabilidad.
        </p>
      </>
    ),
  },
  {
    question: '¿Dónde intervenís en Barcelona y alrededores?',
    schemaAnswer:
      "Nuestros interioristas y arquitectos intervienen en Barcelona ciudad y en las principales ciudades del área metropolitana. Intervenimos en los principales barrios de Barcelona: Eixample, Gràcia, Sarrià, Poblenou, Les Corts, Sant Andreu y Sants-Montjuïc. También intervenimos en las ciudades del área metropolitana: Sant Cugat, Sabadell, Castelldefels, Sitges, Badalona, L'Hospitalet de Llobregat y alrededores. Contacta con nosotros para solicitar un presupuesto gratuito.",
    answer: (
      <>
        <p>
          Nuestros interioristas y arquitectos intervienen en{' '}
          <strong className="font-semibold text-neutral-950">
            Barcelona ciudad
          </strong>{' '}
          y en las principales ciudades del área metropolitana.
        </p>
        <p>
          Intervenimos en los principales barrios de Barcelona: Eixample,
          Gràcia, Sarrià, Poblenou, Les Corts, Sant Andreu y Sants-Montjuïc.
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
          name: 'Ampliación de vivienda',
          item: 'https://www.interioristabarcelona.com/ampliacion-vivienda/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id':
        'https://www.interioristabarcelona.com/ampliacion-vivienda/#service',
      name: 'Ampliación de vivienda en Barcelona',
      description:
        'Servicio de ampliación de vivienda en Barcelona: cerramiento de terraza, unión de pisos, altillo, sobrelevación. Proyecto integral desde el estudio de viabilidad hasta la entrega de obra.',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      serviceType: 'Ampliación de vivienda',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '800',
        unitText: '€/m²',
        description:
          'Ampliación de vivienda desde 800 €/m² (proyecto + ejecución)',
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
      description: 'Colectivo de interioristas y arquitectos en Barcelona',
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
          'https://www.interioristabarcelona.com/ampliacion-vivienda/#service',
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
  title: 'Ampliación de vivienda en Barcelona | Más m² sin mudarte — 2026',
  description:
    'Ampliación de vivienda en Barcelona: cerramiento de terraza, unión de pisos, altillo, ático. Interioristas y arquitectos titulados. Proyecto integral desde la licencia de obra hasta la entrega. Presupuesto gratuito.',
}

export default function AmpliacionViviendaPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Nuestros servicios"
        title="Ampliación de vivienda en Barcelona"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Más metros cuadrados, misma dirección: amplía tu hogar sin mudarte
        </p>
        <p className="mt-6">
          ¿Tu vivienda se ha quedado pequeña? Cerrar una terraza, unir dos
          pisos, construir un altillo o ampliar el ático son soluciones más
          económicas y rápidas que comprar una vivienda nueva en Barcelona. Los
          interioristas y{' '}
          <Link
            href="/arquitecto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            arquitectos colegiados
          </Link>{' '}
          del colectivo te acompañan desde el estudio de viabilidad urbanística
          hasta la entrega de obra con nueva cédula de habitabilidad.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. ¿Por qué ampliar tu vivienda? */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué ampliar tu vivienda en vez de mudarte?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Ampliar es más económico, más rápido y te permite conservar tu
          dirección, tu barrio y tu comunidad. Un proyecto bien ejecutado
          revaloriza tu inmueble y mejora tu calidad de vida.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Coste inferior a comprar">
            El precio medio de la vivienda en Barcelona supera los
            5.100&nbsp;€/m². Ampliar tu hogar parte de 1.200&nbsp;€/m²: hasta 4
            veces más económico que comprar metros nuevos.
          </GridListItem>
          <GridListItem title="Revalorización del inmueble">
            Una ampliación bien ejecutada revaloriza tu vivienda entre un
            10&nbsp;% y un 30&nbsp;%, un retorno de inversión superior a la
            mayoría de reformas.
          </GridListItem>
          <GridListItem title="Proyecto a medida">
            Diseño personalizado por{' '}
            <Link
              href="/diseno-interiores/"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              interioristas titulados
            </Link>{' '}
            que integran la ampliación con el espacio existente para un
            resultado coherente y funcional.
          </GridListItem>
          <GridListItem title="Gestión integral de licencias">
            Tramitación completa de la licencia de obra mayor ante el
            Ayuntamiento de Barcelona, incluyendo consulta del PGM y
            verificación de edificabilidad.
          </GridListItem>
          <GridListItem title="Coordinación de gremios">
            Un único interlocutor para coordinar todos los gremios: albañilería,
            estructura, instalaciones, carpintería y acabados. Seguimiento
            semanal de obra.
          </GridListItem>
          <GridListItem title="Cumplimiento normativo">
            Proyecto conforme al CTE (Código Técnico de la Edificación), al
            Decreto de habitabilidad 141/2012 y a las ordenanzas municipales de
            Barcelona. Nueva cédula de habitabilidad incluida.
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. Proceso de ampliación */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Cómo ampliamos tu vivienda en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Cada ampliación es un proyecto técnico que requiere un estudio de
          viabilidad urbanística, un proyecto arquitectónico y una ejecución de
          obra coordinada. Te acompañamos en{' '}
          <strong className="font-semibold text-neutral-950">
            tres etapas
          </strong>{' '}
          para garantizar el resultado.
        </p>
      </SectionIntro>

      {/* 4. Proceso en 3 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Estudio de viabilidad urbanística"
          image={{ src: imageEstudioViabilidad }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              El primer paso es verificar si tu vivienda tiene{' '}
              <strong className="font-semibold text-neutral-950">
                potencial de ampliación
              </strong>{' '}
              según la normativa urbanística vigente. Consultamos el Plan
              General Metropolitano (PGM) y el Geoportal Urbanístic de la
              Generalitat para analizar la edificabilidad restante de tu finca.
            </p>
            <p>
              Evaluamos la{' '}
              <strong className="font-semibold text-neutral-950">
                viabilidad estructural
              </strong>
              : capacidad portante del forjado, estado de los muros de carga y
              posibilidad de intervención según el informe ITE (Inspección
              Técnica de Edificios) cuando existe.
            </p>
            <p>
              Identificamos el tipo de ampliación más adecuado a tu vivienda:
              cerramiento de terraza, unión de pisos, altillo, sobrelevación o
              ampliación en planta.
            </p>
            <p>
              Te proporcionamos una{' '}
              <strong className="font-semibold text-neutral-950">
                estimación presupuestaria
              </strong>{' '}
              y un calendario previsional para que puedas tomar una decisión
              informada.
            </p>
          </div>
        </Section>

        <Section
          title="Proyecto técnico y licencias"
          image={{ src: imageProyectoTecnico, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Redacción del{' '}
              <strong className="font-semibold text-neutral-950">
                proyecto técnico completo
              </strong>
              : anteproyecto básico (APB), anteproyecto definitivo (APD), planos
              de ejecución, mediciones y presupuesto por capítulos.
            </p>
            <p>
              Tramitación de la{' '}
              <strong className="font-semibold text-neutral-950">
                licencia de obra mayor
              </strong>{' '}
              ante el Ayuntamiento de Barcelona, incluyendo el visado del COAC y
              la coordinación con los servicios municipales de urbanismo.
            </p>
            <p>
              Gestión del acuerdo de la{' '}
              <strong className="font-semibold text-neutral-950">
                comunidad de propietarios
              </strong>{' '}
              cuando la ampliación afecta a elementos comunes: presentación del
              proyecto en junta, acta notarial y escritura de modificación de
              división horizontal si procede.
            </p>
            <p>
              Coordinación de los estudios técnicos complementarios: estudio
              geotécnico, cálculo de estructuras e informe de{' '}
              <Link
                href="/rehabilitacion-energetica/"
                className="font-semibold text-neutral-950 underline hover:text-neutral-700"
              >
                eficiencia energética
              </Link>
              .
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Proyecto de ejecución">
              Planos acotados, detalles constructivos, mediciones y presupuesto
              por capítulos.
            </ListItem>
            <ListItem title="Licencia de obra mayor">
              Tramitación completa ante el Ayuntamiento y visado del COAC.
            </ListItem>
            <ListItem title="Comunidad de propietarios">
              Gestión del acuerdo y modificación de la división horizontal.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Ejecución de obra y entrega"
          image={{ src: imageChantier, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Selección y coordinación de los{' '}
              <strong className="font-semibold text-neutral-950">
                gremios especializados
              </strong>
              : estructura, albañilería, instalaciones (electricidad,
              fontanería, climatización), carpintería y acabados.
            </p>
            <p>
              <strong className="font-semibold text-neutral-950">
                Seguimiento semanal de obra
              </strong>
              : visitas al chantier, reuniones de coordinación con los gremios,
              control de calidad y gestión de incidencias en tiempo real.
            </p>
            <p>
              Al finalizar:{' '}
              <strong className="font-semibold text-neutral-950">
                certificado final de obra
              </strong>
              , actualización catastral de la superficie ampliada y tramitación
              de la nueva{' '}
              <strong className="font-semibold text-neutral-950">
                cédula de habitabilidad
              </strong>
              .
            </p>
            <p>
              Entrega de la documentación técnica completa: planos as-built,
              certificados de instalaciones y garantías de los gremios.
            </p>
          </div>
        </Section>

      {/* 5. Tarifas */}
      <PricingBlock
        id="tarifas-ampliacion"
        name="Tarifas de ampliación de vivienda"
        description="Proyecto integral de ampliación de vivienda en Barcelona: desde el estudio de viabilidad hasta la entrega de obra con nueva cédula de habitabilidad."
        href="/contacto/"
        ctaLabel="Solicitar presupuesto gratuito"
        image={{ src: imageVerriere, shape: 0 }}
        showCounter={false}
        tiers={[
          {
            name: 'Consulta inicial',
            price: 'Gratuita',
            description:
              'Primera visita para evaluar la viabilidad de la ampliación: análisis urbanístico (PGM, edificabilidad), evaluación estructural y estimación presupuestaria.',
          },
          {
            name: 'Proyecto de ampliación',
            price: 'Desde 60 €/m²',
            description:
              'Proyecto técnico completo: estudio de viabilidad, anteproyecto, proyecto de ejecución, licencia de obra mayor y dirección facultativa. Precio variable según complejidad y tipología.',
            highlighted: true,
          },
          {
            name: 'Ejecución de obra',
            price: 'Desde 1.200 €/m²',
            description:
              'Ejecución integral de la ampliación: estructura, instalaciones, acabados, coordinación de gremios y seguimiento semanal. Precio variable según tipología y calidad de materiales.',
          },
        ]}
      />
      </div>

      {/* 6. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre ampliación de vivienda en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre la ampliación de
          viviendas en Barcelona: costes, licencias, plazos y normativa.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <FAQAccordion items={faqItems} />
        </FadeIn>
      </Container>

      {/* 7. Contact */}
      <ContactSection />

      {/* 8. Proyectos destacados */}
      <LatestProjects />

      {/* 9. Testimonios */}
      <TestimonialSlider
        className="mt-24 sm:mt-32 lg:mt-40"
        testimonials={serviceTestimonials}
      />
    </RootLayout>
  )
}
