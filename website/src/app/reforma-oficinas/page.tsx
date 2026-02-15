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
    title: 'Sede de startup tecnológica en el 22@',
    description:
      '350 m² de oficina open space: salas agile, phone booths, zona break con cocina equipada y mobiliario ergonómico para 60 puestos de trabajo.',
    year: '2025',
    category: 'Oficinas',
    image: imageLaptop,
  },
  {
    title: 'Despacho de abogados en Eixample',
    description:
      '180 m² de despacho profesional: despachos privados con acústica reforzada, sala de juntas para 14 personas y recepción corporativa.',
    year: '2024',
    category: 'Oficinas',
    image: imageMeeting,
  },
  {
    title: 'Coworking en Gràcia',
    description:
      '280 m² de espacio de coworking: hot desking, salas de reuniones modulares, cabinas telefónicas, terraza comunitaria y zona lounge.',
    year: '2024',
    category: 'Coworking',
    image: imageWhiteboard,
  },
]

const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'El space planning fue clave: pasamos de una oficina caótica a un espacio que realmente potencia la colaboración entre equipos. Además, lograron hacer toda la reforma sin interrumpir nuestra actividad, trabajando por fases y en horarios compatibles con nuestro día a día.',
    client: 'Marc T., CEO de startup en el 22@',
  },
  {
    quote:
      'Desde la reforma, hemos notado un cambio real en el bienestar del equipo. La acústica, la iluminación natural y los espacios de descanso han mejorado la retención de talento. Varios candidatos en entrevistas nos han comentado lo mucho que les ha impresionado la oficina.',
    client: 'Laura S., directora de RRHH en Eixample',
  },
  {
    quote:
      'Abrir un espacio de coworking en Barcelona parecía complicado con todos los permisos y normativas. Nuestra diseñadora gestionó la licencia de obras, coordinó todos los gremios y nos entregó un espacio bonito y funcional, dentro de plazo y presupuesto. La calidad del diseño habla por sí sola.',
    client: 'James W., fundador de coworking en Gràcia',
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
    question: '¿Qué tipos de oficinas reformáis?',
    schemaAnswer:
      'Reformamos todo tipo de espacios de trabajo: oficinas corporativas, sedes de empresa, espacios de coworking, oficinas de startups, despachos profesionales (abogados, consultoras, clínicas), consultorios y estudios. También adaptamos oficinas existentes al modelo de trabajo híbrido con hot desking, salas de videoconferencia y zonas colaborativas.',
    answer: (
      <>
        <p>
          Reformamos todo tipo de{' '}
          <strong className="font-semibold text-neutral-950">
            espacios de trabajo
          </strong>
          : oficinas corporativas, sedes de empresa, espacios de coworking,
          oficinas de startups, despachos profesionales (abogados, consultoras,
          clínicas), consultorios y estudios.
        </p>
        <p>
          También adaptamos oficinas existentes al modelo de{' '}
          <strong className="font-semibold text-neutral-950">
            trabajo híbrido
          </strong>{' '}
          con hot desking, salas de videoconferencia y zonas colaborativas.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué licencias necesito para reformar una oficina en Barcelona?',
    schemaAnswer:
      'Para reformar una oficina en Barcelona necesitas: licencia de obras menores o mayores (según el alcance de la reforma), comunicado previo de actividad, coordinación de seguridad y salud (RD 1627/1997), cumplimiento del CTE en materia de seguridad contra incendios (DB-SI) y accesibilidad (DB-SUA), y certificación energética. Nuestro equipo gestiona toda la documentación y tramitación. Si tu proyecto es un local abierto al público (restaurante, tienda, hotel), consulta nuestro servicio de interiorismo comercial.',
    answer: (
      <>
        <p>Para reformar una oficina en Barcelona necesitas:</p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Licencia de obras
          </strong>{' '}
          menores o mayores (según el alcance de la reforma),{' '}
          <strong className="font-semibold text-neutral-950">
            comunicado previo de actividad
          </strong>
          , coordinación de seguridad y salud (RD 1627/1997), cumplimiento del
          CTE en materia de seguridad contra incendios (DB-SI) y accesibilidad
          (DB-SUA), y{' '}
          <strong className="font-semibold text-neutral-950">
            certificación energética
          </strong>
          .
        </p>
        <p>
          Si tu proyecto es un local abierto al público (restaurante, tienda,
          hotel), consulta nuestro servicio de{' '}
          <Link
            href="/interiorismo-comercial/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            interiorismo comercial
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: '¿En qué zonas de Barcelona trabajáis?',
    schemaAnswer:
      "Trabajamos en toda Barcelona y área metropolitana. Tenemos especial experiencia en zonas con alta concentración de oficinas: distrito 22@ (Poblenou), Eixample, Diagonal y Les Corts, Sarrià-Sant Gervasi. También realizamos proyectos en el área metropolitana: Sant Cugat, L'Hospitalet y alrededores. Contacta con nosotros para consultar disponibilidad en tu zona.",
    answer: (
      <>
        <p>
          Trabajamos en{' '}
          <strong className="font-semibold text-neutral-950">
            toda Barcelona y área metropolitana
          </strong>
          . Tenemos especial experiencia en zonas con alta concentración de
          oficinas: distrito 22@ (Poblenou), Eixample, Diagonal y Les Corts,
          Sarrià-Sant Gervasi.
        </p>
        <p>
          También realizamos proyectos en el área metropolitana: Sant Cugat,
          L&apos;Hospitalet y alrededores.
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
    question: '¿Cuánto tiempo se tarda en reformar una oficina?',
    schemaAnswer:
      'Los plazos dependen del tamaño y complejidad del proyecto: la fase de diseño y space planning suele durar entre 3 y 6 semanas, la tramitación de licencias entre 1 y 2 meses, y la ejecución de obra entre 2 y 4 meses. En total, una reforma de oficina completa se desarrolla en un plazo de 3 a 6 meses. Es posible planificar la obra por fases para minimizar el impacto en la actividad de la empresa.',
    answer: (
      <>
        <p>Los plazos dependen del tamaño y complejidad del proyecto:</p>
        <p>
          La fase de{' '}
          <strong className="font-semibold text-neutral-950">
            diseño y space planning
          </strong>{' '}
          suele durar entre 3 y 6 semanas, la tramitación de{' '}
          <strong className="font-semibold text-neutral-950">licencias</strong>{' '}
          entre 1 y 2 meses, y la{' '}
          <strong className="font-semibold text-neutral-950">
            ejecución de obra
          </strong>{' '}
          entre 2 y 4 meses.
        </p>
        <p>
          En total, una reforma de oficina completa se desarrolla en un plazo de{' '}
          <strong className="font-semibold text-neutral-950">
            3 a 6 meses
          </strong>
          . Es posible planificar la obra por fases para minimizar el impacto en
          la actividad de la empresa.
        </p>
      </>
    ),
  },
  {
    question: '¿Es posible reformar la oficina sin interrumpir la actividad?',
    schemaAnswer:
      'Sí, es posible. Planificamos las reformas por fases para que la empresa pueda seguir operando durante las obras. Esto incluye trabajo en horarios nocturnos o fines de semana, reubicación temporal de equipos dentro del mismo espacio y coordinación estrecha con la dirección de la empresa. Tenemos amplia experiencia en reformas "en caliente" donde la actividad no se detiene en ningún momento.',
    answer: (
      <>
        <p>
          Sí, es posible. Planificamos las reformas{' '}
          <strong className="font-semibold text-neutral-950">por fases</strong>{' '}
          para que la empresa pueda seguir operando durante las obras.
        </p>
        <p>
          Esto incluye trabajo en{' '}
          <strong className="font-semibold text-neutral-950">
            horarios nocturnos o fines de semana
          </strong>
          , reubicación temporal de equipos dentro del mismo espacio y
          coordinación estrecha con la dirección de la empresa.
        </p>
        <p>
          Tenemos amplia experiencia en reformas &ldquo;en caliente&rdquo; donde
          la actividad no se detiene en ningún momento.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Cuál es la diferencia entre reforma de oficinas e interiorismo comercial?',
    schemaAnswer:
      'La reforma de oficinas se centra en productividad, bienestar laboral, ergonomía, acústica y space planning para optimizar el trabajo del equipo. El interiorismo comercial está orientado a la experiencia del cliente, los flujos de compra, la identidad retail y la normativa específica de locales abiertos al público (licencia de actividad, sanidad). Si tu proyecto es un restaurante, hotel o tienda, consulta nuestro servicio de interiorismo comercial.',
    answer: (
      <>
        <p>
          La{' '}
          <strong className="font-semibold text-neutral-950">
            reforma de oficinas
          </strong>{' '}
          se centra en productividad, bienestar laboral, ergonomía, acústica y
          space planning para optimizar el trabajo del equipo.
        </p>
        <p>
          El{' '}
          <strong className="font-semibold text-neutral-950">
            interiorismo comercial
          </strong>{' '}
          está orientado a la experiencia del cliente, los flujos de compra, la
          identidad retail y la normativa específica de locales abiertos al
          público (licencia de actividad, sanidad).
        </p>
        <p>
          Si tu proyecto es un restaurante, hotel o tienda, consulta nuestro
          servicio de{' '}
          <Link
            href="/interiorismo-comercial/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            interiorismo comercial
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
          name: 'Reforma de oficinas',
          item: 'https://www.interioristabarcelona.com/reforma-oficinas/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.interioristabarcelona.com/reforma-oficinas/#service',
      name: 'Reforma de oficinas en Barcelona',
      description:
        'Servicio de reforma de oficinas en Barcelona: diseño de oficinas, coworking y espacios de trabajo. Proyecto integral, space planning, bienestar laboral y dirección de obra.',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      serviceType: 'Reforma de oficinas',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '60',
        unitText: 'por m²',
        description: 'Proyecto de reforma de oficina desde 60 €/m²',
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
          'https://www.interioristabarcelona.com/reforma-oficinas/#service',
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
  title:
    'Reforma de oficinas en Barcelona | Diseño de espacios de trabajo 2026',
  description:
    '¿Buscas reformar tu oficina en Barcelona? Diseño de oficinas, coworking y espacios de trabajo. Proyecto integral desde 60 €/m². Space planning, bienestar laboral y dirección de obra.',
}

export default function ReformaOficinasPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Nuestros servicios"
        title="Reforma de oficinas en Barcelona"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Diseño de oficinas, coworking y espacios de trabajo
        </p>
        <p className="mt-6">
          Los especialistas del colectivo diseñan espacios de trabajo que
          impulsan la productividad, reflejan la cultura de tu empresa y cuidan
          el bienestar de tu equipo. Desde el space planning hasta la entrega de
          llaves: proyecto integral, gestión de licencias y dirección de obra.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. ¿Por qué contratar un especialista en reforma de oficinas? */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué contratar un especialista en reforma de oficinas?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Un especialista en reforma de oficinas aporta visión estratégica del
          espacio de trabajo, conocimiento normativo y experiencia en diseño
          orientado a la productividad y el bienestar.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Space planning estratégico">
            Distribución optimizada de puestos de trabajo, salas de reuniones,
            zonas colaborativas y espacios de concentración adaptados al modelo
            de trabajo de tu empresa.
          </GridListItem>
          <GridListItem title="Bienestar laboral y productividad">
            Diseño basado en ergonomía, iluminación natural, acústica y calidad
            del aire según la normativa de seguridad y salud en lugares de
            trabajo (RD 486/1997).
          </GridListItem>
          <GridListItem title="Identidad corporativa en el espacio">
            El diseño de la oficina refleja la cultura y los valores de la
            empresa, reforzando el employer branding y la experiencia de
            empleados y visitantes.
          </GridListItem>
          <GridListItem title="Gestión integral de licencias">
            Licencia de obras, comunicado previo, coordinación de seguridad y
            salud, cumplimiento del CTE y certificación energética gestionados
            por nuestro equipo.
          </GridListItem>
          <GridListItem title="Eficiencia energética">
            Certificación energética, iluminación LED, climatización eficiente y
            selección de materiales sostenibles para reducir el consumo y la
            huella ambiental de tu oficina.
          </GridListItem>
          <GridListItem title="Control de plazos y presupuesto">
            Planificación detallada para minimizar el impacto en la actividad de
            la empresa, con fases de obra coordinadas y control de costes en
            cada etapa.
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. Tu colaboración con un especialista en reforma de oficinas */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Tu colaboración con un especialista en reforma de oficinas"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          El especialista te acompaña desde la primera visita a tu espacio de
          trabajo hasta la entrega de llaves: análisis de necesidades, space
          planning, diseño técnico y coordinación de obra.
        </p>
      </SectionIntro>

      {/* 4. Proceso en 3 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Visita y análisis del espacio de trabajo"
          image={{ src: imageWhiteboard }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Análisis in situ del espacio: superficie, instalaciones
              existentes, estructura, accesos y estado general del inmueble.
            </p>
            <p>
              <strong className="font-semibold text-neutral-950">
                Briefing de cultura de empresa
              </strong>
              : tipo de trabajo (presencial, híbrido, remoto), necesidades de
              colaboración vs concentración, número de puestos actuales y
              previsión de crecimiento.
            </p>
            <p>
              Evaluación normativa:{' '}
              <strong className="font-semibold text-neutral-950">
                licencia de obras
              </strong>
              , prevención de riesgos laborales, accesibilidad (CTE DB-SUA) y
              requisitos específicos según el tipo de actividad.
            </p>
            <p>
              Proporcionamos una primera estimación orientativa del presupuesto
              y los plazos del proyecto.
            </p>
          </div>
        </Section>

        <Section
          title="Proyecto de reforma de oficina"
          image={{ src: imageLaptop, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              <strong className="font-semibold text-neutral-950">
                Space planning
              </strong>
              : distribución de puestos de trabajo, hot desking, salas de
              reuniones, phone booths, zonas break y áreas de colaboración.
            </p>
            <p>
              Diseño técnico completo: planos, secciones, instalaciones
              eléctricas y de datos, climatización, acústica y renders 3D.
            </p>
            <p>
              Selección de materiales:{' '}
              <strong className="font-semibold text-neutral-950">
                pavimentos técnicos
              </strong>
              , falsos techos acústicos, mamparas, tabiquería móvil y mobiliario
              de oficina ergonómico.
            </p>
            <p>
              Documentación:{' '}
              <strong className="font-semibold text-neutral-950">
                proyecto de obras
              </strong>
              , estudio de seguridad y salud, y certificación energética.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Planos y 3D">
              Planos acotados, distribución de puestos de trabajo y renders 3D
              fotorrealistas.
            </ListItem>
            <ListItem title="Instalaciones">
              Proyecto eléctrico, red de datos, climatización y tratamiento
              acústico.
            </ListItem>
            <ListItem title="Presupuesto detallado">
              Mediciones, partidas desglosadas y presupuesto de ejecución
              material (PEM).
            </ListItem>
          </List>
        </Section>

        <Section
          title="Dirección de obra y entrega"
          image={{ src: imageMeeting, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Contratación y coordinación de{' '}
              <strong className="font-semibold text-neutral-950">
                gremios especializados
              </strong>
              : albañilería, electricidad, datos, climatización, carpintería y
              mamparas.
            </p>
            <p>
              <strong className="font-semibold text-neutral-950">
                Dirección de obra
              </strong>{' '}
              con planificación para minimizar la interrupción de la actividad:
              fases coordinadas, horarios nocturnos o fines de semana si es
              necesario.
            </p>
            <p>
              Control de calidad, plazos y presupuesto con visitas periódicas y
              resolución de imprevistos en tiempo real.
            </p>
            <p>
              Entrega: instalación de mobiliario, configuración de puestos de
              trabajo y últimos ajustes antes de la reincorporación del equipo.
            </p>
          </div>
        </Section>
      </div>

      {/* 5. Tarifas */}
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <PricingBlock
          id="tarifas-reforma-oficinas"
          name="Tarifas de reforma de oficinas"
          description="Servicio integral de reforma de oficinas en Barcelona. Desde la consulta inicial gratuita hasta la dirección de obra y entrega del espacio de trabajo."
          href="/contacto/"
          ctaLabel="Solicitar presupuesto gratuito"
          image={{ src: imageWhiteboard, shape: 0 }}
          showCounter={false}
          tiers={[
            {
              name: 'Consulta inicial',
              price: 'Gratuita',
              description:
                'Visita al espacio, análisis de necesidades y primera estimación orientativa para tu proyecto de oficina.',
            },
            {
              name: 'Proyecto de oficina',
              price: 'Desde 60 €/m²',
              description:
                'Proyecto integral: space planning, planos, 3D, instalaciones y selección de materiales. ≤40 m²: 80 €/m² · 41-80 m²: 70 €/m² · 81-150 m²: 65 €/m² · ≥151 m²: 60 €/m².',
              highlighted: true,
            },
            {
              name: 'Dirección de obra',
              price: '8 % del presupuesto',
              description:
                'Coordinación de la ejecución, control de plazos y calidad hasta la entrega del espacio de trabajo.',
            },
          ]}
        />
      </div>

      {/* 6. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre reforma de oficinas en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre nuestros servicios de
          reforma de oficinas y espacios de trabajo.
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
        title="Proyectos de reforma de oficinas en Barcelona"
        subtitle="Descubre algunos proyectos de reforma de oficinas y espacios de trabajo realizados por los miembros del colectivo."
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
