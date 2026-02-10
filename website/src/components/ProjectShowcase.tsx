import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'

export type Project = {
  title: string
  description: string
  year: string
  category: string
}

export function ProjectShowcase({
  eyebrow,
  title,
  subtitle,
  projects,
  className,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  projects: Project[]
  className?: string
}) {
  return (
    <>
      <SectionIntro
        eyebrow={eyebrow}
        title={title}
        className={className ?? 'mt-24 sm:mt-32 lg:mt-40'}
      >
        {subtitle && <p>{subtitle}</p>}
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeIn key={project.title} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <p className="flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={project.year} className="font-semibold">
                    {project.year}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{project.category}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {project.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {project.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
