'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Search, ShoppingBag, User as UserIcon, Menu, LogOut, Shield } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenMobileNav: () => void;
}

export default function Navbar({ onOpenSearch, onOpenMobileNav }: NavbarProps) {
  const { totalItems, setCartOpen } = useCart();
  const { user, openAuthModal, logout } = useAuth();
  const [userDropdown, setUserDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 h-16 bg-cream/90 backdrop-blur-md border-b border-mist/50 transition-all">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition-transform">
            🏔️
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-wider text-forest block leading-none">
              HIMSARU
            </span>
            <span className="text-[10px] uppercase tracking-widest text-honey font-semibold block mt-0.5">
              Pure Taste of the Himalayas
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text">
          <Link href="/" className="hover:text-forest transition">
            Home
          </Link>
          <Link href="/#products" className="hover:text-forest transition">
            Creations
          </Link>
          <Link href="/our-soul" className="flex items-center gap-1.5 text-forest font-semibold hover:text-moss transition">
            <span className="text-honey">✦</span>
            The Soul
            <span className="text-[10px] uppercase tracking-wider bg-honey/20 text-forest px-2 py-0.5 rounded-full font-bold">
              Story
            </span>
          </Link>
          <Link href="/#distribute" className="hover:text-forest transition">
            Distribute
          </Link>
          <Link href="/#contact" className="hover:text-forest transition">
            Contact
          </Link>
        </div>

        {/* Actions (Search, Cart, User, Mobile menu) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-xl text-forest hover:bg-warm/70 transition"
            title="Search Products"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2.5 rounded-xl text-forest hover:bg-warm/70 transition"
            title="Cart"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber text-forest text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {totalItems}
              </span>
            )}
          </button>

          {/* Account Button / Dropdown */}
          <div className="relative">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdown(!userDropdown)}
                  className="flex items-center gap-2 p-1.5 pr-3 rounded-xl border border-mist hover:border-forest/40 bg-warm/40 transition"
                >
                  <div className="w-7 h-7 rounded-lg bg-forest text-white flex items-center justify-center text-xs font-bold">
                    {user.firstName[0]}
                  </div>
                  <span className="text-xs font-semibold text-forest hidden sm:inline">
                    {user.firstName}
                  </span>
                </button>

                {userDropdown && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-mist/80 py-2 z-50 animate-fadeIn"
                    onClick={() => setUserDropdown(false)}
                  >
                    <div className="px-4 py-2 border-b border-mist/40">
                      <p className="text-xs text-stone">Signed in as</p>
                      <p className="text-xs font-bold text-forest truncate">+91 {user.phone}</p>
                    </div>
                    {user.role === 'admin' && (
                      <Link
                        href="/admin"
                        className="flex items-center gap-2 px-4 py-2.5 text-xs text-text hover:bg-warm/60 transition"
                      >
                        <Shield className="w-4 h-4 text-forest" />
                        Admin Dashboard
                      </Link>
                    )}
                    <button
                      onClick={logout}
                      className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-xs text-red-600 hover:bg-red-50 transition"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => openAuthModal('login')}
                className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-forest text-white hover:bg-forest2 transition shadow-sm"
              >
                <UserIcon className="w-4 h-4" />
                Sign In
              </button>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={onOpenMobileNav}
            className="md:hidden p-2.5 rounded-xl text-forest hover:bg-warm/70 transition"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
