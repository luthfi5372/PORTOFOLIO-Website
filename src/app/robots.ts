import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/studio/',   // Block access to Sanity Studio Admin
        '/api/',      // Block access to API routes
        '/admin/',    // Block access to admin folder
      ],
    },
    sitemap: 'https://luthfi-aziz.com/sitemap.xml',
  };
}

