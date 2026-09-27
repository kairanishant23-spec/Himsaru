'use client';

import React from 'react';

export default function TrustStrip() {
  return (
    <div className="bg-cream border-b border-mist px-4 sm:px-6 lg:px-8 py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:divide-x md:divide-mist">
        {/* Item 1 */}
        <div className="flex items-center gap-3.5 px-2">
          <span className="text-2xl flex-shrink-0">🚚</span>
          <div>
            <strong className="block text-xs sm:text-sm font-bold text-forest leading-snug">
              Free Shipping & ₹60 Discount
            </strong>
            <span className="text-[11px] text-stone">On orders above ₹1499</span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-3.5 px-2 md:pl-6">
          <span className="text-2xl flex-shrink-0">💰</span>
          <div>
            <strong className="block text-xs sm:text-sm font-bold text-forest leading-snug">
              COD Available
            </strong>
            <span className="text-[11px] text-stone">Cash on delivery pan-India</span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-3.5 px-2 md:pl-6">
          <span className="text-2xl flex-shrink-0">🌿</span>
          <div>
            <strong className="block text-xs sm:text-sm font-bold text-forest leading-snug">
              100% Natural
            </strong>
            <span className="text-[11px] text-stone">Zero chemicals, ever</span>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center gap-3.5 px-2 md:pl-6">
          <span className="text-2xl flex-shrink-0">⏱</span>
          <div>
            <strong className="block text-xs sm:text-sm font-bold text-forest leading-snug">
              Ships in 24 hrs
            </strong>
            <span className="text-[11px] text-stone">Fast & reliable delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
