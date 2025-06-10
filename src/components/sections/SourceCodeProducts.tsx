import React, { useState, useEffect } from 'react';
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

const SourceCodeProducts: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/products-public')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10 text-lg text-gray-500">Loading products...</div>;
  if (error) return <div className="text-center py-10 text-lg text-red-500">{error}</div>;

  return (
    <div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group border border-gray-100"
          >
            <div className="h-52 bg-gray-100 relative overflow-hidden">
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback for missing images
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x200?text=Product+Image';
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-50">
                  <span className="text-gray-400">Image not available</span>
                </div>
              )}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 rounded-full font-bold shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                ${product.price}
              </div>
            </div>
            
            <div className="p-7">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">{product.name}</h3>
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
              
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to={`/source-code/${product.id}`}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl transition duration-300 flex items-center justify-center"
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
  );
};

export default SourceCodeProducts;
