export interface ProductVariant {
  size: string;
  price: number;
  mrp: number;
  sku: string;
}

export interface Product {
  id: string;
  cat: 'ghee' | 'honey' | 'salt' | 'dal' | 'pulses' | 'rice' | 'spice' | 'spices';
  name: string;
  hindi: string;
  badge?: 'BESTSELLER' | 'NEW' | 'LIMITED' | 'SEASONAL' | 'HERITAGE';
  feat?: boolean;
  img: string;
  imgs: string[];
  desc: string;
  longDesc: string;
  tags: string[];
  ing: string;
  ben: string[];
  how: string;
  variants: ProductVariant[];
  rating?: number;
  reviewsCount?: number;
}

export interface CartItem {
  id: string; // product id + variant size
  productId: string;
  name: string;
  hindi: string;
  image: string;
  variant: string;
  price: number;
  mrp: number;
  quantity: number;
}

export interface Address {
  id?: string;
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  email?: string;
  isDefault?: boolean;
}

export interface User {
  id: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  role: 'user' | 'admin';
  addresses?: Address[];
}

export interface Order {
  _id?: string;
  orderNumber: string;
  items: CartItem[];
  address: Address;
  paymentMethod: 'upi' | 'razorpay' | 'cod';
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  status: 'placed' | 'confirmed' | 'processing' | 'shipped' | 'out_for_delivery' | 'delivered' | 'cancelled';
  utr?: string;
  createdAtIST?: string;
  createdAt?: string;
}
