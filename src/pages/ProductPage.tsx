import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-blue-500 hover:text-blue-600 flex items-center justify-center"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <button
        onClick={() => navigate('/')}
        className="mb-8 text-blue-500 hover:text-blue-600 flex items-center"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Products
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            <div>
              <span className="text-3xl font-bold text-blue-600">
                Rs{product.price.toFixed(2)}00
              </span>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b pb-2">
                    <span className="font-medium text-gray-600">{key}:</span>
                    <span className="ml-2 text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};