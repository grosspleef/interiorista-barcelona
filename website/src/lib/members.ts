import { type StaticImageData } from 'next/image'

import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'

export type Member = {
  slug: string
  name: string
  professionLabel: string
  image: StaticImageData
  href: string
  neighborhoods: string[]
  serviceIds: string[]
  bio: string
  training: string
  yearsExperience: number
}

export const members: Member[] = [
  {
    slug: 'marta-arquitecta-interiores-barcelona',
    name: 'Marta',
    professionLabel: 'Arquitecta de interiores',
    image: imageLeslieAlexander,
    href: '/quienes-somos/marta-arquitecta-interiores-barcelona/',
    neighborhoods: ['Eixample', 'Gràcia'],
    serviceIds: [
      'diseno-interiores',
      'decoracion-interiores',
      'rehabilitacion-energetica',
    ],
    bio: 'Formada en el Politecnico di Milano, Marta combina la rigurosidad técnica italiana con la sensibilidad mediterránea. Especializada en la transformación integral de pisos modernistas en el Eixample y viviendas con carácter en Gràcia, su enfoque une interiorismo estructural y decoración contemporánea. Su experiencia en rehabilitación energética le permite optimizar el confort térmico sin comprometer la estética del espacio.',
    training: 'Politecnico di Milano (Italia)',
    yearsExperience: 14,
  },
  {
    slug: 'jordi-arquitecto-barcelona',
    name: 'Jordi',
    professionLabel: 'Arquitecto',
    image: imageMichaelFoster,
    href: '/quienes-somos/jordi-arquitecto-barcelona/',
    neighborhoods: ['Eixample', 'Born'],
    serviceIds: [
      'arquitecto',
      'ampliacion-vivienda',
      'licitaciones-arquitectura',
    ],
    bio: 'Titulado por la ETSAB y colegiado en el COAC, Jordi es arquitecto con más de 18 años de experiencia en proyectos residenciales y licitaciones públicas en Barcelona. Ha dirigido ampliaciones de vivienda en el Eixample y rehabilitaciones de edificios patrimoniales en el Born. Su dominio del marco normativo catalán y su experiencia en concursos de arquitectura le permiten abordar proyectos de cualquier envergadura.',
    training: 'ETSAB — Escola Tècnica Superior d\'Arquitectura de Barcelona',
    yearsExperience: 18,
  },
  {
    slug: 'carla-decoradora-barcelona',
    name: 'Carla',
    professionLabel: 'Decoradora',
    image: imageDriesVincent,
    href: '/quienes-somos/carla-decoradora-barcelona/',
    neighborhoods: ['Born', 'Barceloneta'],
    serviceIds: [
      'decoracion-interiores',
      'home-staging',
      'asesoria-compra-vivienda',
    ],
    bio: 'Graduada del Istituto Marangoni de Milán, Carla aporta una visión cosmopolita a cada proyecto de decoración. Especializada en home staging y asesoría de compra de vivienda, trabaja principalmente en el Born y la Barceloneta, donde su conocimiento del mercado inmobiliario local es un activo clave para sus clientes. Su ojo para el detalle transforma cada espacio en un lugar que enamora a primera vista.',
    training: 'Istituto Marangoni (Milán, Italia)',
    yearsExperience: 11,
  },
  {
    slug: 'andreu-arquitecto-interiores-barcelona',
    name: 'Andreu',
    professionLabel: 'Arquitecto de interiores',
    image: imageChelseaHagon,
    href: '/quienes-somos/andreu-arquitecto-interiores-barcelona/',
    neighborhoods: ['Poblenou', 'Sant Martí'],
    serviceIds: [
      'diseno-interiores',
      'interiorismo-comercial',
      'reforma-oficinas',
    ],
    bio: 'Formado en Central Saint Martins de Londres, Andreu fusiona el diseño conceptual británico con la funcionalidad del interiorismo comercial barcelonés. Referente en la transformación de espacios de trabajo y locales comerciales en Poblenou y Sant Martí, ha liderado proyectos de reforma de oficinas y interiorismo comercial para startups, restaurantes y coworkings en el distrito de la innovación de Barcelona.',
    training: 'Central Saint Martins (Londres, Reino Unido)',
    yearsExperience: 13,
  },
  {
    slug: 'nuria-arquitecta-interiores-barcelona',
    name: 'Nuria',
    professionLabel: 'Arquitecta de interiores',
    image: imageEmmaDorsey,
    href: '/quienes-somos/nuria-arquitecta-interiores-barcelona/',
    neighborhoods: ['Sarrià', 'Les Corts'],
    serviceIds: [
      'diseno-interiores',
      'ampliacion-vivienda',
      'compra-sobre-plano',
    ],
    bio: 'Con formación en la Arkitektskolen Aarhus de Dinamarca, Nuria integra los principios del diseño escandinavo —luz natural, materiales nobles, funcionalidad— en sus proyectos de interiorismo en Barcelona. Especializada en ampliación de vivienda y compra sobre plano en Sarrià y Les Corts, acompaña a sus clientes desde la selección del inmueble hasta la entrega final de un hogar luminoso y armonioso.',
    training: 'Arkitektskolen Aarhus (Dinamarca)',
    yearsExperience: 12,
  },
  {
    slug: 'marc-decorador-barcelona',
    name: 'Marc',
    professionLabel: 'Decorador',
    image: imageLeonardKrasner,
    href: '/quienes-somos/marc-decorador-barcelona/',
    neighborhoods: ['Sant Andreu', 'Sants'],
    serviceIds: [
      'decoracion-interiores',
      'home-staging',
      'interiorismo-comercial',
    ],
    bio: 'Formado en Christie\'s Education de Londres, Marc aporta un conocimiento profundo del arte y el diseño de colecciones a sus proyectos de decoración. Activo en Sant Andreu y Sants, se ha convertido en un referente del home staging en Barcelona, con un índice de venta superior al 90% en los inmuebles que prepara. Su experiencia en interiorismo comercial le permite también transformar locales y boutiques con una identidad visual única.',
    training: 'Christie\'s Education (Londres, Reino Unido)',
    yearsExperience: 10,
  },
  {
    slug: 'laia-paisajista-barcelona',
    name: 'Laia',
    professionLabel: 'Paisajista',
    image: imageBlakeReid,
    href: '/quienes-somos/laia-paisajista-barcelona/',
    neighborhoods: ['Sarrià', 'Pedralbes'],
    serviceIds: ['paisajismo', 'diseno-interiores', 'reforma-masias'],
    bio: 'Máster en Paisajismo por la UPC, Laia diseña jardines, terrazas y espacios exteriores que dialogan con la arquitectura interior. Su doble competencia en paisajismo e interiorismo le permite crear proyectos donde interior y exterior forman un todo coherente. Especializada en la reforma de masías catalanas, trabaja principalmente en Sarrià y Pedralbes, donde las propiedades con jardín requieren una visión paisajística integral.',
    training: 'UPC — Màster en Paisajismo',
    yearsExperience: 15,
  },
  {
    slug: 'pere-paisajista-barcelona',
    name: 'Pere',
    professionLabel: 'Paisajista',
    image: imageKathrynMurphy,
    href: '/quienes-somos/pere-paisajista-barcelona/',
    neighborhoods: ['Poblenou', 'Sant Martí'],
    serviceIds: [
      'paisajismo',
      'interiorismo-comercial',
      'rehabilitacion-energetica',
    ],
    bio: 'Formado en Wageningen University de los Países Bajos, Pere aplica los principios del diseño paisajístico holandés —sostenibilidad, biodiversidad, gestión del agua— a los espacios urbanos de Barcelona. Activo en Poblenou y Sant Martí, combina paisajismo con rehabilitación energética para crear terrazas y azoteas verdes que mejoran la eficiencia del edificio. Su experiencia en interiorismo comercial incluye el diseño de espacios verdes para restaurantes y hoteles.',
    training: 'Wageningen University (Países Bajos)',
    yearsExperience: 16,
  },
  {
    slug: 'elena-arquitecta-barcelona',
    name: 'Elena',
    professionLabel: 'Arquitecta',
    image: imageWhitneyFrancis,
    href: '/quienes-somos/elena-arquitecta-barcelona/',
    neighborhoods: ['Gràcia', 'Sant Gervasi'],
    serviceIds: [
      'arquitecto',
      'rehabilitacion-energetica',
      'interiorismo-accesible',
    ],
    bio: 'Graduada de la ETH Zürich, Elena aporta la precisión suiza y una visión vanguardista de la arquitectura sostenible. Especializada en rehabilitación energética e interiorismo accesible, trabaja en Gràcia y Sant Gervasi con un compromiso firme: crear espacios bellos, eficientes y accesibles para todos. Su dominio de la normativa de accesibilidad y las certificaciones energéticas la convierte en una referente para proyectos que buscan el máximo rendimiento sin renunciar al diseño.',
    training: 'ETH Zürich (Suiza)',
    yearsExperience: 17,
  },
]

export function getMemberBySlug(slug: string): Member | undefined {
  return members.find((m) => m.slug === slug)
}
