
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const SITE_URL = 'https://www.fixkro.in'; // Replace with your actual domain
const PUBLIC_DIR = resolve('public');

const pages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/login', changefreq: 'monthly', priority: 0.5 },
  // Add dynamic routes here if needed in the future
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  writeFileSync(resolve(PUBLIC_DIR, 'sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml generated successfully!');
};

generateSitemap();
