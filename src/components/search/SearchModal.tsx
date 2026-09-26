'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types';
import { X, Search as SearchIcon, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectProduct }: SearchModalProps) {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.hindi.includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.cat.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-warm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6 border-b border-mist flex items-center gap-3">
          <SearchIcon className="w-5 h-5 text-forest shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Badri ghee, wild honey, pisyun loon, red rice..."
            className="w-full bg-transparent text-sm sm:text-base text-forest font-medium focus:outline-none placeholder:text-stone/60"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone hover:bg-warm transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {!query.trim() ? (
            <div className="py-8 text-center text-xs text-stone">
              <p className="font-semibold text-forest mb-2">Try searching for:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Badri Cow Ghee', 'Jamun Honey', 'Pisyun Loon', 'Red Rice', 'Jakhiya', 'Turmeric'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 bg-warm text-forest rounded-full text-xs font-semibold hover:bg-mist transition"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-12 text-center text-xs text-stone">
              <span className="text-3xl block mb-2">🏔️</span>
              <p className="font-semibold text-forest">No creations found matching &quot;{query}&quot;</p>
              <p className="mt-1">Try another search keyword or browse our main categories.</p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-3 rounded-2xl hover:bg-warm/40 border border-transparent hover:border-mist transition cursor-pointer"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 border border-mist"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-sm text-forest truncate">{product.name}</h4>
                    <p className="text-xs text-amber font-medium">{product.hindi}</p>
                    <p className="text-[11px] text-stone truncate">{product.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-forest">
                      ₹{product.variants[0]?.price.toLocaleString('en-IN')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone ml-auto mt-1" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
