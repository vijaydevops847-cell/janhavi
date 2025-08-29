import React, { useState } from 'react';
import { MessageCircle, Minus, Plus } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  basePrice: number;
  unit: string;
  minWeight: number;
  maxWeight: number;
  weightStep: number;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedWeight, setSelectedWeight] = useState(product.minWeight);

  const calculatePrice = (weight: number) => {
    const totalPrice = (product.basePrice * weight).toFixed(0);
    return `₹${totalPrice}`;
  };

  const increaseWeight = () => {
    if (selectedWeight < product.maxWeight) {
      setSelectedWeight(selectedWeight + product.weightStep);
    }
  };

  const decreaseWeight = () => {
    if (selectedWeight > product.minWeight) {
      setSelectedWeight(selectedWeight - product.weightStep);
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weight = parseFloat(e.target.value);
    if (weight >= product.minWeight && weight <= product.maxWeight) {
      setSelectedWeight(weight);
    }
  };

  const handleWhatsAppOrder = () => {
    const finalPrice = calculatePrice(selectedWeight);
    const message = `Hi! I'd like to order:\n\nProduct: ${product.name}\nWeight: ${selectedWeight}${product.unit}\nTotal Price: ${finalPrice}\n\nPlease confirm availability and delivery details. Thank you!`;
    const whatsappUrl = `https://wa.me/${import.meta.env.VITE_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 transform hover:-translate-y-6 hover:shadow-2xl hover:shadow-orange-500/30 cursor-pointer group border border-gray-100 hover:border-orange-300 relative">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 via-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-8 group-hover:translate-x-0 shadow-lg">
          <span className="text-sm font-bold">Order Now</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 via-transparent to-pink-400/0 group-hover:from-orange-400/10 group-hover:to-pink-400/10 transition-all duration-1000" />
      </div>
      
      <div className="p-6 group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:via-red-50 group-hover:to-pink-50 transition-all duration-700">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-700 transition-all duration-500 group-hover:scale-105">{product.name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">{product.description}</p>
        
        {/* Weight Selection */}
        <div className="mb-4 p-4 bg-gray-50 rounded-xl group-hover:bg-white transition-colors duration-500">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Select Weight ({product.unit})
          </label>
          
          <div className="flex items-center space-x-4 mb-3">
            <button
              onClick={decreaseWeight}
              disabled={selectedWeight <= product.minWeight}
              className="w-10 h-10 bg-orange-100 hover:bg-orange-200 disabled:bg-gray-100 disabled:text-gray-400 text-orange-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:hover:scale-100"
            >
              <Minus className="h-4 w-4" />
            </button>
            
            <input
              type="number"
              value={selectedWeight}
              onChange={handleWeightChange}
              min={product.minWeight}
              max={product.maxWeight}
              step={product.weightStep}
              className="flex-1 text-center py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-semibold text-lg"
            />
            
            <button
              onClick={increaseWeight}
              disabled={selectedWeight >= product.maxWeight}
              className="w-10 h-10 bg-orange-100 hover:bg-orange-200 disabled:bg-gray-100 disabled:text-gray-400 text-orange-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:hover:scale-100"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          <div className="text-xs text-gray-500 text-center">
            Range: {product.minWeight}{product.unit} - {product.maxWeight}{product.unit}
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-2xl font-bold text-orange-600 group-hover:text-orange-700 transition-all duration-500 group-hover:scale-110">
              {calculatePrice(selectedWeight)}
            </span>
            <span className="text-gray-500 ml-2 group-hover:text-gray-600 transition-colors duration-500">
              ({selectedWeight}{product.unit})
            </span>
          </div>
        </div>
        
        <button
          onClick={handleWhatsAppOrder}
          className="w-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-700 flex items-center justify-center space-x-3 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-green-500/40 cursor-pointer relative overflow-hidden group/button"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-700" />
          <MessageCircle className="h-6 w-6 transition-transform duration-500 group-hover/button:rotate-12 group-hover/button:scale-110 relative z-10" />
          <span className="text-lg relative z-10 transition-transform duration-500 group-hover/button:scale-105">Order via WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;