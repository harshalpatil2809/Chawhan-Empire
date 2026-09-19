'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthProvider';
import { Button } from '@/components/ui/Button';
import { ErrorText, Input, Label } from '@/components/ui/Field';

export default function AdminLoginPage() {
  const router = useRouter();
  const { login, isAuthenticated, ready } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (ready && isAuthenticated) router.replace('/admin');
  }, [ready, isAuthenticated, router]);

  const submit = async () => {
    setBusy(true);
    setError(null);
    const result = await login(email, password);
    setBusy(false);
    if (result.ok) router.replace('/admin');
    else setError(result.error ?? 'Sign in failed.');
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-5 py-12">
      <div className="w-full max-w-sm">
        <Link href="/" className="mb-8 flex items-center justify-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center bg-signal font-display text-sm font-bold text-ink">
            BC
          </span>
          <span className="font-display text-lg font-semibold text-white">BuildCraft</span>
        </Link>

        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            void submit();
          }}
          className="bg-white p-7"
        >
          <h1 className="font-display text-xl font-semibold text-ink">Sign in to your panel</h1>
          <p className="mt-1.5 text-sm text-ink-mute">
            Manage projects and enquiries for the website.
          </p>

          <div className="mt-6">
            <Label htmlFor="admin-email" required>
              Email
            </Label>
            <Input
              id="admin-email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="admin-password" required>
              Password
            </Label>
            <Input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error ? (
            <div className="mt-4 border border-red-200 bg-red-50 px-4 py-3">
              <ErrorText id="login-error">{error}</ErrorText>
            </div>
          ) : null}

          <Button type="submit" disabled={busy} className="mt-6 w-full">
            {busy ? 'Signing in...' : 'Sign in'}
          </Button>

          <div className="mt-6 border border-dashed border-concrete-dark bg-concrete/30 p-4 text-sm">
            <p className="font-medium text-ink">Demo credentials</p>
            <p className="mt-1 text-ink-mute">admin@buildcraft.demo</p>
            <p className="text-ink-mute">demo123</p>
            <button
              type="button"
              className="mt-2 text-sm font-medium text-steel hover:text-steel-dark"
              onClick={() => {
                setEmail('admin@buildcraft.demo');
                setPassword('demo123');
              }}
            >
              Fill demo credentials
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-xs text-concrete/60">
          Demo authentication only. Replace with real auth before going live.
        </p>
      </div>
    </main>
  );
}
