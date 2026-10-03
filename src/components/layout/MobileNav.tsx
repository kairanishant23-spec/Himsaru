'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { X, ShoppingBag, User as UserIcon, LogOut, Shield } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export default function MobileNav({ isOpen, onClose, onOpenSearch }: MobileNavProps) {
  const { user, openAuthModal, logout } = useAuth();
  const { totalItems, setCartOpen } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-cream shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slideIn">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-mist">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-forest/20 shadow-sm flex-shrink-0">
                <img src="/images/himsaru_logo.png" alt="HIMSARU" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif font-bold text-lg text-forest">HIMSARU</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone hover:bg-warm transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-6 space-y-4 text-base font-semibold text-text">
            <Link
              href="/"
              onClick={onClose}
              className="block py-2 text-forest hover:text-moss transition"
            >
              🏔️ Home
            </Link>
            <Link
              href="/products"
              onClick={onClose}
              className="block py-2 text-forest hover:text-moss transition"
            >
              🌾 Sacred Harvests (All Products)
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className="block py-2 text-forest hover:text-moss transition"
            >
              📖 About Us
            </Link>
            <Link
              href="/our-soul"
              onClick={onClose}
              className="block py-2 text-honey font-bold transition flex items-center justify-between"
            >
              <span>❤️ The Soul & Artisans</span>
              <span className="text-[10px] uppercase tracking-wider bg-honey/20 text-forest px-2 py-0.5 rounded-full font-bold">
                Must Read
              </span>
            </Link>
            <Link
              href="/distribute"
              onClick={onClose}
              className="block py-2 text-forest hover:text-moss transition"
            >
              🤝 Distribute
            </Link>
            <Link
              href="/#contact"
              onClick={onClose}
              className="block py-2 text-forest hover:text-moss transition"
            >
              📮 Contact Us
            </Link>
            <button
              onClick={() => {
                onClose();
                onOpenSearch();
              }}
              className="w-full text-left py-2 text-stone hover:text-forest transition flex items-center gap-2"
            >
              🔍 Search Catalog
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-mist space-y-3">
          <button
            onClick={() => {
              onClose();
              setCartOpen(true);
            }}
            className="w-full py-3 bg-warm border border-mist rounded-xl font-semibold text-sm text-forest flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>View Bag ({totalItems})</span>
          </button>

          {user ? (
            <div className="space-y-2">
              <div className="p-3 bg-white rounded-xl border border-mist text-xs">
                <p className="text-stone">Logged in as</p>
                <p className="font-bold text-forest">{user.firstName} (+91 {user.phone})</p>
              </div>
              {user.role === 'admin' && (
                <Link
                  href="/admin"
                  onClick={onClose}
                  className="w-full py-2.5 bg-forest2 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Admin Dashboard
                </Link>
              )}
              <button
                onClick={() => {
                  logout();
                  onClose();
                }}
                className="w-full py-2.5 text-xs text-red-600 font-semibold flex items-center justify-center gap-1.5"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                onClose();
                openAuthModal('login');
              }}
              className="w-full py-3 bg-forest text-white rounded-xl font-semibold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <UserIcon className="w-4 h-4" />
              Sign In (Mobile)
            </button>
          )}

          <a
            href="https://wa.me/917900474328?text=Hello%20HIMSARU"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 bg-green-700 text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 shadow"
          >
            💬 WhatsApp Order
          </a>
        </div>
      </div>
    </div>
  );
}
