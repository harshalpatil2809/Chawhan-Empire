import type { Enquiry } from '@/lib/types';

export const seedEnquiries: Enquiry[] = [
  {
    id: 'e-001',
    name: 'Rohit Deshpande',
    phone: '+91 98765 43210',
    email: 'rohit.deshpande@example.com',
    location: 'Manish Nagar, Nagpur',
    projectType: 'New Construction',
    propertyType: 'Plot / Land',
    budget: 'Rs. 50 Lakhs - Rs. 1 Crore',
    startDate: '2026-11-01',
    message:
      'I have a 3,200 sq.ft. plot in Manish Nagar and want to build a four-bedroom house with parking for two cars. Looking for a full estimate.',
    attachments: [],
    status: 'New',
    createdAt: '2026-09-16T10:12:00.000Z'
  },
  {
    id: 'e-002',
    name: 'Sneha Kulkarni',
    phone: '+91 91234 56780',
    email: 'sneha.k@example.com',
    location: 'Dharampeth, Nagpur',
    projectType: 'Renovation',
    propertyType: 'Apartment',
    budget: 'Rs. 10-25 Lakhs',
    startDate: '2026-10-15',
    message:
      'Our flat is 18 years old. Bathrooms leak into the floor below and the kitchen needs a full rebuild. Need a site visit first.',
    attachments: [],
    status: 'Contacted',
    createdAt: '2026-09-12T06:40:00.000Z'
  },
  {
    id: 'e-003',
    name: 'Imran Shaikh',
    phone: '+91 99887 76655',
    email: 'imran.shaikh@example.com',
    location: 'Hingna Road, Nagpur',
    projectType: 'Commercial',
    propertyType: 'Retail Space',
    budget: 'Rs. 1 Crore+',
    startDate: '2027-01-05',
    message:
      'Planning a showroom and godown on a 9,000 sq.ft. plot on Hingna Road. Need budget and timeline before I finalise the land purchase.',
    attachments: [],
    status: 'In Discussion',
    createdAt: '2026-09-05T12:05:00.000Z'
  },
  {
    id: 'e-004',
    name: 'Priya Nandeshwar',
    phone: '+91 90210 33445',
    email: 'priya.n@example.com',
    location: 'Wardha',
    projectType: 'Interior',
    propertyType: 'Villa / Bungalow',
    budget: 'Rs. 25-50 Lakhs',
    startDate: '2026-10-01',
    message:
      'Civil work is done by another contractor. We need interiors: false ceiling, wardrobes, kitchen and painting.',
    attachments: [],
    status: 'Converted',
    createdAt: '2026-08-21T09:30:00.000Z'
  },
  {
    id: 'e-005',
    name: 'Anand Rathi',
    phone: '+91 93456 12378',
    email: 'anand.rathi@example.com',
    location: 'Amravati',
    projectType: 'Residential',
    propertyType: 'Plot / Land',
    budget: 'Under Rs. 10 Lakhs',
    startDate: '2026-12-01',
    message:
      'Only a compound wall and a caretaker room for now. Will build the main house next year.',
    attachments: [],
    status: 'Closed',
    createdAt: '2026-08-02T15:20:00.000Z'
  }
];
