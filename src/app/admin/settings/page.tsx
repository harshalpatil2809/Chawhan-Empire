'use client';

import { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import { Button } from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { Input, Label } from '@/components/ui/Field';
import { useAdminShell } from '@/components/admin/shell';
import { useStore } from '@/context/StoreProvider';
import { site } from '@/lib/site';

export default function AdminSettingsPage() {
  const { openMenu } = useAdminShell();
  const { resetDemoData, projects, enquiries } = useStore();
  const [confirm, setConfirm] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <>
      <AdminHeader
        title="Settings"
        description="Business details shown across the website."
        onOpenMenu={openMenu}
      />
      <div className="max-w-2xl p-5 sm:p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
          }}
          className="border border-concrete-dark bg-white p-6"
        >
          <h2 className="font-display text-base font-semibold text-ink">Business details</h2>
          <p className="mt-1 text-sm text-ink-mute">
            In the demo these come from lib/site.ts. Connect a database and this form writes
            to it.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label htmlFor="s-name">Company name</Label>
              <Input id="s-name" defaultValue={site.name} />
            </div>
            <div>
              <Label htmlFor="s-phone">Phone</Label>
              <Input id="s-phone" defaultValue={site.phoneDisplay} />
            </div>
            <div>
              <Label htmlFor="s-whatsapp">WhatsApp number</Label>
              <Input id="s-whatsapp" defaultValue={site.whatsappNumber} />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="s-email">Email</Label>
              <Input id="s-email" type="email" defaultValue={site.email} />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="s-address">Office address</Label>
              <Input id="s-address" defaultValue={`${site.address.line1}, ${site.address.line2}`} />
            </div>
          </div>
          {saved ? (
            <p role="status" className="mt-5 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Saved in this demo session.
            </p>
          ) : null}
          <Button type="submit" className="mt-6">
            Save changes
          </Button>
        </form>

        <section className="mt-6 border border-concrete-dark bg-white p-6">
          <h2 className="font-display text-base font-semibold text-ink">Demo data</h2>
          <p className="mt-1 text-sm text-ink-mute">
            Currently holding {projects.length} projects and {enquiries.length} enquiries in
            this browser. Resetting restores the original demo content.
          </p>
          <Button variant="danger" className="mt-5" onClick={() => setConfirm(true)}>
            Reset demo data
          </Button>
        </section>
      </div>

      <Modal open={confirm} onClose={() => setConfirm(false)} title="Reset demo data?">
        <p>Projects and enquiries go back to the original demo set. Anything you added is lost.</p>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" size="sm" onClick={() => setConfirm(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              resetDemoData();
              setConfirm(false);
            }}
          >
            Reset data
          </Button>
        </div>
      </Modal>
    </>
  );
}
