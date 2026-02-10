# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for **Interiorista Barcelona**, a collective of interior designers/architects in Barcelona. Based on the Tailwind Plus "Studio" template, heavily customized for local SEO and Spanish-language content. Bilingual target (ES primary, EN secondary for expats).

## Commands

All commands run from the `website/` directory:

```bash
cd website
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint (next lint)
npx prettier --check .   # Check formatting
npx prettier --write .   # Auto-format
```

No test framework is configured.

## Architecture

### Monorepo Structure

```
/                           # Root: planning & architecture docs
├── ARCHITECTURE.md         # Full site architecture (FR), reference site analysis, keyword strategy
├── SITE-ARCHITECTURE.md    # Detailed site structure planning
├── KEYWORDS-UBERSUGGEST.md # Keyword research data
└── website/                # Next.js application (all code lives here)
```

### Tech Stack

- **Next.js 15** (App Router) with React 19, TypeScript
- **Tailwind CSS v4** (via `@tailwindcss/postcss`, configured in `src/styles/tailwind.css` using `@theme`)
- **MDX** for blog posts and case studies (via `@next/mdx` with custom remark/rehype plugins)
- **Framer Motion** for animations (FadeIn, AnimatePresence)
- **Prettier** with `singleQuote: true`, `semi: false`, and `prettier-plugin-tailwindcss`

### Key Patterns

**Path alias:** `@/*` maps to `./src/*` (tsconfig paths).

**Layout:** Pages wrap content in `<RootLayout>` (a client component), which provides the fixed header with mobile/desktop nav, footer, and `GridPattern` background. The root `layout.tsx` only sets `<html>` and `<body>`.

**Services:** The 14 services are defined in `src/lib/services.ts` as a typed array. The nav dropdown, footer, and `ServicesGrid` all consume this array. Each service has a dedicated page at `/{service-id}/` (e.g., `/arquitectura-interiores/`, `/decoracion-interiores/`).

**Service page pattern:** Each service page follows the same structure:
1. Schema.org JSON-LD (BreadcrumbList + Service + Organization + FAQPage + Reviews + CreativeWork)
2. PageIntro hero
3. GridList of benefits
4. SectionIntro + 3-step process with `Section` components
5. PricingBlock with tiered pricing
6. FAQ accordion (client component at `./faq-accordion.tsx`)
7. ContactSection
8. ProjectShowcase + TestimonialSlider

**MDX content:** Blog articles live at `src/app/blog/{slug}/page.mdx` with exported `article` metadata. Case studies live at `src/app/work/{slug}/page.mdx` with exported `caseStudy` metadata. Layouts are auto-injected via `remarkMDXLayout` in `next.config.mjs`.

**Content loading:** `src/lib/mdx.ts` uses `fast-glob` to discover MDX files and dynamically imports their metadata. Returns entries sorted by date descending.

### SEO Strategy

- Every page includes Schema.org JSON-LD via `dangerouslySetInnerHTML`
- Service pages use multiple schema types: BreadcrumbList, Service, Organization, FAQPage, Review, CreativeWork
- Local SEO: neighborhood pages planned (Eixample, Gràcia, Born, Sarrià, Poblenou) — footer links to `/interiorista-{barrio}/`
- All URLs end with trailing slashes
- Spanish content with some English testimonials targeting expat market

### Client vs Server Components

Most components are server components. Client components (marked with `'use client'`): `RootLayout`, `FadeIn`, `GridPattern`, `GrayscaleTransitionImage`, `ContactSection`, `TestimonialSlider`, `PricingTableOfContents`, and per-service `faq-accordion.tsx` files.
