'use client';

import Link from 'next/link';
import AdminHeader from '@/components/admin/AdminHeader';
import ProjectForm from '@/components/admin/ProjectForm';
import Skeleton from '@/components/ui/Skeleton';
import { useAdminShell } from '@/components/admin/shell';
import { useStore } from '@/context/StoreProvider';

export default function EditProjectPage({ params }: { params: { id: string } }) {
  const { openMenu } = useAdminShell();
  const { ready, getProjectById } = useStore();
  const project = getProjectById(params.id);

  return (
    <>
      <AdminHeader
        title={project ? `Edit: ${project.name}` : 'Edit project'}
        description="Changes go live on the website as soon as you publish."
        onOpenMenu={openMenu}
      />
      <div className="p-5 sm:p-8">
        {!ready ? (
          <div className="space-y-4">
            <Skeleton className="h-48" />
            <Skeleton className="h-64" />
          </div>
        ) : project ? (
          <ProjectForm project={project} />
        ) : (
          <div className="border border-dashed border-concrete-dark bg-white p-12 text-center">
            <h2 className="font-display text-lg font-semibold text-ink">Project not found</h2>
            <p className="mt-2 text-sm text-ink-mute">It may have been deleted.</p>
            <Link href="/admin/projects" className="mt-5 inline-block text-sm font-medium text-steel">
              Back to projects
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
