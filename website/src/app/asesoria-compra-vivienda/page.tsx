import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { PricingBlock } from '@/components/PricingBlock'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageContravisita from '@/images/contravisita-piso-reformar-eixample-barcelona.jpg'
import imageInformeTecnico from '@/images/informe-tecnico-asesoria-compra-barcelona.jpg'
import imageResultadoReforma from '@/images/resultado-reforma-integral-born-barcelona.jpg'
import imageTerrazaAtico from '@/images/terraza-atico-vista-barcelona-asesoria.jpg'
import { LatestProjects } from '@/components/LatestProjects'
import { TestimonialSlider, type TestimonialItem } from '@/components/TestimonialSlider'
import { FAQAccordion } from './faq-accordion'

const serviceTestimonials: TestimonialItem[] = [
  {
    quote:
      'Gracias a la contravisita, nuestro interiorista detectó un problema con las bajantes que nos habría costado miles de euros. Pudimos negociar una rebaja importante en el precio del piso en Eixample Dreta.',
    client: 'Marc y Nuria V., compra en Eixample Dreta',
  },
  {
    quote:
      'Hicimos la contravisita antes de firmar las arras y fue la mejor decisión. El informe técnico nos dio una estimación precisa del coste de reforma que confirmó que el piso en Gràcia era viable para nuestro presupuesto.',
    client: 'Silvia T., compra en Gràcia',
  },
  {
    quote:
      'Como expatriado comprando una propiedad en Poblenou, el informe técnico me dio una tranquilidad total. La diseñadora identificó problemas que yo nunca habría detectado y me proporcionó un desglose claro de los costes de la reforma.',
    client: 'Michael B., compra de propiedad en Poblenou',
  },
]

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

