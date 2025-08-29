import React, { useState } from 'react';
import { Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-600">
              {import.meta.env.VITE_COMPANY_NAME}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Home
            </a>
            <a href="#categories" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Contact
            </a>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-3 ml-4">
              <a
                href={import.meta.env.VITE_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={import.meta.env.VITE_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={import.meta.env.VITE_TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t">
            <div className="pt-4 space-y-2">
              <a
                href="#home"
                className="block py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#categories"
                className="block py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Products
              </a>
              <a
                href="#about"
                className="block py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="block py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
            
            {/* Mobile Social Media Links */}
            <div className="flex justify-center space-x-6 pt-4 border-t mt-4">
              <a
                href={import.meta.env.VITE_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href={import.meta.env.VITE_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={import.meta.env.VITE_TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;