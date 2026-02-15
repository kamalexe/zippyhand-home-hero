import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  try {
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase environment variables');
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Fetch services to potentially include them or just to verify DB connection
    // Currently, we don't have individual service pages, but fetching them allows us to
    // potentialy use their last update time (if available) or just prove dynamic connectivity.
    const { data: services, error } = await supabase
      .from('services')
      .select('id, title');

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    const baseUrl = 'https://www.fixkro.in';
    
    // Static pages
    const pages = [
      { url: '/', changefreq: 'weekly', priority: 1.0 },
      { url: '/login', changefreq: 'monthly', priority: 0.5 },
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
