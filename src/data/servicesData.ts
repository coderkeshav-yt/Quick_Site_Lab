import { IconType } from 'react-icons';
import { FiCode, FiLayout, FiSmartphone, FiTrendingUp, FiShoppingBag, FiShield } from 'react-icons/fi';

// Types for service data
export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  color: string;
  heroImage: string;
  technologies: string[];
  benefits: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  packages: {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  testimonials: {
    name: string;
    company: string;
    quote: string;
    image: string;
    rating: number;
  }[];
  caseStudies: {
    title: string;
    client: string;
    description: string;
    image: string;
    url: string;
  }[];
}

// Service data
export const servicesData: ServiceDetail[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom websites and web applications tailored to your specific needs and business goals.',
    longDescription: 'Our web development services deliver custom, high-performance websites and web applications that drive results. We combine cutting-edge technologies with user-centric design to create digital experiences that engage, convert, and delight users. From responsive websites to complex web applications, our expert team brings your vision to life with clean code and scalable architecture.',
    icon: 'FiCode',
    color: 'from-indigo-600 to-blue-600',
    heroImage: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/web-dev-hero_tqjkuf.jpg',
    technologies: ['React', 'Next.js', 'Node.js', 'Angular', 'Vue.js', 'TypeScript', 'GraphQL', 'MongoDB', 'PostgreSQL', 'AWS'],
    benefits: [
      'Increased user engagement and conversions',
      'Improved site performance and loading times',
      'Enhanced user experience across all devices',
      'Better search engine visibility',
      'Scalable solutions that grow with your business',
      'Reduced maintenance costs'
    ],
    features: [
      {
        title: 'Responsive Web Design',
        description: 'Websites that adapt perfectly to any screen size or device for optimal user experience.',
        icon: 'FiLayout'
      },
      {
        title: 'Custom Web Applications',
        description: 'Tailor-made web applications with robust functionality to meet your specific business needs.',
        icon: 'FiCode'
      },
      {
        title: 'E-commerce Development',
        description: 'Secure, feature-rich online stores that drive sales and provide seamless shopping experiences.',
        icon: 'FiShoppingBag'
      },
      {
        title: 'Progressive Web Apps',
        description: 'Web applications that offer app-like experiences with offline capabilities and fast performance.',
        icon: 'FiSmartphone'
      },
      {
        title: 'CMS Implementation',
        description: 'Content management systems that make updating and managing your website simple and efficient.',
        icon: 'FiLayout'
      },
      {
        title: 'Performance Optimization',
        description: 'Fine-tuning your web applications for maximum speed, efficiency, and user satisfaction.',
        icon: 'FiTrendingUp'
      }
    ],
    packages: [
      {
        name: 'Starter',
        price: '$4,999',
        description: 'Perfect for small businesses looking to establish an online presence',
        features: [
          'Responsive website (up to 5 pages)',
          'Basic SEO optimization',
          'Contact form',
          'Google Analytics integration',
          'Content management system',
          '2 rounds of revisions',
          '30 days of support'
        ]
      },
      {
        name: 'Professional',
        price: '$9,999',
        description: 'Comprehensive solution for growing businesses with advanced needs',
        features: [
          'Responsive website (up to 10 pages)',
          'Advanced SEO optimization',
          'Blog/news section',
          'Newsletter integration',
          'Custom animations',
          'Advanced contact forms',
          'Social media integration',
          '3 rounds of revisions',
          '60 days of support'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Tailored solutions for large businesses with complex requirements',
        features: [
          'Custom web application development',
          'E-commerce functionality',
          'User authentication',
          'Third-party API integrations',
          'Custom database development',
          'Advanced security features',
          'Performance optimization',
          'Unlimited revisions',
          '90 days of support'
        ]
      }
    ],
    faq: [
      {
        question: 'How long does it take to develop a website?',
        answer: 'The timeline for web development varies based on the complexity and scope of the project. A basic website typically takes 4-6 weeks, while more complex web applications can take 2-3 months or more. We will provide a detailed timeline during our initial consultation.'
      },
      {
        question: 'Do you offer website maintenance services?',
        answer: 'Yes, we offer ongoing maintenance and support services to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, backup management, and technical support.'
      },
      {
        question: 'Can you help with website hosting?',
        answer: 'Absolutely! We provide hosting recommendations and can set up and configure your hosting environment. We work with various reliable hosting providers to ensure your website has excellent uptime, fast loading speeds, and robust security.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Yes, all websites we develop are fully responsive and optimized for all devices including desktops, tablets, and mobile phones. We follow mobile-first design principles to ensure an excellent user experience regardless of the device used to access your site.'
      },
      {
        question: 'Do you provide content for the website?',
        answer: 'While we do not create content as part of our standard packages, we can recommend copywriters or content creators from our network of trusted partners. We are also happy to implement and optimize any content you provide.'
      }
    ],
    testimonials: [
      {
        name: 'Michael Thompson',
        company: 'Innovate Solutions',
        quote: 'The web application Quick Site Lab developed for us has transformed our business operations. Their attention to detail and technical expertise is unmatched.',
        image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/person1_nwpkux.jpg',
        rating: 5
      },
      {
        name: 'Sarah Johnson',
        company: 'EcoGreen Products',
        quote: 'Our e-commerce website has seen a 40% increase in conversions since Quick Site Lab redesigned it. Their focus on user experience really paid off!',
        image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/person2_asmxdw.jpg',
        rating: 5
      },
      {
        name: 'David Chen',
        company: 'TechStart Inc.',
        quote: 'Working with Quick Site Lab was seamless from start to finish. They delivered our complex web application ahead of schedule and under budget.',
        image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/person3_eujfgh.jpg',
        rating: 4
      }
    ],
    caseStudies: [
      {
        title: 'E-commerce Platform Redesign',
        client: 'Fashion Forward',
        description: 'Complete redesign and development of an e-commerce platform resulting in 35% increase in sales and 45% reduction in cart abandonment.',
        image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/case-study1_fgsiyj.jpg',
        url: '/portfolio/fashion-forward'
      },
      {
        title: 'SaaS Application Development',
        client: 'DataMetrics Pro',
        description: 'Custom SaaS application development with complex data visualization features and user management system.',
        image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/case-study2_hdcfgw.jpg',
        url: '/portfolio/datametrics-pro'
      }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'User-centric design that delivers intuitive, engaging digital experiences.',
    longDescription: 'Our UI/UX design services focus on creating beautiful, intuitive interfaces that delight users and drive engagement. We combine aesthetic appeal with functional design to create digital experiences that are both visually stunning and easy to use. Our design process is data-driven and user-focused, ensuring that every element serves a purpose.',
    icon: 'FiLayout',
    color: 'from-purple-600 to-pink-600',
    heroImage: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/ui-ux-hero_oosfke.jpg',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Webflow', 'Framer', 'Zeplin', 'Adobe Creative Suite'],
    benefits: [
      'Improved user satisfaction and engagement',
      'Increased conversion rates',
      'Reduced user errors and support needs',
      'Consistent brand experience across platforms',
      'Faster development cycles with clear specifications',
      'Competitive advantage through superior user experience'
    ],
    features: [
      {
        title: 'User Research',
        description: 'In-depth analysis of user needs, behaviors, and pain points to inform design decisions.',
        icon: 'FiTrendingUp'
      },
      {
        title: 'Interface Design',
        description: 'Beautiful, intuitive UI designs that align with your brand and enhance user experience.',
        icon: 'FiLayout'
      },
      {
        title: 'Prototyping',
        description: 'Interactive prototypes that simulate the user experience before development begins.',
        icon: 'FiSmartphone'
      },
      {
        title: 'Usability Testing',
        description: 'Rigorous testing with real users to identify issues and opportunities for improvement.',
        icon: 'FiCode'
      },
      {
        title: 'Design Systems',
        description: 'Comprehensive design systems that ensure consistency and accelerate development.',
        icon: 'FiLayout'
      },
      {
        title: 'Responsive Design',
        description: 'Designs that adapt seamlessly to different screen sizes and devices.',
        icon: 'FiSmartphone'
      }
    ],
    packages: [
      {
        name: 'Essentials',
        price: '$3,999',
        description: 'Perfect for startups and small businesses looking to improve their digital presence',
        features: [
          'User persona development',
          'Wireframing',
          'UI design (up to 5 key screens)',
          'Basic prototyping',
          'Style guide',
          '2 rounds of revisions'
        ]
      },
      {
        name: 'Premium',
        price: '$7,999',
        description: 'Comprehensive solution for businesses seeking a complete design overhaul',
        features: [
          'User research and journey mapping',
          'Wireframing and information architecture',
          'UI design (up to 15 screens)',
          'Interactive prototyping',
          'Design system creation',
          'Usability testing',
          '3 rounds of revisions'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Tailored solutions for large businesses with complex requirements',
        features: [
          'Comprehensive user research',
          'Complete UX strategy development',
          'Full-scale design system',
          'Unlimited screen designs',
          'Advanced interactive prototyping',
          'Multiple user testing sessions',
          'Ongoing design support',
          'Unlimited revisions'
        ]
      }
    ],
    faq: [
      {
        question: 'What is the difference between UI and UX design?',
        answer: 'UI (User Interface) design focuses on the visual elements and aesthetics of a digital product, while UX (User Experience) design addresses the overall feel and functionality of the product. UI deals with buttons, typography, colors, and layouts, whereas UX concerns user flows, information architecture, and how users interact with the product.'
      },
      {
        question: 'How does your design process work?',
        answer: 'Our design process typically includes: 1) Discovery and research to understand your users and business goals, 2) Information architecture and wireframing, 3) Visual design and prototyping, 4) Usability testing and refinement, and 5) Handoff to development with detailed specifications.'
      },
      {
        question: 'Do I need to provide content before design begins?',
        answer: 'While having final content is ideal, we can begin the design process with placeholder content. However, the quality of the final design will be enhanced with actual content, as it allows us to create more tailored and effective designs.'
      },
      {
        question: 'How do you ensure the designs will be implemented correctly?',
        answer: 'We provide comprehensive design documentation and specifications for developers, including interactive prototypes, style guides, and design systems. Our designers can also collaborate directly with your development team during implementation.'
      }
    ],
    testimonials: [
      {
        name: 'Emily Rodriguez',
        company: 'HealthTech Solutions',
        quote: 'Quick Site Lab completely transformed our healthcare application with their thoughtful UI/UX design. Patient engagement increased by 60% following the redesign.',
        image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/person4_sfkdju.jpg',
        rating: 5
      },
      {
        name: 'Jason Kim',
        company: 'FinEdge',
        quote: 'The design system Quick Site Lab created for our fintech platform has streamlined our development process and created a consistent experience across all our products.',
        image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/person5_rtkigv.jpg',
        rating: 5
      }
    ],
    caseStudies: [
      {
        title: 'Healthcare App Redesign',
        client: 'MediConnect',
        description: 'Complete UX overhaul of a patient management application, resulting in 60% improvement in task completion rates and 45% reduction in training time.',
        image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/case-study3_dfjsru.jpg',
        url: '/portfolio/mediconnect'
      },
      {
        title: 'Fintech Platform Design System',
        client: 'MoneyWise',
        description: 'Creation of a comprehensive design system for a growing fintech company, enabling consistent user experience across 12 different products.',
        image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/case-study4_rwfkvl.jpg',
        url: '/portfolio/moneywise'
      }
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    shortDescription: 'Native and cross-platform mobile applications that provide seamless user experiences.',
    longDescription: 'Our mobile development services help you reach your audience on their preferred devices with powerful, feature-rich applications. Whether you need a native app for iOS or Android, or a cross-platform solution, our development team delivers mobile experiences that engage users and drive business growth.',
    icon: 'FiSmartphone',
    color: 'from-blue-600 to-cyan-600',
    heroImage: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/mobile-dev-hero_yexqki.jpg',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify', 'Google Maps API', 'Payment Gateways'],
    benefits: [
      'Increased customer engagement and retention',
      'Enhanced brand presence on mobile platforms',
      'Additional revenue streams through in-app purchases',
      'Improved customer service and support',
      'Valuable data collection and analytics',
      'Competitive advantage in mobile-first markets'
    ],
    features: [
      {
        title: 'Native App Development',
        description: 'Powerful, high-performance applications built specifically for iOS or Android platforms.',
        icon: 'FiCode'
      },
      {
        title: 'Cross-Platform Solutions',
        description: 'Cost-effective apps that work seamlessly across multiple platforms with a single codebase.',
        icon: 'FiSmartphone'
      },
      {
        title: 'UI/UX Design for Mobile',
        description: 'Intuitive and engaging mobile interfaces designed for touch interactions and smaller screens.',
        icon: 'FiLayout'
      },
      {
        title: 'App Store Optimization',
        description: 'Strategic approaches to improve visibility and downloads on app marketplaces.',
        icon: 'FiTrendingUp'
      },
      {
        title: 'API Integration',
        description: 'Seamless connectivity with external services, payment gateways, and backend systems.',
        icon: 'FiCode'
      },
      {
        title: 'Maintenance & Updates',
        description: 'Ongoing support to ensure your app stays compatible with new OS versions and devices.',
        icon: 'FiShield'
      }
    ],
    packages: [
      {
        name: 'Starter',
        price: '$15,000',
        description: 'Perfect for MVPs and simple applications',
        features: [
          'Single platform (iOS or Android)',
          'Basic UI/UX design',
          'Up to 5 screens',
          'Basic API integration',
          'Authentication system',
          'App store submission',
          '30 days of support'
        ]
      },
      {
        name: 'Professional',
        price: '$30,000',
        description: 'Comprehensive solution for businesses requiring a full-featured app',
        features: [
          'Cross-platform (iOS and Android)',
          'Custom UI/UX design',
          'Up to 15 screens',
          'Complex API integrations',
          'User profiles and roles',
          'Push notifications',
          'Analytics integration',
          '60 days of support'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Advanced solutions for large businesses with complex requirements',
        features: [
          'Native development for maximum performance',
          'Advanced features (AR, AI, ML)',
          'Unlimited screens',
          'Custom backend development',
          'Third-party integrations',
          'Advanced security features',
          'Comprehensive testing suite',
          'Ongoing maintenance package'
        ]
      }
    ],
    faq: [
      {
        question: 'Should I build a native app or cross-platform app?',
        answer: 'This depends on your specific needs. Native apps (built specifically for iOS or Android) offer the best performance and access to platform-specific features. Cross-platform apps are more cost-effective and faster to market since they share code across platforms. We can help you determine the best approach based on your business goals, budget, and technical requirements.'
      },
      {
        question: 'How long does it take to develop a mobile app?',
        answer: 'The timeline varies significantly based on complexity. A basic app might take 3-4 months, while a complex app with custom features could take 6-12 months. During our discovery phase, we will provide a detailed timeline for your specific project.'
      },
      {
        question: 'What happens after my app is launched?',
        answer: 'App development is an ongoing process. After launch, we recommend continuous monitoring, regular updates to fix bugs and security issues, and periodic feature enhancements based on user feedback. We offer various maintenance packages to ensure your app remains current and functional.'
      },
      {
        question: 'Will my app work offline?',
        answer: "We can build offline functionality into your app depending on your requirements. Many apps can cache data locally and synchronize when a connection is available. We'll discuss your offline needs during the planning phase."
      }
    ],
    testimonials: [
      {
        name: 'Robert Chang',
        company: 'FitLife',
        quote: 'The fitness app Quick Site Lab built for us has over 100,000 downloads and maintains a 4.8-star rating. Their attention to user experience made all the difference.',
        image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/person7_uydvjh.jpg',
        rating: 5
      },
      {
        name: 'Priya Sharma',
        company: 'QuickDelivery',
        quote: 'Our delivery app needed to work flawlessly across multiple platforms. Quick Site Lab delivered a solution that exceeded our expectations and scaled with our rapid growth.',
        image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/person8_lsfdku.jpg',
        rating: 5
      }
    ],
    caseStudies: [
      {
        title: 'Fitness Tracking App',
        client: 'FitLife',
        description: 'Development of a cross-platform fitness app with workout tracking, nutrition planning, and social features that achieved 100,000+ downloads in the first year.',
        image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/case-study5_rgsfvk.jpg',
        url: '/portfolio/fitlife'
      },
      {
        title: 'On-Demand Delivery Platform',
        client: 'QuickDelivery',
        description: 'Created a sophisticated delivery platform with real-time tracking, driver management, and payment processing that processes over 10,000 deliveries daily.',
        image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/case-study6_trdfvj.jpg',
        url: '/portfolio/quickdelivery'
      }
    ]
  }
];

// Function to get service by ID
export const getServiceById = (id: string): ServiceDetail | undefined => {
  return servicesData.find(service => service.id === id);
};
