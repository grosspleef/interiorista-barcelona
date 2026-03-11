import { type StaticImageData } from 'next/image'

import antesSalon from './antes-reforma-masia-salon-vigas-madera-boveda-catalana.webp'
import antesCocina from './antes-reforma-masia-cocina-chimenea-piedra-suelo-terracota.webp'
import antesSuite from './antes-reforma-masia-suite-combles-piedra-chaux-bano-abierto.webp'

const antesImages: Array<StaticImageData | null> = [
  null,
  antesSalon,
  antesCocina,
  null,
  antesSuite,
  null,
]

export default antesImages
