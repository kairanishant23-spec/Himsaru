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
import ProductDetailsModal from '@/components/products/ProductDetailsModal';
import SoulHero from '@/components/soul/SoulHero';
import DaughtersOfPahad from '@/components/soul/DaughtersOfPahad';
import MountainRitual from '@/components/soul/MountainRitual';
import PahadAtmosphere from '@/components/soul/PahadAtmosphere';
import { Product } from '@/types';
import { Heart, ArrowRight, ShieldCheck } from 'lucide-react';

export default function OurSoulPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [detailsProduct, setDetailsProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenMobileNav={() => setMobileNavOpen(true)}
      />

      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Hero */}
      <SoulHero />

      {/* Main Artisan Profiles */}
      <DaughtersOfPahad />

      {/* Mountain Ritual Stepper */}
      <MountainRitual />

      {/* Scenery Gallery & Impact */}
      <PahadAtmosphere />

      {/* Bottom CTA */}
      <section className="py-20 px-4 text-center bg-forest text-warm border-t border-forest2">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-amber/20 text-honey flex items-center justify-center mx-auto text-xl">
            ✨
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Taste the Purity. Honor the Makers.
          </h2>
          <p className="text-xs sm:text-sm text-warm/80 leading-relaxed max-w-lg mx-auto">
            Bring the healing essence of high-altitude Uttarakhand into your kitchen while empowering these brave mountain mothers.
          </p>
          <div className="pt-2">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber hover:bg-honey text-forest font-bold rounded-2xl text-sm transition shadow-lg"
            >
              <span>Shop Their Creations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

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
