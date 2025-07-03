const fs = require('fs');
const path = require('path');

// Define your site URL
const siteUrl = 'https://cybrida.in';

// Define robots.txt content
const robotsTxt = `# robots.txt for Cybrida - Web Development & Digital Solutions
# Last updated: ${new Date().toISOString().split('T')[0]}

# =======================================
# Global Directives
# =======================================
User-agent: *
Allow: /

# Disallow direct access to static HTML files
Disallow: /*.html$
Disallow: /services/index.html

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml
`;

// Function to generate robots.txt
const generateRobotsTxt = () => {
  try {
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    
    // Write robots.txt to public directory
    fs.writeFileSync(robotsPath, robotsTxt);
    
    console.log('robots.txt generated successfully!');
  } catch (error) {
    console.error('Error generating robots.txt:', error);
  }
};

generateRobotsTxt();
