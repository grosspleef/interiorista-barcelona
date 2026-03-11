import { type Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import imageReformaSalon from '@/images/diseno-interiores-salon-contemporaneo-barcelona.jpg'
import imageAticoPenthouse from '@/images/diseno-interiores-penthouse-minimalista-barcelona.webp'
import imageDecoSalon from '@/images/decoracion-salon-mediterraneo-sarria-barcelona.jpg'
import imageRestaurante from '@/images/interiorismo-restaurante-gastronomico-born-barcelona.jpg'
import imageLoftIndustrial from '@/images/diseno-interiores-loft-industrial-poblenou-barcelona.webp'
import imageMasia from '@/images/reforma-masia-salon-vigas-madera-boveda-catalana.webp'
import imageHotel from '@/images/interiorismo-boutique-hotel-lobby-eixample-barcelona.jpg'

type Testimonial = {
  projectType: string
  quote: string
  client: string
}

const testimonials: Testimonial[] = [
  // ——— 1 ———
  {
    projectType: 'Unificación de dos viviendas',
    quote:
      'Contacté con el colectivo y me pusieron en contacto con un arquitecto de interiores que entendió perfectamente mi proyecto de unificación de dos pisos. Concibió, preparó y supervisó la obra de forma impecable. El resultado es un hogar homogéneo, coherente, totalmente conforme a mis expectativas y gustos, y todo respetando el presupuesto acordado. ¡Bravo y gracias!',
    client: 'Lucía S.',
  },
  // ——— 2 ———
  {
    projectType: 'Renovación integral de un piso de 95 m²',
    quote:
      'Los interioristas del colectivo fueron de gran ayuda para la renovación casi total de nuestro piso. Pudimos apreciar su profesionalismo, su gran reactividad y su disponibilidad. Las restricciones eran numerosas y su capacidad de escucha les permitió tener muy en cuenta las ligadas a nuestro modo de vida. Apreciamos especialmente las propuestas para mejorar la circulación. Al no estar presentes, se encargaron de toda la coordinación y seguimiento de la obra.',
    client: 'Carlos y Marta C.',
  },
  // ——— 3 ———
  {
    projectType: 'Apertura de un piso señorial',
    quote:
      'La interiorista se encargó de abrir el salón de nuestro piso señorial, eliminando tabiques no portantes y creando un espacio diáfano lleno de luz. Su dominio de los elementos arquitectónicos originales — molduras, suelos hidráulicos, carpinterías — fue excepcional. El resultado conserva toda la esencia del edificio con una funcionalidad completamente moderna.',
    client: 'Andreu y Nuria P.',
  },
  // ——— 4 ———
  {
    projectType: 'Renovación de un piso con altillo de 100 m²',
    quote:
      'Una arquitecta del colectivo me acompañó en la renovación completa de un precioso piso con altillo de 100 m², que tenía mucho encanto (última planta de un antiguo edificio) y mucho potencial. El piso es hoy una joya, mi refugio, gracias a su rigor, su conocimiento real de las obras, su excelente red de artesanos, la optimización del espacio y la modernidad, todo preservando el encanto de lo antiguo. Gracias de nuevo por esta fructífera colaboración.',
    client: 'Alexia K.',
  },
  // ——— 5 ———
  {
    projectType: 'Decoración de un piso',
    quote:
      'Mi piso había sufrido obras importantes de estructura hacía 8 años, y me gustaba mucho el resultado, pero sentía que los acabados carecían de finura, con una decoración clásica y demasiado básica. Quería retomar la decoración para un resultado más cuidado y cálido, mejorando además la funcionalidad y convivialidad. La interiorista estuvo realmente a la escucha de nuestras peticiones, proponiéndonos ideas y soluciones que iban más allá de nuestras expectativas. Seleccionó artesanos de gran calidad y aseguró el seguimiento de la obra con visitas regulares. ¡Adoramos nuestro nuevo hogar!',
    client: 'Isabel B.',
  },
  // ——— 6 ———
  {
    projectType: 'Reforma de una cocina',
    quote:
      'Contacté con el colectivo cuando quise reformar mi cocina. Muy atentos a mis gustos y deseos, supieron hacer propuestas innovadoras teniendo en cuenta mis preferencias. Preocupados por el control de costes, respetaron nuestro presupuesto. Aseguraron con mucha disponibilidad el seguimiento de la obra. ¡El resultado es una cocina luminosa en la que me siento muy bien!',
    client: 'Catalina C.',
  },
  // ——— 7 ———
  {
    projectType: 'Renovación completa de un piso',
    quote:
      'Contactamos con el colectivo para que nos ayudasen con la renovación completa de nuestro piso. Nos pusieron en contacto con una arquitecta de interiores que se hizo cargo del proyecto de la A a la Z, acompañándonos en cada etapa: desde la pre-concepción pasando por la validación del presupuesto, hasta la realización y seguimiento de la obra. La empresa que hizo intervenir realizó el proyecto respetando el pliego de condiciones y el calendario. ¡Estamos encantados con nuestro nuevo hogar!',
    client: 'Sofía G.',
  },
  // ——— 8 ———
  {
    projectType: 'Renovación estilo Art Déco',
    quote:
      'Recurrimos al colectivo para reformar nuestro piso. El arquitecto de interiores que nos acompañó fue un profesional excepcional para la nueva configuración y el seguimiento de la obra, consiguiendo un estilo Art Déco renovado que respeta la esencia del edificio original. El resultado combina elegancia clásica con funcionalidad contemporánea.',
    client: 'Miguel y Ana R.',
  },
  // ——— 9 ———
  {
    projectType: 'Renovación de un piso familiar de 163 m²',
    quote:
      'Tras heredar el piso familiar, buscaba a alguien de confianza para su renovación. Había muchas habitaciones pequeñas, faltaba luz, la cocina y el baño estaban anticuados. Confié la renovación y el seguimiento de las obras a un arquitecto de interiores del colectivo y estoy muy satisfecha. Supo escuchar, fue paciente y disponible. Modernizó el piso sin que perdiera su "alma", algo muy importante para mí. Además, me puso en contacto con artesanos recomendados. El resultado es fiel a mis expectativas.',
    client: 'Vanessa P.',
  },
  // ——— 10 ———
  {
    projectType: 'Renovación de un piso',
    quote:
      'Me pusieron en contacto con un arquitecto de interiores para la renovación de mi piso. Recomiendo encarecidamente su trabajo, realizado con mucho esmero, escucha y profesionalismo. También me aconsejó artesanos muy competentes.',
    client: 'Lisa M.',
  },
  // ——— 11 ———
  {
    projectType: 'Interiorismo de una casa',
    quote:
      'Estamos muy contentos con el trabajo del colectivo en la casa que acabábamos de adquirir. La interiorista comprendió inmediatamente el partido que se podía sacar de la vivienda, que necesitaba como mínimo una renovación completa de baños y cocina, y tuvo excelentes ideas de redistribución. El resultado es muy logrado y solo recibimos elogios. Los plazos fueron respetados por el jefe de obra, muy serio y fiable.',
    client: 'Isabel W.',
  },
  // ——— 12 ———
  {
    projectType: 'Renovación completa de un piso',
    quote:
      'Interioristas… ¡pero también creadores de felicidad! Acabo de mudarme de nuevo a mi piso enteramente renovado. Su talento, su expertise, su dominio de los plazos y el profesionalismo constante desde la primera visita hasta el final de las obras no tienen igual que su amabilidad, su escucha y su eficacia. Resultado: ¡un piso que acaba de rejuvenecer con suavidad, espacio y luminosidad!',
    client: 'Pascual T.',
  },
  // ——— 13 ———
  {
    projectType: 'Renovación completa de un T2',
    quote:
      'El interiorista se encargó de la renovación completa de mi piso de dos habitaciones. Supo comprender y responder a mis expectativas. Gracias a su profesionalismo, me guió hacia las elecciones más pertinentes y supo seleccionar los artesanos adecuados para un trabajo de calidad respetando mi presupuesto. ¡Gracias por el magnífico resultado y la gran experiencia!',
    client: 'Silvia G.',
  },
  // ——— 14 ———
  {
    projectType: 'Renovación de un baño',
    quote:
      'Recurrí a los servicios del colectivo para la renovación de mi baño, cuyas dimensiones necesitaban soluciones a medida, y de la habitación en altillo. Estoy encantada con el resultado. Totalmente a la escucha, la arquitecta de interiores creó un espacio muy práctico y que me representa, con materiales de calidad.',
    client: 'Rosa P.',
  },
  // ——— 15 ———
  {
    projectType: 'Reforma y amueblamiento de un piso de 70 m²',
    quote:
      'El colectivo nos acompañó de la A a la Z: visita del piso antes de la compra, estudio de viabilidad y seguimiento de obra. Tuvieron paciencia y nos dieron consejos expertos sobre distribución, materiales, presupuesto y decoración. Cuando surgía una restricción técnica, siempre nos proponían soluciones de contorno inteligentes. Nos comunicaban regularmente el avance de las obras. Los plazos y presupuesto fueron respetados. Si tuviéramos que repetirlo, firmaríamos de nuevo con ellos.',
    client: 'Julia Z.',
  },
  // ——— 16 ———
  {
    projectType: 'Renovación interior de una casa del siglo XIX',
    quote:
      'Recurrimos al colectivo para las obras de renovación de nuestro piso. Nos permitió modificar la distribución de las estancias (baño, cocina, salón) y realizar la renovación. Sus ideas fueron excelentes. Nos recomendó artesanos muy serios. Aunque la fase de concepción es un poco larga, una vez lanzadas las obras, todo se desarrolló sin ningún problema ni retraso. El resultado es realmente bonito y sobre todo muy agradable de vivir.',
    client: 'Severina M.',
  },
  // ——— 17 ———
  {
    projectType: 'Reforma de un salón y una habitación',
    quote:
      'Contactamos con el colectivo para la reforma de nuestro salón y nuestra habitación. Nos crearon un proyecto genial: bonito y funcional a la vez. Supieron escucharnos, guiarnos y darnos consejos expertos. Además supervisaron magistralmente la realización de las obras. Gracias a su creatividad, profesionalismo, atención al detalle y ojo entrenado para asegurar la calidad, estamos plenamente satisfechos de nuestro nuevo interior.',
    client: 'Laura y Marcos G.',
  },
  // ——— 18 ———
  {
    projectType: 'Acondicionamiento de un semisótano',
    quote:
      'Fue por casualidad que encontré este colectivo de arquitectos. La casualidad hizo las cosas muy bien. El proyecto era acondicionar un semisótano en suite parental con rincón de despacho. Las propuestas me convencieron inmediatamente y respondían perfectamente a mis expectativas. La interiorista se adaptó también a mis restricciones presupuestarias y de almacenamiento. El resultado va mucho más allá de mis expectativas. No dudaré en recurrir de nuevo al colectivo para un futuro proyecto.',
    client: 'Mariana F.',
  },
  // ——— 19 ———
  {
    projectType: 'Renovación de un piso en edificio antiguo',
    quote:
      'Confiamos en el colectivo para el estudio y la coordinación de las obras de nuestro piso. Estamos absolutamente encantados con la colaboración. Las soluciones propuestas eran prácticas, estéticas y siempre dentro de nuestro presupuesto. La arquitecta gestionó con gran profesionalidad las problemáticas de obra, incluida la comunidad complicada y el edificio antiguo con sus desafíos estructurales. El piso fue entregado en los plazos anunciados. ¡Apreciamos especialmente su disponibilidad, entusiasmo y buen humor!',
    client: 'Ramón y Elena D.',
  },
  // ——— 20 ———
  {
    projectType: 'Decoración de un piso',
    quote:
      'Sentía que mi piso carecía de armonía. Decidí recurrir al colectivo, que me puso en contacto con una decoradora. Estoy muy contenta: supo materializar mis ideas y, sobre todo, aportar su toque personal. ¡Por eso le digo GRACIAS!',
    client: 'Miriam M.',
  },
  // ——— 21 ———
  {
    projectType: 'Interiorismo de una casa contemporánea de 250 m²',
    quote:
      'Recomendamos vivamente al colectivo, al que hemos recurrido por segunda vez. Después de una primera experiencia exitosa con la renovación completa de nuestro piso, el arquitecto nos acompañó y dirigió con maestría la ampliación. La creatividad, la visión espacial, la elección de materiales y colores, y la competencia técnica hacen de él un brillante arquitecto, que además es muy simpático.',
    client: 'Pablo y Cristina A.',
  },
  // ——— 22 ———
  {
    projectType: 'Renovación de un piso antiguo',
    quote:
      'Muy satisfecha con el trabajo realizado en mi piso, enteramente renovado. El arquitecto estuvo muy atento durante todas las fases del proyecto y me acompañó durante varios meses para responder al máximo a mis expectativas. Los profesionales recomendados también realizaron un trabajo de gran calidad. Recomiendo el colectivo regularmente a conocidos y recurriré de nuevo a ellos con mucho gusto.',
    client: 'Ana Laura M.',
  },
  // ——— 23 ———
  {
    projectType: 'Renovación completa de un piso de 115 m²',
    quote:
      'Trabajamos con el colectivo para renovar todo nuestro piso de 115 m². Un año después, ¡seguimos igual de satisfechos con el resultado! Creatividad, rigor, supieron comprendernos y ayudarnos respetando nuestros gustos y restricciones. Los plazos y costes previstos fueron respetados y el resultado está a la altura.',
    client: 'Frederic D.',
  },
  // ——— 24 ———
  {
    projectType: 'Renovación de una casa señorial',
    quote:
      'Solicitamos al colectivo para la renovación de una casa señorial, incluyendo el acondicionamiento de un bar/restaurante temático y 3 pisos. El interiorista intervino de la A a la Z (visita antes de la compra, estudio, trámites administrativos y seguimiento de obras). Estamos muy contentos del resultado. Un equipo realmente serio, reactivo, a la escucha y con excelentes ideas. ¡Lo recomendamos!',
    client: 'Maxime R.',
  },
  // ——— 25 ———
  {
    projectType: 'Renovación de un piso señorial',
    quote:
      'Recurrimos al colectivo, que supo escucharnos y comprender nuestros deseos para concebir un proyecto que nos representa. Los artesanos con los que trabajan son muy competentes y eficaces. ¡Recomendamos encarecidamente!',
    client: 'Quentin O.',
  },
  // ——— 26 ———
  {
    projectType: 'Modernización de un piso de 63 m²',
    quote:
      'Tras la adquisición de nuestro piso, recurrimos al colectivo y estamos encantados. Estuvieron a la escucha de nuestras expectativas y supieron tenerlas en cuenta en el proyecto. Nos aconsejaron respetando nuestro presupuesto.',
    client: 'Chrystelle P.',
  },
  // ——— 27 ———
  {
    projectType: 'Renovación de un piso anticuado',
    quote:
      '¡Es con entusiasmo y convicción que recomendamos los servicios del colectivo! Supieron, por su profesionalismo, escucha, sentido común y creatividad, encontrar soluciones adecuadas para la renovación de nuestro piso anticuado. Respondieron perfectamente a nuestras expectativas proponiendo redistribuciones innovadoras. El equipo de obras siguió el planning y presupuesto con rigor. Hoy revivimos en este interior mejor organizado y más luminoso. ¡Gracias!',
    client: 'Carina M.',
  },
  // ——— 28 ———
  {
    projectType: 'Interiorismo de un piso de 100 m²',
    quote:
      'Estoy encantado con el trabajo realizado. Súper ideas y una decoración adaptada a mi vivienda y modo de vida. El proyecto fue realizado respetando el planning y presupuesto, con un trabajo de calidad y en un ambiente cálido. ¡Para recomendar sin dudarlo!',
    client: 'Cristian L.',
  },
  // ——— 29 ———
  {
    projectType: 'Amueblamiento de dos pisos',
    quote:
      'Trabajamos con el colectivo en dos ocasiones importantes (redistribución de nuestro antiguo piso y amueblamiento del nuevo) y quedamos enteramente satisfechos. El interiorista supo rápidamente captar lo que nos gustaba y orientarnos hacia las buenas elecciones: el resultado combina modernidad, practicidad y buen uso de los espacios, dejando respirar las estancias. Lo recomendamos encarecidamente.',
    client: 'Chloé T.',
  },
  // ——— 30 ———
  {
    projectType: 'Renovación completa de un piso',
    quote:
      'Compramos un piso que necesitaba una renovación casi completa y, por tanto, la intervención de un arquitecto para repensar los volúmenes. Comparando opiniones y estilos, decidimos contactar con el colectivo. El piso hoy está completamente renovado y estamos encantados. El arquitecto estuvo al máximo de principio a fin: muy a la escucha, siempre con propuestas, ideas pertinentes y útiles. Los 3 meses de obras y los imprevistos fueron gestionados a la perfección. Recomendamos sin dudar.',
    client: 'David L.',
  },
  // ——— 31 ———
  {
    projectType: 'Renovación de un piso de 50 m²',
    quote:
      'Recurrí al colectivo para renovar mi piso. Ocho meses después del final de las obras, ningún arrepentimiento. El piso corresponde totalmente a mis expectativas. Fue una colaboración basada en la escucha y el intercambio. El arquitecto de interiores es muy competente, reactivo y disponible. ¡Una experiencia preciosa!',
    client: 'Estefanía M.',
  },
  // ——— 32 ———
  {
    projectType: 'Renovación de una casa de los años 60',
    quote:
      'Teníamos una casa de los años 60 que renovar por completo y nos faltaba inspiración. Nos pusieron en contacto con una arquitecta de interiores que supo proponernos una distribución que corresponde totalmente a nuestras exigencias. Apreciamos su profesionalismo, su escucha y sus consejos. ¡La agradecemos calurosamente por este bonito proyecto!',
    client: 'Cristian H.',
  },
  // ——— 33 ———
  {
    projectType: 'Interiorismo de un piso',
    quote:
      'Recurrí al colectivo para repensar completamente nuestro salón que combina cocina, hall de entrada, salón y comedor. La arquitecta de interiores supo acompañarnos permitiéndonos concebir una configuración optimizada y guiándonos en la elección de materiales y armonías. Apreciamos también su espíritu pragmático cuando nos orientó hacia los profesionales más adaptados para respetar nuestra envolvente presupuestaria. ¡Lo recomiendo enormemente!',
    client: 'Régine C.',
  },
  // ——— 34 ———
  {
    projectType: 'Renovación de un piso de 98 m²',
    quote:
      'Propietarios de un piso de 98 m² que queríamos renovar enteramente con nuestros hijos que crecen, nos dirigimos al colectivo por las excelentes opiniones y nos sumamos a ellas. Trabajo extremadamente preciso y eficaz en los planos (añadido de un aseo, WC y habitación). Comprendió nuestros gustos mientras nos animaba a probar cosas nuevas. La empresa elegida fue de una eficacia notable. ¡Recomendamos muy calurosamente!',
    client: 'Julia M.',
  },
  // ——— 35 ———
  {
    projectType: 'Renovación de un tríplex con terraza de 75 m²',
    quote:
      'Compramos un piso que necesitaba una renovación casi completa. Tras comparar opciones, decidimos contactar con el colectivo. El arquitecto estuvo impecable: muy a la escucha, siempre proponiendo soluciones, ideas pertinentes y útiles. Los 3 meses de obras, el ir y venir de artesanos y los imprevistos fueron gestionados perfectamente. Recomendamos este colectivo sin la menor duda y agradecemos vivamente al arquitecto su implicación en el proyecto de nuestra vida.',
    client: 'David y Alejandra S.',
  },
  // ——— 36 ———
  {
    projectType: 'Optimización de un estudio',
    quote:
      'Un gran agradecimiento al colectivo por esta excelente prestación. Estuvieron a la altura durante todo mi proyecto. La arquitecta como jefa de proyecto dio excelentes consejos y realizó mis peticiones proponiendo soluciones realistas: optimización máxima del estudio, propuestas de distribución muy acertadas. Realizó mi proyecto de la A a la Z: del estudio al seguimiento de la obra y la entrega de llaves. Cumplió todos los hitos y el presupuesto fijado. ¡Muy contento del resultado!',
    client: 'Andrés M.',
  },
  // ——— 37 ———
  {
    projectType: 'Decoración de un piso',
    quote:
      'Desde nuestro primer encuentro con la decoradora del colectivo, supimos que estábamos en buenas manos. Su escucha atenta, su mirada afinada y su sensibilidad nos pusieron inmediatamente en confianza. Ha sido más que una decoradora: una verdadera compañera. Nos guió con paciencia y entusiasmo, ayudándonos a elegir cada elemento con esmero. Gracias a su talento, nuestro piso se ha convertido en un lugar armonioso donde cada detalle tiene su importancia. La recomendamos sin la menor duda.',
    client: 'Nicolas M.',
  },
  // ——— 38 ———
  {
    projectType: 'Renovación de un piso',
    quote:
      'Recurrí al colectivo para la renovación de mi piso. La arquitecta, miembro del colectivo, supo establecer una relación de confianza para comprender mejor mis expectativas y proponer un proyecto acorde con mi presupuesto. Gracias a su seguimiento riguroso, su sentido del detalle y sus recomendaciones, mi proyecto se desarrolló con toda serenidad. ¡Gracias por trabajar sin escatimar esfuerzos para un resultado más allá de nuestras esperanzas!',
    client: 'Olivier D.',
  },
  // ——— 39 ———
  {
    projectType: 'Decoración interior de una casa de 120 m²',
    quote:
      'Muy satisfecho con la prestación del colectivo, tanto por sus propuestas de redistribución como por su creatividad. La casa fue transformada sin necesidad de grandes obras.',
    client: 'Raimundo V.',
  },
  // ——— 40 ———
  {
    projectType: 'Renovación y reestructuración de una casa',
    quote:
      'Recurrimos al colectivo tras la adquisición de una casa por renovar. Nos acompañó una arquitecta desde el inicio. Comprendió rápidamente nuestros deseos, gustos y restricciones. ¡El resultado es soberbio, y los plazos y presupuestos fueron respetados! Recomendamos vivamente este colectivo.',
    client: 'Melanie D.',
  },
  // ——— 41 ———
  {
    projectType: 'Renovación de un estudio de 27 m²',
    quote:
      'El colectivo fue de excelente consejo y muy disponible para la renovación de mi piso, aportando ideas útiles y trucos. ¡Profesionales muy competentes!',
    client: 'Clément G.',
  },
  // ——— 42 ———
  {
    projectType: 'Interiorismo de un piso de 122 m²',
    quote:
      'El colectivo intervino en la renovación de nuestro nuevo piso. Muy buenas ideas, reactividad, un verdadero profesional además de una personalidad simpática y entrañable. ¡Estamos muy contentos del resultado!',
    client: 'Vanessa I.',
  },
  // ——— 43 ———
  {
    projectType: 'Renovación de un piso de 64 m²',
    quote:
      'Siempre es difícil lanzarse a grandes obras sin la ayuda de profesionales. El interiorista fue fantástico. Tiene esa facultad de proyectarse en un proyecto en medio de los escombros. Nos dio buenas ideas y guió enteramente nuestra distribución según nuestros deseos. Top. Lo mismo para la combinación de colores y materiales. Si no sois arquitectos de vocación, confiad en él para guiaros: tranquiliza, y además el resultado es inteligente y bonito.',
    client: 'Charlotte P.',
  },
  // ——— 44 ———
  {
    projectType: 'Optimización de un piso',
    quote:
      'Quería optimizar el espacio de mi piso un poco mal distribuido. Es una arquitecta del colectivo la que se encargó de la concepción y realización de mi modesto proyecto con mucha seriedad y benevolencia. Todo claro, sin sorpresas. ¡Resultado: adoro mi "nuevo" piso! Lo recomiendo.',
    client: 'Cédric A.',
  },
  // ——— 45 ———
  {
    projectType: 'Renovación de un piso de 115 m²',
    quote:
      'Compramos un piso de 115 m² por renovar completamente: electricidad, fontanería, redistribución, desplazamiento de cocina y creación de nuevas estancias. Desde el principio, comprendieron nuestra visión y nos tranquilizaron. Nos acompañaron y aconsejaron pertinentemente en todas las etapas. La renovación total debía hacerse en menos de tres meses y nuestros interioristas supieron cumplir el reto. No podemos sino recomendar y agradecer calurosamente el magnífico trabajo realizado.',
    client: 'Laure M.',
  },
]

const schemaOrg = {
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
          name: 'Opiniones',
          item: 'https://www.interioristabarcelona.com/opiniones/',
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.interioristabarcelona.com/#organization',
      name: 'Interiorista Barcelona',
      url: 'https://www.interioristabarcelona.com',
      description:
        'Colectivo de diseñadores de interiores y arquitectos en Barcelona',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Carrer de Mallorca, 237',
        addressLocality: 'Barcelona',
        postalCode: '08008',
        addressCountry: 'ES',
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        ratingCount: String(testimonials.length),
        reviewCount: String(testimonials.length),
      },
    },
    ...testimonials.map((t) => ({
      '@type': 'Review' as const,
      itemReviewed: {
        '@id': 'https://www.interioristabarcelona.com/#organization',
      },
      reviewRating: {
        '@type': 'Rating' as const,
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person' as const,
        name: t.client,
      },
      reviewBody: t.quote,
      name: t.projectType,
    })),
  ],
}

