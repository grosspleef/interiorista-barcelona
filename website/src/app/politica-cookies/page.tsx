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
          name: 'Política de cookies',
          item: 'https://www.interiorista-barcelona.com/politica-cookies/',
        },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Política de cookies — Interiorista Barcelona',
      url: 'https://www.interiorista-barcelona.com/politica-cookies/',
      description:
        'Política de cookies del sitio web interiorista-barcelona.com, en cumplimiento de la LSSI-CE.',
    },
  ],
}

export const metadata: Metadata = {
  title: 'Política de cookies',
  description:
    'Política de cookies del sitio web interiorista-barcelona.com, en cumplimiento del artículo 22 de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE).',
  robots: { index: false, follow: true },
  alternates: {
    canonical: '/politica-cookies/',
  },
}

export default function PoliticaCookiesPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <PageIntro eyebrow="Legal" title="Política de cookies">
        <p>
          Información sobre las cookies utilizadas en el sitio web
          interiorista-barcelona.com, en cumplimiento del artículo 22 de la Ley
          34/2002, de 11 de julio, de Servicios de la Sociedad de la Información
          y de Comercio Electrónico (LSSI-CE).
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="typography max-w-3xl">
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en el
              dispositivo del usuario (ordenador, tableta, teléfono móvil)
              cuando visita un sitio web. Permiten al sitio recordar información
              sobre la visita, como las preferencias de idioma u otros ajustes,
              facilitando la navegación y mejorando la experiencia del usuario.
            </p>

            <h2>2. Tipos de cookies utilizadas</h2>
            <p>
              Actualmente, este sitio web utiliza únicamente cookies técnicas
              estrictamente necesarias para el funcionamiento del sitio:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Proveedor</th>
                  <th>Finalidad</th>
                  <th>Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>__vercel_live_token</td>
                  <td>Vercel</td>
                  <td>
                    Cookie técnica necesaria para el despliegue y
                    funcionamiento del sitio web
                  </td>
                  <td>Sesión</td>
                </tr>
              </tbody>
            </table>
            <p>
              Este sitio web <strong>no utiliza</strong> cookies de análisis,
              publicitarias ni de seguimiento en el momento de la publicación de
              esta política. En caso de incorporar herramientas de analítica web
              en el futuro, esta política se actualizará en consecuencia y se
              solicitará el consentimiento previo del usuario.
            </p>

            <h2>3. Base jurídica</h2>
            <p>
              Las cookies técnicas estrictamente necesarias se instalan en virtud
              del interés legítimo del titular del sitio web para garantizar su
              correcto funcionamiento, de conformidad con el artículo 22.2 de la
              LSSI-CE.
            </p>
            <p>
              En caso de incorporarse cookies no esenciales (analítica,
              publicidad), su instalación requerirá el consentimiento previo e
              informado del usuario, de conformidad con el artículo 22.2 de la
              LSSI-CE y el artículo 6.1.a del RGPD.
            </p>

            <h2>4. Cómo gestionar las cookies</h2>
            <p>
              El usuario puede configurar su navegador para aceptar, rechazar o
              eliminar las cookies. A continuación se indican las instrucciones
              para los navegadores más habituales:
            </p>
            <ul>
              <li>
                <strong>Google Chrome:</strong> Configuración → Privacidad y
                seguridad → Cookies y otros datos de sitios
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Configuración → Privacidad y
                seguridad → Cookies y datos del sitio
              </li>
              <li>
                <strong>Safari:</strong> Preferencias → Privacidad → Gestionar
                datos de sitios web
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Configuración → Cookies y
                permisos de sitios → Cookies y datos almacenados
              </li>
            </ul>
            <p>
              Tenga en cuenta que la desactivación de las cookies técnicas puede
              afectar al correcto funcionamiento del sitio web.
            </p>

            <h2>5. Cookies de terceros</h2>
            <p>
              Este sitio web está alojado en Vercel, Inc., que puede instalar
              cookies técnicas necesarias para la distribución del contenido y
              la seguridad del sitio. Puede consultar la política de privacidad
              de Vercel en{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>

            <h2>6. Actualización de esta política</h2>
            <p>
              El titular se reserva el derecho de modificar esta política de
              cookies en cualquier momento para adaptarla a novedades
              legislativas, jurisprudenciales o de práctica sectorial. Se
              recomienda al usuario consultar esta página periódicamente para
              mantenerse informado de posibles cambios.
            </p>

            <h2>7. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con esta política de cookies,
              puede contactar con el titular a través del correo electrónico:
              hugo@interiorista-barcelona.com.
            </p>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
