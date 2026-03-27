import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { TestimonialSlider } from '@/components/TestimonialSlider'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Transformaciones reales
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => {
          const antesHref = caseStudy.href.replace(
            '/proyectos/',
            '/antes-y-despues/',
          )
          return (
            <FadeIn key={caseStudy.client}>
              <article>
                <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                  <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                      <Image
                        src={caseStudy.image.src}
                        alt={caseStudy.client}
                        className="aspect-[3/2] w-full rounded-xl object-cover"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                      <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                        {caseStudy.client}
                      </h3>
                    </div>
                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                      <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                        {caseStudy.service}
                      </p>
                      <p className="text-sm text-neutral-950 lg:mt-2">
                        <time dateTime={caseStudy.date}>
                          {formatDate(caseStudy.date)}
                        </time>
                      </p>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p className="font-display text-4xl font-medium text-neutral-950">
                      <Link href={antesHref}>{caseStudy.title}</Link>
                    </p>
                    <div className="mt-6 space-y-6 text-base text-neutral-600">
                      {caseStudy.summary.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="mt-8 flex">
                      <Button
                        href={antesHref}
                        aria-label={`Ver antes y después: ${caseStudy.client}`}
                      >
                        Ver antes y después
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          )
        })}
      </div>
    </Container>
  )
}

const testimonials = [
  {
    quote:
      'El cambio fue impresionante. Ver las fotos del antes y el después de nuestra reforma nos recuerda lo acertada que fue nuestra decisión. El piso pasó de oscuro y anticuado a luminoso y moderno.',
    client: 'Carlos y Ana M., reforma integral en Eixample',
  },
  {
    quote:
      'Cuando vemos cómo estaba el ático antes y cómo quedó después, no nos lo creemos. La interiorista supo ver el potencial de cada espacio y transformarlo por completo.',
    client: 'Laura G., proyecto de interiorismo en Sarrià',
  },
  {
    quote:
      'Nuestro restaurante era un local vacío sin personalidad. El equipo lo transformó en un espacio que nuestros clientes adoran. Las fotos del antes y después hablan por sí solas.',
    client: 'Marc R., interiorismo comercial en Poblenou',
  },
  {
    quote:
      'La casa era una ruina con mucho encanto pero inhabitable. Ahora es una vivienda que combina historia y comodidad. La diferencia entre el antes y el después es abismal.',
    client: 'Patricia y Jordi V., rehabilitación de casa en Gràcia',
  },
  {
    quote:
      'Las oficinas eran un espacio gris y sin vida. Después de la reforma, el equipo no quiere irse a casa. Ver la comparativa antes/después de cada zona es espectacular.',
    client: 'Marta L., reforma de oficinas en Sant Martí',
  },
]

export const metadata: Metadata = {
  title:
    'Antes y Después de Reformas en Barcelona | Interiorista Barcelona',
  description:
    'Descubre el antes y después de nuestras reformas e interiorismo en Barcelona. Más de 10 transformaciones reales de pisos, casas, oficinas y locales comerciales con fotos comparativas.',
  openGraph: {
    title:
      'Antes y Después de Reformas en Barcelona | Interiorista Barcelona',
    description:
      'Descubre el antes y después de nuestras reformas e interiorismo en Barcelona. Más de 10 transformaciones reales de pisos, casas, oficinas y locales comerciales con fotos comparativas.',
  },
  alternates: {
    canonical: '/antes-y-despues/',
  },
}

export default async function AntesYDespues() {
  let caseStudies = await loadCaseStudies()

  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Inicio',
                    item: 'https://www.interiorista-barcelona.com/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Antes y Después',
                    item: 'https://www.interiorista-barcelona.com/antes-y-despues/',
                  },
                ],
              },
              {
                '@type': 'CollectionPage',
                '@id':
                  'https://www.interiorista-barcelona.com/antes-y-despues/#page',
                name: 'Antes y Después de Reformas en Barcelona',
                description:
                  'Descubre el antes y después de nuestras reformas e interiorismo en Barcelona. Más de 10 transformaciones reales de pisos, casas, oficinas y locales comerciales con fotos comparativas.',
                url: 'https://www.interiorista-barcelona.com/antes-y-despues/',
                isPartOf: {
                  '@type': 'WebSite',
                  '@id':
                    'https://www.interiorista-barcelona.com/#website',
                },
                about: {
                  '@type': 'Service',
                  name: 'Interiorismo y reformas en Barcelona',
                  provider: {
                    '@id':
                      'https://www.interiorista-barcelona.com/#organization',
                  },
                },
              },
              {
                '@type': 'Organization',
                '@id':
                  'https://www.interiorista-barcelona.com/#organization',
                name: 'Interiorista Barcelona',
                url: 'https://www.interiorista-barcelona.com',
                description:
                  'Colectivo de diseñadores de interiores y arquitectos en Barcelona',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Carrer de Mallorca, 237',
                  addressLocality: 'Barcelona',
                  postalCode: '08008',
                  addressCountry: 'ES',
                },
                areaServed: [
                  { '@type': 'City', name: 'Barcelona' },
                  { '@type': 'City', name: 'Sant Cugat del Vallès' },
                  { '@type': 'City', name: 'Sabadell' },
                  { '@type': 'City', name: 'Terrassa' },
                  { '@type': 'City', name: 'Sitges' },
                  { '@type': 'City', name: 'Mataró' },
                  { '@type': 'City', name: 'Manresa' },
                ],
              },
            ],
          }),
        }}
      />
      <PageIntro
        eyebrow="Antes y después"
        title="Antes y después de nuestras reformas en Barcelona."
      >
        <p>
          Descubre cómo nuestros interioristas transforman espacios en
          Barcelona. Desde reformas integrales de pisos modernistas hasta el
          diseño de restaurantes y oficinas, cada proyecto cuenta una historia
          de transformación real con fotos del antes y después.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      <TestimonialSlider
        className="mt-24 sm:mt-32 lg:mt-40"
        testimonials={testimonials}
      />

      <ContactSection />
    </RootLayout>
  )
}
