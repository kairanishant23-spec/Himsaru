'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function StayConnected() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/himalaya_peak.png')" }}>
      {/* Soft gradient overlay to enhance legibility */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

      <div className="relative max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-mist flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Icon + Title & Subtitle */}
          <div className="flex items-center gap-4 text-left w-full md:w-auto">
            <div className="w-12 h-12 rounded-2xl bg-forest/5 flex items-center justify-center shrink-0 text-forest border border-forest/10">
              <Mail className="w-6 h-6 text-forest" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest leading-tight">
                Stay Connected
              </h3>
              <p className="text-xs sm:text-sm text-stone mt-0.5">
                Get the latest updates, new products and special offers.
              </p>
            </div>
          </div>

          {/* Right: Form or Success */}
          <div className="w-full md:w-auto md:min-w-[360px]">
            {subscribed ? (
              <div className="p-3 bg-green-50 border border-green-200 rounded-2xl text-xs text-green-800 flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 shrink-0" />
                <span>Thank you for subscribing to HIMSARU updates!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-2xl bg-warm/40 border border-mist text-text placeholder-stone/60 text-xs focus:outline-none focus:border-forest transition"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-2xl bg-[#1b3a20] hover:bg-[#264d2b] text-white font-semibold text-xs transition shadow flex items-center gap-1.5 shrink-0"
                >
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
