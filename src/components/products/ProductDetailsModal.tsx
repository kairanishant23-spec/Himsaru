'use client';

import React, { useState } from 'react';
import { Product, ProductVariant } from '@/types';
import { useCart } from '@/context/CartContext';
import { X, Star, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { useModalHistory } from '@/hooks/useModalHistory';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailsModal({ product, onClose }: ProductDetailsModalProps) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [activeImg, setActiveImg] = useState<string>('');
  const [added, setAdded] = useState(false);

  // Fix: mobile back button closes product details instead of leaving the site
  const handleClose = useModalHistory(!!product, onClose);

  if (!product) return null;

  const currentVariant = selectedVariant || product.variants[0];
  const currentImg = activeImg || product.img;

  const handleAdd = () => {
    addToCart(product, currentVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-warm p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone hover:text-forest hover:bg-warm transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images */}
          <div>
            <div className="aspect-square rounded-2xl bg-warm/40 overflow-hidden mb-3 border border-mist">
              <img src={currentImg} alt={product.name} className="w-full h-full object-cover" />
            </div>

            {/* Thumbnails */}
            {product.imgs && product.imgs.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.imgs.map((im, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(im)}
                    className={`w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition ${
                      currentImg === im ? 'border-forest' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={im} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-4 p-3.5 bg-forest/5 rounded-2xl border border-forest/10 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-forest shrink-0" />
              <div className="text-xs text-forest">
                <p className="font-bold">100% Traditional Himalayan Origin</p>
                <p className="text-stone">Handcrafted by Uttarakhand women self-help collectives.</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-honey font-semibold mb-1">
                <Star className="w-4 h-4 fill-current" />
                <span>4.9 Rating</span>
                <span className="text-stone">· 100% Raw & Natural</span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-forest mb-1">{product.name}</h2>
              <p className="text-sm font-medium text-amber mb-3">{product.hindi}</p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-forest">
                  ₹{currentVariant.price.toLocaleString('en-IN')}
                </span>
                {currentVariant.mrp > currentVariant.price && (
                  <span className="text-sm text-stone line-through">
                    ₹{currentVariant.mrp.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                  Save ₹{(currentVariant.mrp - currentVariant.price).toLocaleString('en-IN')}
                </span>
              </div>

              {/* Variant Picker */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                  Choose Size / Net Weight
                </label>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.size}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                        currentVariant.size === v.size
                          ? 'bg-forest text-white shadow-md'
                          : 'bg-warm text-text hover:bg-mist'
                      }`}
                    >
                      {v.size} — ₹{v.price}
                    </button>
                  ))}
                </div>
              </div>

              {/* Long Description */}
              <div className="space-y-4 text-xs text-text mb-6">
                <div>
                  <h4 className="font-bold text-forest uppercase tracking-wider mb-1">About This Harvest</h4>
                  <p className="text-stone leading-relaxed">{product.longDesc}</p>
                </div>

                {product.ben && product.ben.length > 0 && (
                  <div>
                    <h4 className="font-bold text-forest uppercase tracking-wider mb-1">Key Benefits</h4>
                    <ul className="grid grid-cols-1 gap-1 text-stone">
                      {product.ben.map((b, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-honey">✓</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-mist/50">
              <button
                onClick={handleAdd}
                className={`w-full py-4 rounded-2xl font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2 ${
                  added
                    ? 'bg-green-700 text-white'
                    : 'bg-forest hover:bg-forest2 text-white'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Bag!
                  </>
                ) : (
                  <>
                    <span>Add {currentVariant.size} to Bag • ₹{currentVariant.price}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
