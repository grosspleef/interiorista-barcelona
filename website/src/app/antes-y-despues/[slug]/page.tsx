import { type Metadata } from 'next'
import Image, { type StaticImageData } from 'next/image'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

async function loadAntesImages(
  slug: string,
): Promise<Array<StaticImageData | null>> {
  try {
    const mod = await import(`../${slug}/images`)
    return mod.default
  } catch {
    return []
  }
}

function getSlugFromHref(href: string) {
  return href.replace(/^\/proyectos\//, '')
}

async function getCaseStudyBySlug(slug: string) {
  const caseStudies = await loadCaseStudies()
  return caseStudies.find((cs) => getSlugFromHref(cs.href) === slug)
}

export async function generateStaticParams() {
  const caseStudies = await loadCaseStudies()
  return caseStudies.map((cs) => ({
    slug: getSlugFromHref(cs.href),
  }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await props.params
  const caseStudy = await getCaseStudyBySlug(slug)
  if (!caseStudy) return {}

  return {
    title: `Antes y Después: ${caseStudy.title} | Interiorista Barcelona`,
    description: `Descubre el antes y después de ${caseStudy.title.toLowerCase()}. ${caseStudy.description}`,
    alternates: {
      canonical: `/antes-y-despues/${slug}/`,
    },
  }
}

export default async function AntesYDespuesProject(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return null
  }

  const antesImages = await loadAntesImages(slug)

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
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: caseStudy.title,
                    item: `https://www.interiorista-barcelona.com/antes-y-despues/${slug}/`,
                  },
                ],
              },
              {
                '@type': 'ImageGallery',
                '@id': `https://www.interiorista-barcelona.com/antes-y-despues/${slug}/#gallery`,
                name: `Antes y Después: ${caseStudy.title}`,
                description: `Fotos comparativas del antes y después de ${caseStudy.title.toLowerCase()}. ${caseStudy.description}`,
                url: `https://www.interiorista-barcelona.com/antes-y-despues/${slug}/`,
                dateCreated: caseStudy.date,
                about: {
                  '@type': 'Service',
                  name: caseStudy.service,
                  provider: {
                    '@id':
                      'https://www.interiorista-barcelona.com/#localbusiness',
                  },
                },
                locationCreated: {
                  '@type': 'Place',
                  name: 'Barcelona',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Barcelona',
                    addressRegion: 'Cataluña',
                    addressCountry: 'ES',
                  },
                },
                creator: {
                  '@id':
                    'https://www.interiorista-barcelona.com/#localbusiness',
                },
                isPartOf: {
                  '@type': 'CollectionPage',
                  '@id':
                    'https://www.interiorista-barcelona.com/antes-y-despues/#page',
                },
                associatedMedia: {
                  '@type': 'CreativeWork',
                  '@id': `https://www.interiorista-barcelona.com/proyectos/${slug}/#project`,
                  name: caseStudy.title,
                  url: `https://www.interiorista-barcelona.com/proyectos/${slug}/`,
                },
              },
              {
                '@type': 'LocalBusiness',
                '@id':
                  'https://www.interiorista-barcelona.com/#localbusiness',
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
              ...(caseStudy.testimonial
                ? [
                    {
                      '@type': 'Review',
                      itemReviewed: {
                        '@type': 'LocalBusiness',
                        '@id':
                          'https://www.interiorista-barcelona.com/#localbusiness',
                        name: 'Interiorista Barcelona',
                      },
                      reviewRating: {
                        '@type': 'Rating',
                        ratingValue: '5',
                        bestRating: '5',
                      },
                      author: {
                        '@type': 'Person',
                        name: caseStudy.testimonial.author.name,
                      },
                      reviewBody: caseStudy.testimonial.content,
                    },
                  ]
                : []),
            ],
          }),
        }}
      />

      <PageIntro eyebrow="Antes y después" title={caseStudy.title}>
        <p>{caseStudy.description}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-16">
          {(caseStudy.images ?? []).map((img, index) => {
            const antesImage = antesImages[index] ?? null
            if (!antesImage) return null
            const altText = img.alt ?? caseStudy.title

            return (
              <FadeIn key={index}>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Antes */}
                  <div>
                    <div className="relative overflow-hidden rounded-xl bg-neutral-100">
                      <Image
                        src={antesImage}
                        alt={`Antes: ${altText}`}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-neutral-950/70 px-4 py-1.5 text-sm font-semibold text-white">
                        Antes
                      </span>
                    </div>
                  </div>

                  {/* Después */}
                  <div>
                    <div className="relative overflow-hidden rounded-xl bg-neutral-100">
                      <Image
                        src={img.src}
                        alt={`Después: ${altText}`}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-neutral-950/70 px-4 py-1.5 text-sm font-semibold text-white">
                        Después
                      </span>
                    </div>
                  </div>
                </div>
                {img.alt && (
                  <p className="mt-3 text-center text-sm text-neutral-600">
                    {img.alt}
                  </p>
                )}
              </FadeIn>
            )
          })}
        </div>

        <FadeIn>
          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Sobre el proyecto
            </h2>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              {caseStudy.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10">
              <Button
                href={caseStudy.href}
                aria-label={`Ver proyecto completo: ${caseStudy.client}`}
              >
                Ver proyecto completo
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
