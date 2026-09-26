'use client';

import React, { useState } from 'react';
import { ARTISANS } from '@/data/soulContent';
import { Quote, Clock, Award, Mountain } from 'lucide-react';

export default function DaughtersOfPahad() {
  const [activeArtisanId, setActiveArtisanId] = useState(ARTISANS[0].id);
  const activeArtisan = ARTISANS.find((a) => a.id === activeArtisanId) || ARTISANS[0];

  return (
    <section id="artisans" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest text-honey font-bold block mb-2">
          Living Legends of Uttarakhand
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest mb-4">
          Daughters of the <span className="italic font-normal">Himalayas</span>
        </h2>
        <p className="text-sm sm:text-base text-stone leading-relaxed">
          In high mountain villages where machines cannot tread, these extraordinary craftswomen carry forward recipes, songs, and hand-churning methods passed down for hundreds of years.
        </p>

        {/* Tab switchers */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {ARTISANS.map((a) => (
            <button
              key={a.id}
              onClick={() => setActiveArtisanId(a.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                activeArtisanId === a.id
                  ? 'bg-forest text-white shadow-lg scale-105'
                  : 'bg-white text-forest border border-mist hover:bg-warm'
              }`}
            >
              {a.name} • {a.role.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Artisan Showcase Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-cardLg border border-warm/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Photo & Badges */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-md border-4 border-warm">
            <img
              src={activeArtisan.image}
              alt={activeArtisan.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-4 -right-4 bg-forest text-warm px-4 py-2.5 rounded-2xl shadow-xl text-xs flex items-center gap-2 border border-honey/30">
            <Mountain className="w-4 h-4 text-honey" />
            <div>
              <p className="font-bold text-white">{activeArtisan.village}</p>
              <p className="text-[10px] text-warm/70">{activeArtisan.altitude}</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-honey uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" />
              <span>{activeArtisan.experience}</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
              {activeArtisan.name}
            </h3>
            <p className="text-sm font-medium text-ltxt">{activeArtisan.role}</p>
          </div>

          {/* Quote */}
          <div className="p-5 bg-warm/50 rounded-2xl border-l-4 border-honey relative">
            <Quote className="w-8 h-8 text-honey/20 absolute top-2 right-2" />
            <p className="text-sm italic text-forest font-serif leading-relaxed">
              &ldquo;{activeArtisan.quote}&rdquo;
            </p>
          </div>

          <p className="text-xs sm:text-sm text-stone leading-relaxed">
            {activeArtisan.story}
          </p>

          {/* Daily Routine interactive schedule */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-forest mb-3 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-honey" />
              A Day in Her Life on the Mountain
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeArtisan.dailyRoutine.map((item, idx) => (
                <div key={idx} className="p-3 bg-cream rounded-xl border border-mist/80 text-xs">
                  <div className="flex items-center justify-between font-bold text-forest mb-1">
                    <span>{item.activity}</span>
                    <span className="text-[10px] text-honey font-mono">{item.time}</span>
                  </div>
                  <p className="text-[11px] text-stone leading-tight">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
