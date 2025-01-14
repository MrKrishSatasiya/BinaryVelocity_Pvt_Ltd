import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Zap } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const About = () => {
  const values = [
    {
      icon: Code,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Dedicated to delivering excellence in every project',
    },
    {
      icon: Zap,
      title: 'Impact',
      description: 'Creating meaningful change through technology',
    },
  ];

  return (
    <div>
      <PageHeader
        title="About Us"
        description="Pioneering the future of technology with passion and innovation"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-emerald-900/20 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At BinaryVelocity, we're driven by a singular purpose: to transform innovative ideas into powerful digital solutions. Our team of passionate technologists and creative minds work together to push the boundaries of what's possible in AI, game development, web solutions, and mobile applications.
            </p>
          </div>
        </motion.section>

        {/* Company Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <value.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-emerald-900/20 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <img
                  src={`https://source.unsplash.com/400x400?portrait&${member}`}
                  alt="Team member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                  <p className="text-yellow-400 mb-4">Technical Director</p>
                  <p className="text-gray-400">
                    Passionate about creating innovative solutions and leading technical initiatives.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;