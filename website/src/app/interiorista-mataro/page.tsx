import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { LatestProjects } from '@/components/LatestProjects'
import { FAQAccordion } from './faq-accordion'

const faqItems = [
  {
    question: '¿Cuánto cuesta reformar un piso en Mataró?',
    schemaAnswer:
      'El coste de una reforma integral en Mataró oscila entre 600 y 1.100 €/m². Los pisos habituales en la ciudad tienen entre 70 y 100 m², lo que sitúa el presupuesto total entre 42.000 y 110.000 €. Los precios son más accesibles que en Barcelona, lo que permite destinar más presupuesto a calidades y acabados. Solicita un presupuesto personalizado y gratuito.',
    answer: (
      <>
        <p>
          El coste de una reforma integral en Mataró oscila entre{' '}
          <strong className="font-semibold text-neutral-950">
            600 y 1.100&nbsp;€/m²
          </strong>
          , dependiendo del estado del inmueble y las calidades elegidas.
        </p>
        <p>
          Los pisos habituales en la ciudad tienen entre 70 y 100&nbsp;m², lo
          que sitúa el presupuesto total entre{' '}
          <strong className="font-semibold text-neutral-950">
            42.000 y 110.000&nbsp;€
          </strong>
          . Los precios son más accesibles que en Barcelona, lo que permite
          destinar más presupuesto a calidades y acabados.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Solicita un presupuesto personalizado
          </Link>{' '}
          y gratuito.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Hay arquitectos e interioristas del colectivo en Mataró?',
    schemaAnswer:
      'Sí, profesionales del colectivo trabajan en Mataró y la comarca del Maresme. Conocen la normativa del Ajuntament de Mataró y los proveedores locales, lo que garantiza un seguimiento cercano de la obra y una gestión eficiente del proyecto.',
    answer: (
      <>
        <p>
          Sí,{' '}
          <strong className="font-semibold text-neutral-950">
            profesionales del colectivo trabajan en Mataró y la comarca del
            Maresme
          </strong>
          . Algunos de ellos están basados en la propia ciudad o en localidades
          cercanas de la costa.
        </p>
        <p>
          Conocen la normativa del Ajuntament de Mataró y los proveedores
          locales, lo que garantiza un seguimiento cercano de la obra y una
          gestión eficiente del proyecto.
        </p>
      </>
    ),
  },
  {
    question: '¿Cómo aprovechar la luz natural en un piso de Mataró?',
    schemaAnswer:
      'La proximidad al mar ofrece una luminosidad excepcional en Mataró. Nuestros interioristas diseñan distribuciones que maximizan la entrada de luz: ventanales orientados hacia el mar, colores claros en paredes y suelos, y materiales reflectantes que amplifican la claridad natural en cada estancia.',
    answer: (
      <>
        <p>
          La proximidad al mar ofrece una{' '}
          <strong className="font-semibold text-neutral-950">
            luminosidad excepcional
          </strong>{' '}
          en Mataró. Nuestros interioristas diseñan distribuciones que maximizan
          la entrada de luz: ventanales orientados hacia el mar, colores claros
          en paredes y suelos, y materiales reflectantes.
        </p>
        <p>
          Este enfoque permite crear espacios luminosos y abiertos que
          aprovechan al máximo la claridad natural del litoral del Maresme,
          reduciendo la dependencia de iluminación artificial.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Se puede reformar un edificio modernista en el centro de Mataró?',
    schemaAnswer:
      'Sí, el centro de Mataró alberga joyas modernistas protegidas como la Casa Coll i Regàs de Puig i Cadafalch. Nuestros arquitectos gestionan los permisos necesarios y trabajan conservando elementos patrimoniales como fachadas, vidrieras y mosaicos, adaptando el interior al confort contemporáneo.',
    answer: (
      <>
        <p>
          Sí, el centro de Mataró alberga{' '}
          <strong className="font-semibold text-neutral-950">
            joyas modernistas protegidas
          </strong>{' '}
          como la Casa Coll i Regàs de Puig i Cadafalch. Nuestros arquitectos
          gestionan los permisos necesarios y trabajan conservando elementos
          patrimoniales como fachadas, vidrieras y mosaicos.
        </p>
        <p>
          La intervención en estos edificios requiere un equilibrio entre la
          conservación del patrimonio y la adaptación al confort contemporáneo,
          una especialidad de nuestros profesionales.
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
          name: 'Interiorista Mataró',
          item: 'https://www.interiorista-barcelona.com/interiorista-mataro/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'Interiorista Barcelona — Mataró',
      url: 'https://www.interiorista-barcelona.com/interiorista-mataro/',
      description:
        'Interioristas y arquitectos en Mataró. Profesionales del colectivo en el Maresme: reforma de pisos, rehabilitación de edificios modernistas y diseño costero.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mataró',
        addressRegion: 'Barcelona',
        addressCountry: 'ES',
      },
      areaServed: {
        '@type': 'City',
        name: 'Mataró',
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
  ],
}

export const metadata: Metadata = {
  title: 'Interiorista y Arquitecto en Mataró | Diseño de Interiores Maresme',
  description:
    'Interioristas y arquitectos en Mataró. Profesionales del colectivo en el Maresme: reforma de pisos, rehabilitación de edificios modernistas y diseño costero. Presupuesto gratuito.',
  alternates: {
    canonical: '/interiorista-mataro/',
  },
}

export default function InterioristaMataroPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Interiorismo en Mataró"
        title="Tu interiorista y arquitecto en Mataró"
      >
        <p>
          Miembros de nuestro colectivo trabajan directamente en Mataró y la
          comarca del Maresme. Interioristas y arquitectos que conocen la
          ciudad, sus tipologías de vivienda y sus proveedores locales para
          llevar a cabo tu proyecto de reforma o diseño de interiores.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. Contexto arquitectónico */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Mataró: capital del Maresme entre mar y montaña
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              Con cerca de 130.000 habitantes, Mataró es la capital de la
              comarca del Maresme, situada a unos 30&nbsp;km al norte de
              Barcelona a lo largo de la costa mediterránea. La ciudad ocupa un
              lugar singular en la historia: en 1848 se inauguró aquí la{' '}
              <strong className="font-semibold text-neutral-950">
                primera línea de ferrocarril de España
              </strong>{' '}
              (Barcelona-Mataró), símbolo de una vocación industrial y de
              progreso que sigue viva hoy.
            </p>
            <p>
              El centro histórico alberga un notable{' '}
              <strong className="font-semibold text-neutral-950">
                patrimonio modernista
              </strong>
              , con la Casa Coll i Regàs de Puig i Cadafalch como joya
              destacada. Esta herencia arquitectónica convive con un parque de
              viviendas muy diverso: edificios modernistas en el centro, bloques
              residenciales de los años 60 a 80 que constituyen la mayor parte
              del mercado, apartamentos frente al mar y casas en las
              urbanizaciones de las colinas.
            </p>
            <p>
              Los precios inmobiliarios son{' '}
              <strong className="font-semibold text-neutral-950">
                más asequibles que en Barcelona
              </strong>
              , lo que atrae a familias y profesionales que buscan más espacio
              sin renunciar a la conexión con la capital catalana gracias a la
              línea Rodalies R1 (30&nbsp;minutos hasta Barcelona).
            </p>
          </div>

          <h2 className="mt-16 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Arquitectura e interiorismo con luz mediterránea
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              La posición costera de Mataró ofrece una{' '}
              <strong className="font-semibold text-neutral-950">
                luminosidad natural excepcional
              </strong>{' '}
              que nuestros interioristas aprovechan en cada proyecto:
              distribuciones abiertas, materiales claros y ventanales que
              capturan la luz del Mediterráneo. Esta cualidad lumínica es una
              ventaja clave en el diseño de interiores de la ciudad.
            </p>
            <p>
              La{' '}
              <strong className="font-semibold text-neutral-950">
                renovación de los bloques de los años 60-80
              </strong>{' '}
              representa la principal oportunidad del mercado: pisos con buenas
              superficies pero distribuciones obsoletas, instalaciones
              envejecidas y escaso aislamiento. Nuestros arquitectos transforman
              estos inmuebles en viviendas contemporáneas, eficientes y
              luminosas.
            </p>
            <p>
              La rehabilitación de{' '}
              <strong className="font-semibold text-neutral-950">
                edificios modernistas
              </strong>{' '}
              del centro requiere un equilibrio entre conservación patrimonial y
              confort moderno. El diseño costero implica también consideraciones
              específicas: resistencia a la humedad, protección contra la sal
              marina y materiales adaptados al entorno litoral.
            </p>
            <p>
              Los arquitectos e interioristas del colectivo que operan en Mataró
              conocen la{' '}
              <strong className="font-semibold text-neutral-950">
                normativa local y el mercado de la construcción del Maresme
              </strong>
              , lo que permite una gestión eficiente de licencias, proveedores y
              seguimiento de obra.
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* 3. Servicios */}
      <SectionIntro
        title="Servicios para tu proyecto en Mataró"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Ofrecemos un abanico completo de servicios adaptados a las
          particularidades de los inmuebles de Mataró y la comarca del Maresme.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Diseño de interiores">
            Proyectos integrales de interiorismo en Mataró, adaptados a cada
            tipología de vivienda del Maresme.{' '}
            <Link
              href="/diseno-interiores/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Arquitecto">
            Arquitectos colegiados para reforma integral, obra nueva y
            rehabilitación en Mataró.{' '}
            <Link
              href="/arquitecto/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Rehabilitación energética">
            Mejora del aislamiento y la eficiencia energética en bloques
            residenciales y edificios antiguos de Mataró.{' '}
            <Link
              href="/rehabilitacion-energetica/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Ampliación de vivienda">
            Redistribución de pisos y casas para ganar espacio y funcionalidad.{' '}
            <Link
              href="/ampliacion-vivienda/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Decoración de interiores">
            Selección de mobiliario, textiles y acabados para crear ambientes
            con personalidad costera y mediterránea.{' '}
            <Link
              href="/decoracion-interiores/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Asesoría compra vivienda">
            Evaluación profesional de inmuebles en Mataró antes de la compra:
            potencial, estado y coste de reforma.{' '}
            <Link
              href="/asesoria-compra-vivienda/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
        </GridList>
      </Container>

      {/* 4. FAQ */}
      <SectionIntro
        title="Preguntas frecuentes sobre interiorismo en Mataró"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre reformas,
          interiorismo y arquitectura en Mataró y el Maresme.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <FAQAccordion items={faqItems} />
        </FadeIn>
      </Container>

      {/* 5. Contact */}
      <ContactSection />

      {/* 6. Proyectos destacados */}
      <LatestProjects />
    </RootLayout>
  )
}
