import { loadCaseStudies } from '@/lib/mdx'
import { ProjectShowcase, type Project } from '@/components/ProjectShowcase'

export async function LatestProjects({
  eyebrow,
  title = 'Nuestros últimos proyectos de interiorismo',
  subtitle = 'Descubre algunos proyectos de interiorismo realizados por los miembros del colectivo en Barcelona.',
  className,
}: {
  eyebrow?: string
  title?: string
  subtitle?: string
  className?: string
}) {
  const caseStudies = await loadCaseStudies()
  const projects: Project[] = caseStudies.slice(0, 3).map((cs) => ({
    title: cs.title,
    description: cs.description,
    year: cs.date.slice(0, 4),
    category: cs.service,
    image: cs.image.src,
    href: `${cs.href}/`,
  }))

  return (
    <ProjectShowcase
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      projects={projects}
      className={className}
      viewAllHref="/proyectos/"
      viewAllLabel="Ver todos los proyectos"
    />
  )
}
