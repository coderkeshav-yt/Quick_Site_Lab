// SEO Helper Script for Cybrida

// Function to load navigation
function loadNavigation() {
  const navContainer = document.getElementById('main-nav');
  if (!navContainer) return;
  
  // Show loading state
  navContainer.innerHTML = '<div class="loading-nav">Loading navigation...</div>';
  
  // Fetch navigation content
  fetch('/nav.html')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.text();
    })
    .then(html => {
      // Extract just the nav content (between <!-- Main Navigation --> and </nav>)
      const navMatch = html.match(/<!-- Main Navigation[\s\S]*?<\/nav>/i);
      if (navMatch && navMatch[0]) {
        navContainer.innerHTML = navMatch[0];
        updateBreadcrumbs();
      }
    })
    .catch(error => {
      console.error('Error loading navigation:', error);
      navContainer.innerHTML = '<div class="nav-error">Navigation could not be loaded. <a href="/">Reload page</a>.</div>';
    });
}

// Function to update breadcrumbs based on current page
function updateBreadcrumbs() {
  const breadcrumbContainer = document.querySelector('.breadcrumbs ol');
  if (!breadcrumbContainer) return;
  
  const path = window.location.pathname;
  const pathSegments = path.split('/').filter(segment => segment);
  
  let breadcrumbHtml = '';
  let url = '';
  
  // Add Home as first breadcrumb
  breadcrumbHtml += `
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
      <meta itemprop="position" content="1" />
    </li>`;
  
  // Add other segments
  pathSegments.forEach((segment, index) => {
    url += `/${segment}`;
    const name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    breadcrumbHtml += `
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="${url}" itemprop="item"><span itemprop="name">${name}</span></a>
        <meta itemprop="position" content="${index + 2}" />
      </li>`;
  });
  
  breadcrumbContainer.innerHTML = breadcrumbHtml;
}

// Load structured data
function loadStructuredData() {
  fetch('/structured-data.json')
    .then(response => response.text())
    .then(data => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = data;
      document.head.appendChild(script);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  loadNavigation();
  loadStructuredData();
});

// Export for module usage if needed
if (typeof module !== 'undefined') {
  module.exports = { loadNavigation, updateBreadcrumbs, loadStructuredData };
}
