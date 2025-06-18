import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import Breadcrumb from '../components/ui/Breadcrumb';
import { FiShield, FiCpu, FiUsers, FiGlobe, FiZap, FiPackage, FiCode, FiGift, FiBook, FiShare2, FiX, FiChevronLeft, FiChevronRight, FiShoppingCart, FiCheck } from 'react-icons/fi';
import { FaTwitter, FaFacebook, FaLinkedin, FaLink } from 'react-icons/fa';
import Modal from '../components/ui/Modal';
import Toast from '../components/ui/Toast';

// Declare Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

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
    image: 'https://via.placeholder.com/800x600?text=Portfolio+Template',
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
    youtubeId: 'dQw4w9WgXcQ',
    gallery: [
      'https://via.placeholder.com/800x600?text=Portfolio+1',
      'https://via.placeholder.com/800x600?text=Portfolio+2',
      'https://via.placeholder.com/800x600?text=Portfolio+3'
    ]
  },
  {
    id: 'ecommerce-starter',
    name: 'E-commerce Starter Kit Pro',
    description: 'Production-ready e-commerce solution with advanced features, optimized performance, and seamless integrations.',
    longDescription: `Launch your online store with our comprehensive e-commerce solution that combines modern technology with battle-tested practices. This starter kit is designed for serious businesses looking to establish a strong online presence.

Built with scalability in mind, it handles everything from a small boutique to a large-scale marketplace. The clean, conversion-focused design helps maximize your sales potential while providing an exceptional shopping experience for your customers.

Key highlights:
• Fully responsive design optimized for all devices
• Advanced cart and checkout system with multiple payment options
• Real-time inventory management and order tracking
• SEO optimized with structured data and performance focus
• Comprehensive admin dashboard with analytics
• Multi-language and multi-currency support
• Advanced search with filters and sorting
• Wishlist and save for later functionality`,
    price: 3500,
    image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1749621112/Screenshot_243_hpggoa.png',
    features: [
      'Advanced Product Management',
      'Multi-vendor Support',
      'Real-time Inventory Tracking',
      'Dynamic Search & Filtering',
      'Secure Payment Processing',
      'Order Management System',
      'Customer Reviews & Ratings',
      'Wishlist & Collections',
      'Multi-language Support',
      'SEO Optimization Tools',
      'Analytics Dashboard',
      'Mobile-first Design',
      'Email Notification System',
      'Discount & Coupon Engine',
      'Abandoned Cart Recovery'
    ],
    techStack: [
      'React 18+',
      'Next.js 13',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Redis',
      'Stripe API',
      'AWS S3',
      'Docker',
      'Jest & RTL',
      'GitHub Actions'
    ],
    demoUrl: 'https://ecommerce-demo.launchory.com',
    youtubeId: 'jNQXAC9IVRw',
    gallery: [
      'https://res.cloudinary.com/dlvxjnycr/image/upload/v1749621112/Screenshot_243_hpggoa.png',
      'https://res.cloudinary.com/dlvxjnycr/image/upload/v1749621112/Screenshot_245_wyrkar.png',
      'https://res.cloudinary.com/dlvxjnycr/image/upload/v1749621110/Screenshot_249_eh3hw5.png',
      'https://res.cloudinary.com/dlvxjnycr/image/upload/v1749621110/Screenshot_250_ksfh37.png',
      'https://res.cloudinary.com/dlvxjnycr/image/upload/v1749621112/Screenshot_246_gpk4x6.png',
      'https://res.cloudinary.com/dlvxjnycr/image/upload/v1749621110/Screenshot_248_dkg1kd.png'
    ]
  },
  {
    id: 'blog-platform',
    name: 'Modern Blog Platform',
    description: 'Full-featured blog platform with markdown support, comments, and user authentication.',
    longDescription: 'Create a professional blog with this modern, feature-rich platform. It supports markdown for easy content creation, has a built-in comment system to engage with your readers, and includes user authentication for managing authors and subscribers. The platform is designed with performance in mind, ensuring fast load times and a smooth reading experience. It includes categories and tags for organizing content, a powerful search functionality to help readers find relevant articles, and a responsive design that looks great on all devices. Whether you\'re a solo blogger or managing a team of writers, this platform provides all the tools you need to publish and grow your audience.',
    price: 79,
    image: 'https://via.placeholder.com/800x600?text=Blog+Platform',
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
    youtubeId: 'M7lc1UVf-VE',
    gallery: [
      'https://via.placeholder.com/800x600?text=Blog+1',
      'https://via.placeholder.com/800x600?text=Blog+2',
      'https://via.placeholder.com/800x600?text=Blog+3'
    ]
  }
];

