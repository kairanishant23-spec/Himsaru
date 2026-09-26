'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  onOpenCheckout: () => void;
}

export default function CartDrawer({ onOpenCheckout }: CartDrawerProps) {
  const {
    items,
    cartOpen,
    setCartOpen,
    updateQuantity,
    removeFromCart,
    totalItems,
    subtotal,
    shipping,
    discount,
    total,
  } = useCart();

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col justify-between overflow-hidden animate-slideIn">
        {/* Header */}
        <div className="p-6 bg-cream border-b border-mist flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-forest" />
            <h3 className="font-serif font-bold text-lg text-forest">Your Pahadi Basket</h3>
            <span className="text-xs bg-forest/10 text-forest px-2 py-0.5 rounded-full font-semibold">
              {totalItems} items
            </span>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 rounded-full text-stone hover:bg-warm transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free shipping bar */}
        <div className="bg-forest/5 px-6 py-2.5 border-b border-forest/10 text-xs text-forest flex items-center justify-between">
          {subtotal >= 1499 ? (
            <span className="font-semibold text-green-800">
              🎉 Free Pan-India Delivery Unlocked!
            </span>
          ) : (
            <span>
              Add <strong>₹{(1499 - subtotal).toLocaleString('en-IN')}</strong> more for FREE shipping
            </span>
          )}
          <span className="text-[10px] uppercase font-bold text-honey">Himalayan Direct</span>
        </div>

        {/* Body Items */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <span className="text-4xl mb-3">🏔️</span>
              <h4 className="font-serif font-bold text-forest text-lg mb-1">Your Basket is Empty</h4>
              <p className="text-xs text-stone max-w-xs mb-6">
                Explore our raw wild honey, handcrafted Bilona A2 ghee, and sacred mountain salts.
              </p>
              <button
                onClick={() => setCartOpen(false)}
                className="px-6 py-2.5 bg-forest text-white rounded-xl text-xs font-semibold hover:bg-forest2 transition shadow"
              >
                Browse Creations
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-3.5 bg-warm/30 rounded-2xl border border-mist/60"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover border border-mist shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-sm text-forest truncate">{item.name}</h4>
                  <p className="text-[11px] text-stone font-medium mb-1">
                    Variant: <span className="text-forest font-semibold">{item.variant}</span>
                  </p>
                  <p className="text-xs font-bold text-forest">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </p>
                </div>

                {/* Counter & Delete */}
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-stone hover:text-red-600 transition p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2 bg-white rounded-lg border border-mist px-2 py-0.5 shadow-sm">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-forest hover:text-amber text-xs font-bold"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-forest w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-forest hover:text-amber text-xs font-bold"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {items.length > 0 && (
          <div className="p-6 bg-cream border-t border-mist space-y-3">
            <div className="space-y-1.5 text-xs text-stone">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-text">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery (Pan-India)</span>
                <span className="font-semibold text-text">
                  {shipping === 0 ? 'FREE' : `₹${shipping}`}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-700 font-semibold">
                  <span>Special Mountain Promo</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-mist/60 text-sm font-bold text-forest">
                <span>Final Amount</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setCartOpen(false);
                onOpenCheckout();
              }}
              className="w-full py-4 bg-forest hover:bg-forest2 text-white font-semibold rounded-2xl text-sm transition shadow-lg flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout • ₹{total.toLocaleString('en-IN')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-stone">
              <ShieldCheck className="w-3.5 h-3.5 text-forest" />
              <span>UPI, Cards, Net Banking & Cash on Delivery Accepted</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
