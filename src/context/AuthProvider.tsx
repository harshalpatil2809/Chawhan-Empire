'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from 'react';

/**
 * DEMO AUTHENTICATION ONLY.
 * Credentials are checked by /api/auth/login and the session is a flag in
 * sessionStorage. Replace with NextAuth / Supabase Auth before going live.
 */

const SESSION_KEY = 'buildcraft.demo.session';

interface AuthValue {
  ready: boolean;
  isAuthenticated: boolean;
  email: string | null;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    try {
      setEmail(window.sessionStorage.getItem(SESSION_KEY));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const login = useCallback(async (inputEmail: string, password: string) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: inputEmail, password })
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        return { ok: false, error: data.error ?? 'Could not sign in. Try again.' };
      }
      window.sessionStorage.setItem(SESSION_KEY, inputEmail);
      setEmail(inputEmail);
      return { ok: true };
    } catch {
      return { ok: false, error: 'Network problem. Check your connection and retry.' };
    }
  }, []);

  const logout = useCallback(() => {
    window.sessionStorage.removeItem(SESSION_KEY);
    setEmail(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ ready, isAuthenticated: Boolean(email), email, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
