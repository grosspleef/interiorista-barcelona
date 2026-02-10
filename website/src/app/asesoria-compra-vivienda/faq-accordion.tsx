'use client'

import { useState } from 'react'
import clsx from 'clsx'

type FAQItem = {
  question: string
  answer: React.ReactNode
  schemaAnswer: string
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  let [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <dl className="divide-y divide-neutral-200">
      {items.map((item, index) => {
        let isOpen = openIndex === index
        return (
          <div key={index} className="py-6 first:pt-0 last:pb-0">
            <dt>
              <button
                type="button"
                className="flex w-full items-start justify-between text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-neutral-950">
                  {item.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <svg
                    className={clsx(
                      'h-5 w-5 text-neutral-400 transition-transform duration-200',
                      isOpen && 'rotate-180',
                    )}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd
              className={clsx(
                'overflow-hidden transition-all duration-200',
                isOpen ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              <div className="text-base text-neutral-600 space-y-3">{item.answer}</div>
            </dd>
          </div>
        )
      })}
    </dl>
  )
}
