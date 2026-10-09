'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { X, Search as SearchIcon, ArrowRight, ShoppingBag, Sparkles, Tag } from 'lucide-react';
import { useModalHistory } from '@/hooks/useModalHistory';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (product: Product) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectProduct }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('all');
  const { addToCart } = useCart();

  // Fix: mobile back button closes search modal instead of leaving the site
  const handleClose = useModalHistory(isOpen, onClose);

  // Precise search algorithm with scoring & multi-field relevance
  const filteredProducts = useMemo(() => {
    let pool = PRODUCTS;
    if (activeCat !== 'all') {
      pool = pool.filter((p) => p.cat === activeCat);
    }

    if (!query.trim()) {
      return activeCat === 'all' ? [] : pool;
    }

    const cleanQuery = query.trim().toLowerCase();
    const queryTokens = cleanQuery.split(/\s+/).filter(Boolean);

    // Score each product
    const scored = pool
      .map((p) => {
        let score = 0;
        const nameLower = p.name.toLowerCase();
        const hindiStr = p.hindi || '';
        const descLower = p.desc.toLowerCase();
        const catLower = p.cat.toLowerCase();
        const tagsLower = p.tags.map((t) => t.toLowerCase());
        const ingLower = (p.ing || '').toLowerCase();
        const benLower = (p.ben || []).join(' ').toLowerCase();

        // Exact name match
        if (nameLower === cleanQuery || hindiStr === cleanQuery) {
          score += 100;
        } else if (nameLower.startsWith(cleanQuery)) {
          score += 60;
        } else if (nameLower.includes(cleanQuery)) {
          score += 40;
        }

        // Token matches
        for (const token of queryTokens) {
          if (nameLower.includes(token)) score += 20;
          if (hindiStr.includes(token)) score += 25;
          if (catLower.includes(token)) score += 15;
          if (tagsLower.some((t) => t.includes(token))) score += 15;
          if (descLower.includes(token)) score += 10;
          if (ingLower.includes(token)) score += 5;
          if (benLower.includes(token)) score += 5;
        }

        return { product: p, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.product);

    return scored;
  }, [query, activeCat]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 pt-12 sm:pt-20 bg-black/65 backdrop-blur-md animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-mist flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-mist flex items-center gap-3 bg-cream/30">
          <SearchIcon className="w-5 h-5 text-forest shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Badri ghee, wild honey, pisyun loon, red rice, haldi..."
            className="w-full bg-transparent text-sm sm:text-base text-forest font-medium focus:outline-none placeholder:text-stone/60"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone hover:text-forest text-xs font-semibold px-2 py-1 rounded hover:bg-warm transition"
            >
              Clear
            </button>
          )}
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-stone hover:bg-warm transition shrink-0"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters Bar */}
        <div className="px-4 py-2.5 bg-warm/50 border-b border-mist flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar">
          <span className="text-stone text-[11px] font-semibold uppercase tracking-wider shrink-0 mr-1">
            Filter:
          </span>
          <button
            onClick={() => setActiveCat('all')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              activeCat === 'all'
                ? 'bg-forest text-white shadow-sm'
                : 'bg-white text-forest border border-mist hover:bg-mist'
            }`}
          >
            All
          </button>
          {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id === activeCat ? 'all' : c.id)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition flex items-center gap-1 ${
                activeCat === c.id
                  ? 'bg-forest text-white shadow-sm'
                  : 'bg-white text-forest border border-mist hover:bg-mist'
              }`}
            >
              <span>{c.icon}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1">
          {!query.trim() && activeCat === 'all' ? (
            <div className="py-8 text-center text-xs text-stone">
              <Sparkles className="w-6 h-6 text-honey mx-auto mb-2" />
              <p className="font-semibold text-forest text-sm mb-3">Popular Mountain Searches</p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['A2 Badri Ghee', 'Jamun Honey', 'Pisyun Loon', 'Alpine Red Rice', 'Pahadi Haldi', 'Bilona', 'Jakhiya'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 bg-cream hover:bg-warm text-forest rounded-full text-xs font-medium border border-mist transition"
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
              <p className="font-semibold text-forest text-sm">No mountain creations found</p>
              <p className="mt-1">
                Try searching by ingredient, health benefit, or switch the category filter.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-stone pb-1">
                <span>
                  Found <strong className="text-forest">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'creation' : 'creations'}
                </span>
                <span className="text-[11px] text-moss">Click to view details or add to bag</span>
              </div>

              {filteredProducts.map((product) => {
                const primaryVariant = product.variants[0];
                return (
                  <div
                    key={product.id}
                    className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white hover:bg-warm/30 border border-mist hover:border-gold/40 transition group shadow-sm hover:shadow"
                  >
                    {/* Clickable details section */}
                    <div
                      onClick={() => {
                        if (onSelectProduct) onSelectProduct(product);
                        handleClose();
                      }}
                      className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0 cursor-pointer"
                    >
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0 border border-mist"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif font-bold text-xs sm:text-sm text-forest truncate group-hover:text-gold transition">
                            {product.name}
                          </h4>
                          {product.badge && (
                            <span className="text-[9px] font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30 px-1.5 py-0.5 rounded shrink-0">
                              {product.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-amber font-medium truncate mt-0.5">
                          {product.hindi}
                        </p>
                        <p className="text-[11px] text-stone truncate max-w-sm">
                          {product.desc}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <Tag className="w-3 h-3 text-moss" />
                          <span className="text-[10px] text-moss font-semibold uppercase tracking-wider">
                            {product.cat}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="text-right shrink-0 flex flex-col items-end gap-1.5">
                      <span className="text-sm font-bold text-forest">
                        ₹{primaryVariant?.price.toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (primaryVariant) {
                            addToCart(product, primaryVariant);
                          }
                        }}
                        className="p-2 sm:px-3 sm:py-1.5 bg-forest hover:bg-[#23482a] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow transition hover:scale-105"
                        title="Add to Cart"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Add</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
