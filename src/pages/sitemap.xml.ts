import type { APIRoute } from 'astro';

interface PageEntry {
  path: string;
  changefreq: string;
  priority: string;
}

const PAGES: PageEntry[] = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/features/', changefreq: 'monthly', priority: '0.9' },
  { path: '/startup/', changefreq: 'monthly', priority: '0.8' },
  { path: '/faq/', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact/', changefreq: 'yearly', priority: '0.6' },
  { path: '/privacy/', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms/', changefreq: 'yearly', priority: '0.3' },
];

export const GET: APIRoute = async () => {
  const siteUrl = import.meta.env.SITE;

  if (!siteUrl) {
    return new Response('SITE 未設定，無法產生 sitemap', { status: 500 });
  }

  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = PAGES.map((page) => {
    const loc = new URL(page.path, siteUrl).href;
    return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
