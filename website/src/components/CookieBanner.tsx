'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'cookie-consent'

export function CookieBanner() {
  let [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-950/10 bg-white px-6 py-4 shadow-lg sm:flex sm:items-center sm:justify-between sm:px-8">
      <p className="text-sm text-neutral-600">
        Este sitio utiliza cookies técnicas necesarias para su funcionamiento.
        Consulta nuestra{' '}
        <Link
          href="/politica-cookies/"
          className="font-semibold text-neutral-950 underline underline-offset-2 hover:text-neutral-700"
        >
          política de cookies
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="mt-3 w-full rounded-full bg-neutral-950 px-6 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:mt-0 sm:w-auto"
      >
        Aceptar
      </button>
    </div>
  )
}
