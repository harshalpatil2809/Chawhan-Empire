'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 bg-[#0C1422] backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Image src="/Logo.png" alt='Logo' width={70} height={70}/>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-sm transition-colors hover:text-[#e0b54f]',
                  active ? 'text-[#CDA547] font-medium' : 'text-[#8b8181]'
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/request-a-quote" size="sm" className="px-5 py-2.5">
            Request a quote
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex h-10 w-10 items-center justify-center border border-concrete-dark text-ink lg:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M3 3l12 12M15 3L3 15" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
          </svg>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-concrete-dark bg-paper lg:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile" className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="border-b border-concrete py-3 text-sm text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <ButtonLink href="/request-a-quote" className="mt-4 w-full">
              Request a quote
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
