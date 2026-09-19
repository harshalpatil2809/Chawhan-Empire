import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <p className="font-display text-sm font-semibold text-steel">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        That page is not on site
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-mute">
        The link may be old or mistyped. Start from the projects page or send us your
        requirement and we will take it from there.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/projects" className="rounded-sm bg-steel px-5 py-3 text-sm font-medium text-white">
          View projects
        </Link>
        <Link href="/" className="rounded-sm border border-ink/20 px-5 py-3 text-sm font-medium text-ink">
          Back home
        </Link>
      </div>
    </Container>
  );
}
