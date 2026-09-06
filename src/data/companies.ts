import startupsJson from './aic_jklu_startups_95.json';

export interface CompanyItem {
  id: number;
  name: string;
  founder: string;
  stage: string;
  sector: string;
  description: string;
  location?: string;
  logo?: string;
  image?: string;
}

// Exactly the 95 startups from aic_jklu_startups_95.json (Single source of truth)
export const STARTUPS: CompanyItem[] = startupsJson.startups.map((s) => ({
  ...s,
  location: 'Jaipur, India',
}));

export const INCUBATED_STARTUPS: CompanyItem[] = STARTUPS;
export const ALL_COMPANIES: CompanyItem[] = STARTUPS;

// Dynamic featured companies derived directly from the exact same JSON dataset
export const FEATURED_COMPANY_IDS = [5, 25, 38, 61, 75, 94];
export const FEATURED_STARTUPS: CompanyItem[] = STARTUPS.filter((c) =>
  FEATURED_COMPANY_IDS.includes(c.id)
);

// Constants for components
export const DIRECTORY_INDUSTRIES = [
  'All',
  'Deep Tech / AI',
  'Aerospace & Defense',
  'CleanTech & Energy',
  'HealthTech & Bio',
  'FinTech & Commerce',
  'AgriTech & Food',
  'EdTech & SaaS',
];

export const RELATIONSHIP_TYPES = ['All', 'Incubated', 'Alumni', 'Supported', 'Accelerated', 'Partner'];
export const STAGES = ['All', 'Ideation', 'Validation', 'Prototype', 'Market Entry', 'Revenue', 'Growth'];

// Backwards compatibility interface
export interface Company {
  id: string;
  name: string;
  image: string;
  slug?: string;
  founder?: string;
  founders?: { name: string; role?: string; bio?: string }[];
  logo?: string;
  description: string;
  industry: string;
  industries: string[];
  founded: string;
  foundedYear: number;
  focusAreas: string;
  website: string;
  relationship?: string;
  stage?: string;
  location: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  story?: string;
}

