'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Address } from '@/types';

interface AuthContextType {
  user: User | null;
  token: string | null;
  authModalOpen: boolean;
  authMode: 'login' | 'register';
  prefilledPhone: string;
  setPrefilledPhone: (phone: string) => void;
  openAuthModal: (mode?: 'login' | 'register') => void;
  closeAuthModal: () => void;
  setAuthMode: (mode: 'login' | 'register') => void;
  loginWithUser: (userData: User, jwtToken: string) => void;
  logout: () => void;
  addAddress: (address: Address) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [prefilledPhone, setPrefilledPhone] = useState('');

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem('himsaru_token');
      const storedUser = localStorage.getItem('himsaru_user');
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error('Failed to load user session', e);
    }
  }, []);

  const openAuthModal = (mode: 'login' | 'register' = 'login') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  const loginWithUser = (userData: User, jwtToken: string) => {
    setUser(userData);
    setToken(jwtToken);
    try {
      localStorage.setItem('himsaru_token', jwtToken);
      localStorage.setItem('himsaru_user', JSON.stringify(userData));
    } catch (e) {
      console.error('Failed to save session', e);
    }
    setAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    try {
      localStorage.removeItem('himsaru_token');
      localStorage.removeItem('himsaru_user');
    } catch (e) {
      console.error('Failed to clear session', e);
    }
  };

  const addAddress = (newAddr: Address) => {
    if (!user) return;
    const updated = {
      ...user,
      addresses: [...(user.addresses || []), newAddr],
    };
    setUser(updated);
    try {
      localStorage.setItem('himsaru_user', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save address update', e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        authModalOpen,
        authMode,
        prefilledPhone,
        setPrefilledPhone,
        openAuthModal,
        closeAuthModal,
        setAuthMode,
        loginWithUser,
        logout,
        addAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
