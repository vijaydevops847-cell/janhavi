import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-6">
              {import.meta.env.VITE_COMPANY_NAME}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for GPS tracking solutions, authentic homemade delicacies, 
              and premium quality millet products. Quality is our commitment.
            </p>
            <div className="flex space-x-4">
              <a
                href={import.meta.env.VITE_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={import.meta.env.VITE_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={import.meta.env.VITE_TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-400 p-3 rounded-full transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#categories" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#category-gps" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  GPS Trackers
                </a>
              </li>
              <li>
                <a href="#category-pickles" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  Non-Veg Pickles
                </a>
              </li>
              <li>
                <a href="#category-ready-to-cook" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  Ready to Cook
                </a>
              </li>
              <li>
                <a href="#category-millets" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  Millets
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">{import.meta.env.VITE_PHONE}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">{import.meta.env.VITE_EMAIL}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <span className="text-gray-300 leading-relaxed">
                  {import.meta.env.VITE_COMPANY_ADDRESS}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 {import.meta.env.VITE_COMPANY_NAME}. All rights reserved.
            </p>
            <p className="text-gray-400">
              Made with ❤️ for quality products and customer satisfaction
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;