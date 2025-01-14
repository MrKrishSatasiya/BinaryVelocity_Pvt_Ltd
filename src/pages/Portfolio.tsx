import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Portfolio = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      category: 'AI Development',
      image: 'https://source.unsplash.com/800x600?technology,ai',
      description: 'Advanced analytics platform utilizing machine learning for predictive insights.',
    },
    {
      title: 'Immersive VR Game',
      category: 'Game Development',
      image: 'https://source.unsplash.com/800x600?gaming,vr',
      description: 'Virtual reality gaming experience with stunning graphics and engaging gameplay.',
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://source.unsplash.com/800x600?website,ecommerce',
      description: 'Modern e-commerce solution with seamless user experience and robust backend.',
    },
    {
      title: 'Mobile Fitness App',
      category: 'App Development',
      image: 'https://source.unsplash.com/800x600?mobile,fitness',
      description: 'Cross-platform fitness application with personalized workout tracking.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Our Portfolio"
        description="Showcasing our best work across different domains"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-emerald-900/20 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-yellow-400 text-sm font-medium mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300"
                >
                  <span>View Project</span>
                  <ExternalLink className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;