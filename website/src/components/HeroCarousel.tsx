'use client'

import { useCallback } from 'react'
import Image, { type ImageProps } from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

type HeroImage = {
  src: ImageProps['src']
  alt?: string
}

export function HeroCarousel({ images }: { images: HeroImage[] }) {
  let [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  let scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  let scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="flex">
      {/* Left column */}
      <button
        onClick={scrollPrev}
        aria-label="Foto anterior"
        className="group/left flex w-20 shrink-0 cursor-pointer items-center justify-center transition-colors bg-white hover:bg-neutral-100 sm:w-28"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-neutral-400 transition-colors group-hover/left:text-neutral-950"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Carousel */}
      <div ref={emblaRef} className="min-w-0 flex-1 overflow-hidden">
        <div className="flex">
          {images.map((image, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%]">
              <Image
                src={image.src}
                alt={image.alt ?? ''}
                quality={90}
                className="w-full"
                sizes="(min-width: 1216px) 76rem, 100vw"
                priority={i === 0}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <button
        onClick={scrollNext}
        aria-label="Siguiente foto"
        className="group/right flex w-20 shrink-0 cursor-pointer items-center justify-center transition-colors bg-white hover:bg-neutral-100 sm:w-28"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-neutral-400 transition-colors group-hover/right:text-neutral-950"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}
