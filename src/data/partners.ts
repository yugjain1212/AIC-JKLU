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
  | 'hdfc-bank'
  | 'wadhwani'
  | 'iima-ventures'
  | 'springboard'
  | 'f6s'
  | 'bank-of-india'
  | 'bloom-ventures'
  | 'aws'
  | 'mentor'
  | 'suits'
  | 'zarthi'
  | 'myoperator'
  | 'zoho'
  | 'idfc-bank'
  | 'jk-organisation'
  // Ecosystem
  | 'aic-raise'
  | 'fitt'
  | 'aic'
  | 'aic-gtu'
  | 'neatehub'
  | 'iimb'
  | 'nsrcel'
  | 'dit-university'
  | 'iiim'
  | 'campus-crest'
  | 'villgro'
  | 'rajasthan-startup-cell'
  | 'bits'
  | 'iiit'
  | 'nasscom'
  | 'tie'
  | 'headstart'
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

export const PARTNERS_DATA: Partner[] = [
  // ── 01 / GOVERNMENT ──
  {
    id: 'niti-aayog',
    name: 'NITI Aayog',
    category: 'GOVERNMENT',
    logoType: 'niti-aayog',
    image: '/partners/government/niti-aayog.svg',
    brandColor: '#003366',
    description: 'National Institution for Transforming India, Government of India',
  },
  {
    id: 'atal-innovation-mission',
    name: 'Atal Innovation Mission',
    category: 'GOVERNMENT',
    logoType: 'atal-innovation-mission',
    image: '/partners/government/aim.svg',
    brandColor: '#EB5725',
    description: "Government of India's flagship initiative to promote innovation & entrepreneurship",
  },
  {
    id: 'startup-india',
    name: 'Startup India / DPIIT',
    category: 'GOVERNMENT',
    logoType: 'startup-india',
    image: '/partners/government/dpiit-startup-india.svg',
    brandColor: '#00539B',
    description: 'Department for Promotion of Industry and Internal Trade',
  },
  {
    id: 'doitc',
    name: 'DoIT&C Rajasthan',
    category: 'GOVERNMENT',
    logoType: 'doitc',
    image: '/partners/government/doitc.svg',
    brandColor: '#1A365D',
    description: 'Department of Information Technology & Communication, Rajasthan',
  },
  {
    id: 'msme',
    name: 'Ministry of MSME',
    category: 'GOVERNMENT',
    logoType: 'msme',
    image: '/partners/government/msme.svg',
    brandColor: '#2B6CB0',
    description: 'Ministry of Micro, Small and Medium Enterprises',
  },
  {
    id: 'seed-fund',
    name: 'Startup India Seed Fund',
    category: 'GOVERNMENT',
    logoType: 'seed-fund',
    image: '/partners/government/seed-fund.svg',
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
    image: '/partners/investors/ian.svg',
    brandColor: '#C41230',
    description: "India's first and largest network of angel investors",
  },
  {
    id: 'social-alpha',
    name: 'Social Alpha',
    category: 'INVESTORS',
    logoType: 'social-alpha',
    image: '/partners/investors/social-alpha.svg',
    brandColor: '#E65100',
    description: 'Multistage innovation curation and venture development platform',
  },
  {
    id: 'warmup-ventures',
    name: 'WarmUp Ventures',
    category: 'INVESTORS',
    logoType: 'warmup-ventures',
    image: '/partners/investors/warmup-ventures.svg',
    brandColor: '#EB5725',
    description: 'Early-stage venture fund backing exceptional founders',
  },
  {
    id: 'arthayan',
    name: 'Arthayan',
    category: 'INVESTORS',
    logoType: 'arthayan',
    image: '/partners/investors/arthayan.svg',
    brandColor: '#1E3A8A',
    description: 'Funding ecosystem enabler and venture intelligence network',
  },
  {
    id: 'sinbex',
    name: 'Sinbex',
    category: 'INVESTORS',
    logoType: 'sinbex',
    image: '/partners/investors/sinbex.svg',
    brandColor: '#0D9488',
    description: 'Angel syndicate and startup accelerator investments',
  },

  // ── 03 / TECHNOLOGY & CORPORATE ──
  {
    id: 'hdfc-bank',
    name: 'HDFC Bank',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'hdfc-bank',
    image: '/partners/technology/hdfc-bank.svg',
    brandColor: '#004C8F',
    description: 'SmartUp banking solutions & grant programs for innovators',
  },
  {
    id: 'wadhwani',
    name: 'Wadhwani Foundation',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'wadhwani',
    image: '/partners/technology/wadhwani.svg',
    brandColor: '#B91C1C',
    description: 'Global philanthropy accelerating job creation through entrepreneurship',
  },
  {
    id: 'iima-ventures',
    name: 'IIMA Ventures',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'iima-ventures',
    image: '/partners/technology/iima-ventures.svg',
    brandColor: '#991B1B',
    description: 'Innovation & entrepreneurship ecosystem from IIM Ahmedabad',
  },
  {
    id: 'springboard',
    name: 'Springboard',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'springboard',
    brandColor: '#EB5725',
    description: 'Workforce transformation and industry mentorship partner',
  },
  {
    id: 'f6s',
    name: 'F6S',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'f6s',
    image: '/partners/technology/f6s.svg',
    brandColor: '#FF5733',
    description: 'Global network and deals platform for founders and startups',
  },
  {
    id: 'bloom-ventures',
    name: 'Bloom Ventures',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'bloom-ventures',
    brandColor: '#00539B',
    description: 'Venture investments and growth acceleration',
  },
  {
    id: 'aws',
    name: 'AWS Activate',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'aws',
    image: '/partners/technology/aws.svg',
    brandColor: '#FF9900',
    description: 'Cloud credits & AWS infrastructure partner',
  },
  {
    id: 'mentor',
    name: 'Mentor',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'mentor',
    brandColor: '#E11D48',
    description: 'Startup mentoring network and leadership advisory',
  },
  {
    id: 'suits',
    name: 'SUITS Coaching Spaces',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'suits',
    brandColor: '#EB5725',
    description: 'Coaching spaces and incubation infrastructure',
  },
  {
    id: 'zarthi',
    name: 'Zarthi',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'zarthi',
    image: '/partners/technology/zarthi.svg',
    brandColor: '#121212',
    description: 'Business catalyst and tech acceleration partner',
  },
  {
    id: 'myoperator',
    name: 'MyOperator',
    category: 'TECHNOLOGY & CORPORATE',
    logoType: 'myoperator',
    image: '/partners/technology/myoperator.svg',
    brandColor: '#00B4D8',
    description: 'Cloud telephony and business communication system partner',
  },

  // ── 04 / ECOSYSTEM ──
  {
    id: 'aic-raise',
    name: 'AIC RAISE',
    category: 'ECOSYSTEM',
    logoType: 'aic-raise',
    image: '/partners/ecosystem/aic-raise.svg',
    brandColor: '#0284C7',
    description: 'Atal Incubation Centre partner focusing on sustainable SDGs',
  },
  {
    id: 'fitt',
    name: 'FITT IIT Delhi',
    category: 'ECOSYSTEM',
    logoType: 'fitt',
    image: '/partners/ecosystem/fitt.svg',
    brandColor: '#1E293B',
    description: 'Foundation for Innovation and Technology Transfer at IIT Delhi',
  },
  {
    id: 'aic',
    name: 'Atal Incubation Centre',
    category: 'ECOSYSTEM',
    logoType: 'aic',
    brandColor: '#EB5725',
    description: 'Atal Incubation Centre ecosystem partner',
  },
  {
    id: 'aic-gtu',
    name: 'AIC-GTU',
    category: 'ECOSYSTEM',
    logoType: 'aic-gtu',
    image: '/partners/ecosystem/aic-gtu.svg',
    brandColor: '#4F46E5',
    description: 'Atal Incubation Centre - Gujarat Technological University',
  },
  {
    id: 'neatehub',
    name: 'NEATEHUB',
    category: 'ECOSYSTEM',
    logoType: 'neatehub',
    image: '/partners/ecosystem/neatehub.svg',
    brandColor: '#1B5E20',
    description: 'North East Agriculture Technology Entrepreneurs Hub',
  },
  {
    id: 'nsrcel',
    name: 'NSRCEL @ IIM Bangalore',
    category: 'ECOSYSTEM',
    logoType: 'nsrcel',
    image: '/partners/ecosystem/nsrcel-2.svg',
    brandColor: '#991B1B',
    description: "IIM Bangalore's flagship startup incubator and innovation hub",
  },
  {
    id: 'dit-university',
    name: 'DIT University',
    category: 'ECOSYSTEM',
    logoType: 'dit-university',
    image: '/partners/ecosystem/dit-university.svg',
    brandColor: '#00AEEF',
    description: 'Academic partner & research innovation center',
  },
  {
    id: 'iiim',
    name: 'IIIM Jaipur',
    category: 'ECOSYSTEM',
    logoType: 'iiim',
    image: '/partners/ecosystem/iiim.svg',
    brandColor: '#1E40AF',
    description: 'International School of Informatics & Management',
  },
  {
    id: 'villgro',
    name: 'Villgro Innovations',
    category: 'ECOSYSTEM',
    logoType: 'villgro',
    image: '/partners/ecosystem/villgro.svg',
    brandColor: '#007A33',
    description: "India's pioneering social enterprise incubator",
  },
  {
    id: 'rajasthan-startup-cell',
    name: 'Rajasthan Startup Cell',
    category: 'ECOSYSTEM',
    logoType: 'rajasthan-startup-cell',
    brandColor: '#121212',
    description: 'State entrepreneurial acceleration unit',
  },
];

