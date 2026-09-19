'use client';

import { useState } from 'react';
import StatusBadge from '@/components/ui/StatusBadge';
import Modal from '@/components/ui/Modal';
import { Select } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';
import { useStore } from '@/context/StoreProvider';
import type { Enquiry, EnquiryStatus } from '@/lib/types';
import { formatDate } from '@/lib/utils';

const statuses: EnquiryStatus[] = ['New', 'Contacted', 'In Discussion', 'Converted', 'Closed'];

export default function EnquiryTable({ enquiries }: { enquiries: Enquiry[] }) {
  const { updateEnquiryStatus } = useStore();
  const [open, setOpen] = useState<Enquiry | null>(null);

  if (enquiries.length === 0) {
    return (
      <div className="border border-dashed border-concrete-dark bg-white p-12 text-center">
        <h2 className="font-display text-lg font-semibold text-ink">No enquiries yet</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-mute">
          Every quote request from the website lands here, with the budget and project type
          the visitor selected.
        </p>
      </div>
    );
  }

  const StatusPicker = ({ enquiry }: { enquiry: Enquiry }) => (
    <>
      <label htmlFor={`status-${enquiry.id}`} className="sr-only">
        Change status for {enquiry.name}
      </label>
      <Select
        id={`status-${enquiry.id}`}
        value={enquiry.status}
        onChange={(e) => updateEnquiryStatus(enquiry.id, e.target.value as EnquiryStatus)}
        className="py-1.5 text-[13px]"
      >
        {statuses.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </Select>
    </>
  );

  return (
    <>
      <ul className="space-y-3 lg:hidden">
        {enquiries.map((e) => (
          <li key={e.id} className="border border-concrete-dark bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate font-medium text-ink">{e.name}</p>
                <p className="mt-0.5 text-xs text-ink-mute">
                  {e.projectType} &middot; {e.location}
                </p>
              </div>
              <StatusBadge status={e.status} />
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-2 text-xs text-ink-mute">
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a href={`tel:${e.phone}`} className="text-steel">
                    {e.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Budget</dt>
                <dd>{e.budget}</dd>
              </div>
              <div>
                <dt className="sr-only">Date</dt>
                <dd>{formatDate(e.createdAt)}</dd>
              </div>
            </dl>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1">
                <StatusPicker enquiry={e} />
              </div>
              <Button size="sm" variant="secondary" onClick={() => setOpen(e)}>
                Open
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <div className="hidden overflow-x-auto border border-concrete-dark bg-white lg:block">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="border-b border-concrete bg-concrete/30 text-xs text-ink-mute">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">Name</th>
              <th scope="col" className="px-4 py-3 font-medium">Project type</th>
              <th scope="col" className="px-4 py-3 font-medium">Phone</th>
              <th scope="col" className="px-4 py-3 font-medium">Budget</th>
              <th scope="col" className="px-4 py-3 font-medium">Status</th>
              <th scope="col" className="px-4 py-3 font-medium">Date</th>
              <th scope="col" className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-concrete">
            {enquiries.map((e) => (
              <tr key={e.id} className="hover:bg-concrete/20">
                <td className="px-4 py-3">
                  <span className="font-medium text-ink">{e.name}</span>
                  <span className="block text-xs text-ink-mute">{e.location}</span>
                </td>
                <td className="px-4 py-3 text-ink-mute">{e.projectType}</td>
                <td className="px-4 py-3">
                  <a href={`tel:${e.phone}`} className="text-steel hover:text-steel-dark">
                    {e.phone}
                  </a>
                </td>
                <td className="px-4 py-3 text-ink-mute">{e.budget}</td>
                <td className="px-4 py-3">
                  <div className="w-40">
                    <StatusPicker enquiry={e} />
                  </div>
                </td>
                <td className="px-4 py-3 text-ink-mute">{formatDate(e.createdAt)}</td>
                <td className="px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => setOpen(e)}
                    className="text-sm font-medium text-steel hover:text-steel-dark"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={Boolean(open)} onClose={() => setOpen(null)} title={open?.name ?? 'Enquiry'}>
        {open ? (
          <div className="space-y-3">
            <p>
              <a href={`tel:${open.phone}`} className="text-steel">
                {open.phone}
              </a>{' '}
              &middot;{' '}
              <a href={`mailto:${open.email}`} className="text-steel">
                {open.email}
              </a>
            </p>
            <dl className="grid grid-cols-2 gap-3 border-y border-concrete py-3 text-sm">
              <div>
                <dt className="text-ink-mute">Project type</dt>
                <dd className="text-ink">{open.projectType}</dd>
              </div>
              <div>
                <dt className="text-ink-mute">Property</dt>
                <dd className="text-ink">{open.propertyType}</dd>
              </div>
              <div>
                <dt className="text-ink-mute">Budget</dt>
                <dd className="text-ink">{open.budget}</dd>
              </div>
              <div>
                <dt className="text-ink-mute">Start date</dt>
                <dd className="text-ink">{open.startDate ? formatDate(open.startDate) : 'Not set'}</dd>
              </div>
            </dl>
            <p className="leading-relaxed text-ink">{open.message}</p>
            <div className="pt-2">
              <StatusPicker enquiry={open} />
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
