import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SmartImage from '@/components/ui/SmartImage';
import { ButtonLink } from '@/components/ui/Button';
import CTASection from '@/components/public/CTASection';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Residential and commercial construction, renovation, turnkey projects, interior and civil work, and project management from BuildCraft Constructions, Nagpur.',
  openGraph: {
    title: 'Construction services | BuildCraft Constructions',
    description: 'Six service lines covering the full build.'
  }
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-concrete-dark bg-white py-16 sm:py-20">
        <Container>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Services
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-mute">
            Six service lines, all delivered in-house. Each one below explains what is
            included, who it suits and what you get at the end of it.
          </p>
        </Container>
      </section>

      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={index % 2 === 1 ? 'bg-concrete/40 py-16 sm:py-20' : 'py-16 sm:py-20'}
        >
          <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
              <div className="aspect-[4/3] bg-concrete">
                <SmartImage src={service.image} alt={`${service.title} by BuildCraft Constructions`} />
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {service.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-mute">{service.detail}</p>
              <p className="mt-4 text-sm text-ink">
                <span className="font-medium">Best for:</span> {service.audience}
              </p>
              <ul className="mt-6 space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-mute">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-steel" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
              <ButtonLink href="/request-a-quote" size="sm" className="mt-7">
                Get a quote for this
              </ButtonLink>
            </div>
          </Container>
        </section>
      ))}

      <CTASection />
    </>
  );
}
