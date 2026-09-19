export const cn = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(' ');

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const formatDate = (iso: string) => {
  if (!iso) return '-';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

/** Basic escaping for values that came from user input. */
export const sanitize = (value: string) =>
  value.replace(/[<>]/g, '').trim().slice(0, 2000);

export const createId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

export const isPhone = (value: string) => /^[0-9+\s-]{10,15}$/.test(value.trim());
