import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const neighborhoods = [
  { name: 'Eixample', href: '/interiorista-eixample/' },
  { name: 'Gràcia', href: '/interiorista-gracia/' },
  { name: 'El Born', href: '/interiorista-born/' },
  { name: 'Sarrià-Sant Gervasi', href: '/interiorista-sarria/' },
  { name: 'Poblenou', href: '/interiorista-poblenou/' },
]

export function NeighborhoodsSection() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Interioristas en todos los barrios de Barcelona
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-5"
          >
            {neighborhoods.map((neighborhood) => (
              <li key={neighborhood.name}>
                <FadeIn>
                  <Link
                    href={neighborhood.href}
                    className="group block rounded-2xl bg-neutral-900 p-6 transition hover:bg-neutral-800"
                  >
                    <span className="font-display text-base font-semibold text-white">
                      {neighborhood.name}
                    </span>
                    <span className="mt-2 block text-sm text-neutral-400 transition group-hover:text-neutral-300">
                      Ver interioristas →
                    </span>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}
