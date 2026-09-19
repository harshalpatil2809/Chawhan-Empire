import Link from 'next/link';

export default function DashboardCard({
  label,
  value,
  note,
  href
}: {
  label: string;
  value: string | number;
  note?: string;
  href?: string;
}) {
  const content = (
    <div className="h-full border border-concrete-dark bg-white p-5 transition-colors hover:border-steel/50">
      <p className="text-sm text-ink-mute">{label}</p>
      <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">{value}</p>
      {note ? <p className="mt-1 text-xs text-ink-mute">{note}</p> : null}
    </div>
  );
  return href ? <Link href={href}>{content}</Link> : content;
}
