'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const IMPACT_CARDS = [
  {
    title: 'Women Empowerment',
    img: '/images/media__1780214458348.jpg',
  },
  {
    title: 'Preventing Migration',
    img: '/images/himalaya_ridge.png',
  },
  {
    title: 'Sustainable Farming',
    img: '/images/slide4.jpg',
  },
  {
    title: 'Healthy Communities',
    img: '/images/himalaya_peak.png',
  },
];

export default function OurImpactSection() {
  return (
    <section className="bg-[#1b3a20] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header with Title and CTA button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-honey">
              OUR IMPACT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Real People. Lasting Change.
            </h2>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed pt-1">
              Your support helps build stronger communities, create local employment and keep the Himalayan culture alive.
            </p>
          </div>

          <Link
            href="/our-soul"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-honey hover:bg-amber text-forest font-bold rounded-2xl text-xs sm:text-sm transition-all shadow-md hover:shadow-lg shrink-0 self-start md:self-end"
          >
            <span>SEE OUR IMPACT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Impact Photo Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {IMPACT_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] bg-black/40 border border-white/10 shadow-lg"
            >
              <img
                src={card.img}
                alt={card.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Bottom label */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <div className="bg-[#1b3a20]/90 backdrop-blur-sm border border-white/15 px-3 py-2 rounded-xl text-center">
                  <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                    {card.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
