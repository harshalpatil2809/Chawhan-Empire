'use client';

import type { ReactNode } from 'react';
import { useAuth } from '@/context/AuthProvider';
import { Button } from '@/components/ui/Button';

export default function AdminHeader({
  title,
  description,
  onOpenMenu,
  actions
}: {
  title: string;
  description?: string;
  onOpenMenu: () => void;
  actions?: ReactNode;
}) {
  const { email, logout } = useAuth();

  return (
    <header className="border-b border-concrete-dark bg-white">
      <div className="flex flex-wrap items-center gap-4 px-5 py-4 sm:px-8">
        <button
          type="button"
          onClick={onOpenMenu}
          className="inline-flex h-10 w-10 items-center justify-center border border-concrete-dark lg:hidden"
        >
          <span className="sr-only">Open admin menu</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            <path d="M2 5h14M2 9h14M2 13h14" />
          </svg>
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="truncate font-display text-xl font-semibold tracking-tight text-ink">
            {title}
          </h1>
          {description ? <p className="mt-0.5 truncate text-sm text-ink-mute">{description}</p> : null}
        </div>
        <div className="flex items-center gap-3">
          {actions}
          <span className="hidden text-sm text-ink-mute sm:inline">{email}</span>
          <Button variant="secondary" size="sm" onClick={logout}>
            Sign out
          </Button>
        </div>
      </div>
    </header>
  );
}
