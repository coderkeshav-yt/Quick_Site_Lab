import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="py-4 px-4 sm:px-0">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center flex-wrap">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg 
                  className="mx-2 flex-shrink-0 h-5 w-5 text-gray-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd"
                  />
                </svg>
              )}
              
              <div className="flex items-center">
                {item.path ? (
                  <Link 
                    to={item.path} 
                    className={`text-sm font-medium ${index === items.length - 1 ? 'text-purple-600' : 'text-gray-500 hover:text-gray-700'} flex items-center`}
                  >
                    {item.icon && (
                      <span className="mr-1.5">{item.icon}</span>
                    )}
                    <span className="whitespace-nowrap">{item.label}</span>
                  </Link>
                ) : (
                  <span className="text-sm font-medium text-gray-500 flex items-center">
                    {item.icon && (
                      <span className="mr-1.5">{item.icon}</span>
                    )}
                    <span className="truncate max-w-[200px]">{item.label}</span>
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