export const metadata: Metadata = {
  title:
    'Opiniones de clientes | Interiorista Barcelona — Diseño de interiores 2026',
  description:
    'Descubre las opiniones de nuestros clientes sobre nuestros servicios de diseño de interiores, reformas y decoración. Más de 45 testimonios reales de proyectos realizados por nuestro colectivo de interioristas.',
  alternates: {
    canonical: '/opiniones/',
  },
}

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 estrellas sobre 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 fill-amber-400"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <FadeIn className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-block rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">
          {testimonial.projectType}
        </span>
        <StarRating />
      </div>
      <blockquote className="flex-1 text-base/7 text-neutral-600">
        <p className="before:content-['«\00a0'] after:content-['\00a0»']">
          {testimonial.quote}
        </p>
      </blockquote>
      <figcaption className="mt-6 border-t border-neutral-100 pt-4">
        <span className="font-display text-sm font-semibold text-neutral-950">
          {testimonial.client}
        </span>
      </figcaption>
    </FadeIn>
  )
}

function ImageBreak({
  src,
  alt,
}: {
  src: typeof imageReformaSalon
  alt: string
}) {
  return (
    <Container className="my-24 sm:my-32">
      <FadeIn>
        <div className="overflow-hidden rounded-3xl">
          <Image
            src={src}
            alt={alt}
            className="w-full object-cover"
            sizes="(min-width: 1024px) 80vw, 100vw"
            style={{ aspectRatio: '21/9' }}
          />
        </div>
      </FadeIn>
    </Container>
  )
}

