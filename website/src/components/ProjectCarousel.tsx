'use client'

import { useCallback, useEffect, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import clsx from 'clsx'

type CarouselImage = {
  src: StaticImageData
  alt?: string
}

export function ProjectCarousel({ images }: { images: CarouselImage[] }) {
  let [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  let [selectedIndex, setSelectedIndex] = useState(0)

  let onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  let scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  let scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  if (images.length === 0) return null

  if (images.length === 1) {
    return (
      <div className="my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6">
        <Image
          src={images[0].src}
          alt={images[0].alt ?? ''}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="aspect-16/10 w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className="my-10 max-sm:-mx-6">
      <div className="relative overflow-hidden rounded-4xl bg-neutral-100">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {images.map((image, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%]">
                <Image
                  src={image.src}
                  alt={image.alt ?? ''}
                  sizes="(min-width: 768px) 42rem, 100vw"
                  className="aspect-16/10 w-full object-cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Arrow navigation */}
        <button
          onClick={scrollPrev}
          aria-label="Foto anterior"
          className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-sm transition hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-neutral-950"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          aria-label="Siguiente foto"
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-sm transition hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-neutral-950"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Dot navigation */}
      <div className="mt-4 flex justify-center gap-3" role="tablist">
        {images.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === selectedIndex}
            aria-label={`Foto ${i + 1}`}
            className={clsx(
              'h-2.5 w-2.5 rounded-full transition-colors',
              i === selectedIndex
                ? 'bg-neutral-950'
                : 'bg-neutral-300 hover:bg-neutral-400',
            )}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
