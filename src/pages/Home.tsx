import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Gamepad2,
  Globe,
  Smartphone,
  Award,
  Users,
  Code,
  Rocket,
  Star,
  Zap,
  Shield,
  Target,
  Cloud,
  Bot,
  Blocks,
  Laptop,
  Fingerprint
} from 'lucide-react';
import Scene from '../components/3d/Scene';
import PageHeader from '../components/PageHeader';
import { style } from 'framer-motion/client';

const Home = () => {
  <PageHeader
        title="Home"
        description="Pioneering the future of technology with passion and innovation"
      />
  const services = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Cutting-edge artificial intelligence solutions with machine learning and deep learning capabilities',
      tech: ['TensorFlow', 'PyTorch', 'OpenAI']
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Immersive gaming experiences using latest game engines and technologies',
      tech: ['Unity', 'Unreal Engine', 'WebGL']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern and responsive web applications with cutting-edge frameworks',
      tech: ['React', 'Next.js', 'Node.js']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      tech: ['React Native', 'Flutter', 'Swift']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and serverless applications',
      tech: ['AWS', 'Azure', 'GCP']
    },
    {
      icon: Bot,
      title: 'Automation',
      description: 'Intelligent automation solutions for business processes',
      tech: ['RPA', 'Workflow', 'AI/ML']
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: '50+ Awards',
      description: 'Industry recognition for excellence',
      detail: 'Including Best Tech Innovation 2024'
    },
    {
      icon: Users,
      title: '200+ Clients',
      description: 'Worldwide satisfaction',
      detail: 'Across 30+ countries'
    },
    {
      icon: Code,
      title: '500+ Projects',
      description: 'Successfully delivered',
      detail: '98% client satisfaction rate'
    },
    {
      icon: Rocket,
      title: '10+ Years',
      description: 'Industry experience',
      detail: 'Leading digital innovation'
    },
  ];

  const features = [
    {
      icon: Star,
      title: 'Innovation Excellence',
      description: 'Pioneering solutions that push technological boundaries and set new industry standards.',
    },
    {
      icon: Zap,
      title: 'Rapid Development',
      description: 'Agile methodologies ensuring quick turnaround without compromising quality.',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security measures protecting your digital assets.',
    },
    {
      icon: Target,
      title: 'Result Driven',
      description: 'Focused on delivering measurable business outcomes and ROI.',
    },
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'TensorFlow', 'Unity', 'AWS',
    'Flutter', 'Docker', 'Kubernetes', 'GraphQL', 'MongoDB', 'PostgreSQL',
    'Vue.js', 'Angular', 'Go', 'Rust', 'Solidity', 'Web3'
  ];

  const industries = [
    {
      icon: Blocks,
      title: 'Fintech',
      description: 'Revolutionary financial technology solutions'
    },
    {
      icon: Laptop,
      title: 'E-commerce',
      description: 'Scalable online retail platforms'
    },
    {
      icon: Bot,
      title: 'Healthcare',
      description: 'Innovative medical technology systems'
    },
    {
      icon: Fingerprint,
      title: 'Cybersecurity',
      description: 'Advanced security solutions'
    }
  ];

  return (
    <>
      <style>
        {`
          *{
            font-family: "Open Sans", serif;
            font-optical-sizing: auto;
            font-weight: 613;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }
        `}
      </style>
      <div>
        {/* Hero Section with 3D Scene */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
          <Scene />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/50 to-black pointer-events-none" />

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <motion.div
          animate={{
            background: [
              'linear-gradient(to right,rgb(255, 0, 242), #60efff)',
              'linear-gradient(to right, #0061ff, #60efff)',
              'linear-gradient(to right, rgb(255, 0, 242), #60efff)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-block mb-4 px-6 py-2 rounded-full text-black font-semibold"
              >
          Welcome to the Future of Technology
              </motion.div>
          <h1 style={{ fontFamily: "'Press Start 2P', serif", fontWeight: 400, fontStyle: 'normal', textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }} className="text-4xl sm:text-6xl font-bold text-blue-100 mb-6">
          Empowering Ideas,
          <br />
          <span style={{ fontFamily: "'Press Start 2P', serif", fontWeight: 100, fontStyle: 'normal', fontSize: '0.75em', textShadow: '0 0 10px rgba(255, 105, 180, 0.5), 0 0 10px rgba(255, 255, 0, 0.5)' }} className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
            Shaping the Future
          </span>
          </h1>
          <p style={{ fontFamily: "'Open Sans', serif", fontWeight: 'bold' }} className="text-xl text-blue-100 mb-8">
          Your partner in innovation, delivering cutting-edge solutions in AI,
          gaming, web, and mobile development.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 123, 255, 0.7)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            START YOUR JOURNEY
          </motion.button>
            <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 123, 255, 0.7)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-blue-500 text-blue-500 font-bold rounded-lg hover:bg-blue-500/10 transition-colors hidden sm:inline-block"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
            EXPLORE OUR WORK
            </motion.button>
          </div>
            </motion.div>
          </div>

          {/* Floating Tech Stack */}
          <div className="absolute bottom-7 left-0 right-0 overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="flex whitespace-nowrap"
            >
              {[...technologies, ...technologies].map((tech, index) => (
          <span
            key={index}
            className="mx-8 text-blue-300/80 font-mono"
          >
            {tech}
          </span>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2020/04/29/37585-414024825_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-950 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-gradient mb-4"
              >
                Why Choose Us
              </motion.h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Experience excellence in every aspect of digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-lg hover:bg-white/20 transition-colors group"
                >
                  <feature.icon className="h-12 w-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
                Our Services
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Comprehensive solutions across multiple domains
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-lg hover:bg-white/20 transition-colors group cursor-pointer"
                >
                  <service.icon className="h-12 w-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-blue-100 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-900/50 rounded-full text-xs text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/dark-server-racks-computer-network-security-server-room-data-center-generative-ai_1258-153081.jpg?t=st=1735906975~exp=1735910575~hmac=c7784806bb635097698799949b1ecd81fa055088248d1ae5f9a0d13e3d95613c&w=996"
              alt="Background"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
          Industries We Serve
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
          Delivering excellence across diverse sectors
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
          <motion.div
            key={industry.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-lg hover:bg-white/20 transition-colors text-center relative z-10"
          >
            <industry.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
            <p className="text-blue-100">{industry.description}</p>
          </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-glass">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 glass-card rounded-lg"
                >
                  <achievement.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-blue-100 mb-2">{achievement.description}</p>
                  <p className="text-sm text-blue-300">{achievement.detail}</p>
                  
                </motion.div>
              ))}
            </div>
          </div>
        </section>

       
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet" />

        {/* Testimonials Section */}
        <section className="marginBlockStart: '0px', marginBlockEnd: '-7px', paddingBlockStart: '0em', paddingBlockEnd: '0em', paddingInlineStart: '0em' paddingInlineEnd: '0em bg-glass">
          <div className="marginBlockStart: '0px', marginBlockEnd: '-7px', paddingBlockStart: '0em', paddingBlockEnd: '0em', paddingInlineStart: '0em' paddingInlineEnd: '0em max-w-7xl mx-auto">
            <motion.div
              className="marginBlockStart: '0px', marginBlockEnd: '-7px', paddingBlockStart: '0em', paddingBlockEnd: '0em', paddingInlineStart: '0em' paddingInlineEnd: '0em text-center"
            >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-0 pb-0" style={{ color: '#0A1431', fontFamily: 'Play, sans-serif', marginBlockStart: '0px', marginBlockEnd: '-7px', paddingBlockStart: '0em', paddingBlockEnd: '0em', paddingInlineStart: '0em', paddingInlineEnd: '0em' }}>
              WHAT OUR CLIENTS SAY
            </h2>
            </motion.div>
          </div>
        </section>

      
      
        {/* Featured Projects Preview */}
        <section className="pt-20 relative min-h-screen">
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
                <h3 style={{ fontFamily: "'Press Start 2P', serif", fontWeight: 100, fontStyle: 'normal', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', paddingTop: 0 }} className="text-blue-300 mx-auto">
              Explore some of our most innovative and impactful work
                </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
              {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card rounded-lg overflow-hidden group cursor-pointer mx-4"
              >
                <div className="relative">
                <img
                  src={`https://source.unsplash.com/800x600?technology,${project}`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-semibold">View Project</span>
                </div>
                </div>
                <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-blue-100">
                  Brief description of the project and its impact.
                </p>
                </div>
              </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="press-start-2p-regular py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/hallway-building_23-2149397571.jpg?t=st=1735904180~exp=1735907780~hmac=a13325fbd49302a78aa9dec1061a263ff2e9bec6fcba3752f96068d008246467&w=996"
              alt="Background"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-75" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center" style={{ fontFamily: "'Roboto', sans-serif" }}>
            <h2 style={{ fontFamily: "'Press Start 2P', serif", fontWeight: 400, fontStyle: 'normal' }} className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Ideas into Reality?
            </h2>
            <p style={{ fontFamily: "'Press Start 2P', serif", fontWeight: 400, fontStyle: 'normal' }} className="text-blue-100 mb-8">
              Let's collaborate to build something extraordinary together.
            </p>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#ffffff', color: '#1e3a8a', rotate: 5 }}
              whileTap={{ scale: 0.95, rotate: -5 }}
              className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-lg transition-all"
            >
              Get Started Today
            </motion.button>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 123, 255, 0.7)' }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 px-4 py-2 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑ Top
        </motion.button>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,613;1,613&display=swap" rel="stylesheet" />
      </div></>
  );
};

export default Home;