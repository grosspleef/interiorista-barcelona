'use client'

import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <RootLayout>
      <Container className="flex min-h-[70vh] items-center pt-24 sm:pt-32 lg:pt-40">
        <FadeIn className="w-full max-w-2xl">
          <p className="font-display text-8xl font-semibold text-neutral-950 sm:text-9xl">
            500
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
            Error del servidor
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Lo sentimos, algo ha salido mal. Nuestro equipo ha sido notificado y
            estamos trabajando para solucionarlo.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H4.598a.75.75 0 00-.75.75v3.634a.75.75 0 001.5 0v-2.033l.312.311a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm-9.624-3.848a5.5 5.5 0 019.201-2.466l.312.311H12.768a.75.75 0 000 1.5h3.634a.75.75 0 00.75-.75V2.537a.75.75 0 00-1.5 0v2.033l-.312-.311A7 7 0 003.628 7.397a.75.75 0 001.449.39z"
                  clipRule="evenodd"
                />
              </svg>
              Intentar de nuevo
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                  clipRule="evenodd"
                />
              </svg>
              Volver al inicio
            </Link>
          </div>

          <div className="mt-10 border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-500">
              Si el problema persiste, no dudes en{' '}
              <Link
                href="/contacto/"
                className="font-semibold text-neutral-950 underline transition hover:text-neutral-600"
              >
                contactarnos
              </Link>
              .
            </p>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
