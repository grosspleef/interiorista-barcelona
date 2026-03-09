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
      'Nuestros interioristas en Barcelona transforman tu vivienda con proyectos de diseño de interiores a medida: redistribución de espacios, selección de materiales y seguimiento de obra para un resultado que refleja tu estilo de vida',
    href: '/diseno-interiores/',
  },
  {
    id: 'decoracion-interiores',
    name: 'Decoración',
    shortName: 'Decoración',
    description:
      'Servicio de decoración de interiores en Barcelona: selección de mobiliario, textiles, iluminación y acabados. Creamos ambientes con personalidad que combinan estética y funcionalidad en cada rincón de tu hogar',
    href: '/decoracion-interiores/',
  },
  {
    id: 'home-staging',
    name: 'Home staging',
    shortName: 'Home staging',
    description:
      'Home staging profesional en Barcelona para vender o alquilar tu inmueble más rápido y al mejor precio. Preparamos tu vivienda con una puesta en escena estratégica que maximiza su atractivo ante los compradores',
    href: '/home-staging/',
  },
  {
    id: 'interiorismo-comercial',
    name: 'Interiorismo comercial',
    shortName: 'Interiorismo comercial',
    description:
      'Interiorismo comercial en Barcelona para restaurantes, hoteles, tiendas y locales. Diseñamos espacios que refuerzan la identidad de tu marca y mejoran la experiencia de tus clientes desde el primer paso',
    href: '/interiorismo-comercial/',
  },
  {
    id: 'reforma-oficinas',
    name: 'Reforma de oficinas',
    shortName: 'Reforma oficinas',
    description:
      'Reforma y diseño de oficinas en Barcelona: espacios de trabajo, coworkings y sedes corporativas. Creamos entornos profesionales que potencian la productividad y el bienestar de los equipos',
    href: '/reforma-oficinas/',
  },
  {
    id: 'arquitecto',
    name: 'Arquitecto',
    shortName: 'Arquitecto',
    description:
      'Arquitectos colegiados en Barcelona para proyectos residenciales, obra nueva y rehabilitaciones. Gestionamos licencias, dirección de obra y coordinación de gremios para que tu proyecto se ejecute con rigor técnico y dentro de plazo',
    href: '/arquitecto/',
  },
  {
    id: 'rehabilitacion-energetica',
    name: 'Rehabilitación energética',
    shortName: 'Rehabilitación energética',
    description:
      'Rehabilitación energética de edificios en Barcelona: aislamiento, ventilación, certificación energética y acceso a subvenciones. Reducimos tu consumo energético y mejoramos el confort térmico de tu vivienda',
    href: '/rehabilitacion-energetica/',
  },
  {
    id: 'asesoria-compra-vivienda',
    name: 'Asesoramiento compra vivienda',
    shortName: 'Asesoría compra',
    description:
      'Evaluación técnica y estética de viviendas antes de la compra con la mirada experta de un interiorista en Barcelona. Te ayudamos a detectar el potencial real de cada inmueble y a evitar reformas imprevistas',
    href: '/asesoria-compra-vivienda/',
  },
  {
    id: 'compra-sobre-plano',
    name: 'Compra sobre plano',
    shortName: 'Sobre plano',
    description:
      'Acompañamiento profesional en la compra de obra nueva en Barcelona: revisión de planos, personalización de acabados y negociación con la promotora para que tu futura vivienda se adapte a tus necesidades desde el primer día',
    href: '/compra-sobre-plano/',
  },
  {
    id: 'ampliacion-vivienda',
    name: 'Ampliación de vivienda',
    shortName: 'Ampliación',
    description:
      'Ampliación de vivienda en Barcelona: extensiones, sobrelevaciones y aprovechamiento de áticos o terrazas. Ganamos metros útiles optimizando la estructura existente para que tu hogar crezca contigo',
    href: '/ampliacion-vivienda/',
  },
  {
    id: 'interiorismo-accesible',
    name: 'Interiorismo accesible',
    shortName: 'Accesibilidad',
    description:
      'Diseño de interiores adaptado a personas con movilidad reducida en Barcelona. Proyectos que eliminan barreras arquitectónicas sin renunciar a la estética, garantizando confort y autonomía en cada espacio del hogar',
    href: '/interiorismo-accesible/',
  },
  {
    id: 'reforma-masias',
    name: 'Reforma de masías',
    shortName: 'Reforma masías',
    description:
      'Reforma y rehabilitación de masías catalanas con respeto por la arquitectura tradicional. Modernizamos instalaciones y espacios interiores conservando el carácter y el encanto original de cada propiedad',
    href: '/reforma-masias/',
  },
  {
    id: 'licitaciones-arquitectura',
    name: 'Licitaciones de arquitectura',
    shortName: 'Licitaciones',
    description:
      'Participación en licitaciones y concursos de arquitectura en Barcelona: equipamientos públicos, edificios institucionales y proyectos urbanos. Aportamos experiencia técnica y capacidad de gestión para propuestas competitivas',
    href: '/licitaciones-arquitectura/',
  },
  {
    id: 'paisajismo',
    name: 'Paisajismo',
    shortName: 'Paisajismo',
    description:
      'Diseño de jardines, terrazas y espacios exteriores en Barcelona. Creamos paisajes mediterráneos sostenibles que prolongan tu hogar al aire libre con vegetación autóctona y soluciones de bajo mantenimiento',
    href: '/paisajismo/',
  },
]

export const servicePathPrefixes = services.map((s) =>
  s.href.replace(/\/$/, '').replace(/^\//, ''),
)
