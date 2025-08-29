import React from 'react';
import { Shield, Award, Users, Clock, Heart, Leaf } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Quality Assurance",
      description: "Every product undergoes strict quality checks to ensure you get the best."
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Authentic Products",
      description: "Traditional recipes and genuine products that maintain their original taste and quality."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We're here to serve you better every day."
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Quick Delivery",
      description: "Fast and reliable delivery to get your favorite products to your doorstep."
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Made with Love",
      description: "Every pickle and food item is prepared with care and traditional methods."
    },
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Natural & Healthy",
      description: "Our millet products are organic and promote a healthier lifestyle."
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "50+", label: "Products Available" },
    { number: "10+", label: "Years Experience" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose Jahnavi Traders?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are your trusted partner for GPS tracking solutions, authentic homemade delicacies, 
            and premium quality millet products. Our commitment to quality and customer satisfaction 
            sets us apart.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-orange-50 hover:via-red-50 hover:to-pink-50 transition-all duration-700 transform hover:-translate-y-4 hover:shadow-xl hover:shadow-orange-500/20 cursor-pointer group/feature border border-gray-200 hover:border-orange-300"
            >
              <div className="text-orange-500 group-hover/feature:text-orange-600 flex justify-center mb-4 transition-all duration-500 group-hover/feature:scale-110 group-hover/feature:rotate-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 group-hover/feature:text-orange-700 mb-3 transition-all duration-500 group-hover/feature:scale-105">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover/feature:text-gray-700 leading-relaxed transition-colors duration-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-12 rounded-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Quality?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who trust Jahnavi Traders for their needs.
            </p>
            <a
              href="#categories"
              className="inline-block bg-white text-orange-500 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg"
            >
              Browse Our Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;