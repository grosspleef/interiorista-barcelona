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
    title: 'Restaurante gastronómico en el Born',
    description:
      '180 m² en local con bóvedas de piedra: diseño de barra abierta a cocina, iluminación ambiental, mobiliario a medida y tramitación de licencia de actividad incluida.',
    year: '2025',
    category: 'Restauración',
    image: imageLaptop,
  },
  {
    title: 'Boutique hotel 12 habitaciones en Eixample',
    description:
      '420 m² en edificio modernista: rehabilitación de elementos catalogados, diseño de habitaciones con identidad propia, zonas comunes y cumplimiento normativo hotelero.',
    year: '2024',
    category: 'Hostelería',
    image: imageMeeting,
  },
  {
    title: 'Flagship store en Passeig de Gràcia',
    description:
      '95 m² de retail de alta gama: diseño de escaparate, circuito de cliente optimizado, iluminación comercial y mobiliario expositivo a medida.',
    year: '2024',
    category: 'Retail',
    image: imageWhiteboard,
  },
]

const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'La gestión de las licencias y la coordinación de los gremios fue impecable. Nuestro interiorista entendió la esencia del restaurante desde el primer día y el resultado ha superado todas nuestras expectativas. El local del Born tiene ahora una identidad única.',
    client: 'Carlos y Marina R., restaurante en el Born',
  },
  {
    quote:
      'Buscábamos un diseño que reflejara nuestra marca y a la vez funcionara como espacio de venta. El diseño del escaparate y el circuito de cliente han aumentado nuestras ventas un 30 % desde la reapertura.',
    client: 'Lucía M., tienda de moda en Gràcia',
  },
  {
    quote:
      'Como extranjeros abriendo una cafetería en Poblenou, no teníamos ni idea sobre la licencia de actividad ni la normativa local. Nuestra diseñadora gestionó todos los permisos, coordinó todos los gremios y nos entregó un espacio que cumple tanto con los estándares de Barcelona como con las expectativas internacionales. Totalmente recomendable.',
    client: 'David & Emma K., cafetería en Poblenou',
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
    question: '¿Qué tipos de locales comerciales diseñáis?',
    schemaAnswer:
      'Diseñamos todo tipo de espacios comerciales: restaurantes, bares y cafeterías, hoteles y alojamientos turísticos, tiendas y boutiques, clínicas y centros de estética, gimnasios y centros deportivos, franquicias y cadenas. Cada proyecto se adapta a la identidad de marca, al público objetivo y a la normativa aplicable en Barcelona.',
    answer: (
      <>
        <p>
          Diseñamos todo tipo de{' '}
          <strong className="font-semibold text-neutral-950">
            espacios comerciales
          </strong>
          : restaurantes, bares y cafeterías, hoteles y alojamientos turísticos,
          tiendas y boutiques, clínicas y centros de estética, gimnasios y
          centros deportivos, franquicias y cadenas.
        </p>
        <p>
          Cada proyecto se adapta a la identidad de marca, al público objetivo y
          a la normativa aplicable en Barcelona.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Qué licencias necesito para abrir o reformar un local en Barcelona?',
    schemaAnswer:
      'Para abrir o reformar un local comercial en Barcelona necesitas varias licencias: licencia de actividad (o comunicación previa según el tipo de actividad), licencia de obras (mayores o menores según el alcance de la reforma), informe de compatibilidad urbanística para verificar que la actividad está permitida en esa ubicación, y cumplimiento del CTE (Código Técnico de la Edificación) en materia de seguridad contra incendios (DB-SI) y accesibilidad (DB-SUA). Nuestro equipo gestiona toda la documentación y tramitación ante el Ayuntamiento de Barcelona.',
    answer: (
      <>
        <p>
          Para abrir o reformar un local comercial en Barcelona necesitas varias
          licencias:
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Licencia de actividad
          </strong>{' '}
          (o comunicación previa según el tipo de actividad),{' '}
          <strong className="font-semibold text-neutral-950">
            licencia de obras
          </strong>{' '}
          (mayores o menores según el alcance de la reforma), informe de{' '}
          <strong className="font-semibold text-neutral-950">
            compatibilidad urbanística
          </strong>{' '}
          para verificar que la actividad está permitida en esa ubicación, y
          cumplimiento del CTE (Código Técnico de la Edificación) en materia de
          seguridad contra incendios (DB-SI) y accesibilidad (DB-SUA).
        </p>
        <p>
          Nuestro equipo gestiona toda la documentación y tramitación ante el
          Ayuntamiento de Barcelona.
        </p>
      </>
    ),
  },
  {
    question: '¿En qué zonas de Barcelona trabajáis?',
    schemaAnswer:
      "Trabajamos en toda Barcelona y área metropolitana. Tenemos especial experiencia en las zonas con mayor actividad comercial: Eixample, El Born y Ciutat Vella, Gràcia, Poblenou y el distrito 22@, Diagonal y Les Corts. También realizamos proyectos en el área metropolitana: Sant Cugat, L'Hospitalet, Badalona, Castelldefels y alrededores. Contacta con nosotros para consultar disponibilidad en tu zona.",
    answer: (
      <>
        <p>
          Trabajamos en{' '}
          <strong className="font-semibold text-neutral-950">
            toda Barcelona y área metropolitana
          </strong>
          . Tenemos especial experiencia en las zonas con mayor actividad
          comercial: Eixample, El Born y Ciutat Vella, Gràcia, Poblenou y el
          distrito 22@, Diagonal y Les Corts.
        </p>
        <p>
          También realizamos proyectos en el área metropolitana: Sant Cugat,
          L&apos;Hospitalet, Badalona, Castelldefels y alrededores.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Contacta con nosotros
          </Link>{' '}
          para consultar disponibilidad en tu zona.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Cuánto tiempo se tarda en diseñar y ejecutar un proyecto comercial?',
    schemaAnswer:
      'Los plazos dependen del tamaño y complejidad del proyecto: la fase de diseño suele durar entre 4 y 8 semanas, la tramitación de licencias entre 1 y 3 meses (según el tipo de licencia y el distrito), y la ejecución de obra entre 2 y 5 meses. En total, un proyecto comercial completo se desarrolla en un plazo de 4 a 8 meses desde el primer briefing hasta la apertura.',
    answer: (
      <>
        <p>Los plazos dependen del tamaño y complejidad del proyecto:</p>
        <p>
          La fase de{' '}
          <strong className="font-semibold text-neutral-950">diseño</strong>{' '}
          suele durar entre 4 y 8 semanas, la tramitación de{' '}
          <strong className="font-semibold text-neutral-950">licencias</strong>{' '}
          entre 1 y 3 meses (según el tipo de licencia y el distrito), y la{' '}
          <strong className="font-semibold text-neutral-950">
            ejecución de obra
          </strong>{' '}
          entre 2 y 5 meses.
        </p>
        <p>
          En total, un proyecto comercial completo se desarrolla en un plazo de{' '}
          <strong className="font-semibold text-neutral-950">
            4 a 8 meses
          </strong>{' '}
          desde el primer briefing hasta la apertura.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Cuál es la diferencia entre interiorismo comercial y residencial?',
    schemaAnswer:
      'El interiorismo comercial y el residencial comparten principios de diseño, pero difieren en varios aspectos clave: la normativa es más exigente en locales comerciales (licencia de actividad, CTE DB-SI contra incendios, DB-SUA accesibilidad, normativa de sanidad para restauración), el diseño está orientado al negocio (flujos de cliente, experiencia de compra, identidad de marca, conversión), y los materiales deben soportar un uso intensivo (pavimentos de alto tránsito, revestimientos resistentes, mobiliario comercial). Si buscas un servicio de interiorismo residencial, consulta nuestra página de arquitectura de interiores.',
    answer: (
      <>
        <p>
          El interiorismo comercial y el residencial comparten principios de
          diseño, pero difieren en varios aspectos clave:
        </p>
        <p>
          La{' '}
          <strong className="font-semibold text-neutral-950">normativa</strong>{' '}
          es más exigente en locales comerciales (licencia de actividad, CTE
          DB-SI contra incendios, DB-SUA accesibilidad, normativa de sanidad
          para restauración). El{' '}
          <strong className="font-semibold text-neutral-950">diseño</strong>{' '}
          está orientado al negocio (flujos de cliente, experiencia de compra,
          identidad de marca, conversión). Y los{' '}
          <strong className="font-semibold text-neutral-950">materiales</strong>{' '}
          deben soportar un uso intensivo (pavimentos de alto tránsito,
          revestimientos resistentes, mobiliario comercial).
        </p>
        <p>
          Si buscas un servicio de interiorismo residencial, consulta nuestra
          página de{' '}
          <Link
            href="/diseno-interiores/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            diseño de interiores
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: '¿Podéis diseñar un local de franquicia?',
    schemaAnswer:
      'Sí, tenemos experiencia en el diseño de locales de franquicia. Trabajamos respetando los libros de marca y las directrices corporativas de cada enseña, adaptando el diseño al espacio concreto y a la normativa local de Barcelona. Nos encargamos de la interpretación del manual de franquicia, la adaptación al local específico, la tramitación de licencias ante el Ayuntamiento y la coordinación de obra hasta la apertura. Contacta con nosotros para estudiar tu proyecto de franquicia.',
    answer: (
      <>
        <p>
          Sí, tenemos experiencia en el{' '}
          <strong className="font-semibold text-neutral-950">
            diseño de locales de franquicia
          </strong>
          . Trabajamos respetando los libros de marca y las directrices
          corporativas de cada enseña, adaptando el diseño al espacio concreto y
          a la normativa local de Barcelona.
        </p>
        <p>
          Nos encargamos de la interpretación del manual de franquicia, la
          adaptación al local específico, la tramitación de licencias ante el
          Ayuntamiento y la coordinación de obra hasta la apertura.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Contacta con nosotros
          </Link>{' '}
          para estudiar tu proyecto de franquicia.
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
          name: 'Interiorismo comercial',
          item: 'https://www.interioristabarcelona.com/interiorismo-comercial/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id':
        'https://www.interioristabarcelona.com/interiorismo-comercial/#service',
      name: 'Interiorismo comercial en Barcelona',
      description:
        'Servicio de interiorismo comercial en Barcelona: diseño de restaurantes, hoteles, tiendas y locales comerciales. Proyecto integral, gestión de licencias y dirección de obra.',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      serviceType: 'Interiorismo comercial',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '70',
        unitText: 'por m²',
        description: 'Proyecto de interiorismo comercial desde 70 €/m²',
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
          'https://www.interioristabarcelona.com/interiorismo-comercial/#service',
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
  title: 'Interiorismo comercial en Barcelona | Diseño de locales 2026',
  description:
    '¿Buscas un interiorista comercial en Barcelona? Diseño de restaurantes, hoteles, tiendas y locales comerciales. Proyecto integral desde 70 €/m². Gestión de licencias incluida.',
}

export default function InteriorismoComercialPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Nuestros servicios"
        title="Interiorismo comercial en Barcelona"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Diseño de restaurantes, hoteles y locales comerciales
        </p>
        <p className="mt-6">
          Los interioristas del colectivo diseñan espacios comerciales que
          reflejan la identidad de tu marca y optimizan la experiencia de tus
          clientes. Desde el concepto creativo hasta la apertura: proyecto
          integral, gestión de licencias ante el Ayuntamiento de Barcelona y
          dirección de obra.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. ¿Por qué contratar un interiorista comercial en Barcelona? */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué contratar un interiorista comercial en Barcelona?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Un interiorista especializado en espacios comerciales aporta visión
          estratégica de negocio, conocimiento normativo y experiencia en
          materiales de uso intensivo.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Diseño alineado con tu marca">
            Tu identidad visual traducida al espacio: colores corporativos,
            materiales y atmósfera que refuerzan el posicionamiento de tu marca
            y conectan con tu público objetivo.
          </GridListItem>
          <GridListItem title="Optimización de flujos de cliente">
            Diseño estratégico de la circulación, la experiencia de compra y los
            puntos de contacto para maximizar la conversión y el tiempo de
            permanencia en el local.
          </GridListItem>
          <GridListItem title="Gestión integral de licencias">
            Tramitación de licencia de actividad, licencia de obras, proyecto
            contra incendios y certificado de accesibilidad ante el Ayuntamiento
            de Barcelona.
          </GridListItem>
          <GridListItem title="Materiales de uso intensivo">
            Selección de pavimentos de alto tránsito, revestimientos
            resistentes, mobiliario comercial y acabados pensados para soportar
            el uso diario de un espacio abierto al público.
          </GridListItem>
          <GridListItem title="Cumplimiento normativo completo">
            Garantía de cumplimiento del CTE DB-SI (seguridad contra incendios),
            DB-SUA (accesibilidad) y ordenanzas municipales de Barcelona
            aplicables a tu actividad.
          </GridListItem>
          <GridListItem title="Control de plazos y presupuesto">
            Planificación detallada del calendario de obra para que tu local
            abra en la fecha prevista, con control de costes en cada fase del
            proyecto.
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. Tu colaboración con un interiorista comercial */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Tu colaboración con un interiorista comercial"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          El interiorista comercial te acompaña desde la primera visita al local
          hasta la inauguración: briefing de marca, diseño del concepto,
          tramitación de licencias y coordinación de obra.
        </p>
      </SectionIntro>

      {/* 4. Proceso en 3 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Visita al local y briefing comercial"
          image={{ src: imageWhiteboard }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Desde la primera visita, el interiorista analiza el local in situ:
              dimensiones, estado de las instalaciones, accesos, fachada y
              entorno comercial.
            </p>
            <p>
              Realizamos un{' '}
              <strong className="font-semibold text-neutral-950">
                briefing de marca y público objetivo
              </strong>
              : identidad visual, posicionamiento, tipo de clientela y
              experiencia deseada en el espacio.
            </p>
            <p>
              Evaluación normativa preliminar:{' '}
              <strong className="font-semibold text-neutral-950">
                compatibilidad urbanística
              </strong>
              , viabilidad de la licencia de actividad y requisitos específicos
              según el tipo de negocio.
            </p>
            <p>
              Proporcionamos una primera estimación orientativa del presupuesto
              y los plazos del proyecto.
            </p>
          </div>
        </Section>

        <Section
          title="Diseño del proyecto comercial"
          image={{ src: imageLaptop, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Desarrollo del{' '}
              <strong className="font-semibold text-neutral-950">
                concepto creativo
              </strong>{' '}
              alineado con la identidad de marca: distribución, materiales,
              iluminación, mobiliario y señalética.
            </p>
            <p>
              Elaboración de planos técnicos, secciones, alzados, renders 3D y
              selección de materiales comerciales resistentes al uso intensivo.
            </p>
            <p>
              Preparación de toda la{' '}
              <strong className="font-semibold text-neutral-950">
                documentación para licencias
              </strong>
              : proyecto de actividad, proyecto contra incendios, estudio de
              accesibilidad y memoria técnica para el Ayuntamiento de Barcelona.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Planos y 3D">
              Planos técnicos acotados, secciones, alzados y renders 3D
              fotorrealistas.
            </ListItem>
            <ListItem title="Documentación técnica">
              Proyecto de actividad, contra incendios (DB-SI) y accesibilidad
              (DB-SUA).
            </ListItem>
            <ListItem title="Presupuesto detallado">
              Mediciones, partidas desglosadas y presupuesto de ejecución
              material.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Dirección de obra y apertura"
          image={{ src: imageMeeting, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Contratación y coordinación de{' '}
              <strong className="font-semibold text-neutral-950">
                gremios especializados
              </strong>{' '}
              en obra comercial: albañilería, instalaciones, carpintería,
              cristalería, rotulación y pintura.
            </p>
            <p>
              <strong className="font-semibold text-neutral-950">
                Dirección de obra
              </strong>{' '}
              con visitas periódicas, control de calidad, plazos y presupuesto.
              Resolución de imprevistos y toma de decisiones en tiempo real.
            </p>
            <p>
              Tramitación hasta la obtención del{' '}
              <strong className="font-semibold text-neutral-950">
                certificado de actividad
              </strong>{' '}
              y el acta de puesta en marcha ante el Ayuntamiento de Barcelona.
            </p>
            <p>
              Styling final del espacio, colocación de mobiliario y elementos
              decorativos para la inauguración.
            </p>
          </div>
        </Section>
      </div>

      {/* 5. Tarifas */}
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <PricingBlock
          id="tarifas-interiorismo-comercial"
          name="Tarifas de interiorismo comercial"
          description="Servicio integral de interiorismo comercial en Barcelona. Desde la consulta inicial gratuita hasta la dirección de obra y apertura del local."
          href="/contacto/"
          ctaLabel="Solicitar presupuesto gratuito"
          image={{ src: imageWhiteboard, shape: 0 }}
          showCounter={false}
          tiers={[
            {
              name: 'Consulta inicial',
              price: 'Gratuita',
              description:
                'Análisis del local, briefing de marca y primeras propuestas conceptuales para tu espacio comercial.',
            },
            {
              name: 'Proyecto comercial',
              price: 'Desde 70 €/m²',
              description:
                'Proyecto integral: concepto, planos, 3D, selección de materiales y mobiliario comercial. ≤40 m²: 90 €/m² · 41-80 m²: 80 €/m² · 81-120 m²: 75 €/m² · ≥121 m²: 70 €/m².',
              highlighted: true,
            },
            {
              name: 'Dirección de obra',
              price: '9 % del presupuesto',
              description:
                'Coordinación de la ejecución, control de plazos y calidad hasta la apertura del local.',
            },
          ]}
        />
      </div>

      {/* 6. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre interiorismo comercial en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre nuestros servicios de
          interiorismo comercial.
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
        title="Proyectos de interiorismo comercial en Barcelona"
        subtitle="Descubre algunos proyectos de interiorismo comercial realizados por los miembros del colectivo."
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
