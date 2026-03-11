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
import imageVisitaViabilidad from '@/images/visita-viabilidad-arquitecto-sarria-barcelona.jpg'
import imageAnteproyecto from '@/images/anteproyecto-maqueta-arquitecto-gracia-barcelona.jpg'
import imageLicenciaObras from '@/images/licencia-obras-fachada-loft-poblenou-barcelona.jpg'
import imageLicitacion from '@/images/licitacion-planos-tecnicos-eixample-barcelona.jpg'
import imageDireccionObra from '@/images/direccion-obra-chantier-structural-born-barcelona.jpg'
import imageVillaContemporanea from '@/images/villa-contemporanea-doble-altura-pedralbes-barcelona.jpg'
import { LatestProjects } from '@/components/LatestProjects'
import {
  TestimonialSlider,
  type TestimonialItem,
} from '@/components/TestimonialSlider'
import { FAQAccordion } from './faq-accordion'


const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'Nuestro arquitecto gestionó todo el proceso, desde el anteproyecto hasta la licencia de obras y la dirección de obra. La construcción de nuestra casa en Vallvidrera fue un proyecto complejo, pero el resultado es espectacular.',
    client: 'Marta y Àlex R., construcción nueva en Vallvidrera',
  },
  {
    quote:
      'La rehabilitación de la masía fue un reto enorme. El arquitecto supo combinar el respeto por la estructura original con una ampliación contemporánea que encaja perfectamente en el entorno.',
    client: 'Família Puig-Soler, rehabilitación masía en el Maresme',
  },
  {
    quote:
      'Necesitábamos un arquitecto que pudiera gestionar los complejos permisos de obra de Barcelona para nuestra ampliación de ático. Todo el proceso, desde los planos hasta la entrega final, se gestionó de forma profesional y dentro del plazo.',
    client: 'Richard & Anna M., ampliación de edificio en Gràcia',
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
    question: '¿Dónde intervenís en Barcelona y alrededores?',
    schemaAnswer:
      "Nuestros arquitectos colegiados intervienen en Barcelona ciudad y en las principales ciudades del área metropolitana. Intervenimos en los principales barrios de Barcelona: Eixample, Gràcia, Sarrià, Poblenou, Les Corts, Sant Andreu y Sants-Montjuïc. También intervenimos en las ciudades del área metropolitana: Sant Cugat, Sabadell, Castelldefels, Sitges, Badalona, L'Hospitalet de Llobregat y alrededores. Contacta con nosotros para solicitar un presupuesto gratuito.",
    answer: (
      <>
        <p>
          Nuestros arquitectos colegiados intervienen en{' '}
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
  {
    question:
      '¿Cuál es la diferencia entre un arquitecto superior y un arquitecto técnico?',
    schemaAnswer:
      "El arquitecto superior (título universitario de 5-6 años) se encarga del diseño, proyecto arquitectónico, dirección facultativa y firma de licencias de obras. El arquitecto técnico o aparejador (formación técnica de 3-4 años) se ocupa de la dirección de ejecución de obra y el control de materiales. Ambos están colegiados: los arquitectos en el COAC (Col·legi d'Arquitectes de Catalunya) y los arquitectos técnicos en el CATEB (Col·legi d'Aparelladors, Arquitectes Tècnics i Enginyers d'Edificació de Barcelona).",
    answer: (
      <>
        <p>
          El{' '}
          <strong className="font-semibold text-neutral-950">
            arquitecto superior
          </strong>{' '}
          (título universitario de 5-6 años) se encarga del diseño, proyecto
          arquitectónico, dirección facultativa y firma de licencias de obras.
        </p>
        <p>
          El{' '}
          <strong className="font-semibold text-neutral-950">
            arquitecto técnico o aparejador
          </strong>{' '}
          (formación técnica de 3-4 años) se ocupa de la dirección de ejecución
          de obra y el control de materiales.
        </p>
        <p>
          Ambos están colegiados: los arquitectos en el{' '}
          <strong className="font-semibold text-neutral-950">COAC</strong>{' '}
          (Col·legi d&apos;Arquitectes de Catalunya) y los arquitectos técnicos
          en el{' '}
          <strong className="font-semibold text-neutral-950">CATEB</strong>{' '}
          (Col·legi d&apos;Aparelladors, Arquitectes Tècnics i Enginyers
          d&apos;Edificació de Barcelona).
        </p>
      </>
    ),
  },
  {
    question:
      '¿Se puede realizar una contravisita de un inmueble con un arquitecto?',
    schemaAnswer:
      'Sí, un arquitecto puede acompañarte para evaluar el potencial de un inmueble antes de la compra. Realiza una evaluación estructural, analiza el potencial de ampliación o rehabilitación y estima el coste aproximado de los trabajos necesarios. Es un servicio especialmente útil para inmuebles que requieren obra nueva o ampliación. Solicita una contravisita con uno de nuestros arquitectos.',
    answer: (
      <>
        <p>
          Sí, un arquitecto puede acompañarte para{' '}
          <strong className="font-semibold text-neutral-950">
            evaluar el potencial de un inmueble antes de la compra
          </strong>
          . Realiza una evaluación estructural, analiza el potencial de
          ampliación o rehabilitación y estima el coste aproximado de los
          trabajos necesarios.
        </p>
        <p>
          Es un servicio especialmente útil para inmuebles que requieren obra
          nueva o ampliación.
        </p>
        <p>
          <Link
            href="/asesoria-compra-vivienda/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Solicita una contravisita
          </Link>{' '}
          con uno de nuestros arquitectos.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué presupuesto prever para un proyecto de construcción?',
    schemaAnswer:
      'El coste medio de las obras de construcción nueva en Barcelona parte de 2.000 €/m². Los honorarios del arquitecto representan entre el 11 % y el 15 % del importe de las obras, según la complejidad del proyecto. Variables que influyen en el presupuesto: complejidad del diseño, características del terreno, normativa urbanística aplicable y calidad de los materiales. Para proyectos de ampliación de vivienda, consulta nuestro servicio especializado.',
    answer: (
      <>
        <p>
          El coste medio de las obras de construcción nueva en Barcelona parte
          de{' '}
          <strong className="font-semibold text-neutral-950">
            2.000&nbsp;€/m²
          </strong>
          .
        </p>
        <p>
          Los honorarios del arquitecto representan entre el{' '}
          <strong className="font-semibold text-neutral-950">
            11&nbsp;% y el 15&nbsp;%
          </strong>{' '}
          del importe de las obras, según la complejidad del proyecto.
        </p>
        <p>
          Variables que influyen en el presupuesto: complejidad del diseño,
          características del terreno, normativa urbanística aplicable y calidad
          de los materiales.
        </p>
        <p>
          Para proyectos de ampliación de vivienda, consulta nuestro{' '}
          <Link
            href="/ampliacion-vivienda/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            servicio de ampliación
          </Link>
          . Consulta también nuestras{' '}
          <Link
            href="/precios/#tarifas-arquitecto"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            tarifas de arquitecto
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: '¿Qué es la licencia de obras mayor en Barcelona?',
    schemaAnswer:
      'La licencia de obras mayor es obligatoria en Barcelona para: obra nueva, ampliación de edificios, cambios estructurales y modificación de fachadas. Requiere un proyecto técnico firmado por un arquitecto colegiado. El plazo de aprobación es de 2 a 4 meses y el coste representa entre el 3 % y el 5 % del presupuesto de la obra. La licencia tiene una validez de 1 año para iniciar las obras y 3 años para finalizarlas.',
    answer: (
      <>
        <p>
          La{' '}
          <strong className="font-semibold text-neutral-950">
            licencia de obras mayor
          </strong>{' '}
          es obligatoria en Barcelona para: obra nueva, ampliación de edificios,
          cambios estructurales y modificación de fachadas.
        </p>
        <p>
          Requiere un{' '}
          <strong className="font-semibold text-neutral-950">
            proyecto técnico firmado por un arquitecto colegiado
          </strong>
          . El plazo de aprobación es de 2 a 4 meses y el coste representa entre
          el 3&nbsp;% y el 5&nbsp;% del presupuesto de la obra.
        </p>
        <p>
          La licencia tiene una validez de 1 año para iniciar las obras y 3 años
          para finalizarlas.
        </p>
      </>
    ),
  },
  {
    question: '¿Un arquitecto puede encargarse de locales comerciales?',
    schemaAnswer:
      'Sí, nuestros arquitectos tienen experiencia en el diseño y construcción de locales comerciales: showrooms, restaurantes, hoteles, coworking, oficinas y consultorios médicos. El arquitecto se encarga del proyecto completo, desde el diseño hasta la obtención de la licencia de actividad. Consulta nuestro servicio de interiorismo comercial.',
    answer: (
      <>
        <p>
          Sí, nuestros arquitectos tienen experiencia en el diseño y
          construcción de{' '}
          <strong className="font-semibold text-neutral-950">
            locales comerciales
          </strong>
          : showrooms, restaurantes, hoteles, coworking, oficinas y consultorios
          médicos.
        </p>
        <p>
          El arquitecto se encarga del proyecto completo, desde el diseño hasta
          la obtención de la licencia de actividad.
        </p>
        <p>
          Consulta nuestro{' '}
          <Link
            href="/interiorismo-comercial/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            servicio de interiorismo comercial
          </Link>
          .
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
          name: 'Arquitecto',
          item: 'https://www.interioristabarcelona.com/arquitecto/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.interioristabarcelona.com/arquitecto/#service',
      name: 'Arquitecto en Barcelona',
      description:
        'Servicio de arquitectura en Barcelona: construcción nueva, rehabilitación y reforma integral por arquitectos colegiados inscritos en el COAC.',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      serviceType: 'Arquitectura',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '11',
        unitText: '% del presupuesto de obra',
        description:
          'Honorarios de arquitecto desde el 11 % del presupuesto de obra',
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
        '@id': 'https://www.interioristabarcelona.com/arquitecto/#service',
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
  title: 'Arquitecto en Barcelona | Construcción y Rehabilitación 2026',
  description:
    'Arquitecto colegiado en Barcelona: proyectos de construcción nueva, rehabilitación y dirección facultativa de obra. Inscrito en el COAC. Presupuesto gratuito.',
  alternates: {
    canonical: '/arquitecto/',
  },
}

export default function ArquitectoPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Nuestros servicios"
        title="Arquitecto en Barcelona"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Construcción nueva, rehabilitación y dirección facultativa de obra
        </p>
        <p className="mt-6">
          Los arquitectos colegiados del colectivo, inscritos en el COAC
          (Col·legi d&apos;Arquitectes de Catalunya), te acompañan en tus
          proyectos de construcción y rehabilitación en Barcelona y área
          metropolitana. Seguro de responsabilidad civil y decenal incluido.
          ¿Necesitas ampliar tu vivienda? Consulta nuestro servicio de{' '}
          <Link
            href="/ampliacion-vivienda/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            ampliación de vivienda
          </Link>
          .
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. ¿Por qué contar con un arquitecto? */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué contar con un arquitecto en Barcelona?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          El arquitecto colegiado te acompaña en cada etapa de tu proyecto,
          desde la concepción hasta la entrega de la obra terminada.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Profesional colegiado y asegurado">
            Arquitecto titulado inscrito en el COAC (Col·legi d&apos;Arquitectes
            de Catalunya), con seguro de responsabilidad civil y decenal
            obligatorio.
          </GridListItem>
          <GridListItem title="Visión global del proyecto">
            De la concepción a la entrega: planos, fachadas, esquemas y vistas
            3D para visualizar el resultado antes de iniciar las obras.
          </GridListItem>
          <GridListItem title="Optimización normativa">
            Análisis del Plan General Metropolitano (PGM), licencias de obra
            mayor, comunicados previos de obra e intercambios con el
            Ayuntamiento de Barcelona.
          </GridListItem>
          <GridListItem title="Coordinación de ingenierías">
            Coordinación con bureaux d&apos;études especializados: geómetra,
            geotécnico, ingeniero de estructuras e ingeniero térmico.
          </GridListItem>
          <GridListItem title="Control presupuestario">
            Experiencia para validar presupuestos de constructoras, optimizar
            costes y evitar sobrecostes durante la ejecución de la obra.
          </GridListItem>
          <GridListItem title="Valor patrimonial">
            Una vivienda de arquitecto es una construcción contemporánea
            excepcional, un valor añadido para tu inversión inmobiliaria.
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. Etapas de un proyecto de arquitectura */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Etapas de un proyecto de arquitectura en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          El arquitecto te acompaña desde la concepción hasta la recepción de la
          obra terminada, en{' '}
          <strong className="font-semibold text-neutral-950">
            cinco etapas
          </strong>{' '}
          adaptadas a cada tipo de proyecto: construcción nueva o
          rehabilitación.
        </p>
      </SectionIntro>

      {/* 4. Proceso en 5 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Visita consejo y estudio de viabilidad"
          image={{ src: imageVisitaViabilidad }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Desde la primera visita, el arquitecto evalúa in situ la{' '}
              <strong className="font-semibold text-neutral-950">
                viabilidad del proyecto
              </strong>
              : potencial de construcción o rehabilitación del terreno o
              inmueble.
            </p>
            <p>
              Analiza las{' '}
              <strong className="font-semibold text-neutral-950">
                restricciones urbanísticas
              </strong>{' '}
              del Plan General Metropolitano (PGM), la edificabilidad, las
              alturas máximas y los retranqueos aplicables a tu parcela.
            </p>
            <p>
              Proporciona una estimación previsional de los costes de
              construcción y honorarios para que puedas tomar una decisión
              informada.
            </p>
            <p>
              Propone soluciones creativas adaptadas a tus ambiciones y
              presupuesto, aprovechando al máximo las posibilidades del
              emplazamiento.
            </p>
          </div>
        </Section>

        <Section
          title="Estudio de viabilidad y anteproyecto"
          image={{ src: imageAnteproyecto, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Reunión en profundidad y análisis detallado de los documentos
              urbanísticos:{' '}
              <strong className="font-semibold text-neutral-950">
                PGM, normas urbanísticas
              </strong>{' '}
              y reglamento de la comunidad de propietarios cuando aplica.
            </p>
            <p>
              Elaboración del{' '}
              <strong className="font-semibold text-neutral-950">
                anteproyecto arquitectónico
              </strong>
              : planos, alzados, secciones y vistas 3D para visualizar cada
              aspecto de la construcción antes de pasar a la fase de ejecución.
            </p>
            <p>
              Consulta de bureaux d&apos;études especializados: estudio
              geotécnico, cálculo de estructuras e ingeniería térmica para
              validar las soluciones técnicas.
            </p>
            <p>
              Definición del{' '}
              <strong className="font-semibold text-neutral-950">
                proyecto arquitectónico
              </strong>{' '}
              con todos los elementos necesarios para pasar a la siguiente fase
              administrativa.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Planos de anteproyecto">
              Planos acotados, alzados, secciones y vistas 3D del proyecto.
            </ListItem>
            <ListItem title="Estudios técnicos">
              Informes geotécnico, estructural y de eficiencia energética.
            </ListItem>
            <ListItem title="Presupuesto estimativo">
              Estimación detallada del coste de construcción por capítulos.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Licencia de obras y tramitación urbanística"
          image={{ src: imageLicenciaObras, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Constitución del dossier completo de{' '}
              <strong className="font-semibold text-neutral-950">
                licencia de obras mayor
              </strong>{' '}
              ante el Ayuntamiento de Barcelona.
            </p>
            <p>
              Redacción del{' '}
              <strong className="font-semibold text-neutral-950">
                proyecto de ejecución
              </strong>{' '}
              completo: planos definitivos, detalles constructivos, mediciones y
              presupuesto por capítulos.
            </p>
            <p>
              Coordinación con el{' '}
              <strong className="font-semibold text-neutral-950">COAC</strong>{' '}
              (Col·legi d&apos;Arquitectes de Catalunya) y los servicios
              municipales de urbanismo para la tramitación administrativa.
            </p>
            <p>
              Acompañamiento en el depósito y seguimiento de la instrucción del
              expediente (plazo habitual de 2 a 4 meses), incluyendo consultas
              con los servicios urbanísticos si es necesario.
            </p>
          </div>
        </Section>

        <Section
          title="Consulta a empresas y licitación de obras"
          image={{ src: imageLicitacion, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Realización del{' '}
              <strong className="font-semibold text-neutral-950">
                Documento de Consulta a Empresas (DCE)
              </strong>
              : pliego de condiciones, mediciones, presupuesto de referencia y
              planificación preliminar.
            </p>
            <p>
              Lanzamiento de la{' '}
              <strong className="font-semibold text-neutral-950">
                licitación
              </strong>{' '}
              y puesta en competencia de las constructoras seleccionadas para
              cada lote de obra.
            </p>
            <p>
              Análisis comparativo detallado de los presupuestos recibidos y
              asesoramiento sobre cada propuesta según el presupuesto global y
              la pertinencia técnica.
            </p>
            <p>
              Puesta a punto de los contratos de obra y validación de las
              condiciones de ejecución antes del inicio de los trabajos.
            </p>
          </div>
        </Section>

        <Section
          title="Dirección de obra y recepción"
          image={{ src: imageDireccionObra, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Firma de los contratos de obra y elaboración del{' '}
              <strong className="font-semibold text-neutral-950">
                planning previsional
              </strong>{' '}
              de ejecución con cada empresa interviniente.
            </p>
            <p>
              Visitas semanales al chantier y{' '}
              <strong className="font-semibold text-neutral-950">
                reuniones de obra
              </strong>{' '}
              para coordinar a los diferentes gremios y verificar el avance de
              los trabajos.
            </p>
            <p>
              Control de la conformidad con el proyecto, verificación de la
              calidad de ejecución y gestión de incidencias en tiempo real.
            </p>
            <p>
              Redacción de{' '}
              <strong className="font-semibold text-neutral-950">
                informes semanales
              </strong>{' '}
              de seguimiento y, al finalizar,{' '}
              <strong className="font-semibold text-neutral-950">
                recepción de la obra
              </strong>{' '}
              con verificación final de acabados y entrega de toda la
              documentación técnica.
            </p>
          </div>
        </Section>

      {/* 5. Tarifas */}
      <PricingBlock
        id="tarifas-arquitecto"
        name="Tarifas de un proyecto de arquitectura"
        description="Servicio integral de arquitectura para proyectos de construcción y rehabilitación en Barcelona. Desde la consulta inicial hasta la dirección de obra, te acompañamos en cada etapa."
        href="/contacto/"
        ctaLabel="Solicitar presupuesto gratuito"
        image={{ src: imageVillaContemporanea, shape: 0 }}
        showCounter={false}
        tiers={[
          {
            name: 'Consulta inicial',
            price: '90 €/hora',
            description:
              'Primera visita para evaluar la viabilidad del proyecto, analizar el terreno y las normativas urbanísticas aplicables.',
          },
          {
            name: 'Proyecto de arquitectura',
            price: 'Desde el 11 % del presupuesto de obra',
            description:
              'Misión completa: estudio de viabilidad, anteproyecto, proyecto de ejecución, licencia de obras y dirección facultativa. Porcentaje variable: 11-15 % según complejidad.',
            highlighted: true,
          },
          {
            name: 'Dirección de obra',
            price: 'Incluida en misión completa',
            description:
              'Coordinación del chantier, visitas semanales, control de calidad y recepción de la obra. Facturación: 35 % de los honorarios ajustados al coste real.',
          },
        ]}
      />
      </div>

      {/* 6. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre arquitectura en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre nuestros servicios de
          arquitectura.
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
