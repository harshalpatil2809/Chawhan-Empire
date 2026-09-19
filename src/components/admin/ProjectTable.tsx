'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useStore } from '@/context/StoreProvider';
import StatusBadge from '@/components/ui/StatusBadge';
import Modal from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import type { Project } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export default function ProjectTable({ projects }: { projects: Project[] }) {
  const { deleteProject, toggleFeatured } = useStore();
  const [pending, setPending] = useState<Project | null>(null);

  if (projects.length === 0) {
    return (
      <div className="border border-dashed border-concrete-dark bg-white p-12 text-center">
        <h2 className="font-display text-lg font-semibold text-ink">No projects here yet</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-mute">
          Add your first project and it will show up on the public Projects page straight away.
        </p>
        <Link
          href="/admin/projects/new"
          className="mt-5 inline-block text-sm font-medium text-steel hover:text-steel-dark"
        >
          Add a project
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Mobile cards */}
      <ul className="space-y-3 lg:hidden">
        {projects.map((p) => (
          <li key={p.id} className="border border-concrete-dark bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate font-medium text-ink">{p.name}</p>
                <p className="mt-0.5 text-xs text-ink-mute">
                  {p.category} &middot; {p.location}
                </p>
              </div>
              <StatusBadge status={p.published ? p.status : 'Draft'} />
            </div>
            <p className="mt-3 text-xs text-ink-mute">{formatDate(p.completionDate)}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button size="sm" variant="secondary" onClick={() => toggleFeatured(p.id)}>
                {p.featured ? 'Unfeature' : 'Feature'}
              </Button>
              <Link
                href={`/admin/projects/${p.id}`}
                className="rounded-sm border border-ink/20 px-3.5 py-2 text-[13px] font-medium text-ink"
              >
                Edit
              </Link>
              <Link
                href={`/projects/${p.slug}`}
                className="rounded-sm border border-ink/20 px-3.5 py-2 text-[13px] font-medium text-ink"
              >
                View
              </Link>
              <Button size="sm" variant="danger" onClick={() => setPending(p)}>
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto border border-concrete-dark bg-white lg:block">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="border-b border-concrete bg-concrete/30 text-xs text-ink-mute">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">Project</th>
              <th scope="col" className="px-4 py-3 font-medium">Category</th>
              <th scope="col" className="px-4 py-3 font-medium">Location</th>
              <th scope="col" className="px-4 py-3 font-medium">Status</th>
              <th scope="col" className="px-4 py-3 font-medium">Date</th>
              <th scope="col" className="px-4 py-3 font-medium">Featured</th>
              <th scope="col" className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-concrete">
            {projects.map((p) => (
              <tr key={p.id} className="hover:bg-concrete/20">
                <td className="px-4 py-3">
                  <span className="font-medium text-ink">{p.name}</span>
                  <span className="block text-xs text-ink-mute">{p.size}</span>
                </td>
                <td className="px-4 py-3 text-ink-mute">{p.category}</td>
                <td className="px-4 py-3 text-ink-mute">{p.location}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={p.published ? p.status : 'Draft'} />
                </td>
                <td className="px-4 py-3 text-ink-mute">{formatDate(p.completionDate)}</td>
                <td className="px-4 py-3">
                  <label className="inline-flex cursor-pointer items-center gap-2 text-xs text-ink-mute">
                    <input
                      type="checkbox"
                      checked={p.featured}
                      onChange={() => toggleFeatured(p.id)}
                      className="h-4 w-4 accent-[#1F4E5F]"
                    />
                    <span className="sr-only">Feature {p.name} on the homepage</span>
                    {p.featured ? 'Featured' : 'No'}
                  </label>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-3 text-sm">
                    <Link href={`/admin/projects/${p.id}`} className="font-medium text-steel hover:text-steel-dark">
                      Edit
                    </Link>
                    <Link href={`/projects/${p.slug}`} className="font-medium text-ink-mute hover:text-ink">
                      View
                    </Link>
                    <button
                      type="button"
                      onClick={() => setPending(p)}
                      className="font-medium text-red-700 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={Boolean(pending)} onClose={() => setPending(null)} title="Delete this project?">
        <p>
          {pending?.name} will be removed from the website and from this list. This cannot be
          undone in the demo.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" size="sm" onClick={() => setPending(null)}>
            Keep it
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              if (pending) deleteProject(pending.id);
              setPending(null);
            }}
          >
            Delete project
          </Button>
        </div>
      </Modal>
    </>
  );
}
