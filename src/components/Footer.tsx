import React from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Binary,
  Copyright,
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-emerald-950/50 backdrop-blur-sm mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <Binary className="h-8 w-8 text-yellow-400" />
              <span className="font-bold text-xl text-white">BinaryVelocity</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering ideas and shaping the future through innovative
              technology solutions in AI, game development, web development, and
              app development.
            </p>
          </div>

          {/* Quick Links */}
                <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {['About', 'Services', 'Portfolio', 'Blog', 'Contact'].map(
                  (link) => (
                    <li key={link}>
                    <Link
                      to={`/${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      {link}
                    </Link>
                    </li>
                  )
                  )}
                </ul>
                </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Copyright className="h-4 w-4" />
            <span>
              {new Date().getFullYear()} BinaryVelocity. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;