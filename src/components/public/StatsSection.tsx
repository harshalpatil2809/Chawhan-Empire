import Container from "@/components/ui/Container";
import { stats } from "@/data/company";

export default function StatsSection({
  tone = "dark",
}: {
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    // <section className={dark ? 'bg-[#0C1422]' : 'border-y border-concrete-dark bg-white'} aria-label="Company track record">
    <section
      className="dark:bg-[#0C1422] border-y
      border-concrete-dark
      bg-[var(--primary)]"
      aria-label="Company track record"
    >
      <Container className="grid grid-cols-2 gap-px bg-transparent py-0 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`px-2 py-8 sm:px-6 ${dark ? "text-white" : "text-ink"}`}
          >
            <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {s.value}
            </p>
            <p
              className={`mt-1.5 text-sm ${dark ? "text-concrete/70" : "text-ink-mute"}`}
            >
              {s.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
