'use client';

import React from 'react';

const WHY_FEATURES = [
  {
    icon: '🏔',
    title: 'Sourced at Altitude',
    desc: 'Products from 1500m+ Himalayan farms, harvested at peak freshness and nutrition by local artisans.',
  },
  {
    icon: '🌿',
    title: 'Zero Chemicals, Ever',
    desc: "No pesticides, preservatives, or artificial additives. Just nature's purest form — exactly as the mountains intended.",
  },
  {
    icon: '👩‍🌾',
    title: 'Community Powered',
    desc: 'Every purchase directly supports artisans and farmers from Uttarakhand villages. You buy, they thrive.',
  },
  {
    icon: '🤝',
    title: 'Founder-Backed Quality',
    desc: 'Co-founders personally verify every batch. WhatsApp them directly if you ever have a question.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest/10 border border-forest/20 text-moss text-[11px] font-semibold tracking-widest uppercase mb-3">
            <span>🌿 Why Choose Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
            The HIMSARU <span className="text-gold">Promise</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone mt-2.5">
            Purity, heritage, and genuine human connection in every single jar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-mist shadow-sm hover:shadow-cardLg hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-13 h-13 rounded-2xl bg-forest/5 flex items-center justify-center text-3xl mb-5 w-fit p-3">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-forest mb-2.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
