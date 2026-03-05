'use client'

import Image, { type ImageProps } from 'next/image'

export function GrayscaleTransitionImage(
  props: Pick<
    ImageProps,
    'src' | 'quality' | 'className' | 'sizes' | 'priority'
  > & { alt?: string },
) {
  return (
    <div className="group relative">
      <Image alt="" {...props} />
    </div>
  )
}
