'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#142e19] text-white pt-16 pb-10 border-t border-forest2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* Col 1: Brand & Mountain Silhouette */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-gold/40 shadow-sm flex-shrink-0">
                <img src="/images/himsaru_logo.png" alt="HIMSARU" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-[0.2em] text-white block leading-none">
                  HIMSARU
                </span>
                <span className="text-[9px] uppercase tracking-wider text-honey block mt-1">
                  From Himalayan Hands To Your Home
                </span>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Bringing authentic, chemical-free superfoods handcrafted by the women of Uttarakhand straight to your doorstep.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-honey mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <Link href="/" className="hover:text-honey transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-honey transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-honey transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/our-soul" className="hover:text-honey transition">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/distribute" className="hover:text-honey transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-honey transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-honey mb-4">
              Contact Details
            </h4>
            <div className="space-y-2.5 text-xs text-white/80">
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>Vishalkot Haldwani Tarikhet Almora, Uttarakhand - 263645</span>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <span>himsaru2025@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🌐</span>
                <span>WWW.HIMSARU.IN</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📸</span>
                <span>@himsaruuttarakhand_01</span>
              </p>
            </div>
          </div>

          {/* Col 4: Follow Us & Tagline */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-honey mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/himsaruuttarakhand_01/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition"
                title="Instagram"
              >
                📸
              </a>
              <a
                href="https://wa.me/917900474328"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition"
                title="WhatsApp"
              >
                💬
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition"
                title="Facebook"
              >
                👥
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition"
                title="YouTube"
              >
                ▶️
              </a>
            </div>

            <div className="pt-4">
              <span className="font-cormorant italic text-lg sm:text-xl text-honey/90 block">
                Pure Pahadi • Organic • HIMSARU
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2025 HIMSARU. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-honey transition">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-honey transition">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-honey transition">
              Shipping &amp; Returns
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
