'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function SashaktNariStory() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-[#1b3a20] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column / Story & Newsletter */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-honey text-[11px] font-semibold tracking-widest uppercase">
            <span>📖 Our Story</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Born in the <span className="text-honey">Mountains</span>
          </h2>

          <div className="w-12 h-0.5 bg-gradient-to-r from-honey to-transparent rounded" />

          <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
            HIMSARU was founded by Vishal and Ajay — two sons of Uttarakhand who grew up watching their mountains produce the purest food on earth, yet go unrecognised.
          </p>

          <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
            Their mission: bring authentic Pahadi products directly from Himalayan artisans to Indian homes. No middlemen, no compromise.
          </p>

          <div>
            <Link
              href="/our-soul"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-gold to-amber hover:from-amber hover:to-honey text-forest font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Read Full Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Newsletter Box */}
          <div className="pt-8 mt-6 border-t border-white/10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold/15 border border-gold/30 text-honey text-[10px] font-semibold tracking-widest uppercase">
              <span>📬 Stay Connected</span>
            </div>
            <p className="text-xs text-white/65">
              Get updates on new seasonal harvests, specials &amp; authentic Pahadi recipes.
            </p>

            {subscribed ? (
              <div className="p-3 bg-white/10 border border-green-400/40 rounded-xl text-xs text-green-300 flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Thank you for subscribing to HIMSARU mountain dispatches!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:border-honey transition"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gold hover:bg-honey text-forest font-semibold text-xs transition shadow-md flex-shrink-0"
                >
                  Subscribe 🌿
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right column / Mountain Photography */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] group">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80"
            alt="Himalayan Mountains"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-white mb-1">
              🏔 HIMSARU — Him + Saru
            </h3>
            <p className="text-xs sm:text-sm text-white/80">
              &ldquo;Him&rdquo; for the eternal Himalayan snows, &ldquo;Saru&rdquo; for the sacred cedar trees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
