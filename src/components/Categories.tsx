import React, { useState } from 'react';
import { Navigation, Heart, Truck, Wheat, ArrowLeft } from 'lucide-react';
import ProductGrid from './ProductGrid';

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'gps',
      title: 'GPS Trackers',
      description: 'Advanced GPS tracking solutions for vehicles with real-time monitoring',
      icon: <Navigation className="h-16 w-16" />,
      image: '/public/images/hero-gps.jpg',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'pickles',
      title: 'Non-Veg Pickles',
      description: 'Authentic homemade non-vegetarian pickles with traditional recipes',
      icon: <Heart className="h-16 w-16" />,
      image: '/public/images/hero-pickles.jpg',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      id: 'ready-to-cook',
      title: 'Ready to Cook',
      description: 'Convenient ready-to-cook rotis and chapathis for busy lifestyles',
      icon: <Truck className="h-16 w-16" />,
      image: '/public/images/hero-rotis.jpg',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 'millets',
      title: 'Millets & Products',
      description: 'Premium quality millets and millet-based products for healthy living',
      icon: <Wheat className="h-16 w-16" />,
      image: '/public/images/hero-millets.jpg',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    const category = categories.find(cat => cat.id === selectedCategory);
    return (
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <button
              onClick={handleBackToCategories}
              className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Categories</span>
            </button>
          </div>
          
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6 text-orange-500">
              {category?.icon}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {category?.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {category?.description}
            </p>
          </div>

          <ProductGrid categoryId={selectedCategory} />
        </div>
      </section>
    );
  }

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Choose Your Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select a category to explore our premium products. Each category offers 
            unique solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-orange-500/30 cursor-pointer group border border-gray-100 hover:border-orange-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="flex justify-center mb-4 text-white group-hover:text-orange-300 transition-all duration-500 group-hover:scale-110">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:scale-105 transition-transform duration-500">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
              
              <div className="p-6 group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:to-red-50 transition-all duration-500">
                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed transition-colors duration-500">
                  {category.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-orange-600 font-semibold group-hover:text-orange-700 transition-colors duration-300">
                    Explore Products
                  </span>
                  <div className="w-8 h-8 bg-orange-100 group-hover:bg-orange-200 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <span className="text-orange-600 font-bold">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;