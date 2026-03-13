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
    question: '¿Cuánto cuesta reformar un piso en Manresa?',
    schemaAnswer:
      'El coste de una reforma integral en Manresa oscila entre 500 y 1.000 €/m². Para un piso típico de entre 70 y 100 m², el presupuesto total se sitúa entre 35.000 y 100.000 €. Los precios son significativamente inferiores a los de Barcelona, lo que permite destinar más presupuesto a calidades y acabados. Solicita un presupuesto personalizado y gratuito.',
    answer: (
      <>
        <p>
          El coste de una reforma integral en Manresa oscila entre{' '}
          <strong className="font-semibold text-neutral-950">
            500 y 1.000&nbsp;€/m²
          </strong>
          , dependiendo del estado del inmueble y las calidades elegidas.
        </p>
        <p>
          Para un piso típico de entre 70 y 100&nbsp;m², el presupuesto total se
          sitúa entre{' '}
          <strong className="font-semibold text-neutral-950">
            35.000 y 100.000&nbsp;€
          </strong>
          . Los precios son significativamente inferiores a los de Barcelona, lo
          que permite destinar más presupuesto a calidades y acabados.
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
      '¿Tenéis arquitectos e interioristas que trabajen en Manresa?',
    schemaAnswer:
      'Sí, miembros del colectivo operan en la comarca del Bages. Conocen la normativa del Ajuntament de Manresa y trabajan con constructoras locales, lo que garantiza un seguimiento cercano de la obra y una gestión eficiente del proyecto.',
    answer: (
      <>
        <p>
          Sí,{' '}
          <strong className="font-semibold text-neutral-950">
            miembros del colectivo operan en la comarca del Bages
          </strong>
          . Algunos de ellos están basados en la propia ciudad o en localidades
          cercanas como Santpedor, Sant Joan de Vilatorrada o Navarcles.
        </p>
        <p>
          Conocen la normativa del Ajuntament de Manresa y trabajan con
          constructoras locales, lo que garantiza un seguimiento cercano de la
          obra y una gestión eficiente del proyecto.
        </p>
      </>
    ),
  },
  {
    question: '¿Se puede rehabilitar una masía en el Bages?',
    schemaAnswer:
      'Sí, la comarca del Bages cuenta con un patrimonio excepcional de masías catalanas. Nuestros arquitectos tienen experiencia en rehabilitación de masías, conservando elementos originales como la piedra, las vigas de madera y los arcos de medio punto, y adaptándolas al confort moderno con aislamiento, calefacción eficiente y cocinas y baños contemporáneos.',
    answer: (
      <>
        <p>
          Sí, la comarca del Bages cuenta con un{' '}
          <strong className="font-semibold text-neutral-950">
            patrimonio excepcional de masías catalanas
          </strong>
          . Nuestros arquitectos tienen experiencia en rehabilitación de masías,
          conservando elementos originales como la piedra, las vigas de madera y
          los arcos de medio punto.
        </p>
        <p>
          Adaptamos estas construcciones al confort moderno con aislamiento,
          calefacción eficiente y cocinas y baños contemporáneos, sin perder el
          carácter rural y la autenticidad de la masía.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Merece la pena reformar un piso en el centro histórico de Manresa?',
    schemaAnswer:
      'Sí, el Barri Antic de Manresa está en plena revitalización. Los edificios históricos tienen mucho potencial gracias a sus techos altos y muros de piedra, y los precios de compra son muy competitivos. Una reforma bien planificada permite crear viviendas con carácter único a un coste total (compra + reforma) muy inferior al de Barcelona.',
    answer: (
      <>
        <p>
          Sí, el{' '}
          <strong className="font-semibold text-neutral-950">
            Barri Antic de Manresa está en plena revitalización
          </strong>
          . Los edificios históricos tienen mucho potencial gracias a sus techos
          altos y muros de piedra, y los precios de compra son muy competitivos.
        </p>
        <p>
          Una reforma bien planificada permite crear viviendas con carácter único
          a un coste total (compra + reforma) muy inferior al de Barcelona. Es
          una oportunidad excelente para quienes buscan espacio, personalidad y
          buena relación calidad-precio.
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
          name: 'Interiorista Manresa',
          item: 'https://www.interioristabarcelona.com/interiorista-manresa/',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'Interiorista Barcelona — Manresa',
      url: 'https://www.interioristabarcelona.com/interiorista-manresa/',
      description:
        'Interioristas y arquitectos en Manresa. Profesionales del colectivo en el Bages: reforma de pisos, rehabilitación de masías y diseño interior.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Manresa',
        addressRegion: 'Barcelona',
        addressCountry: 'ES',
      },
      areaServed: {
        '@type': 'City',
        name: 'Manresa',
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
  title: 'Interiorista y Arquitecto en Manresa | Diseño de Interiores Manresa',
  description:
    'Interioristas y arquitectos en Manresa. Profesionales del colectivo en el Bages: reforma de pisos, rehabilitación de masías y diseño interior. Presupuesto gratuito.',
  alternates: {
    canonical: '/interiorista-manresa/',
  },
}

export default function InterioristaManresaPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Interiorismo en Manresa"
        title="Tu interiorista y arquitecto en Manresa"
      >
        <p>
          Miembros de nuestro colectivo trabajan directamente en Manresa y la
          comarca del Bages. Interioristas y arquitectos que conocen la ciudad,
          sus tipologías de vivienda y sus proveedores locales para llevar a cabo
          tu proyecto de reforma o diseño de interiores.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. Contexto arquitectónico */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Manresa: capital del Bages con patrimonio histórico
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              Con cerca de 77.000 habitantes, Manresa es la capital de la
              comarca del Bages, situada a aproximadamente una hora de Barcelona
              por FGC o por carretera. Su{' '}
              <strong className="font-semibold text-neutral-950">
                centro histórico medieval
              </strong>{' '}
              — el Barri Antic — está en pleno proceso de revitalización, con
              edificios singulares como la Basílica de la Seu y el Pont Vell que
              testimonian siglos de historia.
            </p>
            <p>
              La ciudad tiene un importante{' '}
              <strong className="font-semibold text-neutral-950">
                pasado textil e industrial
              </strong>{' '}
              que ha marcado su arquitectura. El parque de viviendas es muy
              diverso: edificios medievales en el casco antiguo, masías
              catalanas en las afueras y la comarca, bloques residenciales de
              los años 60 a 80 y promociones de obra nueva en los ensanches más
              recientes.
            </p>
            <p>
              Manresa ofrece precios de vivienda{' '}
              <strong className="font-semibold text-neutral-950">
                significativamente más asequibles que Barcelona
              </strong>{' '}
              y su área metropolitana, lo que la convierte en una opción cada vez
              más atractiva para familias y profesionales. Además, es la puerta
              de entrada al Pirineo catalán, con acceso directo a la montaña de
              Montserrat y los paisajes del Bages.
            </p>
          </div>

          <h2 className="mt-16 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Interiorismo y arquitectura adaptados al Bages
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              La{' '}
              <strong className="font-semibold text-neutral-950">
                rehabilitación de masías
              </strong>{' '}
              es uno de los proyectos más demandados en la comarca del Bages.
              Nuestros arquitectos tienen experiencia en la conservación de
              elementos originales — piedra, vigas de madera, arcos — mientras
              adaptan estos espacios al confort y las necesidades de la vida
              contemporánea.
            </p>
            <p>
              En el centro histórico de Manresa, la{' '}
              <strong className="font-semibold text-neutral-950">
                renovación de pisos en edificios antiguos
              </strong>{' '}
              presenta retos específicos: muros portantes, alturas generosas,
              instalaciones obsoletas. Nuestros interioristas y arquitectos
              dominan estos condicionantes y conocen la normativa del Ajuntament
              de Manresa para agilizar licencias y permisos.
            </p>
            <p>
              La{' '}
              <strong className="font-semibold text-neutral-950">
                eficiencia energética
              </strong>{' '}
              es prioritaria en los edificios más antiguos, donde el aislamiento
              suele ser escaso. Nuestros profesionales integran soluciones de
              aislamiento, climatización y ventilación que mejoran el confort sin
              sacrificar el carácter del inmueble, combinando elementos
              tradicionales catalanes con un diseño moderno y funcional.
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* 3. Servicios */}
      <SectionIntro
        title="Servicios para tu proyecto en Manresa"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Ofrecemos un abanico completo de servicios adaptados a las
          particularidades de los inmuebles de Manresa y la comarca del Bages.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Diseño de interiores">
            Proyectos integrales de interiorismo en Manresa, adaptados a cada
            tipología de vivienda.{' '}
            <Link
              href="/diseno-interiores/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Reforma de masías">
            Rehabilitación de masías del Bages conservando elementos originales
            y adaptándolas al confort moderno.{' '}
            <Link
              href="/reforma-masias/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Arquitecto">
            Arquitectos en Manresa para proyectos de reforma, ampliación y obra
            nueva en la comarca del Bages.{' '}
            <Link
              href="/arquitectura-interiores/"
              className="font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Ver servicio
            </Link>
          </GridListItem>
          <GridListItem title="Rehabilitación energética">
            Eficiencia energética en edificios antiguos, masías y bloques
            residenciales de Manresa.{' '}
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
          <GridListItem title="Asesoría compra vivienda">
            Evaluación profesional de inmuebles en Manresa antes de la compra:
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
        title="Preguntas frecuentes sobre interiorismo en Manresa"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre reformas e
          interiorismo en Manresa y la comarca del Bages.
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
