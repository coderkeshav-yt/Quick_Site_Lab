const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Define your site URL
const siteUrl = 'https://cybrida.in';

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.8 },
  { url: '/get-started', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'daily', priority: 0.8 },
  // Add more routes as needed
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: siteUrl });

// Function to generate sitemap
const generateSitemap = async () => {
  try {
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    
    // Create a readable stream from your routes
    const xmlString = await streamToPromise(
      Readable.from(routes).pipe(stream)
    ).then((data) => data.toString());
    
    // Write sitemap.xml to public directory
    fs.writeFileSync(sitemapPath, xmlString);
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap();
