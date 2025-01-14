import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Gamepad2,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Cpu,
  Code,
  LineChart,
  Palette,
  Headphones,
  Bot,
  Blocks,
  Laptop,
  Fingerprint,
  Zap,
  Server,
  Network,
  Layers,
  Workflow,
  GitBranch,
  Microscope,
  Share2,
  Lightbulb,
  Rocket
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Services = () => {
  const mainServices = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Leveraging cutting-edge artificial intelligence and machine learning technologies to create intelligent solutions.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Deep Learning', 'Neural Networks'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Creating immersive gaming experiences that captivate players across multiple platforms and genres.',
      features: ['Unity & Unreal Engine', '3D Modeling', 'Game Design', 'Cross-platform Development', 'AR/VR Games', 'Mobile Games'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Building modern, responsive web applications that deliver exceptional user experiences.',
      features: ['React & Next.js', 'Full-stack Development', 'E-commerce', 'Progressive Web Apps', 'SEO Optimization', 'Web Performance'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const allServices = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      tech: ['iOS', 'Android', 'React Native', 'Flutter']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services.',
      tech: ['AWS', 'Azure', 'GCP', 'Serverless']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions and audits.',
      tech: ['Penetration Testing', 'Security Audits', 'Compliance']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights.',
      tech: ['Big Data', 'BI', 'Machine Learning']
    },
    {
      icon: Cpu,
      title: 'IoT Solutions',
      description: 'Connect and automate smart devices.',
      tech: ['Sensors', 'Automation', 'Edge Computing']
    },
    {
      icon: Bot,
      title: 'Automation',
      description: 'Streamline business processes.',
      tech: ['RPA', 'Workflow', 'Integration']
    },
    {
      icon: Server,
      title: 'DevOps',
      description: 'Streamline development operations.',
      tech: ['CI/CD', 'Docker', 'Kubernetes']
    },
    {
      icon: Network,
      title: 'Blockchain',
      description: 'Decentralized solutions and smart contracts.',
      tech: ['Ethereum', 'Smart Contracts', 'DApps']
    },
    {
      icon: Layers,
      title: 'UI/UX Design',
      description: 'Create beautiful user experiences.',
      tech: ['Wireframes', 'Prototypes', 'User Testing']
    },
    {
      icon: Workflow,
      title: 'API Development',
      description: 'Build robust and scalable APIs.',
      tech: ['REST', 'GraphQL', 'Microservices']
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Manage code and collaboration.',
      tech: ['Git', 'GitHub', 'GitLab']
    },
    {
      icon: Microscope,
      title: 'Quality Assurance',
      description: 'Ensure software quality and reliability.',
      tech: ['Testing', 'Automation', 'CI/CD']
    },
    {
      icon: Share2,
      title: 'System Integration',
      description: 'Connect different systems seamlessly.',
      tech: ['APIs', 'Middleware', 'Custom Solutions']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Lab',
      description: 'Explore emerging technologies.',
      tech: ['R&D', 'Prototypes', 'POCs']
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Guide businesses into the digital age.',
      tech: ['Strategy', 'Implementation', 'Training']
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Services"
        description="Comprehensive technology solutions tailored to your needs"
      />

      {/* Main Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"
                style={{ background: `linear-gradient(to right, ${service.color})` }}
              />
              <div className="relative bg-emerald-900/20 backdrop-blur-sm rounded-lg p-6 h-full hover:bg-emerald-900/30 transition-colors">
                <service.icon className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-1 text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gradient"
        >
          Comprehensive Solutions
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {allServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-emerald-900/20 backdrop-blur-sm rounded-lg p-4 hover:bg-emerald-900/30 transition-all cursor-pointer"
            >
              <service.icon className="h-8 w-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{service.description}</p>
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
      </section>

      {/* Call to Action */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
        style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-background_181624-11412.jpg?t=st=1735918073~exp=1735921673~hmac=714e8ed93e82e2633e4ce1f548c25cbeeffc2102528be4905498fc65906e0800&w=1060)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.5)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        Ready to Start Your Project?
          </h2>
          <p className="text-blue-100 mb-8">
        Let's discuss how we can help bring your ideas to life.
          </p>
          <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
          >
        Contact Us Today
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Services;