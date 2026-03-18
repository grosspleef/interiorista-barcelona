import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const steps = [
  { number: '1', title: 'Solicitud de proyecto' },
  { number: '2', title: 'Llamada telefónica' },
  { number: '3', title: 'Visita a domicilio' },
  { number: '4', title: 'Estudio y seguimiento de obra' },
]

export function NeighborhoodsSection() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-16 sm:mt-32 sm:py-24 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Un acompañamiento de la A a la Z. Servicio gratuito y sin
            compromiso.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ol
            role="list"
            className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-0"
          >
            {steps.map((step, index) => (
              <li
                key={step.number}
                className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-3 sm:flex-1"
              >
                <FadeIn className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-3">
                  <span className="font-display text-3xl font-light text-neutral-500">
                    {step.number}
                  </span>
                  <p className="font-display text-sm font-semibold text-white sm:text-center">
                    {step.title}
                  </p>
                </FadeIn>
                {index < steps.length - 1 && (
                  <div className="hidden sm:block sm:absolute sm:right-0 sm:top-1/2" />
                )}
              </li>
            ))}
          </ol>
        </FadeInStagger>
      </Container>
    </div>
  )
}
