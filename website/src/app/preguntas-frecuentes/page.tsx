import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { PricingTableOfContents } from '@/components/PricingTableOfContents'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { FAQAccordion } from './faq-accordion'

// ——————————————————————————————————————————————
// FAQ Data
// ——————————————————————————————————————————————

const funcionamientoFaqs = [
  {
    question:
      '¿Por qué elegir Interiorista Barcelona para mi proyecto?',
    answer: (
      <>
        <p>
          Interiorista Barcelona es un colectivo de profesionales independientes
          — interioristas, arquitectos, decoradores y paisajistas — que comparten
          una misma exigencia de calidad y un profundo conocimiento del mercado
          barcelonés. Al contactar con nosotros, te ponemos en relación con el
          profesional más adecuado para tu proyecto, según su especialidad,
          disponibilidad y zona de intervención.
        </p>
        <p>
          A diferencia de un estudio único, el colectivo te ofrece acceso a una
          red diversa de perfiles con experiencia en todo tipo de proyectos:
          desde la{' '}
          <Link
            href="/diseno-interiores/"
            className="text-neutral-950 underline"
          >
            reforma integral
          </Link>{' '}
          hasta la{' '}
          <Link
            href="/decoracion-interiores/"
            className="text-neutral-950 underline"
          >
            decoración de interiores
          </Link>
          , pasando por la{' '}
          <Link
            href="/asesoria-compra-vivienda/"
            className="text-neutral-950 underline"
          >
            asesoría antes de la compra
          </Link>{' '}
          de una vivienda. Todos los profesionales están colegiados y asegurados.
        </p>
      </>
    ),
    schemaAnswer:
      'Interiorista Barcelona es un colectivo de profesionales independientes — interioristas, arquitectos, decoradores y paisajistas — que comparten una misma exigencia de calidad y un profundo conocimiento del mercado barcelonés. Al contactar con nosotros, te ponemos en relación con el profesional más adecuado para tu proyecto. A diferencia de un estudio único, el colectivo te ofrece acceso a una red diversa de perfiles con experiencia en todo tipo de proyectos. Todos los profesionales están colegiados y asegurados.',
  },
  {
    question:
      '¿Cómo contactar con un interiorista, arquitecto o decorador del colectivo?',
    answer: (
      <>
        <p>
          Es muy sencillo: rellena el{' '}
          <Link href="/contacto/" className="text-neutral-950 underline">
            formulario de contacto
          </Link>{' '}
          indicando tu proyecto, la ubicación del inmueble y tu presupuesto
          orientativo. En un plazo máximo de 48 horas, te proponemos el perfil
          del profesional más adecuado y organizamos una primera toma de
          contacto. También puedes llamarnos directamente por teléfono.
        </p>
        <p>
          No hay ningún compromiso en esta primera fase: el objetivo es entender
          tu proyecto y verificar que podemos ayudarte.
        </p>
      </>
    ),
    schemaAnswer:
      'Rellena el formulario de contacto indicando tu proyecto, la ubicación del inmueble y tu presupuesto orientativo. En un plazo máximo de 48 horas, te proponemos el perfil del profesional más adecuado y organizamos una primera toma de contacto. No hay ningún compromiso en esta primera fase.',
  },
  {
    question: '¿Cómo se desarrolla la primera reunión?',
    answer: (
      <>
        <p>
          La primera reunión, de aproximadamente una hora, tiene lugar
          preferiblemente en el inmueble objeto del proyecto. El profesional
          evalúa el espacio, escucha tus necesidades, tus gustos y tu
          presupuesto, y te expone su visión y metodología de trabajo.
        </p>
        <p>
          Tras la visita, recibirás un presupuesto detallado que incluye las
          fases del proyecto, los plazos estimados y los honorarios. Esta
          primera reunión es de pago (consulta nuestros{' '}
          <Link href="/precios/" className="text-neutral-950 underline">
            precios
          </Link>
          ), pero su importe se descuenta íntegramente si decides continuar con
          el proyecto.
        </p>
      </>
    ),
    schemaAnswer:
      'La primera reunión, de aproximadamente una hora, tiene lugar preferiblemente en el inmueble objeto del proyecto. El profesional evalúa el espacio, escucha tus necesidades, tus gustos y tu presupuesto, y te expone su visión y metodología de trabajo. Tras la visita, recibirás un presupuesto detallado. Esta primera reunión es de pago, pero su importe se descuenta íntegramente si decides continuar con el proyecto.',
  },
  {
    question:
      '¿Tengo que comprometerme a continuar tras la primera reunión?',
    answer: (
      <p>
        No, no hay ninguna obligación. La primera reunión es un encuentro sin
        compromiso que te permite conocer al profesional, evaluar su enfoque y
        decidir si deseas avanzar juntos. Si no continúas, solo abonas los
        honorarios de la consulta inicial. No hay penalización ni coste
        adicional.
      </p>
    ),
    schemaAnswer:
      'No, no hay ninguna obligación. La primera reunión es un encuentro sin compromiso que te permite conocer al profesional, evaluar su enfoque y decidir si deseas avanzar juntos. Si no continúas, solo abonas los honorarios de la consulta inicial.',
  },
  {
    question:
      '¿Cuál es el plazo entre la primera reunión y el estudio del proyecto?',
    answer: (
      <p>
        El plazo depende de la complejidad del proyecto. Para una decoración
        o un asesoramiento puntual, la propuesta puede estar lista en una o dos
        semanas. Para un proyecto de interiorismo o reforma integral con planos
        técnicos, memorias y visados, el estudio suele requerir entre cuatro y
        ocho semanas. Tu profesional te indicará un calendario preciso desde la
        primera reunión.
      </p>
    ),
    schemaAnswer:
      'El plazo depende de la complejidad del proyecto. Para una decoración o un asesoramiento puntual, la propuesta puede estar lista en una o dos semanas. Para un proyecto de interiorismo o reforma integral, el estudio suele requerir entre cuatro y ocho semanas.',
  },
  {
    question: '¿Cuál es el calendario de pagos durante la misión?',
    answer: (
      <>
        <p>
          Los pagos se escalonan en función de las fases del proyecto,
          generalmente de la siguiente manera:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>30 %</strong> a la firma del contrato (fase de estudio)
          </li>
          <li>
            <strong>30 %</strong> a la entrega de los planos y documentos
            técnicos
          </li>
          <li>
            <strong>30 %</strong> durante el seguimiento de obra
          </li>
          <li>
            <strong>10 %</strong> a la recepción final de los trabajos
          </li>
        </ul>
        <p>
          Estos porcentajes pueden variar según el profesional y el tipo de
          prestación. El calendario de pagos se detalla en el presupuesto que
          recibirás antes de firmar.
        </p>
      </>
    ),
    schemaAnswer:
      'Los pagos se escalonan en función de las fases del proyecto: 30 % a la firma del contrato, 30 % a la entrega de los planos técnicos, 30 % durante el seguimiento de obra y 10 % a la recepción final. Estos porcentajes pueden variar según el profesional y el tipo de prestación.',
  },
]

