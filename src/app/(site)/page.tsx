import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import SmartImage from "@/components/ui/SmartImage";
import ServiceCard from "@/components/public/ServiceCard";
import TestimonialCard from "@/components/public/TestimonialCard";
import StatsSection from "@/components/public/StatsSection";
import CTASection from "@/components/public/CTASection";
import FeaturedProjects from "@/components/public/FeaturedProjects";
import { services } from "@/data/services";
import { processSteps, reasons, testimonials } from "@/data/company";
import { img } from "@/data/images";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink ">
        <div className="absolute inset-0">
          <SmartImage
            src={"/Home.png"}
            alt="Completed residential project by BuildCraft Constructions in Nagpur"
            priority
            className="opacity-45"
          />
        </div>
        <Container className="relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-signal">
              Nagpur, Maharashtra
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building spaces.
              <br />
              Creating legacies.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-concrete/85 sm:text-lg">
              Fifteen years of residential, commercial and turnkey construction
              across Maharashtra. Fixed scope, measured billing and a site
              engineer on every project, from the first drawing to the day you
              get the keys.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="/request-a-quote"
                className="bg-signal text-ink hover:bg-signal/90"
              >
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

      <section className="dark:bg-[#0C1422] bg-[var(--secondary)] py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 dark:text-white">
            <SectionHeading
              title="Recent work"
              intro="A few projects from the last two years, in Nagpur, Pune, Wardha and Amravati."
            />
            <ButtonLink
              className="dark:bg-[#DCE5DD] dark:hover:bg-[#DCE5DD]/80 dark:text-black bg-[var(--primary)] hover:bg-[#3F5F46]"
              href="/projects"
              size="sm"
            >
              View all projects
            </ButtonLink>
          </div>
          <div className="mt-12">
            <FeaturedProjects />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
