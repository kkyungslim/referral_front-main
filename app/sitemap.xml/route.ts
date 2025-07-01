// app/sitemap.xml/route.ts
import { type MetadataRoute } from 'next';

export async function GET(): Promise<Response> {
  const baseUrl = 'https://www.tetherbase.io';

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: '2025-07-01',
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/event`,
      lastModified: '2025-07-01',
    },
    {
      url: `${baseUrl}/partner`,
      lastModified: '2025-07-01',
    },
    {
      url: `${baseUrl}/payback`,
      lastModified: '2025-07-01',
    },
    {
      url: `${baseUrl}/intro`,
      lastModified: '2025-07-01',
    },
    {
      url: `${baseUrl}/search`,
      lastModified: '2025-07-01',
    },
    {
      url: `${baseUrl}/history`,
      lastModified: '2025-07-01',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes
      .map(
        (route) => `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    ${route.changeFrequency ? `<changefreq>${route.changeFrequency}</changefreq>` : ''}
    ${route.priority ? `<priority>${route.priority}</priority>` : ''}
  </url>`,
      )
      .join('\n') +
    `\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