const prestacionesFaqs = [
  {
    question:
      '¿Cuál es la diferencia entre un decorador de interiores, un arquitecto y un arquitecto de interiores?',
    answer: (
      <>
        <p>
          Son tres profesiones complementarias pero con formaciones y
          competencias diferentes:
        </p>
        <ul className="list-disc pl-5">
          <li>
            El{' '}
            <Link
              href="/decoracion-interiores/"
              className="text-neutral-950 underline"
            >
              decorador de interiores
            </Link>{' '}
            trabaja sobre la estética del espacio sin modificar su estructura:
            mobiliario, colores, textiles, iluminación y complementos. No
            necesita titulación oficial para ejercer.
          </li>
          <li>
            El{' '}
            <Link
              href="/arquitecto/"
              className="text-neutral-950 underline"
            >
              arquitecto
            </Link>{' '}
            (colegiado en el COAC — Col·legi d&apos;Arquitectes de Catalunya)
            es un profesional con titulación universitaria habilitado para firmar
            proyectos que afectan a la estructura del edificio, realizar cálculos
            estructurales y solicitar licencias de obra mayor.
          </li>
          <li>
            El{' '}
            <Link
              href="/diseno-interiores/"
              className="text-neutral-950 underline"
            >
              arquitecto de interiores / interiorista
            </Link>{' '}
            tiene formación específica en diseño de espacios interiores. Puede
            modificar la distribución interior (tabiques no portantes,
            instalaciones) y realiza proyectos visados. Combina la visión
            técnica con la estética.
          </li>
        </ul>
        <p>
          En el colectivo contamos con los tres perfiles, lo que nos permite
          proponerte al profesional más adecuado según las necesidades de tu
          proyecto.
        </p>
      </>
    ),
    schemaAnswer:
      'El decorador de interiores trabaja sobre la estética del espacio sin modificar su estructura. El arquitecto (colegiado en el COAC) está habilitado para firmar proyectos que afectan a la estructura del edificio. El arquitecto de interiores / interiorista tiene formación específica en diseño de espacios interiores y puede modificar la distribución interior. En el colectivo contamos con los tres perfiles.',
  },
  {
    question:
      '¿Cuál es el papel de un paisajista o diseñador de jardines?',
    answer: (
      <>
        <p>
          El{' '}
          <Link
            href="/paisajismo/"
            className="text-neutral-950 underline"
          >
            paisajista
          </Link>{' '}
          es un profesional especializado en el diseño, la planificación y la
          gestión de espacios exteriores: jardines, terrazas, patios interiores,
          azoteas y espacios verdes comunitarios.
        </p>
        <p>
          En Barcelona, donde las terrazas y los espacios exteriores son
          fundamentales, el paisajista aporta un conocimiento específico del
          clima mediterráneo, las especies vegetales adaptadas, los sistemas de
          riego eficiente y la normativa urbanística local. Trabaja en
          coordinación con el interiorista para crear una continuidad entre
          interior y exterior.
        </p>
      </>
    ),
    schemaAnswer:
      'El paisajista es un profesional especializado en el diseño y la gestión de espacios exteriores: jardines, terrazas, patios interiores, azoteas y espacios verdes comunitarios. En Barcelona, aporta un conocimiento específico del clima mediterráneo, las especies vegetales adaptadas y la normativa urbanística local.',
  },
  {
    question:
      '¿Qué diferencia hay entre un relooking de interiores y un coaching de decoración?',
    answer: (
      <>
        <p>
          El <strong>relooking de interiores</strong> es una intervención rápida
          (generalmente una o dos sesiones) en la que el decorador reorganiza tu
          espacio con el mobiliario y los objetos que ya tienes, aportando nuevas
          ideas de disposición, color y estilo. Es ideal cuando buscas un cambio
          visible sin comprar mucho mobiliario nuevo.
        </p>
        <p>
          El <strong>coaching de decoración</strong> es un acompañamiento más
          amplio: el profesional te guía en tus elecciones de compra, te
          acompaña a tiendas, te proporciona paletas de color y te ayuda a
          definir tu estilo personal. Es perfecto si quieres aprender a decorar
          tu hogar tú mismo.
        </p>
        <p>
          Ambos servicios forman parte de nuestra oferta de{' '}
          <Link
            href="/decoracion-interiores/"
            className="text-neutral-950 underline"
          >
            decoración de interiores
          </Link>
          .
        </p>
      </>
    ),
    schemaAnswer:
      'El relooking de interiores es una intervención rápida donde el decorador reorganiza tu espacio con el mobiliario existente. El coaching de decoración es un acompañamiento más amplio donde el profesional te guía en tus elecciones de compra y te ayuda a definir tu estilo personal. Ambos servicios forman parte de nuestra oferta de decoración de interiores.',
  },
  {
    question:
      '¿El diagnóstico antes de la compra inmobiliaria es independiente?',
    answer: (
      <>
        <p>
          Sí, absolutamente. El servicio de{' '}
          <Link
            href="/asesoria-compra-vivienda/"
            className="text-neutral-950 underline"
          >
            asesoría antes de la compra
          </Link>{' '}
          es una prestación independiente y puntual. El interiorista o
          arquitecto te acompaña en la visita del inmueble que estás
          considerando comprar, evalúa su potencial de reforma, detecta posibles
          problemas técnicos (humedades, instalaciones antiguas, estructura) y
          estima el coste aproximado de las obras necesarias.
        </p>
        <p>
          El informe es tuyo y puedes utilizarlo libremente. Si decides
          continuar con una reforma, puedes optar por trabajar con el mismo
          profesional del colectivo o con quien prefieras.
        </p>
      </>
    ),
    schemaAnswer:
      'Sí, absolutamente. El servicio de asesoría antes de la compra es una prestación independiente y puntual. El interiorista o arquitecto evalúa el potencial de reforma del inmueble, detecta posibles problemas técnicos y estima el coste aproximado de las obras. El informe es tuyo y puedes utilizarlo libremente.',
  },
  {
    question:
      '¿Qué es el interiorismo accesible (adaptación para personas con movilidad reducida)?',
    answer: (
      <>
        <p>
          El{' '}
          <Link
            href="/interiorismo-accesible/"
            className="text-neutral-950 underline"
          >
            interiorismo accesible
          </Link>{' '}
          es una especialidad que adapta los espacios interiores para personas
          con movilidad reducida, personas mayores o cualquier situación de
          discapacidad. Incluye la ampliación de pasos de puerta, la
          adaptación de baños (duchas a ras de suelo, barras de apoyo),
          la eliminación de desniveles y la selección de materiales
          antideslizantes.
        </p>
        <p>
          En Barcelona existen subvenciones municipales y autonómicas para este
          tipo de obras. Nuestros profesionales te orientan sobre las ayudas
          disponibles y gestionan la documentación necesaria.
        </p>
      </>
    ),
    schemaAnswer:
      'El interiorismo accesible es una especialidad que adapta los espacios interiores para personas con movilidad reducida, personas mayores o cualquier situación de discapacidad. Incluye la ampliación de pasos de puerta, la adaptación de baños, la eliminación de desniveles y la selección de materiales antideslizantes. En Barcelona existen subvenciones municipales y autonómicas para este tipo de obras.',
  },
  {
    question: '¿Qué servicios ofrece un arquitecto colegiado?',
    answer: (
      <>
        <p>
          Un{' '}
          <Link
            href="/arquitecto/"
            className="text-neutral-950 underline"
          >
            arquitecto colegiado
          </Link>{' '}
          en el COAC (Col·legi d&apos;Arquitectes de Catalunya) puede intervenir
          en:
        </p>
        <ul className="list-disc pl-5">
          <li>
            Proyectos que afectan a la estructura del edificio (apertura de
            muros de carga, refuerzo estructural)
          </li>
          <li>Solicitud de licencias de obra mayor ante el Ajuntament</li>
          <li>Cálculos estructurales y certificados técnicos</li>
          <li>
            Dirección facultativa de la obra (obligatoria en obras mayores)
          </li>
          <li>
            Proyectos de{' '}
            <Link
              href="/rehabilitacion-energetica/"
              className="text-neutral-950 underline"
            >
              rehabilitación energética
            </Link>{' '}
            y certificación de eficiencia
          </li>
          <li>
            <Link
              href="/ampliacion-vivienda/"
              className="text-neutral-950 underline"
            >
              Ampliaciones de vivienda
            </Link>{' '}
            y cambios de uso
          </li>
        </ul>
        <p>
          Su intervención es obligatoria cuando las obras afectan a elementos
          estructurales o requieren licencia de obra mayor. En el colectivo
          contamos con arquitectos colegiados que colaboran estrechamente con los
          interioristas.
        </p>
      </>
    ),
    schemaAnswer:
      'Un arquitecto colegiado en el COAC puede intervenir en: proyectos que afectan a la estructura del edificio, solicitud de licencias de obra mayor, cálculos estructurales, dirección facultativa de la obra, proyectos de rehabilitación energética y ampliaciones de vivienda. Su intervención es obligatoria cuando las obras afectan a elementos estructurales.',
  },
]

