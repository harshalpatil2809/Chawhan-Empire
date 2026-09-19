import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { site } from '@/lib/site';

export default function CTASection({
  title = 'Planning your next project?',
  body = 'Send us the plot details or your existing drawings. We will come back with a realistic budget and timeline, not a placeholder number.',
  action = 'Request a quote',
  href = '/request-a-quote'
}: {
  title?: string;
  body?: string;
  action?: string;
  href?: string;
}) {
  return (
    <section className="bg-steel-dark">
      <Container className="flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <ButtonLink href={href} variant="primary" className="bg-signal text-ink hover:bg-signal/90">
            {action}
          </ButtonLink>
          <a
            href={`tel:${site.phoneDisplay.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
