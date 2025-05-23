import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiGithub, FiMail, FiPhone, FiMapPin, FiCalendar } from 'react-icons/fi';

interface LeadershipProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  expertise: string[];
  experience: string;
  education: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  delay: number;
}

interface DeveloperProps {
  name: string;
  role: string;
  tech: string[];
  delay: number;
}

const LeadershipCard: React.FC<LeadershipProps> = ({ 
  name, role, bio, imageSrc, expertise, experience, education, email, linkedin, twitter, github, delay 
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="h-[550px] md:h-[580px] col-span-1 md:col-span-1 team-card-container"
    >
      <div 
        className={`team-card relative w-full h-full ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="team-card-front absolute w-full h-full rounded-2xl overflow-hidden shadow-xl">
          <div className="relative w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 p-8 flex flex-col items-center">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500 opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            
            {/* Profile image with gradient border */}
            <div className="relative mb-2 group cursor-pointer">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                  <img 
                    src={imageSrc} 
                    alt={name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
            
            {/* Role badge as separate element below image */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold py-2 px-6 rounded-full shadow-lg mb-4">
              {role}
            </div>
            
            {/* Name with gradient text */}
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 mb-3">{name}</h3>
            
            {/* Bio with improved typography */}
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              {bio}
            </p>
            
            {/* Expertise tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {expertise.map((skill, index) => (
                <span key={index} className="text-xs px-3 py-1 rounded-full bg-white/10 text-purple-200 backdrop-blur-sm border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Social media links with improved styling */}
            <div className="flex space-x-3 mt-auto">
              {linkedin && (
                <a href={linkedin} className="text-white hover:text-purple-300 transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full border border-white/10">
                  <FiLinkedin size={18} />
                </a>
              )}
              {twitter && (
                <a href={twitter} className="text-white hover:text-purple-300 transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full border border-white/10">
                  <FiTwitter size={18} />
                </a>
              )}
              {github && (
                <a href={github} className="text-white hover:text-purple-300 transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full border border-white/10">
                  <FiGithub size={18} />
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="text-white hover:text-purple-300 transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full border border-white/10">
                  <FiMail size={18} />
                </a>
              )}
            </div>
            
            {/* Flip card hint */}
            <div className="absolute bottom-3 right-3 text-xs text-white/50 flex items-center">
              <span>Tap for more</span>
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="team-card-back absolute w-full h-full rounded-2xl overflow-hidden shadow-xl">
          <div className="relative w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900 p-8 flex flex-col">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500 opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 mb-6">{name}</h3>
            
            {/* Experience section */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FiCalendar className="text-purple-400 mr-2" />
                <h4 className="text-white font-semibold">Experience</h4>
              </div>
              <p className="text-gray-300 pl-6">{experience}</p>
            </div>
            
            {/* Education section */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <FiGithub className="text-purple-400 mr-2" />
                <h4 className="text-white font-semibold">Education</h4>
              </div>
              <p className="text-gray-300 pl-6">{education}</p>
            </div>
            
            {/* Contact information with icons */}
            <div className="mt-auto">
              <h4 className="text-white font-semibold mb-2">Contact Information</h4>
              {email && (
                <div className="flex items-center mb-2">
                  <FiMail className="text-purple-400 mr-2" />
                  <a href={`mailto:${email}`} className="text-gray-300 hover:text-purple-300 transition-colors">{email}</a>
                </div>
              )}
              <div className="flex items-center mb-2">
                <FiPhone className="text-purple-400 mr-2" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="text-purple-400 mr-2" />
                <span className="text-gray-300">New Delhi, India</span>
              </div>
            </div>
            
            {/* Flip card hint */}
            <div className="absolute bottom-3 right-3 text-xs text-white/50 flex items-center">
              <span>Tap to flip back</span>
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DeveloperCard: React.FC<DeveloperProps> = ({ 
  name, role, tech, delay 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-indigo-500/20 group col-span-1"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-purple-400">{role}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-300 mb-2">Tech Stack:</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span key={index} className="bg-indigo-800/50 text-xs px-2 py-1 rounded text-gray-200">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection: React.FC = () => {
  // Leadership team with enhanced profiles
  const leadership = [
    {
      name: "Keshav Kumar Singh",
      role: "CEO & Founder",
      bio: "Visionary leader with over 5 years of experience in digital transformation and software innovation.",
      imageSrc: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1747979320/keshavsingh_z129z9.jpg",
      expertise: ["Digital Strategy", "Product Vision", "Enterprise Architecture", "AI Solutions"],
      experience: "Previously led technology at Fortune 500 companies and founded two successful tech startups.",
      education: "MCA from NIT Tiruchirappalli and B.Tech in Computer Science from IIT Delhi",
      email: "keshavtech01@gmail.com",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Rajeev Kumar",
      role: "CTO & Co-Founder",
      bio: "Technology innovator with deep expertise in scalable architecture and emerging technologies.",
      imageSrc: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1747979320/rajjevkumar_oe2z2x.jpg",
      expertise: ["Cloud Architecture", "Blockchain", "Machine Learning", "DevOps"],
      experience: "Led engineering teams at Google and Microsoft, with multiple patents in cloud computing.",
      education: "MCA from LPU and B.Tech in Computer Science from IIT KGP",
      email: "rajeevkumar@gmail.com",
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  ];

  // Development team
  const developers = [
    {
      name: "Aditya Sharma",
      role: "Frontend Developer",
      tech: ["React", "Next.js", "TypeScript"]
    },
    {
      name: "Priya Patel",
      role: "Backend Developer",
      tech: ["Node.js", "Express", "MongoDB"]
    },
    {
      name: "Vikram Verma",
      role: "Full Stack Developer",
      tech: ["React", "Django", "PostgreSQL"]
    },
    {
      name: "Ananya Gupta",
      role: "UI/UX Designer",
      tech: ["Figma", "Adobe XD", "Sketch"]
    },
    {
      name: "Rohit Mishra",
      role: "DevOps Engineer",
      tech: ["Docker", "Kubernetes", "AWS"]
    },
    {
      name: "Neha Singh",
      role: "Mobile Developer",
      tech: ["React Native", "Flutter", "Swift"]
    }
  ];

  // Add global styles for 3D transformations
  React.useEffect(() => {
    // Add CSS for 3D transformations
    const style = document.createElement('style');
    style.innerHTML = `
      .team-card-container {
        perspective: 1000px;
        margin-bottom: 1rem;
      }
      .team-card {
        transition: transform 0.8s;
        transform-style: preserve-3d;
        position: relative;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
      .team-card.flipped {
        transform: rotateY(180deg);
      }
      .team-card-front, .team-card-back {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
      }
      .team-card-back {
        transform: rotateY(180deg);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <section className="py-24 bg-gradient-to-br from-purple-950 to-indigo-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-indigo-600 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Leadership</span></h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Visionary leaders driving innovation and excellence in every project we undertake.
          </p>
        </motion.div>

        {/* Leadership - Interactive flip cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 max-w-5xl mx-auto">
          {leadership.map((member, index) => (
            <LeadershipCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imageSrc={member.imageSrc}
              expertise={member.expertise}
              experience={member.experience}
              education={member.education}
              email={member.email}
              linkedin={member.linkedin}
              twitter={member.twitter}
              github={member.github}
              delay={index}
            />
          ))}
        </div>

        {/* Developers - No photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <DeveloperCard
              key={index}
              name={dev.name}
              role={dev.role}
              tech={dev.tech}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
