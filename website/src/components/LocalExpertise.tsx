import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

const barrios = [
  { name: 'Eixample', href: '/interiorista-eixample/' },
  { name: 'Gràcia', href: '/interiorista-gracia/' },
  { name: 'El Born', href: '/interiorista-born/' },
  { name: 'Sarrià-Sant Gervasi', href: '/interiorista-sarria/' },
  { name: 'Poblenou', href: '/interiorista-poblenou/' },
]

const otrosBarrios = [
  'Les Corts',
  'Sant Andreu',
  'Sants-Montjuïc',
  'Horta-Guinardó',
  'Ciutat Vella',
]

const ciudades = [
  { name: 'Sant Cugat del Vallès', href: '/interiorista-sant-cugat/' },
  { name: 'Sabadell', href: '/interiorista-sabadell/' },
  { name: 'Terrassa', href: '/interiorista-terrassa/' },
  { name: 'Manresa', href: '/interiorista-manresa/' },
  { name: 'Sitges', href: '/interiorista-sitges/' },
  { name: 'Mataró', href: '/interiorista-mataro/' },
]

const otrasCiudades = [
  'Castelldefels',
  'Badalona',
  "L'Hospitalet de Llobregat",
  'Sant Just Desvern',
  'Esplugues de Llobregat',
  'Sant Joan Despí',
  'Gavà',
  'Vilanova i la Geltrú',
]

export function LocalExpertise() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <article className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            ¿Buscas un interiorista en Barcelona?
          </h2>

          <p className="mt-6 text-lg text-neutral-600">
            Nuestro colectivo reúne arquitectos de interiores, decoradores y
            diseñadores de espacios en Barcelona y sus alrededores. Cada
            profesional aporta su visión y especialidad para acompañarte en tu
            proyecto, sea cual sea su envergadura.
          </p>

          <h3 className="mt-12 font-display text-2xl font-semibold text-neutral-950">
            Especialistas en la renovación de pisos modernistas
          </h3>
          <p className="mt-4 text-base text-neutral-600">
            El Eixample y los barrios históricos de Barcelona albergan un
            patrimonio arquitectónico único: mosaicos hidráulicos, balcones de
            hierro forjado, techos altos con molduras y carpinterías de época.
            Estos pisos modernistas, a menudo centenarios, presentan
            distribuciones que no se adaptan al estilo de vida actual —
            instalaciones obsoletas, falta de luminosidad o aislamiento
            insuficiente. Nuestros interioristas están especializados en
            conservar el carácter patrimonial de estos inmuebles mientras los
            transforman en hogares modernos, funcionales y eficientes.
          </p>

          <h3 className="mt-12 font-display text-2xl font-semibold text-neutral-950">
            Nuestra experiencia en todo tipo de viviendas en Barcelona
          </h3>
          <p className="mt-4 text-base text-neutral-600">
            Más allá de los edificios modernistas, Barcelona cuenta con un
            extenso parque de viviendas construidas entre los años 60, 70 y 80
            en barrios como Les Corts, Sant Andreu o Sants. Estos pisos
            presentan distribuciones compartimentadas, materiales envejecidos y
            espacios de almacenamiento insuficientes. También trabajamos en
            áticos y penthouses contemporáneos, donde optimizamos la entrada de
            luz natural y el aprovechamiento de terrazas. Sea cual sea el tipo
            de vivienda, la mirada de un profesional del interiorismo marca la
            diferencia entre una reforma ordinaria y un proyecto que realmente
            transforma tu día a día.
          </p>

          <h3 className="mt-12 font-display text-2xl font-semibold text-neutral-950">
            Barrios de Barcelona donde intervenimos
          </h3>
          <p className="mt-4 text-base text-neutral-600">
            Nuestros profesionales conocen las particularidades de cada zona de
            Barcelona. Intervenimos en los principales barrios de la ciudad:
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
            {barrios.map((barrio) => (
              <li key={barrio.href}>
                <Link
                  href={barrio.href}
                  className="inline-block rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                >
                  {barrio.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-neutral-500">
            También trabajamos en {otrosBarrios.join(', ')} y otros barrios de
            Barcelona.
          </p>

          <h3 className="mt-12 font-display text-2xl font-semibold text-neutral-950">
            Ciudades cercanas a Barcelona
          </h3>
          <p className="mt-4 text-base text-neutral-600">
            Nuestro colectivo también interviene en las principales ciudades del
            área metropolitana de Barcelona y la comarca del Garraf:
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
            {ciudades.map((ciudad) => (
              <li key={ciudad.href}>
                <Link
                  href={ciudad.href}
                  className="inline-block rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                >
                  {ciudad.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-neutral-500">
            También trabajamos en {otrasCiudades.join(', ')} y otras
            localidades del área metropolitana.
          </p>
        </article>
      </FadeIn>
    </Container>
  )
}
