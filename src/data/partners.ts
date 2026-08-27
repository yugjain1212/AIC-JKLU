export type PartnerCategory =
  | 'ALL'
  | 'GOVERNMENT'
  | 'INVESTORS'
  | 'TECHNOLOGY & CORPORATE'
  | 'ECOSYSTEM'
  | 'INDUSTRY'
  | 'ACADEMIA'
  | 'ECOSYSTEM ENABLERS';

export type PartnerLogoType =
  // Government
  | 'niti-aayog'
  | 'atal-innovation-mission'
  | 'startup-india'
  | 'startup-rajasthan'
  | 'doitc'
  | 'msme'
  | 'seed-fund'
  | 'istart'
  // Investors
  | 'ian'
  | 'social-alpha'
  | 'warmup-ventures'
  | 'arthayan'
  | 'sinbex'
  // Technology & Corporate
  | 'aws'
  | 'hdfc-bank'
  | 'wadhwani'
  | 'iima-ventures'
  | 'springboard'
  | 'bank-of-india'
  | 'zoho'
  | 'myoperator'
  | 'idfc-bank'
  | 'f6s'
  | 'zarthi'
  | 'jk-organisation'
  // Ecosystem
  | 'iiit'
  | 'bits'
  | 'nasscom'
  | 'tie'
  | 'headstart'
  | 'aic-raise'
  | 'fitt'
  | 'aic-gtu'
  | 'nsrcel'
  | 'dit-university'
  | 'villgro'
  | 'neatehub'
  | 'iiim'
  | 'custom';

export interface Partner {
  id: string;
  name: string;
  category: PartnerCategory;
  logoType?: PartnerLogoType;
  brandColor?: string;
  description?: string;
  website?: string;
  image?: string;
}

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  'ALL',
  'GOVERNMENT',
  'INVESTORS',
  'TECHNOLOGY & CORPORATE',
  'ECOSYSTEM',
];

