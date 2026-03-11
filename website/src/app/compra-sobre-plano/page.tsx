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
import imageRevisionPlanos from '@/images/revision-planos-obra-nueva-diagonal-mar-barcelona.jpg'
import imageSeleccionAcabados from '@/images/seleccion-acabados-obra-nueva-barcelona.jpg'
import imageInspeccionEntrega from '@/images/inspeccion-pre-entrega-obra-nueva-poblenou-barcelona.jpg'
import imagePisoObraNueva from '@/images/piso-obra-nueva-personalizado-eixample-barcelona.jpg'
import { LatestProjects } from '@/components/LatestProjects'
import {
  TestimonialSlider,
  type TestimonialItem,
} from '@/components/TestimonialSlider'
import { FAQAccordion } from './faq-accordion'

const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'Gracias al interiorista pudimos personalizar completamente nuestra cocina y los baños antes de la entrega. Nos ahorramos una reforma posterior y el resultado es exactamente lo que queríamos para nuestro piso en Diagonal Mar.',
    client: 'Laura y Jordi M., compra sobre plano en Diagonal Mar',
  },
  {
    quote:
      'La promotora aceptó todas las modificaciones que propuso nuestro interiorista porque estaban perfectamente documentadas y eran técnicamente viables. Sin su ayuda, nunca habríamos sabido qué cambios pedir ni cómo negociarlos.',
    client: 'Ana R., compra sobre plano en Poblenou',
  },
  {
    quote:
      'Como expatriado comprando sobre plano en Barcelona, todo el proceso resultaba abrumador. Nuestra interiorista nos guio en cada paso, desde la revisión de los planos hasta la selección de acabados y la inspección previa a la entrega. Totalmente recomendable.',
    client: 'James W., compra sobre plano en Poblenou',
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
    question:
      '¿Dónde realizáis el acompañamiento en compra sobre plano?',
    schemaAnswer:
      'Realizamos el acompañamiento en compra sobre plano en toda Barcelona ciudad y área metropolitana. Intervenimos en promociones de obra nueva en los principales barrios: Eixample, Gràcia, El Born, Sarrià, Poblenou, Les Corts, Sant Andreu y Sants-Montjuïc. También cubrimos Sant Cugat, Sabadell, Castelldefels, Sitges, Badalona, L\'Hospitalet de Llobregat y alrededores. Contacta con nosotros para solicitar un presupuesto.',
    answer: (
      <>
        <p>
          Realizamos el acompañamiento en compra sobre plano en toda{' '}
          <strong className="font-semibold text-neutral-950">
            Barcelona ciudad
          </strong>{' '}
          y área metropolitana.
        </p>
        <p>
          Intervenimos en promociones de obra nueva en los principales
          barrios: Eixample, Gràcia, El Born, Sarrià, Poblenou, Les Corts,
          Sant Andreu y Sants-Montjuïc.
        </p>
        <p>
          También cubrimos Sant Cugat, Sabadell, Castelldefels, Sitges,
          Badalona, L&apos;Hospitalet de Llobregat y alrededores.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Contacta con nosotros
          </Link>{' '}
          para solicitar un presupuesto.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Qué modificaciones se pueden pedir a la promotora?',
    schemaAnswer:
      'Las modificaciones más habituales incluyen: redistribución de tabiques interiores, cambio de pavimentos y revestimientos, modificación del diseño de la cocina o baños, añadir o mover tomas eléctricas, y selección de carpintería interior. Todas las modificaciones deben respetar el Código Técnico de Edificación (CTE) y la normativa de accesibilidad vigente. Tu interiorista prepara un dossier técnico para maximizar las posibilidades de aprobación por parte de la promotora.',
    answer: (
      <>
        <p>
          Las modificaciones más habituales incluyen:{' '}
          <strong className="font-semibold text-neutral-950">
            redistribución de tabiques
          </strong>{' '}
          interiores, cambio de pavimentos y revestimientos, modificación del
          diseño de la cocina o baños, añadir o mover tomas eléctricas, y
          selección de carpintería interior.
        </p>
        <p>
          Todas las modificaciones deben respetar el{' '}
          <strong className="font-semibold text-neutral-950">
            Código Técnico de Edificación (CTE)
          </strong>{' '}
          y la normativa de accesibilidad vigente.
        </p>
        <p>
          Tu interiorista prepara un dossier técnico para maximizar las
          posibilidades de aprobación por parte de la promotora.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Cuándo hay que solicitar las modificaciones al promotor?',
    schemaAnswer:
      'Lo ideal es solicitar las modificaciones lo antes posible tras la firma del contrato de arras. Cuanto más avance la obra, más limitadas serán las opciones de personalización. En las fases iniciales se pueden modificar tabiques, instalaciones y acabados; en fases avanzadas solo acabados superficiales. Contacta con nosotros para evaluar las opciones disponibles según el estado de tu promoción.',
    answer: (
      <>
        <p>
          Lo ideal es solicitar las modificaciones{' '}
          <strong className="font-semibold text-neutral-950">
            lo antes posible tras la firma del contrato de arras
          </strong>
          . Cuanto más avance la obra, más limitadas serán las opciones de
          personalización.
        </p>
        <p>
          En las fases iniciales se pueden modificar tabiques, instalaciones
          y acabados; en fases avanzadas solo acabados superficiales.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Contacta con nosotros
          </Link>{' '}
          para evaluar las opciones disponibles según el estado de tu
          promoción.
        </p>
      </>
    ),
  },
  {
    question:
      '¿La promotora puede rechazar las modificaciones solicitadas?',
    schemaAnswer:
      'Sí, la promotora puede rechazar modificaciones que no respeten el Código Técnico de Edificación (CTE), las normas de accesibilidad o la estructura del edificio. También puede rechazarlas si la obra está demasiado avanzada. Por eso es fundamental contar con un interiorista que prepare un dossier técnico sólido y viable, maximizando las posibilidades de aceptación.',
    answer: (
      <>
        <p>
          Sí, la promotora puede rechazar modificaciones que no respeten el{' '}
          <strong className="font-semibold text-neutral-950">
            Código Técnico de Edificación (CTE)
          </strong>
          , las normas de accesibilidad o la estructura del edificio. También
          puede rechazarlas si la obra está demasiado avanzada.
        </p>
        <p>
          Por eso es fundamental contar con un interiorista que prepare un{' '}
          <strong className="font-semibold text-neutral-950">
            dossier técnico sólido y viable
          </strong>
          , maximizando las posibilidades de aceptación.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué incluye la inspección pre-entrega?',
    schemaAnswer:
      'La inspección pre-entrega incluye la verificación de todos los acabados (pavimentos, revestimientos, pintura, carpintería), las instalaciones (electricidad, fontanería, calefacción), las menuiserías (ventanas, puertas), los puntos de luz, y la conformidad general con el contrato firmado y el Libro del Edificio. Se redacta un acta de reservas con los defectos detectados para que la promotora los subsane antes de la firma de la escritura.',
    answer: (
      <>
        <p>
          La inspección pre-entrega incluye la verificación de todos los{' '}
          <strong className="font-semibold text-neutral-950">
            acabados
          </strong>{' '}
          (pavimentos, revestimientos, pintura, carpintería), las{' '}
          <strong className="font-semibold text-neutral-950">
            instalaciones
          </strong>{' '}
          (electricidad, fontanería, calefacción), las carpinterías
          exteriores (ventanas, puertas), y los puntos de luz.
        </p>
        <p>
          Se verifica la conformidad general con el contrato firmado y el{' '}
          <strong className="font-semibold text-neutral-950">
            Libro del Edificio
          </strong>
          .
        </p>
        <p>
          Se redacta un{' '}
          <strong className="font-semibold text-neutral-950">
            acta de reservas
          </strong>{' '}
          con los defectos detectados para que la promotora los subsane antes
          de la firma de la escritura.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Puedo personalizar una vivienda comprada sobre plano si ya está avanzada la obra?',
    schemaAnswer:
      'Sí, ciertas modificaciones son posibles incluso en fases avanzadas de la construcción: selección de pintura, cambio de pavimentos superficiales, elección de luminarias y pequeños ajustes en la carpintería. Para redistribuciones o cambios de instalaciones, es necesario intervenir en fases tempranas. Si la obra ya está finalizada, consulta nuestro servicio de decoración de interiores para amueblar y personalizar tu nueva vivienda.',
    answer: (
      <>
        <p>
          Sí, ciertas modificaciones son posibles incluso en fases avanzadas
          de la construcción:{' '}
          <strong className="font-semibold text-neutral-950">
            pintura, pavimentos superficiales, luminarias
          </strong>{' '}
          y pequeños ajustes en la carpintería.
        </p>
        <p>
          Para redistribuciones o cambios de instalaciones, es necesario
          intervenir en fases tempranas.
        </p>
        <p>
          Si la obra ya está finalizada, consulta nuestro servicio de{' '}
          <Link
            href="/decoracion-interiores/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            decoración de interiores
          </Link>{' '}
          para amueblar y personalizar tu nueva vivienda.
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
          name: 'Compra sobre plano',
          item: 'https://www.interioristabarcelona.com/compra-sobre-plano/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id':
        'https://www.interioristabarcelona.com/compra-sobre-plano/#service',
      name: 'Compra sobre plano en Barcelona',
      description:
        'Servicio de acompañamiento en la compra sobre plano en Barcelona: revisión de planos, personalización de acabados, seguimiento de obra y verificación de entrega de viviendas de obra nueva.',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      serviceType: 'Compra sobre plano',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '200',
        unitText: 'por servicio',
        description: 'Asesoramiento de compra sobre plano desde 200 €',
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
          'https://www.interioristabarcelona.com/compra-sobre-plano/#service',
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
  title:
    'Compra sobre plano en Barcelona | Obra nueva personalización 2026',
  description:
    '¿Vas a comprar piso sobre plano en Barcelona? Un interiorista te acompaña: revisión de planos, personalización de acabados y seguimiento de obra. Desde 200 €.',
  alternates: {
    canonical: '/compra-sobre-plano/',
  },
}

export default function CompraSobrePlanoPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Nuestros servicios"
        title="Compra sobre plano en Barcelona"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Personalización y optimización de tu vivienda de obra nueva
        </p>
        <p className="mt-6">
          ¿Vas a comprar piso sobre plano en Barcelona? Nuestros interioristas
          te acompañan en todo el proceso: revisión de los planos del
          promotor, personalización de acabados, seguimiento de la
          construcción y verificación de la entrega. Un servicio esencial
          para quienes desean una vivienda de obra nueva a medida sin pasar
          por una reforma posterior.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. Ventajas */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué contar con un interiorista para tu compra sobre plano en Barcelona?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Un interiorista aporta una visión técnica y estética que te permite
          aprovechar al máximo las opciones de personalización que ofrece la
          promotora, evitando reformas costosas tras la entrega.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Revisión profesional de los planos">
            Análisis de la distribución propuesta por la promotora, detección
            de incoherencias y oportunidades de mejora antes de que la obra
            avance.
          </GridListItem>
          <GridListItem title="Personalización de acabados">
            Asesoramiento en la selección de materiales, pavimentos,
            revestimientos y carpintería interior para que cada detalle
            refleje tu estilo.
          </GridListItem>
          <GridListItem title="Optimización de la distribución">
            Propuestas de modificaciones al promotor para adaptar la vivienda
            a tu estilo de vida: abrir cocina, añadir un vestidor, redistribuir
            los baños.
          </GridListItem>
          <GridListItem title="Interlocutor técnico con la promotora">
            Tu interiorista dialoga directamente con el equipo técnico de la
            promotora para asegurar la viabilidad de tus peticiones y
            documentarlas correctamente.
          </GridListItem>
          <GridListItem title="Control de calidad en la entrega">
            Inspección profesional del piso antes de firmar el acta de
            entrega para detectar defectos, acabados incorrectos o
            instalaciones deficientes.
          </GridListItem>
          <GridListItem title="Ahorro de tiempo y costes">
            Evita reformas innecesarias tras la entrega personalizando tu
            vivienda durante la fase de construcción, cuando los cambios son
            más sencillos y económicos.
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. Colaboración */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Tu acompañamiento en la compra de obra nueva"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          El interiorista te acompaña durante todo el proceso de compra sobre
          plano: desde la revisión inicial de los planos hasta la inspección
          de la entrega. Si necesitas una reforma integral posterior o deseas
          amueblar tu nueva vivienda, tu interiorista puede encargarse
          directamente del proyecto de{' '}
          <Link
            href="/diseno-interiores/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            diseño de interiores
          </Link>{' '}
          o de la{' '}
          <Link
            href="/decoracion-interiores/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            decoración de interiores
          </Link>{' '}
          de tu nuevo hogar.
        </p>
      </SectionIntro>

      {/* 4. Proceso en 3 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Asesoramiento inicial y revisión de planos"
          image={{ src: imageRevisionPlanos }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Reunión con el cliente para comprender sus{' '}
              <strong className="font-semibold text-neutral-950">
                necesidades, estilo de vida y presupuesto
              </strong>
              . Es el punto de partida para orientar todas las decisiones de
              personalización.
            </p>
            <p>
              Revisión detallada de los planos del promotor:{' '}
              <strong className="font-semibold text-neutral-950">
                distribución, luminosidad, orientación
              </strong>{' '}
              y posibilidades de modificación según la fase de obra.
            </p>
            <p>
              Identificación de las modificaciones viables a solicitar al
              promotor y primera estimación orientativa del coste de las
              personalizaciones.
            </p>
          </div>
        </Section>

        <Section
          title="Estudio de personalización y selección de acabados"
          image={{ src: imageSeleccionAcabados, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Elaboración de{' '}
              <strong className="font-semibold text-neutral-950">
                planos optimizados
              </strong>{' '}
              con propuestas de redistribución adaptadas a las posibilidades
              que acepta la promotora.
            </p>
            <p>
              Selección de acabados:{' '}
              <strong className="font-semibold text-neutral-950">
                pavimentos, revestimientos, pintura y carpintería
              </strong>{' '}
              interior. Acompañamiento en las visitas al showroom del promotor
              o de proveedores externos.
            </p>
            <p>
              Visualizaciones 3D para proyectarte en tu futura cocina y
              baños personalizados. Estimación del coste de eventuales
              trabajos complementarios post-entrega.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Distribución optimizada">
              Planos con propuestas de redistribución adaptadas a tu estilo
              de vida.
            </ListItem>
            <ListItem title="Acabados personalizados">
              Selección de materiales y acabados en coherencia con tu
              presupuesto.
            </ListItem>
            <ListItem title="Visualización 3D">
              Renders de cocina y baños para validar tus elecciones antes de
              la ejecución.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Seguimiento de obra y verificación de entrega"
          image={{ src: imageInspeccionEntrega, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Visitas de obra periódicas para{' '}
              <strong className="font-semibold text-neutral-950">
                controlar el avance de la construcción
              </strong>{' '}
              y verificar que se ejecutan las personalizaciones solicitadas.
            </p>
            <p>
              Verificación de la conformidad de los acabados elegidos con lo
              especificado en el contrato y en las fichas técnicas de la
              promotora.
            </p>
            <p>
              <strong className="font-semibold text-neutral-950">
                Inspección pre-entrega
              </strong>{' '}
              completa para detectar defectos antes de firmar el acta de
              entrega. Coordinación con el promotor para la resolución de las
              reservas documentadas en el acta.
            </p>
            <p>
              Una vez recibida la vivienda, consulta nuestro servicio de{' '}
              <Link
                href="/decoracion-interiores/"
                className="font-semibold text-neutral-950 underline hover:text-neutral-700"
              >
                decoración de interiores
              </Link>{' '}
              para amueblar y ambientar tu nuevo hogar.
            </p>
          </div>
        </Section>

      {/* 5. Tarifas */}
      <PricingBlock
        id="tarifas-compra-sobre-plano"
        name="Tarifas de compra sobre plano"
        description="Servicio de acompañamiento en la compra sobre plano en Barcelona. Te asesoramos en la personalización de tu vivienda de obra nueva, desde la revisión de planos hasta la inspección de la entrega."
        href="/contacto/"
        ctaLabel="Solicitar presupuesto gratuito"
        image={{ src: imagePisoObraNueva, shape: 0 }}
        showCounter={false}
        tiers={[
          {
            name: 'Asesoramiento de compra',
            price: 'Desde 200 €',
            description:
              'Revisión de los planos del promotor, análisis de la distribución, identificación de las opciones de personalización y primera estimación orientativa.',
            highlighted: true,
          },
          {
            name: 'Acompañamiento completo',
            price: 'Consultar',
            description:
              'Servicio integral: selección de acabados, planos optimizados, visualizaciones 3D, visitas de obra y verificación de la entrega.',
          },
        ]}
      />
      </div>

      {/* 6. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre compra sobre plano en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre nuestro servicio
          de acompañamiento en la compra sobre plano de obra nueva.
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