export interface CategoryTheme {
  bgCard: string;
  iconColor: string;
  underlineColor: string;
  badgeBorder: string;
}

export interface PartnerGroupConfig {
  id: 'government' | 'investors' | 'technology' | 'ecosystem';
  number: string;
  title: string;
  iconName: 'Landmark' | 'WalletCards' | 'Cpu' | 'Globe2';
  theme: CategoryTheme;
  partners: Partner[];
}

export const PARTNER_GROUPS: PartnerGroupConfig[] = [
  {
    id: 'government',
    number: '01',
    title: 'GOVERNMENT',
    iconName: 'Landmark',
    theme: {
      bgCard: 'bg-[#FFF5ED]',
      iconColor: 'text-[#EB5725]',
      underlineColor: 'bg-[#EB5725]',
      badgeBorder: 'border-[#EB5725]/15',
    },
    partners: PARTNERS_DATA.filter((p) => p.category === 'GOVERNMENT'),
  },
  {
    id: 'investors',
    number: '02',
    title: 'INVESTORS',
    iconName: 'WalletCards',
    theme: {
      bgCard: 'bg-[#EEF7F1]',
      iconColor: 'text-[#2D7A4D]',
      underlineColor: 'bg-[#2D7A4D]',
      badgeBorder: 'border-[#2D7A4D]/15',
    },
    partners: PARTNERS_DATA.filter((p) => p.category === 'INVESTORS'),
  },
  {
    id: 'technology',
    number: '03',
    title: 'TECHNOLOGY & CORPORATE',
    iconName: 'Cpu',
    theme: {
      bgCard: 'bg-[#EBF4FA]',
      iconColor: 'text-[#1D70B8]',
      underlineColor: 'bg-[#1D70B8]',
      badgeBorder: 'border-[#1D70B8]/15',
    },
    partners: PARTNERS_DATA.filter((p) => p.category === 'TECHNOLOGY & CORPORATE'),
  },
  {
    id: 'ecosystem',
    number: '04',
    title: 'ECOSYSTEM',
    iconName: 'Globe2',
    theme: {
      bgCard: 'bg-[#F2EDFA]',
      iconColor: 'text-[#6B46C1]',
      underlineColor: 'bg-[#6B46C1]',
      badgeBorder: 'border-[#6B46C1]/15',
    },
    partners: PARTNERS_DATA.filter((p) => p.category === 'ECOSYSTEM'),
  },
];