export const PARTNERS_DATA: Partner[] = [
  // ── 01 / GOVERNMENT ──
  {
    id: 'niti-aayog',
    name: 'NITI Aayog',
    category: 'GOVERNMENT',
    logoType: 'niti-aayog',
    image: '/partners/government/niti-aayog.png',
    brandColor: '#003366',
    description: 'National Institution for Transforming India, Government of India',
  },
  {
    id: 'atal-innovation-mission',
    name: 'Atal Innovation Mission',
    category: 'GOVERNMENT',
    logoType: 'atal-innovation-mission',
    image: '/partners/government/aim.jpg',
    brandColor: '#EB5725',
    description: "Government of India's flagship initiative to promote innovation & entrepreneurship",
  },
  {
    id: 'startup-india',
    name: 'Startup India / DPIIT',
    category: 'GOVERNMENT',
    logoType: 'startup-india',
    image: '/partners/government/dpiit-startup-india.png',
    brandColor: '#00539B',
    description: 'Department for Promotion of Industry and Internal Trade',
  },
  {
    id: 'doitc',
    name: 'DoIT&C Rajasthan',
    category: 'GOVERNMENT',
    logoType: 'doitc',
    image: '/partners/government/doitc.png',
    brandColor: '#1A365D',
    description: 'Department of Information Technology & Communication, Rajasthan',
  },
  {
    id: 'msme',
    name: 'Ministry of MSME',
    category: 'GOVERNMENT',
    logoType: 'msme',
    image: '/partners/government/msme.jpg',
    brandColor: '#2B6CB0',
    description: 'Ministry of Micro, Small and Medium Enterprises',
  },
  {
    id: 'seed-fund',
    name: 'Startup India Seed Fund',
    category: 'GOVERNMENT',
    logoType: 'seed-fund',
    image: '/partners/government/seed-fund.jpeg',
    brandColor: '#121212',
    description: 'Financial assistance to startups for proof of concept and prototype development',
  },
  {
    id: 'istart',
    name: 'iStart Rajasthan',
    category: 'GOVERNMENT',
    logoType: 'istart',
    image: '/partners/government/istart.png',
    brandColor: '#EB5725',
    description: 'Flagship initiative by the Government of Rajasthan for startups',
  },

  // ── 02 / INVESTORS ──
  {
    id: 'ian',
    name: 'Indian Angel Network',
    category: 'INVESTORS',
    logoType: 'ian',
    image: '/partners/investors/ian.jpeg',
    brandColor: '#C41230',
    description: "India's first and largest network of angel investors",
  },
  {
    id: 'social-alpha',
    name: 'Social Alpha',
    category: 'INVESTORS',
    logoType: 'social-alpha',
    image: '/partners/investors/social-alpha.png',
    brandColor: '#E65100',
    description: 'Multistage innovation curation and venture development platform',
  },
  {
    id: 'warmup-ventures',
    name: 'WarmUp Ventures',
    category: 'INVESTORS',
    logoType: 'warmup-ventures',
    image: '/partners/investors/warmup-ventures.jpg',
    brandColor: '#EB5725',
    description: 'Early-stage venture fund backing exceptional founders',
  },
  {
    id: 'arthayan',
    name: 'Arthayan',
    category: 'INVESTORS',
    logoType: 'arthayan',
    image: '/partners/investors/arthayan.png',
    brandColor: '#1E3A8A',
    description: 'Funding ecosystem enabler and venture intelligence network',
  },
  {
    id: 'sinbex',
    name: 'Sinbex',
    category: 'INVESTORS',
    logoType: 'sinbex',
    image: '/partners/investors/images.jpeg',
    brandColor: '#0D9488',
    description: 'Angel syndicate and startup accelerator investments',
  },

  // ── 03 / TECHNOLOGY & CORPORATE ──
  {
    id: 'hdfc-bank',
    name: 'HDFC Bank Parivartan',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'hdfc-bank',
    image: '/partners/technology/hdfc-bank.webp',
    brandColor: '#004C8F',
    description: 'SmartUp banking solutions & grant programs for innovators',
  },
  {
    id: 'aws',
    name: 'AWS Activate',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'aws',
    image: '/partners/technology/aws.jpeg',
    brandColor: '#FF9900',
    description: 'Cloud credits & AWS infrastructure partner',
  },
  {
    id: 'zoho',
    name: 'Zoho for Startups',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'zoho',
    image: '/partners/technology/zoho.jpeg',
    brandColor: '#E42528',
    description: 'Enterprise cloud software suite and startup partner program',
  },
  {
    id: 'wadhwani',
    name: 'Wadhwani Foundation',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'wadhwani',
    image: '/partners/technology/wadhwani.png',
    brandColor: '#B91C1C',
    description: 'Global philanthropy accelerating job creation through entrepreneurship',
  },
  {
    id: 'iima-ventures',
    name: 'IIMA Ventures',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'iima-ventures',
    image: '/partners/technology/iima-ventures.png',
    brandColor: '#991B1B',
    description: 'Innovation & entrepreneurship ecosystem from IIM Ahmedabad',
  },
  {
    id: 'myoperator',
    name: 'MyOperator',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'myoperator',
    image: '/partners/technology/myoperator.png',
    brandColor: '#00B4D8',
    description: 'Cloud telephony and business communication system partner',
  },
  {
    id: 'idfc-bank',
    name: 'IDFC FIRST Bank',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'idfc-bank',
    image: '/partners/technology/idfc-bank.png',
    brandColor: '#9E1B22',
    description: 'FIRST WINGS startup banking solutions and credit facilities',
  },
  {
    id: 'f6s',
    name: 'F6S',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'f6s',
    image: '/partners/technology/f6s.png',
    brandColor: '#FF5733',
    description: 'Global network and deals platform for founders and startups',
  },
  {
    id: 'zarthi',
    name: 'Zarthi',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'zarthi',
    image: '/partners/technology/zarthi.png',
    brandColor: '#121212',
    description: 'Business catalyst and tech acceleration partner',
  },
  {
    id: 'jk-organisation',
    name: 'JK Organisation',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'jk-organisation',
    image: '/partners/technology/jk-organisation.png',
    brandColor: '#121212',
    description: 'Industrial conglomerate partner and institutional foundation',
  },
  // ── 04 / ECOSYSTEM ──
  {
    id: 'fitt',
    name: 'FITT IIT Delhi',
    category: 'ECOSYSTEM',
    logoType: 'fitt',
    image: '/partners/ecosystem/fitt.png',
    brandColor: '#1E293B',
    description: 'Foundation for Innovation and Technology Transfer at IIT Delhi',
  },
  {
    id: 'nsrcel',
    name: 'NSRCEL @ IIM Bangalore',
    category: 'ECOSYSTEM',
    logoType: 'nsrcel',
    image: '/partners/ecosystem/nsrcel.png',
    brandColor: '#991B1B',
    description: "IIM Bangalore's flagship startup incubator and innovation hub",
  },
  {
    id: 'aic-gtu',
    name: 'AIC-GTU',
    category: 'ECOSYSTEM',
    logoType: 'aic-gtu',
    image: '/partners/ecosystem/aic-gtu.jpeg',
    brandColor: '#4F46E5',
    description: 'Atal Incubation Centre - Gujarat Technological University',
  },
  {
    id: 'aic-raise',
    name: 'AIC RAISE',
    category: 'ECOSYSTEM',
    logoType: 'aic-raise',
    image: '/partners/ecosystem/aic-raise.jpeg',
    brandColor: '#0284C7',
    description: 'Atal Incubation Centre partner focusing on sustainable SDGs',
  },
  {
    id: 'dit-university',
    name: 'DIT University',
    category: 'ECOSYSTEM',
    logoType: 'dit-university',
    image: '/partners/ecosystem/dit-university.png',
    brandColor: '#00AEEF',
    description: 'Academic partner & research innovation center',
  },
  {
    id: 'villgro',
    name: 'Villgro Innovations',
    category: 'ECOSYSTEM',
    logoType: 'villgro',
    image: '/partners/ecosystem/villgro.png',
    brandColor: '#007A33',
    description: "India's pioneering social enterprise incubator",
  },
  {
    id: 'neatehub',
    name: 'NEATEHUB',
    category: 'ECOSYSTEM',
    logoType: 'neatehub',
    image: '/partners/ecosystem/neatehub.png',
    brandColor: '#1B5E20',
    description: 'North East Agriculture Technology Entrepreneurs Hub',
  },
  {
    id: 'iiim',
    name: 'IIIM Jaipur',
    category: 'ECOSYSTEM',
    logoType: 'iiim',
    image: '/partners/ecosystem/iiim.jpeg',
    brandColor: '#1E40AF',
    description: 'International School of Informatics & Management',
  },
  {
    id: 'bits-pilani',
    name: 'BITS Pilani',
    category: 'ECOSYSTEM',
    logoType: 'bits',
    brandColor: '#002B49',
    description: 'Academic & student innovation partner',
  },
  {
    id: 'iiit-allahabad',
    name: 'IIIT Allahabad',
    category: 'ECOSYSTEM',
    logoType: 'iiit',
    brandColor: '#0A3977',
    description: 'Academic and research collaboration',
  },
  {
    id: 'tie-rajasthan',
    name: 'TiE Rajasthan',
    category: 'ECOSYSTEM',
    logoType: 'tie',
    brandColor: '#ED1B2D',
    description: 'Global entrepreneurial network Rajasthan chapter',
  },
  {
    id: 'headstart',
    name: 'Headstart Network',
    category: 'ECOSYSTEM',
    logoType: 'headstart',
    brandColor: '#F26522',
    description: 'Grassroots startup community and networking partner',
  },
];

