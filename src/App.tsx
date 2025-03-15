import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { PaymentPage } from './pages/PaymentPage';
import { ChatbotButton } from './components/ChatbotButton';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/payment" element={<PaymentPage />} />
              </Routes>
            </main>
            <ChatbotButton />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
