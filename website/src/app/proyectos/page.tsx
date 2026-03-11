import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
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
          Estudios de caso
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.image.src}
                      alt={caseStudy.client}
                      className="aspect-[3/2] w-full rounded-xl object-cover"
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
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Ver proyecto
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}


const testimonials = [
  {
    quote:
      'Nuestra reforma integral en el Eixample fue un éxito total. El equipo coordinó albañiles, electricistas y decoradores sin que tuviéramos que preocuparnos por nada. En 4 meses teníamos un piso completamente nuevo.',
    client: 'Carlos y Ana M., reforma integral en Eixample',
  },
  {
    quote:
      'Queríamos un proyecto de interiorismo que reflejara nuestra personalidad sin obras mayores. La interiorista eligió materiales, colores y mobiliario perfectos. Cada rincón de nuestro piso cuenta una historia.',
    client: 'Laura G., proyecto de interiorismo en Sarrià',
  },
  {
    quote:
      'Contratamos el diseño de nuestro nuevo restaurante en Poblenou y el resultado ha sido espectacular. Entendieron la identidad de marca desde el primer día y los clientes no dejan de elogiar el espacio.',
    client: 'Marc R., interiorismo comercial en Poblenou',
  },
  {
    quote:
      'Teníamos una casa centenaria con mucho potencial pero en un estado complicado. El equipo de arquitectos supo ver lo que nosotros solo intuíamos: restaurar la volta catalana, abrir el patio interior y crear un solarium en la cubierta. Ahora vivimos en una casa que respira historia y modernidad.',
    client: 'Patricia y Jordi V., rehabilitación de casa en Gràcia',
  },
  {
    quote:
      'Queríamos unas oficinas que no parecieran oficinas. El muro vegetal, las cabinas acústicas y la cocina social han cambiado la forma en que trabajamos. La rotación ha bajado un 20% y los candidatos siempre comentan el espacio en las entrevistas.',
    client: 'Marta L., reforma de oficinas en Sant Martí',
  },
]

export const metadata: Metadata = {
  title: 'Nuestros Proyectos | Reformas e Interiorismo en Barcelona',
  description:
    'Descubre nuestros proyectos de reforma integral, interiorismo residencial y diseño comercial en Barcelona. Resultados reales con opiniones de clientes satisfechos.',
  alternates: {
    canonical: '/proyectos/',
  },
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Inicio',
                  item: 'https://www.interioristabarcelona.com/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Proyectos',
                  item: 'https://www.interioristabarcelona.com/proyectos/',
                },
              ],
            },
            ...testimonials.map((t, i) => ({
              '@context': 'https://schema.org',
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: t.client.split(',')[0],
              },
              reviewBody: t.quote,
              itemReviewed: {
                '@type': 'LocalBusiness',
                name: 'Interiorista Barcelona',
                image: 'https://www.interioristabarcelona.com/og-image.jpg',
              },
            })),
          ]),
        }}
      />
      <PageIntro
        eyebrow="Nuestros proyectos"
        title="Reformas e interiorismo que transforman espacios en Barcelona."
      >
        <p>
          Cada proyecto es único, desde reformas integrales de pisos en el
          Eixample hasta el diseño de espacios comerciales en Poblenou.
          Descubre cómo nuestros interioristas han transformado hogares y
          negocios en toda Barcelona.
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
