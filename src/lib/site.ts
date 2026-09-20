/** Single place to swap demo details for the contractor's real details. */
export const site = {
  name: 'BuildCraft Constructions',
  tagline: 'Building Spaces. Creating Legacies.',
  description:
    'BuildCraft Constructions is a Nagpur-based construction firm delivering residential, commercial and turnkey projects across Maharashtra.',
  url: 'https://buildcraft.demo',
  phoneDisplay: '+91 7720803593',
  // Demo number. Replace with the contractor's real WhatsApp number (country code, no +).
  whatsappNumber: '917720803593',
  whatsappMessage:
    'Hello BuildCraft Constructions, I would like to discuss a construction project.',
  email: 'projects@buildcraft.demo',
  address: {
    line1: 'Plot 24, Ramdaspeth Business Centre',
    line2: 'Wardha Road, Nagpur, Maharashtra 440010'
  },
  hours: [
    { days: 'Monday - Saturday', time: '9:30 AM - 7:00 PM' },
    { days: 'Sunday', time: 'By appointment' }
  ],
  mapQuery: 'Ramdaspeth, Nagpur, Maharashtra',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' }
  ]
} as const;

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
