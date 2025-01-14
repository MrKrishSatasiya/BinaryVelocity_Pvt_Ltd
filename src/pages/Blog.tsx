import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and decision-making processes.',
      image: 'https://source.unsplash.com/800x400?artificial,intelligence',
      author: 'John Smith',
      date: '2024-03-15',
      readTime: '5 min read',
    },
    {
      title: 'Game Development Trends 2024',
      excerpt: 'Latest trends and technologies shaping the future of game development and player experiences.',
      image: 'https://source.unsplash.com/800x400?gaming,development',
      author: 'Sarah Johnson',
      date: '2024-03-10',
      readTime: '4 min read',
    },
    {
      title: 'Mobile App Design Best Practices',
      excerpt: 'Essential design principles and practices for creating successful mobile applications.',
      image: 'https://source.unsplash.com/800x400?mobile,design',
      author: 'Mike Wilson',
      date: '2024-03-05',
      readTime: '6 min read',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Our Blog"
        description="Insights and updates from our team of experts"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 mb-20">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-emerald-900/20 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 hover:text-yellow-400 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-6">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;