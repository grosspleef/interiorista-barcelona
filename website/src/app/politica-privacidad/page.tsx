import { type Metadata } from 'next'
import Link from 'next/link'

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
          item: 'https://www.interioristabarcelona.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Política de privacidad',
          item: 'https://www.interioristabarcelona.com/politica-privacidad/',
        },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Política de privacidad — Interiorista Barcelona',
      url: 'https://www.interioristabarcelona.com/politica-privacidad/',
      description:
        'Política de privacidad del sitio web interioristabarcelona.com, en cumplimiento del RGPD y la Ley Orgánica 3/2018 (LOPDGDD).',
    },
  ],
}

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description:
    'Política de privacidad del sitio web interioristabarcelona.com, en cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales (LOPDGDD).',
}

export default function PoliticaPrivacidadPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <PageIntro eyebrow="Legal" title="Política de privacidad">
        <p>
          Información sobre el tratamiento de datos personales en el sitio web
          interioristabarcelona.com, en cumplimiento del Reglamento (UE)
          2016/679 General de Protección de Datos (RGPD) y la Ley Orgánica
          3/2018, de 5 de diciembre, de Protección de Datos Personales y
          garantía de los derechos digitales (LOPDGDD).
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="typography max-w-3xl">
            <h2>1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales recogidos a
              través de este sitio web es:
            </p>
            <ul>
              <li>
                <strong>Responsable:</strong> Hugo Betscher
              </li>
              <li>
                <strong>SIRET:</strong> 93976647300010
              </li>
              <li>
                <strong>Domicilio:</strong> 9 villa de Guelma, 75018 París,
                Francia
              </li>
              <li>
                <strong>Correo electrónico:</strong>{' '}
                hugo@interiorista-barcelona.com
              </li>
            </ul>

            <h2>2. Datos personales que recogemos</h2>
            <p>
              A través del formulario de contacto del Sitio, se recogen los
              siguientes datos personales:
            </p>
            <ul>
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono (opcional)</li>
              <li>Descripción del proyecto (mensaje libre)</li>
            </ul>
            <p>
              No se recogen datos sensibles (origen étnico, opiniones políticas,
              datos de salud, etc.) en el sentido del artículo 9 del RGPD.
            </p>

            <h2>3. Finalidad del tratamiento</h2>
            <p>
              Los datos personales recogidos se utilizan exclusivamente para las
              siguientes finalidades:
            </p>
            <ul>
              <li>
                Gestionar las solicitudes de información o presupuesto enviadas
                a través del formulario de contacto
              </li>
              <li>
                Poner en contacto al visitante con un profesional del colectivo
                Interiorista Barcelona adecuado a su proyecto
              </li>
              <li>
                Responder a las consultas del visitante por correo electrónico o
                teléfono
              </li>
            </ul>
            <p>
              Los datos personales <strong>no se utilizan</strong> con fines de
              prospección comercial, elaboración de perfiles, ni se comunican a
              terceros con fines publicitarios.
            </p>

            <h2>4. Base jurídica del tratamiento</h2>
            <p>
              El tratamiento de los datos personales se fundamenta en las
              siguientes bases jurídicas, de conformidad con el artículo 6.1 del
              RGPD:
            </p>
            <ul>
              <li>
                <strong>Consentimiento del interesado</strong> (art. 6.1.a
                RGPD): el visitante consiente expresamente el tratamiento de sus
                datos al enviar el formulario de contacto.
              </li>
              <li>
                <strong>Interés legítimo</strong> (art. 6.1.f RGPD): para la
                gestión administrativa y la mejora de los servicios prestados a
                través del Sitio.
              </li>
            </ul>

            <h2>5. Destinatarios de los datos</h2>
            <p>Los datos personales pueden ser comunicados a:</p>
            <ul>
              <li>
                <strong>Profesionales del colectivo:</strong> los interioristas,
                arquitectos o decoradores miembros del colectivo Interiorista
                Barcelona, exclusivamente para gestionar la solicitud del
                visitante.
              </li>
              <li>
                <strong>Proveedores de servicios técnicos:</strong>
                <ul>
                  <li>
                    <strong>Resend, Inc.</strong> (Estados Unidos) — servicio de
                    envío de correos electrónicos transaccionales.
                  </li>
                  <li>
                    <strong>Vercel, Inc.</strong> (Estados Unidos) — alojamiento
                    del sitio web.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Estos proveedores actúan como encargados del tratamiento y están
              sujetos a obligaciones contractuales de confidencialidad y
              seguridad conforme al artículo 28 del RGPD.
            </p>

            <h2>6. Transferencias internacionales de datos</h2>
            <p>
              Los proveedores de servicios técnicos mencionados anteriormente
              (Resend, Inc. y Vercel, Inc.) están ubicados en Estados Unidos. Las
              transferencias de datos personales a estos proveedores se realizan
              con las garantías adecuadas previstas en el artículo 46 del RGPD,
              incluyendo:
            </p>
            <ul>
              <li>
                El Marco de Privacidad de Datos UE-EE.UU. (EU-U.S. Data Privacy
                Framework), según la Decisión de adecuación de la Comisión
                Europea de 10 de julio de 2023
              </li>
              <li>
                Cláusulas contractuales tipo aprobadas por la Comisión Europea
              </li>
            </ul>

            <h2>7. Plazo de conservación de los datos</h2>
            <p>
              Los datos personales se conservan durante los siguientes plazos:
            </p>
            <ul>
              <li>
                <strong>Solicitudes de contacto:</strong> los datos se conservan
                durante un máximo de 12 meses desde la última comunicación con
                el visitante, salvo que se establezca una relación contractual
                con un profesional del colectivo.
              </li>
              <li>
                <strong>Relación contractual:</strong> en caso de contratación
                de servicios, los datos se conservan durante la duración de la
                relación contractual y, posteriormente, durante los plazos de
                prescripción legales aplicables (5 años conforme al artículo
                1964 del Código Civil español).
              </li>
            </ul>
            <p>
              Transcurridos estos plazos, los datos serán suprimidos o
              anonimizados de forma irreversible.
            </p>

            <h2>8. Derechos del interesado</h2>
            <p>
              De conformidad con el RGPD (artículos 15 a 22) y la LOPDGDD, el
              visitante dispone de los siguientes derechos sobre sus datos
              personales:
            </p>
            <ul>
              <li>
                <strong>Derecho de acceso</strong> (art. 15 RGPD): obtener
                confirmación de si se están tratando sus datos y acceder a los
                mismos.
              </li>
              <li>
                <strong>Derecho de rectificación</strong> (art. 16 RGPD):
                solicitar la corrección de datos inexactos o incompletos.
              </li>
              <li>
                <strong>Derecho de supresión</strong> (art. 17 RGPD): solicitar
                la eliminación de sus datos cuando ya no sean necesarios para la
                finalidad para la que fueron recogidos.
              </li>
              <li>
                <strong>Derecho de oposición</strong> (art. 21 RGPD): oponerse
                al tratamiento de sus datos por motivos relacionados con su
                situación particular.
              </li>
              <li>
                <strong>Derecho de limitación del tratamiento</strong> (art. 18
                RGPD): solicitar la limitación del tratamiento en determinadas
                circunstancias.
              </li>
              <li>
                <strong>Derecho a la portabilidad</strong> (art. 20 RGPD):
                recibir los datos personales facilitados en un formato
                estructurado, de uso común y lectura mecánica.
              </li>
              <li>
                <strong>Derecho a no ser objeto de decisiones automatizadas</strong>{' '}
                (art. 22 RGPD): este sitio web no realiza decisiones
                automatizadas ni elaboración de perfiles.
              </li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, el visitante puede
              dirigirse al responsable del tratamiento por correo electrónico a:{' '}
              <strong>hugo@interiorista-barcelona.com</strong>, adjuntando copia
              de su documento de identidad. La solicitud será atendida en un
              plazo máximo de un mes desde su recepción, conforme al artículo
              12.3 del RGPD.
            </p>

            <h2>9. Derecho a presentar una reclamación</h2>
            <p>
              Si el visitante considera que el tratamiento de sus datos
              personales vulnera la normativa vigente, tiene derecho a presentar
              una reclamación ante la autoridad de control competente:
            </p>
            <ul>
              <li>
                <strong>En España:</strong> Agencia Española de Protección de
                Datos (AEPD) —{' '}
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.aepd.es
                </a>
                , C/ Jorge Juan 6, 28001 Madrid.
              </li>
              <li>
                <strong>En Cataluña:</strong> Autoritat Catalana de Protecció de
                Dades (APDCAT) —{' '}
                <a
                  href="https://apdcat.gencat.cat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  apdcat.gencat.cat
                </a>
                , C/ Rosselló 214, Esc. A, 1r 1a, 08008 Barcelona.
              </li>
            </ul>

            <h2>10. Medidas de seguridad</h2>
            <p>
              El responsable del tratamiento ha adoptado las medidas técnicas y
              organizativas apropiadas para garantizar la seguridad de los datos
              personales y evitar su alteración, pérdida, tratamiento o acceso
              no autorizado, conforme al artículo 32 del RGPD. Estas medidas
              incluyen:
            </p>
            <ul>
              <li>Comunicaciones cifradas mediante protocolo HTTPS/TLS</li>
              <li>
                Acceso restringido a los datos personales por parte del
                responsable y los encargados del tratamiento
              </li>
              <li>
                Uso de proveedores de servicios que cumplen con estándares de
                seguridad reconocidos
              </li>
            </ul>

            <h2>11. Menores de edad</h2>
            <p>
              Este sitio web no está dirigido a menores de 14 años. De
              conformidad con el artículo 7 de la LOPDGDD, el tratamiento de
              datos personales de un menor de 14 años solo será lícito si el
              consentimiento es prestado por el titular de la patria potestad o
              tutela.
            </p>

            <h2>12. Modificaciones de esta política</h2>
            <p>
              El responsable se reserva el derecho de modificar la presente
              política de privacidad para adaptarla a novedades legislativas,
              jurisprudenciales o de práctica sectorial. Se recomienda al
              visitante consultar esta página periódicamente. Cualquier
              modificación será efectiva desde su publicación en el Sitio.
            </p>

            <h2>13. Normativa aplicable</h2>
            <p>
              La presente política de privacidad se rige por la siguiente
              normativa:
            </p>
            <ul>
              <li>
                Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo,
                de 27 de abril de 2016, relativo a la protección de las personas
                físicas en lo que respecta al tratamiento de datos personales
                (RGPD)
              </li>
              <li>
                Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
                Personales y garantía de los derechos digitales (LOPDGDD)
              </li>
              <li>
                Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
                Información y de Comercio Electrónico (LSSI-CE)
              </li>
            </ul>

            <h2>14. Enlaces a otras páginas legales</h2>
            <p>
              Para más información, consulte también las siguientes páginas:
            </p>
            <ul>
              <li>
                <Link href="/aviso-legal/">Aviso legal</Link>
              </li>
              <li>
                <Link href="/condiciones-uso/">Condiciones de uso</Link>
              </li>
              <li>
                <Link href="/politica-cookies/">Política de cookies</Link>
              </li>
            </ul>

            <h2>15. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con esta política de
              privacidad o con el tratamiento de sus datos personales, puede
              contactar con el responsable a través del correo electrónico:
              hugo@interiorista-barcelona.com.
            </p>

            <p className="mt-8 text-sm text-neutral-500">
              Última actualización: marzo de 2026.
            </p>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
