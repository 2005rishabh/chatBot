import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, MessageCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { items } = useCart();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">TechParts</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-600">{user.email}</span>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-gray-800 flex items-center"
                >
                  <User className="h-5 w-5 mr-1" />
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Signup
                </Link>
              </>
            )}
            
            <Link
              to="/cart"
              className="text-gray-600 hover:text-gray-800 flex items-center"
            >
              <ShoppingCart className="h-5 w-5 mr-1" />
              <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
                {items.length}
              </span>
            </Link>
            
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => {/* TODO: Open chatbot */}}
            >
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};