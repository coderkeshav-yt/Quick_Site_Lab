import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowRight, FiBookmark, FiEye, FiMessageCircle } from 'react-icons/fi';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime?: string;
  comments?: number;
  views?: number;
}

const BlogSection: React.FC = () => {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "10 Web Design Trends to Watch in 2025",
      excerpt: "Discover the latest web design trends that are shaping the digital landscape in 2025 and beyond. Learn how these innovative approaches can transform your online presence.",
      date: "May 15, 2025",
      author: "Jessica Chen",
      category: "Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read",
      comments: 12,
      views: 1845
    },
    {
      id: 2,
      title: "How to Optimize Your Website for Speed and Performance",
      excerpt: "Learn the best practices for optimizing your website to achieve lightning-fast loading times and smooth performance. Discover the techniques used by Quick Site Lab experts.",
      date: "May 10, 2025",
      author: "Michael Rodriguez",
      category: "Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read",
      comments: 8,
      views: 2156
    },
    {
      id: 3,
      title: "The Importance of Responsive Design for Mobile Users",
      excerpt: "Explore why responsive design is crucial for providing an optimal user experience across all devices. See how Quick Site Lab implements mobile-first strategies for better results.",
      date: "May 5, 2025",
      author: "Sarah Johnson",
      category: "UX/UI",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "4 min read",
      comments: 15,
      views: 1632
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4"
          >
            <span className="text-sm font-medium text-primary">Knowledge Hub</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Insights from <span className="text-primary">Quick Site Lab</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Stay ahead of the curve with our expert insights on web development, design trends, and digital marketing strategies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 h-full overflow-hidden border border-gray-100 flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-white shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Save button */}
                  <button 
                    className={`absolute top-4 left-4 p-2 rounded-full ${hoveredPost === post.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:text-primary`}
                    aria-label="Save article"
                  >
                    <FiBookmark className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  {/* Post meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <FiCalendar className="mr-1 w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <FiUser className="mr-1 w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Post title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  
                  {/* Post excerpt */}
                  <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  {/* Post footer */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
                    >
                      Read Article <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center">
                        <FiEye className="mr-1 w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMessageCircle className="mr-1 w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-button transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore All Articles <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