// Add testimonials
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'E-commerce Director',
    company: 'Fashion Boutique',
    image: 'https://via.placeholder.com/100x100?text=SJ',
    text: 'This starter kit saved us months of development time. The code quality is exceptional, and the support team is incredibly responsive.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Tech Marketplace',
    image: 'https://via.placeholder.com/100x100?text=MC',
    text: 'We were able to launch our marketplace in record time. The multi-vendor support and scalability features are exactly what we needed.'
  },
  {
    name: 'Emma Davis',
    role: 'Founder',
    company: 'Artisan Goods',
    image: 'https://via.placeholder.com/100x100?text=ED',
    text: 'The attention to detail in the UI/UX and the robust backend features helped us create a premium shopping experience for our customers.'
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
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setActiveImage(foundProduct.image);
    }
    window.scrollTo(0, 0);
  }, [productId]);

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = product?.name || 'Check out this product';
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
        break;
    }
    setShowShareModal(false);
  };

  const handleCheckout = async () => {
    if (!product) return;
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      // Load Razorpay script
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      document.body.appendChild(script);

      script.onload = async () => {
        try {
          // Create order on your backend
          const response = await fetch('/api/create-razorpay-order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              productId: product.id,
              productName: product.name,
              amount: product.price * 100, // Razorpay expects amount in paise
              email: email
            }),
          });

          const order = await response.json();

          if (!order.id) {
            throw new Error('Failed to create order');
          }

          // Initialize Razorpay
          const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY_ID,
            amount: product.price * 100,
            currency: 'INR',
            name: 'Launchory',
            description: `Purchase ${product.name}`,
            order_id: order.id,
            prefill: {
              email: email,
            },
            handler: async (response: any) => {
              try {
                // Verify payment on your backend
                const verifyResponse = await fetch('/api/verify-payment', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    orderId: order.id,
                    paymentId: response.razorpay_payment_id,
                    signature: response.razorpay_signature,
                  }),
                });

                const verifyResult = await verifyResponse.json();

                if (verifyResult.success) {
                  // Redirect to success page
                  window.location.href = '/thank-you';
                } else {
                  throw new Error('Payment verification failed');
                }
              } catch (err) {
                console.error('Payment verification error:', err);
                setError('Payment verification failed. Please contact support.');
              }
            },
            modal: {
              ondismiss: () => {
                setIsLoading(false);
              },
            },
            theme: {
              color: '#7C3AED', // Purple color matching your theme
            },
          };

          const razorpay = new window.Razorpay(options);
          razorpay.open();
        } catch (err) {
          console.error('Razorpay error:', err);
          setError('Failed to initialize payment. Please try again.');
          setIsLoading(false);
        }
      };

      script.onerror = () => {
        setError('Failed to load payment system. Please try again.');
        setIsLoading(false);
      };
    } catch (err) {
      console.error('Error during checkout:', err);
      setError('An error occurred during checkout. Please try again.');
      setIsLoading(false);
    }
  };

  const nextImage = () => {
    if (!product?.gallery) return;
    const maxIndex = product.gallery.length;
    setCurrentImageIndex((prev) => (prev + 1) % maxIndex);
  };

  const prevImage = () => {
    if (!product?.gallery) return;
    const maxIndex = product.gallery.length;
    setCurrentImageIndex((prev) => (prev - 1 + maxIndex) % maxIndex);
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
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{`${product.name} | Launchory`}</title>
        <meta name="description" content={product.description} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Source Code', path: '/source-code' },
              { label: product.name, path: '#' }
            ]} 
          />
        </div>
      </div>

      {/* Product Hero Section */}
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 mb-8">
                <FiShoppingCart className="w-4 h-4 mr-2" />
                <span>Complete E-commerce Solution</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                {product?.name}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {product?.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {product?.techStack?.slice(0, 5).map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <motion.div 
                className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setIsGalleryOpen(true)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src={activeImage} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Click to view gallery
                  </span>
                </div>
              </motion.div>
              {product.gallery && (
                <div className="grid grid-cols-4 gap-4">
                  {[product.image, ...(product.gallery || [])].map((img, idx) => (
                    <motion.div 
                      key={idx}
                      className={`aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer ${
                        activeImage === img ? 'ring-2 ring-purple-500' : ''
                      }`}
                      onClick={() => setActiveImage(img)}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setShowShareModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <FiShare2 className="w-5 h-5" />
                  Share
                </motion.button>
              </div>
              
              <p className="text-xl text-gray-600">{product.description}</p>
              
              <div className="flex items-center justify-between py-4 border-y">
                <div className="text-3xl font-bold text-gray-900">₹{product.price}</div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">★★★★★ (5.0)</span>
                  <span className="text-sm text-gray-500">100+ sales</span>
                </div>
              </div>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email to purchase"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg transition duration-300 shadow-lg disabled:opacity-50"
                >
                  {isLoading ? 'Processing...' : 'Purchase Now'}
                </motion.button>
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {product.techStack?.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete Feature Set</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Shopping Experience",
                  description: "Product listings, cart, checkout flow",
                  icon: FiShield,
                  gradient: "from-purple-500 to-indigo-500"
                },
                {
                  title: "Secure Payments",
                  description: "Stripe integration with webhooks",
                  icon: FiCpu,
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "User System",
                  description: "Authentication & user profiles",
                  icon: FiUsers,
                  gradient: "from-indigo-500 to-purple-500"
                },
                {
                  title: "Admin Panel",
                  description: "Complete product management",
                  icon: FiGlobe,
                  gradient: "from-cyan-500 to-blue-500"
                },
                {
                  title: "Performance",
                  description: "Optimized for fast loading",
                  icon: FiZap,
                  gradient: "from-purple-500 to-indigo-500"
                },
                {
                  title: "Responsive Design",
                  description: "Works on all devices",
                  icon: FiPackage,
                  gradient: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* What's Included Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { text: "Source code & documentation", icon: FiCode },
                  { text: "6 months priority support", icon: FiUsers },
                  { text: "Regular updates", icon: FiGift },
                  { text: "Installation guide", icon: FiBook },
                  { text: "API integration docs", icon: FiGlobe },
                  { text: "Performance tips", icon: FiZap }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center bg-gray-50 rounded-lg p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mr-4">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Brands</h2>
              <p className="text-xl text-gray-600">See what our customers have to say about their experience</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <Modal isOpen={showShareModal} onClose={() => setShowShareModal(false)}>
        <div className="relative bg-white rounded-2xl overflow-hidden">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">Share this product</h3>
              <button 
                onClick={() => setShowShareModal(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <FiX className="w-5 h-5 text-white/80" />
              </button>
            </div>
          </div>

          {/* Share options */}
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleShare('twitter')}
                className="group flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/5 transition-all duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1DA1F2]/10 group-hover:bg-[#1DA1F2]/20 mb-2">
                  <FaTwitter className="w-5 h-5 text-[#1DA1F2]" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#1DA1F2]">Twitter</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleShare('facebook')}
                className="group flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-[#4267B2] hover:bg-[#4267B2]/5 transition-all duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4267B2]/10 group-hover:bg-[#4267B2]/20 mb-2">
                  <FaFacebook className="w-5 h-5 text-[#4267B2]" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#4267B2]">Facebook</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleShare('linkedin')}
                className="group flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-[#0077B5] hover:bg-[#0077B5]/5 transition-all duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077B5]/10 group-hover:bg-[#0077B5]/20 mb-2">
                  <FaLinkedin className="w-5 h-5 text-[#0077B5]" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#0077B5]">LinkedIn</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleShare('copy')}
                className="group flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 mb-2">
                  <FaLink className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Copy Link</span>
              </motion.button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Toast for copy success */}
      <Toast 
        show={showToast} 
        onClose={() => setShowToast(false)}
        type="success"
        message="Link copied to clipboard!"
      />

      {/* Image Gallery Modal */}
      <Modal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)}>
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={() => setIsGalleryOpen(false)}
              className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
          
          <div className="relative aspect-video">
            <img
              src={[product.image, ...(product.gallery || [])][currentImageIndex]}
              alt={`${product.name} ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {[product.image, ...(product.gallery || [])].map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentImageIndex === idx ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* Sticky Purchase Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-gray-600">Price</div>
            <div className="text-xl font-bold text-gray-900">₹{product.price}</div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCheckout}
            disabled={isLoading}
            className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg transition duration-300 shadow-lg disabled:opacity-50"
          >
            {isLoading ? 'Processing...' : 'Purchase Now'}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
