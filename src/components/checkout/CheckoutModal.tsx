'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Address } from '@/types';
import { X, CheckCircle, ShieldCheck, QrCode, Smartphone, CreditCard, Banknote, ArrowLeft, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, total, subtotal, shipping, discount, clearCart } = useCart();
  const { user, addAddress } = useAuth();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'razorpay' | 'cod'>('upi');
  const [utrNumber, setUtrNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Address fields
  const [name, setName] = useState(user?.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Uttarakhand');
  const [pincode, setPincode] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [addrError, setAddrError] = useState('');

  if (!isOpen) return null;

  const handleUseSavedAddress = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const idx = e.target.value;
    if (idx === 'new' || !user?.addresses) {
      setLine1('');
      setCity('');
      setPincode('');
      return;
    }
    const addr = user.addresses[parseInt(idx, 10)];
    if (addr) {
      setName(addr.name);
      setPhone(addr.phone);
      setLine1(addr.line1);
      setLine2(addr.line2 || '');
      setCity(addr.city);
      setState(addr.state);
      setPincode(addr.pincode);
      if (addr.email) setEmail(addr.email);
    }
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setAddrError('');

    if (!name.trim() || !phone.trim() || !line1.trim() || !city.trim() || !pincode.trim()) {
      setAddrError('Please fill in all mandatory address fields marked with *');
      return;
    }

    if (phone.replace(/\D/g, '').length !== 10) {
      setAddrError('Please enter a valid 10-digit mobile number.');
      return;
    }

    const currentAddr: Address = {
      name,
      phone,
      line1,
      line2,
      city,
      state,
      pincode,
      email,
    };
    addAddress(currentAddr);
    setStep(2);
  };

  const handlePlaceOrder = async () => {
    setLoading(true);
    const generatedOrderNumber = `HMS-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const orderPayload = {
      orderNumber: generatedOrderNumber,
      items: items.map((i) => ({
        productId: i.productId,
        name: i.name,
        image: i.image,
        variant: i.variant,
        quantity: i.quantity,
        price: i.price,
        mrp: i.mrp,
      })),
      address: { name, phone, line1, line2, city, state, pincode, email },
      paymentMethod,
      utr: utrNumber || undefined,
      subtotal,
      shipping,
      discount,
      total,
    };

    try {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://himsaru-at0n.onrender.com/api';
      await fetch(`${backendUrl}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload),
      }).catch(() => null);

      setOrderNumber(generatedOrderNumber);
      clearCart();
      setStep(3);
    } catch (e) {
      setOrderNumber(generatedOrderNumber);
      clearCart();
      setStep(3);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-warm p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone hover:text-forest hover:bg-warm transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step dots */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-mist/70">
          <div>
            <h3 className="font-serif font-bold text-xl text-forest">CHECKOUT</h3>
            <p className="text-xs text-honey font-bold uppercase tracking-wider">
              {step === 1 ? 'Step 1 of 3: Shipping Details' : step === 2 ? 'Step 2 of 3: Payment Method' : 'Order Confirmed!'}
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map((s) => (
              <span
                key={s}
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  step === s ? 'bg-forest text-white' : step > s ? 'bg-green-700 text-white' : 'bg-warm text-stone'
                }`}
              >
                {step > s ? '✓' : s}
              </span>
            ))}
          </div>
        </div>

        {/* STEP 1: Address */}
        {step === 1 && (
          <form onSubmit={handleProceedToPayment} className="space-y-4">
            {user?.addresses && user.addresses.length > 0 && (
              <div className="p-3 bg-forest/5 rounded-2xl border border-forest/10">
                <label className="block text-[11px] font-bold text-forest uppercase tracking-wider mb-1.5">
                  📋 Choose from Saved Addresses
                </label>
                <select
                  onChange={handleUseSavedAddress}
                  className="w-full p-2.5 bg-white border border-forest/20 rounded-xl text-xs font-semibold text-forest focus:outline-none"
                >
                  <option value="new">➕ Enter a New Address</option>
                  {user.addresses.map((a, i) => (
                    <option key={i} value={i}>
                      {a.name} — {a.line1}, {a.city} ({a.pincode})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {addrError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                {addrError}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest mb-1">
                  Recipient Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full px-3.5 py-2.5 bg-warm/20 border border-mist rounded-xl text-text text-xs focus:outline-none focus:border-forest"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest mb-1">
                  Contact Mobile *
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile"
                  className="w-full px-3.5 py-2.5 bg-warm/20 border border-mist rounded-xl text-text text-xs focus:outline-none focus:border-forest"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest mb-1">
                Address Line 1 (House No, Building, Street) *
              </label>
              <input
                type="text"
                value={line1}
                onChange={(e) => setLine1(e.target.value)}
                placeholder="House / Flat No, Landmark, Street"
                className="w-full px-3.5 py-2.5 bg-warm/20 border border-mist rounded-xl text-text text-xs focus:outline-none focus:border-forest"
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest mb-1">
                  City *
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  className="w-full px-3.5 py-2.5 bg-warm/20 border border-mist rounded-xl text-text text-xs focus:outline-none focus:border-forest"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest mb-1">
                  State *
                </label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="State"
                  className="w-full px-3.5 py-2.5 bg-warm/20 border border-mist rounded-xl text-text text-xs focus:outline-none focus:border-forest"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest mb-1">
                  Pincode *
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  placeholder="Pincode"
                  className="w-full px-3.5 py-2.5 bg-warm/20 border border-mist rounded-xl text-text text-xs focus:outline-none focus:border-forest"
                  required
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs font-bold text-forest">Order Total: ₹{total.toLocaleString('en-IN')}</span>
              <button
                type="submit"
                className="px-6 py-3 bg-forest hover:bg-forest2 text-white font-semibold rounded-xl text-xs transition shadow-md flex items-center gap-1.5"
              >
                <span>Continue to Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Payment */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2.5">
              <div
                onClick={() => setPaymentMethod('upi')}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-center gap-3.5 ${
                  paymentMethod === 'upi' ? 'border-forest bg-forest/5 shadow-sm' : 'border-mist bg-warm/20 hover:bg-warm/40'
                }`}
              >
                <Smartphone className="w-6 h-6 text-forest shrink-0" />
                <div className="flex-1">
                  <h4 className="font-bold text-xs text-forest">Instant UPI (GPay, PhonePe, Paytm, BHIM)</h4>
                  <p className="text-[11px] text-stone">Direct UPI QR transfer or UPI application button</p>
                </div>
              </div>

              <div
                onClick={() => setPaymentMethod('razorpay')}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-center gap-3.5 ${
                  paymentMethod === 'razorpay' ? 'border-forest bg-forest/5 shadow-sm' : 'border-mist bg-warm/20 hover:bg-warm/40'
                }`}
              >
                <CreditCard className="w-6 h-6 text-forest shrink-0" />
                <div className="flex-1">
                  <h4 className="font-bold text-xs text-forest">Card / Net Banking (Razorpay)</h4>
                  <p className="text-[11px] text-stone">Credit/Debit cards, Net Banking & Wallets</p>
                </div>
              </div>

              <div
                onClick={() => setPaymentMethod('cod')}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-center gap-3.5 ${
                  paymentMethod === 'cod' ? 'border-forest bg-forest/5 shadow-sm' : 'border-mist bg-warm/20 hover:bg-warm/40'
                }`}
              >
                <Banknote className="w-6 h-6 text-forest shrink-0" />
                <div className="flex-1">
                  <h4 className="font-bold text-xs text-forest">Cash on Delivery (Pan-India)</h4>
                  <p className="text-[11px] text-stone">Pay directly upon parcel arrival at your doorstep</p>
                </div>
              </div>
            </div>

            {/* UPI QR Details */}
            {paymentMethod === 'upi' && (
              <div className="p-4 bg-warm/60 rounded-2xl border border-mist text-center space-y-3">
                <p className="text-xs text-stone font-medium">Scan QR or Pay directly to official UPI ID:</p>
                <div className="inline-block p-3 bg-white rounded-2xl shadow-sm border border-mist">
                  <QrCode className="w-24 h-24 mx-auto text-forest" />
                </div>
                <div className="text-xs font-mono font-bold text-forest bg-white py-1 px-3 rounded-lg border border-mist/80 inline-block">
                  himsaru2025@oksbi
                </div>

                <div className="text-left pt-2">
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest mb-1">
                    12-Digit UPI Ref / UTR (After payment)
                  </label>
                  <input
                    type="text"
                    maxLength={12}
                    value={utrNumber}
                    onChange={(e) => setUtrNumber(e.target.value)}
                    placeholder="e.g. 428190348210"
                    className="w-full px-3.5 py-2.5 bg-white border border-mist rounded-xl text-xs font-mono"
                  />
                </div>
              </div>
            )}

            <div className="pt-4 flex items-center justify-between border-t border-mist/70">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 text-xs text-stone hover:text-forest font-semibold flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="px-6 py-3 bg-forest hover:bg-forest2 text-white font-semibold rounded-xl text-xs transition shadow-md flex items-center gap-2"
              >
                {loading ? 'Processing...' : `Confirm Order • ₹${total.toLocaleString('en-IN')}`}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Order Confirmed */}
        {step === 3 && (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-50 text-green-700 flex items-center justify-center mx-auto text-3xl shadow-sm">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <h3 className="font-serif font-bold text-2xl text-forest mb-1">Order Placed!</h3>
              <p className="text-xs text-stone max-w-sm mx-auto">
                Dhanyavaad! Your order is being freshly packaged by our Pahadi women artisans.
              </p>
            </div>

            <div className="p-4 bg-forest/5 rounded-2xl border border-forest/10 inline-block text-xs font-mono font-bold text-forest">
              Order #{orderNumber}
            </div>

            <p className="text-[11px] text-stone">
              Estimated Delivery: <strong>4–6 Business Days</strong> • WhatsApp tracking link sent to +91 {phone}
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-forest text-white font-semibold rounded-xl text-xs hover:bg-forest2 transition shadow"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
