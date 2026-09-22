'use client';

import Link from 'next/link';
import { useStore } from '@/context/StoreProvider';
import Container from '@/components/ui/Container';
import SmartImage from '@/components/ui/SmartImage';
import StatusBadge from '@/components/ui/StatusBadge';
import Skeleton from '@/components/ui/Skeleton';
import CTASection from '@/components/public/CTASection';
import { formatDate } from '@/lib/utils';

export default function ProjectDetail({ slug }: { slug: string }) {
  const { ready, getProjectBySlug } = useStore();
  const project = getProjectBySlug(slug);

  if (!ready) {
    return (
      <Container className="py-16">
        <Skeleton className="h-[40vh] w-full" />
        <Skeleton className="mt-8 h-8 w-2/3" />
        <Skeleton className="mt-4 h-4 w-1/3" />
      </Container>
    );
  }

  if (!project) {
    return (
      <Container className="py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">Project not found</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-mute">
          This project may have been unpublished or removed from the portfolio.
        </p>
        <Link href="/projects" className="mt-6 inline-block text-sm font-medium text-steel">
          Back to all projects
        </Link>
      </Container>
    );
  }

  const stats = [
    { label: 'Project size', value: project.size },
    { label: 'Duration', value: project.duration },
    { label: 'Status', value: project.status },
    { label: 'Location', value: project.location }
  ];

  const hasBeforeAfter =
    project.beforeImages.length > 0 && project.afterImages.length > 0;

  return (
    <>
      <div className="relative isolate bg-ink">
        <div className="absolute inset-0">
          <SmartImage
            src={project.coverImage}
            alt={`${project.name} in ${project.location}`}
            priority
            className="opacity-45"
          />
        </div>
        <Container className="relative py-20 sm:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-concrete/70">
            <Link href="/projects" className="hover:text-white">
              Projects
            </Link>
            <span className="px-2">/</span>
            <span className="text-white">{project.name}</span>
          </nav>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="text-sm text-signal">{project.category}</span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-3 text-base text-concrete/85">
            {project.location} &middot; {project.client}
          </p>
        </Container>
      </div>

      <section className="border-b border-concrete-dark dark:bg-[#0C1422] bg-[var(--primary)]">
        <Container>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-sm text-white">{s.label}</dt>
                <dd className="mt-1 font-display text-xl font-semibold text-white/80">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-[var(--primary)] dark:bg-[#0C1422]">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
              About this project
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/80">
              {project.description}
            </p>

            <h3 className="mt-10 font-display text-lg font-semibold text-white">Highlights</h3>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-white/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-steel" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <aside className="p-6">
            <h2 className="font-display text-lg font-semibold text-white">Scope of work</h2>
            <ul className="mt-4 divide-y divide-concrete">
              {project.scope.map((s) => (
                <li key={s} className="py-3 text-sm leading-relaxed text-white/80">
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-concrete pt-4 text-sm text-white/80">
              {project.status === 'Completed' ? 'Handed over' : 'Expected handover'}:{' '}
              <span className="font-medium text-white/80">{formatDate(project.completionDate)}</span>
            </p>
          </aside>
        </Container>
      </section>

      <section className="bg-[var(--primary)] dark:bg-[#0C1422] py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
            Project gallery
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.images.map((image, i) => (
              <figure
                key={`${image.url}-${i}`}
                className={i === 0 ? 'sm:col-span-2' : undefined}
              >
                <div className={i === 0 ? 'aspect-[16/9] bg-concrete' : 'aspect-[4/3] bg-concrete'}>
                  <SmartImage src={image.url} alt={image.alt} />
                </div>
                <figcaption className="mt-2 text-xs text-white/80">{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {hasBeforeAfter ? (
        <section className="py-16 sm:py-20 bg-[var(--primary)] dark:bg-[#0C1422]">
          <Container>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
              Before and after
            </h2>
            <div className="mt-8 space-y-8">
              {project.beforeImages.map((before, i) => {
                const after = project.afterImages[i];
                if (!after) return null;
                return (
                  <div key={before.url} className="grid gap-4 sm:grid-cols-2">
                    <figure>
                      <div className="aspect-[4/3] bg-concrete">
                        <SmartImage src={before.url} alt={before.alt} />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-white/80">
                        Before
                      </figcaption>
                    </figure>
                    <figure>
                      <div className="aspect-[4/3] bg-concrete">
                        <SmartImage src={after.url} alt={after.alt} />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-white/80">After</figcaption>
                    </figure>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection
        title="Interested in a similar project?"
        body={`Send us your requirement and we will share a budget range and timeline based on what we did at ${project.name}.`}
      />
    </>
  );
}
