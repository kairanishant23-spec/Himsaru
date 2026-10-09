'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Priya Sharma',
    loc: 'Dehradun, Uttarakhand',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&q=80',
    text: 'The ghee is pure and has an amazing aroma. You can really feel the quality. Highly recommended!',
  },
  {
    id: 2,
    name: 'Rohit Singh',
    loc: 'Delhi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    text: 'The honey is so natural and tasty. Finally found a genuine product from the mountains.',
  },
  {
    id: 3,
    name: 'Neha Rawat',
    loc: 'Lucknow',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80',
    text: 'Loved the taste of pahadi spices and pickle. The packaging is also very premium. Keep it up HIMSARU!',
  },
  {
    id: 4,
    name: 'Meera Joshi',
    loc: 'Mumbai, Maharashtra',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80',
    text: "Wild Pahadi honey that actually crystallises! That's how I know it's real. Fantastic service!",
  },
  {
    id: 5,
    name: 'Sunil Bisht',
    loc: 'Bengaluru, Karnataka',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
    text: 'Pahadi Rajma cooked with HIMSARU A2 Ghee is life-changing. No flavour enhancers needed. Ordered 3 times already!',
  },
];

export default function CustomerTestimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(REVIEWS.length - 3, i + 1));

  return (
    <section className="bg-cream py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-mist/70">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 h-[1px] bg-forest/30" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-forest/70">
              WHAT OUR CUSTOMERS SAY
            </span>
            <span className="w-8 h-[1px] bg-forest/30" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight">
            Loved by Many, Trusted by All
          </h2>
        </div>

        {/* Testimonials Carousel with Left/Right Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={startIndex === 0}
            aria-label="Previous review"
            className="hidden sm:flex absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-mist shadow-md items-center justify-center text-forest hover:bg-warm disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(startIndex, startIndex + 3).map((r) => (
              <div
                key={r.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-mist shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover border border-mist"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-forest">{r.name}</h4>
                      <div className="flex items-center gap-0.5 text-amber mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone italic leading-relaxed mb-4">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-stone pt-3 border-t border-mist/60">
                  <MapPin className="w-3 h-3 text-forest/60" />
                  <span>{r.loc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={startIndex >= REVIEWS.length - 3}
            aria-label="Next review"
            className="hidden sm:flex absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-mist shadow-md items-center justify-center text-forest hover:bg-warm disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
