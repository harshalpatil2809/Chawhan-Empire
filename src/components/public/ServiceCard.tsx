import Link from 'next/link';
import type { Service } from '@/data/services';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col border border-concrete-dark bg-white p-6 transition-colors hover:border-steel/50">
      <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-mute">{service.short}</p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-5 text-sm font-medium text-steel hover:text-steel-dark"
      >
        What this includes
      </Link>
    </article>
  );
}
