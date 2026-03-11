'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/Button'

export function AntesYDespuesButton() {
  let pathname = usePathname()
  let slug = pathname.replace(/^\/proyectos\//, '').replace(/\/$/, '')

  return (
    <div className="my-10">
      <Button href={`/antes-y-despues/${slug}/`}>Ver antes y después</Button>
    </div>
  )
}
