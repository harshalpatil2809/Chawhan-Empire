'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function ComingSoon() {
  return (
    <main className="relative isolate min-h-[80vh] overflow-hidden bg-[var(--primary)] dark:bg-[#0C1422]">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-steel/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-signal/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <Container className="flex min-h-[80vh] items-center justify-center py-20 sm:py-28">
        <div className="mx-auto w-full max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Under development
          </div>

          {/* Main heading */}
          <h1 className="mt-7 font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Something
            <span className="block text-white/45">worth waiting for.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-white/65 sm:text-base">
            We&apos;re currently working behind the scenes to bring this
            experience to life. The page isn&apos;t ready just yet, but it&apos;s
            coming soon.
          </p>

          {/* Progress / status card */}
          <div className="mx-auto mt-10 max-w-md border border-white/10 bg-white/[0.035] p-5 text-left backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-white/45">
                Project status
              </span>

              <span className="text-xs font-medium text-signal">
                In progress
              </span>
            </div>

            <div className="mt-4 h-1 overflow-hidden bg-white/10">
              <div className="h-full w-[68%] bg-steel" />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-white/40">
              <span>Building</span>
              <span>68%</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-white/90"
            >
              Back to home
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              Get in touch
            </Link>
          </div>

          {/* Bottom detail */}
          <div className="mt-14 flex items-center justify-center gap-4 text-xs text-white/30">
            <span className="h-px w-10 bg-white/10" />
            <span>Crafted with intention</span>
            <span className="h-px w-10 bg-white/10" />
          </div>
        </div>
      </Container>
    </main>
  );
}