const tarifasFaqs = [
  {
    question:
      '¿Cuánto cuestan los servicios de un arquitecto de interiores en Barcelona?',
    answer: (
      <>
        <p>
          Los honorarios varían según el tipo de prestación y la superficie del
          proyecto. A título orientativo en el mercado barcelonés:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Consulta inicial:</strong> desde 90 €/hora
          </li>
          <li>
            <strong>Proyecto de interiorismo:</strong> desde 60 €/m² (tarifa
            escalonada según superficie)
          </li>
          <li>
            <strong>Proyecto de decoración:</strong> desde 50 €/m²
          </li>
          <li>
            <strong>Seguimiento de obra:</strong> entre el 8 % y el 12 % del
            presupuesto de ejecución
          </li>
        </ul>
        <p>
          Consulta nuestra página de{' '}
          <Link href="/precios/" className="text-neutral-950 underline">
            precios detallados
          </Link>{' '}
          para ver todas las tarifas por servicio.
        </p>
      </>
    ),
    schemaAnswer:
      'Los honorarios varían según el tipo de prestación y la superficie del proyecto. A título orientativo: consulta inicial desde 90 €/hora, proyecto de interiorismo desde 60 €/m², proyecto de decoración desde 50 €/m², seguimiento de obra entre el 8 % y el 12 % del presupuesto de ejecución.',
  },
  {
    question: '¿La primera reunión es de pago?',
    answer: (
      <>
        <p>
          Sí, la primera reunión con el profesional tiene un coste que oscila
          entre 90 € y 150 € en función del tipo de servicio. Sin embargo,{' '}
          <strong>
            este importe se descuenta íntegramente de los honorarios
          </strong>{' '}
          si decides continuar con el proyecto.
        </p>
        <p>
          Esta práctica permite al profesional dedicar el tiempo necesario para
          evaluar correctamente tu proyecto y ofrecerte una propuesta seria y
          personalizada. Consulta nuestra página de{' '}
          <Link href="/precios/" className="text-neutral-950 underline">
            precios
          </Link>{' '}
          para más detalles.
        </p>
      </>
    ),
    schemaAnswer:
      'Sí, la primera reunión tiene un coste entre 90 € y 150 € según el tipo de servicio. Sin embargo, este importe se descuenta íntegramente de los honorarios si decides continuar con el proyecto.',
  },
  {
    question: '¿Qué es la tarificación escalonada?',
    answer: (
      <>
        <p>
          La tarificación escalonada es un sistema de precios que reduce el
          coste por metro cuadrado a medida que aumenta la superficie del
          proyecto. Por ejemplo, para un proyecto de interiorismo:
        </p>
        <ul className="list-disc pl-5">
          <li>≤ 40 m²: 80 €/m²</li>
          <li>41 – 80 m²: 70 €/m²</li>
          <li>81 – 120 m²: 65 €/m²</li>
          <li>≥ 121 m²: 60 €/m²</li>
        </ul>
        <p>
          Este sistema permite adaptar los honorarios a la envergadura del
          proyecto y garantizar precios justos tanto para pisos pequeños como
          para grandes superficies. Consulta todos los detalles en la página de{' '}
          <Link href="/precios/" className="text-neutral-950 underline">
            precios
          </Link>
          .
        </p>
      </>
    ),
    schemaAnswer:
      'La tarificación escalonada es un sistema de precios que reduce el coste por metro cuadrado a medida que aumenta la superficie del proyecto. Por ejemplo, para un proyecto de interiorismo: ≤ 40 m² a 80 €/m², 41-80 m² a 70 €/m², 81-120 m² a 65 €/m², ≥ 121 m² a 60 €/m².',
  },
  {
    question: '¿Qué incluyen los honorarios del interiorista?',
    answer: (
      <>
        <p>
          Los honorarios del interiorista incluyen generalmente las siguientes
          prestaciones:
        </p>
        <ul className="list-disc pl-5">
          <li>Toma de medidas y levantamiento del estado actual</li>
          <li>
            Estudio de viabilidad y propuestas de distribución (2-3 opciones)
          </li>
          <li>
            Planos técnicos: distribución, electricidad, fontanería, suelos
          </li>
          <li>Selección de materiales y acabados (moodboards)</li>
          <li>Memorias descriptivas y presupuestos orientativos</li>
          <li>Solicitud de permisos y licencias (si procede)</li>
          <li>
            Coordinación con los gremios (albañiles, electricistas,
            fontaneros…)
          </li>
        </ul>
        <p>
          El seguimiento de obra, la selección de mobiliario y la instalación
          final pueden cotizarse aparte según las necesidades del proyecto.
        </p>
      </>
    ),
    schemaAnswer:
      'Los honorarios incluyen: toma de medidas, estudio de viabilidad, propuestas de distribución, planos técnicos, selección de materiales y acabados, memorias descriptivas, solicitud de permisos y coordinación con los gremios. El seguimiento de obra y la selección de mobiliario pueden cotizarse aparte.',
  },
]

