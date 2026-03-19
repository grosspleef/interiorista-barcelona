import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog de interiorismo y reformas en Barcelona',
  description:
    'Consejos, guías y tendencias sobre interiorismo, reformas y decoración en Barcelona. Precios, trámites y claves para transformar tu hogar.',
  openGraph: {
    title: 'Blog de interiorismo y reformas en Barcelona',
    description:
      'Consejos, guías y tendencias sobre interiorismo, reformas y decoración en Barcelona. Precios, trámites y claves para transformar tu hogar.',
  },
  alternates: {
    canonical: '/blog/',
  },
}

export default async function Blog() {
  let articles = await loadArticles()

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
                    item: 'https://www.interiorista-barcelona.com',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Blog',
                    item: 'https://www.interiorista-barcelona.com/blog/',
                  },
                ],
              },
              {
                '@type': 'CollectionPage',
                name: 'Blog de interiorismo y reformas en Barcelona',
                url: 'https://www.interiorista-barcelona.com/blog/',
                description:
                  'Consejos, guías y tendencias sobre interiorismo, reformas y decoración en Barcelona.',
                mainEntity: {
                  '@type': 'ItemList',
                  itemListElement: articles.map((article, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    url: `https://www.interiorista-barcelona.com${article.href}`,
                  })),
                },
              },
            ],
          }),
        }}
      />

      <PageIntro
        eyebrow="Blog"
        title="Consejos de interiorismo y reformas"
      >
        <p>
          Guías prácticas, tendencias y precios actualizados para tus proyectos
          de interiorismo y reforma en Barcelona.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {articles.map((article) => (
            <FadeIn key={article.href}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={article.href}>{article.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:top-0 lg:left-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Publicado</dt>
                        <dd className="absolute top-0 left-0 text-sm text-neutral-950 lg:static">
                          <time dateTime={article.date}>
                            {formatDate(article.date)}
                          </time>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {article.description}
                      </p>
                      <Button
                        href={article.href}
                        aria-label={`Read more: ${article.title}`}
                        className="mt-8"
                      >
                        Leer más
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
