import type { Metadata } from 'next';
import ProjectDetail from '@/components/public/ProjectDetail';
import { seedProjects } from '@/data/projects';

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return seedProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = seedProjects.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: 'Project', description: 'Construction project by Chawhan Empires .' };
  }
  return {
    title: `${project.name} - ${project.location}`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | BuildCraft Constructions`,
      description: project.summary,
      images: [project.coverImage]
    }
  };
}

export const dynamicParams = true;

export default function ProjectDetailPage({ params }: Params) {
  return <ProjectDetail slug={params.slug} />;
}
