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
import imageEvaluacion from '@/images/evaluacion-accesibilidad-piso-born-barcelona.jpg'
import imageProyectoAdaptacion from '@/images/proyecto-adaptacion-accesible-eixample-barcelona.jpg'
import imageBanoAccesible from '@/images/bano-accesible-diseno-sarria-barcelona.jpg'
import imageSalonAccesible from '@/images/salon-accesible-moderno-poblenou-barcelona.jpg'
import { LatestProjects } from '@/components/LatestProjects'
import {
  TestimonialSlider,
  type TestimonialItem,
} from '@/components/TestimonialSlider'
import { FAQAccordion } from './faq-accordion'

const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'Adaptaron el piso de mis padres en el Eixample después de la operación de cadera de mi madre. El resultado es precioso y totalmente funcional: ducha a ras de suelo, barras discretas y puertas ensanchadas. Además nos ayudaron con la subvención de la Generalitat.',
    client: 'Carmen y Lluís M., adaptación de vivienda en Eixample',
  },
  {
    quote:
      'Después de mi accidente necesitaba adaptar mi piso en Gràcia para silla de ruedas. El equipo diseñó un espacio que no tiene nada de aspecto de hospital: moderno, bonito y totalmente accesible. Me devolvieron la autonomía en mi propia casa.',
    client: 'David R., adaptación para silla de ruedas en Gràcia',
  },
  {
    quote:
      'Mi padre se mudó a Barcelona y necesitaba un piso adaptado para silla de ruedas en Sarrià. El equipo realizó una reforma bonita y funcional a la vez — pasillos anchos, un baño adaptado y domótica. Se encargaron de todo, incluidos los permisos.',
    client: 'Sarah & Michael K., reforma accesible en Sarrià',
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
    question: '¿Qué incluye un proyecto de interiorismo accesible?',
    schemaAnswer:
      'Un proyecto de interiorismo accesible incluye una visita de evaluación de barreras arquitectónicas, un estudio técnico con planos adaptados a la normativa (CTE DB SUA 9, Decreto 209/2023), selección de materiales certificados (suelos antideslizantes, grifería termostática, barras de apoyo), coordinación con terapeuta ocupacional si es necesario, gestión de subvenciones y seguimiento completo de la obra.',
    answer: (
      <>
        <p>
          Un proyecto de interiorismo accesible incluye una{' '}
          <strong className="font-semibold text-neutral-950">
            visita de evaluación de barreras arquitectónicas
          </strong>
          , un estudio técnico con planos adaptados a la normativa (CTE DB
          SUA&nbsp;9, Decreto 209/2023), selección de materiales certificados
          (suelos antideslizantes, grifería termostática, barras de apoyo),
          coordinación con terapeuta ocupacional si es necesario, gestión de
          subvenciones y seguimiento completo de la obra.
        </p>
        <p>
          Descubre también nuestro{' '}
          <Link
            href="/diseno-interiores/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            servicio de diseño de interiores
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: '¿Cuánto cuesta adaptar una vivienda PMR en Barcelona?',
    schemaAnswer:
      'El coste de adaptar una vivienda para personas con movilidad reducida en Barcelona depende del alcance de las obras. La visita de evaluación es de 75 €/hora. El proyecto de adaptación parte desde 40 €/m² (viviendas de más de 101 m²), 55 €/m² (61-100 m²) y 70 €/m² (hasta 60 m²). El seguimiento de obra representa un 9 % del presupuesto de ejecución. También ofrecemos consultas conjuntas con terapeuta ocupacional por 200 €.',
    answer: (
      <>
        <p>
          El coste depende del{' '}
          <strong className="font-semibold text-neutral-950">
            alcance de las obras
          </strong>
          . La visita de evaluación es de 75&nbsp;€/hora. El proyecto de
          adaptación parte desde 40&nbsp;€/m² para viviendas grandes y hasta
          70&nbsp;€/m² para pisos de hasta 60&nbsp;m².
        </p>
        <p>
          El seguimiento de obra representa un 9&nbsp;% del presupuesto de
          ejecución. Existen subvenciones que pueden cubrir una parte
          significativa de la inversión.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Solicita un presupuesto gratuito
          </Link>{' '}
          adaptado a tu situación.
        </p>
      </>
    ),
  },
  {
    question: '¿Existen ayudas y subvenciones para adaptar mi vivienda?',
    schemaAnswer:
      'Sí, existen varias ayudas públicas para adaptar viviendas en Barcelona. La Generalitat de Catalunya ofrece hasta 4.000 € para mayores de 65 años. El Ajuntament de Barcelona concede hasta 30.000 € para personas con un 33 % o más de discapacidad reconocida. La Fundación Mutua de Propietarios ofrece hasta 15.000 € a través del Programa Sin Barreras. Y la Diputació de Barcelona dispone del Programa Arranjaments para municipios del área metropolitana. Nuestro equipo te ayuda con toda la tramitación.',
    answer: (
      <>
        <p>
          Sí, existen varias{' '}
          <strong className="font-semibold text-neutral-950">
            ayudas públicas
          </strong>{' '}
          para adaptar viviendas en Barcelona:
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Generalitat de Catalunya
          </strong>
          : hasta 4.000&nbsp;€ para mayores de 65 años.{' '}
          <strong className="font-semibold text-neutral-950">
            Ajuntament de Barcelona
          </strong>
          : hasta 30.000&nbsp;€ para personas con un 33&nbsp;% o más de
          discapacidad reconocida.{' '}
          <strong className="font-semibold text-neutral-950">
            Fundación Mutua de Propietarios
          </strong>
          : hasta 15.000&nbsp;€ (Programa Sin Barreras).{' '}
          <strong className="font-semibold text-neutral-950">
            Diputació de Barcelona
          </strong>
          : Programa Arranjaments.
        </p>
        <p>Nuestro equipo te ayuda con toda la tramitación de subvenciones.</p>
      </>
    ),
  },
  {
    question: '¿Se puede hacer accesible un piso antiguo del Eixample?',
    schemaAnswer:
      'Sí, es posible adaptar pisos antiguos del Eixample de Barcelona para mejorar su accesibilidad. Aunque estos edificios presentan retos específicos (pasillos estrechos, puertas pequeñas, bañeras altas), nuestros interioristas especializados en accesibilidad diseñan soluciones técnicas para ensanchar pasos, sustituir bañeras por duchas enrasadas, instalar domótica y reorganizar espacios para cumplir con la normativa CTE DB SUA 9.',
    answer: (
      <>
        <p>
          Sí, es posible adaptar pisos antiguos del Eixample. Aunque estos
          edificios presentan{' '}
          <strong className="font-semibold text-neutral-950">
            retos específicos
          </strong>{' '}
          (pasillos estrechos, puertas pequeñas, bañeras altas), diseñamos
          soluciones técnicas para ensanchar pasos, sustituir bañeras por duchas
          enrasadas, instalar domótica y reorganizar espacios.
        </p>
        <p>
          Descubre nuestro{' '}
          <Link
            href="/diseno-interiores/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            servicio de diseño de interiores
          </Link>{' '}
          para proyectos de reforma integral.
        </p>
      </>
    ),
  },
  {
    question: '¿Dónde ofrecéis interiorismo accesible en Barcelona?',
    schemaAnswer:
      "Nuestro servicio de interiorismo accesible se realiza en Barcelona ciudad y en las principales ciudades del área metropolitana. Intervenimos en los principales barrios de Barcelona: Eixample, Gràcia, El Born, Sarrià, Poblenou, Les Corts, Sant Andreu y Sants-Montjuïc. También intervenimos en Sant Cugat, Sabadell, Castelldefels, Sitges, Badalona, L'Hospitalet de Llobregat y alrededores. Nos desplazamos a cualquier punto accesible en metro o FGC.",
    answer: (
      <>
        <p>
          Nuestro servicio de interiorismo accesible se realiza en{' '}
          <strong className="font-semibold text-neutral-950">
            Barcelona ciudad
          </strong>{' '}
          y en las principales ciudades del área metropolitana.
        </p>
        <p>
          Intervenimos en los principales barrios de Barcelona:{' '}
          <Link href="/interiorista-eixample/" className="font-semibold text-neutral-950 underline hover:text-neutral-700">Eixample</Link>,{' '}
          <Link href="/interiorista-gracia/" className="font-semibold text-neutral-950 underline hover:text-neutral-700">Gràcia</Link>,{' '}
          <Link href="/interiorista-born/" className="font-semibold text-neutral-950 underline hover:text-neutral-700">El Born</Link>,{' '}
          <Link href="/interiorista-sarria/" className="font-semibold text-neutral-950 underline hover:text-neutral-700">Sarrià</Link>,{' '}
          <Link href="/interiorista-poblenou/" className="font-semibold text-neutral-950 underline hover:text-neutral-700">Poblenou</Link>,{' '}
          Les Corts, Sant Andreu y Sants-Montjuïc.
        </p>
        <p>
          También intervenimos en{' '}
          <Link href="/interiorista-sant-cugat/" className="font-semibold text-neutral-950 underline hover:text-neutral-700">Sant Cugat</Link>,{' '}
          <Link href="/interiorista-sabadell/" className="font-semibold text-neutral-950 underline hover:text-neutral-700">Sabadell</Link>,{' '}
          Castelldefels,{' '}
          <Link href="/interiorista-sitges/" className="font-semibold text-neutral-950 underline hover:text-neutral-700">Sitges</Link>,{' '}
          Badalona, L&apos;Hospitalet de Llobregat y alrededores. Nos
          desplazamos a cualquier punto accesible en metro o FGC.
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
    question: '¿También adaptáis locales comerciales?',
    schemaAnswer:
      'Sí, además de viviendas, adaptamos locales comerciales, oficinas y espacios públicos para cumplir con la normativa de accesibilidad vigente (Ley 13/2014 de accesibilidad de Cataluña y Decreto 209/2023). Esto incluye rampas, baños adaptados, señalización inclusiva y sistemas de orientación para personas con discapacidad visual o auditiva.',
    answer: (
      <>
        <p>
          Sí, además de viviendas, adaptamos{' '}
          <strong className="font-semibold text-neutral-950">
            locales comerciales, oficinas y espacios públicos
          </strong>{' '}
          para cumplir con la normativa de accesibilidad vigente (Ley 13/2014 y
          Decreto 209/2023).
        </p>
        <p>
          Esto incluye rampas, baños adaptados, señalización inclusiva y
          sistemas de orientación para personas con discapacidad visual o
          auditiva.
        </p>
        <p>
          Descubre nuestro{' '}
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
          item: 'https://www.interiorista-barcelona.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Nuestros servicios',
          item: 'https://www.interiorista-barcelona.com/servicios/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Interiorismo accesible',
          item: 'https://www.interiorista-barcelona.com/interiorismo-accesible/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id':
        'https://www.interiorista-barcelona.com/interiorismo-accesible/#service',
      name: 'Interiorismo accesible en Barcelona',
      description:
        'Servicio profesional de interiorismo accesible en Barcelona: diseño de interiores adaptado a personas con movilidad reducida, gestión de subvenciones y cumplimiento normativo (CTE DB SUA 9, Decreto 209/2023).',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interiorista-barcelona.com',
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
      serviceType: 'Interiorismo accesible',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '75',
        description: 'Visita de evaluación de accesibilidad desde 75 €/hora',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.interiorista-barcelona.com/#localbusiness',
      name: 'Interiorista Barcelona',
      url: 'https://www.interiorista-barcelona.com',
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        ratingCount: '3',
        reviewCount: '3',
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
        '@type': 'LocalBusiness' as const,
        '@id': 'https://www.interiorista-barcelona.com/#localbusiness',
        name: 'Interiorista Barcelona',
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
  title: 'Interiorismo Accesible en Barcelona | Diseño Adaptado PMR',
  description:
    'Interiorismo accesible en Barcelona: diseño de interiores adaptado a movilidad reducida, baño adaptado, cocina accesible y domótica. Gestión de subvenciones. Presupuesto gratuito.',
  openGraph: {
    type: 'website',
    title: 'Interiorismo Accesible en Barcelona | Diseño Adaptado PMR',
    description:
      'Interiorismo accesible en Barcelona: diseño de interiores adaptado a movilidad reducida, baño adaptado, cocina accesible y domótica. Gestión de subvenciones. Presupuesto gratuito.',
  },
  alternates: {
    canonical: '/interiorismo-accesible/',
  },
}

export default function InteriorismoAccesiblePage() {
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
        title="Interiorismo accesible en Barcelona"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Diseño de interiores adaptado a tus necesidades de movilidad
        </p>
        <p className="mt-6">
          Los interioristas especializados en accesibilidad del colectivo
          diseñan espacios que combinan{' '}
          <strong className="font-semibold text-neutral-950">
            funcionalidad y estética
          </strong>
          , sin aspecto de hospital. Adaptamos viviendas para personas con
          movilidad reducida, mayores y personas con discapacidad en Barcelona y
          alrededores — cumpliendo la normativa catalana y gestionando las
          subvenciones disponibles.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      <ServiceSummary
        title="En resumen: Interiorismo accesible en Barcelona"
        items={[
          { label: 'Plazo medio', value: '3 a 8 semanas' },
          { label: 'Zona', value: 'Barcelona y área metropolitana' },
          { label: 'Incluye', value: 'Evaluación, proyecto, obra adaptada' },
          { label: 'Normativa', value: 'CTE DB-SUA y Decreto 135/1995' },
          { label: 'Subvenciones', value: 'Ayudas accesibilidad Generalitat' },
        ]}
      />

      {/* 2. ¿Por qué recurrir a un interiorista especializado en accesibilidad? */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué recurrir a un interiorista especializado en accesibilidad?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Adaptar una vivienda para personas con movilidad reducida requiere
          cumplir la normativa catalana (Decreto 209/2023, Ley 13/2014) y el
          Código Técnico de la Edificación (CTE DB SUA&nbsp;9). Un interiorista
          especializado garantiza el cumplimiento normativo, optimiza el
          presupuesto y crea un espacio donde accesibilidad y diseño van de la
          mano.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Estética sin renunciar a la funcionalidad">
            Diseñamos espacios accesibles que son bonitos y acogedores, lejos
            del aspecto clínico. Cada elemento — barras de apoyo, suelos
            antideslizantes, domótica — se integra como parte del diseño
            interior.
          </GridListItem>
          <GridListItem title="Normativa catalana y estatal">
            Cumplimiento garantizado del CTE DB SUA&nbsp;9, la Ley 13/2014 de
            accesibilidad de Cataluña y el Decreto 209/2023 (Código de
            accesibilidad de Cataluña). Evita sanciones y asegura la validez de
            tu reforma.
          </GridListItem>
          <GridListItem title="Gestión de subvenciones">
            Te ayudamos a tramitar las ayudas disponibles: Generalitat de
            Catalunya (hasta 4.000&nbsp;€), Ajuntament de Barcelona (hasta
            30.000&nbsp;€), Fundación Mutua de Propietarios (hasta
            15.000&nbsp;€) y Diputació de Barcelona (Programa Arranjaments).
          </GridListItem>
          <GridListItem title="Coordinación con profesionales sanitarios">
            Trabajamos con terapeutas ocupacionales para evaluar las necesidades
            reales de movilidad y anticipar las adaptaciones futuras según la
            evolución de cada persona.
          </GridListItem>
          <GridListItem title="Red de instaladores especializados">
            Contamos con una red de profesionales expertos en accesibilidad:
            platos de ducha enrasados, salvaescaleras, plataformas elevadoras,
            domótica adaptada y carpintería a medida.
          </GridListItem>
          <GridListItem title="Adaptación progresiva">
            Planificamos las reformas por fases para que puedas adaptar tu
            vivienda de forma gradual, priorizando las necesidades más urgentes
            y ajustando el presupuesto en el tiempo.
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. Tu colaboración con un interiorista especializado en accesibilidad */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Tu colaboración con un interiorista especializado en accesibilidad"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          El interiorista trabaja contigo, tu familia y, si es necesario, con un
          terapeuta ocupacional para entender tus necesidades de movilidad
          actuales y anticipar las futuras. Cada decisión — desde la anchura de
          las puertas hasta la altura de los interruptores — se toma pensando en
          tu autonomía y tu bienestar a largo plazo.
        </p>
      </SectionIntro>

      {/* 4. Proceso en 3 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Visita de evaluación de accesibilidad"
          image={{ src: imageEvaluacion, alt: 'Evaluación de accesibilidad en piso del Born, Barcelona' }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Visita a domicilio para evaluar las{' '}
              <strong className="font-semibold text-neutral-950">
                barreras arquitectónicas existentes
              </strong>
              : anchuras de paso, desniveles, estado del baño y la cocina,
              acceso al edificio.
            </p>
            <p>
              Análisis de las{' '}
              <strong className="font-semibold text-neutral-950">
                necesidades específicas de movilidad
              </strong>
              : tipo de movilidad reducida, uso de silla de ruedas o andador,
              necesidades cognitivas o sensoriales.
            </p>
            <p>
              Coordinación con terapeuta ocupacional si es necesario. Primera
              estimación de presupuesto e identificación de las subvenciones
              aplicables.
            </p>
          </div>
        </Section>

        <Section
          title="Estudio del proyecto de adaptación"
          image={{ src: imageProyectoAdaptacion, shape: 1, alt: 'Proyecto de adaptación accesible en el Eixample' }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Elaboración del{' '}
              <strong className="font-semibold text-neutral-950">
                anteproyecto y proyecto de ejecución
              </strong>{' '}
              conformes a la normativa: puertas de mínimo 80&nbsp;cm, pasillos
              de 120&nbsp;cm, radio de giro de 150&nbsp;cm en baño y cocina,
              alturas adaptadas para interruptores y enchufes.
            </p>
            <p>
              Selección de{' '}
              <strong className="font-semibold text-neutral-950">
                materiales certificados
              </strong>
              : suelos antideslizantes (clase 2-3 CTE), barras de apoyo de acero
              inoxidable, grifería termostática, muebles de cocina con sistemas
              extraíbles.
            </p>
            <p>
              Estimación detallada de costes e identificación de subvenciones
              aplicables para optimizar la inversión.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Baño adaptado">
              Ducha enrasada, asiento abatible, barras de apoyo, grifería
              termostática y suelo antideslizante.
            </ListItem>
            <ListItem title="Cocina accesible">
              Encimera regulable en altura, cajones extraíbles, fregadero bajo
              accesible y electrodomésticos a altura ergonómica.
            </ListItem>
            <ListItem title="Domótica">
              Control por voz de iluminación, persianas y climatización,
              sensores de caída y automatización de accesos.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Seguimiento de obra y entrega"
          image={{ src: imageBanoAccesible, shape: 2, alt: 'Baño accesible de diseño en Sarrià, Barcelona' }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Selección de{' '}
              <strong className="font-semibold text-neutral-950">
                empresas especializadas en accesibilidad
              </strong>{' '}
              y coordinación de todos los actores: constructora, fontanero,
              electricista, carpintero e instalador domótico.
            </p>
            <p>
              Reuniones periódicas de seguimiento para garantizar el
              cumplimiento del proyecto, los plazos y el presupuesto.
            </p>
            <p>
              <strong className="font-semibold text-neutral-950">
                Verificación final de accesibilidad
              </strong>{' '}
              con el terapeuta ocupacional y el usuario para asegurar que todas
              las adaptaciones funcionan correctamente en el día a día.
            </p>
          </div>
        </Section>

      {/* 5. Tarifas */}
      <PricingBlock
        id="tarifas-interiorismo-accesible"
        name="Tarifas de interiorismo accesible"
        description="Servicio profesional de interiorismo accesible en Barcelona. Adaptamos tu vivienda o local para personas con movilidad reducida, cumpliendo la normativa y gestionando subvenciones."
        href="/contacto/"
        ctaLabel="Solicitar presupuesto gratuito"
        image={{ src: imageSalonAccesible, shape: 0, alt: 'Salón accesible moderno en Poblenou, Barcelona' }}
        showCounter={false}
        tiers={[
          {
            name: 'Visita de evaluación',
            price: '75 €/hora',
            description:
              'Evaluación a domicilio de barreras arquitectónicas, análisis de necesidades de movilidad y primera estimación de presupuesto y subvenciones aplicables.',
          },
          {
            name: 'Proyecto de adaptación',
            price: 'Desde 40 €/m²',
            description:
              'Proyecto completo de adaptación: planos técnicos, selección de materiales certificados, estimación de costes y gestión de subvenciones. Pisos ≤60 m²: 70 €/m² · 61-100 m²: 55 €/m² · ≥101 m²: 40 €/m².',
            highlighted: true,
          },
          {
            name: 'Seguimiento de obra',
            price: '9 % del presupuesto',
            description:
              'Coordinación de gremios especializados en accesibilidad, visitas de obra periódicas y verificación final de accesibilidad.',
          },
          {
            name: 'Consulta terapeuta ocupacional',
            price: '200 €',
            description:
              'Evaluación conjunta con terapeuta ocupacional para definir las adaptaciones específicas según el tipo de movilidad reducida.',
          },
        ]}
      />
      </div>

      {/* 6. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre interiorismo accesible en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre nuestro servicio de
          interiorismo accesible.
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
