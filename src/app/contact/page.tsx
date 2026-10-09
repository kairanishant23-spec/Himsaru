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
import { Mail, Phone, MapPin, Send, Check, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function ContactPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Compose prefilled WhatsApp link as immediate fallback
    const text = encodeURIComponent(
      `Hello HIMSARU Team!\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`
    );
    const waUrl = `https://wa.me/917900474328?text=${text}`;

    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

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

      <main className="flex-1 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest/10 border border-forest/20 text-forest text-[11px] font-semibold tracking-widest uppercase mb-3">
            <span>📮 Get In Touch</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest leading-tight">
            Contact <span className="text-gold">HIMSARU</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-honey to-transparent mx-auto mt-3 rounded" />
          <p className="text-xs sm:text-sm text-stone mt-3 leading-relaxed">
            Have questions about our sacred Pahadi harvests, custom orders, or your delivery? We are here to help directly from the hills of Uttarakhand.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Founder & Address Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Founders WhatsApp Box */}
            <div className="bg-[#1b3a20] text-white p-7 rounded-3xl shadow-xl border border-white/10 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl border border-white/20">
                  🏔️
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    Direct Founder Access
                  </h3>
                  <span className="text-[11px] text-honey font-semibold block">
                    Fast response directly from Almora
                  </span>
                </div>
              </div>

              <p className="text-xs text-white/80 leading-relaxed">
                Connect directly with our co-founders for immediate orders, purity inquiries, or custom mountain parcels.
              </p>

              <div className="space-y-3 pt-1 text-xs">
                {/* Vishal */}
                <a
                  href="https://wa.me/917900474328?text=Hello%20Vishal!%20I%20have%20an%20inquiry%20about%20HIMSARU."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/15 rounded-2xl border border-white/15 transition group"
                >
                  <div className="flex items-center gap-3">
                    {/* Real WhatsApp SVG Icon */}
                    <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="block text-white group-hover:text-honey transition">Vishal Kohli</strong>
                      <span className="text-[11px] text-white/70">+91 79004 74328</span>
                    </div>
                  </div>
                  <span className="text-honey text-[11px] font-semibold group-hover:translate-x-1 transition-transform">
                    Chat →
                  </span>
                </a>

                {/* Ajay */}
                <a
                  href="https://wa.me/919012324850?text=Hello%20Ajay!%20I%20have%20an%20inquiry%20about%20HIMSARU."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/15 rounded-2xl border border-white/15 transition group"
                >
                  <div className="flex items-center gap-3">
                    {/* Real WhatsApp SVG Icon */}
                    <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="block text-white group-hover:text-honey transition">Ajay Aryan</strong>
                      <span className="text-[11px] text-white/70">+91 90123 24850</span>
                    </div>
                  </div>
                  <span className="text-honey text-[11px] font-semibold group-hover:translate-x-1 transition-transform">
                    Chat →
                  </span>
                </a>
              </div>
            </div>

            {/* Address & Official Channels Card */}
            <div className="bg-white rounded-3xl p-7 border border-mist shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-forest">Mountain Headquarters</h4>
                  <p className="text-xs text-stone mt-1 leading-relaxed">
                    Vishalkot, Haldwani, Tarikhet, Almora, Uttarakhand — 263645, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-mist/60">
                <Mail className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-forest">Email Inquiries</h4>
                  <p className="text-xs text-stone mt-0.5">himsaru2025@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-mist/60">
                <Clock className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-forest">Operational Hours</h4>
                  <p className="text-xs text-stone mt-0.5">Monday to Saturday: 9:00 AM – 7:30 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-mist shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-forest mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs text-stone mb-6">
              Fill out your details below and our team will get in touch promptly.
            </p>

            {submitted ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto text-xl">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-forest">Message Dispatched!</h4>
                <p className="text-xs text-stone max-w-sm mx-auto">
                  Dhanyavaad, <strong className="text-forest">{name}</strong>. A WhatsApp message preview has also been opened for direct instant response.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-forest underline hover:text-moss pt-2 block mx-auto"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-forest mb-1.5 uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-warm/30 border border-mist rounded-xl text-text text-xs focus:outline-none focus:border-forest transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-forest mb-1.5 uppercase tracking-wider">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-warm/30 border border-mist rounded-xl text-text text-xs focus:outline-none focus:border-forest transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-forest mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-warm/30 border border-mist rounded-xl text-text text-xs focus:outline-none focus:border-forest transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-forest mb-1.5 uppercase tracking-wider">
                      Inquiry Type
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 bg-warm/30 border border-mist rounded-xl text-text text-xs focus:outline-none focus:border-forest transition"
                    >
                      <option value="General Inquiry">General Product Inquiry</option>
                      <option value="Order Status">Order Tracking & Status</option>
                      <option value="Bulk Order">Bulk / Festival Order</option>
                      <option value="Distributor Partnership">Distributor Partnership</option>
                      <option value="Purity / Labs">Lab Testing & Purity</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest mb-1.5 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you are looking for..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-warm/30 border border-mist rounded-xl text-text text-xs focus:outline-none focus:border-forest transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-forest hover:bg-forest2 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            )}
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
