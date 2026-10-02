'use client';

import React, { useState, useMemo } from 'react';
import OfferBar from '@/components/layout/OfferBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import ProductCard from '@/components/products/ProductCard';
import ProductDetailsModal from '@/components/products/ProductDetailsModal';
import AuthModal from '@/components/auth/AuthModal';
import CartDrawer from '@/components/cart/CartDrawer';
import CheckoutModal from '@/components/checkout/CheckoutModal';
import SearchModal from '@/components/search/SearchModal';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Product } from '@/types';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [detailsProduct, setDetailsProduct] = useState<Product | null>(null);

  const displayedProducts = useMemo(() => {
    let list = selectedCat === 'all'
      ? [...PRODUCTS]
      : PRODUCTS.filter((p) => p.cat === selectedCat);

    if (sortBy === 'price-asc') {
      list.sort((a, b) => (a.variants[0]?.price || 0) - (b.variants[0]?.price || 0));
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => (b.variants[0]?.price || 0) - (a.variants[0]?.price || 0));
    }
    return list;
  }, [selectedCat, sortBy]);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Sticky Header: Offer Bar + Navbar */}
      <header className="sticky top-0 left-0 right-0 z-40 w-full shadow-md">
        <OfferBar />
        <Navbar
          onOpenSearch={() => setSearchOpen(true)}
          onOpenMobileNav={() => setMobileNavOpen(true)}
        />
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-[11px] font-semibold tracking-widest uppercase mb-3">
            <span>✨ Pure Mountain Harvests</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest">
            All Creations from the Hills
          </h1>
          <p className="text-xs sm:text-sm text-stone mt-3 leading-relaxed">
            Directly from smallholder terrace farmers &amp; women artisans of Uttarakhand. Certified pure, lab-tested, and free of additives.
          </p>
        </div>

        {/* Filter Bar & Sorting */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-mist">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-semibold transition-all ${
                  selectedCat === c.id
                    ? 'bg-forest text-white shadow-md scale-105'
                    : 'bg-white text-forest border border-mist hover:bg-warm'
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.label}</span>
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-xs font-medium text-forest self-end md:self-center">
            <ArrowUpDown className="w-3.5 h-3.5 text-stone" />
            <span className="text-stone">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-mist rounded-xl px-3 py-1.5 text-xs text-forest focus:outline-none focus:border-forest"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpenDetails={(prod) => setDetailsProduct(prod)}
            />
          ))}
        </div>

        {displayedProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-mist my-8">
            <span className="text-4xl block mb-2">🏔</span>
            <h3 className="font-serif text-lg font-bold text-forest">No products in this category yet</h3>
            <p className="text-xs text-stone mt-1">Check back soon for seasonal harvests!</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AuthModal />
      <CartDrawer onOpenCheckout={() => setCheckoutOpen(true)} />
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(p) => setDetailsProduct(p)}
      />
      <ProductDetailsModal
        product={detailsProduct}
        onClose={() => setDetailsProduct(null)}
      />
    </div>
  );
}