export const companies: Company[] = [
  {
    id: '01',
    name: 'CaviSafe',
    slug: 'cavisafe',
    image: '/companies/images/cavi_safe.png',
    founder: 'Khushi Sinha',
    description:
      'A functional confectionery brand creating sugar-free dental-care candies designed to neutralise acids, inhibit bacteria, and promote enamel health while making oral care convenient and enjoyable.',
    industry: 'Food/Healthcare',
    industries: ['Food/Healthcare', 'HealthTech & Bio'],
    founded: '2021',
    foundedYear: 2021,
    focusAreas: 'Dental Health, Functional Candies, Preventive Care',
    website: 'aicjklu.com',
    relationship: 'Incubated',
    stage: 'Ideation',
    location: 'Jaipur, India',
  },
  {
    id: '02',
    name: 'BAAS Technologies Private Limited',
    slug: 'baas-technologies',
    image: '/companies/images/BAS.png',
    founder: 'Tanmay Kanmahale',
    description:
      'A launch-as-a-service aerospace startup developing affordable small-satellite launch vehicles and reusable orbital and sub-orbital launch systems.',
    industry: 'Aerospace / SpaceTech',
    industries: ['Aerospace & Defense', 'Deep Tech / AI'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Launch Vehicles, Small Satellites, Reusable Systems',
    website: 'aicjklu.com',
    relationship: 'Incubated',
    stage: 'Validation',
    location: 'Jaipur, India',
  },
  {
    id: '03',
    name: 'FastBillingX Private Limited',
    slug: 'fastbillingx',
    image: '/companies/images/FinQuanta.png',
    founder: 'Panchali Sarkar',
    description:
      'An AI-powered smart-checkout ecosystem combining computer vision, edge AI, IoT sensors and sensor fusion to enable app-free and cashier-less retail experiences.',
    industry: 'RetailTech / AI/ML / DeepTech / IoT',
    industries: ['Deep Tech / AI', 'FinTech & Commerce'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Smart Checkout, Edge AI, Computer Vision, Sensor Fusion',
    website: 'aicjklu.com',
    relationship: 'Incubated',
    stage: 'Validation',
    location: 'Jaipur, India',
  },
  {
    id: '04',
    name: 'Aiotize',
    slug: 'aiotize',
    image: '/companies/images/AIOTIZE.png',
    founder: 'Shivansh Sethi',
    description:
      'A manufacturer of unmanned aircraft systems and multirotor platforms for surveillance, agricultural surveys, mapping and asset inspection.',
    industry: 'AI/ML',
    industries: ['Deep Tech / AI', 'Aerospace & Defense'],
    founded: '2021',
    foundedYear: 2021,
    focusAreas: 'Drones, Surveillance, Agricultural Surveys, Aerial Mapping',
    website: 'aicjklu.com',
    relationship: 'Incubated',
    stage: 'Prototype',
    location: 'Jaipur, India',
  },
  {
    id: '05',
    name: 'SportsThat – Where Fans Connect',
    slug: 'sportsthat',
    image: '/companies/images/sports_that.png',
    founder: 'Sheetal Arora',
    description:
      'A community platform for sports fans, athletes, leagues and clubs that enhances fan experiences and helps brands, teams and clubs identify relevant audiences and improve revenue.',
    industry: 'Sports',
    industries: ['EdTech & SaaS'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Fan Engagement, Sports Community, Audience Intelligence',
    website: 'aicjklu.com',
    relationship: 'Incubated',
    stage: 'Prototype',
    location: 'Jaipur, India',
  },
  {
    id: '06',
    name: 'AICY Technologies Pvt. Ltd.',
    slug: 'aicy-technologies',
    image: '/companies/images/aicy.png',
    founder: 'Anjan Choudhary',
    description:
      'Develops FARMAKART, a unified smart-agriculture services and marketplace platform, together with IoT, analytics, website and application services.',
    industry: 'AgriTech',
    industries: ['AgriTech & Food', 'Deep Tech / AI'],
    founded: '2021',
    foundedYear: 2021,
    focusAreas: 'FARMAKART, Smart Agriculture, IoT Sensors, AgriTech',
    website: 'aicjklu.com',
    relationship: 'Incubated',
    stage: 'Prototype',
    location: 'Jaipur, India',
  },
  {
    id: '07',
    name: 'Papair GmbH',
    slug: 'papair',
    image: '/companies/images/PapairWrap.png',
    founder: 'Christopher Feist',
    description:
      'Develops PapairWrap, a recyclable and biodegradable paper-based alternative to plastic bubble wrap.',
    industry: 'Sustainability / Corporate Gifting',
    industries: ['CleanTech & Energy'],
    founded: '2020',
    foundedYear: 2020,
    focusAreas: 'PapairWrap, Biodegradable Packaging, Sustainable Materials',
    website: 'aicjklu.com',
    relationship: 'Incubated',
    stage: 'Revenue',
    location: 'Jaipur, India',
  },
  {
    id: '08',
    name: 'Sunbird Straw',
    slug: 'sunbird-straw',
    image: '/companies/images/sunvirsdstaw.png',
    founder: 'Chirag',
    description:
      'Produces patented multilayer biodegradable straws from fallen coconut leaves, replacing single-use plastics while supporting rural livelihoods.',
    industry: 'Sustainability / Corporate Gifting',
    industries: ['CleanTech & Energy', 'AgriTech & Food'],
    founded: '2020',
    foundedYear: 2020,
    focusAreas: 'Sunbird Straw, Coconut Leaf Materials, Circular Economy',
    website: 'aicjklu.com',
    relationship: 'Incubated',
    stage: 'Revenue',
    location: 'Jaipur, India',
  },
  {
    id: '09',
    name: 'Markutting Chai Studios – MCS',
    slug: 'markutting-chai',
    image: '/companies/images/markutting_chai.png',
    founder: 'Vidit Sharma',
    description:
      'A storytelling-driven creative agency helping brands grow through authentic content, brand strategy, identity development, social-media campaigns and visual storytelling.',
    industry: 'Marketing',
    industries: ['EdTech & SaaS'],
    founded: '2021',
    foundedYear: 2021,
    focusAreas: 'Brand Strategy, Social Campaigns, Visual Storytelling',
    website: 'aicjklu.com',
    relationship: 'Incubated',
    stage: 'Revenue',
    location: 'Jaipur, India',
  },
  {
    id: '10',
    name: 'Maini Renewables Private Limited',
    slug: 'maini-renewables',
    image: '/companies/images/maini_renewables.png',
    founder: 'Swati Maini',
    description:
      'Develops decentralised hydrokinetic turbines that generate electricity from rivers, canals and oceans without dams or heavy infrastructure.',
    industry: 'Renewable Energy',
    industries: ['CleanTech & Energy'],
    founded: '2020',
    foundedYear: 2020,
    focusAreas: 'Hydrokinetic Turbines, Clean Power, Ocean & River Energy',
    website: 'aicjklu.com',
    relationship: 'Incubated',
    stage: 'Growth',
    location: 'Jaipur, India',
  },
];
