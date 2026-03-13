import clsx from 'clsx'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export type BreadcrumbItem = {
  label: string
  href?: string
}

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
  breadcrumbs,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  centered?: boolean
  breadcrumbs?: BreadcrumbItem[]
}) {
  return (
    <Container
      className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <FadeIn>
        <h1>
          {breadcrumbs ? (
            <nav aria-label="Breadcrumb" className="block">
              <ol className="flex items-center gap-x-1 font-display text-base font-semibold text-neutral-950">
                {breadcrumbs.map((item, index) => (
                  <li key={item.label} className="flex items-center gap-x-1">
                    {index > 0 && (
                      <span aria-hidden="true" className="text-neutral-400">
                        {'>'}
                      </span>
                    )}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="transition hover:text-neutral-600"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span aria-current="page">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : (
            <span className="block font-display text-base font-semibold text-neutral-950">
              {eyebrow}
            </span>
          )}
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl',
              centered && 'mx-auto',
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            'mt-6 max-w-3xl text-xl text-neutral-600',
            centered && 'mx-auto',
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  )
}
