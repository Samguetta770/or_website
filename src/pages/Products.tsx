import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { products } from '../stripe-config';
import { formatPrice } from '../lib/stripe';
import { useCart } from '../context/CartContext';
import CartDrawer from '../components/CartDrawer';

function Products() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { dispatch } = useCart();

  const handleAddToCart = (priceId: string) => {
    dispatch({ type: 'ADD_ITEM', priceId });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">המוצרים שלנו</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card bg-white rounded-xl shadow-md overflow-hidden" data-aos="fade-up">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex flex-col h-full">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mt-auto">
                  <div className="text-2xl font-bold mb-4 text-primary">
                    {formatPrice(product.price, product.currency)}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product.priceId)}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    הוספה לסל
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default Products;
