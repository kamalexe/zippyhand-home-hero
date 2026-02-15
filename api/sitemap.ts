import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  try {
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

    // Use Supabase connection only if credentials are provided
    // const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

    // Example: If we had distinct service pages, we would map them here:
    // const services = supabase ? await supabase.from('services').select('id, title') : { data: [] };


    const baseUrl = 'https://www.fixkro.in';


    const pages = [
      { url: '/', changefreq: 'weekly', priority: 1.0 },
      { url: '/login', changefreq: 'monthly', priority: 0.5 },
      { url: '/about', changefreq: 'monthly', priority: 0.8 },
      { url: '/contact', changefreq: 'monthly', priority: 0.8 },
      { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
      { url: '/terms-of-service', changefreq: 'yearly', priority: 0.5 },
    ];

    // Example: If we had distinct service pages, we would map them here:
    // services.forEach(service => {
    //   pages.push({
    //     url: `/service/${service.id}`,
    //     changefreq: 'weekly',
    //     priority: 0.8
    //   });
    // });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    // Cache for 1 hour, stale for 10 minutes
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=600');
    res.status(200).send(sitemap);
  } catch (err: any) {
    console.error('Sitemap generation error:', err);
    res.status(500).send(`Error generating sitemap: ${err.message}`);
  }
}
