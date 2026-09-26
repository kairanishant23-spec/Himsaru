'use client';

import React from 'react';
import { PAHAD_GALLERY, IMPACT_METRICS } from '@/data/soulContent';
import { MapPin, Heart } from 'lucide-react';

export default function PahadAtmosphere() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Community Impact Metrics */}
      <div className="bg-forest text-white rounded-3xl p-8 sm:p-12 shadow-cardLg">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-honey font-bold block mb-1">
            Empowerment in Numbers
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl font-bold">
            The Living Impact of Every Order
          </h3>
          <p className="text-xs sm:text-sm text-warm/70 mt-2">
            When you purchase HIMSARU, 100% of fair artisan wages remain directly in remote hill communities, preventing forced migration and reviving mountain cottage traditions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {IMPACT_METRICS.map((m, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-3xl block mb-2">{m.icon}</span>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-honey mb-1">
                {m.value}
              </div>
              <div className="text-xs text-warm/80 font-medium">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scenery Gallery */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-honey font-bold block mb-1">
            Pure Terrains
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
            Where the Air Smells of Pine & Pine-Nuts
          </h3>
          <p className="text-xs sm:text-sm text-stone mt-2">
            A glimpse into the sacred valley terrains that produce nature&apos;s purest superfoods.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAHAD_GALLERY.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-3xl overflow-hidden border border-warm shadow-card hover:shadow-cardLg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold bg-forest/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
                  {p.tag}
                </span>
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-forest mb-1">{p.title}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-honey font-medium mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{p.location}</span>
                  </div>
                  <p className="text-xs text-stone leading-relaxed">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
