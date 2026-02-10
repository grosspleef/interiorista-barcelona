import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { PricingBlock, type PricingTier } from '@/components/PricingBlock'
import { PricingTableOfContents } from '@/components/PricingTableOfContents'
import { RootLayout } from '@/components/RootLayout'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

type ServicePricing = {
  id: string
  name: string
  description: string
  href: string
  ctaLabel: string
  image: { src: typeof imageLaptop; shape?: 0 | 1 | 2 }
  tiers: PricingTier[]
}

const servicePricing: ServicePricing[] = [
  {
    id: 'interiorismo',
    name: 'Interiorismo',
    description:
      'Servicio integral de interiorismo para viviendas en Barcelona. Desde la primera consulta gratuita hasta el seguimiento de obra, te acompañamos en cada etapa de tu proyecto.',
    href: '/interiorista/',
    ctaLabel: 'Ver servicio de interiorismo',
    image: { src: imageWhiteboard, shape: 0 },
    tiers: [
      {
        name: 'Consulta inicial',
        price: 'Gratuita',
        description:
          'Primera visita a tu domicilio para evaluar el espacio, entender tus necesidades y definir el alcance del proyecto.',
      },
      {
        name: 'Proyecto de interiorismo',
        price: 'Desde 60 €/m²',
        description:
          'Proyecto completo: planos, 3D, selección de materiales y mobiliario. ≤40 m²: 80 €/m² · 41-80 m²: 70 €/m² · 81-120 m²: 65 €/m² · ≥121 m²: 60 €/m².',
        highlighted: true,
      },
      {
        name: 'Seguimiento de obra',
        price: '8 % del presupuesto',
        description:
          'Coordinación con los gremios, visitas regulares a la obra y control de calidad hasta la entrega final.',
      },
    ],
  },
  {
    id: 'reformas-integrales',
    name: 'Reformas integrales',
    description:
      'Reforma integral de pisos y viviendas en Barcelona. Gestionamos todo el proceso: diseño, permisos, obra y acabados, con un único interlocutor.',
    href: '/reformas-integrales/',
    ctaLabel: 'Ver servicio de reformas',
    image: { src: imageLaptop, shape: 1 },
    tiers: [
      {
        name: 'Consulta inicial',
        price: 'Gratuita',
        description:
          'Visita al inmueble, toma de medidas y primera estimación del alcance y presupuesto de la reforma.',
      },
      {
        name: 'Proyecto de reforma',
        price: 'Desde 50 €/m²',
        description:
          'Proyecto técnico completo con planos, presupuesto detallado y planificación. ≤40 m²: 65 €/m² · 41-80 m²: 60 €/m² · 81-120 m²: 55 €/m² · ≥121 m²: 50 €/m².',
        highlighted: true,
      },
      {
        name: 'Dirección de obra',
        price: '10 % del presupuesto',
        description:
          'Gestión integral de la reforma: coordinación de gremios, control de plazos, supervisión de calidad y tramitaciones.',
      },
    ],
  },
  {
    id: 'arquitectura-interiores',
    name: 'Arquitectura de interiores',
    description:
      'Proyectos de arquitectura interior que transforman la distribución y estructura de tu espacio. Intervenciones que requieren proyecto técnico y visado.',
    href: '/arquitecto-interiores/',
    ctaLabel: 'Ver servicio de arquitectura',
    image: { src: imageMeeting, shape: 2 },
    tiers: [
      {
        name: 'Consulta inicial',
        price: '90 €/h',
        description:
          'Sesión de asesoramiento técnico con un arquitecto. Importe descontado si se contrata el proyecto completo.',
      },
      {
        name: 'Proyecto de arquitectura',
        price: 'Desde 70 €/m²',
        description:
          'Proyecto visado: redistribución, planos técnicos, memorias y gestión de licencias. ≤40 m²: 90 €/m² · 41-80 m²: 80 €/m² · 81-120 m²: 75 €/m² · ≥121 m²: 70 €/m².',
        highlighted: true,
      },
      {
        name: 'Dirección de ejecución',
        price: '9 % del presupuesto',
        description:
          'Dirección facultativa, certificados de final de obra e inspecciones técnicas durante toda la ejecución.',
      },
    ],
  },
  {
    id: 'decoracion',
    name: 'Decoración',
    description:
      'Servicio de decoración de interiores para renovar la imagen de tu hogar sin obra. Selección de mobiliario, textiles, iluminación y complementos.',
    href: '/decorador-interiores/',
    ctaLabel: 'Ver servicio de decoración',
    image: { src: imageWhiteboard, shape: 0 },
    tiers: [
      {
        name: 'Consulta de decoración',
        price: '90 €/h',
        description:
          'Sesión de asesoramiento en tu domicilio con propuestas de estilo, color y distribución. Importe descontado si se contrata el proyecto.',
      },
      {
        name: 'Proyecto de decoración',
        price: 'Desde 50 €/m²',
        description:
          'Moodboards, planos de mobiliario, shopping list y acompañamiento en compras. ≤40 m²: 65 €/m² · 41-80 m²: 60 €/m² · 81-120 m²: 55 €/m² · ≥121 m²: 50 €/m².',
        highlighted: true,
      },
      {
        name: 'Instalación y styling',
        price: 'Desde 450 €/media jornada',
        description:
          'Recepción de pedidos, montaje de mobiliario y styling final. Media jornada: 450 € · Jornada completa: 800 €.',
      },
    ],
  },
  {
    id: 'home-staging',
    name: 'Home staging',
    description:
      'Preparación profesional de inmuebles para la venta o alquiler. Maximiza el atractivo de tu propiedad y acelera la operación inmobiliaria.',
    href: '/home-staging/',
    ctaLabel: 'Ver servicio de home staging',
    image: { src: imageLaptop, shape: 1 },
    tiers: [
      {
        name: 'Consulta inicial',
        price: 'Gratuita',
        description:
          'Visita al inmueble, análisis del mercado objetivo y propuesta de intervención para maximizar el valor percibido.',
      },
      {
        name: 'Proyecto de home staging',
        price: 'Desde 800 €',
        description:
          'Intervención completa: despersonalización, redistribución del mobiliario existente, aportación de complementos y sesión fotográfica profesional.',
        highlighted: true,
      },
    ],
  },
  {
    id: 'diseno-comercial',
    name: 'Diseño comercial',
    description:
      'Diseño de interiores para locales comerciales, restaurantes, oficinas y espacios de retail en Barcelona. Proyectos que potencian tu marca y la experiencia del cliente.',
    href: '/diseno-comercial/',
    ctaLabel: 'Ver servicio de diseño comercial',
    image: { src: imageMeeting, shape: 2 },
    tiers: [
      {
        name: 'Consulta inicial',
        price: 'Gratuita',
        description:
          'Análisis del local, briefing de marca y primeras propuestas conceptuales para tu espacio comercial.',
      },
      {
        name: 'Proyecto comercial',
        price: 'Desde 70 €/m²',
        description:
          'Proyecto integral: concepto, planos, 3D, selección de materiales y mobiliario comercial. ≤40 m²: 90 €/m² · 41-80 m²: 80 €/m² · 81-120 m²: 75 €/m² · ≥121 m²: 70 €/m².',
        highlighted: true,
      },
      {
        name: 'Dirección de obra',
        price: '9 % del presupuesto',
        description:
          'Coordinación de la ejecución, control de plazos y calidad hasta la apertura del local.',
      },
    ],
  },
]

