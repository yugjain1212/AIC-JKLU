export interface Company {
  id: string;
  name: string;
  image: string;
  founder?: string;
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
    name: 'AIOTIZE',
    image: '/companies/images/AIOTIZE.png',
    founder: 'Shivansh Sethi',
    description:
      'A manufacturer of unmanned aircraft systems and multirotor platforms for surveillance, agricultural surveys, mapping and asset inspection.',
    industry: 'Deep Tech / UAV',
    founded: '2021',
    focusAreas: 'Drones, Surveillance, Agricultural Surveys, Aerial Mapping',
    website: 'aicjklu.com',
  },
  {
    id: '02',
    name: 'Bharat Aerospace and Satellites (BAS)',
    image: '/companies/images/BAS.png',
    founder: 'Tanmay Kanmahale',
    description:
      'A launch-as-a-service aerospace startup developing affordable small-satellite launch vehicles and reusable orbital and sub-orbital launch systems.',
    industry: 'Aerospace & SpaceTech',
    founded: '2022',
    focusAreas: 'Launch Vehicles, Small Satellites, Reusable Systems',
    website: 'aicjklu.com',
  },
  {
    id: '03',
    name: 'CaviSafe',
    image: '/companies/images/cavi_safe.png',
    founder: 'Khushi Sinha',
    description:
      'CaviSafe is a functional confectionery brand creating sugar-free dental-care candies designed to neutralise acids, inhibit bacteria, and promote enamel health.',
    industry: 'HealthTech / Oral Care',
    founded: '2021',
    focusAreas: 'Dental Health, Functional Candies, Preventive Care',
    website: 'aicjklu.com',
  },
  {
    id: '04',
    name: 'FinQuanta',
    image: '/companies/images/FinQuanta.png',
    founder: 'Panchali Sarkar',
    description:
      'An AI-powered smart-checkout ecosystem combining computer vision, edge AI, IoT sensors and sensor fusion to enable app-free and cashier-less retail experiences.',
    industry: 'Retail Tech / Edge AI',
    founded: '2022',
    focusAreas: 'Smart Checkout, Edge AI, Computer Vision, Sensor Fusion',
    website: 'aicjklu.com',
  },
  {
    id: '05',
    name: 'Marketing Chai',
    image: '/companies/images/markutting_chai.png',
    founder: 'Vidit Sharma',
    description:
      'A storytelling-driven creative agency helping brands grow through authentic content, brand strategy, identity development, social-media campaigns and visual storytelling.',
    industry: 'MarTech & Creative Agency',
    founded: '2021',
    focusAreas: 'Brand Strategy, Social Campaigns, Visual Storytelling',
    website: 'aicjklu.com',
  },
  {
    id: '06',
    name: 'Papair',
    image: '/companies/images/PapairWrap.png',
    founder: 'Christopher Feist',
    description:
      'Develops PapairWrap, a recyclable and biodegradable paper-based alternative to plastic bubble wrap for sustainable packaging solutions.',
    industry: 'CleanTech / Packaging',
    founded: '2020',
    focusAreas: 'PapairWrap, Biodegradable Packaging, Sustainable Materials',
    website: 'aicjklu.com',
  },
  {
    id: '07',
    name: 'Aicy Technologies',
    image: '/companies/images/aicy.png',
    founder: 'Anjan Choudhary',
    description:
      'Develops FARMAKART, a unified smart-agriculture services and marketplace platform, together with IoT, analytics, website and application services.',
    industry: 'AgriTech',
    founded: '2021',
    focusAreas: 'FARMAKART, Smart Agriculture, IoT Sensors, AgriTech',
    website: 'aicjklu.com',
  },
  {
    id: '08',
    name: 'Maini Renewables',
    image: '/companies/images/maini_renewables.png',
    founder: 'Swati Maini',
    description:
      'Develops decentralised hydrokinetic turbines that generate electricity from rivers, canals and oceans without dams or heavy infrastructure.',
    industry: 'Renewable Energy',
    founded: '2020',
    focusAreas: 'Hydrokinetic Turbines, Clean Power, Ocean & River Energy',
    website: 'aicjklu.com',
  },
  {
    id: '09',
    name: 'SportsThat',
    image: '/companies/images/sports_that.png',
    founder: 'Sheetal Arora',
    description:
      'A community platform for sports fans, athletes, leagues and clubs that enhances fan experiences and helps brands, teams and clubs identify relevant audiences and improve revenue.',
    industry: 'Sports Tech',
    founded: '2022',
    focusAreas: 'Fan Engagement, Sports Community, Audience Intelligence',
    website: 'aicjklu.com',
  },
  {
    id: '10',
    name: 'Sunbird Systems',
    image: '/companies/images/sunvirsdstaw.png',
    founder: 'Chirag',
    description:
      'Produces patented multilayer biodegradable straws from fallen coconut leaves (Sunbird Straw), replacing single-use plastics while supporting rural livelihoods.',
    industry: 'CleanTech / Sustainability',
    founded: '2020',
    focusAreas: 'Sunbird Straw, Coconut Leaf Materials, Circular Economy',
    website: 'aicjklu.com',
  },
];
