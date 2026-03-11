import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { members, getMemberBySlug } from '@/lib/members'
import { services } from '@/lib/services'

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }))
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const member = getMemberBySlug(slug)
    if (!member) return {}

    const title = `${member.name} — ${member.professionLabel} en Barcelona`
    const description = `${member.name}, ${member.professionLabel.toLowerCase()} del colectivo Interiorista Barcelona. ${member.yearsExperience} años de experiencia. Formación: ${member.training}. Barrios: ${member.neighborhoods.join(', ')}.`

    return {
      title,
      description,
      openGraph: {
        title,
        description,
      },
    }
  })
}

function getServicesByIds(ids: string[]) {
  return ids
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is (typeof services)[number] => s !== undefined)
}

function buildSchemaOrg(member: NonNullable<ReturnType<typeof getMemberBySlug>>) {
  const memberServices = getServicesByIds(member.serviceIds)

  return {
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
          {
            '@type': 'ListItem',
            position: 3,
            name: member.name,
            item: `https://www.interioristabarcelona.com${member.href}`,
          },
        ],
      },
      {
        '@type': 'Person',
        name: member.name,
        jobTitle: member.professionLabel,
        worksFor: {
          '@type': 'Organization',
          '@id': 'https://www.interioristabarcelona.com/#organization',
          name: 'Interiorista Barcelona',
        },
        workLocation: {
          '@type': 'City',
          name: 'Barcelona',
        },
        knowsAbout: memberServices.map((s) => s.name),
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: member.training,
        },
        url: `https://www.interioristabarcelona.com${member.href}`,
      },
    ],
  }
}

const linkClass =
  'font-semibold text-neutral-950 underline hover:text-neutral-700'

