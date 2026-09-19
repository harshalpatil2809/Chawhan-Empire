'use client';

import { useMemo, useState } from 'react';
import { useStore } from '@/context/StoreProvider';
import ProjectCard from './ProjectCard';
import { ProjectCardSkeleton } from '@/components/ui/Skeleton';
import { Input } from '@/components/ui/Field';
import { cn } from '@/lib/utils';

const filters = [
  'All',
  'Residential',
  'Commercial',
  'Renovation',
  'Ongoing',
  'Completed'
] as const;

type Filter = (typeof filters)[number];

export default function ProjectsExplorer() {
  const { ready, publishedProjects } = useStore();
  const [filter, setFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publishedProjects
      .filter((p) => {
        if (filter === 'All') return true;
        if (filter === 'Ongoing' || filter === 'Completed') return p.status === filter;
        return p.category === filter;
      })
      .filter((p) =>
        q
          ? [p.name, p.location, p.category, p.summary]
              .join(' ')
              .toLowerCase()
              .includes(q)
          : true
      );
  }, [publishedProjects, filter, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-y border-concrete-dark py-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm transition-colors',
                filter === f
                  ? 'border-ink bg-ink text-white'
                  : 'border-concrete-dark bg-white text-ink-mute hover:border-ink/40 hover:text-ink'
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="lg:w-72">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <Input
            id="project-search"
            type="search"
            placeholder="Search by name, city or type"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-ink-mute" aria-live="polite">
        {ready ? `${results.length} project${results.length === 1 ? '' : 's'}` : 'Loading projects'}
      </p>

      {!ready ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      ) : results.length === 0 ? (
        <div className="mt-6 border border-dashed border-concrete-dark bg-white p-12 text-center">
          <h2 className="font-display text-lg font-semibold text-ink">No projects match that</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-ink-mute">
            Try a different filter, or clear the search box to see the full portfolio.
          </p>
          <button
            type="button"
            onClick={() => {
              setFilter('All');
              setQuery('');
            }}
            className="mt-5 text-sm font-medium text-steel hover:text-steel-dark"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
