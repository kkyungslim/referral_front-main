// app/robots.txt/route.ts
export async function GET(): Promise<Response> {
  const content = `
User-Agent: *
Allow: /
Disallow: /login
Disallow: /signup
Sitemap: https://www.tetherbase.io/sitemap.xml
`.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