const tocItems = servicePricing.map(({ id, name }) => ({ id, name }))

export const metadata: Metadata = {
  title: 'Precios interiorismo Barcelona | Tarifas transparentes',
  description:
    'Descubre los precios de nuestros servicios de interiorismo en Barcelona. Tarifas transparentes para interiorismo, reformas integrales, decoración, home staging y diseño comercial.',
}

export default function Precios() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Inicio',
                    item: 'https://www.interioristabarcelona.com',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Precios',
                    item: 'https://www.interioristabarcelona.com/precios/',
                  },
                ],
              },
              ...servicePricing.map((service) => ({
                '@type': 'Service',
                name: service.name,
                description: service.description,
                provider: {
                  '@type': 'Organization',
                  name: 'Interiorista Barcelona',
                },
                areaServed: {
                  '@type': 'City',
                  name: 'Barcelona',
                },
                url: `https://www.interioristabarcelona.com${service.href}`,
              })),
            ],
          }),
        }}
      />

      <PageIntro
        eyebrow="Precios"
        title="Tarifas transparentes para tu proyecto"
      >
        <p>
          Creemos en la transparencia. Aquí encontrarás las tarifas orientativas
          de cada uno de nuestros servicios de interiorismo en Barcelona. Cada
          proyecto es único: los precios finales se ajustan tras una primera
          consulta gratuita.
        </p>
      </PageIntro>

      <PricingTableOfContents items={tocItems} />

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {servicePricing.map((service) => (
          <PricingBlock
            key={service.id}
            id={service.id}
            name={service.name}
            description={service.description}
            href={service.href}
            ctaLabel={service.ctaLabel}
            image={service.image}
            tiers={service.tiers}
          />
        ))}
      </div>

      <ContactSection />
    </RootLayout>
  )
}
