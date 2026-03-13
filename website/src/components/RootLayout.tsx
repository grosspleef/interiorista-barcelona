'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CookieBanner } from '@/components/CookieBanner'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo, Logomark } from '@/components/Logo'
import { services, servicePathPrefixes } from '@/lib/services'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

const serviciosDropdown = {
  label: 'Servicios',
  href: '/#servicios',
  links: services.map((s) => ({
    label: s.shortName,
    href: s.href,
  })),
}

const navLinks = [
  { href: '/proyectos/', label: 'Proyectos' },
  { href: '/quienes-somos/', label: 'Quiénes somos' },
  { href: '/precios/', label: 'Precios' },
]

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function Header() {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  let [desktopServiciosOpen, setDesktopServiciosOpen] = useState(false)
  let pathname = usePathname()
  let router = useRouter()

  let handleServiciosClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === '/') {
        e.preventDefault()
        document
          .getElementById('servicios')
          ?.scrollIntoView({ behavior: 'smooth' })
      } else {
        e.preventDefault()
        router.push('/#servicios')
      }
    },
    [pathname, router],
  )

  useEffect(() => {
    setMobileMenuOpen(false)

    if (pathname === '/' && window.location.hash === '#servicios') {
      // Small delay to let the page render before scrolling
      setTimeout(() => {
        document
          .getElementById('servicios')
          ?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-950/5 bg-white/90 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Home"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <Logomark
              className="h-8 sm:hidden"
              filled={logoHovered}
            />
            <Logo
              className="hidden sm:flex"
              filled={logoHovered}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex lg:items-center lg:gap-x-8">
            {/* Servicios dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopServiciosOpen(true)}
              onMouseLeave={() => setDesktopServiciosOpen(false)}
            >
              <a
                href={serviciosDropdown.href}
                onClick={handleServiciosClick}
                aria-haspopup="true"
                aria-expanded={desktopServiciosOpen}
                className={clsx(
                  'flex items-center gap-x-1 text-sm font-semibold transition',
                  servicePathPrefixes.some((prefix) =>
                    pathname.startsWith(`/${prefix}`),
                  )
                    ? 'text-neutral-950'
                    : 'text-neutral-600 hover:text-neutral-950',
                )}
              >
                {serviciosDropdown.label}
                <ChevronDownIcon
                  className={clsx(
                    'h-4 w-4 transition-transform duration-150',
                    desktopServiciosOpen && 'rotate-180',
                  )}
                />
              </a>

              <AnimatePresence>
                {desktopServiciosOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 rounded-lg border border-neutral-950/10 bg-white p-6 shadow-lg"
                  >
                    <ul className="space-y-2">
                      {serviciosDropdown.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className={clsx(
                              'block whitespace-nowrap text-sm transition',
                              pathname === link.href
                                ? 'font-semibold text-neutral-950'
                                : 'text-neutral-600 hover:text-neutral-950',
                            )}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Regular nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-semibold transition',
                  pathname.startsWith(link.href)
                    ? 'text-neutral-950'
                    : 'text-neutral-600 hover:text-neutral-950',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: CTA + mobile toggle */}
          <div className="flex items-center gap-x-4">
            <Button href="/contacto/">Empieza tu proyecto</Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10 lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <XIcon className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700" />
              ) : (
                <MenuIcon className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {mobileMenuOpen && (
          <nav className="border-t border-neutral-950/10 py-4 lg:hidden">
            <div className="flex flex-col gap-y-3">
              {/* Servicios link */}
              <a
                href={serviciosDropdown.href}
                onClick={handleServiciosClick}
                className="text-sm font-semibold text-neutral-600 transition hover:text-neutral-950"
              >
                {serviciosDropdown.label}
              </a>

              {/* Regular nav links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'text-sm font-semibold transition',
                    pathname.startsWith(link.href)
                      ? 'text-neutral-950'
                      : 'text-neutral-600 hover:text-neutral-950',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let shouldReduceMotion = useReducedMotion()

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <Header />

      <div className="relative flex flex-auto flex-col bg-white pt-16">
        <div className="relative isolate flex w-full flex-col pt-9">
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </div>
      </div>

      <CookieBanner />
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
