'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#142e19] text-white pt-16 pb-10 border-t border-forest2">
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
                <Link href="/contact" className="hover:text-honey transition">
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

          {/* Col 4: Follow Us (Real Instagram & WhatsApp icons, FB & YT removed) & Tagline */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-honey mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              {/* Real Instagram SVG Brand Icon */}
              <a
                href="https://www.instagram.com/himsaruuttarakhand_01/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:scale-105 flex items-center justify-center text-white transition shadow-md"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Real WhatsApp SVG Brand Icon */}
              <a
                href="https://wa.me/917900474328"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25D366] hover:bg-[#20ba59] hover:scale-105 flex items-center justify-center text-white transition shadow-md"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>

            <div className="pt-4">
              <span className="font-cormorant italic text-lg sm:text-xl text-honey/90 block">
                Pure Pahadi • Organic • HIMSARU
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright 2026 & Policy Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 HIMSARU. All rights reserved.</p>
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
