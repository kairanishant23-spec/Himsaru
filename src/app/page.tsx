'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import OfferBar from '@/components/layout/OfferBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import HeroCarousel from '@/components/home/HeroCarousel';
import TrustStrip from '@/components/home/TrustStrip';
import CategoryGrid from '@/components/home/CategoryGrid';
import OurStorySection from '@/components/home/OurStorySection';
import OurImpactSection from '@/components/home/OurImpactSection';
import CustomerTestimonials from '@/components/home/CustomerTestimonials';
import StayConnected from '@/components/home/StayConnected';
import ProductCard from '@/components/products/ProductCard';
import ProductDetailsModal from '@/components/products/ProductDetailsModal';
import AuthModal from '@/components/auth/AuthModal';
import CartDrawer from '@/components/cart/CartDrawer';
import CheckoutModal from '@/components/checkout/CheckoutModal';
import SearchModal from '@/components/search/SearchModal';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types';

export default function HomePage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [detailsProduct, setDetailsProduct] = useState<Product | null>(null);

  // Best Sellers Carousel State
  const [sliderIndex, setSliderIndex] = useState(0);
  const CARDS_PER_VIEW = 4;
  const maxIndex = Math.max(0, PRODUCTS.length - CARDS_PER_VIEW);

  const prevSlide = useCallback(() => {
    setSliderIndex((i) => Math.max(0, i - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setSliderIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  return (
    <div className="min-h-screen bg-cream flex flex-col">

      {/* 1. ANNOUNCEMENT BAR & NAVBAR (Sticky Header) */}
      <header className="sticky top-0 left-0 right-0 z-40 w-full shadow-md">
        <OfferBar />
        <Navbar
          onOpenSearch={() => setSearchOpen(true)}
          onOpenMobileNav={() => setMobileNavOpen(true)}
        />
      </header>

      {/* MOBILE NAV DRAWER */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* 2. HERO CAROUSEL (Kept intact with slides, controls & stats) */}
      <HeroCarousel />

      {/* 3. TRUST STRIP (4 Badges: 100% Natural, No Adulteration, Women Empowerment, Uttarakhand) */}
      <TrustStrip />

      {/* 4. OUR COLLECTION (Circular Category Icons with Arrow) */}
      <CategoryGrid onSelectCategory={() => {
        const el = document.getElementById('bestsellers');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* 5. BEST SELLERS (Product Carousel with Left/Right Arrows & Dots) */}
      <section id="bestsellers" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-cream border-b border-mist/70">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest leading-tight">
                Best Sellers
              </h2>
              <p className="text-xs sm:text-sm text-stone mt-1">
                Our customers&apos; favourites, straight from the mountains.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-forest hover:text-gold transition shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Carousel Slider */}
          <div className="relative">
            {/* Prev Arrow */}
            <button
              onClick={prevSlide}
              disabled={sliderIndex === 0}
              aria-label="Previous products"
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-mist shadow-md flex items-center justify-center text-forest hover:bg-warm disabled:opacity-30 disabled:cursor-not-allowed transition hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Track */}
            <div className="overflow-hidden px-1 py-2">
              <div
                className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(calc(-${sliderIndex} * (100% / ${CARDS_PER_VIEW} + 24px / ${CARDS_PER_VIEW})))`
                }}
              >
                {PRODUCTS.map((p) => (
                  <div
                    key={p.id}
                    className="flex-none w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
                  >
                    <ProductCard
                      product={p}
                      onOpenDetails={(prod) => setDetailsProduct(prod)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              disabled={sliderIndex >= maxIndex}
              aria-label="Next products"
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-mist shadow-md flex items-center justify-center text-forest hover:bg-warm disabled:opacity-30 disabled:cursor-not-allowed transition hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot Indicators */}
          {PRODUCTS.length > CARDS_PER_VIEW && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSliderIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === sliderIndex
                      ? 'w-6 h-2 bg-forest'
                      : 'w-2 h-2 bg-mist hover:bg-stone'
                  }`}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 6. OUR STORY (Empowering Women. Preserving Traditions. 2-column with stats) */}
      <OurStorySection />

      {/* 7. OUR IMPACT (Real People. Lasting Change. 4 Photo Cards) */}
      <OurImpactSection />

      {/* 8. WHAT OUR CUSTOMERS SAY (Loved by Many, Trusted by All) */}
      <CustomerTestimonials />

      {/* 9. STAY CONNECTED (Mountain Backdrop Newsletter Banner) */}
      <StayConnected />

      {/* 10. FOOTER (Dark Green 4-column layout) */}
      <Footer />

      {/* MODALS & DRAWERS (Search, Cart, Checkout, Auth, Details) */}
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
