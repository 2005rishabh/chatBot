import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}    
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">Rs{product.price.toFixed(2)}00</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 transition-colors"
          >
            <ShoppingCart className="h-5 w-5 mr-1" />
            Add to Cart
          </button>
        </div>
        <div className="mt-2">
          <span className="text-sm text-gray-500">{product.category} • {product.brand}</span>
        </div>
      </div>
    </div>
  );
};