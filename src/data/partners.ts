export type PartnerCategory =
  | 'ALL'
  | 'INDUSTRY'
  | 'ACADEMIA'
  | 'GOVERNMENT'
  | 'INVESTORS'
  | 'ECOSYSTEM ENABLERS';

export interface Partner {
  id: string;
  name: string;
  category: Exclude<PartnerCategory, 'ALL'>;
  logoPlaceholderText?: string;
  logoType?: 'tata' | 'microsoft' | 'google' | 'aws' | 'iiit' | 'bits' | 'deloitte' | 'sequoia' | 'ian' | 'nasscom' | 'startup-rajasthan' | 'tie' | 'headstart' | 'custom';
  brandColor?: string;
  description?: string;
  website?: string;
  image?: string;
}

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  'ALL',
  'INDUSTRY',
  'ACADEMIA',
  'GOVERNMENT',
  'INVESTORS',
  'ECOSYSTEM ENABLERS',
];

export const PARTNERS_DATA: Partner[] = [
  // ── ROW 1 / INDUSTRY & BIG TECH ──
  {
    id: 'tata',
    name: 'TATA',
    category: 'INDUSTRY',
    logoType: 'tata',
    brandColor: '#00539B',
    description: 'Industrial & Technology conglomerate partner',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    category: 'INDUSTRY',
    logoType: 'microsoft',
    brandColor: '#00A4EF',
    description: 'Cloud and founder tech ecosystem partner',
  },
  {
    id: 'google',
    name: 'Google',
    category: 'INDUSTRY',
    logoType: 'google',
    brandColor: '#4285F4',
    description: 'Tech & developer ecosystem partner',
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'INDUSTRY',
    logoType: 'aws',
    brandColor: '#FF9900',
    description: 'Cloud credits & infrastructure partner',
  },

  // ── ROW 2 / ACADEMIA & KNOWLEDGE ──
  {
    id: 'iiit-allahabad',
    name: 'IIIT Allahabad',
    category: 'ACADEMIA',
    logoType: 'iiit',
    brandColor: '#0A3977',
    description: 'Research & academic collaboration',
  },
  {
    id: 'bits-pilani',
    name: 'BITS Pilani',
    category: 'ACADEMIA',
    logoType: 'bits',
    brandColor: '#002B49',
    description: 'Academic & student innovation partner',
  },
  {
    id: 'deloitte',
    name: 'Deloitte.',
    category: 'INDUSTRY',
    logoType: 'deloitte',
    brandColor: '#86BC25',
    description: 'Strategic advisory and consulting partner',
  },

  // ── ROW 3 / INVESTORS & VENTURE ──
  {
    id: 'sequoia',
    name: 'Sequoia Capital',
    category: 'INVESTORS',
    logoType: 'sequoia',
    brandColor: '#005A36',
    description: 'Venture capital and investment partner',
  },
  {
    id: 'ian',
    name: 'Indian Angel Network',
    category: 'INVESTORS',
    logoType: 'ian',
    brandColor: '#C41230',
    description: 'Angel investment & seed funding network',
  },
  {
    id: 'nasscom',
    name: 'NASSCOM',
    category: 'ECOSYSTEM ENABLERS',
    logoType: 'nasscom',
    brandColor: '#ED1C24',
    description: 'Industry association & tech growth enabler',
  },

  // ── ROW 4 / GOVERNMENT & ENABLERS ──
  {
    id: 'startup-rajasthan',
    name: 'Startup Rajasthan',
    category: 'GOVERNMENT',
    logoType: 'startup-rajasthan',
    brandColor: '#FF6F00',
    description: 'State government startup & innovation initiative',
  },
  {
    id: 'tie-rajasthan',
    name: 'TiE Rajasthan',
    category: 'ECOSYSTEM ENABLERS',
    logoType: 'tie',
    brandColor: '#ED1B2D',
    description: 'Global entrepreneurial network chapter',
  },
  {
    id: 'headstart',
    name: 'Headstart Network',
    category: 'ECOSYSTEM ENABLERS',
    logoType: 'headstart',
    brandColor: '#F26522',
    description: 'Grassroots startup community partner',
  },
];
