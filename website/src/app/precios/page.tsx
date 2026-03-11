import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { PricingBlock, type PricingTier } from '@/components/PricingBlock'
import { PricingTableOfContents } from '@/components/PricingTableOfContents'
import { RootLayout } from '@/components/RootLayout'
import imageDormitorioBorn from '@/images/decoracion-dormitorio-minimalista-born-barcelona.jpg'
import imagePenthouse from '@/images/diseno-interiores-penthouse-minimalista-barcelona.webp'
import imageSalonStaging from '@/images/home-staging-salon-eixample-barcelona.jpg'
import imageJardinSantCugat from '@/images/paisajismo-jardin-piscina-natural-villa-sant-cugat.webp'
import imageMeeting from '@/images/meeting.jpg'
import imagePisoObraNueva from '@/images/piso-obra-nueva-personalizado-eixample-barcelona.jpg'
import imageSalonAccesible from '@/images/salon-accesible-moderno-poblenou-barcelona.jpg'
import imageTerrazaAtico from '@/images/terraza-atico-vista-barcelona-asesoria.jpg'
import imageVillaContemporanea from '@/images/villa-contemporanea-doble-altura-pedralbes-barcelona.jpg'
import imageHotelLobby from '@/images/interiorismo-boutique-hotel-lobby-eixample-barcelona.jpg'
import imageStartup22 from '@/images/reforma-oficina-startup-tech-22-barcelona.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

type ServicePricing = {
  id: string
  name: string
  description: string
  href: string
  ctaLabel: string
  image: { src: typeof imageMeeting; shape?: 0 | 1 | 2 }
  tiers: PricingTier[]
}

