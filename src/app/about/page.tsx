'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import OfferBar from '@/components/layout/OfferBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import AuthModal from '@/components/auth/AuthModal';
import CartDrawer from '@/components/cart/CartDrawer';
import CheckoutModal from '@/components/checkout/CheckoutModal';
import SearchModal from '@/components/search/SearchModal';
import { ArrowRight, Sparkles, MapPin, Heart, Users, ShieldCheck, Leaf } from 'lucide-react';

export default function AboutPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

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

      <main className="flex-1">
        {/* 1. About Hero Section with Authentic Image Stack */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Image Stack */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="/images/himalaya_peak.png"
                  alt="Sacred Himalayan Peaks"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Inset Mini Image */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-36 sm:w-48 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                <img
                  src="/images/himalaya_ridge.png"
                  alt="Pahadi Terrace Slopes"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Founded Badge */}
              <div className="absolute -top-4 -left-4 bg-[#1b3a20] text-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-honey/30 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl">🏔</span>
                <div>
                  <span className="block font-serif font-bold text-base sm:text-lg text-honey leading-tight">
                    EST. 2025
                  </span>
                  <span className="block text-[10px] text-white/75 uppercase tracking-wider font-semibold">
                    Founded with Love
                  </span>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest/10 border border-forest/20 text-forest text-xs font-semibold uppercase tracking-widest">
                <Leaf className="w-3.5 h-3.5 text-moss" />
                <span>Our Story</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest leading-tight">
                Born in the <span className="text-gold">Mountains</span>,<br />
                Made with <span className="italic font-normal text-honey">Love</span>
              </h1>

              <div className="w-16 h-1 bg-gradient-to-r from-honey to-transparent rounded" />

              <p className="text-xs sm:text-sm text-stone leading-relaxed">
                HIMSARU was born from a deep love for Uttarakhand — its sacred land, its resilient people, and its age-old Himalayan traditions. <strong className="text-forest">&ldquo;Him&rdquo;</strong> for the eternal snows that kiss the sky, and <strong className="text-forest">&ldquo;Saru&rdquo;</strong> for the timeless cedar trees blanketing these majestic valleys.
              </p>

              <p className="text-xs sm:text-sm text-stone leading-relaxed">
                Our startup was founded by Vishal and Ajay — sons of Uttarakhand who dreamed of bringing authentic Pahadi flavors directly to every Indian home, while creating dignified, sustainable livelihoods for mountain artisan families.
              </p>

              <p className="text-xs sm:text-sm text-stone leading-relaxed">
                Every jar of A2 Badri cow ghee, every crystal of Pisyu Loon herbal salt, and every golden drop of wild honey is handcrafted using traditional methods passed down through generations. No chemical shortcuts. No compromises. Pure mountain goodness.
              </p>

              {/* Values Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white rounded-2xl border border-mist shadow-sm">
                  <div className="text-2xl mb-1.5">🌿</div>
                  <h4 className="font-serif font-bold text-sm text-forest">100% Natural</h4>
                  <p className="text-[11px] text-stone mt-0.5">Zero chemicals, preservatives or artificial additives.</p>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-mist shadow-sm">
                  <div className="text-2xl mb-1.5">🏔</div>
                  <h4 className="font-serif font-bold text-sm text-forest">Mountain Origins</h4>
                  <p className="text-[11px] text-stone mt-0.5">Sourced from 1,500m+ altitude valleys of Uttarakhand.</p>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-mist shadow-sm">
                  <div className="text-2xl mb-1.5">👩‍🌾</div>
                  <h4 className="font-serif font-bold text-sm text-forest">Community Powered</h4>
                  <p className="text-[11px] text-stone mt-0.5">Crafted with care by local women artisan collectives.</p>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-mist shadow-sm">
                  <div className="text-2xl mb-1.5">💚</div>
                  <h4 className="font-serif font-bold text-sm text-forest">Community First</h4>
                  <p className="text-[11px] text-stone mt-0.5">Every purchase directly supports Pahadi families.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest hover:bg-[#23482a] text-white font-semibold text-xs rounded-2xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 text-honey" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Journey Timeline */}
        <section className="py-20 bg-warm/60 border-y border-mist">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-honey font-bold block mb-1">
                📖 Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
                The <span className="text-gold">HIMSARU</span> Story
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-honey to-transparent mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-mist shadow-sm relative">
                <div className="w-10 h-10 rounded-full bg-forest text-honey font-bold text-xs flex items-center justify-center mb-4 shadow">
                  2023
                </div>
                <h3 className="font-serif font-bold text-base text-forest mb-2">The Dream Takes Shape</h3>
                <p className="text-xs text-stone leading-relaxed">
                  Vishal and Ajay, growing up in Uttarakhand, realised the world deserves to taste the unadulterated purity their mountains produce.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-mist shadow-sm relative">
                <div className="w-10 h-10 rounded-full bg-forest text-honey font-bold text-xs flex items-center justify-center mb-4 shadow">
                  2024
                </div>
                <h3 className="font-serif font-bold text-base text-forest mb-2">The First Batches</h3>
                <p className="text-xs text-stone leading-relaxed">
                  Partnering with local village women, the first pure batches of A2 Badri Ghee and Pisyu Loon are hand-churned and stone-ground.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-mist shadow-sm relative">
                <div className="w-10 h-10 rounded-full bg-gold text-forest font-bold text-xs flex items-center justify-center mb-4 shadow">
                  2025
                </div>
                <h3 className="font-serif font-bold text-base text-forest mb-2">HIMSARU is Born</h3>
                <p className="text-xs text-stone leading-relaxed">
                  HIMSARU officially launches with authentic Pahadi products and a core promise — pure, uncompromised Himalayan goodness.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-mist shadow-sm relative">
                <div className="w-10 h-10 rounded-full bg-forest2 text-white font-bold text-xs flex items-center justify-center mb-4 shadow">
                  Future
                </div>
                <h3 className="font-serif font-bold text-base text-forest mb-2">Growing the Family</h3>
                <p className="text-xs text-stone leading-relaxed">
                  Expanding to more mountain harvests, supporting more women artisans, and building a nationwide distribution network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Leadership & Founders Section */}
        <section className="py-20 bg-[#1b3a20] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-honey/15 border border-honey/30 text-honey text-[11px] font-semibold tracking-widest uppercase mb-3">
                <span>🤝 Leadership</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                The <span className="text-honey">Co-Founders</span>
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-honey to-transparent mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Vishal */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm text-center space-y-4 hover:border-honey/40 transition-all">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-gold to-honey flex items-center justify-center text-4xl shadow-lg border-2 border-white/20">
                  🏔
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Vishal Kohli</h3>
                  <span className="text-xs font-semibold text-honey uppercase tracking-wider block mt-0.5">
                    Co-Founder &amp; CEO
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  A proud son of Uttarakhand driving HIMSARU&apos;s mission, farmer partnerships, and ground operations from the valleys up.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/917900474328"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-honey hover:text-white font-medium transition"
                  >
                    <span>Chat with Vishal on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Ajay */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm text-center space-y-4 hover:border-honey/40 transition-all">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber to-honey flex items-center justify-center text-4xl shadow-lg border-2 border-white/20">
                  🌿
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Ajay Aryan</h3>
                  <span className="text-xs font-semibold text-honey uppercase tracking-wider block mt-0.5">
                    Co-Founder &amp; CMO
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Born in a Pahadi village, Ajay brings authentic storytelling, community empowerment, and brand passion to every jar of HIMSARU.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/919012324850"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-honey hover:text-white font-medium transition"
                  >
                    <span>Chat with Ajay on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AuthModal />
      <CartDrawer onOpenCheckout={() => setCheckoutOpen(true)} />
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
