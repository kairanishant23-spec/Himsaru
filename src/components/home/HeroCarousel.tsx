'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface Slide {
  id: number;
  img: string;
  badge: string;
  titleMain: string;
  titleEm: string;
  tagline: string;
  desc: string;
  ctaText: string;
  ctaLink: string;
  isSlide1?: boolean;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    img: '/images/slide1.jpg',
    badge: '🏔 Pure Himalayas',
    titleMain: 'Pure Taste of the',
    titleEm: 'Himalayas',
    tagline: 'Authentic Pahadi products, straight from Uttarakhand',
    desc: 'A2 Ghee, Wild Honey, Mountain Spices & more — crafted with love by Pahadi women.',
    ctaText: 'Explore Creations',
    ctaLink: '#products',
    isSlide1: true,
  },
  {
    id: 2,
    img: '/images/slide2.jpg',
    badge: '🌾 Our Community',
    titleMain: 'Rooted in the',
    titleEm: 'Villages',
    tagline: 'Meeting our farmers in Dabarbadi, Uttarakhand',
    desc: 'We work directly with Pahadi women and village communities — every purchase empowers a family.',
    ctaText: 'Explore Creations',
    ctaLink: '#products',
  },
  {
    id: 3,
    img: '/images/slide3.jpg',
    badge: '🏆 Government Recognised',
    titleMain: 'Recognised by',
    titleEm: 'Uttarakhand Govt',
    tagline: 'Proud participants — Mukhyamantri Udyamshala Yojana 2026',
    desc: "HIMSARU is officially recognised under the Chief Minister's Entrepreneurship Programme.",
    ctaText: 'View Our Recognition',
    ctaLink: '/our-soul',
  },
  {
    id: 4,
    img: '/images/slide4.jpg',
    badge: '🌹 Farm Fresh',
    titleMain: 'Harvested with',
    titleEm: 'Love & Care',
    tagline: 'Fresh rose harvest from our Pahadi farms',
    desc: 'From the hands of our mountain farmers to your home — pure, natural, and full of goodness.',
    ctaText: 'Shop Farm Fresh',
    ctaLink: '#products',
  },
  {
    id: 5,
    img: '/images/slide5.jpg',
    badge: '🌸 Sashakt Nari',
    titleMain: 'Empowering',
    titleEm: 'Pahadi Women',
    tagline: 'सशक्त नारी, सशक्त समाज',
    desc: 'HIMSARU connects Pahadi women farmers to markets — giving them fair income and dignity.',
    ctaText: 'Women Empowerment',
    ctaLink: '/our-soul',
  },
  {
    id: 6,
    img: '/images/slide6.jpg',
    badge: '🐄 A2 Badri Ghee',
    titleMain: 'Free-Grazing Cows,',
    titleEm: 'Pure A2 Ghee',
    tagline: 'Badri cows roaming free in Himalayan pine forests',
    desc: 'Our A2 Badri Cow Ghee is made from cows that graze freely on Himalayan herbs — truly pure.',
    ctaText: 'Shop A2 Ghee',
    ctaLink: '#products',
  },
  {
    id: 7,
    img: '/images/media__1780214645909.jpg',
    badge: '✨ The Soul of HIMSARU',
    titleMain: 'Empowering',
    titleEm: 'Himalayan Women',
    tagline: 'The heart behind our pure products',
    desc: 'Meet the incredible women who handcraft our goods with love, dedication, and generations of wisdom.',
    ctaText: 'Read Their Story',
    ctaLink: '/our-soul',
  },
  {
    id: 8,
    img: '/images/media__1780214658535.jpg',
    badge: '💪 True Strength',
    titleMain: 'Hard Work &',
    titleEm: 'Resilience',
    tagline: 'Every product tells a story of perseverance',
    desc: 'By choosing HIMSARU, you support the livelihood and financial independence of rural Pahadi women.',
    ctaText: 'Support Our Mission',
    ctaLink: '/our-soul',
  },
  {
    id: 9,
    img: '/images/media__1780214658575.jpg',
    badge: '🌿 Mountain Roots',
    titleMain: 'Rooted in',
    titleEm: 'Tradition',
    tagline: 'Preserving ancient Himalayan techniques',
    desc: 'Our artisans employ sustainable, age-old methods to bring you the purest quality straight from nature.',
    ctaText: 'Explore Tradition',
    ctaLink: '/our-soul',
  },
  {
    id: 10,
    img: '/images/media__1780214658599.jpg',
    badge: '🤝 Community',
    titleMain: 'Building a',
    titleEm: 'Better Future',
    tagline: 'Working together for the startup',
    desc: 'We are a family. The women of the Himalayas are the backbone of our journey towards organic living.',
    ctaText: 'Join Our Journey',
    ctaLink: '/our-soul',
  },
  {
    id: 11,
    img: '/images/himsaru_women_empowerment_1780214326121.png',
    badge: '📖 The Story',
    titleMain: 'Discover',
    titleEm: 'The Soul',
    tagline: 'Read the full story of our makers',
    desc: 'Explore the beautiful journey of the Pahadi women shaping HIMSARU.',
    ctaText: 'Read Their Story',
    ctaLink: '/our-soul',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative w-full h-[65vh] min-h-[460px] max-h-[760px] sm:h-[75vh] lg:h-[82vh] overflow-hidden bg-[#1a3a20] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {SLIDES.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              isActive
                ? 'opacity-100 translate-x-0 pointer-events-auto z-10'
                : 'opacity-0 translate-x-12 pointer-events-none z-0'
            }`}
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: slide.isSlide1 ? 'contain' : 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: slide.isSlide1 ? '#f2ede3' : '#1a3a20',
            }}
          >
            {/* Gradient Overlays */}
            <div
              className={`absolute inset-0 z-10 ${
                slide.isSlide1
                  ? 'bg-gradient-to-r from-black/50 via-black/20 to-transparent sm:from-black/40 sm:via-black/10'
                  : 'bg-gradient-to-r from-black/75 via-black/40 to-black/10 sm:from-black/65 sm:via-black/30'
              }`}
            />

            {/* Slide Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-28 sm:pb-32 max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/25 border border-gold/50 text-honey text-[11px] font-semibold tracking-widest uppercase mb-3.5 w-fit">
                <span>{slide.badge}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12] mb-3 drop-shadow-md">
                {slide.titleMain}{' '}
                <em className="text-honey not-italic font-serif italic">
                  {slide.titleEm}
                </em>
              </h1>

              {/* Tagline */}
              <p className="font-cormorant italic text-base sm:text-xl text-white/90 mb-2 drop-shadow">
                {slide.tagline}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-lg mb-6 drop-shadow">
                {slide.desc}
              </p>

              {/* CTA Button */}
              <div>
                {slide.ctaLink.startsWith('#') ? (
                  <a
                    href={slide.ctaLink}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-amber hover:from-amber hover:to-honey text-forest font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-amber hover:from-amber hover:to-honey text-forest font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Prev / Next Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-forest flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        <ChevronLeft className="w-5 h-5 text-forest" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-forest flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        <ChevronRight className="w-5 h-5 text-forest" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-[66px] sm:bottom-[72px] left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? 'w-6 h-2 bg-white shadow'
                : 'w-2 h-2 bg-white/45 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Pinned Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex bg-[#1b3a20]/95 backdrop-blur-md border-t border-white/10 text-white">
        <div className="flex-1 text-center py-2.5 sm:py-3 border-r border-white/10">
          <span className="font-serif text-base sm:text-xl font-bold text-honey block leading-tight">
            500+
          </span>
          <span className="text-[9px] sm:text-[10px] text-white/75 uppercase tracking-widest block mt-0.5">
            Happy Customers
          </span>
        </div>
        <div className="flex-1 text-center py-2.5 sm:py-3 border-r border-white/10">
          <span className="font-serif text-base sm:text-xl font-bold text-honey block leading-tight">
            12+
          </span>
          <span className="text-[9px] sm:text-[10px] text-white/75 uppercase tracking-widest block mt-0.5">
            Pahadi Products
          </span>
        </div>
        <div className="flex-1 text-center py-2.5 sm:py-3 border-r border-white/10">
          <span className="font-serif text-base sm:text-xl font-bold text-honey block leading-tight">
            100%
          </span>
          <span className="text-[9px] sm:text-[10px] text-white/75 uppercase tracking-widest block mt-0.5">
            Pure & Natural
          </span>
        </div>
        <div className="flex-1 text-center py-2.5 sm:py-3">
          <span className="font-serif text-base sm:text-xl font-bold text-honey block leading-tight">
            0
          </span>
          <span className="text-[9px] sm:text-[10px] text-white/75 uppercase tracking-widest block mt-0.5">
            Preservatives
          </span>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <svg
        className="hidden sm:block absolute bottom-[58px] left-0 w-full z-10 pointer-events-none"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        height="36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80Z"
          fill="#fbf7f0"
        />
      </svg>
    </div>
  );
}
