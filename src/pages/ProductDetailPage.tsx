import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import Breadcrumb from '../components/ui/Breadcrumb';

// Define product type
interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  image: string;
  features: string[];
  techStack?: string[];
  demoUrl?: string;
  youtubeId?: string;
  gallery?: string[];
}

// Sample products data (in production, you might fetch this from an API or CMS)
const products: Product[] = [
  {
    id: 'portfolio-template',
    name: 'Professional Portfolio Template',
    description: 'A modern, responsive portfolio website template for developers and designers.',
    longDescription: 'This professional portfolio template is designed for developers, designers, and creative professionals who want to showcase their work in a modern and responsive layout. Built with the latest technologies, it offers a seamless user experience across all devices and screen sizes. The clean and minimalist design ensures that your projects and skills are the center of attention, while the smooth animations and transitions add a touch of sophistication. Customization is straightforward, allowing you to make it your own without extensive coding knowledge.',
    price: 49,
    image: '/images/products/portfolio-template.jpg',
    features: [
      'React & Next.js',
      'Tailwind CSS styling',
      'Responsive design',
      'Dark/Light mode',
      'Project showcase section',
      'Contact form with validation',
      'Easy customization',
      'SEO optimized'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
    gallery: [
      '/images/products/portfolio-1.jpg',
      '/images/products/portfolio-2.jpg',
      '/images/products/portfolio-3.jpg'
    ]
  },
  {
    id: 'ecommerce-starter',
    name: 'E-commerce Starter Kit',
    description: 'Complete e-commerce solution with product listings, cart, and checkout functionality.',
    longDescription: 'Launch your online store quickly with this comprehensive e-commerce starter kit. It includes everything you need to start selling products online, from dynamic product listings to a secure checkout process. The kit features a robust shopping cart system, user authentication for account management, and an admin dashboard to manage your products and orders. Built with scalability in mind, it can grow with your business from a few products to a large catalog. The clean, conversion-focused design helps maximize your sales potential while providing an excellent shopping experience for your customers.',
    price: 99,
    image: '/images/products/ecommerce-starter.jpg',
    features: [
      'React & Redux',
      'Product catalog',
      'Shopping cart',
      'Checkout process',
      'User authentication',
      'Order history',
      'Admin dashboard',
      'Stripe integration'
    ],
    techStack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    youtubeId: 'jNQXAC9IVRw', // Replace with actual YouTube ID
    gallery: [
      '/images/products/ecommerce-1.jpg',
      '/images/products/ecommerce-2.jpg',
      '/images/products/ecommerce-3.jpg'
    ]
  },
  {
    id: 'blog-platform',
    name: 'Modern Blog Platform',
    description: 'Full-featured blog platform with markdown support, comments, and user authentication.',
    longDescription: 'Create a professional blog with this modern, feature-rich platform. It supports markdown for easy content creation, has a built-in comment system to engage with your readers, and includes user authentication for managing authors and subscribers. The platform is designed with performance in mind, ensuring fast load times and a smooth reading experience. It includes categories and tags for organizing content, a powerful search functionality to help readers find relevant articles, and a responsive design that looks great on all devices. Whether you\'re a solo blogger or managing a team of writers, this platform provides all the tools you need to publish and grow your audience.',
    price: 79,
    image: '/images/products/blog-platform.jpg',
    features: [
      'React & Node.js',
      'MongoDB database',
      'User authentication',
      'Markdown editor',
      'Comment system',
      'Categories & tags',
      'Search functionality',
      'Responsive design'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
    youtubeId: 'M7lc1UVf-VE', // Replace with actual YouTube ID
    gallery: [
      '/images/products/blog-1.jpg',
      '/images/products/blog-2.jpg',
      '/images/products/blog-3.jpg'
    ]
  }
];

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || '');

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'tech'>('overview');

  useEffect(() => {
    // Find the product based on the URL parameter
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setActiveImage(foundProduct.image);
    }
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [productId]);

  const handleCheckout = async () => {
    if (!product) return;
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      // Create checkout session
      const response = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          productName: product.name,
          productPrice: product.price,
          productImage: product.image,
          customerEmail: email
        }),
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (err) {
      console.error('Error during checkout:', err);
      setError('An error occurred during checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/source-code" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-lg"
          >
            Back to Source Code Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <Helmet>
        <title>{product.name} | Launchory Source Code</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="container mx-auto max-w-6xl">
        {/* Breadcrumbs */}
        <div className="mb-8 mt-4">
          <Breadcrumb
            items={[
              {
                label: 'Home',
                path: '/',
                icon: (
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                )
              },
              {
                label: 'Source Code',
                path: '/source-code',
              },
              {
                label: product.name,
              }
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Images */}
          <div>
            <div className="bg-white p-2 rounded-2xl shadow-lg overflow-hidden mb-4 border border-gray-100">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-[400px] object-cover rounded-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Product+Image';
                }}
              />
            </div>
            
            {/* Image Gallery */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="grid grid-cols-4 gap-3">
                <div 
                  className={`cursor-pointer rounded-xl overflow-hidden border-2 ${activeImage === product.image ? 'border-purple-500' : 'border-transparent'}`}
                  onClick={() => setActiveImage(product.image)}
                >
                  <img 
                    src={product.image} 
                    alt="Main" 
                    className="w-full h-20 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Image';
                    }}
                  />
                </div>
                
                {product.gallery.map((img, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer rounded-xl overflow-hidden border-2 ${activeImage === img ? 'border-purple-500' : 'border-transparent'}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`Gallery ${index + 1}`} 
                      className="w-full h-20 object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Image';
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
            
            {/* YouTube Video */}
            {product.youtubeId && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Product Demo Video</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
                  <iframe 
                    src={`https://www.youtube.com/embed/${product.youtubeId}`} 
                    title="Product Demo"
                    className="w-full h-full rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column - Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ${product.price}
              </div>
              <div className="ml-4 bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                One-time payment
              </div>
            </div>
            
            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200">
              <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'features' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('tech')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'tech' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Tech Stack
                </button>
              </nav>
            </div>
            
            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'overview' && (
                <div>
                  <p className="text-gray-600 mb-4">
                    {product.longDescription || product.description}
                  </p>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                          <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'tech' && (
                <div>
                  {product.techStack ? (
                    <div className="flex flex-wrap gap-2">
                      {product.techStack.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No tech stack information available.</p>
                  )}
                </div>
              )}
            </div>
            
            {/* Purchase Form */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Ready to Purchase?</h3>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                    required
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2 pl-2">
                  We'll send your download link and receipt to this email.
                </p>
              </div>
              
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm">{error}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <motion.button
                onClick={handleCheckout}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Processing...
                  </>
                ) : (
                  <>Buy Now - ${product.price}</>
                )}
              </motion.button>
              
              <div className="mt-4 text-center">
                <div className="flex justify-center items-center space-x-3">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm text-gray-600">Secure payment via Stripe</span>
                </div>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="bg-blue-50 p-5 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                What's Included
              </h3>
              <ul className="space-y-2 text-gray-700 mt-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Complete source code with documentation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Installation and setup instructions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>6 months of updates and bug fixes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>License for unlimited projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.id !== product.id)
              .map(relatedProduct => (
                <div 
                  key={relatedProduct.id} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
                >
                  <div className="h-48 bg-gray-100 relative overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x200?text=Product+Image';
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full font-bold shadow-lg">
                      ${relatedProduct.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedProduct.description}</p>
                    
                    <Link 
                      to={`/source-code/${relatedProduct.id}`}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-300 block text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
