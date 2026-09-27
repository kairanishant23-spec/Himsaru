'use client';

import React from 'react';

export default function OfferBar() {
  return (
    <div className="bg-gradient-to-r from-[#0a1e0d] to-[#1b3a20] h-9 border-b border-gold/25 overflow-hidden flex items-center relative z-50 text-xs">
      <div className="w-full overflow-hidden">
        <div className="animate-marquee text-[11px] text-white/80 tracking-wide flex items-center">
          <span className="flex items-center gap-1.5 font-medium">
            🚚 Free Pan-India Delivery on orders above <strong className="text-honey font-bold">₹1499</strong>
          </span>
          <span className="mx-5 text-gold/40">|</span>
          <span className="flex items-center gap-1.5 font-medium">
            🏔 <strong className="text-honey font-bold">100% Pure</strong> Himalayan Products from Uttarakhand
          </span>
          <span className="mx-5 text-gold/40">|</span>
          <span className="flex items-center gap-1.5 font-medium">
            💬 WhatsApp Order: <strong className="text-honey font-bold">+91 7900474328</strong>
          </span>
          <span className="mx-5 text-gold/40">|</span>
          <span className="flex items-center gap-1.5 font-medium">
            🚚 Free Pan-India Delivery on orders above <strong className="text-honey font-bold">₹1499</strong>
          </span>
          <span className="mx-5 text-gold/40">|</span>
          <span className="flex items-center gap-1.5 font-medium">
            🏔 <strong className="text-honey font-bold">100% Pure</strong> Himalayan Products from Uttarakhand
          </span>
          <span className="mx-5 text-gold/40">|</span>
          <span className="flex items-center gap-1.5 font-medium">
            💬 WhatsApp Order: <strong className="text-honey font-bold">+91 7900474328</strong>
          </span>
          <span className="mx-5 text-gold/40">|</span>
        </div>
      </div>
    </div>
  );
}
