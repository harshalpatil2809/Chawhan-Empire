import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/Button';
import SmartImage from '@/components/ui/SmartImage';
import ServiceCard from '@/components/public/ServiceCard';
import TestimonialCard from '@/components/public/TestimonialCard';
import StatsSection from '@/components/public/StatsSection';
import CTASection from '@/components/public/CTASection';
import FeaturedProjects from '@/components/public/FeaturedProjects';
import { services } from '@/data/services';
import { processSteps, reasons, testimonials } from '@/data/company';
import { img } from '@/data/images';

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <SmartImage
            src={img.heroSite}
            alt="Completed residential project by BuildCraft Constructions in Nagpur"
            priority
            className="opacity-45"
          />
        </div>
        <Container className="relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-signal">Nagpur, Maharashtra</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building spaces.
              <br />
              Creating legacies.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-concrete/85 sm:text-lg">
              Fifteen years of residential, commercial and turnkey construction across
              Maharashtra. Fixed scope, measured billing and a site engineer on every
              project, from the first drawing to the day you get the keys.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote" className="bg-signal text-ink hover:bg-signal/90">
                Request a quote
              </ButtonLink>
              <ButtonLink href="/projects" variant="ghost">
                View our projects
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <StatsSection />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            title="What we build"
            intro="Six service lines, one team. Whether you are starting from an empty plot or reworking a building that is decades old, the same engineers see it through."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-concrete/40 py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              title="Recent work"
              intro="A few projects from the last two years, in Nagpur, Pune, Wardha and Amravati."
            />
            <ButtonLink href="/projects" variant="secondary" size="sm">
              View all projects
            </ButtonLink>
          </div>
          <div className="mt-12">
            <FeaturedProjects />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <SectionHeading
            title="Why clients stay with us"
            intro="Most of our work comes from referrals. These are the reasons clients give when they send someone our way."
          />
          <ul className="divide-y divide-concrete-dark border-y border-concrete-dark">
            {reasons.map((r) => (
              <li key={r.title} className="py-5">
                <h3 className="font-display text-base font-semibold text-ink">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-mute">{r.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24">
        <Container>
          <SectionHeading
            tone="dark"
            title="How a project runs"
            intro="Five stages, each with something you sign off on before the next one starts."
          />
          <ol className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((s) => (
              <li key={s.step} className="bg-ink p-6">
                <span className="font-display text-sm font-semibold text-signal">{s.step}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-concrete/70">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading title="What our clients say" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