const profesionalesFaqs = [
  {
    question: '¿Qué es una empresa de reformas?',
    answer: (
      <>
        <p>
          Una empresa de reformas es una compañía que ejecuta las obras de
          construcción y renovación: albañilería, electricidad, fontanería,
          carpintería, pintura, etc. Es el equipo que materializa el proyecto
          diseñado por el interiorista o arquitecto.
        </p>
        <p>
          Los profesionales del colectivo trabajan con una red de empresas de
          reformas de confianza en Barcelona, seleccionadas por su calidad de
          ejecución, seriedad y cumplimiento de plazos. El interiorista
          solicita varios presupuestos, te ayuda a compararlos y supervisa la
          ejecución de las obras.
        </p>
      </>
    ),
    schemaAnswer:
      'Una empresa de reformas es una compañía que ejecuta las obras de construcción y renovación: albañilería, electricidad, fontanería, carpintería, pintura, etc. Los profesionales del colectivo trabajan con una red de empresas de reformas de confianza en Barcelona.',
  },
  {
    question:
      '¿Con qué criterios elegir un arquitecto de interiores, arquitecto, decorador o paisajista?',
    answer: (
      <>
        <p>La elección depende fundamentalmente de tu proyecto:</p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Decorador:</strong> si buscas renovar la imagen de tu
            espacio sin obras — mobiliario, colores, textiles,{' '}
            <Link
              href="/home-staging/"
              className="text-neutral-950 underline"
            >
              home staging
            </Link>
          </li>
          <li>
            <strong>Interiorista / arquitecto de interiores:</strong> si tu
            proyecto implica modificar la distribución interior, tirar tabiques
            o reformar baños y cocinas
          </li>
          <li>
            <strong>Arquitecto:</strong> si las obras afectan a la estructura
            del edificio, si necesitas licencia de obra mayor o dirección
            facultativa
          </li>
          <li>
            <strong>Paisajista:</strong> para el diseño de jardines, terrazas
            y espacios exteriores
          </li>
        </ul>
        <p>
          ¿No estás seguro? No te preocupes:{' '}
          <Link href="/contacto/" className="text-neutral-950 underline">
            contacta con nosotros
          </Link>{' '}
          y te orientamos hacia el profesional más adecuado.
        </p>
      </>
    ),
    schemaAnswer:
      'La elección depende de tu proyecto: decorador si buscas renovar la imagen sin obras; interiorista si implica modificar la distribución interior; arquitecto si las obras afectan a la estructura del edificio; paisajista para jardines, terrazas y espacios exteriores. Contacta con nosotros y te orientamos.',
  },
  {
    question:
      '¿Los profesionales del colectivo están colegiados y asegurados?',
    answer: (
      <>
        <p>
          Sí, todos los profesionales del colectivo están debidamente
          habilitados para ejercer:
        </p>
        <ul className="list-disc pl-5">
          <li>
            Los <strong>arquitectos</strong> están colegiados en el COAC
            (Col·legi d&apos;Arquitectes de Catalunya) y disponen del seguro de
            responsabilidad civil profesional obligatorio
          </li>
          <li>
            Los <strong>interioristas</strong> cuentan con formación acreditada
            y seguro profesional
          </li>
          <li>
            Todos los profesionales disponen del{' '}
            <strong>seguro decenal</strong> cuando la Ley de Ordenación de la
            Edificación (LOE) lo exige
          </li>
        </ul>
        <p>
          Puedes verificar la colegiación de cualquier arquitecto en el registro
          público del COAC. Lee las{' '}
          <Link href="/opiniones/" className="text-neutral-950 underline">
            opiniones de nuestros clientes
          </Link>{' '}
          para conocer la experiencia de otros proyectos.
        </p>
      </>
    ),
    schemaAnswer:
      'Sí, todos los profesionales están habilitados para ejercer. Los arquitectos están colegiados en el COAC y disponen del seguro de responsabilidad civil profesional obligatorio. Los interioristas cuentan con formación acreditada y seguro profesional. Todos disponen del seguro decenal cuando la LOE lo exige.',
  },
  {
    question: '¿Qué garantías ofrece trabajar con el colectivo?',
    answer: (
      <>
        <p>Trabajar con Interiorista Barcelona te ofrece múltiples garantías:</p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Profesionales verificados:</strong> todos los miembros son
            seleccionados por su experiencia, formación y calidad de trabajo
          </li>
          <li>
            <strong>Presupuesto detallado y sin sorpresas:</strong> recibes un
            desglose claro de los honorarios antes de firmar
          </li>
          <li>
            <strong>Contrato profesional:</strong> cada misión se formaliza
            mediante un contrato que protege ambas partes
          </li>
          <li>
            <strong>Seguros y colegiación:</strong> garantía de responsabilidad
            civil profesional en caso de siniestro
          </li>
          <li>
            <strong>Red de gremios de confianza:</strong> empresas de reformas
            evaluadas y recomendadas por el colectivo
          </li>
        </ul>
        <p>
          Consulta las{' '}
          <Link href="/opiniones/" className="text-neutral-950 underline">
            opiniones de nuestros clientes
          </Link>{' '}
          para descubrir su experiencia.
        </p>
      </>
    ),
    schemaAnswer:
      'Trabajar con Interiorista Barcelona ofrece múltiples garantías: profesionales verificados, presupuesto detallado sin sorpresas, contrato profesional, seguros y colegiación, y una red de gremios de confianza evaluados por el colectivo.',
  },
]

