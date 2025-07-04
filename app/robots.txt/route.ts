export async function GET(): Promise<Response> {
  const content = `
    User-Agent: *
    Allow: /
    Sitemap: https://www.tetherbase.io/sitemap.xml
`.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
