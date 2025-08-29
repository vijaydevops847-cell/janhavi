import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  categoryId: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ categoryId }) => {
  const getProductsByCategory = (category: string) => {
    switch (category) {
      case 'gps':
        return [
          {
            id: 1,
            name: 'Vehicle GPS Tracker Pro',
            price: '₹4,999',
            description: 'Advanced GPS tracker with real-time monitoring, mobile app, and anti-theft features.',
            image: '/public/images/gps-tracker-1.jpg'
          },
          {
            id: 2,
            name: 'Bike GPS Tracker',
            price: '₹2,999',
            description: 'Compact GPS tracker designed specifically for motorcycles and bikes.',
            image: '/public/images/gps-tracker-2.jpg'
          },
          {
            id: 3,
            name: 'Fleet Management System',
            price: '₹8,999',
            description: 'Complete fleet management solution with multiple vehicle tracking.',
            image: '/public/images/gps-tracker-3.jpg'
          },
          {
            id: 4,
            name: 'Personal GPS Tracker',
            price: '₹1,999',
            description: 'Portable GPS tracker for personal safety and asset protection.',
            image: '/public/images/gps-tracker-4.jpg'
          }
        ];

      case 'pickles':
        return [
          {
            id: 5,
            name: 'Chicken Pickle',
            price: '₹299',
            quantity: '250g',
            description: 'Spicy and tangy chicken pickle made with authentic spices and traditional methods.',
            image: '/public/images/chicken-pickle.jpg'
          },
          {
            id: 6,
            name: 'Mutton Pickle',
            price: '₹399',
            quantity: '250g',
            description: 'Rich and flavorful mutton pickle with aromatic spices and tender meat.',
            image: '/public/images/mutton-pickle.jpg'
          },
          {
            id: 7,
            name: 'Fish Pickle',
            price: '₹249',
            quantity: '250g',
            description: 'Fresh fish pickle with coastal flavors and traditional preparation.',
            image: '/public/images/fish-pickle.jpg'
          },
          {
            id: 8,
            name: 'Prawn Pickle',
            price: '₹349',
            quantity: '250g',
            description: 'Delicious prawn pickle with perfect blend of spices and seafood taste.',
            image: '/public/images/prawn-pickle.jpg'
          }
        ];

      case 'ready-to-cook':
        return [
          {
            id: 9,
            name: 'Wheat Rotis',
            price: '₹89',
            quantity: '10 pieces',
            description: 'Fresh wheat rotis ready to cook in minutes. Soft and nutritious.',
            image: '/public/images/wheat-rotis.jpg'
          },
          {
            id: 10,
            name: 'Millet Chapathis',
            price: '₹129',
            quantity: '10 pieces',
            description: 'Healthy millet chapathis packed with nutrition and great taste.',
            image: '/public/images/millet-chapathis.jpg'
          },
          {
            id: 11,
            name: 'Jowar Rotis',
            price: '₹109',
            quantity: '10 pieces',
            description: 'Gluten-free jowar rotis perfect for health-conscious individuals.',
            image: '/public/images/jowar-rotis.jpg'
          },
          {
            id: 12,
            name: 'Mixed Grain Chapathis',
            price: '₹149',
            quantity: '10 pieces',
            description: 'Nutritious mixed grain chapathis with multiple cereals and millets.',
            image: '/public/images/mixed-grain-chapathis.jpg'
          }
        ];

      case 'millets':
        return [
          {
            id: 13,
            name: 'Foxtail Millet',
            price: '₹149',
            quantity: '1kg',
            description: 'Premium quality foxtail millet rich in protein and fiber.',
            image: '/public/images/foxtail-millet.jpg'
          },
          {
            id: 14,
            name: 'Pearl Millet (Bajra)',
            price: '₹129',
            quantity: '1kg',
            description: 'Nutritious pearl millet perfect for healthy meals and traditional recipes.',
            image: '/public/images/pearl-millet.jpg'
          },
          {
            id: 15,
            name: 'Finger Millet (Ragi)',
            price: '₹169',
            quantity: '1kg',
            description: 'Calcium-rich finger millet ideal for growing children and adults.',
            image: '/public/images/finger-millet.jpg'
          },
          {
            id: 16,
            name: 'Little Millet',
            price: '₹189',
            quantity: '1kg',
            description: 'Rare little millet with exceptional nutritional value and taste.',
            image: '/public/images/little-millet.jpg'
          },
          {
            id: 17,
            name: 'Millet Flour',
            price: '₹99',
            quantity: '500g',
            description: 'Fresh ground millet flour for healthy rotis and baking.',
            image: '/public/images/millet-flour.jpg'
          },
          {
            id: 18,
            name: 'Millet Cookies',
            price: '₹199',
            quantity: '200g',
            description: 'Delicious and healthy millet cookies perfect for snacking.',
            image: '/public/images/millet-cookies.jpg'
          }
        ];

      default:
        return [];
    }
  };

  const products = getProductsByCategory(categoryId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;