const faqItems = [
  {
    question: '¿Dónde realizáis las contravisitas en Barcelona?',
    schemaAnswer:
      'Realizamos contravisitas de asesoramiento en toda Barcelona ciudad y área metropolitana. Intervenimos en los principales barrios: Eixample, Gràcia, El Born, Sarrià, Poblenou, Les Corts, Sant Andreu y Sants-Montjuïc. También cubrimos Sant Cugat, Sabadell, Castelldefels, Sitges, Badalona, L\'Hospitalet de Llobregat y alrededores. Contacta con nosotros para solicitar una contravisita.',
    answer: (
      <>
        <p>
          Realizamos contravisitas de asesoramiento en toda{' '}
          <strong className="font-semibold text-neutral-950">
            Barcelona ciudad
          </strong>{' '}
          y área metropolitana.
        </p>
        <p>
          Intervenimos en los principales barrios: Eixample, Gràcia, El Born,
          Sarrià, Poblenou, Les Corts, Sant Andreu y Sants-Montjuïc.
        </p>
        <p>
          También cubrimos Sant Cugat, Sabadell, Castelldefels, Sitges,
          Badalona, L&apos;Hospitalet de Llobregat y alrededores.
        </p>
        <p>
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Contacta con nosotros
          </Link>{' '}
          para solicitar una contravisita.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué aspectos técnicos evalúa el interiorista durante la visita?',
    schemaAnswer:
      'Durante la contravisita, el interiorista evalúa: el estado de las instalaciones (electricidad, fontanería, gas), los muros de carga y tabiques, el estado de las bajantes y montantes, la calidad del aislamiento térmico y acústico, la existencia de humedades o vicios ocultos, y la conformidad con la cédula de habitabilidad. También verifica la situación urbanística del inmueble. Consulta nuestras tarifas de asesoramiento compra vivienda.',
    answer: (
      <>
        <p>
          Durante la contravisita, el interiorista evalúa: el estado de las{' '}
          <strong className="font-semibold text-neutral-950">
            instalaciones
          </strong>{' '}
          (electricidad, fontanería, gas), los{' '}
          <strong className="font-semibold text-neutral-950">
            muros de carga y tabiques
          </strong>
          , el estado de las bajantes y montantes, la calidad del aislamiento
          térmico y acústico, y la existencia de humedades o vicios ocultos.
        </p>
        <p>
          También verifica la conformidad con la{' '}
          <strong className="font-semibold text-neutral-950">
            cédula de habitabilidad
          </strong>{' '}
          y la situación urbanística del inmueble.
        </p>
        <p>
          Consulta nuestras{' '}
          <Link
            href="/precios/#asesoria-compra-vivienda"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            tarifas de asesoramiento compra vivienda
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: '¿Qué pasa si finalmente compro el inmueble?',
    schemaAnswer:
      'Si decides comprar el inmueble, el importe de la contravisita se descuenta de los honorarios del proyecto de reforma. Tu interiorista ya conoce el inmueble y puede iniciar directamente el proyecto de arquitectura de interiores: redistribución, selección de materiales y coordinación de obra. Es la continuación natural del asesoramiento previo a la compra.',
    answer: (
      <>
        <p>
          Si decides comprar el inmueble, el{' '}
          <strong className="font-semibold text-neutral-950">
            importe de la contravisita se descuenta
          </strong>{' '}
          de los honorarios del proyecto de reforma.
        </p>
        <p>
          Tu interiorista ya conoce el inmueble y puede iniciar directamente el
          proyecto de{' '}
          <Link
            href="/diseno-interiores/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            diseño de interiores
          </Link>
          : redistribución, selección de materiales y coordinación de obra. Es
          la continuación natural del asesoramiento previo a la compra.
        </p>
      </>
    ),
  },
  {
    question: '¿También asesoráis en compra sobre plano?',
    schemaAnswer:
      'Sí, ofrecemos un servicio específico de acompañamiento en compra sobre plano para obra nueva. El interiorista revisa los planos del promotor, te asesora en la selección de acabados y personalización de la vivienda, y verifica que el proyecto se ajuste a tus necesidades. Consulta nuestro servicio de compra sobre plano.',
    answer: (
      <>
        <p>
          Sí, ofrecemos un servicio específico de{' '}
          <strong className="font-semibold text-neutral-950">
            acompañamiento en compra sobre plano
          </strong>{' '}
          para obra nueva.
        </p>
        <p>
          El interiorista revisa los planos del promotor, te asesora en la
          selección de acabados y personalización de la vivienda, y verifica
          que el proyecto se ajuste a tus necesidades.
        </p>
        <p>
          Consulta nuestro{' '}
          <Link
            href="/compra-sobre-plano/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            servicio de compra sobre plano
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: '¿El servicio de asesoramiento cubre locales comerciales?',
    schemaAnswer:
      'Sí, también realizamos contravisitas de asesoramiento para la compra de locales comerciales. El interiorista evalúa la viabilidad del local según la normativa de actividades del Ayuntamiento de Barcelona, las posibilidades de redistribución y el coste de adecuación. Consulta nuestras tarifas de interiorismo comercial.',
    answer: (
      <>
        <p>
          Sí, también realizamos contravisitas de asesoramiento para la compra
          de{' '}
          <strong className="font-semibold text-neutral-950">
            locales comerciales
          </strong>
          .
        </p>
        <p>
          El interiorista evalúa la viabilidad del local según la{' '}
          <strong className="font-semibold text-neutral-950">
            normativa de actividades
          </strong>{' '}
          del Ayuntamiento de Barcelona, las posibilidades de redistribución y
          el coste de adecuación.
        </p>
        <p>
          Consulta nuestras{' '}
          <Link
            href="/precios/#interiorismo-comercial"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            tarifas de interiorismo comercial
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: '¿Cuánto tarda el informe técnico?',
    schemaAnswer:
      'El informe técnico se entrega en un plazo de 5 a 7 días laborables tras la contravisita. Incluye la evaluación del estado del inmueble, la estimación desglosada de costes de reforma por partidas, y un esquema orientativo de redistribución. Si necesitas el informe con urgencia para la firma de arras, podemos acelerar el plazo. Contacta con nosotros para más información.',
    answer: (
      <>
        <p>
          El informe técnico se entrega en un plazo de{' '}
          <strong className="font-semibold text-neutral-950">
            5 a 7 días laborables
          </strong>{' '}
          tras la contravisita.
        </p>
        <p>
          Incluye la evaluación del estado del inmueble, la estimación
          desglosada de costes de reforma por partidas, y un esquema
          orientativo de redistribución.
        </p>
        <p>
          Si necesitas el informe con urgencia para la firma de arras, podemos
          acelerar el plazo.{' '}
          <Link
            href="/contacto/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Contacta con nosotros
          </Link>{' '}
          para más información.
        </p>
      </>
    ),
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
          name: 'Nuestros servicios',
          item: 'https://www.interioristabarcelona.com/servicios/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Asesoramiento compra vivienda',
          item: 'https://www.interioristabarcelona.com/asesoria-compra-vivienda/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.interioristabarcelona.com/asesoria-compra-vivienda/#service',
      name: 'Asesoramiento compra vivienda en Barcelona',
      description:
        'Servicio de asesoramiento en la compra de vivienda en Barcelona: contravisita con un interiorista para evaluar el potencial del inmueble, detectar vicios ocultos y estimar el coste de reforma.',
      provider: {
        '@type': 'Organization',
        name: 'Interiorista Barcelona',
        url: 'https://www.interioristabarcelona.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Barcelona',
      },
      serviceType: 'Asesoramiento compra vivienda',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '150',
        unitText: 'por visita',
        description: 'Contravisita de asesoramiento desde 150 €',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        ratingCount: '3',
      },
    },
    {
      '@type': 'Organization',
      name: 'Interiorista Barcelona',
      url: 'https://www.interioristabarcelona.com',
      description:
        'Colectivo de interioristas y arquitectos de interior en Barcelona',
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
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.schemaAnswer,
        },
      })),
    },
    ...serviceTestimonials.map((t) => ({
      '@type': 'Review' as const,
      itemReviewed: {
        '@id': 'https://www.interioristabarcelona.com/asesoria-compra-vivienda/#service',
      },
      reviewRating: {
        '@type': 'Rating' as const,
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person' as const,
        name: t.client.split(',')[0],
      },
      reviewBody: t.quote,
    })),
  ],
}