// ——————————————————————————————————————————————
// Schema.org
// ——————————————————————————————————————————————

const allFaqs = [
  ...funcionamientoFaqs,
  ...prestacionesFaqs,
  ...tarifasFaqs,
  ...profesionalesFaqs,
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
          name: 'Preguntas frecuentes',
          item: 'https://www.interioristabarcelona.com/preguntas-frecuentes/',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: allFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.schemaAnswer,
        },
      })),
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
    },
  ],
}

// ——————————————————————————————————————————————
// Table of Contents items
// ——————————————————————————————————————————————

const tocItems = [
  { id: 'funcionamiento', name: 'Funcionamiento del colectivo' },
  { id: 'prestaciones', name: 'Tipos de prestaciones' },
  { id: 'tarifas', name: 'Tarifas' },
  { id: 'profesionales', name: 'Profesionales y colaboradores' },
]

// ——————————————————————————————————————————————
// Metadata
// ——————————————————————————————————————————————

export const metadata: Metadata = {
  title:
    'Preguntas frecuentes sobre interiorismo | Interiorista Barcelona',
  description:
    'Respuestas a las preguntas más frecuentes sobre interiorismo, arquitectura de interiores y decoración en Barcelona. Funcionamiento, servicios, tarifas y profesionales.',
  alternates: {
    canonical: 'https://www.interioristabarcelona.com/preguntas-frecuentes/',
  },
}

