'use client';

import React from 'react';

interface CategoryGridProps {
  onSelectCategory: (catId: string) => void;
}

const CATEGORY_ITEMS = [
  {
    id: 'ghee',
    name: 'Ghee',
    sub: 'A2 Badri Cow Ghee',
    icon: '🫙',
    img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&q=80',
  },
  {
    id: 'honey',
    name: 'Honey',
    sub: '4 Wild Varieties',
    icon: '🍯',
    img: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=300&q=80',
  },
  {
    id: 'salt',
    name: 'Salts',
    sub: 'Silbatta Ground',
    icon: '🧂',
    img: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=300&q=80',
  },
  {
    id: 'dal',
    name: 'Pulses',
    sub: 'Rajma, Gehat, Bhatt',
    icon: '🫘',
    img: 'https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?w=300&q=80',
  },
  {
    id: 'spice',
    name: 'Spices',
    sub: 'Pahadi Haldi',
    icon: '🌿',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80',
  },
  {
    id: 'rice',
    name: 'Rice',
    sub: 'Red, Black, Pahadi',
    icon: '🌾',
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80',
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
    <section className="bg-warm py-16 px-4 sm:px-6 lg:px-8 border-b border-mist/70">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest/10 border border-forest/20 text-moss text-[11px] font-semibold tracking-widest uppercase mb-3">
            <span>🌾 Browse by Category</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
            Our <span className="text-gold">Himalayan</span> Collections
          </h2>
          <p className="text-xs sm:text-sm text-stone mt-2">
            Click on any harvest category to explore our authentic hillside creations.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {CATEGORY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="group bg-white rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-cardLg transition-all duration-300 hover:-translate-y-1.5 border border-transparent hover:border-moss/25 text-center flex flex-col"
            >
              {/* Image */}
              <div className="w-full aspect-square overflow-hidden bg-mist/50">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-3 sm:p-3.5 flex flex-col items-center">
                <span className="text-xl mb-1">{item.icon}</span>
                <span className="text-xs sm:text-sm font-bold text-forest group-hover:text-gold transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] text-stone mt-0.5 line-clamp-1">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
