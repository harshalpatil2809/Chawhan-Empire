import Link from 'next/link';
import SmartImage from '@/components/ui/SmartImage';
import StatusBadge from '@/components/ui/StatusBadge';
import type { Project } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col border border-concrete-dark bg-white">
      <Link href={`/projects/${project.slug}`} className="block overflow-hidden">
        <div className="aspect-[4/3] bg-concrete">
          <SmartImage
            src={project.coverImage}
            alt={`${project.name}, ${project.category.toLowerCase()} project in ${project.location}`}
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium text-steel">{project.category}</span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
          <Link href={`/projects/${project.slug}`} className="hover:text-steel">
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-ink-mute">{project.location}</p>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-mute">
          {project.summary}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-concrete pt-4 text-xs text-ink-mute">
          <span>{project.size}</span>
          <span>
            {project.status === 'Completed' ? 'Handed over ' : 'Target '}
            {formatDate(project.completionDate)}
          </span>
        </div>
      </div>
    </article>
  );
}
