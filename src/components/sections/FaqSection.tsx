import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMinus, FiPlus } from 'react-icons/fi';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  delay: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="border-b border-gray-200 py-5"
    >
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-primary">
          {isOpen ? <span className="h-5 w-5"><FiMinus /></span> : <span className="h-5 w-5"><FiPlus /></span>}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 pr-12">
          <p className="text-base text-gray-600">{answer}</p>
        </div>
      )}
    </motion.div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does Cybrida offer?",
      answer: "Cybrida offers a comprehensive range of web development services including website design and development, e-commerce solutions, mobile app development, UI/UX design, digital marketing, SEO optimization, and ongoing maintenance and support."
    },
    {
      question: "How long does it take to build a website?",
      answer: "The timeline for website development varies depending on the complexity and scope of the project. A simple website can be completed in 1-2 weeks, while more complex websites or web applications may take 6-7 weeks or longer. We'll provide you with a detailed timeline during our initial consultation."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is based on the specific requirements of each project. We offer customized quotes after understanding your needs, goals, and the scope of work. We believe in transparent pricing with no hidden fees. Contact us for a free consultation and quote."
    },
    {
      question: "Do you offer website maintenance services?",
      answer: "Yes, we offer ongoing website maintenance and support services to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, and technical support."
    },
    {
      question: "Can you help improve my website's search engine rankings?",
      answer: "Absolutely! We offer comprehensive SEO services to improve your website's visibility in search engines. Our approach includes on-page optimization, technical SEO, content strategy, keyword research, and performance monitoring to help your website rank higher and attract more organic traffic."
    },
    {
      question: "What technologies do you use for development?",
      answer: "We use a variety of modern technologies depending on the specific needs of your project. Our tech stack includes React, Angular, Vue.js, Node.js, PHP, WordPress, Shopify, and many others. We select the most appropriate technologies based on your requirements, budget, and long-term goals."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Have questions? We've got answers. If you don't see what you're looking for, feel free to contact us.
          </motion.p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
