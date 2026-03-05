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
import imageAyuntamiento from '@/images/licitacion-arquitectura-ayuntamiento-distrito-barcelona.jpg'
import imageBiblioteca from '@/images/licitacion-biblioteca-municipal-moderna-barcelona.jpg'
import imageColegio from '@/images/licitacion-interiorismo-colegio-aulas-barcelona.jpg'
import imagePolideportivo from '@/images/licitacion-polideportivo-municipal-barcelona.jpg'
import { ProjectShowcase, type Project } from '@/components/ProjectShowcase'
import {
  TestimonialSlider,
  type TestimonialItem,
} from '@/components/TestimonialSlider'
import { FAQAccordion } from './faq-accordion'

const serviceProjects: Project[] = [
  {
    title: 'Reforma interior de centro cívico en Gràcia',
    description:
      '450 m² de reforma integral con criterios de accesibilidad PMR y eficiencia energética. Espacio polivalente para actividades comunitarias y culturales.',
    year: '2025',
    category: 'Equipamiento cultural',
    image: imageColegio,
  },
  {
    title: 'Interiorismo de biblioteca pública en Poblenou',
    description:
      '800 m² de diseño interior con espacio polivalente, zona infantil, mediateca y sala de estudio. Iluminación natural optimizada y materiales sostenibles.',
    year: '2024',
    category: 'Equipamiento educativo',
    image: imageBiblioteca,
  },
  {
    title: 'Rehabilitación de mercado municipal en el Born',
    description:
      '1.200 m² de rehabilitación patrimonial con estructura metálica original preservada. Integración de criterios de sostenibilidad y eficiencia energética.',
    year: '2024',
    category: 'Patrimonio público',
    image: imagePolideportivo,
  },
]

