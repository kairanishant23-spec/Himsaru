'use client';

import React, { useState } from 'react';
import OfferBar from '@/components/layout/OfferBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import HeroCarousel from '@/components/home/HeroCarousel';
import TrustStrip from '@/components/home/TrustStrip';
import CategoryGrid from '@/components/home/CategoryGrid';
import WhatsAppBanner from '@/components/home/WhatsAppBanner';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CustomerTestimonials from '@/components/home/CustomerTestimonials';
import SashaktNariStory from '@/components/home/SashaktNariStory';
import ProductCard from '@/components/products/ProductCard';
import ProductDetailsModal from '@/components/products/ProductDetailsModal';
import AuthModal from '@/components/auth/AuthModal';
import CartDrawer from '@/components/cart/CartDrawer';
import CheckoutModal from '@/components/checkout/CheckoutModal';
import SearchModal from '@/components/search/SearchModal';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Product } from '@/types';

export default function HomePage() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [detailsProduct, setDetailsProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCat === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.cat === selectedCat);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Sticky Header: Offer Announcement Bar + Brand Navbar */}
      <header className="sticky top-0 left-0 right-0 z-40 w-full shadow-md">
        <OfferBar />
        <Navbar
          onOpenSearch={() => setSearchOpen(true)}
          onOpenMobileNav={() => setMobileNavOpen(true)}
        />
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* 1. Hero Carousel with 11 Slides, Autoplay, Controls, Stats & Wave */}
      <HeroCarousel />

      {/* 2. Trust Strip (Free shipping, COD, 100% Natural, Ships 24h) */}
      <TrustStrip />

      {/* 3. Browse by Category (6 Visual Collection Cards) */}
      <CategoryGrid onSelectCategory={(catId) => setSelectedCat(catId)} />

      {/* 4. Catalog / Most Loved Harvests */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-[11px] font-semibold tracking-widest uppercase mb-3">
            <span>✨ Most Loved</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest">
            Sacred Creations from the Hills
          </h2>
          <p className="text-xs sm:text-sm text-stone mt-3">
            Pure, lab-tested natural ingredients sourced directly from smallholder terrace farmers.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
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
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpenDetails={(prod) => setDetailsProduct(prod)}
            />
          ))}
        </div>
      </section>

      {/* 5. Direct Founder WhatsApp Access Banner */}
      <WhatsAppBanner />

      {/* 6. Why Choose Us (The HIMSARU Promise) */}
      <WhyChooseUs />

      {/* 7. Customer Love Letters / Testimonials */}
      <CustomerTestimonials />

      {/* 8. Born in the Mountains Story + Newsletter Signup */}
      <SashaktNariStory />

      {/* 9. Distribute / Partner Section */}
      <section id="distribute" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-honey font-bold block mb-2">
          Partner With Us
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
          Become a HIMSARU Distributor
        </h2>
        <p className="text-xs sm:text-sm text-stone mb-8 leading-relaxed">
          Bring the pure taste of Uttarakhand to organic stores, Ayurvedic centers, wellness clinics, and gourmet retailers across India.
        </p>

        <a
          href="https://wa.me/917900474328?text=Hello!%20I%20am%20interested%20in%20becoming%20a%20HIMSARU%20distributor."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-2xl text-xs transition shadow-md hover:shadow-lg"
        >
          <span>💬 Chat with Distribution Team</span>
        </a>
      </section>

      {/* 10. Direct Mountain Contact Section */}
      <section id="contact" className="py-16 bg-warm/50 border-t border-mist px-4 text-center">
        <p className="text-xs text-stone font-medium">Questions about an order or our purity standards?</p>
        <p className="text-sm font-bold text-forest mt-1">himsaru2025@gmail.com • +91 79004 74328 • +91 90123 24850</p>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
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
