'use client';

import { useStore } from '@/context/StoreProvider';
import ProjectCard from './ProjectCard';
import { ProjectCardSkeleton } from '@/components/ui/Skeleton';

export default function FeaturedProjects() {
  const { ready, featuredProjects, publishedProjects } = useStore();
  const list = featuredProjects.length ? featuredProjects : publishedProjects.slice(0, 4);

  if (!ready) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!list.length) {
    return (
      <div className="border border-dashed border-concrete-dark bg-white p-10 text-center">
        <p className="text-sm text-ink-mute">
          No projects published yet. Add one from the admin dashboard and it will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