const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'El equipo demostró un conocimiento profundo de los procedimientos de contratación pública. La propuesta técnica fue rigurosa y bien documentada, lo que nos permitió adjudicar el concurso con la máxima puntuación en criterios de calidad.',
    client: 'Departamento de Urbanismo, Ajuntament de Barcelona',
  },
  {
    quote:
      'Colaboramos con el colectivo en un concurso de proyectos para un equipamiento deportivo. Su capacidad para integrar interiorismo, paisajismo y arquitectura en una propuesta coherente fue determinante para ganar la licitación.',
    client: 'Estudio de arquitectura colaborador, Barcelona',
  },
  {
    quote:
      'Colaboramos con el colectivo en una licitación pública para un centro escolar internacional en Barcelona. Su experiencia en procedimientos de contratación pública española y documentación bilingüe hizo que el proceso fuera extraordinariamente fluido.',
    client: 'International School Foundation, Barcelona',
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
    question: '¿Qué es una licitación pública de arquitectura?',
    schemaAnswer:
      'Una licitación pública de arquitectura es un procedimiento regulado por la Ley 9/2017 de Contratos del Sector Público (LCSP) mediante el cual una administración pública (Ajuntament, Generalitat, Diputació, AMB) selecciona a un equipo de arquitectos para desarrollar un proyecto de edificación o urbanismo. Los tipos de procedimientos incluyen: abierto, restringido, negociado, concurso de proyectos y diálogo competitivo.',
    answer: (
      <>
        <p>
          Una licitación pública de arquitectura es un procedimiento regulado
          por la{' '}
          <strong className="font-semibold text-neutral-950">
            Ley 9/2017 de Contratos del Sector Público (LCSP)
          </strong>{' '}
          mediante el cual una administración pública (Ajuntament, Generalitat,
          Diputació, AMB) selecciona a un equipo de arquitectos para desarrollar
          un proyecto de edificación o urbanismo.
        </p>
        <p>
          Los tipos de procedimientos incluyen:{' '}
          <strong className="font-semibold text-neutral-950">
            abierto, restringido, negociado, concurso de proyectos
          </strong>{' '}
          y diálogo competitivo.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Qué tipos de procedimientos de contratación pública existen en España?',
    schemaAnswer:
      'Los principales procedimientos de contratación pública en España son: Procedimiento abierto (cualquier empresa puede presentar oferta), Procedimiento restringido (preselección de candidatos por solvencia), Negociado sin publicidad (contratos menores o MAPA), Concurso de proyectos (selección por calidad del diseño, habitual en arquitectura), Diálogo competitivo (para proyectos de alta complejidad técnica). El concurso de proyectos es el más frecuente para servicios de arquitectura, ya que permite evaluar la calidad técnica y artística de las propuestas.',
    answer: (
      <>
        <p>Los principales procedimientos de contratación pública en España son:</p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Procedimiento abierto
          </strong>{' '}
          (cualquier empresa puede presentar oferta),{' '}
          <strong className="font-semibold text-neutral-950">
            Procedimiento restringido
          </strong>{' '}
          (preselección de candidatos por solvencia),{' '}
          <strong className="font-semibold text-neutral-950">
            Negociado sin publicidad
          </strong>{' '}
          (contratos menores o MAPA),{' '}
          <strong className="font-semibold text-neutral-950">
            Concurso de proyectos
          </strong>{' '}
          (selección por calidad del diseño) y{' '}
          <strong className="font-semibold text-neutral-950">
            Diálogo competitivo
          </strong>{' '}
          (proyectos de alta complejidad técnica).
        </p>
        <p>
          El concurso de proyectos es el más frecuente para servicios de
          arquitectura, ya que permite evaluar la calidad técnica y artística de
          las propuestas.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Dónde se publican las licitaciones de arquitectura en Barcelona?',
    schemaAnswer:
      'Las licitaciones de arquitectura en Barcelona se publican en varias plataformas oficiales: PSCP (Plataforma de Serveis de Contractació Pública de la Generalitat de Catalunya), PLACSP (Plataforma de Contratación del Sector Público del Estado), Portal de contractació de l\'Ajuntament de Barcelona, y BIMSA (Barcelona d\'Infraestructures Municipals) para proyectos de infraestructura municipal. También se publican en el DOUE (Diario Oficial de la Unión Europea) cuando superan los umbrales comunitarios.',
    answer: (
      <>
        <p>
          Las licitaciones de arquitectura en Barcelona se publican en varias
          plataformas oficiales:
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">PSCP</strong>{' '}
          (Plataforma de Serveis de Contractació Pública de la Generalitat de
          Catalunya),{' '}
          <strong className="font-semibold text-neutral-950">PLACSP</strong>{' '}
          (Plataforma de Contratación del Sector Público del Estado), el{' '}
          <strong className="font-semibold text-neutral-950">
            Portal de contractació de l&apos;Ajuntament de Barcelona
          </strong>
          , y{' '}
          <strong className="font-semibold text-neutral-950">BIMSA</strong>{' '}
          (Barcelona d&apos;Infraestructures Municipals) para proyectos de
          infraestructura municipal.
        </p>
        <p>
          También se publican en el DOUE (Diario Oficial de la Unión Europea)
          cuando superan los umbrales comunitarios.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Qué es la Ley de Calidad de la Arquitectura y cómo afecta a las licitaciones?',
    schemaAnswer:
      'La Ley 9/2022 de Calidad de la Arquitectura establece que en las licitaciones públicas de servicios de arquitectura, los criterios de calidad técnica deben representar al menos el 51 % de la puntuación total, frente a un máximo del 49 % para el precio. Esto significa que la administración pública debe valorar prioritariamente la calidad del proyecto arquitectónico, la experiencia del equipo, la sostenibilidad y la integración urbana, por encima del precio más bajo. Es un avance fundamental para garantizar la calidad de la arquitectura pública en España.',
    answer: (
      <>
        <p>
          La{' '}
          <strong className="font-semibold text-neutral-950">
            Ley 9/2022 de Calidad de la Arquitectura
          </strong>{' '}
          establece que en las licitaciones públicas de servicios de
          arquitectura, los criterios de calidad técnica deben representar al
          menos el{' '}
          <strong className="font-semibold text-neutral-950">
            51&nbsp;% de la puntuación total
          </strong>
          , frente a un máximo del 49&nbsp;% para el precio.
        </p>
        <p>
          Esto significa que la administración pública debe valorar
          prioritariamente la calidad del proyecto arquitectónico, la experiencia
          del equipo, la sostenibilidad y la integración urbana, por encima del
          precio más bajo.
        </p>
        <p>
          Es un avance fundamental para garantizar la calidad de la arquitectura
          pública en España.
        </p>
      </>
    ),
  },
  {
    question:
      '¿Podéis colaborar con otras agencias de arquitectura en una licitación?',
    schemaAnswer:
      'Sí, nuestro colectivo colabora habitualmente con otros estudios de arquitectura en licitaciones públicas, ya sea como parte de una UTE (Unión Temporal de Empresas) o como especialistas en interiorismo, paisajismo o diseño de espacios dentro de un equipo pluridisciplinar. La LCSP permite la participación en UTE sin necesidad de constitución previa, lo que facilita la formación de equipos a medida según los requisitos de cada pliego. Contacta con nosotros para explorar posibilidades de colaboración.',
    answer: (
      <>
        <p>
          Sí, nuestro colectivo colabora habitualmente con otros estudios de
          arquitectura en licitaciones públicas, ya sea como parte de una{' '}
          <strong className="font-semibold text-neutral-950">
            UTE (Unión Temporal de Empresas)
          </strong>{' '}
          o como especialistas en interiorismo, paisajismo o diseño de espacios
          dentro de un equipo pluridisciplinar.
        </p>
        <p>
          La LCSP permite la participación en UTE sin necesidad de constitución
          previa, lo que facilita la formación de equipos a medida según los
          requisitos de cada pliego.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Contacta con nosotros
          </Link>{' '}
          para explorar posibilidades de colaboración.
        </p>
      </>
    ),
  },
  {
    question: '¿En qué zona geográfica intervenís?',
    schemaAnswer:
      "Intervenimos en licitaciones públicas en Barcelona ciudad, área metropolitana y Cataluña. Trabajamos con las principales instituciones públicas: Ajuntament de Barcelona, Generalitat de Catalunya, Diputació de Barcelona, AMB (Àrea Metropolitana de Barcelona), BIMSA y otros organismos públicos. También participamos en concursos de ámbito estatal cuando el proyecto se ubica en Cataluña. Contacta con nosotros para solicitar información sobre nuestra disponibilidad.",
    answer: (
      <>
        <p>
          Intervenimos en licitaciones públicas en{' '}
          <strong className="font-semibold text-neutral-950">
            Barcelona ciudad, área metropolitana y Cataluña
          </strong>
          .
        </p>
        <p>
          Trabajamos con las principales instituciones públicas:{' '}
          <strong className="font-semibold text-neutral-950">
            Ajuntament de Barcelona
          </strong>
          ,{' '}
          <strong className="font-semibold text-neutral-950">
            Generalitat de Catalunya
          </strong>
          , Diputació de Barcelona,{' '}
          <strong className="font-semibold text-neutral-950">
            AMB (Àrea Metropolitana de Barcelona)
          </strong>
          , BIMSA y otros organismos públicos.
        </p>
        <p>
          También participamos en concursos de ámbito estatal cuando el proyecto
          se ubica en Cataluña.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Contacta con nosotros
          </Link>{' '}
          para solicitar información sobre nuestra disponibilidad.
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
          name: 'Licitaciones de arquitectura',
          item: 'https://www.interioristabarcelona.com/licitaciones-arquitectura/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id':
        'https://www.interioristabarcelona.com/licitaciones-arquitectura/#service',
      name: 'Licitaciones de arquitectura en Barcelona',
      description:
        'Servicio de arquitectura e interiorismo para licitaciones públicas en Barcelona: concursos de proyectos, equipamientos públicos y contratación pública (LCSP).',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      serviceType: 'Contratación pública de arquitectura',
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
          'https://www.interioristabarcelona.com/licitaciones-arquitectura/#service',
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
    'Licitaciones de Arquitectura en Barcelona | Concursos Públicos 2026',
  description:
    'Estudio de arquitectura e interiorismo para licitaciones públicas en Barcelona. Concursos de proyectos, equipamientos públicos y contratación pública (LCSP). Presupuesto gratuito.',
}

export default function LicitacionesArquitecturaPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Nuestros servicios"
        title="Licitaciones de arquitectura en Barcelona"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Concursos públicos, equipamientos y contratación pública
        </p>
        <p className="mt-6">
          Nuestro colectivo multidisciplinar — arquitectos colegiados en el
          COAC, interioristas y paisajistas — interviene en licitaciones
          públicas de arquitectura en Barcelona y Cataluña. Experiencia en
          procedimientos regulados por la{' '}
          <strong className="font-semibold text-neutral-950">
            LCSP (Ley de Contratos del Sector Público)
          </strong>{' '}
          y la{' '}
          <strong className="font-semibold text-neutral-950">
            Ley de Calidad de la Arquitectura
          </strong>
          . Barcelona, Capital Mundial de la Arquitectura 2026 (UNESCO-UIA),
          impulsa una nueva generación de equipamientos públicos de calidad.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. ¿Por qué confiar en nuestro colectivo? */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué confiar en nuestro colectivo para una licitación pública?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Un equipo pluridisciplinar con experiencia en contratación pública,
          preparado para responder a los requisitos más exigentes de los pliegos
          de condiciones.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Equipo multidisciplinar colegiado">
            Arquitectos inscritos en el COAC (Col·legi d&apos;Arquitectes de
            Catalunya), interioristas y paisajistas con seguro de
            responsabilidad civil profesional.
          </GridListItem>
          <GridListItem title="Experiencia en contratación pública">
            Procedimientos abiertos, restringidos, concursos de proyectos y
            contratos menores (MAPA). Conocimiento de las plataformas PSCP y
            PLACSP.
          </GridListItem>
          <GridListItem title="Conocimiento normativo">
            Dominio de la LCSP (Ley 9/2017), la Ley de Calidad de la
            Arquitectura (Ley 9/2022) y los criterios de calidad técnica
            ≥51&nbsp;% frente al precio.
          </GridListItem>
          <GridListItem title="Red de colaboradores técnicos">
            Ingenierías de estructuras, instalaciones, acústica y eficiencia
            energética. Empresas constructoras de confianza para ejecución de
            obra pública.
          </GridListItem>
          <GridListItem title="Sostenibilidad y eficiencia energética">
            Materiales eco-responsables, integración de criterios de
            sostenibilidad, fondos Next Generation EU y certificación energética
            de edificios públicos.
          </GridListItem>
          <GridListItem title="Patrimonio y rehabilitación">
            Experiencia en edificios catalogados, rehabilitación patrimonial
            respetuosa y adaptación de construcciones históricas a nuevos usos
            públicos.
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. Nuestra intervención */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Nuestra intervención en licitaciones públicas en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Para cada licitación, constituimos un{' '}
          <strong className="font-semibold text-neutral-950">
            equipo a medida
          </strong>{' '}
          según los requisitos del pliego: arquitectos, interioristas,
          paisajistas e ingenieros especializados. Nuestro modelo de colectivo
          permite responder a proyectos de distinta escala y complejidad, desde
          centros cívicos de barrio hasta grandes equipamientos metropolitanos.
        </p>
      </SectionIntro>

      {/* 4. Proceso en 3 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Análisis del pliego y estrategia de propuesta"
          image={{ src: imageAyuntamiento }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Análisis exhaustivo del{' '}
              <strong className="font-semibold text-neutral-950">
                pliego de cláusulas administrativas
              </strong>{' '}
              y del{' '}
              <strong className="font-semibold text-neutral-950">
                pliego de prescripciones técnicas
              </strong>{' '}
              para identificar los requisitos de solvencia, los criterios de
              adjudicación y las condiciones de ejecución.
            </p>
            <p>
              Evaluación de los criterios de adjudicación según la{' '}
              <strong className="font-semibold text-neutral-950">
                Ley de Calidad de la Arquitectura
              </strong>
              : calidad técnica ≥51&nbsp;%, sostenibilidad, integración urbana y
              experiencia del equipo.
            </p>
            <p>
              Estudio de viabilidad y estimación de los recursos necesarios:
              equipo técnico, plazos de elaboración y coste de preparación de la
              propuesta.
            </p>
            <p>
              Constitución del equipo de proyecto según los requisitos del
              pliego: arquitectos, interioristas, paisajistas, ingenierías y
              consultores especializados.
            </p>
          </div>
        </Section>

        <Section
          title="Redacción del proyecto y documentación técnica"
          image={{ src: imageColegio, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Desarrollo de la{' '}
              <strong className="font-semibold text-neutral-950">
                propuesta arquitectónica
              </strong>
              , interiorista y paisajística adaptada a los requisitos funcionales
              y estéticos del programa.
            </p>
            <p>
              Redacción de la{' '}
              <strong className="font-semibold text-neutral-950">
                memoria técnica
              </strong>
              , planos, presupuesto detallado y planificación de ejecución según
              las exigencias del pliego.
            </p>
            <p>
              Integración de criterios de{' '}
              <strong className="font-semibold text-neutral-950">
                sostenibilidad y eficiencia energética
              </strong>
              : materiales eco-responsables, gestión del agua, iluminación
              natural y certificación energética.
            </p>
            <p>
              Preparación de la{' '}
              <strong className="font-semibold text-neutral-950">
                documentación administrativa
              </strong>
              : acreditación de solvencia técnica, clasificación empresarial,
              declaración de medios y referencias de proyectos anteriores.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Memoria y planos">
              Memoria descriptiva, justificativa y constructiva. Planos de
              planta, alzados, secciones y detalles constructivos.
            </ListItem>
            <ListItem title="Presupuesto y planificación">
              Mediciones, cuadro de precios, presupuesto por capítulos y
              cronograma de ejecución.
            </ListItem>
            <ListItem title="Documentación administrativa">
              Solvencia técnica, clasificación empresarial, seguros y
              referencias de proyectos ejecutados.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Ejecución de obra y dirección facultativa"
          image={{ src: imageBiblioteca, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              <strong className="font-semibold text-neutral-950">
                Dirección de obra
              </strong>{' '}
              según las condiciones del contrato público: control de la
              ejecución, verificación de la conformidad con el proyecto y gestión
              de modificaciones contractuales.
            </p>
            <p>
              Control de{' '}
              <strong className="font-semibold text-neutral-950">
                calidad, plazos y presupuesto
              </strong>
              : visitas periódicas al chantier, reuniones de coordinación y
              seguimiento económico del contrato.
            </p>
            <p>
              Coordinación de gremios y subcontratas: gestión de la planificación
              de ejecución, resolución de incidencias y control de la seguridad y
              salud en obra.
            </p>
            <p>
              <strong className="font-semibold text-neutral-950">
                Certificaciones de obra
              </strong>
              , acta de recepción provisional y definitiva, documentación final
              as-built y liquidación del contrato.
            </p>
          </div>
        </Section>
      </div>

      {/* 5. Equipamientos públicos */}
      <SectionIntro
        eyebrow="Equipamientos"
        title="Equipamientos públicos en los que intervenimos"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Nuestro colectivo tiene experiencia en el diseño y ejecución de
          distintos tipos de equipamientos públicos en Barcelona y área
          metropolitana.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Educación">
            Escuelas, guarderías, institutos y campus universitarios. Diseño de
            espacios de aprendizaje funcionales, inclusivos y sostenibles.
          </GridListItem>
          <GridListItem title="Salud">
            CAP (Centres d&apos;Atenció Primària), hospitales, residencias y
            centros de día. Interiorismo adaptado a las normativas sanitarias y
            de accesibilidad.
          </GridListItem>
          <GridListItem title="Cultura">
            Bibliotecas, centros cívicos, museos, teatros y oficinas de turismo.
            Espacios polivalentes para la difusión cultural y comunitaria.
          </GridListItem>
          <GridListItem title="Deporte">
            Polideportivos, piscinas municipales y centros deportivos.
            Instalaciones eficientes con materiales resistentes y sostenibles.
          </GridListItem>
          <GridListItem title="Administración">
            Sedes municipales, comisarías, juzgados y centros de servicios
            sociales. Espacios de atención ciudadana accesibles y funcionales.
          </GridListItem>
          <GridListItem title="Espacio público">
            Plazas, parques, Superilles, zonas verdes y mercados municipales.
            Paisajismo urbano e integración medioambiental.
          </GridListItem>
        </GridList>
      </Container>

      {/* 6. Tarifas */}
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <PricingBlock
          id="tarifas-licitaciones-arquitectura"
          name="Tarifas para licitaciones de arquitectura"
          description="Servicio integral para concursos y licitaciones públicas de arquitectura en Barcelona. Desde el análisis del pliego hasta la dirección de obra, adaptamos nuestro equipo a cada proyecto."
          href="/contacto/"
          ctaLabel="Solicitar presupuesto gratuito"
          image={{ src: imagePolideportivo, shape: 0 }}
          showCounter={false}
          tiers={[
            {
              name: 'Asesoramiento en licitación',
              price: 'Consultar',
              description:
                'Análisis del pliego de condiciones, evaluación de criterios de adjudicación, estrategia de propuesta y preparación de la documentación de solvencia.',
            },
            {
              name: 'Proyecto de concurso',
              price: 'Consultar',
              description:
                'Propuesta completa: memoria técnica, planos, presupuesto, planificación y documentación administrativa. Equipo a medida según requisitos del pliego.',
              highlighted: true,
            },
            {
              name: 'Dirección de obra pública',
              price: 'Consultar',
              description:
                'Ejecución, control de calidad, certificaciones de obra, acta de recepción y documentación final as-built. Seguimiento económico del contrato.',
            },
          ]}
        />
      </div>

      {/* 7. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre licitaciones de arquitectura"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre nuestros servicios de
          arquitectura para licitaciones públicas en Barcelona.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <FAQAccordion items={faqItems} />
        </FadeIn>
      </Container>

      {/* 8. Contact */}
      <ContactSection />

      {/* 9. Proyectos destacados */}
      <ProjectShowcase
        title="Proyectos de equipamientos públicos en Barcelona"
        subtitle="Descubre algunos proyectos de arquitectura pública realizados por los miembros del colectivo."
        projects={serviceProjects}
      />

      {/* 10. Testimonios */}
      <TestimonialSlider
        className="mt-24 sm:mt-32 lg:mt-40"
        testimonials={serviceTestimonials}
      />
    </RootLayout>
  )
}
