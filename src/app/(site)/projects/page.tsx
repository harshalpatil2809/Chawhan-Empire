import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ProjectsExplorer from "@/components/public/ProjectsExplorer";
import CTASection from "@/components/public/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Residential, commercial, turnkey and renovation projects completed by BuildCraft Constructions across Nagpur, Pune, Wardha and Amravati.",
  openGraph: {
    title: "Projects | BuildCraft Constructions",
    description: "Construction projects delivered across Maharashtra.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-whit/50 dark:bg-[#0C1422] bg-[var(--secondary)] py-16 sm:py-20">
        <Container>
          <h1 className="font-display text-4xl font-semibold tracking-tight dark:text-white/90 text-ink-soft sm:text-5xl">
            Our projects
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed dark:text-white/70 text-ink-soft">
            Every project here was built by our own engineers and site teams.
            Filter by type or status, and open any project for drawings-level
            detail on scope, duration and what was actually delivered.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16 dark:bg-[#0C1422] bg-[var(--secondary)]">
        <Container>
          <ProjectsExplorer />
        </Container>
      </section>

      <CTASection
        title="Want something similar?"
        body="Tell us the plot size, location and what you have in mind. We will send a stage-wise estimate within three working days."
      />
    </>
  );
}
