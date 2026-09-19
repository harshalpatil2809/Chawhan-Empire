import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import QuoteForm from '@/components/public/QuoteForm';
import { site, whatsappLink } from '@/lib/site';
import { processSteps } from '@/data/company';

export const metadata: Metadata = {
  title: 'Request a quote',
  description:
    'Tell BuildCraft Constructions about your construction project in Nagpur or Maharashtra and get a stage-wise estimate within three working days.',
  openGraph: {
    title: 'Request a construction quote | BuildCraft Constructions',
    description: 'Send your project details and get a realistic estimate.'
  }
};

export default function RequestQuotePage() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        <div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Request a quote
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-mute">
            The more you tell us, the closer the first number will be. Most enquiries get a
            call back within one working day and a written estimate within three.
          </p>
          <div className="mt-8">
            <QuoteForm />
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28">
          <div className="border border-concrete-dark bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-ink">What happens next</h2>
            <ol className="mt-4 space-y-4">
              {processSteps.slice(0, 3).map((s) => (
                <li key={s.step} className="text-sm">
                  <span className="font-medium text-steel">{s.step}</span>
                  <span className="ml-2 font-medium text-ink">{s.title}</span>
                  <p className="mt-1 leading-relaxed text-ink-mute">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-concrete-dark bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Prefer to talk?</h2>
            <p className="mt-2 text-sm text-ink-mute">
              Call the office between 9:30 AM and 7:00 PM, Monday to Saturday.
            </p>
            <a
              href={`tel:${site.phoneDisplay.replace(/\s/g, '')}`}
              className="mt-3 block font-display text-lg font-semibold text-ink hover:text-steel"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-steel hover:text-steel-dark"
            >
              Message us on WhatsApp
            </a>
          </div>
        </aside>
      </Container>
    </section>
  );
}
