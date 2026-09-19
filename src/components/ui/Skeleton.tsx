import { cn } from '@/lib/utils';

export default function Skeleton({ className }: { className?: string }) {
  return <div className={cn('animate-pulse rounded-sm bg-concrete', className)} />;
}

export function ProjectCardSkeleton() {
  return (
    <div className="border border-concrete-dark bg-white">
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      <div className="space-y-3 p-5">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-3 w-full" />
      </div>
    </div>
  );
}
