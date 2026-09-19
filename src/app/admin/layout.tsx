'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { AdminShellContext } from '@/components/admin/shell';
import { useAuth } from '@/context/AuthProvider';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { ready, isAuthenticated } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const isLogin = pathname === '/admin/login';

  useEffect(() => {
    if (ready && !isAuthenticated && !isLogin) router.replace('/admin/login');
  }, [ready, isAuthenticated, isLogin, router]);

  useEffect(() => setMenuOpen(false), [pathname]);

  if (isLogin) return <>{children}</>;

  if (!ready || !isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-concrete/40">
        <p className="text-sm text-ink-mute">Checking your session...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-concrete/40 lg:flex">
      <aside className="hidden w-60 shrink-0 bg-ink lg:block">
        <div className="sticky top-0 h-screen">
          <AdminSidebar />
        </div>
      </aside>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/50"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative h-full w-64 bg-ink">
            <AdminSidebar onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      ) : null}

      <div className="min-w-0 flex-1">
        <AdminShellContext.Provider value={{ openMenu: () => setMenuOpen(true) }}>
          {children}
        </AdminShellContext.Provider>
      </div>
    </div>
  );
}
