'use client';

import { useMemo, useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import ProjectTable from '@/components/admin/ProjectTable';
import Skeleton from '@/components/ui/Skeleton';
import { ButtonLink } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/Field';
import { useAdminShell } from '@/components/admin/shell';
import { useStore } from '@/context/StoreProvider';

export default function AdminProjectsPage() {
  const { openMenu } = useAdminShell();
  const { ready, projects } = useStore();
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => {
        if (status === 'All') return true;
        if (status === 'Draft') return !p.published;
        return p.published && p.status === status;
      })
      .filter((p) => (q ? `${p.name} ${p.location} ${p.category}`.toLowerCase().includes(q) : true));
  }, [projects, query, status]);

  return (
    <>
      <AdminHeader
        title="Projects"
        description="Add, edit and publish the work shown on your website."
        onOpenMenu={openMenu}
        actions={
          <ButtonLink href="/admin/projects/new" size="sm">
            Add project
          </ButtonLink>
        }
      />

      <div className="p-5 sm:p-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <div className="sm:max-w-xs sm:flex-1">
            <label htmlFor="admin-project-search" className="sr-only">
              Search projects
            </label>
            <Input
              id="admin-project-search"
              type="search"
              placeholder="Search projects"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="sm:w-48">
            <label htmlFor="admin-project-status" className="sr-only">
              Filter by status
            </label>
            <Select
              id="admin-project-status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              {['All', 'Ongoing', 'Completed', 'Draft'].map((s) => (
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
          <ProjectTable projects={filtered} />
        )}
      </div>
    </>
  );
}
