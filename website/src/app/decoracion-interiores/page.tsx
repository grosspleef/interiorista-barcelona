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
import { TestimonialSlider, type TestimonialItem } from '@/components/TestimonialSlider'
import { FAQAccordion } from './faq-accordion'

const serviceProjects: Project[] = [
  {
    title: 'Decoración apartamento familiar en Sarrià',
    description:
      '150 m² en estilo mediterráneo contemporáneo: selección integral de mobiliario, textiles y luminarias para crear un ambiente cálido y funcional para toda la familia.',
    year: '2025',
    category: 'Decoración integral',
  },
  {
    title: 'Renovación estética piso de alquiler en el Born',
    description:
      '70 m² transformados sin obras: nueva paleta de colores, mobiliario contemporáneo y styling completo para maximizar el atractivo del piso.',
    year: '2024',
    category: 'Decoración sin obras',
  },
  {
    title: 'Styling y ambientación restaurante en Eixample',
    description:
      'Decoración integral de un restaurante de cocina mediterránea: creación de una atmósfera coherente con la imagen de marca a través del mobiliario, textiles e iluminación.',
    year: '2024',
    category: 'Decoración comercial',
  },
]

const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'La shopping list que preparó nuestra decoradora fue impecable: cada pieza encajaba perfectamente en el conjunto. Nos ahorró semanas de búsqueda y el resultado en nuestro piso de Sarrià es espectacular.',
    client: 'Ana R., decoración integral en Sarrià',
  },
  {
    quote:
      'Queríamos renovar el piso de alquiler en el Born sin hacer obras y el resultado fue una transformación espectacular. Los nuevos inquilinos quedaron encantados desde la primera visita.',
    client: 'Carlos y Elena M., decoración sin obras en el Born',
  },
  {
    quote:
      'Our decorator perfectly captured the Mediterranean atmosphere we wanted for our restaurant in Eixample. The material selection and lighting design transformed the space completely.',
    client: 'David K., restaurant decoration in Eixample',
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
    question: '¿Cuál es la diferencia entre un decorador y un interiorista?',
    schemaAnswer:
      'Un decorador de interiores se centra en la estética del espacio: selección de mobiliario, textiles, colores, iluminación y complementos decorativos. No realiza obras estructurales ni modificaciones de instalaciones. Un interiorista (arquitecto de interiores) puede además intervenir en la redistribución del espacio, derribar tabiques, modificar instalaciones eléctricas o de fontanería y gestionar obras de reforma integral. Si tu vivienda necesita una renovación estructural, consulta nuestro servicio de arquitectura de interiores.',
    answer: (
      <>
        <p>
          Un{' '}
          <strong className="font-semibold text-neutral-950">
            decorador de interiores
          </strong>{' '}
          se centra en la estética del espacio: selección de mobiliario,
          textiles, colores, iluminación y complementos decorativos. No realiza
          obras estructurales ni modificaciones de instalaciones.
        </p>
        <p>
          Un{' '}
          <strong className="font-semibold text-neutral-950">
            interiorista
          </strong>{' '}
          (arquitecto de interiores) puede además intervenir en la
          redistribución del espacio, derribar tabiques, modificar instalaciones
          eléctricas o de fontanería y gestionar obras de reforma integral.
        </p>
        <p>
          Si tu vivienda necesita una renovación estructural, consulta nuestro{' '}
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
    question: '¿Dónde intervenís como decoradores en Barcelona?',
    schemaAnswer:
      'Nuestros servicios de decoración de interiores se realizan en Barcelona ciudad y en las principales ciudades del área metropolitana. Intervenimos en los principales barrios de Barcelona: Eixample, Gràcia, El Born, Sarrià, Poblenou, Les Corts, Sant Andreu y Sants-Montjuïc. También intervenimos en Sant Cugat, Sabadell, Castelldefels, Sitges, Badalona, L\'Hospitalet de Llobregat y alrededores. Contacta con nosotros para solicitar un presupuesto gratuito.',
    answer: (
      <>
        <p>
          Nuestros servicios de decoración de interiores se realizan en{' '}
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
          También intervenimos en Sant Cugat, Sabadell, Castelldefels, Sitges,
          Badalona, L&apos;Hospitalet de Llobregat y alrededores.
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
    question: 'Soy inquilino, ¿puedo contratar un decorador?',
    schemaAnswer:
      'Por supuesto. La decoración de interiores es la solución ideal para inquilinos, ya que no requiere obras ni permisos del propietario. Un decorador puede transformar tu hogar con pintura, mobiliario, textiles, iluminación y complementos decorativos, todo ello sin modificar la estructura del inmueble. Es una forma rápida y efectiva de personalizar tu espacio sin compromisos permanentes.',
    answer: (
      <>
        <p>
          Por supuesto. La decoración de interiores es la{' '}
          <strong className="font-semibold text-neutral-950">
            solución ideal para inquilinos
          </strong>
          , ya que no requiere obras ni permisos del propietario.
        </p>
        <p>
          Un decorador puede transformar tu hogar con pintura, mobiliario,
          textiles, iluminación y complementos decorativos, todo ello sin
          modificar la estructura del inmueble.
        </p>
        <p>
          Es una forma rápida y efectiva de personalizar tu espacio sin
          compromisos permanentes.
        </p>
      </>
    ),
  },
  {
    question: '¿Un decorador puede trabajar en espacios comerciales?',
    schemaAnswer:
      'Sí, nuestros decoradores tienen experiencia en ambientación de espacios comerciales: boutiques, restaurantes, cafeterías, oficinas y showrooms. El decorador trabaja la imagen de marca a través del mobiliario, los textiles, la iluminación y los acabados para crear una experiencia coherente con tu negocio. Para proyectos que requieran obras estructurales, consulta nuestro servicio de interiorismo comercial.',
    answer: (
      <>
        <p>
          Sí, nuestros decoradores tienen experiencia en ambientación de{' '}
          <strong className="font-semibold text-neutral-950">
            espacios comerciales
          </strong>
          : boutiques, restaurantes, cafeterías, oficinas y showrooms.
        </p>
        <p>
          El decorador trabaja la imagen de marca a través del mobiliario, los
          textiles, la iluminación y los acabados para crear una experiencia
          coherente con tu negocio.
        </p>
        <p>
          Para proyectos que requieran obras estructurales, consulta nuestro{' '}
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
  {
    question: '¿Qué incluye un proyecto de decoración?',
    schemaAnswer:
      'Un proyecto de decoración incluye: moodboards de inspiración con paleta de colores y estilo definido, plano de mobiliario con dimensiones y circulación, shopping list completa con referencias de muebles, textiles, iluminación y complementos, y un presupuesto detallado con referencias de proveedores. Consulta nuestras tarifas de decoración de interiores para más información.',
    answer: (
      <>
        <p>
          Un proyecto de decoración incluye:
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Moodboards de inspiración
          </strong>{' '}
          con paleta de colores y estilo definido,{' '}
          <strong className="font-semibold text-neutral-950">
            plano de mobiliario
          </strong>{' '}
          con dimensiones y circulación,{' '}
          <strong className="font-semibold text-neutral-950">
            shopping list completa
          </strong>{' '}
          con referencias de muebles, textiles, iluminación y complementos, y un{' '}
          <strong className="font-semibold text-neutral-950">
            presupuesto detallado
          </strong>{' '}
          con referencias de proveedores.
        </p>
        <p>
          Consulta nuestras{' '}
          <Link
            href="/precios/#decoracion-interiores"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            tarifas de decoración de interiores
          </Link>{' '}
          para más información.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Cuáles son las tendencias de decoración en Barcelona en 2026?',
    schemaAnswer:
      'Las principales tendencias de decoración en Barcelona en 2026 incluyen: el estilo mediterráneo contemporáneo con materiales naturales (madera, piedra, lino, cerámica artesanal), paletas cálidas inspiradas en la costa catalana, iluminación ambiental con luminarias de diseño, integración de plantas y elementos biofílicos, y mobiliario de líneas orgánicas que combina funcionalidad con estética. También destaca el interés creciente por piezas de artesanía local y materiales sostenibles.',
    answer: (
      <>
        <p>
          Las principales tendencias de decoración en Barcelona en 2026
          incluyen: el{' '}
          <strong className="font-semibold text-neutral-950">
            estilo mediterráneo contemporáneo
          </strong>{' '}
          con materiales naturales (madera, piedra, lino, cerámica artesanal),
          paletas cálidas inspiradas en la costa catalana, iluminación ambiental
          con luminarias de diseño.
        </p>
        <p>
          También destaca la integración de{' '}
          <strong className="font-semibold text-neutral-950">
            plantas y elementos biofílicos
          </strong>
          , mobiliario de líneas orgánicas que combina funcionalidad con
          estética, y el interés creciente por piezas de artesanía local y
          materiales sostenibles.
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
          name: 'Decoración de interiores',
          item: 'https://www.interioristabarcelona.com/decoracion-interiores/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.interioristabarcelona.com/decoracion-interiores/#service',
      name: 'Decoración de interiores en Barcelona',
      description:
        'Servicio de decoración de interiores en Barcelona: selección de mobiliario, textiles, colores e iluminación para renovar tu hogar sin obra.',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      serviceType: 'Decoración de interiores',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '50',
        unitText: 'por m²',
        description: 'Proyecto de decoración desde 50 €/m²',
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
        '@id': 'https://www.interioristabarcelona.com/decoracion-interiores/#service',
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
  title: 'Decoración de interiores en Barcelona | Decoración 2026',
  description:
    'Decoración de interiores en Barcelona: selección de mobiliario, textiles, colores e iluminación para renovar tu hogar sin obra. Presupuesto gratuito. Tendencias 2026.',
}

export default function DecoracionInterioresPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Nuestros servicios"
        title="Decoración de interiores en Barcelona"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Mobiliario, textiles, colores e iluminación: renueva tu interior sin
          obra
        </p>
        <p className="mt-6">
          Los decoradores de interiores del colectivo te acompañan para
          transformar tu hogar sin obras: selección de mobiliario, textiles,
          paleta de colores e iluminación para crear un interior que refleje tu
          personalidad y estilo de vida.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. ¿Por qué contratar un decorador de interiores en Barcelona? */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué contratar un decorador de interiores en Barcelona?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          El decorador de interiores aporta una visión profesional para renovar
          tu espacio sin necesidad de obras, optimizando cada rincón con
          mobiliario, textiles y colores adaptados a tu estilo de vida.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Una mirada experta sobre tu espacio">
            El decorador aporta una perspectiva profesional que revela el
            potencial oculto de tu interior: distribución del mobiliario,
            aprovechamiento de la luz natural y armonía visual del conjunto.
          </GridListItem>
          <GridListItem title="Renovación sin obras ni estrés">
            Transforma tu hogar sin permisos ni obras: pintura, mobiliario,
            textiles e iluminación son suficientes para lograr un cambio radical
            en tu espacio.
          </GridListItem>
          <GridListItem title="Selección profesional de mobiliario y materiales">
            Accede a marcas, proveedores y artesanos que no están al alcance del
            público general. El decorador selecciona piezas que combinan calidad,
            estética y durabilidad.
          </GridListItem>
          <GridListItem title="Coherencia estética garantizada">
            El decorador crea una paleta de colores, materiales y texturas
            armoniosa que unifica todo el espacio, evitando errores costosos de
            combinación.
          </GridListItem>
          <GridListItem title="Ahorro de tiempo y presupuesto">
            Con una shopping list cerrada y un presupuesto optimizado, evitas
            compras impulsivas y visitas innecesarias. El decorador te ahorra
            tiempo y dinero.
          </GridListItem>
          <GridListItem title="Acceso a precios profesionales">
            Benefíciate de descuentos exclusivos en mobiliario, iluminación y
            textiles gracias a las tarifas profesionales que los decoradores
            obtienen de sus proveedores.
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. Tu colaboración con un decorador */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Tu colaboración con un decorador de interiores"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          El decorador te acompaña en cada etapa: escucha tus gustos y estilo de
          vida, elabora moodboards de inspiración, define una shopping list
          completa y coordina la instalación final del mobiliario y los
          complementos decorativos. Un{' '}
          <Link
            href="/diseno-interiores/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            diseñador de interiores
          </Link>{' '}
          puede completar el proyecto si se requieren obras estructurales.
        </p>
      </SectionIntro>

      {/* 4. Proceso en 3 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Visita consejo de decoración"
          image={{ src: imageWhiteboard }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Desde la primera visita, el decorador trabaja contigo en tu
              domicilio en Barcelona. Te escucha para comprender tus gustos, tu
              estilo de vida y tu presupuesto.
            </p>
            <p>
              Analiza el espacio existente:{' '}
              <strong className="font-semibold text-neutral-950">
                luz natural, distribución del mobiliario, paleta de colores
              </strong>{' '}
              y flujo de circulación. Identifica las oportunidades de mejora sin
              necesidad de obras.
            </p>
            <p>
              Proporciona una primera orientación de estilo y una{' '}
              <strong className="font-semibold text-neutral-950">
                estimación orientativa del presupuesto
              </strong>{' '}
              de decoración.
            </p>
            <p>
              A diferencia de un interiorista, el decorador se centra
              exclusivamente en la estética: no interviene en muros portadores,
              aislamiento ni instalaciones técnicas.
            </p>
          </div>
        </Section>

        <Section
          title="Proyecto de decoración"
          image={{ src: imageLaptop, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              El decorador elabora un{' '}
              <strong className="font-semibold text-neutral-950">
                moodboard de inspiración
              </strong>{' '}
              que define la dirección estética del proyecto: paleta de colores,
              texturas, materiales y ambiente general.
            </p>
            <p>
              A continuación, desarrolla el proyecto definitivo con un{' '}
              <strong className="font-semibold text-neutral-950">
                plano de mobiliario
              </strong>{' '}
              que indica dimensiones y circulación óptima en cada estancia.
            </p>
            <p>
              Prepara una{' '}
              <strong className="font-semibold text-neutral-950">
                shopping list completa
              </strong>
              : muebles, textiles, iluminación, accesorios y piezas de arte,
              todo con referencias de proveedores y un presupuesto detallado.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Moodboards">
              Paneles de inspiración con paleta de colores, texturas y estilo.
            </ListItem>
            <ListItem title="Plano de mobiliario">
              Distribución con dimensiones y circulación óptima.
            </ListItem>
            <ListItem title="Shopping list">
              Lista completa de muebles, textiles, iluminación y accesorios.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Instalación y styling final"
          image={{ src: imageMeeting, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Coordinación de las compras y la logística de entrega de todo el
              mobiliario y los complementos seleccionados.
            </p>
            <p>
              Recepción e{' '}
              <strong className="font-semibold text-neutral-950">
                instalación del mobiliario
              </strong>{' '}
              en cada estancia según el plano de distribución definido en el
              proyecto.
            </p>
            <p>
              <strong className="font-semibold text-neutral-950">
                Styling final
              </strong>
              : colocación de cojines, cuadros, objetos decorativos, plantas y
              todos los detalles que dan vida al espacio.
            </p>
            <p>
              Visita final con el cliente para asegurar que el resultado
              corresponde a sus expectativas. Si el proyecto incluye un servicio
              de{' '}
              <Link
                href="/home-staging/"
                className="font-semibold text-neutral-950 underline hover:text-neutral-700"
              >
                home staging
              </Link>
              , el decorador puede adaptar la puesta en escena para la venta.
            </p>
          </div>
        </Section>
      </div>

      {/* 5. Tarifas */}
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <PricingBlock
          id="tarifas-decoracion"
          name="Tarifas de decoración de interiores"
          description="Servicio de decoración de interiores para viviendas en Barcelona. Desde la primera consulta hasta la instalación final, te acompañamos para renovar tu hogar sin obras."
          href="/contacto/"
          ctaLabel="Solicitar presupuesto gratuito"
          image={{ src: imageWhiteboard, shape: 0 }}
          showCounter={false}
          tiers={[
            {
              name: 'Consulta de decoración',
              price: '90 €/h',
              description:
                'Visita a domicilio para evaluar el espacio, definir el estilo y orientar el proyecto de decoración.',
            },
            {
              name: 'Proyecto de decoración',
              price: 'Desde 50 €/m²',
              description:
                'Proyecto completo: moodboards, plano de mobiliario, shopping list y presupuesto detallado. ≤40 m²: 65 €/m² · 41-80 m²: 60 €/m² · 81-120 m²: 55 €/m² · ≥121 m²: 50 €/m².',
              highlighted: true,
            },
            {
              name: 'Instalación y styling',
              price: 'Desde 450 €/media jornada',
              description:
                'Coordinación de compras, instalación del mobiliario y styling final. Jornada completa: 800 €.',
            },
          ]}
        />
      </div>

      {/* 6. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre decoración de interiores en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre nuestros servicios de
          decoración de interiores.
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
        title="Proyectos de decoración de interiores en Barcelona"
        subtitle="Descubre algunos proyectos de decoración de interiores realizados por los miembros del colectivo."
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
