import type { EnquiryStatus, ProjectStatus } from '@/lib/types';
import { cn } from '@/lib/utils';

const tones: Record<string, string> = {
  Completed: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  Ongoing: 'bg-amber-50 text-amber-800 border-amber-200',
  Draft: 'bg-concrete text-ink-mute border-concrete-dark',
  New: 'bg-steel/10 text-steel-dark border-steel/30',
  Contacted: 'bg-sky-50 text-sky-800 border-sky-200',
  'In Discussion': 'bg-violet-50 text-violet-800 border-violet-200',
  Converted: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  Closed: 'bg-stone-100 text-stone-600 border-stone-200'
};

export default function StatusBadge({
  status,
  className
}: {
  status: ProjectStatus | EnquiryStatus | 'Draft';
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium',
        tones[status] ?? tones.Draft,
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {status}
    </span>
  );
}
