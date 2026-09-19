import Container from '@/components/ui/Container';
import Skeleton from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <Container className="py-20">
      <Skeleton className="h-10 w-1/2" />
      <Skeleton className="mt-4 h-4 w-2/3" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <Skeleton key={i} className="h-72" />
        ))}
      </div>
    </Container>
  );
}
