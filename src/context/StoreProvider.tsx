'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react';
import type {
  ContactMessage,
  Enquiry,
  EnquiryStatus,
  Project,
  ProjectDraft
} from '@/lib/types';
import { seedProjects } from '@/data/projects';
import { seedEnquiries } from '@/data/enquiries';
import { createId, slugify } from '@/lib/utils';

/**
 * DEMO PERSISTENCE
 * ----------------
 * State lives in React and is mirrored to localStorage so the demo survives a
 * refresh. Every mutation goes through this provider, so swapping it for a real
 * API (PostgreSQL / Supabase) means changing the bodies of these functions only.
 */

const KEYS = {
  projects: 'buildcraft.projects.v2',
  enquiries: 'buildcraft.enquiries.v1',
  messages: 'buildcraft.messages.v1'
};

interface StoreValue {
  ready: boolean;
  projects: Project[];
  publishedProjects: Project[];
  featuredProjects: Project[];
  getProjectBySlug: (slug: string) => Project | undefined;
  getProjectById: (id: string) => Project | undefined;
  addProject: (draft: ProjectDraft) => Project;
  updateProject: (id: string, draft: ProjectDraft) => void;
  deleteProject: (id: string) => void;
  toggleFeatured: (id: string) => void;
  enquiries: Enquiry[];
  addEnquiry: (input: Omit<Enquiry, 'id' | 'status' | 'createdAt'>) => Enquiry;
  updateEnquiryStatus: (id: string, status: EnquiryStatus) => void;
  deleteEnquiry: (id: string) => void;
  messages: ContactMessage[];
  addMessage: (input: Omit<ContactMessage, 'id' | 'createdAt'>) => void;
  resetDemoData: () => void;
}

const StoreContext = createContext<StoreValue | null>(null);

function read<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable - demo continues in memory */
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [projects, setProjects] = useState<Project[]>(seedProjects);
  const [enquiries, setEnquiries] = useState<Enquiry[]>(seedEnquiries);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  useEffect(() => {
    setProjects(read(KEYS.projects, seedProjects));
    setEnquiries(read(KEYS.enquiries, seedEnquiries));
    setMessages(read(KEYS.messages, [] as ContactMessage[]));
    setReady(true);
  }, []);

  const saveProjects = useCallback((next: Project[]) => {
    setProjects(next);
    write(KEYS.projects, next);
  }, []);

  const saveEnquiries = useCallback((next: Enquiry[]) => {
    setEnquiries(next);
    write(KEYS.enquiries, next);
  }, []);

  const value = useMemo<StoreValue>(() => {
    const uniqueSlug = (name: string, ignoreId?: string) => {
      const base = slugify(name) || 'project';
      let slug = base;
      let i = 2;
      while (projects.some((p) => p.slug === slug && p.id !== ignoreId)) {
        slug = `${base}-${i++}`;
      }
      return slug;
    };

    return {
      ready,
      projects,
      publishedProjects: projects.filter((p) => p.published),
      featuredProjects: projects.filter((p) => p.published && p.featured).slice(0, 4),
      getProjectBySlug: (slug) => projects.find((p) => p.slug === slug),
      getProjectById: (id) => projects.find((p) => p.id === id),
      addProject: (draft) => {
        const project: Project = {
          ...draft,
          id: `p-${createId()}`,
          slug: uniqueSlug(draft.name),
          createdAt: new Date().toISOString()
        };
        saveProjects([project, ...projects]);
        return project;
      },
      updateProject: (id, draft) => {
        saveProjects(
          projects.map((p) =>
            p.id === id ? { ...p, ...draft, slug: uniqueSlug(draft.name, id) } : p
          )
        );
      },
      deleteProject: (id) => saveProjects(projects.filter((p) => p.id !== id)),
      toggleFeatured: (id) =>
        saveProjects(
          projects.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p))
        ),
      enquiries,
      addEnquiry: (input) => {
        const enquiry: Enquiry = {
          ...input,
          id: `e-${createId()}`,
          status: 'New',
          createdAt: new Date().toISOString()
        };
        saveEnquiries([enquiry, ...enquiries]);
        // Mirrored to the API route so a real backend can take over later.
        void fetch('/api/enquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(enquiry)
        }).catch(() => undefined);
        return enquiry;
      },
      updateEnquiryStatus: (id, status) =>
        saveEnquiries(enquiries.map((e) => (e.id === id ? { ...e, status } : e))),
      deleteEnquiry: (id) => saveEnquiries(enquiries.filter((e) => e.id !== id)),
      messages,
      addMessage: (input) => {
        const next = [
          { ...input, id: `m-${createId()}`, createdAt: new Date().toISOString() },
          ...messages
        ];
        setMessages(next);
        write(KEYS.messages, next);
      },
      resetDemoData: () => {
        saveProjects(seedProjects);
        saveEnquiries(seedEnquiries);
        setMessages([]);
        write(KEYS.messages, []);
      }
    };
  }, [ready, projects, enquiries, messages, saveProjects, saveEnquiries]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used inside StoreProvider');
  return ctx;
}