export const metadata: Metadata = {
  title:
    'Asesoramiento compra vivienda en Barcelona | Informe técnico vivienda 2026',
  description:
    'Asesoramiento compra vivienda en Barcelona: contravisita con un interiorista para detectar vicios ocultos, evaluar el potencial del inmueble y estimar el coste de reforma. Desde 150 €.',
}

export default function AsesoriaCompraViviendaPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* 1. Hero */}
      <PageIntro
        eyebrow="Inicio > Nuestros servicios"
        title="Asesoramiento compra vivienda en Barcelona"
      >
        <p className="font-display text-2xl font-medium tracking-tight text-neutral-950">
          Evaluación técnica y estética del inmueble antes de firmar las arras
        </p>
        <p className="mt-6">
          Nuestros interioristas te acompañan en la visita del inmueble que
          deseas comprar, evalúan el potencial de redistribución, el estado de
          las instalaciones y estiman el coste de una eventual reforma. Un
          servicio esencial para quienes buscan comprar piso para reformar en
          Barcelona con total seguridad.
        </p>
        <div className="mt-8">
          <Button href="/contacto/">Solicitar asesoramiento gratuito</Button>
        </div>
      </PageIntro>

      {/* 2. Ventajas */}
      <SectionIntro
        eyebrow="Ventajas"
        title="¿Por qué visitar un inmueble con un interiorista antes de comprar?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Un interiorista aporta una visión técnica e independiente que te
          permite tomar una decisión informada antes de firmar las arras y
          comprometerte con la compra.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Visión técnica independiente">
            El interiorista evalúa el estado real del inmueble: muros de carga,
            tabiques, calidad de las instalaciones eléctricas y de fontanería.
            Una mirada profesional que va más allá de la estética del piso
            amueblado.
          </GridListItem>
          <GridListItem title="Estimación del coste de reforma">
            Antes de firmar las arras, dispones de una estimación realista del
            coste reforma piso. Un dato clave para negociar el precio de compra
            o ajustar tu presupuesto global.
          </GridListItem>
          <GridListItem title="Detección de vicios ocultos">
            Identificación de humedades, estado de las bajantes y montantes,
            defectos de aislamiento y otros vicios ocultos compra vivienda que
            no son visibles para un comprador no profesional.
          </GridListItem>
          <GridListItem title="Evaluación del potencial de redistribución">
            Análisis de las posibilidades de tirar tabiques, abrir la cocina al
            salón, crear un baño adicional o mejorar la entrada de luz natural.
            Tu interiorista te dice qué es viable y qué no.
          </GridListItem>
          <GridListItem title="Verificación normativa urbanística">
            Comprobación de la cédula de habitabilidad, el estado de la ITE del
            edificio y la conformidad con el PGM (Plan General Metropolitano)
            de Barcelona.
          </GridListItem>
          <GridListItem title="Tranquilidad en la negociación">
            Con un informe profesional en la mano, dispones de argumentos
            técnicos y cifrados para negociar el precio de compra con el
            vendedor o la agencia inmobiliaria.
          </GridListItem>
        </GridList>
      </Container>

      {/* 3. Colaboración */}
      <SectionIntro
        eyebrow="Colaboración"
        title="Tu acompañamiento en la compra de vivienda"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          El interiorista te acompaña durante todo el proceso de compra: desde
          la contravisita del inmueble hasta el informe técnico que te permite
          tomar la mejor decisión. Si decides comprar, tu interiorista puede
          encargarse directamente del proyecto de{' '}
          <Link
            href="/diseno-interiores/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            diseño de interiores
          </Link>{' '}
          o de la{' '}
          <Link
            href="/decoracion-interiores/"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            decoración de interiores
          </Link>{' '}
          de tu nueva vivienda.
        </p>
      </SectionIntro>

      {/* 4. Proceso en 3 etapas */}
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title="Contravisita del inmueble con tu interiorista"
          image={{ src: imageContravisita }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              El interiorista te acompaña en la visita del inmueble en
              Barcelona. Evalúa in situ el estado de los{' '}
              <strong className="font-semibold text-neutral-950">
                muros de carga, tabiques e instalaciones
              </strong>{' '}
              (electricidad, fontanería, gas, bajantes).
            </p>
            <p>
              Verifica la conformidad del inmueble con la{' '}
              <strong className="font-semibold text-neutral-950">
                cédula de habitabilidad
              </strong>
              , el estado de la ITE del edificio, la nota simple y la situación
              urbanística según el PGM de Barcelona.
            </p>
            <p>
              Consulta el acta de la comunidad de propietarios para detectar
              posibles derramas o problemas estructurales del edificio, un
              aspecto especialmente relevante en las fincas regias del Eixample.
            </p>
            <p>
              Proporciona una{' '}
              <strong className="font-semibold text-neutral-950">
                primera estimación orientativa del presupuesto
              </strong>{' '}
              de reforma necesaria para adaptar el inmueble a tus necesidades.
            </p>
          </div>
        </Section>

        <Section
          title="Informe técnico y estimación de costes"
          image={{ src: imageInformeTecnico, shape: 1 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              El interiorista redacta un{' '}
              <strong className="font-semibold text-neutral-950">
                informe técnico vivienda
              </strong>{' '}
              completo con la evaluación del estado del inmueble y las
              recomendaciones de intervención.
            </p>
            <p>
              El informe incluye una{' '}
              <strong className="font-semibold text-neutral-950">
                estimación desglosada del coste reforma piso
              </strong>{' '}
              por partidas: albañilería, electricidad, fontanería, carpintería,
              pintura, materiales y mobiliario.
            </p>
            <p>
              Se adjunta un esquema orientativo de redistribución que ilustra
              las posibilidades de transformación del espacio.
            </p>
          </div>

          <List className="mt-8">
            <ListItem title="Evaluación estructural">
              Estado de muros de carga, tabiques, forjados y elementos
              portantes del inmueble.
            </ListItem>
            <ListItem title="Instalaciones">
              Electricidad, fontanería, gas, bajantes y sistema de ventilación.
            </ListItem>
            <ListItem title="Estimación de costes">
              Presupuesto desglosado por partidas con horquilla de precios
              actualizada.
            </ListItem>
          </List>
        </Section>

        <Section
          title="Acompañamiento post-compra"
          image={{ src: imageResultadoReforma, shape: 2 }}
        >
          <div className="space-y-6 text-base text-neutral-600">
            <p>
              Si decides comprar el inmueble, tu interiorista puede encargarse
              directamente del{' '}
              <strong className="font-semibold text-neutral-950">
                proyecto de reforma integral
              </strong>
              : redistribución, selección de materiales, coordinación de gremios
              y seguimiento de obra.
            </p>
            <p>
              El{' '}
              <strong className="font-semibold text-neutral-950">
                importe de la contravisita se descuenta
              </strong>{' '}
              de los honorarios del proyecto de arquitectura de interiores. Tu
              inversión inicial se convierte en parte del proyecto.
            </p>
            <p>
              Si estás considerando una vivienda de obra nueva, consulta también
              nuestro servicio de{' '}
              <Link
                href="/compra-sobre-plano/"
                className="font-semibold text-neutral-950 underline hover:text-neutral-700"
              >
                compra sobre plano
              </Link>{' '}
              para acompañamiento en promociones y personalización de acabados.
            </p>
          </div>
        </Section>

      {/* 5. Tarifas */}
      <PricingBlock
        id="tarifas-asesoria-compra"
        name="Tarifas de asesoramiento compra vivienda"
        description="Servicio de asesoramiento para la compra de vivienda en Barcelona. Te acompañamos en la visita del inmueble y te entregamos un informe técnico con la estimación del coste de reforma."
        href="/contacto/"
        ctaLabel="Solicitar asesoramiento gratuito"
        image={{ src: imageTerrazaAtico, shape: 0 }}
        showCounter={false}
        tiers={[
          {
            name: 'Contravisita de asesoramiento',
            price: 'Desde 150 €',
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
        ]}
      />
      </div>

      {/* 6. FAQ */}
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre asesoramiento compra vivienda en Barcelona"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Respondemos a las preguntas más habituales sobre nuestro servicio de
          asesoramiento en la compra de vivienda.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <FAQAccordion items={faqItems} />
        </FadeIn>
      </Container>

      {/* 7. Contact */}
      <ContactSection />

      {/* 8. Proyectos destacados */}
      <LatestProjects
        title="Proyectos de asesoramiento compra vivienda en Barcelona"
        subtitle="Descubre algunos proyectos de asesoramiento en la compra de vivienda realizados por los miembros del colectivo."
      />

      {/* 9. Testimonios */}
      <TestimonialSlider
        className="mt-24 sm:mt-32 lg:mt-40"
        testimonials={serviceTestimonials}
      />
    </RootLayout>
  )
}
