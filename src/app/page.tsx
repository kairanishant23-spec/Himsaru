'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import AuthModal from '@/components/auth/AuthModal';
import CartDrawer from '@/components/cart/CartDrawer';
import CheckoutModal from '@/components/checkout/CheckoutModal';
import SearchModal from '@/components/search/SearchModal';
import ProductCard from '@/components/products/ProductCard';
import ProductDetailsModal from '@/components/products/ProductDetailsModal';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Product } from '@/types';
import { ShieldCheck, Heart, Sparkles, Truck, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

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
      {/* Navigation */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenMobileNav={() => setMobileNavOpen(true)}
      />

      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest/5 border border-forest/15 text-forest text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-honey" />
          <span>Handcrafted by Uttarakhand Mountain Collectives</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-forest max-w-4xl leading-[1.15]">
          Pure Taste of the <span className="italic font-normal text-amber">Himalayas</span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-stone max-w-2xl font-normal leading-relaxed">
          Authentic Pahadi superfoods harvested above 1,500m. A2 Badri Cow Bilona Ghee, raw multi-floral forest honey, and rock herb salts hand-pounded by Uttarakhand women artisans.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#products"
            className="px-8 py-4 bg-forest hover:bg-forest2 text-white font-semibold rounded-2xl text-sm transition shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <span>Explore Sacred Harvests</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/our-soul"
            className="px-8 py-4 bg-warm hover:bg-mist text-forest border border-mist font-semibold rounded-2xl text-sm transition flex items-center gap-2"
          >
            <span>Read Our Soul Story</span>
            <span className="text-honey">❤️</span>
          </Link>
        </div>

        {/* Feature Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl">
          <div className="p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-mist/80 flex items-center gap-3">
            <span className="text-2xl">🧈</span>
            <div className="text-left">
              <h4 className="text-xs font-bold text-forest">Vedic Bilona Ghee</h4>
              <p className="text-[11px] text-stone">Raw milk overnight curd</p>
            </div>
          </div>

          <div className="p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-mist/80 flex items-center gap-3">
            <span className="text-2xl">🍯</span>
            <div className="text-left">
              <h4 className="text-xs font-bold text-forest">Raw Wild Honey</h4>
              <p className="text-[11px] text-stone">Never heat-treated</p>
            </div>
          </div>

          <div className="p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-mist/80 flex items-center gap-3">
            <span className="text-2xl">👩‍🌾</span>
            <div className="text-left">
              <h4 className="text-xs font-bold text-forest">Women Artisans</h4>
              <p className="text-[11px] text-stone">100% fair hill wages</p>
            </div>
          </div>

          <div className="p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-mist/80 flex items-center gap-3">
            <span className="text-2xl">📦</span>
            <div className="text-left">
              <h4 className="text-xs font-bold text-forest">Pan-India Delivery</h4>
              <p className="text-[11px] text-stone">Direct mountain dispatch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-honey block mb-2">
            Seasonal Harvests
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest">
            Sacred Creations from the Hills
          </h2>
          <p className="text-sm text-stone mt-3">
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

      {/* Story Banner */}
      <section className="bg-forest text-warm py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-honey font-bold block mb-2">
              Our Heartbeat
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Honoring the Women Who Nurture the Hills
            </h2>
            <p className="text-sm text-warm/80 leading-relaxed mb-6">
              When you open a jar of HIMSARU ghee or honey, you hold the heritage of women like Kamla Devi and Maya Rawat. By eliminating predatory middlemen, HIMSARU ensures these master artisans receive the dignity, recognition, and prosperity they deserve.
            </p>

            <Link
              href="/our-soul"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber hover:bg-honey text-forest font-bold rounded-2xl text-xs transition shadow-lg"
            >
              <span>Explore The Soul Experience</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-forest2">
            <img
              src="/images/himsaru_women_empowerment_1780214326121.png"
              alt="Himalayan Women Empowerment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Distribute / Wholesale section */}
      <section id="distribute" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-honey font-bold block mb-2">
          Partner With Us
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
          Become a HIMSARU Distributor
        </h2>
        <p className="text-sm text-stone mb-8 leading-relaxed">
          Bring the pure taste of Uttarakhand to organic stores, Ayurvedic centers, wellness clinics, and gourmet retailers across India.
        </p>

        <a
          href="https://wa.me/917900474328?text=Hello!%20I%20am%20interested%20in%20becoming%20a%20HIMSARU%20distributor."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-2xl text-xs transition shadow-md"
        >
          <span>💬 Chat with Distribution Team</span>
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-warm/50 border-t border-mist px-4 text-center">
        <p className="text-xs text-stone font-medium">Questions about an order or our purity standards?</p>
        <p className="text-sm font-bold text-forest mt-1">support@himsaru.com • +91 79004 74328</p>
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
