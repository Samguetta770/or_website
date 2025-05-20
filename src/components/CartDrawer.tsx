import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../stripe-config';
import { formatPrice } from '../lib/stripe';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { state, dispatch, total } = useCart();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      // Validate cart items
      if (state.items.length === 0) {
        throw new Error('העגלה ריקה');
      }

      // Create line items from cart items with validation
      const line_items = state.items.map(item => {
        const product = products.find(p => p.priceId === item.priceId);
        if (!product) throw new Error(`מוצר לא נמצא: ${item.priceId}`);
        if (item.quantity <= 0) throw new Error(`כמות לא תקינה עבור: ${product.name}`);
        
        return {
          price: item.priceId,
          quantity: item.quantity,
        };
      });

      // Call our Netlify Function
      const response = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ line_items }),
      });

      // ✅ Insère CE BLOC ICI (juste après fetch)
      const raw = await response.text();
  
      let data;
      try {
        data = JSON.parse(raw);
      } catch (e) {
        console.error("❌ Erreur de parsing JSON : réponse brute =", raw);
        throw new Error("Réponse backend non valide : " + raw);
      }
  
      // ✅ Ensuite, continue avec le redirect

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (!data.sessionId) {
        throw new Error('No session ID received from server');
      }

      // Redirect to Stripe Checkout
      const { error: redirectError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (redirectError) {
        throw redirectError;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setError(
        error instanceof Error 
          ? error.message 
          : 'אירעה שגיאה בתהליך התשלום. אנא נסה שוב.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute top-0 left-0 h-full w-96 max-w-full bg-white shadow-xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              עגלת קניות
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <p className="text-center text-gray-500">העגלה ריקה</p>
            ) : (
              <div className="space-y-4">
                {state.items.map(item => {
                  const product = products.find(p => p.priceId === item.priceId);
                  if (!product) return null;

                  return (
                    <div key={item.priceId} className="flex items-center gap-4 p-2 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-500">
                          {formatPrice(product.price, product.currency)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch({ type: 'UPDATE_QUANTITY', priceId: item.priceId, quantity: Math.max(0, item.quantity - 1) })}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch({ type: 'UPDATE_QUANTITY', priceId: item.priceId, quantity: item.quantity + 1 })}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          +
                        </button>
                        <button
                          onClick={() => dispatch({ type: 'REMOVE_ITEM', priceId: item.priceId })}
                          className="p-1 text-red-500 hover:bg-red-50 rounded"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="border-t p-4 space-y-4">
            {error && (
              <div className="text-red-500 text-sm text-center p-2 bg-red-50 rounded">
                {error}
              </div>
            )}
            <div className="flex justify-between items-center font-semibold">
              <span>סה"כ:</span>
              <span>{formatPrice(total, 'ILS')}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={state.items.length === 0 || isLoading}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'מעבד...' : 'לתשלום'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}