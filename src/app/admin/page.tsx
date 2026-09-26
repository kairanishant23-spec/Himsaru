'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Shield, ShoppingBag, Leaf, MessageSquare, LogOut, ArrowLeft, CheckCircle2, Clock } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

export default function AdminPage() {
  const { user, loginWithUser, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'products' | 'contacts'>('dashboard');

  // Admin login states
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [orders, setOrders] = useState<any[]>([
    {
      id: 'HMS-7X9B-4120',
      customer: 'Pooja Bhatt',
      phone: '+91 98765 43210',
      items: 'Badri Cow Ghee (A2) 1kg x 1',
      total: 2999,
      method: 'UPI',
      status: 'confirmed',
      date: 'Today, 11:30 AM',
    },
    {
      id: 'HMS-3K2P-9812',
      customer: 'Arun Rawat',
      phone: '+91 98112 34567',
      items: 'Wild Jamun Honey 500g x 2',
      total: 1060,
      method: 'COD',
      status: 'shipped',
      date: 'Yesterday',
    },
  ]);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminEmail === 'admin@himsaru.com' && adminPassword === 'admin123') {
      loginWithUser(
        {
          id: 'admin-1',
          firstName: 'Admin',
          lastName: 'Officer',
          email: adminEmail,
          phone: '7900474328',
          role: 'admin',
        },
        'admin-jwt-token'
      );
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. (Demo: admin@himsaru.com / admin123)');
    }
  };

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-forest flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-warm/40 text-center">
          <div className="w-12 h-12 rounded-2xl bg-amber/20 text-honey flex items-center justify-center mx-auto text-xl mb-3">
            🔐
          </div>
          <h2 className="font-serif text-2xl font-bold text-forest">HIMSARU Admin</h2>
          <p className="text-xs text-stone uppercase tracking-wider font-semibold mb-6">
            Authorized Personnel Only
          </p>

          {loginError && (
            <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl mb-4 border border-red-200">
              {loginError}
            </div>
          )}

          <form onSubmit={handleAdminLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
                Admin Email
              </label>
              <input
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="admin@himsaru.com"
                className="w-full px-4 py-3 bg-warm/30 border border-mist rounded-xl text-text text-sm focus:outline-none focus:border-forest"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
                Admin Password
              </label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-warm/30 border border-mist rounded-xl text-text text-sm focus:outline-none focus:border-forest"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-forest hover:bg-forest2 text-white font-semibold rounded-xl text-sm transition shadow-lg mt-2"
            >
              Sign In to Admin Portal
            </button>
          </form>

          <div className="mt-6">
            <Link href="/" className="text-xs text-stone hover:text-forest font-semibold">
              ← Return to Main Storefront
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm/30 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-forest text-warm p-6 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center gap-3 pb-6 border-b border-forest2 mb-6">
            <span className="text-2xl">🏔️</span>
            <div>
              <h3 className="font-serif font-bold text-white tracking-wider">HIMSARU</h3>
              <p className="text-[10px] text-honey uppercase font-bold tracking-widest">Admin Control</p>
            </div>
          </div>

          <nav className="space-y-1.5 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition ${
                activeTab === 'dashboard' ? 'bg-forest2 text-white shadow' : 'hover:bg-forest2/50 text-warm/80'
              }`}
            >
              <Shield className="w-4 h-4 text-honey" />
              <span>Overview Metrics</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition ${
                activeTab === 'orders' ? 'bg-forest2 text-white shadow' : 'hover:bg-forest2/50 text-warm/80'
              }`}
            >
              <ShoppingBag className="w-4 h-4 text-honey" />
              <span>Customer Orders</span>
              <span className="ml-auto bg-amber text-forest px-1.5 py-0.5 rounded text-[10px] font-bold">
                {orders.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('products')}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition ${
                activeTab === 'products' ? 'bg-forest2 text-white shadow' : 'hover:bg-forest2/50 text-warm/80'
              }`}
            >
              <Leaf className="w-4 h-4 text-honey" />
              <span>Product Inventory</span>
              <span className="ml-auto text-warm/60 font-mono text-[10px]">{PRODUCTS.length}</span>
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-forest2 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-warm/80 hover:text-white px-3 py-2 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Storefront View</span>
          </Link>

          <button
            onClick={logout}
            className="w-full flex items-center gap-2 text-xs text-red-400 hover:text-red-300 px-3 py-2 transition"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-forest">Operations Dashboard</h2>
              <p className="text-xs text-stone mt-1">Real-time revenue, inventory, and order dispatch tracking.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-3xl border border-mist shadow-sm">
                <span className="text-xs font-semibold text-stone uppercase tracking-wider block mb-1">
                  Total Orders
                </span>
                <span className="text-3xl font-bold text-forest">{orders.length}</span>
                <span className="text-[11px] text-green-700 block mt-2 font-medium">✓ 100% On-schedule dispatch</span>
              </div>

              <div className="p-6 bg-white rounded-3xl border border-mist shadow-sm">
                <span className="text-xs font-semibold text-stone uppercase tracking-wider block mb-1">
                  Gross Revenue
                </span>
                <span className="text-3xl font-bold text-forest">₹4,059</span>
                <span className="text-[11px] text-honey block mt-2 font-semibold">100% fair artisan split</span>
              </div>

              <div className="p-6 bg-white rounded-3xl border border-mist shadow-sm">
                <span className="text-xs font-semibold text-stone uppercase tracking-wider block mb-1">
                  Active Products
                </span>
                <span className="text-3xl font-bold text-forest">{PRODUCTS.length}</span>
                <span className="text-[11px] text-moss block mt-2 font-medium">Pahadi superfood catalog</span>
              </div>
            </div>

            {/* Recent Orders table */}
            <div className="bg-white rounded-3xl p-6 border border-mist shadow-sm">
              <h3 className="font-serif font-bold text-lg text-forest mb-4">Latest Orders</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-warm/50 text-stone border-b border-mist">
                    <tr>
                      <th className="p-3">Order ID</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Items</th>
                      <th className="p-3">Total</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mist">
                    {orders.map((o) => (
                      <tr key={o.id}>
                        <td className="p-3 font-mono font-bold text-forest">{o.id}</td>
                        <td className="p-3 font-medium text-text">{o.customer} ({o.phone})</td>
                        <td className="p-3 text-stone">{o.items}</td>
                        <td className="p-3 font-bold text-forest">₹{o.total}</td>
                        <td className="p-3">
                          <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase bg-green-50 text-green-700">
                            {o.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-forest">All Customer Orders</h2>
            <div className="bg-white rounded-3xl p-6 border border-mist shadow-sm divide-y divide-mist">
              {orders.map((o) => (
                <div key={o.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono font-bold text-forest text-sm">{o.id}</span>
                    <p className="text-xs text-text font-medium">{o.customer} • {o.phone}</p>
                    <p className="text-xs text-stone">{o.items}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-bold text-forest block">₹{o.total}</span>
                    <span className="text-[10px] uppercase font-bold text-honey">{o.method}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-forest">Product Inventory</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRODUCTS.map((p) => (
                <div key={p.id} className="bg-white p-4 rounded-2xl border border-mist flex gap-3 items-center">
                  <img src={p.img} alt="" className="w-14 h-14 rounded-xl object-cover shrink-0" />
                  <div className="min-w-0">
                    <h4 className="font-serif font-bold text-xs text-forest truncate">{p.name}</h4>
                    <p className="text-[10px] text-stone">{p.hindi}</p>
                    <p className="text-xs font-bold text-forest mt-1">₹{p.variants[0]?.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
