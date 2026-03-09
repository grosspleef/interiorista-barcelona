'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import clsx from 'clsx'

import Link from 'next/link'

import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

export type TestimonialItem = {
  quote: string
  client: string
}

export function TestimonialSlider({
  testimonials,
  className,
}: {
  testimonials: TestimonialItem[]
  className?: string
}) {
  let shouldReduceMotion = useReducedMotion()
  let [current, setCurrent] = useState(0)
  let isPaused = useRef(false)

  let next = useCallback(() => {
    setCurrent((i) => (i + 1) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    let interval = setInterval(() => {
      if (!isPaused.current) {
        next()
      }
    }, 6000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full mask-[linear-gradient(to_bottom_left,white_50%,transparent_60%)] fill-neutral-100 stroke-neutral-950/5"
        yOffset={-256}
      />
      <Container>
        <figure className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl"
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 16 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -16 }
              }
              transition={{ duration: 0.35 }}
            >
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {testimonials[current].quote}
              </p>
            </motion.blockquote>
          </AnimatePresence>
          <figcaption className="mt-10">
            <span className="font-display text-base font-semibold text-neutral-950">
              {testimonials[current].client}
            </span>
          </figcaption>
        </figure>

        {/* Dot navigation */}
        <div className="mt-8 flex justify-center gap-3" role="tablist">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testimonio ${i + 1}`}
              className={clsx(
                'h-2.5 w-2.5 rounded-full transition-colors',
                i === current
                  ? 'bg-neutral-950'
                  : 'bg-neutral-300 hover:bg-neutral-400',
              )}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/opiniones/"
            className="flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            Ver todas las opiniones
            <ArrowIcon className="w-6 flex-none fill-current" />
          </Link>
        </div>
      </Container>
    </div>
  )
}
