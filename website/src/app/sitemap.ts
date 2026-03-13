import type { MetadataRoute } from 'next'

import { loadArticles, loadCaseStudies } from '@/lib/mdx'
import { services } from '@/lib/services'
import { members } from '@/lib/members'

const BASE_URL = 'https://www.interioristabarcelona.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await loadArticles()
  const caseStudies = await loadCaseStudies()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/contacto/`, changeFrequency: 'yearly', priority: 0.8 },
    {
      url: `${BASE_URL}/quienes-somos/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/opiniones/`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    { url: `${BASE_URL}/precios/`, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${BASE_URL}/preguntas-frecuentes/`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/proyectos/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/antes-y-despues/`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    { url: `${BASE_URL}/blog/`, changeFrequency: 'weekly', priority: 0.7 },
    {
      url: `${BASE_URL}/aviso-legal/`,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/condiciones-uso/`,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/politica-cookies/`,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/politica-privacidad/`,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]

  const barrioPages: MetadataRoute.Sitemap = [
    'interiorista-eixample',
    'interiorista-gracia',
    'interiorista-born',
    'interiorista-sarria',
    'interiorista-poblenou',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const cityPages: MetadataRoute.Sitemap = [
    'interiorista-sant-cugat',
    'interiorista-sabadell',
    'interiorista-terrassa',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}${service.href}`,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const memberPages: MetadataRoute.Sitemap = members.map((member) => ({
    url: `${BASE_URL}/quienes-somos/${member.slug}/`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}${article.href}/`,
    lastModified: article.date,
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  const projectPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${BASE_URL}${study.href}/`,
    lastModified: study.date,
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  const beforeAfterPages: MetadataRoute.Sitemap = caseStudies.map((study) => {
    const slug = study.href.replace('/proyectos/', '')
    return {
      url: `${BASE_URL}/antes-y-despues/${slug}/`,
      lastModified: study.date,
      changeFrequency: 'yearly',
      priority: 0.6,
    }
  })

  return [
    ...staticPages,
    ...servicePages,
    ...barrioPages,
    ...cityPages,
    ...memberPages,
    ...blogPages,
    ...projectPages,
    ...beforeAfterPages,
  ]
}
