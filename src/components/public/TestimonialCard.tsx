export default function TestimonialCard({
  quote,
  name,
  role,
  project
}: {
  quote: string;
  name: string;
  role: string;
  project: string;
}) {
  return (
    <figure className="flex h-full flex-col border border-concrete-dark bg-white p-6">
      <blockquote className="flex-1 text-[15px] leading-relaxed text-ink">
        {quote}
      </blockquote>
      <figcaption className="mt-5 border-t border-concrete pt-4 text-sm">
        <span className="block font-medium text-ink">{name}</span>
        <span className="block text-ink-mute">{role}</span>
        <span className="mt-1 block text-xs text-steel">{project}</span>
      </figcaption>
    </figure>
  );
}