// ——————————————————————————————————————————————
// Page
// ——————————————————————————————————————————————

export default function PreguntasFrecuentesPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Preguntas frecuentes"
        title="Preguntas frecuentes sobre interiorismo en Barcelona"
      >
        <p>
          Respuestas a las dudas más habituales sobre nuestros servicios de
          diseño de interiores, arquitectura, decoración y paisajismo.
          Funcionamiento del colectivo, tipos de prestaciones, tarifas y
          garantías profesionales.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">¿No encuentras tu respuesta? Consúltanos</Button>
        </div>
      </PageIntro>

      {/* 2. Navigation by category */}
      <PricingTableOfContents items={tocItems} />

      {/* 3. Funcionamiento del colectivo */}
      <div id="funcionamiento" className="scroll-mt-32">
        <SectionIntro
          eyebrow="El colectivo"
          title="Funcionamiento del colectivo"
          className="mt-24 sm:mt-32"
        >
          <p>
            Cómo funciona Interiorista Barcelona, desde el primer contacto hasta
            la finalización de tu proyecto.
          </p>
        </SectionIntro>

        <Container className="mt-16">
          <FadeIn>
            <FAQAccordion items={funcionamientoFaqs} />
          </FadeIn>
        </Container>
      </div>

      {/* 4. Tipos de prestaciones */}
      <div id="prestaciones" className="scroll-mt-32">
        <SectionIntro
          eyebrow="Servicios"
          title="Tipos de prestaciones"
          className="mt-24 sm:mt-32"
        >
          <p>
            Las diferentes profesiones del interiorismo y los servicios que
            ofrecemos para cada tipo de proyecto.
          </p>
        </SectionIntro>

        <Container className="mt-16">
          <FadeIn>
            <FAQAccordion items={prestacionesFaqs} />
          </FadeIn>
        </Container>
      </div>

      {/* 5. Tarifas */}
      <div id="tarifas" className="scroll-mt-32">
        <SectionIntro
          eyebrow="Precios"
          title="Tarifas"
          className="mt-24 sm:mt-32"
        >
          <p>
            Transparencia total sobre los honorarios de nuestros profesionales y
            los distintos modelos de tarificación.
          </p>
        </SectionIntro>

        <Container className="mt-16">
          <FadeIn>
            <FAQAccordion items={tarifasFaqs} />
          </FadeIn>
        </Container>
      </div>

      {/* 6. Profesionales y colaboradores */}
      <div id="profesionales" className="scroll-mt-32">
        <SectionIntro
          eyebrow="Equipo"
          title="Profesionales y colaboradores"
          className="mt-24 sm:mt-32"
        >
          <p>
            Información sobre los profesionales del colectivo, sus
            cualificaciones y las garantías que ofrecemos.
          </p>
        </SectionIntro>

        <Container className="mt-16">
          <FadeIn>
            <FAQAccordion items={profesionalesFaqs} />
          </FadeIn>
        </Container>
      </div>

      {/* 7. Contact */}
      <ContactSection />
    </RootLayout>
  )
}
