'use client';

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-2xl font-semibold text-ink">Something failed to load</h1>
      <p className="mt-3 max-w-md text-sm text-ink-mute">
        The page did not finish loading. Try again, and if it keeps happening, reload the
        browser.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-sm bg-steel px-5 py-3 text-sm font-medium text-white"
      >
        Try again
      </button>
    </div>
  );
}
