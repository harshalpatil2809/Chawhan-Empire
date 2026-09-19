'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ErrorText, Input, Label, Select, Textarea } from '@/components/ui/Field';
import ImageUploader from '@/components/ui/ImageUploader';
import type { Project, ProjectCategory, ProjectDraft, ProjectStatus } from '@/lib/types';
import { useStore } from '@/context/StoreProvider';
import { sanitize } from '@/lib/utils';

const categories: ProjectCategory[] = [
  'Residential',
  'Commercial',
  'Renovation',
  'Interior',
  'Turnkey'
];

const statuses: ProjectStatus[] = ['Ongoing', 'Completed'];

const blank: ProjectDraft = {
  name: '',
  location: '',
  category: 'Residential',
  status: 'Ongoing',
  featured: false,
  published: true,
  summary: '',
  description: '',
  completionDate: '',
  size: '',
  duration: '',
  client: '',
  coverImage: '',
  images: [],
  beforeImages: [],
  afterImages: [],
  scope: [],
  highlights: []
};

export default function ProjectForm({ project }: { project?: Project }) {
  const router = useRouter();
  const { addProject, updateProject } = useStore();
  const toDraft = (source: Project): ProjectDraft => {
    const { id, slug, createdAt, ...draft } = source;
    void id;
    void slug;
    void createdAt;
    return draft;
  };

  const [form, setForm] = useState<ProjectDraft>(project ? toDraft(project) : blank);
  const [scopeText, setScopeText] = useState((project?.scope ?? []).join('\n'));
  const [highlightText, setHighlightText] = useState((project?.highlights ?? []).join('\n'));
  const [errors, setErrors] = useState<Partial<Record<keyof ProjectDraft, string>>>({});
  const [saving, setSaving] = useState<'draft' | 'publish' | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const set = <K extends keyof ProjectDraft>(key: K, value: ProjectDraft[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const next: Partial<Record<keyof ProjectDraft, string>> = {};
    if (form.name.trim().length < 3) next.name = 'Give the project a name.';
    if (form.location.trim().length < 2) next.location = 'Add the city or area.';
    if (form.summary.trim().length < 15) next.summary = 'Write a one-line summary for the card.';
    if (form.description.trim().length < 30)
      next.description = 'Describe the project in a few sentences.';
    if (!form.completionDate) next.completionDate = 'Pick a completion or target date.';
    if (!form.size.trim()) next.size = 'Add the built-up area, e.g. 2,400 sq.ft.';
    if (!form.duration.trim()) next.duration = 'Add the duration, e.g. 9 Months.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const save = async (mode: 'draft' | 'publish') => {
    setFormError(null);
    if (!validate()) {
      setFormError('Some fields still need attention. They are marked in red.');
      return;
    }
    setSaving(mode);
    await new Promise((r) => setTimeout(r, 450));

    const images = form.images.length
      ? form.images
      : form.coverImage
        ? [{ url: form.coverImage, alt: form.name }]
        : [];

    const draft: ProjectDraft = {
      ...form,
      name: sanitize(form.name),
      location: sanitize(form.location),
      client: sanitize(form.client) || 'Private client',
      summary: sanitize(form.summary),
      description: sanitize(form.description),
      coverImage: form.coverImage || images[0]?.url || '',
      images,
      published: mode === 'publish',
      scope: scopeText.split('\n').map((s) => s.trim()).filter(Boolean),
      highlights: highlightText.split('\n').map((s) => s.trim()).filter(Boolean)
    };

    if (project) updateProject(project.id, draft);
    else addProject(draft);

    setSaving(null);
    router.push('/admin/projects');
  };

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        void save('publish');
      }}
      className="space-y-6"
    >
      <section className="border border-concrete-dark bg-white p-5 sm:p-6">
        <h2 className="font-display text-base font-semibold text-ink">Project details</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="p-name" required>
              Project name
            </Label>
            <Input id="p-name" value={form.name} error={Boolean(errors.name)} onChange={(e) => set('name', e.target.value)} />
            <ErrorText id="p-name-error">{errors.name}</ErrorText>
          </div>
          <div>
            <Label htmlFor="p-location" required>
              Location
            </Label>
            <Input
              id="p-location"
              placeholder="Area, City"
              value={form.location}
              error={Boolean(errors.location)}
              onChange={(e) => set('location', e.target.value)}
            />
            <ErrorText id="p-location-error">{errors.location}</ErrorText>
          </div>
          <div>
            <Label htmlFor="p-client">Client</Label>
            <Input id="p-client" value={form.client} onChange={(e) => set('client', e.target.value)} />
          </div>
          <div>
            <Label htmlFor="p-category">Category</Label>
            <Select
              id="p-category"
              value={form.category}
              onChange={(e) => set('category', e.target.value as ProjectCategory)}
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="p-status">Status</Label>
            <Select
              id="p-status"
              value={form.status}
              onChange={(e) => set('status', e.target.value as ProjectStatus)}
            >
              {statuses.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="p-date" required>
              Completion date
            </Label>
            <Input
              id="p-date"
              type="date"
              value={form.completionDate}
              error={Boolean(errors.completionDate)}
              onChange={(e) => set('completionDate', e.target.value)}
            />
            <ErrorText id="p-date-error">{errors.completionDate}</ErrorText>
          </div>
          <div>
            <Label htmlFor="p-size" required>
              Project size
            </Label>
            <Input
              id="p-size"
              placeholder="4,500 sq.ft."
              value={form.size}
              error={Boolean(errors.size)}
              onChange={(e) => set('size', e.target.value)}
            />
            <ErrorText id="p-size-error">{errors.size}</ErrorText>
          </div>
          <div>
            <Label htmlFor="p-duration" required>
              Duration
            </Label>
            <Input
              id="p-duration"
              placeholder="11 Months"
              value={form.duration}
              error={Boolean(errors.duration)}
              onChange={(e) => set('duration', e.target.value)}
            />
            <ErrorText id="p-duration-error">{errors.duration}</ErrorText>
          </div>
          <div className="flex items-end">
            <label className="flex items-center gap-3 text-sm text-ink">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => set('featured', e.target.checked)}
                className="h-4 w-4 accent-[#1F4E5F]"
              />
              Show this project on the homepage
            </label>
          </div>
        </div>
      </section>

      <section className="border border-concrete-dark bg-white p-5 sm:p-6">
        <h2 className="font-display text-base font-semibold text-ink">Description</h2>
        <div className="mt-5 space-y-5">
          <div>
            <Label htmlFor="p-summary" required>
              Card summary
            </Label>
            <Input
              id="p-summary"
              placeholder="One line shown on the projects page"
              value={form.summary}
              error={Boolean(errors.summary)}
              onChange={(e) => set('summary', e.target.value)}
            />
            <ErrorText id="p-summary-error">{errors.summary}</ErrorText>
          </div>
          <div>
            <Label htmlFor="p-description" required>
              Full description
            </Label>
            <Textarea
              id="p-description"
              value={form.description}
              error={Boolean(errors.description)}
              onChange={(e) => set('description', e.target.value)}
            />
            <ErrorText id="p-description-error">{errors.description}</ErrorText>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="p-scope">Scope of work</Label>
              <Textarea
                id="p-scope"
                placeholder="One item per line"
                value={scopeText}
                onChange={(e) => setScopeText(e.target.value)}
              />
              <p className="mt-1.5 text-xs text-ink-mute">One item per line.</p>
            </div>
            <div>
              <Label htmlFor="p-highlights">Project highlights</Label>
              <Textarea
                id="p-highlights"
                placeholder="One highlight per line"
                value={highlightText}
                onChange={(e) => setHighlightText(e.target.value)}
              />
              <p className="mt-1.5 text-xs text-ink-mute">One highlight per line.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 border border-concrete-dark bg-white p-5 sm:p-6">
        <h2 className="font-display text-base font-semibold text-ink">Images</h2>
        <div>
          <Label htmlFor="p-cover">Cover image link</Label>
          <Input
            id="p-cover"
            placeholder="https://..."
            value={form.coverImage}
            onChange={(e) => set('coverImage', e.target.value)}
          />
          <p className="mt-1.5 text-xs text-ink-mute">
            Leave blank to use the first project image below.
          </p>
        </div>
        <ImageUploader
          label="Project images"
          hint="Shown in the gallery on the project page."
          images={form.images}
          onChange={(images) => set('images', images)}
        />
        <ImageUploader
          label="Before images"
          hint="Only for renovation work. Pairs with the after images in order."
          images={form.beforeImages}
          onChange={(images) => set('beforeImages', images)}
        />
        <ImageUploader
          label="After images"
          images={form.afterImages}
          onChange={(images) => set('afterImages', images)}
        />
      </section>

      {formError ? (
        <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {formError}
        </p>
      ) : null}

      <div className="sticky bottom-0 flex flex-col gap-3 border-t border-concrete-dark bg-paper/95 py-4 backdrop-blur sm:flex-row">
        <Button type="submit" disabled={saving !== null}>
          {saving === 'publish' ? 'Publishing...' : 'Publish project'}
        </Button>
        <Button
          type="button"
          variant="secondary"
          disabled={saving !== null}
          onClick={() => void save('draft')}
        >
          {saving === 'draft' ? 'Saving...' : 'Save draft'}
        </Button>
        <Button type="button" variant="secondary" onClick={() => router.push('/admin/projects')}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
