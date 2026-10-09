'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Home, ShieldCheck } from 'lucide-react';

export default function OurStorySection() {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-mist/70 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

        {/* Left Column: Portrait photo of Pahadi woman with 'From Hard Work to Dignity' */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] bg-mist/30">
            <img
              src="/images/media__1780214645909.jpg"
              alt="Pahadi woman grinding Himalayan harvest"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Overlay badge on top-left of image */}
            <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-2xl border border-white/20">
              <span className="font-serif italic text-xs sm:text-sm text-honey block leading-tight">
                From Hard Work
              </span>
              <span className="font-serif italic text-xs sm:text-sm text-white block leading-tight">
                to Dignity
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Story Text + Stats Stack */}
        <div className="lg:col-span-7 flex flex-col md:flex-row gap-8 lg:gap-10 items-start justify-between">
          <div className="flex-1 space-y-5">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest/70">
              OUR STORY
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight">
              Empowering Women.<br />
              Preserving Traditions.
            </h2>

            <p className="text-xs sm:text-sm text-stone leading-relaxed">
              HIMSARU is more than just a brand; it&apos;s a movement. We work with local women in Uttarakhand, providing them with sustainable livelihoods and fair opportunities. Every product you buy supports a real woman, a real family, and helps prevent migration from the hills.
            </p>

            <div className="pt-2">
              <Link
                href="/our-soul"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-honey hover:bg-amber text-forest font-bold rounded-2xl text-xs sm:text-sm transition-all shadow-md hover:shadow-lg hover:scale-105"
              >
                <span>MEET OUR HEROES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Stats Badge Column on the right */}
          <div className="w-full md:w-56 shrink-0 bg-warm/40 rounded-3xl p-6 border border-mist/80 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-forest/5 flex items-center justify-center shrink-0 text-forest border border-forest/10">
                <Users className="w-5 h-5 text-forest" />
              </div>
              <div>
                <strong className="block text-base font-bold text-forest font-serif leading-none">
                  100+
                </strong>
                <span className="text-[10px] text-stone font-medium uppercase tracking-wider block mt-0.5">
                  Women Empowered
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-forest/5 flex items-center justify-center shrink-0 text-forest border border-forest/10">
                <Home className="w-5 h-5 text-forest" />
              </div>
              <div>
                <strong className="block text-base font-bold text-forest font-serif leading-none">
                  50+
                </strong>
                <span className="text-[10px] text-stone font-medium uppercase tracking-wider block mt-0.5">
                  Villages Supported
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-forest/5 flex items-center justify-center shrink-0 text-forest border border-forest/10">
                <ShieldCheck className="w-5 h-5 text-forest" />
              </div>
              <div>
                <strong className="block text-base font-bold text-forest font-serif leading-none">
                  100%
                </strong>
                <span className="text-[10px] text-stone font-medium uppercase tracking-wider block mt-0.5">
                  Pure &amp; Natural
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
