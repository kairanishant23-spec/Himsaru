'use client';

import React, { useState } from 'react';
import OfferBar from '@/components/layout/OfferBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import AuthModal from '@/components/auth/AuthModal';
import CartDrawer from '@/components/cart/CartDrawer';
import CheckoutModal from '@/components/checkout/CheckoutModal';
import SearchModal from '@/components/search/SearchModal';
import { CheckCircle, Send, MessageCircle, Package, Truck, Megaphone, TrendingUp, Check } from 'lucide-react';

export default function DistributePage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Form state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [cityState, setCityState] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    // Build prefilled WhatsApp message as instant fallback
    const text = encodeURIComponent(
      `Hello HIMSARU Team!\nI would like to apply as a distributor.\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Location:* ${cityState}\n*Business Type:* ${businessType}\n*Message:* ${message}`
    );
    const waUrl = `https://wa.me/917900474328?text=${text}`;

    setSubmitted(true);
    // Open WhatsApp in new tab for direct instant engagement
    window.open(waUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#132817] text-white flex flex-col">
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

      <main className="flex-1 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Page Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-honey/15 border border-honey/30 text-honey text-xs font-semibold uppercase tracking-widest mb-3">
            <span>🤝 Partnership</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            Become a <span className="text-honey">Distributor</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-honey to-transparent mx-auto mt-4 rounded" />
          <p className="text-xs sm:text-sm text-white/70 mt-3">
            Bring the purest gifts of Uttarakhand to conscious households across your region.
          </p>
        </div>

        {/* 2-Column Section: Why Partner & Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Why Partner with HIMSARU? */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Why Partner with <span className="text-honey">HIMSARU?</span>
            </h2>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              Be part of a purpose-driven brand delivering 100% authentic Pahadi products and building a deeply loyal, health-conscious customer base across India.
            </p>

            <ul className="space-y-4 pt-2">
              {[
                'Exclusive territory rights for your region or city',
                'Attractive margins and generous growth incentives',
                'Marketing, visual assets & promotional collateral provided',
                'Direct access to fresh authentic Pahadi harvests at 1500m+ elevation',
                'Full product training, sampling & onboarding assistance',
                'Fast-growing brand backed directly by passionate founders',
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/85">
                  <CheckCircle className="w-5 h-5 text-honey shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Direct WhatsApp Action Box */}
            <div className="pt-6 border-t border-white/10">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-honey block">Need immediate assistance?</span>
                  <span className="text-xs text-white/70">Connect directly with our co-founders on WhatsApp.</span>
                </div>
                <a
                  href="https://wa.me/917900474328?text=Hello%20Vishal!%20I%20am%20interested%20in%20becoming%20a%20HIMSARU%20distributor."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-xs rounded-xl shadow transition shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Distributor Application Form */}
          <div className="lg:col-span-6 bg-[#1b3a20] p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-2xl">🏔</span>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Apply to Distribute
                </h3>
                <span className="text-xs text-white/60">Fill out the form below to receive our partner catalog.</span>
              </div>
            </div>

            {submitted ? (
              <div className="p-6 bg-white/10 rounded-2xl border border-honey/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-honey/20 text-honey flex items-center justify-center mx-auto text-xl">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-white">Application Received!</h4>
                <p className="text-xs text-white/80">
                  Thank you, <strong className="text-honey">{fullName}</strong>. Our founding team will contact you within 24 hours. A WhatsApp chat window has also been prepared for your convenience.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-honey underline hover:text-white pt-2 block mx-auto"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:border-honey transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:border-honey transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5">
                    City &amp; State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dehradun, Uttarakhand or Mumbai, Maharashtra"
                    value={cityState}
                    onChange={(e) => setCityState(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:border-honey transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5">
                    Business Type *
                  </label>
                  <select
                    required
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#23482a] border border-white/20 text-white text-xs focus:outline-none focus:border-honey transition"
                  >
                    <option value="">Select your business type</option>
                    <option value="Retailer / Shop Owner">Retailer / Shop Owner</option>
                    <option value="Wholesaler / Distributor">Wholesaler / Regional Distributor</option>
                    <option value="Ayurvedic Clinic / Wellness Store">Ayurvedic Clinic / Wellness Store</option>
                    <option value="Online Organic Seller">Online Organic Seller</option>
                    <option value="Supermarket / Grocery Chain">Supermarket / Grocery Chain</option>
                    <option value="Other">Other Business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5">
                    Message / Business Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your current distribution network, store locations, or products of interest..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:border-honey transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-gold to-amber hover:from-amber hover:to-honey text-forest font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Feature / Assurance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-honey/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-honey/15 text-honey flex items-center justify-center mb-4">
              <Package className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-base text-white mb-1.5">Ready-to-Sell Stock</h4>
            <p className="text-xs text-white/65 leading-relaxed">
              Premium airtight glass jars and eco-friendly labels ready for retail display from day one.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-honey/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-honey/15 text-honey flex items-center justify-center mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-base text-white mb-1.5">Pan-India Delivery</h4>
            <p className="text-xs text-white/65 leading-relaxed">
              Reliable freight logistics ensuring temperature-safe delivery to any state or pin code in India.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-honey/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-honey/15 text-honey flex items-center justify-center mb-4">
              <Megaphone className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-base text-white mb-1.5">Brand Support</h4>
            <p className="text-xs text-white/65 leading-relaxed">
              High-resolution product imagery, laboratory test certificates, and social media promotions.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-honey/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-honey/15 text-honey flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-base text-white mb-1.5">High Growth Margins</h4>
            <p className="text-xs text-white/65 leading-relaxed">
              Competitive wholesale tier pricing allowing healthy retail margins and sustainable growth.
            </p>
          </div>
        </div>
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
