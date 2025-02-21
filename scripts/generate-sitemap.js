﻿const fs = require('fs');

const pages = [
  '/', 
  '/about', 
  '/services', 
  '/contact',
  '/projects',
  '/blog'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>https://oracleconsults.netlify.app${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`).join('')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap);

console.log("Sitemap generated successfully!");
