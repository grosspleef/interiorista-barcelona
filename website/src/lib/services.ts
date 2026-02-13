export type Service = {
  id: string
  name: string
  shortName: string
  description: string
  href: string
}

export const services: Service[] = [
  {
    id: 'diseno-interiores',
    name: 'Interiorismo',
    shortName: 'Interiorismo',
    description:
      'Diseño de interiores integral: redistribución, reforma y transformación de tu hogar en Barcelona',
    href: '/diseno-interiores/',
  },
  {
    id: 'decoracion-interiores',
    name: 'Decoración',
    shortName: 'Decoración',
    description:
      'Selección de mobiliario, textiles e iluminación para tu hogar',
    href: '/decoracion-interiores/',
  },
  {
    id: 'asesoria-compra-vivienda',
    name: 'Asesoramiento compra vivienda',
    shortName: 'Asesoría compra',
    description:
      'Evaluación técnica y estética antes de comprar tu vivienda',
    href: '/asesoria-compra-vivienda/',
  },
  {
    id: 'compra-sobre-plano',
    name: 'Compra sobre plano',
    shortName: 'Sobre plano',
    description:
      'Acompañamiento en la compra de obra nueva y personalización',
    href: '/compra-sobre-plano/',
  },
  {
    id: 'home-staging',
    name: 'Home staging',
    shortName: 'Home staging',
    description:
      'Puesta en escena de inmuebles para venta o alquiler',
    href: '/home-staging/',
  },
  {
    id: 'interiorismo-accesible',
    name: 'Interiorismo accesible',
    shortName: 'Accesibilidad',
    description:
      'Diseño de interiores adaptado a personas con movilidad reducida',
    href: '/interiorismo-accesible/',
  },
  {
    id: 'arquitecto',
    name: 'Arquitecto',
    shortName: 'Arquitecto',
    description:
      'Proyectos arquitectónicos residenciales y de obra nueva',
    href: '/arquitecto/',
  },
  {
    id: 'ampliacion-vivienda',
    name: 'Ampliación de vivienda',
    shortName: 'Ampliación',
    description:
      'Extensiones, sobrelevaciones y agrandamiento de espacios',
    href: '/ampliacion-vivienda/',
  },
  {
    id: 'interiorismo-comercial',
    name: 'Interiorismo comercial',
    shortName: 'Interiorismo comercial',
    description:
      'Interiorismo para restaurantes, hoteles y locales comerciales',
    href: '/interiorismo-comercial/',
  },
  {
    id: 'reforma-oficinas',
    name: 'Reforma de oficinas',
    shortName: 'Reforma oficinas',
    description:
      'Reforma y diseño de oficinas, coworking y espacios de trabajo',
    href: '/reforma-oficinas/',
  },
  {
    id: 'licitaciones-arquitectura',
    name: 'Licitaciones de arquitectura',
    shortName: 'Licitaciones',
    description:
      'Licitaciones, concursos de arquitectura y proyectos de equipamientos públicos',
    href: '/licitaciones-arquitectura/',
  },
  {
    id: 'rehabilitacion-energetica',
    name: 'Rehabilitación energética',
    shortName: 'Rehabilitación energética',
    description:
      'Mejora de la eficiencia energética y certificación de edificios',
    href: '/rehabilitacion-energetica/',
  },
  {
    id: 'reforma-masias',
    name: 'Reforma de masías',
    shortName: 'Reforma masías',
    description:
      'Reforma y rehabilitación de masías catalanas tradicionales',
    href: '/reforma-masias/',
  },
  {
    id: 'paisajismo',
    name: 'Paisajismo',
    shortName: 'Paisajismo',
    description:
      'Diseño de jardines, terrazas y espacios exteriores',
    href: '/paisajismo/',
  },
]

export const servicePathPrefixes = services.map((s) =>
  s.href.replace(/\/$/, '').replace(/^\//, ''),
)
