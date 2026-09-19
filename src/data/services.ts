export interface Service {
  slug: string;
  title: string;
  short: string;
  detail: string;
  audience: string;
  benefits: string[];
  image: string;
}

import { img } from './images';

export const services: Service[] = [
  {
    slug: 'residential-construction',
    title: 'Residential Construction',
    short:
      'Independent homes, villas and bungalows built from foundation to finish on your plot.',
    detail:
      'We handle the full residential build: soil testing, structural design, RCC framework, masonry, plumbing, electrical and finishing. Every home is executed by a dedicated site engineer with weekly progress reporting so you always know what was done and what comes next.',
    audience: 'Plot owners in and around Nagpur planning a new family home.',
    benefits: [
      'Structural drawings reviewed by an in-house RCC consultant',
      'ISI-marked steel, cement and plumbing lines as standard',
      'Stage-wise payment plan linked to completed work',
      '10-year structural warranty on every home we build'
    ],
    image: img.houseModern
  },
  {
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    short:
      'Offices, showrooms, retail complexes and warehouses delivered to a committed handover date.',
    detail:
      'Commercial work lives and dies by the schedule. We plan the build backwards from your opening date, run parallel MEP and civil teams, and manage municipal approvals, fire compliance and occupancy documentation alongside construction.',
    audience: 'Business owners, developers and franchise operators.',
    benefits: [
      'Approval and compliance handled end to end',
      'Parallel civil, MEP and finishing teams to compress timelines',
      'Fortnightly cost-to-complete statements',
      'Post-handover facility support for the first year'
    ],
    image: img.officeTower
  },
  {
    slug: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    short:
      'Structural repair, layout changes and full refurbishment of existing buildings.',
    detail:
      'We survey the existing structure, identify what can be retained and what must be rebuilt, and work in phases so you can stay in the property where possible. Waterproofing, plumbing replacement and electrical rewiring are included in the scope rather than sold later.',
    audience: 'Owners of homes and commercial spaces over 15 years old.',
    benefits: [
      'Condition survey and structural audit before quoting',
      'Phased execution so parts of the building stay usable',
      'Dust control and daily debris clearance',
      'Before and after documentation of every area'
    ],
    image: img.renovationAfter
  },
  {
    slug: 'turnkey-construction',
    title: 'Turnkey Construction',
    short:
      'One contract, one team, one handover date - from drawings to furnished keys.',
    detail:
      'A single agreement covers design, approvals, civil work, interiors and finishing. You approve the drawings and the specification sheet, and we take responsibility for everything after that, including vendor coordination and material procurement.',
    audience: 'Clients who want a single point of accountability.',
    benefits: [
      'Fixed scope and fixed price after drawing approval',
      'One project manager for the entire build',
      'Material specification locked in writing before work starts',
      'Furnished, cleaned and ready-to-occupy handover'
    ],
    image: img.villaInterior
  },
  {
    slug: 'interior-civil-work',
    title: 'Interior & Civil Work',
    short:
      'False ceilings, modular joinery, flooring, painting and finishing carpentry.',
    detail:
      'Our interior division works alongside the civil team, so conduits, plumbing points and ceiling levels are set correctly the first time. We produce shop drawings for every joinery item and dry-fit before final installation.',
    audience: 'Homeowners and offices finishing a new or existing space.',
    benefits: [
      'Shop drawings and material samples approved before purchase',
      'Site-made and factory-made joinery options with clear pricing',
      'Coordinated with civil work to avoid rework',
      'Snag list cleared before final payment'
    ],
    image: img.interiorWork
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    short:
      'Supervision, costing and quality control for projects you are building yourself.',
    detail:
      'If you already have contractors and want professional oversight, our PMC team runs the schedule, checks material quality on delivery, verifies contractor bills against measured work and reports to you weekly.',
    audience: 'NRI owners, investors and clients managing their own vendors.',
    benefits: [
      'Independent bill verification against measured quantities',
      'Weekly photo and video progress reports',
      'Material testing at delivery, not after casting',
      'Escalation handled before it becomes a delay'
    ],
    image: img.engineer
  }
];
