import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ServiceSummary({
  title,
  items,
}: {
  title: string
  items: { label: string; value: string }[]
}) {
  return (
    <Container className="mt-16 sm:mt-20">
      <FadeIn>
        <blockquote className="rounded-2xl border border-neutral-200 bg-neutral-50 px-8 py-6 sm:px-10 sm:py-8">
          <p className="font-display text-lg font-semibold text-neutral-950">
            {title}
          </p>
          <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div key={item.label} className="flex gap-x-2">
                <dt className="font-semibold text-neutral-950">
                  {item.label}:
                </dt>
                <dd className="text-neutral-600">{item.value}</dd>
              </div>
            ))}
          </dl>
        </blockquote>
      </FadeIn>
    </Container>
  )
}
