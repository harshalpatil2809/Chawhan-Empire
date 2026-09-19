import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const control =
  'w-full rounded-sm border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-mute/60 focus:outline-none focus:ring-2 focus:ring-steel/40 focus:border-steel disabled:bg-concrete/40';

export function Label({ htmlFor, children, required }: { htmlFor: string; children: ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
      {children}
      {required ? <span className="text-red-600"> *</span> : null}
    </label>
  );
}

export function ErrorText({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-red-700">
      {children}
    </p>
  );
}

export function Input({ error, className, ...rest }: InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  return <input className={cn(control, error ? 'border-red-400' : 'border-concrete-dark', className)} {...rest} />;
}

export function Textarea({ error, className, ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean }) {
  return <textarea className={cn(control, 'min-h-[120px] resize-y', error ? 'border-red-400' : 'border-concrete-dark', className)} {...rest} />;
}

export function Select({ error, className, children, ...rest }: SelectHTMLAttributes<HTMLSelectElement> & { error?: boolean }) {
  return (
    <select className={cn(control, error ? 'border-red-400' : 'border-concrete-dark', className)} {...rest}>
      {children}
    </select>
  );
}
