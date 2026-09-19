'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const nav = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/projects', label: 'Projects' },
  { href: '/admin/enquiries', label: 'Enquiries' },
  { href: '/admin/settings', label: 'Settings' }
];

export default function AdminSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Admin" className="flex h-full flex-col gap-1 p-4">
      <Link href="/" className="mb-5 flex items-center gap-3 px-2" onClick={onNavigate}>
        <span className="flex h-9 w-9 items-center justify-center bg-signal font-display text-sm font-bold text-ink">
          BC
        </span>
        <span className="leading-tight">
          <span className="block font-display text-sm font-semibold text-white">BuildCraft</span>
          <span className="block text-[11px] text-concrete/60">Admin panel</span>
        </span>
      </Link>
      {nav.map((item) => {
        const active =
          item.href === '/admin' ? pathname === '/admin' : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'rounded-sm px-3 py-2.5 text-sm transition-colors',
              active ? 'bg-white/10 font-medium text-white' : 'text-concrete/70 hover:bg-white/5 hover:text-white'
            )}
          >
            {item.label}
          </Link>
        );
      })}
      <Link
        href="/"
        onClick={onNavigate}
        className="mt-auto rounded-sm px-3 py-2.5 text-sm text-concrete/60 hover:text-white"
      >
        View public website
      </Link>
    </nav>
  );
}
