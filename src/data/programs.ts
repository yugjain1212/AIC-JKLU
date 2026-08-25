export interface Program {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  formUrl: string;
  badge?: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 'accelerator',
    number: '01',
    title: 'Accelerator Program',
    subtitle: 'Sustainable Biomaterial-based Solutions – Accelerator Program',
    description:
      'A high-intensity accelerator tailored for early-stage biomaterial, circular economy, and deep-tech sustainability ventures.',
    formUrl: '/apply?program=accelerator',
    badge: 'Cohort Open',
  },
  {
    id: 'incubation',
    number: '02',
    title: 'Incubation Program',
    subtitle: 'Sector Agnostic Incubation Program',
    description:
      'Comprehensive incubation support, infrastructure, mentorship, and funding access across all technology and business domains.',
    formUrl: '/apply?program=incubation',
    badge: 'Rolling Applications',
  },
  {
    id: 'rise',
    number: '03',
    title: 'RISE',
    subtitle: 'Rural India Solution for Energy (RISE)',
    description:
      'Catalyzing grassroots energy innovations, decentralized clean power, and rural technology transformation across India.',
    formUrl: '/apply?program=rise',
    badge: 'Special Initiative',
  },
  {
    id: 'leap',
    number: '04',
    title: 'LEAP',
    subtitle: 'Longevity Economy Accelerator Program',
    description:
      'Empowering solutions in healthcare, eldercare, active aging, and the next-generation longevity economy.',
    formUrl: '/apply?program=leap',
    badge: 'Featured Program',
  },
];
