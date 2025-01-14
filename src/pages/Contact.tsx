import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@binaryvelocity.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'San Francisco, CA',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team to discuss your next project"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-emerald-900/20 backdrop-blur-sm rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-emerald-900/30 border border-emerald-800 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-emerald-900/30 border border-emerald-800 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-emerald-900/30 border border-emerald-800 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors text-white"
                  placeholder="Your message"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3 bg-yellow-500 text-emerald-950 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start space-x-4 bg-emerald-900/20 backdrop-blur-sm rounded-lg p-6"
              >
                <info.icon className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">{info.title}</h3>
                  <p className="text-gray-300 mt-1">{info.details}</p>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-emerald-900/20 backdrop-blur-sm rounded-lg p-4 h-64">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086487509377!2d-122.41941548468126!3d37.77492927975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1633046400000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;