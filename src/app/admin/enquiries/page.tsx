'use client';

import { useMemo, useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import EnquiryTable from '@/components/admin/EnquiryTable';
import Skeleton from '@/components/ui/Skeleton';
import { Input, Select } from '@/components/ui/Field';
import { useAdminShell } from '@/components/admin/shell';
import { useStore } from '@/context/StoreProvider';
import type { EnquiryStatus } from '@/lib/types';

const statusOptions: Array<EnquiryStatus | 'All'> = [
  'All',
  'New',
  'Contacted',
  'In Discussion',
  'Converted',
  'Closed'
];

export default function AdminEnquiriesPage() {
  const { openMenu } = useAdminShell();
  const { ready, enquiries } = useStore();
  const [status, setStatus] = useState<EnquiryStatus | 'All'>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return enquiries
      .filter((e) => (status === 'All' ? true : e.status === status))
      .filter((e) =>
        q ? `${e.name} ${e.phone} ${e.email} ${e.location}`.toLowerCase().includes(q) : true
      );
  }, [enquiries, status, query]);

  return (
    <>
      <AdminHeader
        title="Enquiries"
        description="Every quote request from the website, with its current stage."
        onOpenMenu={openMenu}
      />
      <div className="p-5 sm:p-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <div className="sm:max-w-xs sm:flex-1">
            <label htmlFor="enquiry-search" className="sr-only">
              Search enquiries
            </label>
            <Input
              id="enquiry-search"
              type="search"
              placeholder="Search by name, phone or city"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="sm:w-52">
            <label htmlFor="enquiry-status" className="sr-only">
              Filter by status
            </label>
            <Select
              id="enquiry-status"
              value={status}
              onChange={(e) => setStatus(e.target.value as EnquiryStatus | 'All')}
            >
              {statusOptions.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </Select>
          </div>
        </div>

        {!ready ? (
          <div className="space-y-3">
            {[0, 1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-16" />
            ))}
          </div>
        ) : (
          <EnquiryTable enquiries={filtered} />
        )}
      </div>
    </>
  );
}
