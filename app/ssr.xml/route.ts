// app/ssr.xml/route.ts
import { type MetadataRoute } from 'next';

export async function GET(): Promise<Response> {
  const baseUrl = 'https://tetherbase.io';
  const now = new Date().toISOString().split('T')[0];

  const paths = [
    '',
    'event',
    'partner',
    'payback',
    'intro',
    'partner/BitgetDetail',
    'partner/BybitDetail',
    'partner/GateDetail',
    'partner/HTXDetail',
    'partner/BingXDetail',
    'partner/OKXDetail',
  ];

  const urls: MetadataRoute.Sitemap = paths.map((path) => ({
    url: `${baseUrl}${path ? `/${path}` : ''}`,
    lastModified: now,
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1.0 : 0.7,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `
  <url>
    <loc>${u.url}</loc>
    <lastmod>${u.lastModified}</lastmod>
    <changefreq>${u.changeFrequency}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n') +
    `\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
