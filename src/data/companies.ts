export interface Company {
  id: string;
  name: string;
  image: string;
  logo?: string;
  description: string;
  industry: string;
  founded: string;
  focusAreas: string;
  website: string;
}

export const companies: Company[] = [
  {
    id: '01',
    name: 'Agrizy',
    image: '/companies/images/BAS.png',
    description:
      'Agrizy is a B2B agri-processing platform that connects food businesses with processing units across India, enabling efficient, transparent and scalable supply chains for agri-commodities.',
    industry: 'AgriTech',
    founded: '2021',
    focusAreas: 'Supply Chain, Food Processing, B2B Marketplace',
    website: 'agrizy.in',
  },
  {
    id: '02',
    name: 'Virohan',
    image: '/companies/images/virohan.jpg',
    description:
      'Virohan is a healthcare-focused edtech platform that trains India\'s next generation of healthcare professionals through outcome-linked job-guarantee programs.',
    industry: 'HealthTech / EdTech',
    founded: '2019',
    focusAreas: 'Healthcare Training, Job Guarantee, Skilling',
    website: 'virohan.com',
  },
  {
    id: '03',
    name: 'GreenJoules',
    image: '/companies/images/greenjoules.jpg',
    description:
      'GreenJoules develops clean energy solutions and sustainable technology for rural and semi-urban India, making renewable energy accessible and affordable.',
    industry: 'CleanTech',
    founded: '2020',
    focusAreas: 'Renewable Energy, Rural Electrification, Sustainability',
    website: 'greenjoules.in',
  },
  {
    id: '04',
    name: 'Edviron',
    image: '/companies/images/edviron.jpg',
    description:
      'Edviron is a school fintech platform simplifying fee collection, school ERP and parent communication for thousands of schools across India.',
    industry: 'EdTech / FinTech',
    founded: '2021',
    focusAreas: 'School Payments, ERP, Parent Engagement',
    website: 'edviron.com',
  },
  {
    id: '05',
    name: 'Driffle',
    image: '/companies/images/driffle.jpg',
    description:
      'Driffle is a global digital goods marketplace where users can buy, sell and discover gaming keys, software licenses and digital subscriptions at competitive prices.',
    industry: 'Gaming / Marketplace',
    founded: '2021',
    focusAreas: 'Digital Commerce, Gaming, Global Marketplace',
    website: 'driffle.com',
  },
  {
    id: '06',
    name: 'CredFlow',
    image: '/companies/images/credflow.jpg',
    description:
      'CredFlow automates cash flow management and working capital finance for SMEs, helping businesses reconcile receivables and access credit with minimal friction.',
    industry: 'FinTech',
    founded: '2020',
    focusAreas: 'Cash Flow, SME Finance, Working Capital',
    website: 'credflow.in',
  },
  {
    id: '07',
    name: 'Recykal',
    image: '/companies/images/recykal.jpg',
    description:
      'Recykal is a circular economy platform that connects waste generators, recyclers and brands to enable responsible waste management and EPR compliance at scale.',
    industry: 'CleanTech / Waste Management',
    founded: '2018',
    focusAreas: 'Circular Economy, EPR, Waste Recycling',
    website: 'recykal.com',
  },
  {
    id: '08',
    name: 'Intugine',
    image: '/companies/images/intugine.jpg',
    description:
      'Intugine provides real-time supply chain visibility and logistics intelligence for enterprises, enabling end-to-end tracking and proactive exception management.',
    industry: 'Logistics Tech',
    founded: '2016',
    focusAreas: 'Supply Chain Visibility, Logistics Intelligence, SaaS',
    website: 'intugine.com',
  },
];
