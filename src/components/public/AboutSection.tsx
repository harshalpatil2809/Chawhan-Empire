"use client";

import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary)] py-20 sm:py-28 dark:bg-[#0C1422]">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative">
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-signal">
              About us
            </span>

            <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Building on a legacy of{" "}
              <span className="text-white/40">trust &amp; quality.</span>
            </h2>

            <div className="mt-8 h-px w-16 bg-steel" />

            <p className="mt-6 text-sm leading-7 text-white/50">
              Chawhan Infratech Pvt. Ltd.
            </p>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
              Chawhan Infratech stands on a strong foundation of{" "}
              <span className="text-white">trust, craftsmanship</span> and{" "}
              <span className="text-white">uncompromising quality.</span>
            </p>

            <p className="mt-6 text-[15px] leading-7 text-white/60">
              Our journey began with delivering some of the finest roofing
              solutions through Chawhan Pipe and Tiles, Rajura, protecting homes
              with strength, durability and reliability.
            </p>

            <p className="mt-5 text-[15px] leading-7 text-white/60">
              Today, we proudly take the next step in our evolution by venturing
              into township development — bringing the same legacy of excellence
              into creating thoughtfully planned living spaces.
            </p>

            <p className="mt-5 border-l border-steel pl-5 text-[15px] font-medium leading-7 text-white/80">
              At Chawhan Infratech, every project reflects our belief that
              quality is not just a promise — it is our legacy.
            </p>
          </div>
        </div>

        {/* Image story */}
        <div className="mt-16 grid gap-4 sm:mt-20 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Main image */}
          <div className="group relative aspect-[16/10] overflow-hidden bg-concrete">
            <Image
              src="/Home.png"
              alt="Chawhan Infratech development"
              fill
              className="transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="text-xs uppercase tracking-[0.18em] text-white/60">
                Our journey
              </span>

              <p className="mt-2 max-w-sm font-display text-xl font-medium text-white sm:text-2xl">
                From trusted roofing solutions to thoughtfully planned
                communities.
              </p>
            </div>
          </div>

          {/* Secondary image */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-concrete lg:aspect-auto">
            <Image
              src="/ChauhanEmpire.png"
              alt="Chawhan Infratech architecture"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-xs uppercase tracking-[0.18em] text-white/60">
                Chawhan Infratech
              </span>

              <p className="mt-2 font-display text-lg font-medium text-white">
                Creating spaces built for the future.
              </p>
            </div>
          </div>
        </div>

        {/* Vision / Mission */}
        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:mt-20 md:grid-cols-2">
          {/* Vision */}
          <div className="bg-[var(--primary)] p-7 sm:p-10 dark:bg-[#0C1422]">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center border border-white/10 text-sm text-white/70">
                01
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-signal">
                Our vision
              </span>
            </div>

            <h3 className="mt-7 font-display text-2xl font-semibold text-white">
              Quality living begins here.
            </h3>

            <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/60">
              From trusted roofing excellence to thoughtfully designed
              townships, we are building spaces where quality living begins.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[var(--primary)] p-7 sm:p-10 dark:bg-[#0C1422]">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center border border-white/10 text-sm text-white/70">
                02
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-signal">
                Our mission
              </span>
            </div>

            <h3 className="mt-7 font-display text-2xl font-semibold text-white">
              Modern living. Thoughtfully built.
            </h3>

            <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/60">
              Bringing metro-style living, modern infrastructure and quality
              homes to the heart of Chandrapur.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 sm:flex sm:items-end sm:justify-between">
          <p className="max-w-2xl font-display text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
            We don't just build properties.
            <span className="text-white/40">
              {" "}
              We build the foundation for better living.
            </span>
          </p>

          <span className="mt-6 block text-xs uppercase tracking-[0.18em] text-white/30 sm:mt-0">
            Chawhan Infratech Pvt. Ltd.
          </span>
        </div>
      </Container>
    </section>
  );
}
