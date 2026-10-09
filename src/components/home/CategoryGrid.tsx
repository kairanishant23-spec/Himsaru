'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (catId: string) => void;
}

const CATEGORY_ITEMS = [
  {
    id: 'ghee',
    name: 'GHEE',
    img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&q=80',
  },
  {
    id: 'honey',
    name: 'HONEY',
    img: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=300&q=80',
  },
  {
    id: 'dal',
    name: 'PULSES',
    img: 'https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?w=300&q=80',
  },
  {
    id: 'salt',
    name: 'SALT',
    img: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=300&q=80',
  },
  {
    id: 'spice',
    name: 'SPICES',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80',
  },
  {
    id: 'rice',
    name: 'RICE & GRAINS',
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80',
  },
  {
    id: 'pickle',
    name: 'PICKLES',
    img: 'https://images.unsplash.com/photo-1589135233689-d560c5717b9b?w=300&q=80',
  },
  {
    id: 'all',
    name: 'LOCAL ITEMS',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&q=80',
  },
];

export default function CategoryGrid({ onSelectCategory }: CategoryGridProps) {
  const handleClick = (catId: string) => {
    onSelectCategory(catId);
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-cream py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-mist/70">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with decorative lines */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 h-[1px] bg-forest/30" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-forest/70">
              OUR COLLECTION
            </span>
            <span className="w-8 h-[1px] bg-forest/30" />
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-[40px] font-bold text-forest leading-tight">
            Pure Goodness, Straight from the Hills
          </h2>

          <p className="text-xs sm:text-sm text-stone mt-2.5">
            Explore our range of authentic Himalayan products, crafted with care and tradition.
          </p>
        </div>

        {/* Circular Category Items Row */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4 lg:gap-6 justify-items-center">
          {CATEGORY_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="group flex flex-col items-center text-center focus:outline-none transition-transform hover:-translate-y-1"
            >
              {/* Circular image with warm border and background glow */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full p-1 bg-warm/80 border border-mist shadow-sm group-hover:shadow-md group-hover:border-gold/60 transition-all overflow-hidden flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Category Name & Arrow */}
              <div className="mt-2.5 flex items-center gap-1 text-[11px] sm:text-xs font-bold text-forest group-hover:text-gold transition-colors">
                <span className="tracking-wider">{item.name}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
