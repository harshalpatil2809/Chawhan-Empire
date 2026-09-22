import type { Project } from '@/lib/types';
import { img } from './images';

const make = (p: Omit<Project, 'createdAt'> & { createdAt?: string }): Project => ({
  createdAt: p.completionDate,
  ...p
});

export const seedProjects: Project[] = [
  make({
    id: 'p-001',
    slug: 'modern-villa-nagpur',
    name: 'Modern Villa',
    location: 'Besa, Nagpur',
    category: 'Residential',
    status: 'Completed',
    featured: true,
    published: true,
    summary:
      'A four-bedroom villa with a double-height living room, cantilevered terrace and rooftop solar.',
    description:
      'Built on a 6,000 sq.ft. plot in Besa, this villa was designed around a north-facing courtyard that pulls daylight into the core of the house. The frame is a conventional RCC structure with a 230mm cavity wall on the west face to cut afternoon heat gain. The double-height living room is spanned by a 6.4m beam, which allowed the first floor to be set back and create a covered terrace over the porch. Rooftop solar covers the daytime load of the ground floor.',
    completionDate: '2024-11-18',
    size: '4,500 sq.ft.',
    duration: '11 Months',
    client: 'Deshmukh Family',
    coverImage: img.villaExterior,
    images: [
      { url: img.villaExterior, alt: 'Front elevation of the completed modern villa in Besa, Nagpur' },
      { url: img.villaLiving, alt: 'Double-height living room with full-height glazing' },
      { url: img.villaInterior, alt: 'Open kitchen and dining area of the villa' },
      { url: img.siteWork, alt: 'RCC slab work in progress during construction' }
    ],
    beforeImages: [],
    afterImages: [],
    scope: [
      'Soil testing, structural design and municipal approvals',
      'RCC frame, brickwork and waterproofing',
      'Plumbing, electrical and HVAC conduiting',
      'Italian marble and engineered wood flooring',
      'Modular kitchen, wardrobes and false ceiling',
      'Landscaping, compound wall and rooftop solar'
    ],
    highlights: [
      '6.4m clear span over the living room without a mid column',
      'Rainwater harvesting pit sized for a 6,000 sq.ft. plot',
      'Handed over 12 days ahead of the contracted date'
    ]
  }),
  make({
    id: 'p-002',
    slug: 'green-valley-residence-wardha',
    name: 'Green Valley Residence',
    location: 'Wardha',
    category: 'Residential',
    status: 'Completed',
    featured: true,
    published: true,
    summary:
      'A three-bedroom family home planned for cross ventilation and low running cost.',
    description:
      'The brief was a comfortable home that stays cool without running air conditioning through the day. We used a deep verandah on the south and west, 9-inch external walls with an air gap, and a jaali wall along the staircase that exhausts hot air at roof level. Windows were positioned on opposite walls in every habitable room for cross ventilation.',
    completionDate: '2024-06-02',
    size: '2,850 sq.ft.',
    duration: '9 Months',
    client: 'Mr. & Mrs. Kulkarni',
    coverImage: img.houseContemporary,
    images: [
      { url: img.houseContemporary, alt: 'Street view of Green Valley Residence in Wardha' },
      { url: img.villaInterior, alt: 'Living and dining area with cross ventilation' },
      { url: img.workers, alt: 'Masonry team at work on the external walls' }
    ],
    beforeImages: [],
    afterImages: [],
    scope: [
      'Architectural and structural drawings',
      'Foundation, RCC frame and masonry',
      'Plumbing, sanitary and electrical',
      'Flooring, painting and joinery',
      'Boundary wall and driveway'
    ],
    highlights: [
      'Jaali stair wall acts as a passive exhaust for hot air',
      'Vitrified flooring throughout with a 10-year supplier warranty',
      'Completed within the original approved budget'
    ]
  }),
  make({
    id: 'p-003',
    slug: 'corporate-office-pune',
    name: 'Chauhan Empire',
    location: 'Chandrapur, Maharashtra',
    category: 'Commercial',
    status: 'Coming Soon',
    featured: true,
    published: true,
    summary:
      'A 220-seat office across two floors with meeting rooms, a cafeteria and a server room.',
    description:
      'A bare-shell commercial floor being converted into a working office for a software services firm. Work is sequenced so that the fire and HVAC services are completed and tested before ceilings close, and the server room is handed over four weeks ahead of the main floor so IT can begin installation. The client occupies the building in phases.',
    completionDate: '2027-09-20',
    size: '18,000 sq.ft.',
    duration: '7 Months',
    client: 'Nexora Systems Pvt. Ltd.',
    coverImage: "/ChauhanEmpire.png",
    images: [
      { url: img.officeInterior, alt: 'Open plan workstation area under fit-out' },
      { url: img.officeMeeting, alt: 'Glass-partitioned meeting room' },
      { url: img.officeTower, alt: 'Exterior of the office building in Hinjawadi' }
    ],
    beforeImages: [],
    afterImages: [],
    scope: [
      'Demolition and levelling of the bare shell',
      'Glass partitions, gypsum walls and false ceiling',
      'HVAC ducting, fire detection and suppression',
      'Electrical, data cabling and UPS room',
      'Workstations, storage and cafeteria fit-out'
    ],
    highlights: [
      'Server room handed over four weeks ahead of the main floor',
      'Fire compliance documentation managed in-house',
      'Phased occupation so the client keeps working through the build'
    ]
  }),
  make({
    id: 'p-004',
    slug: 'luxury-residence-nagpur',
    name: 'Chauhan Regal',
    location: 'Chandrapur, Maharashtra',
    category: 'Commercial',
    status: 'Coming Soon',
    featured: true,
    published: true,
    summary:
      'A turnkey five-bedroom residence delivered furnished, from drawings to keys.',
    description:
      'A single contract covering design, approvals, construction and interiors. The house sits on a corner plot in Civil Lines, with the living areas turned away from the road for privacy. Stone cladding, a home theatre, a lift and a basement parking level were part of the original scope, so services were planned before the foundation rather than retrofitted.',
    completionDate: '2028-08-29',
    size: '18,200 sq.ft.',
    duration: '18 Months',
    client: 'Agrawal Family',
    coverImage: "/ChauhanRegal.png",
    images: [
      { url: img.residenceLux, alt: 'Evening view of the luxury residence in Civil Lines' },
      { url: img.villaLiving, alt: 'Formal living room with stone feature wall' },
      { url: img.interiorWork, alt: 'Master bedroom with fitted wardrobes' },
      { url: img.siteCrane, alt: 'Basement excavation during the early construction stage' }
    ],
    beforeImages: [],
    afterImages: [],
    scope: [
      'Design, structural drawings and sanctions',
      'Basement excavation, shoring and waterproofing',
      'RCC frame, stone cladding and roofing',
      'Lift, home automation and home theatre',
      'Full interiors, furniture and landscaping'
    ],
    highlights: [
      'Single contract from first drawing to furnished handover',
      'Basement raft waterproofed with a double membrane system',
      'Home automation and AV conduiting planned before casting'
    ]
  }),
  make({
    id: 'p-005',
    slug: 'retail-complex-amravati',
    name: 'Retail Complex',
    location: 'Amravati',
    category: 'Commercial',
    status: 'Ongoing',
    featured: false,
    published: true,
    summary:
      'A ground-plus-two retail block with 14 units, a service lift and surface parking.',
    description:
      'A retail development on a main road site, planned so that each unit has independent street access and a separate electrical meter. The structure is a flat-slab frame, which gave the owner column-free shop fronts. Work is currently at the finishing stage on the ground floor while the second floor slab cures.',
    completionDate: '2026-05-15',
    size: '26,000 sq.ft.',
    duration: '14 Months',
    client: 'Shree Balaji Developers',
    coverImage: img.retailPlaza,
    images: [
      { url: img.retailPlaza, alt: 'Retail complex under construction in Amravati' },
      { url: img.siteCrane, alt: 'Slab shuttering on the second floor' }
    ],
    beforeImages: [],
    afterImages: [],
    scope: [
      'Flat-slab RCC structure and masonry',
      'Shop front glazing and shutters',
      'Common area electrical, lighting and lift',
      'Firefighting system and water tanks',
      'Parking, drainage and external paving'
    ],
    highlights: [
      'Column-free shop fronts using a flat-slab frame',
      'Independent metering for all 14 units',
      'Structure topped out on schedule'
    ]
  }),
  make({
    id: 'p-006',
    slug: 'riverside-renovation-nagpur',
    name: 'Riverside Renovation',
    location: 'Sitabuldi, Nagpur',
    category: 'Renovation',
    status: 'Completed',
    featured: false,
    published: true,
    summary:
      'A 32-year-old house rebuilt internally with new services, waterproofing and a reworked layout.',
    description:
      'The existing structure was sound but the services had failed and the layout no longer worked for the family. We retained the RCC frame, removed all internal partitions, replaced the full plumbing and electrical system, treated the terrace for water ingress and rebuilt the kitchen and bathrooms. The family stayed on the ground floor while the first floor was completed.',
    completionDate: '2025-03-12',
    size: '2,400 sq.ft.',
    duration: '6 Months',
    client: 'Joshi Residence',
    coverImage: img.renovationAfter,
    images: [
      { url: img.renovationAfter, alt: 'Reworked living area after renovation' },
      { url: img.kitchenAfter, alt: 'New kitchen with modular units' }
    ],
    beforeImages: [
      { url: img.renovationBefore, alt: 'Original living room before renovation work began' },
      { url: img.kitchenBefore, alt: 'Original kitchen with failed plumbing and old cabinets' }
    ],
    afterImages: [
      { url: img.renovationAfter, alt: 'The same living room after renovation' },
      { url: img.kitchenAfter, alt: 'The same kitchen after renovation' }
    ],
    scope: [
      'Structural audit of the existing frame',
      'Internal demolition and debris removal',
      'Complete replumbing and rewiring',
      'Terrace and bathroom waterproofing',
      'New kitchen, bathrooms, flooring and paint'
    ],
    highlights: [
      'Existing RCC frame retained, cutting cost and time',
      'Family stayed in the house through a phased schedule',
      'Terrace waterproofing carries a 7-year warranty'
    ]
  }),
  make({
    id: 'p-007',
    slug: 'commercial-plaza-pune',
    name: 'Commercial Plaza',
    location: 'Baner, Pune',
    category: 'Commercial',
    status: 'Completed',
    featured: false,
    published: true,
    summary:
      'A mixed-use plaza with ground floor retail, three office floors and basement parking.',
    description:
      'A 42,000 sq.ft. mixed-use building completed for a Pune developer. Retail and office entries were separated at the design stage so tenants never share a lobby. The basement is naturally ventilated through two light wells, which removed the need for mechanical extraction and cut the running cost for the owner.',
    completionDate: '2024-01-25',
    size: '42,000 sq.ft.',
    duration: '19 Months',
    client: 'Trivedi Estates',
    coverImage: img.commercialPlaza,
    images: [
      { url: img.commercialPlaza, alt: 'Completed commercial plaza in Baner, Pune' },
      { url: img.officeMeeting, alt: 'Office floor after handover' },
      { url: img.workers, alt: 'Finishing work on the facade' }
    ],
    beforeImages: [],
    afterImages: [],
    scope: [
      'Piled foundation and basement construction',
      'RCC frame and ACP facade',
      'Two passenger lifts and one service lift',
      'Firefighting, DG backup and STP',
      'Basement parking, ramps and drainage'
    ],
    highlights: [
      'Separate retail and office entries from the design stage',
      'Naturally ventilated basement, no mechanical extraction',
      'Occupancy certificate obtained within six weeks of handover'
    ]
  }),
  make({
    id: 'p-008',
    slug: 'contemporary-home-bhandara',
    name: 'Contemporary Home',
    location: 'Bhandara',
    category: 'Residential',
    status: 'Ongoing',
    featured: false,
    published: true,
    summary:
      'A compact three-bedroom home on a narrow plot, currently at the finishing stage.',
    description:
      'A 25ft wide plot needed a plan that brought light into the middle of the house. The solution was a top-lit stair core in the centre with rooms arranged around it. Structure and plaster are complete; flooring, joinery and painting are in progress with handover scheduled before the monsoon.',
    completionDate: '2026-04-10',
    size: '1,950 sq.ft.',
    duration: '8 Months',
    client: 'Mr. Tayde',
    coverImage: img.bungalow,
    images: [
      { url: img.bungalow, alt: 'Contemporary home in Bhandara nearing completion' },
      { url: img.interiorWork, alt: 'Interior finishing work in progress' }
    ],
    beforeImages: [],
    afterImages: [],
    scope: [
      'Structural design for a narrow plot',
      'RCC frame and masonry',
      'Top-lit central stair core',
      'Plumbing, electrical and finishing',
      'Handover with a cleared snag list'
    ],
    highlights: [
      'Top-lit stair core brings daylight to the centre of the plan',
      'Every bedroom has an external window despite the narrow plot',
      'On schedule for a pre-monsoon handover'
    ]
  })
];
