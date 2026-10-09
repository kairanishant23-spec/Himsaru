'use client';

import React from 'react';
import { Leaf, ShieldCheck, Users, Mountain } from 'lucide-react';

export default function TrustStrip() {
  return (
    <div className="bg-[#fbf7f0] border-b border-mist/80 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 md:divide-x md:divide-mist">
        {/* Item 1 */}
        <div className="flex items-center gap-3.5 px-2">
          <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center shrink-0 text-forest">
            <Leaf className="w-5 h-5 text-forest" />
          </div>
          <div>
            <strong className="block text-xs sm:text-sm font-bold text-forest leading-snug">
              100% Natural
            </strong>
            <span className="text-[11px] text-stone">&amp; Organic</span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-3.5 px-2 md:pl-6">
          <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center shrink-0 text-forest">
            <ShieldCheck className="w-5 h-5 text-forest" />
          </div>
          <div>
            <strong className="block text-xs sm:text-sm font-bold text-forest leading-snug">
              No Adulteration
            </strong>
            <span className="text-[11px] text-stone">Guarantee</span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-3.5 px-2 md:pl-6">
          <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center shrink-0 text-forest">
            <Users className="w-5 h-5 text-forest" />
          </div>
          <div>
            <strong className="block text-xs sm:text-sm font-bold text-forest leading-snug">
              Women Empowerment
            </strong>
            <span className="text-[11px] text-stone">&amp; Local Livelihood</span>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center gap-3.5 px-2 md:pl-6">
          <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center shrink-0 text-forest">
            <Mountain className="w-5 h-5 text-forest" />
          </div>
          <div>
            <strong className="block text-xs sm:text-sm font-bold text-forest leading-snug">
              From Uttarakhand
            </strong>
            <span className="text-[11px] text-stone">Himalayas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