export interface PartnerGroupConfig {
  id: 'government' | 'investors' | 'technology' | 'ecosystem';
  number: string;
  title: string;
  iconName: 'Landmark' | 'WalletCards' | 'Cpu' | 'Globe2';
  direction: 1 | -1;
  isMultiRow?: boolean;
  partners: Partner[];
}

export const PARTNER_GROUPS: PartnerGroupConfig[] = [
  {
    id: 'government',
    number: '01',
    title: 'GOVERNMENT',
    iconName: 'Landmark',
    direction: 1,
    isMultiRow: false,
    partners: PARTNERS_DATA.filter((p) => p.category === 'GOVERNMENT'),
  },
  {
    id: 'investors',
    number: '02',
    title: 'INVESTORS',
    iconName: 'WalletCards',
    direction: -1,
    isMultiRow: false,
    partners: PARTNERS_DATA.filter((p) => p.category === 'INVESTORS'),
  },
  {
    id: 'technology',
    number: '03',
    title: 'TECHNOLOGY & CORPORATE',
    iconName: 'Cpu',
    direction: 1,
    isMultiRow: true,
    partners: PARTNERS_DATA.filter((p) => p.category === 'TECHNOLOGY & CORPORATE'),
  },
  {
    id: 'ecosystem',
    number: '04',
    title: 'ECOSYSTEM',
    iconName: 'Globe2',
    direction: -1,
    isMultiRow: true,
    partners: PARTNERS_DATA.filter((p) => p.category === 'ECOSYSTEM'),
  },
];
