'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppBanner() {
  return (
    <section className="bg-[#fffdf2] border-y border-mist py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative ambient blobs */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-green-500/5 pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-amber/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
        {/* Left / Info */}
        <div className="md:col-span-2 space-y-4">
          <div className="inline-flex items-center gap-2 text-moss text-xs font-bold uppercase tracking-widest">
            <span>📱 Direct Founder Access</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest leading-tight">
            Order Directly on WhatsApp
          </h2>

          <p className="text-xs sm:text-sm text-ltxt leading-relaxed">
            Chat with our co-founders Vishal &amp; Ajay directly. Get personalized recommendations, bulk pricing, and real-time order updates — all on WhatsApp.
          </p>

          <div className="space-y-1.5 text-xs text-ltxt pt-1">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">💬</span>
              <span><strong>Vishal Kohli</strong> — +91 7900474328</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">💬</span>
              <span><strong>Ajay Aryan</strong> — +91 9012324850</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="https://wa.me/917900474328?text=Hi!%20I%20want%20to%20order%20from%20HIMSARU%20🏔"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#1b3a20] hover:bg-moss text-white rounded-full font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>Chat with Vishal</span>
            </a>

            <a
              href="https://wa.me/919012324850?text=Hi!%20I%20want%20to%20order%20from%20HIMSARU%20🏔"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#1b3a20] hover:bg-moss text-white rounded-full font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>Chat with Ajay</span>
            </a>
          </div>
        </div>

        {/* Right / Badge Card */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-white border border-mist rounded-2xl p-6 text-center shadow-card w-full max-w-[200px]">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-gold/30 shadow-sm mx-auto mb-2">
              <img src="/images/himsaru_logo.png" alt="HIMSARU" className="w-full h-full object-cover" />
            </div>
            <div className="font-serif font-bold text-forest text-sm">HIMSARU</div>
            <div className="text-xs text-stone mt-0.5">WhatsApp Us</div>
            <div className="mt-3 pt-3 border-t border-mist/70 text-[10px] text-stone">
              Instant response from our hill team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
