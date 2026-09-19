'use client';

import { useState } from 'react';
import { useStore } from '@/context/StoreProvider';
import { Button } from '@/components/ui/Button';
import { ErrorText, Input, Label, Textarea } from '@/components/ui/Field';
import { isEmail, isPhone, sanitize } from '@/lib/utils';

interface State {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const empty: State = { name: '', phone: '', email: '', message: '' };

export default function ContactForm() {
  const { addMessage } = useStore();
  const [form, setForm] = useState<State>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof State, string>>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key: keyof State, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const submit = async () => {
    const next: Partial<Record<keyof State, string>> = {};
    if (form.name.trim().length < 2) next.name = 'Enter your name.';
    if (!isPhone(form.phone)) next.phone = 'Enter a phone number we can call.';
    if (!isEmail(form.email)) next.email = 'Enter a valid email address.';
    if (form.message.trim().length < 10) next.message = 'Tell us a little more.';
    setErrors(next);
    if (Object.keys(next).length) return;

    setSending(true);
    await new Promise((r) => setTimeout(r, 500));
    addMessage({
      name: sanitize(form.name),
      phone: sanitize(form.phone),
      email: sanitize(form.email),
      message: sanitize(form.message)
    });
    setSending(false);
    setSent(true);
    setForm(empty);
  };

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        void submit();
      }}
      className="border border-concrete-dark bg-white p-6 sm:p-8"
    >
      <h2 className="font-display text-xl font-semibold text-ink">Send us a message</h2>

      {sent ? (
        <p
          role="status"
          className="mt-5 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
        >
          Message received. We will reply to your email or call you back shortly.
        </p>
      ) : null}

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-name" required>
            Name
          </Label>
          <Input id="c-name" value={form.name} error={Boolean(errors.name)} onChange={(e) => set('name', e.target.value)} />
          <ErrorText id="c-name-error">{errors.name}</ErrorText>
        </div>
        <div>
          <Label htmlFor="c-phone" required>
            Phone
          </Label>
          <Input id="c-phone" type="tel" value={form.phone} error={Boolean(errors.phone)} onChange={(e) => set('phone', e.target.value)} />
          <ErrorText id="c-phone-error">{errors.phone}</ErrorText>
        </div>
      </div>
      <div className="mt-5">
        <Label htmlFor="c-email" required>
          Email
        </Label>
        <Input id="c-email" type="email" value={form.email} error={Boolean(errors.email)} onChange={(e) => set('email', e.target.value)} />
        <ErrorText id="c-email-error">{errors.email}</ErrorText>
      </div>
      <div className="mt-5">
        <Label htmlFor="c-message" required>
          Message
        </Label>
        <Textarea id="c-message" value={form.message} error={Boolean(errors.message)} onChange={(e) => set('message', e.target.value)} />
        <ErrorText id="c-message-error">{errors.message}</ErrorText>
      </div>
      <Button type="submit" disabled={sending} className="mt-6 w-full sm:w-auto">
        {sending ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  );
}
