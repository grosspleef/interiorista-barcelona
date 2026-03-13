import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { HeroCarousel } from '@/components/HeroCarousel'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

export default async function CaseStudyLayout({
  caseStudy,
  children,
}: {
  caseStudy: MDXEntry<CaseStudy>
  children: React.ReactNode
}) {
  let allCaseStudies = await loadCaseStudies()
  let otherCaseStudies = allCaseStudies
    .filter((study) => study.title !== caseStudy.title)
    .slice(0, 2)

  const currentStudy = allCaseStudies.find(
    (s) => s.title === caseStudy.title,
  )
  const canonicalUrl = currentStudy
    ? `https://www.interioristabarcelona.com${currentStudy.href}/`
    : 'https://www.interioristabarcelona.com/proyectos/'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
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
          {
            '@type': 'ListItem',
            position: 3,
            name: caseStudy.title,
          },
        ],
      },
      {
        '@type': 'CreativeWork',
        '@id': `${canonicalUrl}#project`,
        name: caseStudy.title,
        description: caseStudy.description,
        dateCreated: caseStudy.date,
        about: caseStudy.service,
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
          '@type': 'Organization',
          '@id': 'https://www.interioristabarcelona.com/#organization',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.interioristabarcelona.com/#organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
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
                '@id': `${canonicalUrl}#project`,
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
  }

  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Proyecto" title={caseStudy.title} centered>
            <p>{caseStudy.description}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">Cliente</dt>
                      <dd>{caseStudy.client}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">Año</dt>
                      <dd>
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">Servicio</dt>
                      <dd>{caseStudy.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
              {caseStudy.images && caseStudy.images.length > 1 ? (
                <div className="-my-px bg-neutral-200">
                  <HeroCarousel images={caseStudy.images} />
                </div>
              ) : (
                <div className="mx-auto -my-px max-w-304 bg-neutral-200">
                  <GrayscaleTransitionImage
                    {...caseStudy.image}
                    quality={90}
                    className="w-full"
                    sizes="(min-width: 1216px) 76rem, 100vw"
                    priority
                  />
                </div>
              )}
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {otherCaseStudies.length > 0 && (
        <PageLinks
          title="Otros proyectos"
          pages={otherCaseStudies}
          intro="Descubre más proyectos de interiorismo en Barcelona."
        />
      )}

      <ContactSection />
    </RootLayout>
  )
}