function MemberBio({
  member,
}: {
  member: NonNullable<ReturnType<typeof getMemberBySlug>>
}) {
  const memberServices = getServicesByIds(member.serviceIds)

  switch (member.slug) {
    case 'marta-arquitecta-interiores-barcelona':
      return (
        <>
          <p>
            Formada en el Politecnico di Milano,{' '}
            <strong className="font-semibold text-neutral-950">
              {member.name}
            </strong>{' '}
            combina la rigurosidad técnica italiana con la sensibilidad
            mediterránea. Con {member.yearsExperience} años de experiencia,
            Marta es una referente del{' '}
            <Link href="/diseno-interiores/" className={linkClass}>
              interiorismo
            </Link>{' '}
            en Barcelona.
          </p>
          <p>
            Especializada en la transformación integral de pisos modernistas en{' '}
            <strong className="font-semibold text-neutral-950">
              el Eixample
            </strong>{' '}
            y viviendas con carácter en{' '}
            <strong className="font-semibold text-neutral-950">Gràcia</strong>,
            su enfoque une interiorismo estructural y{' '}
            <Link href="/decoracion-interiores/" className={linkClass}>
              decoración
            </Link>{' '}
            contemporánea. Su experiencia en{' '}
            <Link href="/rehabilitacion-energetica/" className={linkClass}>
              rehabilitación energética
            </Link>{' '}
            le permite optimizar el confort térmico sin comprometer la estética
            del espacio.
          </p>
          <p>
            Su formación internacional en Italia le aporta una perspectiva única
            sobre el uso de materiales nobles, la gestión de la luz natural y la
            creación de ambientes que respiran armonía.
          </p>
        </>
      )
    case 'jordi-arquitecto-barcelona':
      return (
        <>
          <p>
            Titulado por la ETSAB y colegiado en el COAC,{' '}
            <strong className="font-semibold text-neutral-950">
              {member.name}
            </strong>{' '}
            es{' '}
            <Link href="/arquitecto/" className={linkClass}>
              arquitecto
            </Link>{' '}
            con más de {member.yearsExperience} años de experiencia en proyectos
            residenciales y{' '}
            <Link href="/licitaciones-arquitectura/" className={linkClass}>
              licitaciones públicas
            </Link>{' '}
            en Barcelona.
          </p>
          <p>
            Ha dirigido{' '}
            <Link href="/ampliacion-vivienda/" className={linkClass}>
              ampliaciones de vivienda
            </Link>{' '}
            en{' '}
            <strong className="font-semibold text-neutral-950">
              el Eixample
            </strong>{' '}
            y rehabilitaciones de edificios patrimoniales en{' '}
            <strong className="font-semibold text-neutral-950">el Born</strong>.
            Su dominio del marco normativo catalán y su experiencia en concursos
            de arquitectura le permiten abordar proyectos de cualquier
            envergadura.
          </p>
          <p>
            Jordi aporta una visión pragmática y rigurosa, esencial para
            garantizar que cada proyecto cumple con las normativas vigentes y se
            ejecuta dentro de los plazos y presupuestos establecidos.
          </p>
        </>
      )
    case 'carla-decoradora-barcelona':
      return (
        <>
          <p>
            Graduada del Istituto Marangoni de Milán,{' '}
            <strong className="font-semibold text-neutral-950">
              {member.name}
            </strong>{' '}
            aporta una visión cosmopolita a cada proyecto de{' '}
            <Link href="/decoracion-interiores/" className={linkClass}>
              decoración
            </Link>
            . Con {member.yearsExperience} años de experiencia, su ojo para el
            detalle transforma cada espacio en un lugar que enamora a primera
            vista.
          </p>
          <p>
            Especializada en{' '}
            <Link href="/home-staging/" className={linkClass}>
              home staging
            </Link>{' '}
            y{' '}
            <Link href="/asesoria-compra-vivienda/" className={linkClass}>
              asesoría de compra de vivienda
            </Link>
            , trabaja principalmente en{' '}
            <strong className="font-semibold text-neutral-950">el Born</strong>{' '}
            y{' '}
            <strong className="font-semibold text-neutral-950">
              la Barceloneta
            </strong>
            , donde su conocimiento del mercado inmobiliario local es un activo
            clave para sus clientes.
          </p>
          <p>
            Su formación italiana en las artes decorativas le confiere una
            sensibilidad estética singular, que se refleja en cada selección de
            mobiliario, textil e iluminación.
          </p>
        </>
      )
    case 'andreu-arquitecto-interiores-barcelona':
      return (
        <>
          <p>
            Formado en Central Saint Martins de Londres,{' '}
            <strong className="font-semibold text-neutral-950">
              {member.name}
            </strong>{' '}
            fusiona el diseño conceptual británico con la funcionalidad del{' '}
            <Link href="/diseno-interiores/" className={linkClass}>
              interiorismo
            </Link>{' '}
            barcelonés. Con {member.yearsExperience} años de experiencia, es un
            referente en la transformación de espacios profesionales.
          </p>
          <p>
            Especializado en{' '}
            <Link href="/reforma-oficinas/" className={linkClass}>
              reforma de oficinas
            </Link>{' '}
            e{' '}
            <Link href="/interiorismo-comercial/" className={linkClass}>
              interiorismo comercial
            </Link>{' '}
            en{' '}
            <strong className="font-semibold text-neutral-950">Poblenou</strong>{' '}
            y{' '}
            <strong className="font-semibold text-neutral-950">
              Sant Martí
            </strong>
            , ha liderado proyectos para startups, restaurantes y coworkings en
            el distrito de la innovación de Barcelona.
          </p>
          <p>
            Su paso por Londres le ha inculcado un enfoque centrado en la
            experiencia del usuario, creando espacios de trabajo que potencian
            la productividad y el bienestar de los equipos.
          </p>
        </>
      )
    case 'nuria-arquitecta-interiores-barcelona':
      return (
        <>
          <p>
            Con formación en la Arkitektskolen Aarhus de Dinamarca,{' '}
            <strong className="font-semibold text-neutral-950">
              {member.name}
            </strong>{' '}
            integra los principios del diseño escandinavo —luz natural,
            materiales nobles, funcionalidad— en sus proyectos de{' '}
            <Link href="/diseno-interiores/" className={linkClass}>
              interiorismo
            </Link>{' '}
            en Barcelona.
          </p>
          <p>
            Especializada en{' '}
            <Link href="/ampliacion-vivienda/" className={linkClass}>
              ampliación de vivienda
            </Link>{' '}
            y{' '}
            <Link href="/compra-sobre-plano/" className={linkClass}>
              compra sobre plano
            </Link>{' '}
            en{' '}
            <strong className="font-semibold text-neutral-950">Sarrià</strong> y{' '}
            <strong className="font-semibold text-neutral-950">
              Les Corts
            </strong>
            , acompaña a sus clientes desde la selección del inmueble hasta la
            entrega final de un hogar luminoso y armonioso.
          </p>
          <p>
            Sus {member.yearsExperience} años de experiencia y su sensibilidad
            nórdica se traducen en interiores donde cada elemento tiene una
            función y cada espacio invita al bienestar.
          </p>
        </>
      )
    case 'marc-decorador-barcelona':
      return (
        <>
          <p>
            Formado en Christie&apos;s Education de Londres,{' '}
            <strong className="font-semibold text-neutral-950">
              {member.name}
            </strong>{' '}
            aporta un conocimiento profundo del arte y el diseño de colecciones
            a sus proyectos de{' '}
            <Link href="/decoracion-interiores/" className={linkClass}>
              decoración
            </Link>
            .
          </p>
          <p>
            Activo en{' '}
            <strong className="font-semibold text-neutral-950">
              Sant Andreu
            </strong>{' '}
            y{' '}
            <strong className="font-semibold text-neutral-950">Sants</strong>,
            se ha convertido en un referente del{' '}
            <Link href="/home-staging/" className={linkClass}>
              home staging
            </Link>{' '}
            en Barcelona, con un índice de venta superior al 90% en los
            inmuebles que prepara. Su experiencia en{' '}
            <Link href="/interiorismo-comercial/" className={linkClass}>
              interiorismo comercial
            </Link>{' '}
            le permite también transformar locales y boutiques con una identidad
            visual única.
          </p>
          <p>
            Con {member.yearsExperience} años de experiencia y una formación
            londinense en el mercado del arte, Marc sabe crear ambientes con
            personalidad y valor estético duradero.
          </p>
        </>
      )
    case 'laia-paisajista-barcelona':
      return (
        <>
          <p>
            Máster en Paisajismo por la UPC,{' '}
            <strong className="font-semibold text-neutral-950">
              {member.name}
            </strong>{' '}
            diseña jardines, terrazas y espacios exteriores que dialogan con la
            arquitectura interior. Su doble competencia en{' '}
            <Link href="/paisajismo/" className={linkClass}>
              paisajismo
            </Link>{' '}
            e{' '}
            <Link href="/diseno-interiores/" className={linkClass}>
              interiorismo
            </Link>{' '}
            le permite crear proyectos donde interior y exterior forman un todo
            coherente.
          </p>
          <p>
            Especializada en la{' '}
            <Link href="/reforma-masias/" className={linkClass}>
              reforma de masías
            </Link>{' '}
            catalanas, trabaja principalmente en{' '}
            <strong className="font-semibold text-neutral-950">Sarrià</strong> y{' '}
            <strong className="font-semibold text-neutral-950">
              Pedralbes
            </strong>
            , donde las propiedades con jardín requieren una visión paisajística
            integral.
          </p>
          <p>
            Con {member.yearsExperience} años de experiencia, Laia es la
            referente del colectivo para todos los proyectos que integran
            vegetación, agua y naturaleza en el diseño del hábitat.
          </p>
        </>
      )
    case 'pere-paisajista-barcelona':
      return (
        <>
          <p>
            Formado en Wageningen University de los Países Bajos,{' '}
            <strong className="font-semibold text-neutral-950">
              {member.name}
            </strong>{' '}
            aplica los principios del diseño paisajístico holandés
            —sostenibilidad, biodiversidad, gestión del agua— a los espacios
            urbanos de Barcelona.
          </p>
          <p>
            Activo en{' '}
            <strong className="font-semibold text-neutral-950">Poblenou</strong>{' '}
            y{' '}
            <strong className="font-semibold text-neutral-950">
              Sant Martí
            </strong>
            , combina{' '}
            <Link href="/paisajismo/" className={linkClass}>
              paisajismo
            </Link>{' '}
            con{' '}
            <Link href="/rehabilitacion-energetica/" className={linkClass}>
              rehabilitación energética
            </Link>{' '}
            para crear terrazas y azoteas verdes que mejoran la eficiencia del
            edificio. Su experiencia en{' '}
            <Link href="/interiorismo-comercial/" className={linkClass}>
              interiorismo comercial
            </Link>{' '}
            incluye el diseño de espacios verdes para restaurantes y hoteles.
          </p>
          <p>
            Sus {member.yearsExperience} años de experiencia y su formación
            holandesa hacen de Pere un experto en soluciones paisajísticas
            urbanas sostenibles y de bajo mantenimiento.
          </p>
        </>
      )
    case 'elena-arquitecta-barcelona':
      return (
        <>
          <p>
            Graduada de la ETH Zürich,{' '}
            <strong className="font-semibold text-neutral-950">
              {member.name}
            </strong>{' '}
            aporta la precisión suiza y una visión vanguardista de la
            arquitectura sostenible. Como{' '}
            <Link href="/arquitecto/" className={linkClass}>
              arquitecta
            </Link>
            , cuenta con {member.yearsExperience} años de experiencia en
            proyectos donde la exigencia técnica se combina con la creatividad.
          </p>
          <p>
            Especializada en{' '}
            <Link href="/rehabilitacion-energetica/" className={linkClass}>
              rehabilitación energética
            </Link>{' '}
            e{' '}
            <Link href="/interiorismo-accesible/" className={linkClass}>
              interiorismo accesible
            </Link>
            , trabaja en{' '}
            <strong className="font-semibold text-neutral-950">Gràcia</strong> y{' '}
            <strong className="font-semibold text-neutral-950">
              Sant Gervasi
            </strong>{' '}
            con un compromiso firme: crear espacios bellos, eficientes y
            accesibles para todos.
          </p>
          <p>
            Su dominio de la normativa de accesibilidad y las certificaciones
            energéticas la convierte en una referente para proyectos que buscan
            el máximo rendimiento sin renunciar al diseño.
          </p>
        </>
      )
    default:
      return null
  }
}

