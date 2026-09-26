'use client';

import React from 'react';
import { ArrowDown, Heart, Sparkles, MapPin } from 'lucide-react';

export default function SoulHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-forest text-warm">
      {/* Mountain atmospheric gradient backdrop */}
      <div className="absolute inset-0 z-0 opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-moss via-forest to-bark" />

      {/* Decorative mountain contours */}
      <div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest2 border border-honey/30 text-honey text-xs font-semibold uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Living Heart of HIMSARU</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          The <span className="italic text-honey font-normal">Soul</span> of the Himalayas
        </h1>

        <p className="text-base sm:text-xl text-warm/85 font-light max-w-2xl mx-auto leading-relaxed">
          Behind every golden drop of A2 Bilona ghee and jar of wild mountain honey are the resilient,
          smiling women of Uttarakhand—tending the hills at dawn, honoring ancestral wisdom, and carving a future of self-reliance.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-honey" />
            Munsiyari & Chamoli Valleys
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            <Heart className="w-3.5 h-3.5 text-amber" />
            100% Women-Led Mountain Collectives
          </span>
        </div>

        <div className="pt-8">
          <a
            href="#artisans"
            className="inline-flex items-center gap-2 text-xs font-semibold text-honey hover:text-white transition group"
          >
            <span>Meet the Daughters of Pahad</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
