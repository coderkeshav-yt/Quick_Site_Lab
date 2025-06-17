import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiLayout, FiServer, FiSettings, FiSmartphone, FiMonitor, FiGitBranch, FiClock, FiCheckCircle, FiAlertCircle, FiArrowRight } from 'react-icons/fi';
import { SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiVercel, SiGithub, SiJest, SiWebpack, SiDocker, SiFigma } from 'react-icons/si';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const DevelopmentProgress: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  // Memoize static data
  const stages = React.useMemo(() => [
    { name: 'Planning & Design', progress: 100, icon: FiLayout, details: 'Wireframes, UI/UX, Architecture', eta: '✓ Completed' },
    { name: 'Frontend Development', progress: 75, icon: FiMonitor, details: 'Components, Styling, Interactions', eta: 'ETA: 3 days' },
    { name: 'Backend Integration', progress: 45, icon: FiServer, details: 'API Integration, Database Setup', eta: 'ETA: 1 week' },
    { name: 'Testing & QA', progress: 20, icon: FiSettings, details: 'Unit Tests, E2E Testing', eta: 'ETA: 10 days' },
    { name: 'Deployment', progress: 0, icon: FiGitBranch, details: 'CI/CD Pipeline, Cloud Setup', eta: 'Starting soon' }
  ], []);

  const techStack = React.useMemo(() => [
    { icon: SiReact, name: 'React', color: '#61DAFB', category: 'Frontend', description: 'Component-based UI' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', category: 'Frontend', description: 'Type-safe JavaScript' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#38BDF8', category: 'Frontend', description: 'Utility-first CSS' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff', category: 'Frontend', description: 'React Framework' },
    { icon: SiVercel, name: 'Vercel', color: '#ffffff', category: 'DevOps', description: 'Deployment Platform' },
    { icon: SiGithub, name: 'GitHub', color: '#ffffff', category: 'DevOps', description: 'Version Control' },
    { icon: SiJest, name: 'Jest', color: '#C21325', category: 'Testing', description: 'Testing Framework' },
    { icon: SiWebpack, name: 'Webpack', color: '#8DD6F9', category: 'Build', description: 'Module Bundler' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED', category: 'DevOps', description: 'Containerization' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E', category: 'Design', description: 'Design Tool' }
  ], []);

  const metrics = React.useMemo(() => [
    { 
      label: 'Code Coverage', 
      value: '94%', 
      icon: FiCheckCircle, 
      color: 'emerald',
      trend: '+2.5%',
      description: 'Unit & Integration Tests'
    },
    { 
      label: 'Build Time', 
      value: '2.3s', 
      icon: FiClock, 
      color: 'blue',
      trend: '-0.4s',
      description: 'Production Build'
    },
    { 
      label: 'Issues', 
      value: '0', 
      icon: FiAlertCircle, 
      color: 'rose',
      trend: '-3',
      description: 'Active Issues'
    }
  ], []);

  // Optimize animations with transform instead of width/height
  const floatingParticles = React.useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      size: i % 2 === 0 ? 'w-1 h-1' : 'w-2 h-2',
      initialX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      initialY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
      duration: Math.random() * 5 + 10
    }));
  }, []);

  // Optimize animation transitions
  const transitionProps = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 0.5
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f2e] to-[#2a3142] text-white relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-30"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-5"></div>
      
      {/* Optimized floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute ${particle.size} bg-white/10 rounded-full will-change-transform`}
            initial={{ 
              x: particle.initialX,
              y: particle.initialY,
              scale: 0.8
            }}
            animate={{
              y: [particle.initialY, particle.initialY + 100],
              x: [particle.initialX, particle.initialX + 100],
              scale: [0.8, 1.2]
            }}
            transition={{
              repeat: Infinity,
              duration: particle.duration,
              ease: "linear",
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Main content with optimized animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionProps}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full mb-6 backdrop-blur-xl border border-white/10"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse mr-3"></div>
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Live Development Status
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionProps}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70"
          >
            Crafting Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Digital Experience
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionProps}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            We're meticulously crafting every detail of your digital presence, ensuring perfection in every pixel and line of code.
          </motion.p>
        </div>

        {/* Optimized Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...transitionProps, delay: 0.1 * index }}
              className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-6 rounded-2xl border border-white/10 group hover:border-white/20 transition-all duration-300 transform-gpu hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl bg-${metric.color}-500/10 flex items-center justify-center transform-gpu group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className={`w-7 h-7 text-${metric.color}-500`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white/60">{metric.label}</p>
                    <span className={`text-xs ${metric.trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {metric.trend}
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-white mt-1">{metric.value}</p>
                  <p className="text-xs text-white/40 mt-1">{metric.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optimized Progress Stages */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transitionProps}
            className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <FiCpu className="w-6 h-6 text-accent" />
              Development Progress
            </h2>
            <div className="space-y-8">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...transitionProps, delay: 0.1 * index }}
                  className="relative group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center transform-gpu group-hover:scale-110 transition-transform duration-300">
                        <stage.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <span className="font-medium block text-lg">{stage.name}</span>
                        <span className="text-sm text-white/60">{stage.details}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                        {stage.progress}%
                      </span>
                      <span className="text-xs text-white/40">{stage.eta}</span>
                    </div>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: stage.progress / 100 }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                      style={{ originX: 0 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transform-gpu"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transitionProps}
            className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FiCode className="w-6 h-6 text-accent" />
              Live Development
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden bg-black/30 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <DotLottieReact
                src="https://lottie.host/09ae8a0d-63a1-41e9-8b1e-c016a5ecec1b/UFrd718iul.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Optimized Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionProps}
          className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <FiDatabase className="w-6 h-6 text-accent" />
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transitionProps, delay: 0.1 * index }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white/5 hover:bg-white/10 p-6 rounded-xl transition-all duration-300 transform-gpu hover:-translate-y-2">
                  <div className="relative flex flex-col items-center gap-3">
                    <tech.icon className="w-12 h-12 transform-gpu group-hover:scale-110 transition-transform duration-300" style={{ color: tech.color }} />
                    <span className="text-sm font-medium text-white/80">{tech.name}</span>
                    <span className="text-xs text-white/40">{tech.category}</span>
                    <div className="absolute -bottom-2 left-0 right-0 bg-gradient-to-r from-primary/80 to-accent/80 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-center transform-gpu">
                      {tech.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Optimized Status Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionProps}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-white/80 font-medium">Development in Progress</span>
            <span className="text-white/40">•</span>
            <span className="text-white/60">Est. Completion: 2 Weeks</span>
            <FiArrowRight className="w-4 h-4 text-accent transform-gpu group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DevelopmentProgress; 