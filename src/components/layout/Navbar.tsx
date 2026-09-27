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
    <nav className="h-16 bg-[#1b3a20]/95 backdrop-blur-md border-b border-white/10 text-white transition-all flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-honey to-gold flex items-center justify-center text-lg shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
            🏔
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.25em] text-honey block leading-none">
              HIMSARU
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-white/50 block mt-1">
              Pure Taste of the Himalayas
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-white/75">
          <Link href="/" className="hover:text-honey transition">
            Home
          </Link>
          <Link href="/#products" className="hover:text-honey transition">
            Products
          </Link>
          <Link href="/#about" className="hover:text-honey transition">
            About Us
          </Link>
          <Link
            href="/our-soul"
            className="flex items-center gap-1.5 text-white/90 hover:text-honey transition font-semibold"
          >
            <span>The Soul</span>
            <span className="text-[9px] lowercase bg-honey/20 text-honey border border-honey/30 px-1.5 py-0.2 rounded-full font-bold">
              story
            </span>
          </Link>
          <Link href="/#distribute" className="hover:text-honey transition">
            Distribute
          </Link>
          <Link
            href="/#contact"
            className="bg-gradient-to-r from-gold to-amber hover:from-amber hover:to-honey text-forest font-bold px-4 py-1.5 rounded-full text-xs shadow-sm transition hover:scale-105"
          >
            Contact
          </Link>
        </div>

        {/* Actions (Search, Cart, User, Mobile menu) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-xl text-white/80 hover:text-honey hover:bg-white/5 transition"
            title="Search Products"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 rounded-xl text-white/80 hover:text-honey hover:bg-white/5 transition"
            title="Cart"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber text-forest text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center shadow px-1">
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
                  className="flex items-center gap-2 p-1.5 pr-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 transition text-white"
                >
                  <div className="w-6 h-6 rounded-lg bg-gold text-forest flex items-center justify-center text-xs font-bold">
                    {user.firstName[0]}
                  </div>
                  <span className="text-xs font-semibold hidden sm:inline text-white">
                    {user.firstName}
                  </span>
                </button>

                {userDropdown && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-mist py-2 z-50 animate-fadeIn text-text"
                    onClick={() => setUserDropdown(false)}
                  >
                    <div className="px-4 py-2 border-b border-mist/40">
                      <p className="text-[11px] text-stone">Signed in as</p>
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
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition shadow-sm"
              >
                <UserIcon className="w-3.5 h-3.5 text-honey" />
                <span>Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={onOpenMobileNav}
            className="md:hidden p-2 rounded-xl text-white/80 hover:text-honey hover:bg-white/5 transition"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
