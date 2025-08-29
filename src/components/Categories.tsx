import React from 'react';
import ProductCard from './ProductCard';

const Categories: React.FC = () => {
  const gpsTrackers = [
    {
      id: 1,
      name: "Vehicle GPS Tracker Pro",
      price: "₹2,999",
      description: "Advanced GPS tracking with real-time location, geofencing, and mobile app support. Perfect for cars and bikes.",
      image: "/public/images/gps-tracker-1.jpg"
    },
    {
      id: 2,
      name: "Fleet Management Tracker",
      price: "₹4,499",
      description: "Professional grade GPS tracker for fleet management with detailed reports and analytics.",
      image: "/public/images/gps-tracker-2.jpg"
    },
    {
      id: 3,
      name: "Personal GPS Tracker",
      price: "₹1,899",
      description: "Compact and reliable GPS tracker for personal vehicles with long battery life.",
      image: "/public/images/gps-tracker-3.jpg"
    },
    {
      id: 4,
      name: "Heavy Vehicle Tracker",
      price: "₹5,999",
      description: "Heavy-duty GPS tracker designed for trucks and commercial vehicles with robust features.",
      image: "/public/images/gps-tracker-4.jpg"
    }
  ];

  const pickles = [
    {
      id: 5,
      name: "Chicken Pickle",
      price: "₹299",
      quantity: "500g",
      description: "Authentic homemade chicken pickle with traditional spices. Rich in flavor and made with fresh ingredients.",
      image: "/public/images/chicken-pickle.jpg"
    },
    {
      id: 6,
      name: "Mutton Pickle",
      price: "₹399",
      quantity: "500g",
      description: "Premium mutton pickle prepared with tender meat and aromatic spices. A true delicacy for meat lovers.",
      image: "/public/images/mutton-pickle.jpg"
    },
    {
      id: 7,
      name: "Fish Pickle",
      price: "₹249",
      quantity: "500g",
      description: "Fresh fish pickle with coastal flavors. Made with the finest fish and traditional coastal spices.",
      image: "/public/images/fish-pickle.jpg"
    },
    {
      id: 8,
      name: "Prawn Pickle",
      price: "₹349",
      quantity: "500g",
      description: "Delicious prawn pickle with a perfect blend of spices. A seafood lover's paradise.",
      image: "/public/images/prawn-pickle.jpg"
    }
  ];

  const readyToCook = [
    {
      id: 9,
      name: "Wheat Rotis",
      price: "₹89",
      quantity: "10 pieces",
      description: "Fresh wheat rotis ready to cook. Just heat and serve. Perfect for busy lifestyles.",
      image: "/public/images/wheat-rotis.jpg"
    },
    {
      id: 10,
      name: "Millet Chapathis",
      price: "₹129",
      quantity: "10 pieces",
      description: "Healthy millet chapathis packed with nutrition. Ready to cook in minutes.",
      image: "/public/images/millet-chapathis.jpg"
    },
    {
      id: 11,
      name: "Jowar Rotis",
      price: "₹119",
      quantity: "10 pieces",
      description: "Nutritious jowar rotis for a healthy meal. High in fiber and protein.",
      image: "/public/images/jowar-rotis.jpg"
    },
    {
      id: 12,
      name: "Mixed Grain Chapathis",
      price: "₹149",
      quantity: "10 pieces",
      description: "Multi-grain chapathis with a blend of healthy grains. Perfect for health-conscious families.",
      image: "/public/images/mixed-grain-chapathis.jpg"
    }
  ];

  const millets = [
    {
      id: 13,
      name: "Foxtail Millet",
      price: "₹149",
      quantity: "1kg",
      description: "Premium quality foxtail millet. Rich in protein and perfect for healthy cooking.",
      image: "/public/images/foxtail-millet.jpg"
    },
    {
      id: 14,
      name: "Pearl Millet",
      price: "₹129",
      quantity: "1kg",
      description: "High-quality pearl millet packed with nutrients. Great for traditional recipes.",
      image: "/public/images/pearl-millet.jpg"
    },
    {
      id: 15,
      name: "Finger Millet",
      price: "₹169",
      quantity: "1kg",
      description: "Calcium-rich finger millet for strong bones and healthy living.",
      image: "/public/images/finger-millet.jpg"
    },
    {
      id: 16,
      name: "Little Millet",
      price: "₹159",
      quantity: "1kg",
      description: "Nutrient-dense little millet perfect for diabetic-friendly meals.",
      image: "/public/images/little-millet.jpg"
    },
    {
      id: 17,
      name: "Millet Flour",
      price: "₹99",
      quantity: "500g",
      description: "Fresh millet flour for healthy baking and cooking. Gluten-free and nutritious.",
      image: "/public/images/millet-flour.jpg"
    },
    {
      id: 18,
      name: "Millet Cookies",
      price: "₹199",
      quantity: "250g",
      description: "Delicious and healthy millet cookies. Perfect snack for kids and adults.",
      image: "/public/images/millet-cookies.jpg"
    }
  ];

  const CategorySection: React.FC<{ title: string; products: any[]; id: string; description: string }> = ({ title, products, id, description }) => (
    <div id={id} className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our diverse range of quality products designed to meet your everyday needs. 
            From advanced technology to traditional delicacies, we have something for everyone.
          </p>
        </div>

        <CategorySection
          id="category-gps"
          title="GPS Trackers"
          description="Advanced GPS tracking solutions for vehicles with real-time monitoring and mobile app support."
          products={gpsTrackers}
        />

        <CategorySection
          id="category-pickles"
          title="Non-Veg Pickles"
          description="Authentic homemade non-vegetarian pickles made with traditional recipes and fresh ingredients."
          products={pickles}
        />

        <CategorySection
          id="category-ready-to-cook"
          title="Ready to Cook"
          description="Convenient and healthy ready-to-cook rotis and chapathis for your busy lifestyle."
          products={readyToCook}
        />

        <CategorySection
          id="category-millets"
          title="Millets & Millet Products"
          description="Premium quality millets and millet-based products for a healthier and more nutritious diet."
          products={millets}
        />
      </div>
    </section>
  );
};

export default Categories;