'use client';

import AdminHeader from '@/components/admin/AdminHeader';
import ProjectForm from '@/components/admin/ProjectForm';
import { useAdminShell } from '@/components/admin/shell';

export default function NewProjectPage() {
  const { openMenu } = useAdminShell();
  return (
    <>
      <AdminHeader
        title="Add project"
        description="Publish it and it appears on your website immediately."
        onOpenMenu={openMenu}
      />
      <div className="p-5 sm:p-8">
        <ProjectForm />
      </div>
    </>
  );
}
