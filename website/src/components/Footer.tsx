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
    title: 'Recursos',
    links: [
      { title: 'Proyectos', href: '/proyectos/' },
      { title: 'Antes y Después', href: '/antes-y-despues/' },
      { title: 'Precios', href: '/precios/' },
      { title: 'Opiniones', href: '/opiniones/' },
      { title: 'Quiénes somos', href: '/quienes-somos/' },
      { title: 'Preguntas frecuentes', href: '/preguntas-frecuentes/' },
      { title: 'Contacto', href: '/contacto/' },
      { title: 'Blog', href: '/blog/' },
    ],
  },
  {
    title: 'Zonas',
    links: [
      { title: 'Eixample', href: '/interiorista-eixample/' },
      { title: 'Gràcia', href: '/interiorista-gracia/' },
      { title: 'El Born', href: '/interiorista-born/' },
      { title: 'Sarrià-Sant Gervasi', href: '/interiorista-sarria/' },
      { title: 'Poblenou', href: '/interiorista-poblenou/' },
      { title: 'Sant Cugat', href: '/interiorista-sant-cugat/' },
      { title: 'Sabadell', href: '/interiorista-sabadell/' },
      { title: 'Terrassa', href: '/interiorista-terrassa/' },
      { title: 'Manresa', href: '/interiorista-manresa/' },
      { title: 'Sitges', href: '/interiorista-sitges/' },
      { title: 'Mataró', href: '/interiorista-mataro/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Aviso legal', href: '/aviso-legal/' },
      { title: 'Política de privacidad', href: '/politica-privacidad/' },
      { title: 'Condiciones de uso', href: '/condiciones-uso/' },
      { title: 'Política de cookies', href: '/politica-cookies/' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
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
