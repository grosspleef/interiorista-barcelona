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
          name: 'Condiciones de uso',
          item: 'https://www.interioristabarcelona.com/condiciones-uso/',
        },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Condiciones de uso — Interiorista Barcelona',
      url: 'https://www.interioristabarcelona.com/condiciones-uso/',
      description:
        'Condiciones generales de uso del sitio web interioristabarcelona.com, plataforma de puesta en relación con profesionales del interiorismo en Barcelona.',
    },
  ],
}

export const metadata: Metadata = {
  title: 'Condiciones de uso',
  description:
    'Condiciones generales de uso del sitio web interioristabarcelona.com, plataforma de puesta en relación con profesionales del interiorismo en Barcelona.',
  alternates: {
    canonical: '/condiciones-uso/',
  },
}

export default function CondicionesUsoPage() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <PageIntro eyebrow="Legal" title="Condiciones de uso">
        <p>
          Condiciones generales de uso del sitio web interioristabarcelona.com.
          El acceso y la navegación por este sitio web implican la aceptación
          plena y sin reservas de las presentes condiciones.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="typography max-w-3xl">
            <h2>1. Disposiciones generales</h2>
            <p>
              El sitio web interioristabarcelona.com (en adelante, el
              &quot;Sitio&quot;) es una plataforma de puesta en relación entre
              visitantes que buscan servicios de interiorismo, arquitectura de
              interiores, decoración o paisajismo y profesionales independientes
              que ofrecen dichos servicios en Barcelona y su área metropolitana.
            </p>
            <p>
              El Sitio no presta directamente servicios de interiorismo ni de
              arquitectura. Su función es facilitar el contacto entre las partes.
            </p>

            <h2>2. Definiciones</h2>
            <ul>
              <li>
                <strong>Sitio:</strong> el sitio web accesible en
                interioristabarcelona.com y sus subdominios.
              </li>
              <li>
                <strong>Titular:</strong> la persona física responsable de la
                edición y gestión del Sitio, identificada en el{' '}
                <Link href="/aviso-legal/">aviso legal</Link>.
              </li>
              <li>
                <strong>Visitante:</strong> cualquier persona que accede al Sitio
                y navega por sus contenidos.
              </li>
              <li>
                <strong>Profesional:</strong> interiorista, arquitecto,
                decorador o paisajista independiente, miembro del colectivo
                Interiorista Barcelona.
              </li>
              <li>
                <strong>Cliente:</strong> visitante que solicita los servicios de
                un profesional a través del Sitio.
              </li>
              <li>
                <strong>Misión:</strong> encargo de proyecto de interiorismo,
                decoración, arquitectura o paisajismo acordado directamente entre
                el cliente y el profesional.
              </li>
            </ul>

            <h2>3. Objeto del sitio</h2>
            <p>
              El Sitio tiene como objeto facilitar la conexión entre visitantes
              que desean realizar un proyecto de interiorismo en Barcelona y
              profesionales cualificados del colectivo. El titular actúa como
              intermediario y no es parte en la relación contractual que pueda
              establecerse entre el cliente y el profesional.
            </p>

            <h2>4. Aceptación de las condiciones</h2>
            <p>
              El acceso y la utilización del Sitio implican la aceptación plena
              y sin reservas de las presentes condiciones de uso. Si el visitante
              no está de acuerdo con alguna de estas condiciones, deberá
              abstenerse de utilizar el Sitio.
            </p>

            <h2>5. Modificación de las condiciones</h2>
            <p>
              El titular se reserva el derecho de modificar en cualquier momento
              las presentes condiciones de uso. Las modificaciones entrarán en
              vigor desde su publicación en el Sitio. Se recomienda al visitante
              consultar esta página periódicamente para mantenerse informado de
              posibles cambios.
            </p>

            <h2>6. Formulario de contacto y recogida de datos</h2>
            <p>
              El Sitio pone a disposición del visitante un formulario de
              contacto para solicitar información o presupuesto. Los datos
              recogidos a través de dicho formulario son:
            </p>
            <ul>
              <li>Nombre y apellidos</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono (opcional)</li>
              <li>Descripción del proyecto</li>
            </ul>
            <p>
              La base jurídica del tratamiento es el consentimiento del
              interesado (artículo 6.1.a del Reglamento General de Protección de
              Datos — RGPD). Los datos se utilizan exclusivamente para gestionar
              la solicitud y poner en contacto al visitante con un profesional
              del colectivo.
            </p>

            <h2>7. Papel del sitio</h2>
            <p>
              El Sitio actúa como plataforma de intermediación. Los
              profesionales del colectivo son trabajadores independientes
              (autónomos) y no empleados del titular. Cada profesional ejerce su
              actividad bajo su propia responsabilidad y dispone de su propio
              seguro de responsabilidad civil profesional.
            </p>
            <p>
              El titular no interviene en la ejecución de las misiones ni
              garantiza los resultados de los servicios prestados por los
              profesionales.
            </p>

            <h2>8. Relación entre profesionales y visitantes</h2>
            <p>
              La relación contractual se establece directamente entre el cliente
              y el profesional seleccionado. El titular no es parte en dicho
              contrato y no asume responsabilidad alguna sobre:
            </p>
            <ul>
              <li>La calidad o el resultado de los servicios prestados</li>
              <li>El cumplimiento de los plazos acordados</li>
              <li>Las condiciones económicas pactadas entre las partes</li>
              <li>
                Cualquier litigio que pudiera surgir entre el cliente y el
                profesional
              </li>
            </ul>

            <h2>9. Obligaciones del visitante</h2>
            <p>El visitante se compromete a:</p>
            <ul>
              <li>
                Proporcionar información veraz y exacta al cumplimentar el
                formulario de contacto
              </li>
              <li>
                Utilizar el Sitio de conformidad con la legislación vigente, la
                moral, las buenas costumbres y el orden público
              </li>
              <li>
                No utilizar el Sitio con fines ilícitos, fraudulentos o que
                atenten contra los derechos de terceros
              </li>
              <li>
                No introducir virus informáticos, código malicioso o cualquier
                otro elemento que pueda dañar, alterar o inutilizar el Sitio
              </li>
            </ul>

            <h2>10. Condiciones de precios</h2>
            <p>
              Los precios indicados en el Sitio tienen carácter orientativo y no
              constituyen una oferta vinculante. Las tarifas definitivas serán
              acordadas directamente entre el cliente y el profesional tras la
              evaluación del proyecto.
            </p>
            <p>
              Salvo indicación expresa en contrario, los precios publicados no
              incluyen el IVA (Impuesto sobre el Valor Añadido) aplicable.
            </p>

            <h2>11. Protección de datos personales</h2>
            <p>
              De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley
              Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
              Personales y garantía de los derechos digitales (LOPDGDD), el
              visitante tiene derecho a:
            </p>
            <ul>
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos o incompletos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Solicitar la limitación del tratamiento</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
            <p>
              Para ejercer estos derechos, el visitante puede dirigirse al
              titular por correo electrónico: hugo@interiorista-barcelona.com.
            </p>
            <p>
              Para más información sobre el uso de cookies, consulte nuestra{' '}
              <Link href="/politica-cookies/">política de cookies</Link>.
            </p>

            <h2>12. Legislación aplicable</h2>
            <p>
              Las presentes condiciones de uso se rigen por la legislación
              española. Para la resolución de cualquier controversia derivada del
              acceso o uso del Sitio, las partes se someten a la jurisdicción de
              los Juzgados y Tribunales de Barcelona.
            </p>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
