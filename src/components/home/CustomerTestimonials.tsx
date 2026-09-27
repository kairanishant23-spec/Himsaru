'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Priya Sharma',
    loc: 'Delhi, NCR',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&q=80',
    text: "The A2 Badri Ghee is unlike anything I've ever tasted. The aroma alone fills the whole kitchen. My dal makhani has never been better!",
  },
  {
    id: 2,
    name: 'Amit Rawat',
    loc: 'Dehradun, Uttarakhand',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80',
    text: 'The Pisyu Loon is addictive! I sprinkle it on everything — fruits, raita, even eggs. Reminds me of my childhood in the hills. Pure nostalgia.',
  },
  {
    id: 3,
    name: 'Meera Joshi',
    loc: 'Mumbai, Maharashtra',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80',
    text: "Wild Pahadi honey that actually crystallises! That's how I know it's real. Vishal even replied to my WhatsApp personally — fantastic service!",
  },
  {
    id: 4,
    name: 'Sunil Bisht',
    loc: 'Bengaluru, Karnataka',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&q=80',
    text: 'Pahadi Rajma cooked with HIMSARU A2 Ghee is life-changing. No flavour enhancers needed. Ordered 3 times already and gifting it to family too!',
  },
  {
    id: 5,
    name: 'Kavita Negi',
    loc: 'Pune, Maharashtra',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80',
    text: 'Pahadi Haldi with 5x more curcumin is no joke — my golden milk is now actually golden and effective. Best purchase for health this year!',
  },
];

export default function CustomerTestimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setIndex((i) => (i + 1) % REVIEWS.length);

  return (
    <section className="bg-warm py-20 px-4 sm:px-6 lg:px-8 border-b border-mist">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest/10 border border-forest/20 text-moss text-[11px] font-semibold tracking-widest uppercase mb-3">
            <span>💬 Customer Love</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
            Mountain <span className="text-gold">Love Letters</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone mt-2.5">
            Real stories from our patrons who cherish authentic Himalayan superfoods.
          </p>
        </div>

        {/* Desktop View - 3 Cards side by side */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl p-7 border border-mist shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-ltxt italic leading-relaxed mb-6">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-mist/60">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover border border-mist"
                />
                <div>
                  <h4 className="text-xs font-bold text-forest">{r.name}</h4>
                  <span className="text-[11px] text-stone">{r.loc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="bg-white rounded-2xl p-6 border border-mist shadow-sm">
            <div className="flex items-center gap-1 text-amber mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber" />
              ))}
            </div>
            <p className="text-xs text-ltxt italic leading-relaxed mb-6 min-h-[72px]">
              &ldquo;{REVIEWS[index].text}&rdquo;
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-mist/60">
              <div className="flex items-center gap-3">
                <img
                  src={REVIEWS[index].avatar}
                  alt={REVIEWS[index].name}
                  loading="lazy"
                  className="w-9 h-9 rounded-full object-cover border border-mist"
                />
                <div>
                  <h4 className="text-xs font-bold text-forest">{REVIEWS[index].name}</h4>
                  <span className="text-[10px] text-stone">{REVIEWS[index].loc}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  className="w-8 h-8 rounded-full border border-mist flex items-center justify-center text-forest hover:bg-warm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next review"
                  className="w-8 h-8 rounded-full border border-mist flex items-center justify-center text-forest hover:bg-warm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
