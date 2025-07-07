// app/sitemap.xml/route.ts
import { type MetadataRoute } from 'next';

export async function GET(): Promise<Response> {
  const baseUrl = 'https://tetherbase.io';

  const staticPaths = [
    '',               // /
    'event',
    'partner',
    'payback',
    'intro',
  ];

  const now = new Date().toISOString().split('T')[0];

  const routes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1.0 : 0.7,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes.map((route) => `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n') +
    `\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
