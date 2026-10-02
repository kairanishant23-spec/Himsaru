'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1b3a20] text-warm pt-16 pb-12 border-t border-forest2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-honey to-gold flex items-center justify-center text-base shadow-sm">
                🏔
              </div>
              <span className="font-serif text-xl font-bold tracking-[0.2em] text-honey">
                HIMSARU
              </span>
            </div>
            <p className="text-xs text-warm/70 leading-relaxed">
              Pure Taste of the Himalayas — Crafted by the people of Uttarakhand, delivered with mountain love.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/himsaruuttarakhand_01/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition"
                title="Instagram"
              >
                📸
              </a>
              <a
                href="https://wa.me/917900474328"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition"
                title="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-honey mb-4">
              Shop Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-warm/80">
              <li>
                <Link href="/#products" className="hover:text-honey transition">
                  A2 Badri Cow Ghee
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-honey transition">
                  Wild Forest Honey
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-honey transition">
                  Pahadi Herb Salt (Pisyun Loon)
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-honey transition">
                  Alpine Red &amp; Black Rice
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-honey transition">
                  Mountain Pulses (Rajma, Gehat)
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-honey transition">
                  Stone-Ground Spices (Pahadi Haldi)
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-honey mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-warm/80">
              <li>
                <Link href="/" className="hover:text-honey transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-honey transition">
                  Products Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-honey transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-soul" className="hover:text-honey transition">
                  The Soul &amp; Artisans
                </Link>
              </li>
              <li>
                <Link href="/distribute" className="hover:text-honey transition">
                  Distribute / Partner
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-honey transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-honey transition opacity-60">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-honey mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-warm/80">
              <p>📍 Tarikhet, Almora, Uttarakhand, India</p>
              <p>📞 Vishal: +91 79004 74328</p>
              <p>📞 Ajay: +91 90123 24850</p>
              <p>✉️ himsaru2025@gmail.com</p>
              <div className="pt-2">
                <a
                  href="https://wa.me/917900474328?text=Hello%20HIMSARU!%20I%20would%20like%20to%20know%20more."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-700/80 hover:bg-green-700 text-white font-semibold transition text-xs shadow-sm"
                >
                  <span>💬</span>
                  <span>WhatsApp Founders</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm/60">
          <p>© {new Date().getFullYear()} <strong className="text-honey">HIMSARU</strong>. All rights reserved. Made with ❤ in the Himalayas.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
            <span>🏔</span>
            <span>Proudly Made in Uttarakhand</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
