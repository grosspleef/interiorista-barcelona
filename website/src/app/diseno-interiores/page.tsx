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
import imageEstudioProyecto from '@/images/estudio-proyecto-diseno-interiores-barcelona-planos.jpg'
import imageSalonContemporaneo from '@/images/diseno-interiores-salon-contemporaneo-barcelona.jpg'
import imageSeguimientoObra from '@/images/seguimiento-obra-reforma-integral-barcelona.jpg'
import imageVisitaConsejo from '@/images/visita-consejo-interiorista-piso-eixample-barcelona.jpg'
import { ProjectShowcase, type Project } from '@/components/ProjectShowcase'
import { TestimonialSlider, type TestimonialItem } from '@/components/TestimonialSlider'
import { FAQAccordion } from './faq-accordion'

const serviceProjects: Project[] = [
  {
    title: 'Reforma integral piso modernista en Eixample',
    description:
      '130 m² en finca regia: apertura cocina-salón, recuperación de suelos hidráulicos originales y redistribución completa respetando los elementos modernistas.',
    year: '2025',
    category: 'Reforma integral',
    image: imageVisitaConsejo,
  },
  {
    title: 'Rehabilitación de ático en Gràcia',
    description:
      '85 m² con terraza: optimización de la luz natural, redistribución de espacios y creación de una conexión fluida entre interior y exterior.',
    year: '2024',
    category: 'Diseño de interiores',
    image: imageEstudioProyecto,
  },
  {
    title: 'Transformación loft industrial en Poblenou',
    description:
      '110 m² con entreplantas: integración de materiales industriales originales, nueva distribución en dos niveles y diseño de espacios diáfanos.',
    year: '2024',
    category: 'Reforma integral',
    image: imageSeguimientoObra,
  },
]

