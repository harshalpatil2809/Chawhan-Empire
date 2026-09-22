'use client';

import Container from '@/components/ui/Container';

const MAP_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7499.792489321078!2d79.31011539462503!3d19.970865209407123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d587feeb354f%3A0x4277364635922871!2sChawhan%20Empire!5e0!3m2!1sen!2sin!4v1790062099988!5m2!1sen!2sin';

export default function LocationSection() {
  return (
    <section className="bg-[var(--primary)] py-16 sm:py-20 dark:bg-[#0C1422]">
      <Container>
        {/* Section heading */}
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-signal">
            Find us
          </span>

          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Visit our location
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-white/65">
            Find us at Chawhan Empire. Use the map below to get directions and
            plan your visit.
          </p>
        </div>

        {/* Map + details */}
        <div className="mt-10 grid overflow-hidden border border-white/10 bg-white/[0.025] lg:grid-cols-[1fr_320px]">
          {/* Map */}
          <div className="min-h-[350px] bg-concrete sm:min-h-[450px] lg:min-h-[500px]">
            <iframe
              src={MAP_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Chawhan Empire location map"
              className="min-h-[350px] w-full sm:min-h-[450px] lg:min-h-[500px]"
            />
          </div>

          {/* Location details */}
          <aside className="flex flex-col justify-between border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                Location
              </span>

              <h3 className="mt-3 font-display text-xl font-semibold text-white">
                Chawhan Empire
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                Visit us at our location or use the map to find the easiest
                route.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Chawhan+Empire"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Get directions
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
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </aside>
        </div>
      </Container>
    </section>
  );
}