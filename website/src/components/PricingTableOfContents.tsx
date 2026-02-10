'use client'

type PricingTableOfContentsProps = {
  items: Array<{ id: string; name: string }>
}

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    history.pushState(null, '', `#${id}`)
  }
}

export function PricingTableOfContents({
  items,
}: PricingTableOfContentsProps) {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
      {/* Mobile: native select */}
      <div className="lg:hidden">
        <label htmlFor="pricing-nav" className="sr-only">
          Ir a servicio
        </label>
        <select
          id="pricing-nav"
          className="w-full rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 focus:outline-hidden"
          defaultValue=""
          onChange={(e) => {
            if (e.target.value) {
              scrollToSection(e.target.value)
            }
          }}
        >
          <option value="" disabled>
            Seleccionar servicio...
          </option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop: pill links */}
      <div className="hidden lg:flex lg:flex-wrap lg:justify-center lg:gap-3">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(item.id)
            }}
            className="rounded-full bg-neutral-100 px-5 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
}