const servicePricing: ServicePricing[] = [
  {
    id: 'diseno-interiores',
    name: 'Interiorismo',
    description:
      'Proyectos de diseño de interiores que transforman la distribución y estructura de tu espacio. Intervenciones que requieren proyecto técnico y visado.',
    href: '/diseno-interiores/',
    ctaLabel: 'Ver servicio de interiorismo',
    image: { src: imagePenthouse, shape: 2 },
    tiers: [
      {
        name: 'Consulta inicial',
        price: 'Gratuita',
        description:
          'Primera visita a tu domicilio para evaluar el espacio, entender tus necesidades y definir el alcance del proyecto.',
      },
      {
        name: 'Proyecto de diseño de interiores',
        price: 'Desde 60 €/m²',
        description:
          'Proyecto completo: planos, 3D, selección de materiales y mobiliario. Incluye visado y gestión de licencias cuando necesario. ≤40 m²: 80 €/m² · 41-80 m²: 70 €/m² · 81-120 m²: 65 €/m² · ≥121 m²: 60 €/m².',
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
    image: { src: imageDormitorioBorn, shape: 0 },
    tiers: [
      {
        name: 'Consulta inicial',
        price: 'Gratuita',
        description:
          'Primera visita a tu domicilio para evaluar el espacio, entender tu estilo y definir las líneas del proyecto de decoración.',
      },
      {
        name: 'Proyecto de decoración',
        price: 'Desde 50 €/m²',
        description:
          'Proyecto completo: moodboards, plano de mobiliario, shopping list, presupuesto detallado y acompañamiento en compras. ≤40 m²: 65 €/m² · 41-80 m²: 60 €/m² · 81-120 m²: 55 €/m² · ≥121 m²: 50 €/m².',
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
    image: { src: imageSalonStaging, shape: 1 },
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
    id: 'interiorismo-comercial',
    name: 'Interiorismo comercial',
    description:
      'Diseño de interiores para restaurantes, hoteles, locales comerciales y espacios de retail en Barcelona.',
    href: '/interiorismo-comercial/',
    ctaLabel: 'Ver servicio de interiorismo comercial',
    image: { src: imageHotelLobby, shape: 2 },
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
    image: { src: imageStartup22, shape: 0 },
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
    id: 'arquitecto',
    name: 'Arquitecto',
    description:
      'Proyectos arquitectónicos residenciales y de obra nueva. Diseño, proyecto técnico visado y dirección de obra.',
    href: '/arquitecto/',
    ctaLabel: 'Ver servicio de arquitectura',
    image: { src: imageVillaContemporanea, shape: 0 },
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
    id: 'asesoria-compra-vivienda',
    name: 'Asesoramiento compra vivienda',
    description:
      'Evaluación técnica y estética de un inmueble antes de la compra. Te acompañamos para tomar la mejor decisión.',
    href: '/asesoria-compra-vivienda/',
    ctaLabel: 'Ver servicio de asesoría',
    image: { src: imageTerrazaAtico, shape: 1 },
    tiers: [
      {
        name: 'Contravisita de asesoramiento',
        price: 'Desde 250 €',
        description:
          'Visita al inmueble con un interiorista para evaluar el potencial de redistribución, el estado de las instalaciones y estimar el coste de una posible reforma.',
        highlighted: true,
      },
      {
        name: 'Informe técnico completo',
        price: 'Desde 350 €',
        description:
          'Informe escrito con evaluación del estado del inmueble, estimación desglosada de costes de reforma por partidas y esquema orientativo de redistribución.',
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
    image: { src: imagePisoObraNueva, shape: 0 },
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
    id: 'interiorismo-accesible',
    name: 'Interiorismo accesible',
    description:
      'Diseño de interiores adaptado a personas con movilidad reducida. Soluciones funcionales y estéticas para una vivienda accesible.',
    href: '/interiorismo-accesible/',
    ctaLabel: 'Ver servicio de accesibilidad',
    image: { src: imageSalonAccesible, shape: 2 },
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
  {
    id: 'paisajismo',
    name: 'Paisajismo',
    description:
      'Diseño de jardines, terrazas y espacios exteriores. Proyectos de paisajismo que integran vegetación, materiales y funcionalidad.',
    href: '/paisajismo/',
    ctaLabel: 'Ver servicio de paisajismo',
    image: { src: imageJardinSantCugat, shape: 1 },
    tiers: [
      {
        name: 'Consulta inicial',
        price: 'Gratuita',
        description:
          'Visita al espacio exterior, análisis de las condiciones (orientación, suelo, clima) y primeras propuestas de diseño.',
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
  alternates: {
    canonical: '/precios/',
  },
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
          de cada uno de nuestros servicios de interiorismo y arquitectura en
          Barcelona. Como colectivo de profesionales independientes, los precios
          pueden variar ligeramente de un arquitecto o interiorista a otro. Cada
          proyecto es único: los precios definitivos se concretan tras una
          primera toma de contacto.
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

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-8 sm:px-10 sm:py-12">
            <h3 className="font-display text-base font-semibold text-neutral-950">
              Información sobre nuestras tarifas
            </h3>
            <p className="mt-4 text-sm text-neutral-700">
              Las tarifas indicadas son orientativas y pueden variar en función
              de la complejidad de tu proyecto y del profesional asignado.
              Interiorista Barcelona es un colectivo de arquitectos e
              interioristas independientes: cada profesional fija sus propios
              honorarios dentro de las horquillas indicadas. Tras analizar tus
              necesidades, te entregaremos un presupuesto personalizado y
              detallado, sin compromiso.
            </p>
            <p className="mt-4 text-sm text-neutral-700">
              Nuestros servicios de interiorismo, arquitectura, decoración y
              paisajismo se realizan en Barcelona ciudad y municipios
              colindantes: L&#39;Hospitalet de Llobregat, Badalona, Santa
              Coloma de Gramenet, Sant Adrià de Besòs, Esplugues de Llobregat,
              Cornellà de Llobregat, Sant Joan Despí, Sant Just Desvern,
              Castelldefels, Gavà, Sitges y Sant Cugat del Vallès (lista no
              exhaustiva). También intervenimos en el resto de la provincia de
              Barcelona y en la Costa Brava.
            </p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
