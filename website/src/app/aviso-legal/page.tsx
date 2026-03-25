import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

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
          item: 'https://www.interiorista-barcelona.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Aviso legal',
          item: 'https://www.interiorista-barcelona.com/aviso-legal/',
        },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Aviso legal — Interiorista Barcelona',
      url: 'https://www.interiorista-barcelona.com/aviso-legal/',
      description:
        'Aviso legal e información sobre el titular del sitio web interiorista-barcelona.com, en cumplimiento de la LSSI-CE.',
    },
  ],
}

export const metadata: Metadata = {
  title: 'Aviso legal',
  description:
    'Aviso legal e información sobre el titular del sitio web interiorista-barcelona.com, en cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE).',
  robots: { index: false, follow: true },
  alternates: {
    canonical: '/aviso-legal/',
  },
}

export default function AvisoLegalPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <PageIntro eyebrow="Legal" title="Aviso legal">
        <p>
          Información legal sobre el titular del sitio web
          interiorista-barcelona.com, en cumplimiento de la Ley 34/2002, de 11 de
          julio, de Servicios de la Sociedad de la Información y de Comercio
          Electrónico (LSSI-CE).
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="typography max-w-3xl">
            <h2>1. Datos identificativos del titular</h2>
            <p>
              En cumplimiento del artículo 10 de la LSSI-CE, se informa al
              usuario de los datos del titular de este sitio web:
            </p>
            <ul>
              <li>
                <strong>Titular:</strong> Hugo Betscher
              </li>
              <li>
                <strong>SIRET:</strong> 93976647300010
              </li>
              <li>
                <strong>Domicilio:</strong> 9 villa de Guelma, 75018 París,
                Francia
              </li>
              <li>
                <strong>Correo electrónico:</strong> hugo@interiorista-barcelona.com
              </li>
              <li>
                <strong>Actividad:</strong> Microempresario individual
                (auto-entrepreneur) inscrito en Francia — Servicios de
                interiorismo, arquitectura de interiores y diseño
              </li>
            </ul>

            <h2>2. Director de la publicación</h2>
            <p>
              El director de la publicación del sitio web
              interiorista-barcelona.com es Hugo Betscher.
            </p>

            <h2>3. Alojamiento</h2>
            <p>Este sitio web está alojado por:</p>
            <ul>
              <li>
                <strong>Proveedor:</strong> Vercel, Inc.
              </li>
              <li>
                <strong>Dirección:</strong> 340 S Lemon Ave #4133, Walnut, CA
                91789, Estados Unidos
              </li>
              <li>
                <strong>Sitio web:</strong>{' '}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vercel.com
                </a>
              </li>
            </ul>

            <h2>4. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web interiorista-barcelona.com,
              incluyendo textos, fotografías, gráficos, imágenes, iconos,
              tecnología, software, enlaces y demás contenidos audiovisuales o
              sonoros, así como su diseño gráfico y códigos fuente, son propiedad
              intelectual del titular o de terceros que han autorizado su uso, sin
              que puedan entenderse cedidos al usuario ninguno de los derechos de
              explotación reconocidos por la legislación vigente en materia de
              propiedad intelectual (Real Decreto Legislativo 1/1996, de 12 de
              abril, por el que se aprueba el Texto Refundido de la Ley de
              Propiedad Intelectual).
            </p>
            <p>
              Queda prohibida la reproducción, distribución, comunicación pública
              y transformación de la totalidad o parte de los contenidos de este
              sitio web, sin la autorización previa y por escrito del titular.
            </p>

            <h2>5. Limitación de responsabilidad</h2>
            <p>
              El titular no se hace responsable de los daños y perjuicios de
              cualquier naturaleza que pudieran derivarse del uso del sitio web,
              incluyendo, a título enunciativo y no limitativo: errores u
              omisiones en los contenidos, falta de disponibilidad del sitio web o
              la transmisión de virus o programas maliciosos.
            </p>
            <p>
              La información publicada en este sitio web tiene carácter
              orientativo y no constituye en ningún caso asesoramiento
              profesional. Para obtener asesoramiento específico, el usuario
              deberá contactar directamente con un profesional del colectivo.
            </p>

            <h2>6. Enlaces a sitios de terceros</h2>
            <p>
              Este sitio web puede contener enlaces a sitios de terceros. El
              titular no asume ninguna responsabilidad sobre el contenido,
              políticas de privacidad o prácticas de dichos sitios web de
              terceros. El acceso a dichos sitios se realiza bajo la exclusiva
              responsabilidad del usuario.
            </p>

            <h2>7. Créditos fotográficos</h2>
            <p>
              Las fotografías e imágenes utilizadas en este sitio web son
              propiedad del titular, de los profesionales del colectivo o se
              utilizan bajo licencia. La reproducción de estas imágenes sin
              autorización previa y por escrito queda expresamente prohibida.
            </p>

            <h2>8. Legislación aplicable y jurisdicción</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para
              la resolución de cualquier controversia que pudiera derivarse del
              acceso o uso de este sitio web, las partes se someten expresamente a
              la jurisdicción de los Juzgados y Tribunales de Barcelona,
              renunciando a cualquier otro fuero que pudiera corresponderles.
            </p>

            <h2>9. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con este aviso legal, puede
              contactar con el titular a través del correo electrónico: hugo@interiorista-barcelona.com.
            </p>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
