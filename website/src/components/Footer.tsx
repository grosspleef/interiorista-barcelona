import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { services } from '@/lib/services'

const navigation = [
  {
    title: 'Servicios',
    links: services.map((s) => ({
      title: s.shortName,
      href: s.href,
    })),
  },
  {
    title: 'Zonas',
    links: [
      { title: 'Barcelona', href: '/interiorista-eixample/' },
      { title: 'Sant Cugat', href: '/interiorista-sant-cugat/' },
      { title: 'Sabadell', href: '/interiorista-sabadell/' },
      { title: 'Terrassa', href: '/interiorista-terrassa/' },
      { title: 'Eixample', href: '/interiorista-eixample/' },
      { title: 'Gràcia', href: '/interiorista-gracia/' },
      {
        title: (
          <>
            Ver todas <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/zonas/',
      },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { title: 'Proyectos', href: '/proyectos/' },
      { title: 'Antes y después', href: '/antes-despues/' },
      { title: 'Precios', href: '/precios/' },
      { title: 'Opiniones', href: '/opiniones/' },
      { title: 'Preguntas frecuentes', href: '/preguntas-frecuentes/' },
      { title: 'Contacto', href: '/contacto/' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <Navigation />
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © Interiorista Barcelona {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