const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'La coordinación de la reforma fue impecable. Nuestro interiorista gestionó todos los gremios y el resultado superó con creces nuestras expectativas. El piso del Eixample ha quedado espectacular.',
    client: 'María y Jordi P., reforma integral en Eixample',
  },
  {
    quote:
      'Vivir en una finca regia en Gràcia tiene sus retos, pero nuestra interiorista supo redistribuir el espacio de forma ingeniosa, aprovechando cada metro cuadrado y respetando los elementos originales.',
    client: 'Laura S., diseño de interiores en Gràcia',
  },
  {
    quote:
      'Como expatriados, nos preocupaba gestionar los permisos y coordinar los gremios en Barcelona. Nuestra diseñadora se encargó de todo, desde los planos iniciales hasta la entrega final. Nuestro loft en Poblenou es exactamente lo que soñábamos.',
    client: 'James & Sophie T., reforma de loft en Poblenou',
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
      'Nuestras prestaciones de diseño de interiores se realizan en Barcelona ciudad y en las principales ciudades del área metropolitana. Intervenimos en los principales barrios de Barcelona: Eixample, Gràcia, El Born, Sarrià, Poblenou, Les Corts, Sant Andreu y Sants-Montjuïc. También intervenimos en las ciudades del área metropolitana: Sant Cugat, Sabadell, Castelldefels, Sitges, Badalona, L\'Hospitalet de Llobregat y alrededores. Contacta con nosotros para solicitar un presupuesto gratuito.',
    answer: (
      <>
        <p>
          Nuestras prestaciones de diseño de interiores se realizan en{' '}
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
          Cugat, Sabadell, Castelldefels, Sitges, Badalona, L&apos;Hospitalet
          de Llobregat y alrededores.
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
      '¿Se puede realizar una contravisita con un interiorista antes de comprar?',
    schemaAnswer:
      'Sí, un interiorista puede acompañarte para evaluar el potencial de un inmueble antes de la compra. Te asesora sobre las posibilidades de redistribución, estima el coste aproximado de las obras de reforma y te ayuda a tomar una decisión informada. Es un servicio cada vez más demandado en Barcelona, donde muchos pisos antiguos del Eixample o Gràcia requieren una reforma integral. Solicita una contravisita con uno de nuestros interioristas.',
    answer: (
      <>
        <p>
          Sí, un interiorista puede acompañarte para{' '}
          <strong className="font-semibold text-neutral-950">
            evaluar el potencial de un inmueble antes de la compra
          </strong>
          . Te asesora sobre las posibilidades de redistribución, estima el
          coste aproximado de las obras de reforma y te ayuda a tomar una
          decisión informada.
        </p>
        <p>
          Es un servicio cada vez más demandado en Barcelona, donde muchos pisos
          antiguos del Eixample o Gràcia requieren una reforma integral.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Solicita una contravisita
          </Link>{' '}
          con uno de nuestros interioristas.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Un interiorista puede encargarse de un proyecto de ampliación?',
    schemaAnswer:
      'Sí, un interiorista puede encargarse de proyectos de ampliación de menos de 20 m²: extensiones, sobrelevaciones, modificaciones de fachada o cambios de destino del local. En Barcelona, estos proyectos están sujetos a la normativa urbanística del Plan General Metropolitano (PGM) y pueden requerir licencias específicas del Ayuntamiento. Tu interiorista se encarga de verificar la viabilidad y gestionar los trámites necesarios. Consulta nuestras tarifas de diseño de interiores.',
    answer: (
      <>
        <p>
          Sí, un interiorista puede encargarse de proyectos de ampliación de
          menos de 20&nbsp;m²: extensiones, sobrelevaciones, modificaciones de
          fachada o cambios de destino del local.
        </p>
        <p>
          En Barcelona, estos proyectos están sujetos a la normativa
          urbanística del{' '}
          <strong className="font-semibold text-neutral-950">
            Plan General Metropolitano (PGM)
          </strong>{' '}
          y pueden requerir licencias específicas del Ayuntamiento. Tu
          interiorista se encarga de verificar la viabilidad y gestionar los
          trámites necesarios.
        </p>
        <p>
          Consulta nuestras{' '}
          <Link
            href="/precios/#diseno-interiores"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            tarifas de diseño de interiores
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question:
      'Soy inquilino de mi vivienda, ¿puedo contar con un interiorista?',
    schemaAnswer:
      'Por supuesto. Si eres inquilino, un interiorista puede ayudarte con un servicio de decoración de interiores sin necesidad de realizar obras: selección de colores y pinturas, elección de mobiliario, textiles y luminarias, optimización de la distribución y organización del espacio. Una solución ideal para transformar tu hogar sin obras y sin necesidad de pedir permiso al propietario. Descubre nuestro servicio de decoración de interiores.',
    answer: (
      <>
        <p>
          Por supuesto. Si eres inquilino, un interiorista puede ayudarte con
          un servicio de{' '}
          <strong className="font-semibold text-neutral-950">
            decoración de interiores
          </strong>{' '}
          sin necesidad de realizar obras: selección de colores y pinturas,
          elección de mobiliario, textiles y luminarias, optimización de la
          distribución y organización del espacio.
        </p>
        <p>
          Una solución ideal para transformar tu hogar sin obras y sin
          necesidad de pedir permiso al propietario.
        </p>
        <p>
          Descubre nuestro{' '}
          <Link
            href="/precios/#decoracion-interiores"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            servicio de decoración de interiores
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question:
      'Mi vivienda necesita una renovación energética, ¿un interiorista puede ayudarme?',
    schemaAnswer:
      'Sí, un interiorista puede acompañarte en tu proyecto de renovación energética: mejora del aislamiento térmico (paredes, suelos, techos), sustitución de ventanas, instalación de sistemas de climatización eficientes y optimización de la ventilación. En Barcelona y Cataluña existen ayudas y subvenciones para la rehabilitación energética de viviendas. Tu interiorista te asesora sobre las opciones disponibles y gestiona los aspectos técnicos del proyecto. Solicita asesoramiento sobre renovación energética.',
    answer: (
      <>
        <p>
          Sí, un interiorista puede acompañarte en tu proyecto de{' '}
          <strong className="font-semibold text-neutral-950">
            renovación energética
          </strong>
          : mejora del aislamiento térmico (paredes, suelos, techos),
          sustitución de ventanas, instalación de sistemas de climatización
          eficientes y optimización de la ventilación.
        </p>
        <p>
          En Barcelona y Cataluña existen{' '}
          <strong className="font-semibold text-neutral-950">
            ayudas y subvenciones
          </strong>{' '}
          para la rehabilitación energética de viviendas. Tu interiorista te
          asesora sobre las opciones disponibles y gestiona los aspectos
          técnicos del proyecto.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Solicita asesoramiento
          </Link>{' '}
          sobre renovación energética.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Un interiorista puede encargarse de un local comercial?',
    schemaAnswer:
      'Sí, nuestros interioristas tienen experiencia en el diseño de espacios comerciales: oficinas, boutiques, restaurantes, hoteles y otros locales profesionales. El diseño comercial (retail design) requiere una expertise específica en flujos de circulación, normativa de accesibilidad, imagen de marca y optimización del espacio de venta. Consulta nuestras tarifas de interiorismo comercial.',
    answer: (
      <>
        <p>
          Sí, nuestros interioristas tienen experiencia en el diseño de{' '}
          <strong className="font-semibold text-neutral-950">
            espacios comerciales
          </strong>
          : oficinas, boutiques, restaurantes, hoteles y otros locales
          profesionales.
        </p>
        <p>
          El diseño comercial (retail design) requiere una expertise específica
          en flujos de circulación, normativa de accesibilidad, imagen de marca
          y optimización del espacio de venta.
        </p>
        <p>
          Consulta nuestras{' '}
          <Link
            href="/precios/#interiorismo-comercial"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            tarifas de interiorismo comercial
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
          name: 'Diseño de interiores',
          item: 'https://www.interioristabarcelona.com/diseno-interiores/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.interioristabarcelona.com/diseno-interiores/#service',
      name: 'Diseño de interiores en Barcelona',
      description:
        'Servicio de diseño de interiores en Barcelona: concepción, optimización, reforma parcial o completa de tu interior por diseñadores de interiores titulados.',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      serviceType: 'Diseño de interiores',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '60',
        unitText: 'por m²',
        description: 'Proyecto de interiorismo desde 60 €/m²',
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
        'Colectivo de diseñadores de interiores y arquitectos en Barcelona',
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
        '@id': 'https://www.interioristabarcelona.com/diseno-interiores/#service',
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
  title: 'Diseño de interiores en Barcelona | Diseñador de interiores 2026',
  description:
    '¿Buscas un diseñador de interiores en Barcelona? Nuestros interioristas titulados te acompañan en tu proyecto de diseño de interiores, reforma o reestructuración de tu piso o casa en Barcelona y alrededores.',
}

export default function DisenoInterioresPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Nuestros servicios"
        title="Diseño de interiores en Barcelona"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Transformación estructural de espacios con visión arquitectónica
        </p>
        <p className="mt-6">
          Desde 2006, los interioristas y diseñadores de interiores del colectivo
          te asisten en tu proyecto de diseño de interiores, reforma o reestructuración
          de tu piso o casa en Barcelona y alrededores.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. ¿Por qué contratar un diseñador de interiores en Barcelona? */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué contratar un diseñador de interiores en Barcelona?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          El diseñador de interiores titulado te acompaña en cada etapa de tu proyecto de
          reforma, desde la concepción hasta la entrega de las llaves.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Interlocutor único con seguros profesionales">
            El interiorista titulado que te acompaña es tu único interlocutor y
            dispone de los seguros profesionales requeridos para obras de reforma
            interior.
          </GridListItem>
          <GridListItem title="Anticipación del proyecto">
            Su experiencia te permite anticipar todos los datos de tu proyecto
            antes de iniciar las obras: viabilidad, presupuesto, plazos.
          </GridListItem>
          <GridListItem title="Expertise en materiales y equipamiento">
            Te beneficias de la experiencia del interiorista en la selección de
            materiales, mobiliario y equipamientos para optimizar el potencial de
            tu interior.
          </GridListItem>
          <GridListItem title="Trámites administrativos">
            Identifica las situaciones que requieren permisos administrativos:
            licencias de obra, modificaciones de fachada, análisis del Plan
            General Metropolitano de Barcelona.
          </GridListItem>
          <GridListItem title="Presupuestos justos">
            Te ayuda a obtener presupuestos ajustados de empresas de
            construcción: albañilería, electricidad, fontanería, carpintería,
            pintura...
          </GridListItem>
          <GridListItem title="Red de artesanos de confianza">
            Te pone en contacto con artesanos y profesionales reconocidos por su
            fiabilidad, con los seguros de responsabilidad civil y decenal
            requeridos.
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. Tu colaboración con un diseñador de interiores */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Tu colaboración con un diseñador de interiores"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          El diseñador de interiores te acompaña en la reflexión de tu proyecto de reforma
          en Barcelona y alrededores: desde la escucha de tus deseos
          (presupuesto, estética y estilo de vida) en el marco de un estudio,
          hasta el seguimiento y la coordinación de la obra de reforma.
        </p>
      </SectionIntro>

      {/* 4. Proceso en 3 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Visita consejo con tu diseñador de interiores"
          image={{ src: imageVisitaConsejo }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Desde la primera visita, el diseñador de interiores trabaja contigo en tu
              domicilio en Barcelona. Te escucha para comprender tus necesidades
              y aporta soluciones inmediatas.
            </p>
            <p>
              Comunica los aspectos esenciales del proyecto:{' '}
              <strong className="font-semibold text-neutral-950">
                muros de carga, tabiques, calidad del aislamiento
              </strong>
              , estado de las instalaciones. Informa sobre trámites
              administrativos (acuerdo de comunidad, declaración de obras).
            </p>
            <p>
              Estudia las potencialidades del espacio: iluminación natural,
              optimización, redistribución. Proporciona una{' '}
              <strong className="font-semibold text-neutral-950">
                primera estimación orientativa
              </strong>{' '}
              del presupuesto.
            </p>
            <p>
              Interpreta tus gustos y comparte ideas sobre materiales, colores y
              equipamiento para definir la dirección del proyecto.
            </p>
          </div>
        </Section>

        <Section
          title="Estudio del proyecto de diseño de interiores"
          image={{ src: imageEstudioProyecto, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              El proyecto se desarrolla en dos fases:{' '}
              <strong className="font-semibold text-neutral-950">
                Anteproyecto Básico (APB)
              </strong>{' '}
              y{' '}
              <strong className="font-semibold text-neutral-950">
                Anteproyecto Definitivo (APD)
              </strong>
              , con propuestas de distribución mediante bocetos y dibujos.
            </p>
            <p>
              Descriptivo técnico completo: planos acotados, secciones, alzados
              y plano eléctrico para definir con precisión todos los aspectos
              técnicos de tu reforma.
            </p>
            <p>
              Selección y referencia de materiales: pavimentos, alicatados,
              sanitarios, grifería y todos los acabados de tu proyecto.
            </p>
            <p>
              Estimación orientativa del{' '}
              <strong className="font-semibold text-neutral-950">
                coste de las obras
              </strong>{' '}
              para que puedas tomar decisiones informadas antes de iniciar la
              reforma.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Planos técnicos">
              Planos acotados, secciones, alzados y plano eléctrico.
            </ListItem>
            <ListItem title="Materiales">
              Pavimentos, alicatados, sanitarios, grifería y acabados.
            </ListItem>
            <ListItem title="Presupuesto">
              Estimación orientativa del coste de las obras.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Seguimiento de obra y coordinación de gremios"
          image={{ src: imageSeguimientoObra, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Consulta a artesanos y empresas constructoras seleccionadas por su
              fiabilidad y calidad de trabajo.
            </p>
            <p>
              Seguimiento de la obra y{' '}
              <strong className="font-semibold text-neutral-950">
                coordinación de todos los actores
              </strong>
              : constructora, carpintero, fontanero, albañil, pintor, etc.
              Control del avance, plazos y decisiones de interiorismo.
            </p>
            <p>
              Reuniones periódicas para informar sobre el avance del proyecto y
              tomar las decisiones necesarias en cada fase.
            </p>
            <p>
              Selección de{' '}
              <strong className="font-semibold text-neutral-950">
                mobiliario y decoración
              </strong>{' '}
              con descuentos profesionales. Participación en la colocación del
              mobiliario tras la mudanza.
            </p>
          </div>
        </Section>
      </div>

      {/* 5. Tarifas */}
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <PricingBlock
          id="tarifas-diseno-interiores"
          name="Tarifas de diseño de interiores"
          description="Servicio integral de diseño de interiores para viviendas en Barcelona. Desde la primera consulta gratuita hasta el seguimiento de obra, te acompañamos en cada etapa de tu proyecto."
          href="/contacto/"
          ctaLabel="Solicitar presupuesto gratuito"
          image={{ src: imageSalonContemporaneo, shape: 0 }}
          showCounter={false}
          tiers={[
            {
              name: 'Consulta inicial',
              price: 'Gratuita',
              description:
                'Primera visita a tu domicilio para evaluar el espacio, entender tus necesidades y definir el alcance del proyecto.',
            },
            {
              name: 'Proyecto de diseño de interiores',
              price: 'Desde 60 €/m²',
              description:
                'Proyecto completo: planos, 3D, selección de materiales y mobiliario. ≤40 m²: 80 €/m² · 41-80 m²: 70 €/m² · 81-120 m²: 65 €/m² · ≥121 m²: 60 €/m².',
              highlighted: true,
            },
            {
              name: 'Seguimiento de obra',
              price: '8 % del presupuesto',
              description:
                'Coordinación con los gremios, visitas regulares a la obra y control de calidad hasta la entrega final.',
            },
          ]}
        />
      </div>

      {/* 6. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre diseño de interiores en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre nuestros servicios de
          diseño de interiores.
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
      <ProjectShowcase
        title="Proyectos de diseño de interiores en Barcelona"
        subtitle="Descubre algunos proyectos de diseño de interiores realizados por los miembros del colectivo."
        projects={serviceProjects}
      />

      {/* 9. Testimonios */}
      <TestimonialSlider
        className="mt-24 sm:mt-32 lg:mt-40"
        testimonials={serviceTestimonials}
      />
    </RootLayout>
  )
}
