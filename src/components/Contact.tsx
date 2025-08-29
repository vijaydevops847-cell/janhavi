import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const handleWhatsAppChat = () => {
    const message = "Hi! I'd like to know more about your products and services.";
    const whatsappUrl = `https://wa.me/${import.meta.env.VITE_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our products? Need assistance with your order? 
            We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">{import.meta.env.VITE_PHONE}</p>
                  <p className="text-sm text-gray-500">Call us for immediate assistance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">{import.meta.env.VITE_EMAIL}</p>
                  <p className="text-sm text-gray-500">Send us your queries anytime</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600">{import.meta.env.VITE_COMPANY_ADDRESS}</p>
                  <p className="text-sm text-gray-500">Visit our store for direct purchases</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href={import.meta.env.VITE_FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full transition-colors duration-300"
                >
                  <Facebook className="h-6 w-6 text-blue-600" />
                </a>
                <a
                  href={import.meta.env.VITE_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-100 hover:bg-pink-200 p-3 rounded-full transition-colors duration-300"
                >
                  <Instagram className="h-6 w-6 text-pink-600" />
                </a>
                <a
                  href={import.meta.env.VITE_TWITTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full transition-colors duration-300"
                >
                  <Twitter className="h-6 w-6 text-blue-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Quick Contact</h3>
            
            <div className="space-y-6">
              <div className="text-center p-8 bg-green-50 rounded-xl border-2 border-green-200">
                <MessageCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800 mb-2">WhatsApp Us!</h4>
                <p className="text-gray-600 mb-6">
                  Get instant responses to your queries. Chat with us on WhatsApp for:
                </p>
                <ul className="text-left text-gray-600 mb-6 space-y-2">
                  <li>• Product inquiries</li>
                  <li>• Order assistance</li>
                  <li>• Custom requirements</li>
                  <li>• Bulk order discounts</li>
                </ul>
                <button
                  onClick={handleWhatsAppChat}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-3">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;