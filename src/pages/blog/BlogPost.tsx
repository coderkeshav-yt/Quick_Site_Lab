import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiCalendar, FiShare2, FiBookmark, FiHeart, FiMessageCircle } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';
import Toast from '../../components/ui/Toast';
import Modal from '../../components/ui/Modal';
import { Helmet } from 'react-helmet';

// Blog post data array
const blogPosts = [
  {
    id: '1',
    title: '10 Web Design Trends to Watch in 2025',
    date: 'May 15, 2025',
    author: 'Jessica Chen',
    authorImg: 'https://randomuser.me/api/portraits/women/44.jpg',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80',
    readTime: '5 min read',
    excerpt: 'Discover the latest web design trends that are shaping the digital landscape in 2025 and beyond. Learn how these innovative approaches are revolutionizing user experiences and setting new standards for modern web design.',
    content: (
      <>
        <h2>1. AI-Driven Personalization</h2>
        <p>Artificial Intelligence is revolutionizing how websites adapt to individual users. In 2025, we're seeing more websites that dynamically adjust their layout, content, and functionality based on user behavior and preferences.</p>
        <div className="my-8 bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Dynamic content adaptation based on user behavior
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Personalized user interfaces
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Smart content recommendations
            </li>
          </ul>
        </div>
        <h2>2. Immersive 3D Experiences</h2>
        <p>
          With WebGL and Three.js becoming more accessible, designers are incorporating stunning 3D elements 
          that blur the line between digital and physical experiences. These immersive experiences are becoming 
          increasingly important for product showcases, virtual tours, and interactive storytelling.
        </p>
        <div className="grid grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
            <ul className="text-gray-600 space-y-2">
              <li>Enhanced user engagement</li>
              <li>Memorable brand experiences</li>
              <li>Interactive product showcases</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">Challenges</h4>
            <ul className="text-gray-600 space-y-2">
              <li>Performance optimization</li>
              <li>Mobile compatibility</li>
              <li>Accessibility considerations</li>
            </ul>
          </div>
        </div>
        <h2>3. Micro-interactions & Animations</h2>
        <p>
          Subtle animations and micro-interactions are becoming more sophisticated, adding layers of polish and 
          feedback to user interfaces. These small but meaningful animations help guide users through their journey 
          and provide immediate feedback on their actions.
        </p>
        <div className="my-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Popular Micro-interactions:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="text-primary">→</div>
              <div>
                <h5 className="font-medium">Button Feedback</h5>
                <p className="text-sm text-gray-600">Subtle scale and color changes on hover/click</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-primary">→</div>
              <div>
                <h5 className="font-medium">Form Validation</h5>
                <p className="text-sm text-gray-600">Real-time feedback with smooth transitions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-primary">→</div>
              <div>
                <h5 className="font-medium">Loading States</h5>
                <p className="text-sm text-gray-600">Engaging animations during data fetching</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-primary">→</div>
              <div>
                <h5 className="font-medium">Scroll Effects</h5>
                <p className="text-sm text-gray-600">Parallax and reveal animations</p>
              </div>
            </div>
          </div>
        </div>
        <h2>4. Dark Mode Evolution</h2>
        <p>
          Dark mode is evolving beyond simple color inversion. Designers are creating sophisticated dark themes 
          that maintain brand identity while reducing eye strain and power consumption. The key is to maintain 
          readability and visual hierarchy while creating an immersive dark experience.
        </p>
        <div className="my-8 bg-gray-900 text-white rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-4">Dark Mode Best Practices</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center space-x-2">
              <span className="text-primary">✓</span>
              <span>Use dark gray instead of pure black for backgrounds</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">✓</span>
              <span>Reduce contrast while maintaining readability</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">✓</span>
              <span>Test color combinations for accessibility</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">✓</span>
              <span>Consider system-level preferences</span>
            </li>
          </ul>
        </div>
        <h2>5. Voice User Interface (VUI) Integration</h2>
        <p>
          As voice technology becomes more sophisticated, websites are incorporating voice interfaces for enhanced 
          accessibility and convenience. This trend is particularly important for e-commerce and content-heavy websites.
        </p>
        <div className="my-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">VUI Implementation Areas:</h4>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-medium text-gray-900">Search Functionality</h5>
              <p className="text-sm text-gray-600 mt-1">Voice-enabled search with natural language processing</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-medium text-gray-900">Navigation Assistance</h5>
              <p className="text-sm text-gray-600 mt-1">Hands-free website navigation and command execution</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-medium text-gray-900">Content Reading</h5>
              <p className="text-sm text-gray-600 mt-1">Text-to-speech functionality for better accessibility</p>
            </div>
          </div>
        </div>
        <h2>6. Motion Design & Scroll Experiences</h2>
        <p>
          Motion design is becoming increasingly sophisticated in web interfaces. Designers are creating 
          immersive scroll experiences that tell stories and engage users in new ways. These animations 
          are not just decorative – they serve to guide users, provide feedback, and create memorable experiences.
        </p>
        <div className="my-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">Popular Motion Design Patterns</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <div className="text-indigo-500 text-xl mb-3">↓</div>
              <h5 className="font-medium text-gray-900 mb-2">Parallax Scrolling</h5>
              <p className="text-sm text-gray-600">Creates depth and dimension through layered movement</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <div className="text-indigo-500 text-xl mb-3">⟲</div>
              <h5 className="font-medium text-gray-900 mb-2">Scroll-Triggered Animations</h5>
              <p className="text-sm text-gray-600">Elements animate as they enter the viewport</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <div className="text-indigo-500 text-xl mb-3">⇋</div>
              <h5 className="font-medium text-gray-900 mb-2">Horizontal Scrolling</h5>
              <p className="text-sm text-gray-600">Alternative navigation for storytelling</p>
            </div>
          </div>
        </div>
        <h2>7. Advanced CSS Techniques</h2>
        <p>
          Modern CSS features are enabling designers to create more sophisticated layouts and effects 
          without heavy JavaScript dependencies. From CSS Grid animations to container queries, 
          these techniques are changing how we approach responsive design.
        </p>
        <div className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Modern CSS Features</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">⬡</span>
                  <span>Container Queries</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">⬡</span>
                  <span>Cascade Layers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">⬡</span>
                  <span>Subgrid</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">⬡</span>
                  <span>:has() Selector</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Benefits</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-emerald-500">✓</span>
                  <span>Reduced JavaScript dependency</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-emerald-500">✓</span>
                  <span>Better browser optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-emerald-500">✓</span>
                  <span>Improved rendering performance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-emerald-500">✓</span>
                  <span>Smaller bundle sizes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h2>8. Performance-First Design</h2>
        <p>
          With Core Web Vitals becoming increasingly important for SEO and user experience, designers 
          are adopting performance-first approaches to web design. This involves optimizing everything 
          from images to animations while maintaining visual appeal.
        </p>
        <div className="my-8 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Core Web Vitals Optimization</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h5 className="font-medium text-gray-900">Largest Contentful Paint (LCP)</h5>
                  <p className="text-sm text-gray-600 mt-1">Optimize main content loading speed</p>
                </div>
                <div className="text-green-500 font-medium">{"<2.5s"}</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h5 className="font-medium text-gray-900">First Input Delay (FID)</h5>
                  <p className="text-sm text-gray-600 mt-1">Ensure quick interactivity</p>
                </div>
                <div className="text-green-500 font-medium">{"<100ms"}</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h5 className="font-medium text-gray-900">Cumulative Layout Shift (CLS)</h5>
                  <p className="text-sm text-gray-600 mt-1">Minimize visual instability</p>
                </div>
                <div className="text-green-500 font-medium">{"<0.1"}</div>
              </div>
            </div>
          </div>
        </div>
        <h2>9. AI-Powered Design Tools</h2>
        <p>
          Artificial Intelligence is revolutionizing the design workflow. From automated layout suggestions 
          to intelligent color palette generation, AI tools are becoming indispensable for modern designers.
        </p>
        <div className="my-8 bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-xl p-6 border border-violet-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">AI Design Applications</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h5 className="font-medium text-gray-900 mb-3">Layout Generation</h5>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Automated responsive layouts</li>
                <li>• Smart component arrangement</li>
                <li>• Content-aware sizing</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h5 className="font-medium text-gray-900 mb-3">Design Systems</h5>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Consistent styling</li>
                <li>• Component variations</li>
                <li>• Theme generation</li>
              </ul>
            </div>
          </div>
        </div>
        <h2>10. Sustainable Web Design</h2>
        <p>
          Environmental consciousness is extending to web design. Designers are adopting practices that 
          reduce the carbon footprint of websites while maintaining excellent user experiences.
        </p>
        <div className="my-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Sustainable Design Practices</h4>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start space-x-4 bg-white rounded-lg p-4">
              <div className="text-green-500 text-xl">🌱</div>
              <div>
                <h5 className="font-medium text-gray-900">Efficient Asset Loading</h5>
                <p className="text-sm text-gray-600 mt-1">Optimize images and use modern formats like WebP</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white rounded-lg p-4">
              <div className="text-green-500 text-xl">⚡</div>
              <div>
                <h5 className="font-medium text-gray-900">Green Hosting</h5>
                <p className="text-sm text-gray-600 mt-1">Choose environmentally conscious hosting providers</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white rounded-lg p-4">
              <div className="text-green-500 text-xl">♻️</div>
              <div>
                <h5 className="font-medium text-gray-900">Code Efficiency</h5>
                <p className="text-sm text-gray-600 mt-1">Minimize unnecessary scripts and optimize code</p>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
    authorBio: 'Senior UX Designer with over 8 years of experience in creating user-centered digital experiences. Passionate about emerging technologies and their impact on modern web design.',
  },
  {
    id: '2',
    title: 'How to Optimize Your Website for Speed and Performance',
    date: 'May 10, 2025',
    author: 'Michael Rodriguez',
    authorImg: 'https://randomuser.me/api/portraits/men/32.jpg',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    readTime: '7 min read',
    excerpt: 'Learn the best practices for optimizing your website to achieve lightning-fast loading times and smooth performance. Discover the techniques used by Cybrida experts.',
    content: (
      <>
        <h2>Introduction</h2>
        <p>Website speed and performance are critical for user experience and SEO. In this article, we'll cover proven strategies to make your site faster and more reliable, with actionable tips and best practices.</p>

        <h2>1. Optimize Images</h2>
        <p>Images are often the largest assets on a website. Optimizing them can dramatically improve load times.</p>
        <div className="my-8 bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Image Optimization Tips:</h3>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Use modern formats like <b>WebP</b> and <b>AVIF</b></li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Compress images without losing quality</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Serve responsive images with <code>srcSet</code></li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Lazy-load offscreen images</li>
          </ul>
        </div>

        <h2>2. Minimize JavaScript and CSS</h2>
        <p>Large JS and CSS files can block rendering and slow down your site. Reduce their impact with these techniques:</p>
        <div className="my-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Best Practices:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="text-primary">→</div>
              <div>
                <h5 className="font-medium">Minify & Bundle</h5>
                <p className="text-sm text-gray-600">Reduce file size and HTTP requests</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-primary">→</div>
              <div>
                <h5 className="font-medium">Defer Non-Critical JS</h5>
                <p className="text-sm text-gray-600">Load scripts only when needed</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-primary">→</div>
              <div>
                <h5 className="font-medium">Remove Unused CSS</h5>
                <p className="text-sm text-gray-600">Tools like PurgeCSS help keep styles lean</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-primary">→</div>
              <div>
                <h5 className="font-medium">Use Code Splitting</h5>
                <p className="text-sm text-gray-600">Load only what's needed for each page</p>
              </div>
            </div>
          </div>
        </div>

        <h2>3. Use a Content Delivery Network (CDN)</h2>
        <p>CDNs distribute your static assets across global servers, reducing latency and improving load times for users everywhere.</p>
        <div className="grid grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
            <ul className="text-gray-600 space-y-2">
              <li>Faster global delivery</li>
              <li>Reduced server load</li>
              <li>Improved reliability</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">Popular CDN Providers</h4>
            <ul className="text-gray-600 space-y-2">
              <li>Cloudflare</li>
              <li>Fastly</li>
              <li>Amazon CloudFront</li>
            </ul>
          </div>
        </div>

        <h2>4. Enable Caching</h2>
        <p>Caching stores frequently accessed resources locally, reducing repeat load times. Use both browser and server-side caching for best results.</p>
        <div className="my-8 bg-gray-900 text-white rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-4">Caching Strategies</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center space-x-2"><span className="text-primary">✓</span><span>Set long cache lifetimes for static assets</span></li>
            <li className="flex items-center space-x-2"><span className="text-primary">✓</span><span>Use cache busting for updated files</span></li>
            <li className="flex items-center space-x-2"><span className="text-primary">✓</span><span>Leverage service workers for offline support</span></li>
          </ul>
        </div>

        <h2>5. Monitor and Test Performance</h2>
        <p>Regularly test your site to catch performance regressions and discover new optimization opportunities.</p>
        <div className="my-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Recommended Tools:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-medium text-gray-900">Google Lighthouse</h5>
              <p className="text-sm text-gray-600 mt-1">Automated audits for performance, accessibility, and more</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-medium text-gray-900">WebPageTest</h5>
              <p className="text-sm text-gray-600 mt-1">Detailed waterfall analysis and global test locations</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-medium text-gray-900">PageSpeed Insights</h5>
              <p className="text-sm text-gray-600 mt-1">Actionable suggestions for real-world improvements</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-medium text-gray-900">GTmetrix</h5>
              <p className="text-sm text-gray-600 mt-1">Comprehensive reports and historical tracking</p>
            </div>
          </div>
        </div>

        <h2>6. Core Web Vitals</h2>
        <p>Google's Core Web Vitals are essential metrics for user experience and SEO. Focus on optimizing these:</p>
        <div className="my-8 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Key Metrics</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h5 className="font-medium text-gray-900">Largest Contentful Paint (LCP)</h5>
                  <p className="text-sm text-gray-600 mt-1">Optimize main content loading speed</p>
                </div>
                <div className="text-green-500 font-medium">{"<2.5s"}</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h5 className="font-medium text-gray-900">First Input Delay (FID)</h5>
                  <p className="text-sm text-gray-600 mt-1">Ensure quick interactivity</p>
                </div>
                <div className="text-green-500 font-medium">{"<100ms"}</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h5 className="font-medium text-gray-900">Cumulative Layout Shift (CLS)</h5>
                  <p className="text-sm text-gray-600 mt-1">Minimize visual instability</p>
                </div>
                <div className="text-green-500 font-medium">{"<0.1"}</div>
              </div>
            </div>
          </div>
        </div>

        <h2>7. Advanced Performance Techniques</h2>
        <p>For even faster sites, consider these advanced strategies:</p>
        <div className="my-8 bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-xl p-6 border border-violet-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">Pro Tips</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h5 className="font-medium text-gray-900 mb-3">Preload Key Requests</h5>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use <code>&lt;link rel=\"preload\"&gt;</code> for critical assets</li>
                <li>• Prioritize fonts and hero images</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h5 className="font-medium text-gray-900 mb-3">Reduce Third-Party Scripts</h5>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Audit and remove unnecessary integrations</li>
                <li>• Load third-party scripts asynchronously</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>8. Mobile Performance Optimization</h2>
        <p>With most users browsing on mobile, optimizing for mobile performance is essential.</p>
        <div className="my-8 bg-green-50 rounded-xl p-6 border border-green-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Mobile Optimization Tips:</h4>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Use responsive layouts and images</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Minimize main-thread work and JavaScript execution</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Test with real devices and emulators</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Prioritize tap targets and font legibility</li>
          </ul>
        </div>

        <h2>9. SSR & Static Site Generation</h2>
        <p>Server-Side Rendering (SSR) and Static Site Generation (SSG) can dramatically improve perceived performance and SEO.</p>
        <div className="my-8 bg-yellow-50 rounded-xl p-6 border border-yellow-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits of SSR & SSG:</h4>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Faster initial page load</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Better SEO and social sharing</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Improved accessibility</li>
          </ul>
        </div>

        <h2>10. HTTP/2 and Modern Protocols</h2>
        <p>Upgrade your server to support HTTP/2 or HTTP/3 for multiplexing, header compression, and faster asset delivery.</p>
        <div className="my-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Use HTTP/2?</h4>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Parallel downloads over a single connection</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Reduced latency and improved security</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Automatic header compression</li>
          </ul>
        </div>

        <h2>11. Performance Budgets</h2>
        <p>Set performance budgets to keep your site fast as it grows. Monitor bundle size, image weight, and key metrics.</p>
        <div className="my-8 bg-pink-50 rounded-xl p-6 border border-pink-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Sample Performance Budgets:</h4>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-primary mr-2">•</span>First Contentful Paint: &lt; 1.5s</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Total JS bundle: &lt; 150KB</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Image weight per page: &lt; 1MB</li>
          </ul>
        </div>

        <h2>12. Real-World Case Study</h2>
        <p>After implementing these optimizations, a SaaS client reduced their homepage load time from 4.2s to 1.1s and saw a 22% increase in conversions. Key changes included image compression, code splitting, and enabling HTTP/2.</p>
        <div className="my-8 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Results at a Glance</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h5 className="font-medium text-gray-900">Load Time</h5>
                  <p className="text-sm text-gray-600 mt-1">4.2s → 1.1s</p>
                </div>
                <div className="text-green-500 font-medium">-74%</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h5 className="font-medium text-gray-900">Conversion Rate</h5>
                  <p className="text-sm text-gray-600 mt-1">+22%</p>
                </div>
                <div className="text-green-500 font-medium">Improved</div>
              </div>
            </div>
          </div>
        </div>

        <h2>13. Common Pitfalls to Avoid</h2>
        <div className="my-8 bg-red-50 rounded-xl p-6 border border-red-100">
          <h4 className="text-lg font-semibold text-red-700 mb-4">Watch Out For:</h4>
          <ul className="space-y-3 text-red-700">
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Unoptimized images and videos</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Too many third-party scripts</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Large, unused dependencies</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Not testing on real devices</li>
          </ul>
        </div>

        <h2>14. Launch Checklist</h2>
        <div className="my-8 bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Before You Go Live:</h4>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-primary mr-2">✓</span>Run a Lighthouse audit</li>
            <li className="flex items-start"><span className="text-primary mr-2">✓</span>Test on mobile and slow networks</li>
            <li className="flex items-start"><span className="text-primary mr-2">✓</span>Compress and lazy-load all images</li>
            <li className="flex items-start"><span className="text-primary mr-2">✓</span>Minimize and split JS/CSS bundles</li>
            <li className="flex items-start"><span className="text-primary mr-2">✓</span>Enable HTTP/2 or HTTP/3</li>
            <li className="flex items-start"><span className="text-primary mr-2">✓</span>Set up caching and a CDN</li>
          </ul>
        </div>

        <h2>Conclusion</h2>
        <p>By following these best practices and regularly monitoring your site, you can deliver a fast, smooth, and delightful experience for every visitor. Website performance is an ongoing process—keep testing, keep optimizing, and your users (and search engines) will thank you!</p>
      </>
    ),
    authorBio: 'Full Stack Developer and performance optimization specialist. Michael helps businesses build fast, scalable, and reliable web applications.',
  },
  {
    id: '3',
    title: 'The Importance of Responsive Design for Mobile Users',
    date: 'May 5, 2025',
    author: 'Sarah Johnson',
    authorImg: 'https://randomuser.me/api/portraits/women/68.jpg',
    category: 'UX/UI',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read',
    excerpt: 'Explore why responsive design is crucial for providing an optimal user experience across all devices. See how Cybrida implements mobile-first strategies for better results.',
    content: (
      <>
        <h2>Introduction</h2>
        <p>With mobile traffic now dominating the web, responsive design is no longer optional—it's essential. This article explores why responsive design matters, how to implement it, and best practices for delivering seamless experiences on every device.</p>

        <h2>1. What is Responsive Design?</h2>
        <p>Responsive design is an approach where your website layout and content adapt fluidly to different screen sizes and devices. It ensures your site looks and works great on smartphones, tablets, laptops, and desktops.</p>
        <div className="my-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Principles:</h3>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Flexible grids and layouts</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Fluid images and media</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Media queries for breakpoints</li>
          </ul>
        </div>

        <h2>2. Why Mobile-First Matters</h2>
        <p>Designing for mobile first means starting with the smallest screen and progressively enhancing for larger devices. This approach prioritizes performance, content, and usability for the majority of users.</p>
        <div className="my-8 bg-green-50 rounded-xl p-6 border border-green-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Mobile-First Benefits:</h4>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Faster load times on mobile</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Content prioritized for small screens</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Improved SEO and Core Web Vitals</li>
          </ul>
        </div>

        <h2>3. Breakpoints & Media Queries</h2>
        <p>Breakpoints are the foundation of responsive layouts. Use CSS media queries to adjust styles for different device widths.</p>
        <div className="my-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Common Breakpoints:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="text-primary">→</div>
              <div>
                <h5 className="font-medium">Mobile</h5>
                <p className="text-sm text-gray-600">max-width: 640px</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-primary">→</div>
              <div>
                <h5 className="font-medium">Tablet</h5>
                <p className="text-sm text-gray-600">641px - 1024px</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-primary">→</div>
              <div>
                <h5 className="font-medium">Laptop</h5>
                <p className="text-sm text-gray-600">1025px - 1440px</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-primary">→</div>
              <div>
                <h5 className="font-medium">Desktop</h5>
                <p className="text-sm text-gray-600">1441px and up</p>
              </div>
            </div>
          </div>
        </div>

        <h2>4. Responsive Images & Media</h2>
        <p>Use <code>srcSet</code> and <code>sizes</code> attributes for images, and make sure videos and embeds scale with their containers.</p>
        <div className="my-8 bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Tips for Media:</h4>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Use vector graphics (SVG) where possible</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Set max-width: 100% for images and videos</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Test on real devices and emulators</li>
          </ul>
        </div>

        <h2>5. Accessibility & Touch</h2>
        <p>Responsive design must also be accessible. Ensure touch targets are large enough, text is readable, and navigation is easy on all devices.</p>
        <div className="my-8 bg-yellow-50 rounded-xl p-6 border border-yellow-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Accessibility Checklist:</h4>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-primary mr-2">✓</span>Minimum 48x48px tap targets</li>
            <li className="flex items-start"><span className="text-primary mr-2">✓</span>High color contrast for text</li>
            <li className="flex items-start"><span className="text-primary mr-2">✓</span>Text resizes without breaking layout</li>
            <li className="flex items-start"><span className="text-primary mr-2">✓</span>Keyboard and screen reader support</li>
          </ul>
        </div>

        <h2>6. Testing & Tools</h2>
        <p>Test your responsive site on multiple devices, browsers, and screen sizes. Use browser dev tools, emulators, and real devices for best results.</p>
        <div className="my-8 bg-pink-50 rounded-xl p-6 border border-pink-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Recommended Tools:</h4>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Chrome DevTools Device Mode</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>BrowserStack or Sauce Labs</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Responsively App</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>axe Accessibility Checker</li>
          </ul>
        </div>

        <h2>7. Best Practices & Common Pitfalls</h2>
        <div className="my-8 bg-red-50 rounded-xl p-6 border border-red-100">
          <h4 className="text-lg font-semibold text-red-700 mb-4">Avoid These Mistakes:</h4>
          <ul className="space-y-3 text-red-700">
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Fixed-width layouts</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Overusing absolute positioning</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Neglecting landscape orientation</li>
            <li className="flex items-start"><span className="text-primary mr-2">•</span>Forgetting about accessibility</li>
          </ul>
        </div>

        <h2>Conclusion</h2>
        <p>Responsive design is the foundation of modern web development. By following these principles and best practices, you'll deliver a seamless, accessible experience for every user—no matter what device they use.</p>
      </>
    ),
    authorBio: 'UX/UI Designer passionate about creating inclusive, user-centered digital experiences. Sarah specializes in mobile-first design and accessibility best practices.',
  },
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const history = useHistory();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(245);
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<'like' | 'save' | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
    show: boolean;
  }>({
    message: '',
    type: 'info',
    show: false,
  });

  // Load saved state from localStorage
  useEffect(() => {
    if (user) {
      const savedState = localStorage.getItem(`blog_${id}_saved_${user.id}`);
      const likedState = localStorage.getItem(`blog_${id}_liked_${user.id}`);
      setIsSaved(savedState === 'true');
      setIsLiked(likedState === 'true');
    }
  }, [id, user]);

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.share-menu') && showShareMenu) {
        setShowShareMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showShareMenu]);

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToast({ message, type, show: true });
  };

  const handleAuthAction = (action: 'like' | 'save') => {
    if (!user) {
      setPendingAction(action);
      setShowAuthModal(true);
      return;
    }

    if (action === 'like') {
      handleLikeAction();
    } else if (action === 'save') {
      handleSaveAction();
    }
  };

  const handleLikeAction = () => {
    setIsLiked(prev => {
      const newState = !prev;
      setLikeCount(prev => prev + (newState ? 1 : -1));
      localStorage.setItem(`blog_${id}_liked_${user!.id}`, String(newState));
      showToast(newState ? 'Post liked!' : 'Post unliked', 'success');
      return newState;
    });
  };

  const handleSaveAction = () => {
    setIsSaved(prev => {
      const newState = !prev;
      localStorage.setItem(`blog_${id}_saved_${user!.id}`, String(newState));
      showToast(newState ? 'Post saved to your bookmarks!' : 'Post removed from bookmarks', 'success');
      return newState;
    });
  };

  const handleAuthModalClose = () => {
    setShowAuthModal(false);
    setPendingAction(null);
  };

  const handleAuthChoice = (choice: 'login' | 'signup') => {
    setShowAuthModal(false);
    history.push(`/${choice}`, { 
      from: location.pathname,
      pendingAction 
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '10 Web Design Trends to Watch in 2025',
          text: 'Check out these exciting web design trends for 2025!',
          url: window.location.href,
        });
        showToast('Thanks for sharing!', 'success');
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setShowShareMenu(true);
        }
      }
    } else {
      setShowShareMenu(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Link copied to clipboard!', 'success');
    setShowShareMenu(false);
  };

  // Find the blog post by id
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'image': post.image,
    'author': {
      '@type': 'Person',
      'name': post.author,
      'image': post.authorImg
    },
    'datePublished': post.date,
    'description': post.excerpt,
    'mainEntityOfPage': window.location.href,
  };

  return (
    <article className="min-h-screen bg-white">
      <Helmet>
        <title>{post.title} | Cybrida Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link to="/blog">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-white/80 hover:text-white mb-12 transition-colors cursor-pointer group"
            >
              <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </motion.div>
          </Link>
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full mb-6"
          >
            <span className="text-sm font-medium text-primary">{post.category}</span>
          </motion.div>
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>
          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-white/80 mb-8"
          >
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <FiClock className="mr-2" />
              {post.readTime}
            </div>
            <div className="flex items-center">
              <img
                src={post.authorImg}
                alt={`Author: ${post.author}`}
                className="w-6 h-6 rounded-full mr-2"
              />
              {post.author}
            </div>
          </motion.div>
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-sm font-medium mb-2">Featured Image</div>
              <div className="text-sm opacity-80">{post.excerpt}</div>
            </div>
          </motion.div>
        </div>
      </header>
      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="prose prose-lg max-w-none">
          {post.content}
        </section>
        {/* Author Bio */}
        <footer className="bg-gray-50 rounded-xl p-8 mt-12">
          <div className="flex items-start">
            <img
              src={post.authorImg}
              alt={`Author: ${post.author}`}
              className="w-16 h-16 rounded-full mr-6"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.author}</h3>
              <p className="text-gray-600 mb-4">
                {post.authorBio}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary-dark transition-colors">Twitter</a>
                <a href="#" className="text-primary hover:text-primary-dark transition-colors">LinkedIn</a>
                <a href="#" className="text-primary hover:text-primary-dark transition-colors">Website</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
      {/* Related Articles */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
                alt="Web Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Development
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  The Evolution of Frontend Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Exploring the latest tools and frameworks shaping modern web development...
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <FiClock className="mr-2" />
                  8 min read
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80"
                alt="UI Design"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Design
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mastering Modern UI Design Patterns
                </h3>
                <p className="text-gray-600 mb-4">
                  A deep dive into effective UI patterns and their implementation...
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <FiClock className="mr-2" />
                  6 min read
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      <Modal
        isOpen={showAuthModal}
        onClose={handleAuthModalClose}
        title={pendingAction === 'like' ? "Join the community!" : "Save for later"}
      >
        <div className="space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
            >
              {pendingAction === 'like' ? (
                <FiHeart className="w-8 h-8 text-primary" />
              ) : (
                <FiBookmark className="w-8 h-8 text-primary" />
              )}
            </motion.div>
          </div>

          {/* Message */}
          <div className="text-center space-y-2">
            <h4 className="text-lg font-semibold text-gray-900">
              {pendingAction === 'like'
                ? "Like what you're reading?"
                : "Want to read this later?"}
            </h4>
            <p className="text-gray-600">
              {pendingAction === 'like'
                ? "Join our community to like posts, follow authors, and engage with other readers!"
                : "Create your personal reading list by saving articles you want to revisit."}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAuthChoice('signup')}
              className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200"
            >
              Create account
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAuthChoice('login')}
              className="w-full px-4 py-3 bg-white border-2 border-gray-100 text-gray-700 rounded-xl font-medium hover:border-primary/20 hover:bg-primary/5 transition-all duration-200"
            >
              Sign in
            </motion.button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={handleAuthModalClose}
              className="w-full text-center text-gray-500 hover:text-gray-700 transition-colors text-sm font-medium"
            >
              Continue as guest
            </motion.button>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 -mx-6 -mb-4 px-6 py-4 mt-6 border-t border-gray-100">
            <h5 className="text-sm font-medium text-gray-700 mb-3">Account benefits:</h5>
            <ul className="space-y-2">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center text-sm text-gray-600"
              >
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <span className="text-green-500">✓</span>
                </span>
                Save articles for later
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center text-sm text-gray-600"
              >
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <span className="text-green-500">✓</span>
                </span>
                Follow your favorite authors
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center text-sm text-gray-600"
              >
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <span className="text-green-500">✓</span>
                </span>
                Join the discussion
              </motion.li>
            </ul>
          </div>
        </div>
      </Modal>

      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast(prev => ({ ...prev, show: false }))}
      />
    </article>
  );
};

export default BlogPost; 