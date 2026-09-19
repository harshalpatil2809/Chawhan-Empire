'use client';

import Link from 'next/link';
import AdminHeader from '@/components/admin/AdminHeader';
import DashboardCard from '@/components/admin/DashboardCard';
import StatusBadge from '@/components/ui/StatusBadge';
import Skeleton from '@/components/ui/Skeleton';
import { ButtonLink } from '@/components/ui/Button';
import { useAdminShell } from '@/components/admin/shell';
import { useStore } from '@/context/StoreProvider';
import { formatDate } from '@/lib/utils';

export default function AdminDashboardPage() {
  const { openMenu } = useAdminShell();
  const { ready, projects, enquiries } = useStore();

  const completed = projects.filter((p) => p.status === 'Completed').length;
  const ongoing = projects.filter((p) => p.status === 'Ongoing').length;
  const newEnquiries = enquiries.filter((e) => e.status === 'New').length;

  return (
    <>
      <AdminHeader
        title="Dashboard"
        description="Everything on your website, in one place."
        onOpenMenu={openMenu}
        actions={
          <ButtonLink href="/admin/projects/new" size="sm" className="hidden sm:inline-flex">
            Add project
          </ButtonLink>
        }
      />

      <div className="p-5 sm:p-8">
        {!ready ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-28" />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DashboardCard label="Total projects" value={projects.length} href="/admin/projects" />
            <DashboardCard label="Completed" value={completed} note="Published to the website" href="/admin/projects" />
            <DashboardCard label="Ongoing" value={ongoing} note="Currently on site" href="/admin/projects" />
            <DashboardCard
              label="New enquiries"
              value={newEnquiries}
              note={`${enquiries.length} total leads`}
              href="/admin/enquiries"
            />
          </div>
        )}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="border border-concrete-dark bg-white">
            <header className="flex items-center justify-between border-b border-concrete px-5 py-4">
              <h2 className="font-display text-base font-semibold text-ink">Latest enquiries</h2>
              <Link href="/admin/enquiries" className="text-sm font-medium text-steel">
                View all
              </Link>
            </header>
            <ul className="divide-y divide-concrete">
              {enquiries.slice(0, 5).map((e) => (
                <li key={e.id} className="flex items-center justify-between gap-4 px-5 py-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-ink">{e.name}</p>
                    <p className="truncate text-xs text-ink-mute">
                      {e.projectType} &middot; {e.location} &middot; {formatDate(e.createdAt)}
                    </p>
                  </div>
                  <StatusBadge status={e.status} />
                </li>
              ))}
              {enquiries.length === 0 ? (
                <li className="px-5 py-10 text-center text-sm text-ink-mute">
                  No enquiries yet. They will appear here as soon as someone submits the quote form.
                </li>
              ) : null}
            </ul>
          </section>

          <section className="border border-concrete-dark bg-white">
            <header className="flex items-center justify-between border-b border-concrete px-5 py-4">
              <h2 className="font-display text-base font-semibold text-ink">Recent projects</h2>
              <Link href="/admin/projects" className="text-sm font-medium text-steel">
                Manage
              </Link>
            </header>
            <ul className="divide-y divide-concrete">
              {projects.slice(0, 5).map((p) => (
                <li key={p.id} className="flex items-center justify-between gap-4 px-5 py-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-ink">{p.name}</p>
                    <p className="truncate text-xs text-ink-mute">
                      {p.location} &middot; {p.category}
                    </p>
                  </div>
                  <StatusBadge status={p.published ? p.status : 'Draft'} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
