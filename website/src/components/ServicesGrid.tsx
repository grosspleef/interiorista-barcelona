import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import imageBanoAccesible from '@/images/bano-accesible-diseno-sarria-barcelona.jpg'
import imageDormitorioBorn from '@/images/decoracion-dormitorio-minimalista-born-barcelona.jpg'
import imageSalonContemporaneo from '@/images/diseno-interiores-salon-contemporaneo-barcelona.jpg'
import imageSalonStaging from '@/images/home-staging-salon-eixample-barcelona.jpg'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imagePisoObraNueva from '@/images/piso-obra-nueva-personalizado-eixample-barcelona.jpg'
import imageTerrazaAtico from '@/images/terraza-atico-vista-barcelona-asesoria.jpg'
import imageVillaContemporanea from '@/images/villa-contemporanea-doble-altura-pedralbes-barcelona.jpg'
import imageHotelLobby from '@/images/interiorismo-boutique-hotel-lobby-eixample-barcelona.jpg'
import imageStartup22 from '@/images/reforma-oficina-startup-tech-22-barcelona.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { services } from '@/lib/services'
import type { Service } from '@/lib/services'
import type { StaticImageData } from 'next/image'

const serviceImages = [imageLaptop, imageMeeting, imageWhiteboard]

const serviceImageOverrides: Record<string, StaticImageData> = {
  'diseno-interiores': imageSalonContemporaneo,
  'decoracion-interiores': imageDormitorioBorn,
  'asesoria-compra-vivienda': imageTerrazaAtico,
  'compra-sobre-plano': imagePisoObraNueva,
  'home-staging': imageSalonStaging,
  'interiorismo-accesible': imageBanoAccesible,
  'arquitecto': imageVillaContemporanea,
  'reforma-oficinas': imageStartup22,
  'interiorismo-comercial': imageHotelLobby,
}

const homeServiceIds = [
  'diseno-interiores',
  'decoracion-interiores',
  'home-staging',
  'asesoria-compra-vivienda',
  'compra-sobre-plano',
  'arquitecto',
  'reforma-oficinas',
  'interiorismo-comercial',
  'paisajismo',
]

const homeServices = homeServiceIds
  .map((id) => services.find((s) => s.id === id))
  .filter(Boolean) as Service[]

function ServiceCard({
  service,
  index,
}: {
  service: Service
  index: number
}) {
  return (
    <FadeIn className="flex">
      <article className="relative flex w-full flex-col overflow-hidden rounded-3xl ring-1 ring-neutral-950/5 transition hover:bg-neutral-50">
        <Image
          src={serviceImageOverrides[service.id] ?? serviceImages[index % serviceImages.length]}
          alt=""
          className="aspect-[16/9] w-full object-cover"
        />
        <div className="p-6 sm:p-8">
          <h3>
            <Link href={service.href}>
              <span className="absolute inset-0 rounded-3xl" />
              <span className="font-display text-2xl font-semibold text-neutral-950">
                {service.name}
              </span>
            </Link>
          </h3>
          <p className="mt-4 text-base text-neutral-600">
            {service.description}
          </p>
        </div>
      </article>
    </FadeIn>
  )
}

export function ServicesGrid() {
  return (
    <section id="servicios" className="scroll-mt-24">
      <SectionIntro
        eyebrow="Servicios"
        title="Soluciones integrales de interiorismo y arquitectura en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Nuestro colectivo cubre todas las disciplinas del diseño de interiores
          y la arquitectura: desde la decoración hasta la rehabilitación
          energética, pasando por el home staging y los proyectos comerciales.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}
