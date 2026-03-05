import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { members } from '@/lib/members'
import { CommitmentsAccordion } from './commitments-accordion'

const commitmentItems = [
  {
    title: 'Profesionales asegurados y titulados',
    content: (
      <>
        <p>
          Todos los miembros del colectivo son{' '}
          <strong className="font-semibold text-neutral-950">
            profesionales titulados y colegiados
          </strong>{' '}
          en los organismos oficiales de referencia en Cataluña:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <a
              href="https://www.arquitectes.cat"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              COAC
            </a>{' '}
            — Col&middot;legi d&apos;Arquitectes de Catalunya
          </li>
          <li>
            <a
              href="https://www.codic.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              CODIC
            </a>{' '}
            — Col&middot;legi Oficial de Decoradors i Dissenyadors
            d&apos;Interiors de Catalunya
          </li>
          <li>
            <a
              href="https://adp.cat"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              ADP
            </a>{' '}
            — Associacio de Dissenyadors Professionals
          </li>
        </ul>
        <p>
          Cada profesional dispone de un{' '}
          <strong className="font-semibold text-neutral-950">
            seguro de responsabilidad civil profesional
          </strong>{' '}
          vigente, garantizando la proteccion total de tu proyecto.
        </p>
      </>
    ),
  },
  {
    title: 'Serenidad y tranquilidad',
    content: (
      <>
        <p>
          Te acompanamos en{' '}
          <strong className="font-semibold text-neutral-950">
            todas las etapas de tu proyecto
          </strong>
          , desde la primera consulta hasta la entrega de llaves. Controlamos
          plazos, costes y calidad en cada fase.
        </p>
        <p>
          Gestionamos todos los aspectos legales y administrativos: licencias de
          obra del Ayuntamiento de Barcelona, normativa urbanistica del Plan
          General Metropolitano (PGM), permisos de comunidad de propietarios.
        </p>
        <p>
          Trabajamos exclusivamente con{' '}
          <strong className="font-semibold text-neutral-950">
            artesanos y gremios certificados
          </strong>
          , con los seguros de responsabilidad civil y decenal requeridos por la
          normativa vigente.
        </p>
      </>
    ),
  },
  {
    title: 'Creatividad e ingenio',
    content: (
      <>
        <p>
          Nuestros interioristas aportan{' '}
          <strong className="font-semibold text-neutral-950">
            soluciones innovadoras y personalizadas
          </strong>{' '}
          para cada proyecto, combinando las tendencias actuales del diseno con
          las particularidades arquitectonicas de Barcelona.
        </p>
        <p>
          Cada propuesta esta pensada para maximizar el potencial de tu espacio
          y{' '}
          <strong className="font-semibold text-neutral-950">
            anadir valor a tu bien inmobiliario
          </strong>
          , ya sea un piso modernista en el Eixample, un atico en Gracia o un
          loft en Poblenou.
        </p>
      </>
    ),
  },
  {
    title: 'Respeto de tu presupuesto',
    content: (
      <>
        <p>
          Ofrecemos una{' '}
          <strong className="font-semibold text-neutral-950">
            grilla tarifaria transparente
          </strong>{' '}
          desde la primera consulta: sabes exactamente lo que pagas y lo que
          recibes en cada etapa del proyecto.
        </p>
        <p>
          Gracias a nuestra red de proveedores y artesanos, negociamos{' '}
          <strong className="font-semibold text-neutral-950">
            tarifas preferenciales
          </strong>{' '}
          en materiales, mobiliario y mano de obra, trasladando el ahorro
          directamente a tu proyecto.
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
          name: 'Quiénes somos',
          item: 'https://www.interioristabarcelona.com/quienes-somos/',
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.interioristabarcelona.com/#organization',
      name: 'Interiorista Barcelona',
      url: 'https://www.interioristabarcelona.com',
      description:
        'Colectivo de mas de 25 interioristas, arquitectos de interior, decoradores y paisajistas titulados y asegurados en Barcelona.',
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
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        minValue: 25,
      },
    },
    {
      '@type': 'AboutPage',
      name: 'Quiénes somos — Interioristas en Barcelona',
      url: 'https://www.interioristabarcelona.com/quienes-somos/',
      about: {
        '@id': 'https://www.interioristabarcelona.com/#organization',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Quiénes somos — Interioristas en Barcelona',
  description:
    'Conoce al equipo del colectivo Interiorista Barcelona: mas de 25 arquitectos, interioristas, decoradores y paisajistas titulados y asegurados en Barcelona.',
}

export default function QuienesSomosPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro eyebrow="Nuestro colectivo" title="¿Quienes somos?">
        <p>
          Interiorista. es un{' '}
          <strong className="font-semibold text-neutral-950">
            colectivo a escala humana
          </strong>{' '}
          que reune a mas de 45 profesionales del diseno de interiores que
          opera en 12 aglomeraciones en España: arquitectos, interioristas,
          decoradores y paisajistas.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Cada miembro del colectivo es un profesional independiente, titulado
            y asegurado, que comparte una misma vision: ofrecer un{' '}
            <strong className="font-semibold text-neutral-950">
              diseno 100% personalizado
            </strong>
            , adaptado a tu estilo de vida, tu presupuesto y las
            particularidades arquitectonicas de Barcelona.
          </p>
          <p>
            Desde pisos modernistas en el Eixample hasta aticos con terraza en
            Gracia, pasando por lofts industriales en Poblenou, nuestros
            interioristas conocen a fondo la ciudad y sus barrios para
            transformar cada espacio en un lugar unico.
          </p>
        </div>
      </PageIntro>

      {/* 2. Stats */}
      <Container className="mt-16">
        <StatList>
          <StatListItem value="45+" label="Profesionales" />
          <StatListItem value="15" label="Anos experiencia media" />
          <StatListItem value="150+" label="Proyectos realizados" />
          <StatListItem value="12" label="Aglomeraciones en España" />
        </StatList>
      </Container>

      {/* 3. Una gestion integral */}
      <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
          eyebrow="Proceso"
          title="Una gestion integral de tu proyecto"
          invert
        >
          <p>
            Desde la primera toma de contacto hasta la entrega de llaves, te
            acompanamos en cada etapa con un unico interlocutor dedicado.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <FadeInStagger>
            <ul
              role="list"
              className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2"
            >
              <GridListItem title="Solicitud de proyecto" invert>
                Envias tu solicitud a traves de nuestro formulario con los
                detalles de tu proyecto: superficie, tipo de vivienda,
                presupuesto estimado y ubicacion en Barcelona.
              </GridListItem>
              <GridListItem title="Cita telefonica" invert>
                Un coordinador del colectivo te contacta para comprender tus
                necesidades y seleccionar al interiorista mas adecuado para tu
                proyecto.
              </GridListItem>
              <GridListItem title="Cita de asesoramiento in situ" invert>
                Tu interiorista te visita en el lugar del proyecto para evaluar
                el espacio, escuchar tus deseos y proponerte las primeras ideas
                de diseno.
              </GridListItem>
              <GridListItem title="Estudio y seguimiento de la obra" invert>
                Desarrollo completo del proyecto, coordinacion de gremios y
                seguimiento de obra hasta la entrega final, con control de
                plazos y presupuesto.
              </GridListItem>
            </ul>
          </FadeInStagger>
        </Container>
      </div>

      {/* 4. Nuestros compromisos */}
      <SectionIntro
        eyebrow="Compromisos"
        title="Nuestros compromisos con cada cliente"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Los valores que guian a cada miembro del colectivo en su trabajo
          diario.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <CommitmentsAccordion items={commitmentItems} />
        </FadeIn>
      </Container>

      {/* 5. Miembros del colectivo */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeInStagger>
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Miembros del colectivo
            </h2>
          </FadeIn>
          <ul
            role="list"
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
          >
            {members.map((member) => (
              <li key={member.slug}>
                <FadeIn>
                  <Link
                    href={member.href}
                    className="group relative block overflow-hidden rounded-3xl bg-neutral-100"
                  >
                    <Image
                      alt={`${member.name} - ${member.professionLabel} en Barcelona`}
                      src={member.image}
                      className="h-96 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                      <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                        {member.name}
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        {member.professionLabel}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>

      {/* 6. Contact */}
      <ContactSection />
    </RootLayout>
  )
}