export default async function MemberProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const member = getMemberBySlug(slug)

  if (!member) {
    notFound()
  }

  const memberServices = getServicesByIds(member.serviceIds)
  const schemaOrg = buildSchemaOrg(member)

  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro eyebrow={member.professionLabel} title={member.name}>
        <p>
          {member.yearsExperience} años de experiencia · Formación:{' '}
          {member.training} · Barrios: {member.neighborhoods.join(', ')}
        </p>
      </PageIntro>

      {/* 2. Photo + Bio */}
      <Container className="mt-16">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                src={member.image}
                alt={`${member.name} - ${member.professionLabel} en Barcelona`}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Sobre {member.name}
              </h2>
              <div className="mt-6 space-y-4 text-base text-neutral-600">
                <MemberBio member={member} />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* 3. Especialidades */}
      <SectionIntro
        eyebrow="Especialidades"
        title={`Servicios de ${member.name}`}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          {member.name} te acompaña en los siguientes servicios del colectivo.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {memberServices.map((service) => (
            <GridListItem key={service.id} title={service.shortName}>
              {service.description}.{' '}
              <Link href={service.href} className={linkClass}>
                Más información
              </Link>
            </GridListItem>
          ))}
        </GridList>
      </Container>

      {/* 4. Contact */}
      <ContactSection />
    </RootLayout>
  )
}
