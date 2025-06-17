import React from 'react';
import { Link } from 'react-router-dom';

// Define product type
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
}

// Static products data
const staticProducts: Product[] = [
  {
    id: "ecommerce-starter-1",
    name: "Modern E-commerce Starter Template",
    description: "A fully-featured e-commerce website template built with React, Node.js, and MongoDB. Perfect for small to medium-sized online stores.",
    price: 49.99,
    image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750149187/ECOM_zhn53a.webp",
    features: [
      "Responsive product catalog with filtering and search",
      "Shopping cart with local storage persistence",
      "Secure checkout process with Stripe integration",
      "User authentication and account management",
      "Admin dashboard for product and order management",
      "Real-time inventory tracking",
      "Product reviews and ratings system",
      "SEO optimized with meta tags and sitemap",
      "Email notifications for orders and shipping updates",
      "Detailed analytics and sales reporting"
    ]
  }
];

const SourceCodeProducts: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Product Card */}
      <div className="flex justify-center items-center">
        <div className="max-w-xl w-full px-4">
          {staticProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="h-52 bg-gray-100 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x200?text=Product+Image';
                  }}
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 rounded-full font-bold shadow-lg">
                  ${product.price}
                </div>
              </div>
              
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-5 text-base line-clamp-2">{product.description}</p>
                
                <div className="mb-7">
                  <h4 className="font-semibold text-gray-700 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {product.features && product.features.slice(0, 4).map((feature: string, index: number) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="h-3.5 w-3.5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                    {product.features && product.features.length > 4 && (
                      <li className="text-purple-600 text-sm mt-2 font-medium">+ {product.features.length - 4} more features</li>
                    )}
                  </ul>
                </div>
                
                <div className="flex justify-center">
                  <Link
                    to={`/source-code/${product.id}`}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-md flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SourceCodeProducts;
