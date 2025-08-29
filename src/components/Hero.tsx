import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, Heart, Wheat, Navigation } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium GPS Trackers",
      description: "Keep your vehicles safe with our advanced GPS tracking solutions. Real-time monitoring with mobile app support.",
      image: import.meta.env.VITE_HERO_GPS_IMAGE,
      icon: <Navigation className="h-16 w-16" />,
      cta: "Explore GPS Trackers",
      category: "gps"
    },
    {
      title: "Authentic Non-Veg Pickles",
      description: "Taste the tradition with our homemade non-vegetarian pickles. Made with fresh ingredients and authentic recipes.",
      image: import.meta.env.VITE_HERO_PICKLES_IMAGE,
      icon: <Heart className="h-16 w-16" />,
      cta: "Shop Pickles",
      category: "pickles"
    },
    {
      title: "Ready-to-Cook Rotis & Chapathis",
      description: "Fresh, healthy, and convenient. Our ready-to-cook rotis and chapathis save your time without compromising on taste.",
      image: import.meta.env.VITE_HERO_READY_TO_COOK_IMAGE,
      icon: <Truck className="h-16 w-16" />,
      cta: "Order Now",
      category: "ready-to-cook"
    },
    {
      title: "Premium Millets & Millet Products",
      description: "Discover the power of millets. Our premium quality millets and millet-based products for a healthier lifestyle.",
      image: import.meta.env.VITE_HERO_MILLETS_IMAGE,
      icon: <Wheat className="h-16 w-16" />,
      cta: "Shop Millets",
      category: "millets"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(`category-${category}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-4xl">
                <div className="flex justify-center mb-6 text-orange-400">
                  {slide.icon}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                  {slide.description}
                </p>
                <button
                  onClick={() => scrollToCategory(slide.category)}
                  className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-700 transform hover:scale-115 shadow-2xl cursor-pointer hover:shadow-orange-500/60 relative overflow-hidden group/cta"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700" />
                  <span className="relative z-10 transition-transform duration-500 group-hover/cta:scale-105">{slide.cta}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-4 rounded-full transition-all duration-500 cursor-pointer hover:scale-110 shadow-lg hover:shadow-xl backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-4 rounded-full transition-all duration-500 cursor-pointer hover:scale-110 shadow-lg hover:shadow-xl backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-4 rounded-full transition-all duration-500 cursor-pointer hover:scale-125 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 w-12 shadow-lg' 
                : 'bg-white bg-opacity-60 w-4 hover:bg-opacity-80 hover:w-6'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;