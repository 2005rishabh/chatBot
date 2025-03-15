import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const PaymentPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handlePayment = () => {
    alert(`Payment successful using ${paymentMethod}!`);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Choose Payment Method</h1>

      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Select Payment Method</label>

            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  value="credit-card"
                  checked={paymentMethod === 'credit-card'}
                  onChange={() => setPaymentMethod('credit-card')}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span>Credit Card</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span>PayPal</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span>UPI</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span>Cash on Delivery (COD)</span>
              </label>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Pay Now
          </button>

          <Link
            to="/cart"
            className="block text-center text-gray-600 hover:text-blue-500"
          >
            Back to Cart
          </Link>
        </form>
      </div>
    </div>
  );
};
