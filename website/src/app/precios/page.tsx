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
  // — Interiorismo (6) —
  {
    id: 'arquitectura-interiores',
    name: 'Interiorismo',
    description:
      'Proyectos de arquitectura interior que transforman la distribución y estructura de tu espacio. Intervenciones que requieren proyecto técnico y visado.',
    href: '/arquitectura-interiores/',
    ctaLabel: 'Ver servicio de interiorismo',
    image: { src: imageMeeting, shape: 2 },
    tiers: [
      {
        name: 'Consulta inicial',
        price: '90 €/h',
        description:
          'Sesión de asesoramiento técnico con un arquitecto. Importe descontado si se contrata el proyecto completo.',
      },
      {
        name: 'Proyecto de arquitectura de interiores',
        price: 'Desde 60 €/m²',
        description:
          'Proyecto visado: redistribución, planos técnicos, memorias y gestión de licencias. ≤40 m²: 80 €/m² · 41-80 m²: 70 €/m² · 81-120 m²: 65 €/m² · ≥121 m²: 60 €/m².',
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
    id: 'decoracion-interiores',
    name: 'Decoración',
    description:
      'Servicio de decoración de interiores para renovar la imagen de tu hogar sin obra. Selección de mobiliario, textiles, iluminación y complementos.',
    href: '/decoracion-interiores/',
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
    id: 'asesoria-compra-vivienda',
    name: 'Asesoramiento compra vivienda',
    description:
      'Evaluación técnica y estética de un inmueble antes de la compra. Te acompañamos para tomar la mejor decisión.',
    href: '/asesoria-compra-vivienda/',
    ctaLabel: 'Ver servicio de asesoría',
    image: { src: imageLaptop, shape: 1 },
    tiers: [
      {
        name: 'Contravisita de asesoramiento',
        price: 'Desde 150 €',
        description:
          'Visita al inmueble con un interiorista para evaluar el potencial de redistribución, el estado de las instalaciones y estimar el coste de una posible reforma.',
        highlighted: true,
      },
      {
        name: 'Informe técnico',
        price: 'Desde 350 €',
        description:
          'Informe escrito con evaluación del estado del inmueble, estimación de costes de reforma y recomendaciones.',
      },
    ],
  },
  {
    id: 'compra-sobre-plano',
    name: 'Compra sobre plano',
    description:
      'Acompañamiento en la compra de obra nueva: revisión de planos, selección de acabados y personalización de tu futura vivienda.',
    href: '/compra-sobre-plano/',
    ctaLabel: 'Ver servicio de compra sobre plano',
    image: { src: imageWhiteboard, shape: 0 },
    tiers: [
      {
        name: 'Asesoramiento de compra',
        price: 'Desde 200 €',
        description:
          'Revisión de los planos del promotor, análisis de la distribución y asesoramiento sobre las opciones de personalización disponibles.',
        highlighted: true,
      },
      {
        name: 'Acompañamiento completo',
        price: 'Consultar',
        description:
          'Seguimiento del proceso de compra: selección de acabados, visitas de obra y verificación de la entrega final.',
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
    id: 'interiorismo-accesible',
    name: 'Interiorismo accesible',
    description:
      'Diseño de interiores adaptado a personas con movilidad reducida. Soluciones funcionales y estéticas para una vivienda accesible.',
    href: '/interiorismo-accesible/',
    ctaLabel: 'Ver servicio de accesibilidad',
    image: { src: imageMeeting, shape: 2 },
    tiers: [
      {
        name: 'Diagnóstico de accesibilidad',
        price: 'Desde 150 €',
        description:
          'Visita a domicilio para evaluar las barreras arquitectónicas y proponer soluciones de adaptación del espacio.',
        highlighted: true,
      },
      {
        name: 'Proyecto de adaptación',
        price: 'Consultar',
        description:
          'Proyecto completo de adaptación: redistribución, selección de equipamiento específico y seguimiento de obra.',
      },
    ],
  },
  // — Arquitectura (7) —
  {
    id: 'arquitecto',
    name: 'Arquitecto',
    description:
      'Proyectos arquitectónicos residenciales y de obra nueva. Diseño, proyecto técnico visado y dirección de obra.',
    href: '/arquitecto/',
    ctaLabel: 'Ver servicio de arquitectura',
    image: { src: imageWhiteboard, shape: 0 },
    tiers: [
      {
        name: 'Consulta inicial',
        price: '90 €/h',
        description:
          'Sesión de asesoramiento con un arquitecto para evaluar la viabilidad de tu proyecto.',
      },
      {
        name: 'Proyecto de arquitectura',
        price: 'Desde 70 €/m²',
        description:
          'Proyecto visado completo: anteproyecto, proyecto básico, proyecto ejecutivo y gestión de licencias. ≤80 m²: 90 €/m² · 81-150 m²: 80 €/m² · ≥151 m²: 70 €/m².',
        highlighted: true,
      },
      {
        name: 'Dirección de obra',
        price: '9 % del presupuesto',
        description:
          'Dirección facultativa, certificados y supervisión técnica hasta la entrega final.',
      },
    ],
  },
  {
    id: 'ampliacion-vivienda',
    name: 'Ampliación de vivienda',
    description:
      'Extensiones, sobrelevaciones y agrandamiento de espacios. Proyecto técnico y gestión de licencias urbanísticas.',
    href: '/ampliacion-vivienda/',
    ctaLabel: 'Ver servicio de ampliación',
    image: { src: imageLaptop, shape: 1 },
    tiers: [
      {
        name: 'Estudio de viabilidad',
        price: 'Desde 300 €',
        description:
          'Análisis de la normativa urbanística, estudio de la estructura existente y evaluación de las opciones de ampliación.',
        highlighted: true,
      },
      {
        name: 'Proyecto de ampliación',
        price: 'Consultar',
        description:
          'Proyecto visado, gestión de licencias y dirección de obra para la ampliación de tu vivienda.',
      },
    ],
  },
  {
    id: 'interiorismo-comercial',
    name: 'Interiorismo comercial',
    description:
      'Diseño de interiores para restaurantes, hoteles, locales comerciales y espacios de retail en Barcelona.',
    href: '/interiorismo-comercial/',
    ctaLabel: 'Ver servicio de interiorismo comercial',
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
  {
    id: 'reforma-oficinas',
    name: 'Reforma de oficinas',
    description:
      'Reforma y diseño de oficinas, coworking y espacios de trabajo. Proyectos que optimizan la productividad y el bienestar laboral.',
    href: '/reforma-oficinas/',
    ctaLabel: 'Ver servicio de reforma de oficinas',
    image: { src: imageWhiteboard, shape: 0 },
    tiers: [
      {
        name: 'Consulta inicial',
        price: 'Gratuita',
        description:
          'Análisis del espacio, comprensión de la cultura de empresa y primeras propuestas de distribución.',
      },
      {
        name: 'Proyecto de oficina',
        price: 'Desde 60 €/m²',
        description:
          'Proyecto integral: space planning, diseño de zonas de trabajo, salas de reuniones y zonas comunes.',
        highlighted: true,
      },
      {
        name: 'Dirección de obra',
        price: '8 % del presupuesto',
        description:
          'Coordinación de la ejecución y control de calidad hasta la entrega del espacio.',
      },
    ],
  },
  {
    id: 'licitaciones-arquitectura',
    name: 'Licitaciones de arquitectura',
    description:
      'Licitaciones, concursos de arquitectura y proyectos de equipamientos públicos. Experiencia en pliegos y procesos de licitación.',
    href: '/licitaciones-arquitectura/',
    ctaLabel: 'Ver servicio de licitaciones',
    image: { src: imageLaptop, shape: 1 },
    tiers: [
      {
        name: 'Asesoramiento en licitación',
        price: 'Consultar',
        description:
          'Análisis del pliego de condiciones, preparación de la documentación técnica y estrategia de propuesta.',
        highlighted: true,
      },
      {
        name: 'Proyecto de concurso',
        price: 'Consultar',
        description:
          'Desarrollo del proyecto completo: memoria, planos, presupuesto y documentación administrativa.',
      },
    ],
  },
  {
    id: 'rehabilitacion-energetica',
    name: 'Rehabilitación energética',
    description:
      'Mejora de la eficiencia energética de edificios: aislamiento, ventilación, certificación energética y acceso a subvenciones.',
    href: '/rehabilitacion-energetica/',
    ctaLabel: 'Ver servicio de rehabilitación energética',
    image: { src: imageMeeting, shape: 2 },
    tiers: [
      {
        name: 'Auditoría energética',
        price: 'Desde 400 €',
        description:
          'Diagnóstico del estado energético del edificio o vivienda con propuestas de mejora priorizadas.',
        highlighted: true,
      },
      {
        name: 'Proyecto de rehabilitación',
        price: 'Consultar',
        description:
          'Proyecto técnico de mejora energética: aislamiento, ventilación, carpintería y gestión de subvenciones.',
      },
    ],
  },
  {
    id: 'reforma-masias',
    name: 'Reforma de masías',
    description:
      'Reforma y rehabilitación de masías catalanas tradicionales. Respeto del patrimonio con confort contemporáneo.',
    href: '/reforma-masias/',
    ctaLabel: 'Ver servicio de reforma de masías',
    image: { src: imageWhiteboard, shape: 0 },
    tiers: [
      {
        name: 'Estudio de viabilidad',
        price: 'Desde 500 €',
        description:
          'Visita a la finca, diagnóstico estructural, análisis de la normativa urbanística y estimación presupuestaria.',
        highlighted: true,
      },
      {
        name: 'Proyecto de rehabilitación',
        price: 'Consultar',
        description:
          'Proyecto completo: consolidación estructural, instalaciones, interiorismo y paisajismo.',
      },
    ],
  },
  {
    id: 'paisajismo',
    name: 'Paisajismo',
    description:
      'Diseño de jardines, terrazas y espacios exteriores. Proyectos de paisajismo que integran vegetación, materiales y funcionalidad.',
    href: '/paisajismo/',
    ctaLabel: 'Ver servicio de paisajismo',
    image: { src: imageLaptop, shape: 1 },
    tiers: [
      {
        name: 'Consulta inicial',
        price: 'Desde 150 €',
        description:
          'Visita al espacio exterior, análisis de las condiciones (orientación, suelo, clima) y primeras propuestas de diseño.',
        highlighted: true,
      },
      {
        name: 'Proyecto de paisajismo',
        price: 'Consultar',
        description:
          'Proyecto completo: plano de plantación, selección de especies, diseño de hardscape, iluminación exterior y seguimiento de ejecución.',
      },
    ],
  },
]

const tocItems = servicePricing.map(({ id, name }) => ({ id, name }))

export const metadata: Metadata = {
  title: 'Precios interiorismo Barcelona | Tarifas transparentes',
  description:
    'Descubre los precios de nuestros servicios de interiorismo y arquitectura en Barcelona. Tarifas transparentes para interiorismo, decoración, home staging, interiorismo comercial y rehabilitación.',
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
