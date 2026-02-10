import { type ComponentPropsWithoutRef } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'

export type PricingTier = {
  name: string
  price: string
  description: string
  highlighted?: boolean
}

type PricingBlockProps = {
  id: string
  name: string
  description: string
  href: string
  ctaLabel: string
  image: ComponentPropsWithoutRef<typeof StylizedImage>
  tiers: PricingTier[]
  showCounter?: boolean
}

export function PricingBlock({
  id,
  name,
  description,
  href,
  ctaLabel,
  image,
  tiers,
  showCounter = true,
}: PricingBlockProps) {
  return (
    <Container className={`group/section${showCounter ? ' [counter-increment:section]' : ''}`}>
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            {showCounter && (
              <div
                className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                aria-hidden="true"
              />
            )}
            <h2
              id={id}
              className="mt-2 scroll-mt-24 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl"
            >
              {name}
            </h2>
            <p className="mt-4 text-base text-neutral-600">{description}</p>

            <div className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={
                    tier.highlighted
                      ? 'rounded-2xl bg-neutral-950 p-6 text-white ring-1 ring-neutral-950'
                      : 'rounded-2xl p-6 ring-1 ring-neutral-950/5'
                  }
                >
                  <p
                    className={
                      tier.highlighted
                        ? 'text-sm font-semibold text-white'
                        : 'text-sm font-semibold text-neutral-950'
                    }
                  >
                    {tier.name}
                  </p>
                  <p
                    className={
                      tier.highlighted
                        ? 'mt-2 font-display text-2xl font-medium text-white'
                        : 'mt-2 font-display text-2xl font-medium text-neutral-950'
                    }
                  >
                    {tier.price}
                  </p>
                  <p
                    className={
                      tier.highlighted
                        ? 'mt-2 text-sm text-white/70'
                        : 'mt-2 text-sm text-neutral-600'
                    }
                  >
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href={href}>{ctaLabel}</Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}