export default function OpinionesPage() {
  const images = [
    { src: imageReformaSalon, alt: 'Salón contemporáneo diseñado por nuestro equipo en Barcelona' },
    { src: imageAticoPenthouse, alt: 'Ático minimalista con vistas panorámicas en Sarrià' },
    { src: imageDecoSalon, alt: 'Decoración de salón mediterráneo en Sarrià, Barcelona' },
    { src: imageRestaurante, alt: 'Interiorismo de restaurante gastronómico en el Born' },
    { src: imageLoftIndustrial, alt: 'Reforma de loft industrial en Poblenou, Barcelona' },
    { src: imageMasia, alt: 'Reforma de masía catalana con bóveda y vigas de madera' },
    { src: imageHotel, alt: 'Diseño de lobby de hotel boutique en el Eixample' },
  ]

  // Split testimonials into groups of ~5 for image insertion
  const groups: Testimonial[][] = []
  const groupSize = 6
  for (let i = 0; i < testimonials.length; i += groupSize) {
    groups.push(testimonials.slice(i, i + groupSize))
  }

  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Opiniones"
        title="Lo que dicen nuestros clientes"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Más de {testimonials.length} proyectos realizados con la máxima
          satisfacción
        </p>
        <p className="mt-6">
          Nuestros clientes comparten su experiencia con los interioristas del
          colectivo. Desde reformas integrales hasta proyectos de decoración, cada
          testimonio refleja nuestro compromiso con la calidad, la escucha y el
          respeto del presupuesto. Te invitamos también a consultar las opiniones
          publicadas en Google Business.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar presupuesto gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. Stats */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-3xl border border-neutral-200 bg-white px-8 py-10 text-center shadow-sm">
              <dt className="text-sm font-semibold text-neutral-600">
                Nota media
              </dt>
              <dd className="mt-2 font-display text-5xl font-medium tracking-tight text-neutral-950">
                4.9/5
              </dd>
              <div className="mt-3">
                <StarRating />
              </div>
            </div>
            <div className="flex flex-col items-center rounded-3xl border border-neutral-200 bg-white px-8 py-10 text-center shadow-sm">
              <dt className="text-sm font-semibold text-neutral-600">
                Opiniones verificadas
              </dt>
              <dd className="mt-2 font-display text-5xl font-medium tracking-tight text-neutral-950">
                {testimonials.length}+
              </dd>
              <p className="mt-3 text-sm text-neutral-500">
                Clientes satisfechos
              </p>
            </div>
            <div className="flex flex-col items-center rounded-3xl border border-neutral-200 bg-white px-8 py-10 text-center shadow-sm">
              <dt className="text-sm font-semibold text-neutral-600">
                Tasa de recomendación
              </dt>
              <dd className="mt-2 font-display text-5xl font-medium tracking-tight text-neutral-950">
                98 %
              </dd>
              <p className="mt-3 text-sm text-neutral-500">
                De clientes nos recomiendan
              </p>
            </div>
          </dl>
        </FadeIn>
      </Container>

      {/* 3. Testimonials grid with image breaks */}
      <SectionIntro
        eyebrow="Testimonios"
        title="Experiencias reales de proyectos de interiorismo"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Cada proyecto es único. Descubre cómo nuestros interioristas han
          acompañado a sus clientes en reformas integrales, decoración de
          interiores, optimización de espacios y mucho más.
        </p>
      </SectionIntro>

      {groups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <Container className={groupIndex === 0 ? 'mt-16' : 'mt-12'}>
            <FadeInStagger>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
                {group.map((testimonial, i) => (
                  <TestimonialCard
                    key={groupIndex * groupSize + i}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </FadeInStagger>
          </Container>
          {groupIndex < groups.length - 1 && (
            <ImageBreak
              src={images[groupIndex % images.length].src}
              alt={images[groupIndex % images.length].alt}
            />
          )}
        </div>
      ))}

      {/* 4. Contact */}
      <ContactSection />
    </RootLayout>
  )
}
