import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://luthfi-aziz.com";

  // 1. Static Pages
  const routes = ["", "/projects", "/about", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Dynamic Pages (Example: List Projects from Sanity)
  // const projects = await getProjects();
  // const projectRoutes = projects.map((project) => ({
  //   url: `${baseUrl}/projects/${project.slug}`,
  //   lastModified: new Date(project._updatedAt),
  //   priority: 0.6,
  // }));

  return [...routes];
}

