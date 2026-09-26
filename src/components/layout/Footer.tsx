'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-forest text-warm pt-16 pb-12 border-t border-forest2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🏔️</span>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                HIMSARU
              </span>
            </div>
            <p className="text-xs text-warm/70 leading-relaxed mb-4">
              Pure Taste of the Himalayas. Authentic, high-altitude Pahadi superfoods harvested ethically by local women collectives across Uttarakhand.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest2 text-[11px] font-semibold text-honey border border-honey/20">
              <span>🏔️</span>
              <span>Proudly Made in Uttarakhand</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-honey mb-4">
              Sacred Harvests
            </h4>
            <ul className="space-y-2.5 text-xs text-warm/80">
              <li>
                <Link href="/#products" className="hover:text-white transition">
                  A2 Badri Cow Ghee
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition">
                  Wild Forest Honey
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition">
                  Pahadi Herb Salt (Pisyun Loon)
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition">
                  Himalayan Red Rice
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition">
                  Organic Stone-Ground Spices
                </Link>
              </li>
            </ul>
          </div>

          {/* Story & Values */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-honey mb-4">
              Our Movement
            </h4>
            <ul className="space-y-2.5 text-xs text-warm/80">
              <li>
                <Link href="/our-soul" className="hover:text-white transition">
                  The Soul & Heritage
                </Link>
              </li>
              <li>
                <Link href="/our-soul#artisans" className="hover:text-white transition">
                  Women of the Himalayas
                </Link>
              </li>
              <li>
                <Link href="/our-soul#bilona" className="hover:text-white transition">
                  Ancient Bilona Method
                </Link>
              </li>
              <li>
                <Link href="/#distribute" className="hover:text-white transition">
                  Partner / Distributor Inquiries
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition opacity-60">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-honey mb-4">
              Uttarakhand Direct
            </h4>
            <div className="space-y-3 text-xs text-warm/80">
              <p>📍 Dehradun & Munsiyari, Uttarakhand, India</p>
              <p>📞 Phone: +91 79004 74328</p>
              <p>✉️ Email: support@himsaru.com</p>
              <a
                href="https://wa.me/917900474328?text=Hello%20HIMSARU!%20I%20would%20like%20to%20know%20more."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-xl bg-green-700/60 hover:bg-green-700 text-white font-semibold transition text-xs"
              >
                <span>💬</span>
                <span>WhatsApp Customer Care</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm/50">
          <p>© {new Date().getFullYear()} HIMSARU Organic LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:underline cursor-pointer">Purity Guarantee</span>
            <span className="hover:underline cursor-pointer">Shipping & Returns</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
