'use client';

import React, { useState } from 'react';
import { Product, ProductVariant } from '@/types';
import { useCart } from '@/context/CartContext';
import { Star, Heart, Check, ShoppingBag } from 'lucide-react';

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
  const [wishlisted, setWishlisted] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlisted(!wishlisted);
  };

  return (
    <div
      onClick={() => onOpenDetails(product)}
      className="group bg-white rounded-2xl overflow-hidden border border-mist shadow-sm hover:shadow-cardLg transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 h-full"
    >
      {/* Product Image & Badges */}
      <div className="relative aspect-square w-full bg-mist/30 overflow-hidden">
        {/* 100% Natural Tag */}
        <span className="absolute top-2.5 left-2.5 z-10 text-[10px] font-semibold bg-[#2d5a35]/90 text-white px-2.5 py-0.5 rounded-full shadow-sm">
          🌿 100% Natural
        </span>

        {/* Heart / Wishlist icon */}
        <button
          onClick={handleWishlist}
          aria-label="Wishlist"
          className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-white/85 hover:bg-white text-forest flex items-center justify-center transition shadow-sm"
        >
          <Heart className={`w-3.5 h-3.5 ${wishlisted ? 'fill-red-500 text-red-500' : 'text-forest'}`} />
        </button>

        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif font-bold text-sm sm:text-base text-forest group-hover:text-moss transition truncate">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-base sm:text-lg font-bold text-forest">
              ₹{selectedVariant.price.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-stone">
              /{selectedVariant.size}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-amber font-semibold mt-1.5 mb-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber" />
              ))}
            </div>
            <span className="text-[11px] text-stone">4.9 (120+)</span>
          </div>
        </div>

        {/* Full-width ADD TO CART button matching the reference design */}
        <button
          onClick={handleAdd}
          className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs transition-all shadow-sm flex items-center justify-center gap-2 ${
            added
              ? 'bg-green-700 text-white'
              : 'bg-[#1b3a20] hover:bg-[#254f2c] text-white'
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              <span>ADDED TO CART</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>ADD TO CART</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
