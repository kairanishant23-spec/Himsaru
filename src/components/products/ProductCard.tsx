'use client';

import React, { useState } from 'react';
import { Product, ProductVariant } from '@/types';
import { useCart } from '@/context/CartContext';
import { Star, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || { size: 'Standard', price: 999, mrp: 1200, sku: 'STD' }
  );
  const [added, setAdded] = useState(false);

  const discountPercent = Math.round(
    ((selectedVariant.mrp - selectedVariant.price) / selectedVariant.mrp) * 100
  );

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      onClick={() => onOpenDetails(product)}
      className="group bg-white rounded-3xl overflow-hidden border border-warm/60 shadow-card hover:shadow-cardLg transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
    >
      {/* Product Image & Badges */}
      <div className="relative aspect-square w-full bg-warm/30 overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider bg-forest text-honey px-2.5 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}

        {discountPercent > 0 && (
          <span className="absolute top-3 right-3 z-10 text-[10px] font-bold bg-amber text-white px-2 py-0.5 rounded-full shadow-sm">
            {discountPercent}% OFF
          </span>
        )}

        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-honey font-semibold mb-1">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>4.9</span>
            <span className="text-stone font-normal">(120+ Pahadi reviews)</span>
          </div>

          <h3 className="font-serif font-bold text-lg text-forest group-hover:text-moss transition">
            {product.name}
          </h3>
          <p className="text-xs text-ltxt font-medium mb-2">{product.hindi}</p>

          <p className="text-xs text-stone line-clamp-2 leading-relaxed mb-4">
            {product.desc}
          </p>
        </div>

        {/* Variant Pills & Add Button */}
        <div>
          {/* Variant selection */}
          {product.variants.length > 1 && (
            <div
              className="flex flex-wrap gap-1.5 mb-3.5"
              onClick={(e) => e.stopPropagation()}
            >
              {product.variants.map((v) => (
                <button
                  key={v.size}
                  onClick={() => setSelectedVariant(v)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                    selectedVariant.size === v.size
                      ? 'bg-forest text-white shadow-sm'
                      : 'bg-warm/70 text-text hover:bg-mist'
                  }`}
                >
                  {v.size}
                </button>
              ))}
            </div>
          )}

          {/* Price & Action */}
          <div className="flex items-center justify-between pt-2 border-t border-mist/40">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-bold text-forest">
                  ₹{selectedVariant.price.toLocaleString('en-IN')}
                </span>
                {selectedVariant.mrp > selectedVariant.price && (
                  <span className="text-xs text-stone line-through">
                    ₹{selectedVariant.mrp.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-moss font-semibold block">
                Vedic Purity Guaranteed
              </span>
            </div>

            <button
              onClick={handleAdd}
              className={`p-3 rounded-2xl flex items-center justify-center transition-all ${
                added
                  ? 'bg-green-700 text-white scale-105'
                  : 'bg-forest hover:bg-forest2 text-white shadow-md hover:shadow-lg'
              }`}
              title="Add to Basket"
              aria-label="Add to cart"
            >
              {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
