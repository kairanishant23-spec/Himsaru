'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { X, ShoppingBag, User as UserIcon, LogOut, Shield } from 'lucide-react';
import { useModalHistory } from '@/hooks/useModalHistory';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export default function MobileNav({ isOpen, onClose, onOpenSearch }: MobileNavProps) {
  const { user, openAuthModal, logout } = useAuth();
  const { totalItems, setCartOpen } = useCart();

  // Fix: mobile back button closes this drawer instead of leaving the site
  const handleClose = useModalHistory(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
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
              onClick={handleClose}
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
                handleClose();
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
              handleClose();
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
                  onClick={handleClose}
                  className="w-full py-2.5 bg-forest2 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Admin Dashboard
                </Link>
              )}
              <button
                onClick={() => {
                  logout();
                  handleClose();
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
                handleClose();
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
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 shadow"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>WhatsApp Order</span>
          </a>
        </div>
      </div>
    </div>
  );
}
