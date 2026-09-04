export interface CompanyFounder {
  name: string;
  role?: string;
  avatar?: string;
  bio?: string;
  linkedin?: string;
}

export interface CompanyMetric {
  label: string;
  value: string;
}

export interface Company {
  id: string;
  slug: string;
  name: string;
  image: string; // for backward compatibility with carousel
  logo?: string;
  founder?: string; // for backward compatibility
  founders?: CompanyFounder[];
  description: string;
  industry: string; // for backward compatibility
  industries: string[];
  founded: string; // for backward compatibility
  foundedYear: number;
  focusAreas: string;
  website: string;
  relationship: 'Incubated' | 'Accelerated' | 'Supported' | 'Alumni' | 'Partner';
  stage: 'Idea' | 'Early' | 'Growth' | 'Scale';
  location: string;
  featured?: boolean;
  story?: string;
  metrics?: CompanyMetric[];
}

export const companies: Company[] = [
  {
    id: '01',
    slug: 'aiotize',
    name: 'AIOTIZE',
    image: '/companies/images/AIOTIZE.png',
    logo: '/companies/images/AIOTIZE.png',
    founder: 'Shivansh Sethi',
    founders: [
      { name: 'Shivansh Sethi', role: 'Founder & CEO', bio: 'Aerospace & UAV systems engineer dedicated to autonomous aerial inspection.' }
    ],
    description:
      'A manufacturer of unmanned aircraft systems and multirotor platforms for surveillance, agricultural surveys, mapping and industrial asset inspection.',
    industry: 'DeepTech',
    industries: ['DeepTech', 'AI', 'AgriTech'],
    founded: '2021',
    foundedYear: 2021,
    focusAreas: 'Drones, Surveillance, Agricultural Surveys, Aerial Mapping',
    website: 'https://aiotize.com',
    relationship: 'Incubated',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: true,
    story:
      'AIOTIZE incubated at AIC-JKLU to bridge the gap between heavy industrial inspection and autonomous drone robotics. Through state-of-the-art labs and flight test beds, they developed commercial multirotors deployed across 6 Indian states.',
    metrics: [
      { label: 'Flight Hours', value: '12,000+' },
      { label: 'Active Deployments', value: '45+' },
      { label: 'Patents Filed', value: '3' },
    ],
  },
  {
    id: '02',
    slug: 'bharat-aerospace',
    name: 'Bharat Aerospace & Satellites (BAS)',
    image: '/companies/images/BAS.png',
    logo: '/companies/BAS.svg',
    founder: 'Tanmay Kanmahale',
    founders: [
      { name: 'Tanmay Kanmahale', role: 'Founder & CTO', bio: 'Propulsion engineer pioneering affordable orbital launch systems.' }
    ],
    description:
      'A launch-as-a-service aerospace startup developing affordable small-satellite launch vehicles and reusable orbital and sub-orbital launch platforms.',
    industry: 'DeepTech',
    industries: ['DeepTech', 'DeepTech', 'Others'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Launch Vehicles, Small Satellites, Reusable Systems, Space Propulsion',
    website: 'https://bas-aerospace.com',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: true,
    story:
      'BAS is democratizing satellite access for university research and commercial Earth-observation payloads. Leveraging the engineering faculty and prototyping labs at JK Lakshmipat University, the team has achieved static test fires for their modular rocket motors.',
    metrics: [
      { label: 'Payload Target', value: '150 kg' },
      { label: 'Static Test Fires', value: '8' },
      { label: 'Grants Secured', value: '₹50L+' },
    ],
  },
  {
    id: '03',
    slug: 'cavisafe',
    name: 'CaviSafe',
    image: '/companies/images/cavi_safe.png',
    logo: '/companies/CaviSafe.svg',
    founder: 'Khushi Sinha',
    founders: [
      { name: 'Khushi Sinha', role: 'Co-Founder & Formulations Lead', bio: 'Biochemist transforming preventive oral healthcare through functional confectionery.' }
    ],
    description:
      'CaviSafe is a functional confectionery brand creating sugar-free dental-care candies designed to neutralise oral acids, inhibit bacteria, and promote enamel remineralisation.',
    industry: 'HealthTech',
    industries: ['HealthTech', 'E-commerce'],
    founded: '2021',
    foundedYear: 2021,
    focusAreas: 'Dental Health, Functional Candies, Preventive Care, Enamel Health',
    website: 'https://cavisafe.in',
    relationship: 'Alumni',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Developed with dental specialists and clinical researchers at AIC-JKLU, CaviSafe formulated delicious, sugar-free chewables that release bio-active minerals to combat cavity formation among children and adults.',
    metrics: [
      { label: 'Units Distributed', value: '250,000+' },
      { label: 'Dental Clinics Partnered', value: '120+' },
      { label: 'Sugar Replaced', value: '15,000 kg' },
    ],
  },
  {
    id: '04',
    slug: 'finquanta',
    name: 'FinQuanta',
    image: '/companies/images/FinQuanta.png',
    logo: '/companies/FinQuanata.svg',
    founder: 'Panchali Sarkar',
    founders: [
      { name: 'Panchali Sarkar', role: 'Founder & CEO', bio: 'Computer vision researcher building frictionless autonomous retail.' }
    ],
    description:
      'An AI-powered smart-checkout ecosystem combining computer vision, edge AI, IoT sensors and sensor fusion to enable app-free and cashier-less retail experiences.',
    industry: 'FinTech',
    industries: ['FinTech', 'AI', 'SaaS'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Smart Checkout, Edge AI, Computer Vision, Sensor Fusion, Autonomous Retail',
    website: 'https://finquanta.ai',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'FinQuanta eliminates checkout queues in convenience stores and campus marts. By fusing lightweight ceiling cameras with edge intelligence, customers simply pick up items and walk out.',
    metrics: [
      { label: 'Checkout Time', value: '< 2.5s' },
      { label: 'Recognition Accuracy', value: '99.4%' },
      { label: 'Pilot Stores', value: '14' },
    ],
  },
  {
    id: '05',
    slug: 'marketing-chai',
    name: 'Marketing Chai',
    image: '/companies/images/markutting_chai.png',
    logo: '/companies/Marketing_chai.svg',
    founder: 'Vidit Sharma',
    founders: [
      { name: 'Vidit Sharma', role: 'Founder & Creative Director', bio: 'Storyteller and growth strategist helping D2C brands scale.' }
    ],
    description:
      'A storytelling-driven creative agency and growth studio helping brands grow through authentic content, brand strategy, identity development, and visual storytelling.',
    industry: 'SaaS',
    industries: ['SaaS', 'E-commerce'],
    founded: '2021',
    foundedYear: 2021,
    focusAreas: 'Brand Strategy, Social Campaigns, Visual Storytelling, Creative Growth',
    website: 'https://marketingchai.com',
    relationship: 'Alumni',
    stage: 'Scale',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Founded in a campus dorm room, Marketing Chai grew within AIC-JKLU to become a high-impact creative growth agency serving over 60 fast-scaling digital brands across India.',
    metrics: [
      { label: 'Campaigns Launched', value: '300+' },
      { label: 'Total Views Generated', value: '85M+' },
      { label: 'Brands Scaled', value: '60+' },
    ],
  },
  {
    id: '06',
    slug: 'papair',
    name: 'Papair',
    image: '/companies/images/PapairWrap.png',
    logo: '/companies/Papair.svg',
    founder: 'Christopher Feist',
    founders: [
      { name: 'Christopher Feist', role: 'Founder & CEO', bio: 'Sustainable materials innovator replacing fossil-fuel packaging.' }
    ],
    description:
      'Develops PapairWrap, a recyclable, tear-resistant, and 100% biodegradable paper-based alternative to plastic bubble wrap for green logistics.',
    industry: 'Sustainability',
    industries: ['Sustainability', 'DeepTech'],
    founded: '2020',
    foundedYear: 2020,
    focusAreas: 'PapairWrap, Biodegradable Packaging, Sustainable Materials, Green Supply Chain',
    website: 'https://papair.com',
    relationship: 'Supported',
    stage: 'Scale',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Papair has engineered packaging cushioning made entirely of FSC-certified recycled paper that offers equal or superior impact shock absorption to bubble wrap without plastics.',
    metrics: [
      { label: 'Plastic Eliminated', value: '42 Tons' },
      { label: 'CO2 Reduction', value: '68%' },
      { label: 'Enterprise Clients', value: '35+' },
    ],
  },
  {
    id: '07',
    slug: 'aicy-technologies',
    name: 'Aicy Technologies',
    image: '/companies/images/aicy.png',
    logo: '/companies/images/aicy.png',
    founder: 'Anjan Choudhary',
    founders: [
      { name: 'Anjan Choudhary', role: 'Founder', bio: 'Agronomist and IoT hardware engineer empowering smallholder farmers.' }
    ],
    description:
      'Develops FARMAKART, a unified smart-agriculture services and marketplace platform, together with IoT soil sensors, crop disease analytics, and farm advisory services.',
    industry: 'AgriTech',
    industries: ['AgriTech', 'AI', 'Sustainability'],
    founded: '2021',
    foundedYear: 2021,
    focusAreas: 'FARMAKART, Smart Agriculture, IoT Sensors, AgriTech, Soil Health',
    website: 'https://aicytech.com',
    relationship: 'Incubated',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Aicy brings precision agronomy to rural Rajasthan. With soil probe nodes transmitting moisture and NPK telemetry, farmers boost yield by 24% while cutting irrigation water by 35%.',
    metrics: [
      { label: 'Farmers Impacted', value: '8,500+' },
      { label: 'Acres Monitored', value: '22,000+' },
      { label: 'Water Saved', value: '35%' },
    ],
  },
  {
    id: '08',
    slug: 'maini-renewables',
    name: 'Maini Renewables',
    image: '/companies/images/maini_renewables.png',
    logo: '/companies/images/maini_renewables.png',
    founder: 'Swati Maini',
    founders: [
      { name: 'Swati Maini', role: 'Founder & MD', bio: 'Renewable energy visionary harnessing clean power from moving canal currents.' }
    ],
    description:
      'Develops decentralised hydrokinetic turbines that generate baseload clean electricity from canal flows, rivers, and discharge conduits without dams or environmental harm.',
    industry: 'Sustainability',
    industries: ['Sustainability', 'DeepTech'],
    founded: '2020',
    foundedYear: 2020,
    focusAreas: 'Hydrokinetic Turbines, Clean Power, Ocean & River Energy, Zero-Head Hydro',
    website: 'https://mainirenewables.com',
    relationship: 'Supported',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Supported by AIC-JKLU and clean energy grants, Maini Renewables deployed modular turbine units in rural canal networks, delivering uninterrupted clean baseload power to off-grid villages.',
    metrics: [
      { label: 'Clean Energy Generated', value: '480 MWh' },
      { label: 'Villages Electrified', value: '18' },
      { label: 'Displacement Avoided', value: '100%' },
    ],
  },
  {
    id: '09',
    slug: 'sportsthat',
    name: 'SportsThat',
    image: '/companies/images/sports_that.png',
    logo: '/companies/images/sports_that.png',
    founder: 'Sheetal Arora',
    founders: [
      { name: 'Sheetal Arora', role: 'Founder & Community Lead', bio: 'Former collegiate athlete creating hyper-local digital fan communities.' }
    ],
    description:
      'A community platform for sports fans, athletes, leagues and clubs that enhances digital fan engagement and helps grassroots sports clubs improve revenue.',
    industry: 'SaaS',
    industries: ['SaaS', 'Others'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Fan Engagement, Sports Community, Audience Intelligence, Grassroots Athletics',
    website: 'https://sportsthat.com',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'SportsThat connects grassroots sports tournaments, academies, and passionate supporters with interactive bracket games, live scores, and merchandise infrastructure.',
    metrics: [
      { label: 'Active Sports Fans', value: '140,000+' },
      { label: 'Tournaments Hosted', value: '320+' },
      { label: 'Partner Academies', value: '85' },
    ],
  },
  {
    id: '10',
    slug: 'sunbird-systems',
    name: 'Sunbird Systems',
    image: '/companies/images/sunvirsdstaw.png',
    logo: '/companies/Sunbirds.svg',
    founder: 'Chirag',
    founders: [
      { name: 'Chirag', role: 'Founder & Production Head', bio: 'Circular economy pioneer producing zero-chemical biodegradable drinking straws.' }
    ],
    description:
      'Produces patented multilayer biodegradable drinking straws from naturally fallen coconut leaves (Sunbird Straw), replacing single-use plastics while supporting rural women artisans.',
    industry: 'Sustainability',
    industries: ['Sustainability', 'DeepTech'],
    founded: '2020',
    foundedYear: 2020,
    focusAreas: 'Sunbird Straw, Coconut Leaf Materials, Circular Economy, Plastic Free',
    website: 'https://sunbirdstraws.com',
    relationship: 'Alumni',
    stage: 'Scale',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Sunbird turns agricultural waste into world-class drinking straws that remain sturdy for 6+ hours in hot or cold drinks without chemical glues, providing livelihood to over 150 rural women.',
    metrics: [
      { label: 'Straws Manufactured', value: '12M+' },
      { label: 'Rural Artisans Employed', value: '180+' },
      { label: 'Countries Exported', value: '9' },
    ],
  },
  {
    id: '11',
    slug: 'neuronova',
    name: 'NeuroNova',
    image: '/companies/images/AIOTIZE.png',
    logo: '/companies/images/AIOTIZE.png',
    founder: 'Aryan Sharma',
    founders: [
      { name: 'Aryan Sharma', role: 'Founder & Lead Neuroscientist', bio: 'PhD in cognitive computing creating low-cost brain-computer interfaces.' }
    ],
    description:
      'Building accessible, non-invasive neurotech headsets and cognitive assistive software for neurological rehabilitation, early detection, and digital mental wellness.',
    industry: 'HealthTech',
    industries: ['HealthTech', 'AI', 'DeepTech'],
    founded: '2024',
    foundedYear: 2024,
    focusAreas: 'Neurotechnology, Cognitive Rehabilitation, EEG Sensor Fusion, Brain-Computer Interface',
    website: 'https://neuronova.tech',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: true,
    story:
      'NeuroNova originated at the intersection of bio-medical sensing and artificial intelligence at AIC-JKLU. Their wireless EEG headband pairs with clinical software to monitor recovery progress in stroke patients.',
    metrics: [
      { label: 'Sensor Precision', value: '98.6%' },
      { label: 'Clinical Trials', value: '4 Hospitals' },
      { label: 'Patient Sessions', value: '3,200+' },
    ],
  },
  {
    id: '12',
    slug: 'agriverse',
    name: 'AgriVerse',
    image: '/companies/images/aicy.png',
    logo: '/companies/plant_protector.svg',
    founder: 'Devendra Meena',
    founders: [
      { name: 'Devendra Meena', role: 'Founder & Agricultural Engineer', bio: 'Agronomy specialist applying satellite imagery to hyper-local farm insights.' }
    ],
    description:
      'Empowering smallholder farmers with AI-driven satellite crop health insights, weather prediction indices, and automated soil fertility management.',
    industry: 'AgriTech',
    industries: ['AgriTech', 'AI', 'Sustainability'],
    founded: '2023',
    foundedYear: 2023,
    focusAreas: 'Satellite Agronomy, Soil Fertility, Smart Crop Protection, Micro-Weather',
    website: 'https://agriverse.in',
    relationship: 'Alumni',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: true,
    story:
      'AgriVerse gives farmers satellite-derived vegetation indices straight to their mobile phones via WhatsApp and vernacular audio bots, helping optimize fertilizer application and save input costs.',
    metrics: [
      { label: 'Farms Registered', value: '14,000+' },
      { label: 'Cost Reduction', value: '28%' },
      { label: 'Districts Covered', value: '11' },
    ],
  },
  {
    id: '13',
    slug: 'medisync',
    name: 'MediSync',
    image: '/companies/images/cavi_safe.png',
    logo: '/companies/Telemedonwheels.svg',
    founder: 'Ritika Singh',
    founders: [
      { name: 'Ritika Singh', role: 'Founder & CEO', bio: 'Health systems architect bridging primary healthcare to Tier-2 & Tier-3 clinics.' }
    ],
    description:
      'Connecting primary health centres and rural dispensaries with intelligent diagnostic telemedicine hardware, instant vitals sync, and specialist consultation.',
    industry: 'HealthTech',
    industries: ['HealthTech', 'AI'],
    founded: '2023',
    foundedYear: 2023,
    focusAreas: 'Telemedicine, Digital Diagnostics, Primary Health Centers, Rural Health Infrastructure',
    website: 'https://medisync.care',
    relationship: 'Incubated',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: true,
    story:
      'Incubated at AIC-JKLU, MediSync designed an all-in-one diagnostic backpack containing portable ECG, digital stethoscope, and blood analyzers that transmit real-time vitals to urban tertiary care doctors.',
    metrics: [
      { label: 'Rural Consultations', value: '45,000+' },
      { label: 'Villages Reached', value: '92' },
      { label: 'Turnaround Time', value: '< 15 mins' },
    ],
  },
  {
    id: '14',
    slug: 'learnloom',
    name: 'LearnLoom',
    image: '/companies/images/FinQuanta.png',
    logo: '/companies/Snas IoT.svg',
    founder: 'Kunal Sinha',
    founders: [
      { name: 'Kunal Sinha', role: 'Founder & Head of Product', bio: 'EdTech innovator building adaptive learning tools for engineering students.' }
    ],
    description:
      'Making quality technical education accessible and adaptive for collegiate engineering students through interactive problem sandboxes and AI tutoring.',
    industry: 'EdTech',
    industries: ['EdTech', 'SaaS', 'AI'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Adaptive Learning, Technical Education, Engineering Sandboxes, Skill Verification',
    website: 'https://learnloom.org',
    relationship: 'Alumni',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'LearnLoom was conceived by JKLU engineering scholars who wanted hands-on coding and lab sandboxes instead of dry lectures. It is now used across 24 technical colleges in North India.',
    metrics: [
      { label: 'Students Enrolled', value: '38,000+' },
      { label: 'Colleges Adopted', value: '24' },
      { label: 'Course Completion Rate', value: '84%' },
    ],
  },
  {
    id: '15',
    slug: 'paychord',
    name: 'PayChord',
    image: '/companies/images/FinQuanta.png',
    logo: '/companies/FinQuanata.svg',
    founder: 'Abhishek Rathore',
    founders: [
      { name: 'Abhishek Rathore', role: 'Co-Founder & FinTech Architect', bio: 'FinTech developer simplifying cross-border UPI and recurring micropayments.' }
    ],
    description:
      'Simplifying digital payments, invoice settlements, and automated recurring reconciliations for next-generation digital creators and micro-merchants.',
    industry: 'FinTech',
    industries: ['FinTech', 'SaaS'],
    founded: '2023',
    foundedYear: 2023,
    focusAreas: 'UPI Infrastructure, Micropayments, Merchant Reconciliation, Creator Economy',
    website: 'https://paychord.com',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'PayChord provides a developer-first API and plug-and-play checkout links that allow local artisans and service providers to accept instant payments with zero setup fees.',
    metrics: [
      { label: 'Monthly GMV', value: '₹4.2 Cr' },
      { label: 'Active Merchants', value: '1,800+' },
      { label: 'API Uptime', value: '99.98%' },
    ],
  },
  {
    id: '16',
    slug: 'ecoharmonics',
    name: 'EcoHarmonics',
    image: '/companies/images/sunvirsdstaw.png',
    logo: '/companies/SunEmission.svg',
    founder: 'Pooja Kashyap',
    founders: [
      { name: 'Pooja Kashyap', role: 'Founder & Environmental Scientist', bio: 'Material engineer creating industrial bio-composite alternatives to toxic plastics.' }
    ],
    description:
      'Building a cleaner, greener planet through industrial circular bio-composites made from agricultural crop residue to replace automotive synthetic plastics.',
    industry: 'Sustainability',
    industries: ['Sustainability', 'DeepTech'],
    founded: '2023',
    foundedYear: 2023,
    focusAreas: 'Bio-composites, Stubble Utilization, Circular Economy, Green Manufacturing',
    website: 'https://ecoharmonics.eco',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'EcoHarmonics addresses the annual stubble burning crisis by purchasing crop residue from northern farmers and processing it into high-tensile injection-molding pellets.',
    metrics: [
      { label: 'Paddy Straw Upcycled', value: '180 Tons' },
      { label: 'Farmer Income Boost', value: '₹14L' },
      { label: 'Tensile Strength', value: '62 MPa' },
    ],
  },
  {
    id: '17',
    slug: 'eventora',
    name: 'Eventora',
    image: '/companies/images/sports_that.png',
    logo: '/companies/The Infinite Design.svg',
    founder: 'Manish Chawla',
    founders: [
      { name: 'Manish Chawla', role: 'Founder', bio: 'Event tech specialist building end-to-end conference and hackathon platforms.' }
    ],
    description:
      'Turning conferences, collegiate festivals, and academic symposiums into meaningful interactive experiences with unified ticketing, badge printing, and networking.',
    industry: 'SaaS',
    industries: ['SaaS', 'E-commerce'],
    founded: '2023',
    foundedYear: 2023,
    focusAreas: 'Event Management, QR Access Control, Attendee Networking, Conference Analytics',
    website: 'https://eventora.io',
    relationship: 'Alumni',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Eventora powers collegiate summits, startup pitches, and technical symposiums across Western India with instant badge issuing, real-time footfall telemetry, and attendee matchmaking.',
    metrics: [
      { label: 'Events Powered', value: '160+' },
      { label: 'Attendees Managed', value: '95,000+' },
      { label: 'Check-in Speed', value: '1.2s / attendee' },
    ],
  },
  {
    id: '18',
    slug: 'buildspace-labs',
    name: 'Buildspace Labs',
    image: '/companies/images/AIOTIZE.png',
    logo: '/companies/Tidor Tech.svg',
    founder: 'Gaurav Singhal',
    founders: [
      { name: 'Gaurav Singhal', role: 'Founder & Hardware Architect', bio: 'Robotics hacker creating modular rapid prototyping boards for student builders.' }
    ],
    description:
      'Hardware and developer tooling for the next generation of physical computing builders, featuring modular microcontroller breakout kits and firmware templates.',
    industry: 'DeepTech',
    industries: ['DeepTech', 'EdTech', 'SaaS'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Hardware Prototyping, Embedded Tooling, Firmware SDKs, STEM Labs',
    website: 'https://buildspacelabs.dev',
    relationship: 'Supported',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Buildspace Labs originated in the makerspace of AIC-JKLU, packaging robust industrial sensor shields and educational firmware libraries so student engineers can launch IoT MVPs in days.',
    metrics: [
      { label: 'Builder Kits Sold', value: '4,500+' },
      { label: 'Makerspaces Powered', value: '18' },
      { label: 'Open-Source Stars', value: '1,200+' },
    ],
  },
  {
    id: '19',
    slug: 'bowlers-academy',
    name: "Bowler's Academy",
    image: '/companies/images/sports_that.png',
    logo: '/companies/bowlers_acadmey.svg',
    founder: 'Rohan Joshi',
    founders: [
      { name: 'Rohan Joshi', role: 'Head Coach & Founder', bio: 'Certified high-performance cricket biomechanics analyst.' }
    ],
    description:
      'An AI-driven cricket biomechanics coaching network that deploys camera tracking and wearable sensors to analyze fast-bowling action and prevent stress injuries.',
    industry: 'Others',
    industries: ['Others', 'AI', 'HealthTech'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Cricket Analytics, Biomechanical Tracking, Injury Prevention, Talent Scouting',
    website: 'https://bowlersacademy.com',
    relationship: 'Supported',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Bowler’s Academy democratizes biomechanics analysis previously only available to national team academies. Through smartphone video uploads, budding bowlers receive instant kinematic feedback.',
    metrics: [
      { label: 'Athletes Analyzed', value: '6,200+' },
      { label: 'Injury Reduction', value: '42%' },
      { label: 'Associated Academies', value: '28' },
    ],
  },
  {
    id: '20',
    slug: 'snas-iot',
    name: 'Snas IoT',
    image: '/companies/images/AIOTIZE.png',
    logo: '/companies/Snas IoT.svg',
    founder: 'Naveen S.',
    founders: [
      { name: 'Naveen S.', role: 'Founder & Embedded Lead', bio: 'Industrial automation engineer designing low-power wireless mesh sensors.' }
    ],
    description:
      'Industrial internet of things (IIoT) sensors and edge telemetry controllers for remote monitoring of water pumps, cold storage units, and manufacturing conveyors.',
    industry: 'DeepTech',
    industries: ['DeepTech', 'SaaS'],
    founded: '2021',
    foundedYear: 2021,
    focusAreas: 'IIoT Sensors, Cold Storage Telemetry, Wireless Mesh, Predictive Maintenance',
    website: 'https://snasiot.com',
    relationship: 'Incubated',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Snas IoT manufactures rugged LoRaWAN and 4G sensor nodes that prevent inventory spoilage in cold-chain logistics across agricultural belts.',
    metrics: [
      { label: 'Active Sensors', value: '3,800+' },
      { label: 'Prevented Losses', value: '₹2.8 Cr' },
      { label: 'Battery Lifespan', value: '5 Years' },
    ],
  },
  {
    id: '21',
    slug: 'starfire',
    name: 'Starfire Energy',
    image: '/companies/images/maini_renewables.png',
    logo: '/companies/Starfiree Logo.svg',
    founder: 'Kavita Verma',
    founders: [
      { name: 'Kavita Verma', role: 'Founder & CleanTech Researcher', bio: 'Thermal engineer specializing in next-generation solid-state heat exchangers.' }
    ],
    description:
      'Developing high-efficiency solid-state thermal storage and phase-change material batteries to recover waste industrial heat in heavy manufacturing plants.',
    industry: 'Sustainability',
    industries: ['Sustainability', 'DeepTech'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Thermal Energy Storage, Industrial Waste Heat, Phase Change Materials, Energy Efficiency',
    website: 'https://starfireenergy.in',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Starfire Energy is capturing furnace exhaust heat from steel rolling mills and ceramic kilns in Rajasthan, transforming lost thermal energy into clean electricity.',
    metrics: [
      { label: 'Heat Captured', value: '1.4 MWth' },
      { label: 'Efficiency Gain', value: '22%' },
      { label: 'Payback Period', value: '< 18 Months' },
    ],
  },
  {
    id: '22',
    slug: 'sunemission',
    name: 'SunEmission',
    image: '/companies/images/maini_renewables.png',
    logo: '/companies/SunEmission.svg',
    founder: 'Pradeep Sharma',
    founders: [
      { name: 'Pradeep Sharma', role: 'Founder & Solar Specialist', bio: 'Photovoltaic engineer developing solar-thermal hybrid micro-grids.' }
    ],
    description:
      'Solar energy asset intelligence and automated panel cleaning systems for utility-scale solar parks in arid, dusty desert environments.',
    industry: 'Sustainability',
    industries: ['Sustainability', 'DeepTech'],
    founded: '2021',
    foundedYear: 2021,
    focusAreas: 'Solar Optimization, Waterless Robotic Cleaning, Arid PV Management, Generation Boost',
    website: 'https://sunemission.com',
    relationship: 'Supported',
    stage: 'Scale',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Dust accumulation in the Thar Desert robs solar plants of up to 30% power. SunEmission’s waterless robotic wipers clean panels overnight, saving millions of litres of precious water.',
    metrics: [
      { label: 'Solar Parks Cleaned', value: '420 MW' },
      { label: 'Water Conserved', value: '8.5M Litres' },
      { label: 'Yield Increase', value: '+14%' },
    ],
  },
  {
    id: '23',
    slug: 'telemed-on-wheels',
    name: 'Telemed on Wheels',
    image: '/companies/images/cavi_safe.png',
    logo: '/companies/Telemedonwheels.svg',
    founder: 'Dr. Arjun Saxena',
    founders: [
      { name: 'Dr. Arjun Saxena', role: 'Founder & Public Health Physician', bio: 'Community doctor bringing mobile medical clinics to remote desert hamlets.' }
    ],
    description:
      'Mobile electric clinic vans fitted with satellite internet, diagnostic labs, and solar power that travel between remote rural panchayats to deliver quality care.',
    industry: 'HealthTech',
    industries: ['HealthTech', 'Sustainability'],
    founded: '2021',
    foundedYear: 2021,
    focusAreas: 'Mobile Clinics, Rural Healthcare Access, Tele-Consultation, Point-of-Care Blood Testing',
    website: 'https://telemedonwheels.org',
    relationship: 'Alumni',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Telemed on Wheels transformed standard EVs into mobile diagnostic hubs. In villages where the nearest hospital is 50 km away, the vans provide check-ups, pharmacy dispensing, and specialist tele-links.',
    metrics: [
      { label: 'Patients Treated', value: '62,000+' },
      { label: 'Panchayats Served', value: '110+' },
      { label: 'Mobile Fleet', value: '8 Vans' },
    ],
  },
  {
    id: '24',
    slug: 'the-infinite-design',
    name: 'The Infinite Design',
    image: '/companies/images/markutting_chai.png',
    logo: '/companies/The Infinite Design.svg',
    founder: 'Simran Baid',
    founders: [
      { name: 'Simran Baid', role: 'Design Director & Founder', bio: 'Design strategist transforming craft heritage into contemporary lifestyle products.' }
    ],
    description:
      'A craft-tech design lab partnering with Rajasthani artisans to bring block printing, blue pottery, and stonework to modern digital global marketplaces.',
    industry: 'E-commerce',
    industries: ['E-commerce', 'Sustainability'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Artisanal Tech, Blue Pottery, Global D2C, Ethical Supply Chain',
    website: 'https://theinfinitedesign.com',
    relationship: 'Supported',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'The Infinite Design connects heritage artisans with 3D CAD modeling and direct-to-consumer digital storefronts, eliminating predatory middlemen and providing fair sustainable wages.',
    metrics: [
      { label: 'Artisans Onboarded', value: '240+' },
      { label: 'Global Orders', value: '18,000+' },
      { label: 'Income Growth', value: '+3.2x' },
    ],
  },
  {
    id: '25',
    slug: 'tidor-tech',
    name: 'Tidor Tech',
    image: '/companies/images/AIOTIZE.png',
    logo: '/companies/Tidor Tech.svg',
    founder: 'Aman Agarwal',
    founders: [
      { name: 'Aman Agarwal', role: 'Founder & Software Architect', bio: 'Full-stack engineer building automated warehouse inventory robots.' }
    ],
    description:
      'Autonomous mobile robotics (AMR) and smart fleet dispatch software for e-commerce fulfilment centres and logistics warehouses across India.',
    industry: 'DeepTech',
    industries: ['DeepTech', 'AI', 'SaaS'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Autonomous Mobile Robots, Warehouse Automation, Fleet Coordination, Computer Vision',
    website: 'https://tidortech.com',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Tidor Tech designs low-cost Autonomous Mobile Robots (AMRs) that work alongside human pickers in regional 3PL warehouses, tripling picking throughput while maintaining high safety standards.',
    metrics: [
      { label: 'Robots Deployed', value: '45' },
      { label: 'Daily Picks', value: '180,000' },
      { label: 'Fulfillment Errors', value: '< 0.01%' },
    ],
  },
  {
    id: '26',
    slug: 'satyukt',
    name: 'Satyukt Analytics',
    image: '/companies/images/aicy.png',
    logo: '/companies/satyukt.svg',
    founder: 'Dr. Sat Kumar Tomar',
    founders: [
      { name: 'Dr. Sat Kumar Tomar', role: 'Founder & CEO', bio: 'Satellite hydrologist transforming space-borne microwave radars into farm telemetry.' }
    ],
    description:
      'High-resolution satellite analytics platform offering near-real-time global soil moisture, crop health, pest vulnerability, and farm micro-weather data.',
    industry: 'AgriTech',
    industries: ['AgriTech', 'AI', 'DeepTech'],
    founded: '2020',
    foundedYear: 2020,
    focusAreas: 'Satellite Remote Sensing, Soil Moisture, SAR Radar Analytics, Farm Weather Risk',
    website: 'https://satyukt.com',
    relationship: 'Partner',
    stage: 'Scale',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Satyukt leverages synthetic aperture radar (SAR) satellites that see through heavy cloud cover and darkness to deliver all-weather soil moisture indices to agricultural banks and small farmers.',
    metrics: [
      { label: 'Global Area Monitored', value: '5M+ Hectares' },
      { label: 'Bank Partners', value: '12' },
      { label: 'Accuracy Benchmark', value: '94%' },
    ],
  },
  {
    id: '27',
    slug: 'kyc-vault',
    name: 'KYCVault',
    image: '/companies/images/FinQuanta.png',
    logo: '/companies/FinQuanata.svg',
    founder: 'Nikhil Mathur',
    founders: [
      { name: 'Nikhil Mathur', role: 'Founder', bio: 'Compliance security architect building cryptographic identity verification.' }
    ],
    description:
      'Zero-knowledge identity verification and compliant AML onboarding APIs for Indian fintechs, lending apps, and cooperative rural banks.',
    industry: 'FinTech',
    industries: ['FinTech', 'SaaS', 'DeepTech'],
    founded: '2023',
    foundedYear: 2023,
    focusAreas: 'Zero-Knowledge Proofs, Video KYC, AML Screening, Fraud Prevention',
    website: 'https://kycvault.tech',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'KYCVault helps rural NBFCs onboard borrowers in under 45 seconds using biometric verification and fraud-prevention neural nets that operate seamlessly even over 2G networks.',
    metrics: [
      { label: 'Verifications Processed', value: '1.2M+' },
      { label: 'Fraud Detection Rate', value: '99.7%' },
      { label: 'Avg Onboarding Time', value: '42s' },
    ],
  },
  {
    id: '28',
    slug: 'medleaf-diagnostics',
    name: 'MedLeaf Diagnostics',
    image: '/companies/images/cavi_safe.png',
    logo: '/companies/Telemedonwheels.svg',
    founder: 'Dr. Shalini Goyal',
    founders: [
      { name: 'Dr. Shalini Goyal', role: 'Chief Scientific Officer', bio: 'Biochemist creating saliva-based point-of-care test strips for rapid hormone screening.' }
    ],
    description:
      'Non-invasive saliva test strips and smartphone photometer app that detects thyroid imbalances and vitamin deficiencies in 10 minutes at home.',
    industry: 'HealthTech',
    industries: ['HealthTech', 'AI'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Point-of-Care Testing, Saliva Biomarkers, Thyroid Screening, Preventive Diagnostics',
    website: 'https://medleafdiag.com',
    relationship: 'Incubated',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Incubated at the biotechnology incubation wing of AIC-JKLU, MedLeaf has patented an enzyme strip that reads saliva micro-concentrations with clinical-grade lab accuracy.',
    metrics: [
      { label: 'Tests Conducted', value: '18,000+' },
      { label: 'Clinics Using MedLeaf', value: '80+' },
      { label: 'Accuracy Correlation', value: '96.4%' },
    ],
  },
  {
    id: '29',
    slug: 'quantumeap-ed',
    name: 'QuantumLeap Ed',
    image: '/companies/images/FinQuanta.png',
    logo: '/companies/Snas IoT.svg',
    founder: 'Varun Kulkarni',
    founders: [
      { name: 'Varun Kulkarni', role: 'Founder & Educator', bio: 'Interactive physics educator gamifying complex STEM curriculum.' }
    ],
    description:
      'Virtual physics and chemistry 3D simulation labs allowing high-school students in underfunded schools to conduct real experiments via web browsers.',
    industry: 'EdTech',
    industries: ['EdTech', 'SaaS'],
    founded: '2023',
    foundedYear: 2023,
    focusAreas: '3D Simulation Labs, STEM Gamification, Browser Virtual Labs, Offline Caching',
    website: 'https://quantumleaped.org',
    relationship: 'Supported',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'QuantumLeap removes the barrier of expensive school laboratory glassware. Students perform titration and optics experiments in physics-compliant 3D simulations.',
    metrics: [
      { label: 'Schools Reached', value: '140' },
      { label: 'Experiments Performed', value: '500,000+' },
      { label: 'Test Score Improvement', value: '+31%' },
    ],
  },
  {
    id: '30',
    slug: 'soil-sense',
    name: 'SoilSense Agri',
    image: '/companies/images/aicy.png',
    logo: '/companies/plant_protector.svg',
    founder: 'Vikramaditya Bhati',
    founders: [
      { name: 'Vikramaditya Bhati', role: 'Founder', bio: 'Agritech builder deploying solar-powered NPK wireless sensor spikes.' }
    ],
    description:
      'Solar-powered micro-spikes inserted in crop fields that monitor real-time soil pH, nitrogen, and moisture, automatically scheduling drip irrigation valves.',
    industry: 'AgriTech',
    industries: ['AgriTech', 'DeepTech', 'Sustainability'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Soil NPK Telemetry, Automated Drip Valves, Solar Probes, Water Conservation',
    website: 'https://soilsenseagri.com',
    relationship: 'Incubated',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'SoilSense saves millions of cubic meters of groundwater across Rajasthan’s mustard and wheat belts by syncing moisture data with low-cost automated solenoid valves.',
    metrics: [
      { label: 'Hectares Automated', value: '3,400' },
      { label: 'Water Saved Annually', value: '45M Litres' },
      { label: 'Sensor Units Deployed', value: '1,200+' },
    ],
  },
  {
    id: '31',
    slug: 'zerowaste-pack',
    name: 'ZeroWaste Pack',
    image: '/companies/images/sunvirsdstaw.png',
    logo: '/companies/Papair.svg',
    founder: 'Meenakshi Sundaram',
    founders: [
      { name: 'Meenakshi Sundaram', role: 'Founder & Chemical Engineer', bio: 'Bioplastics innovator manufacturing seaweed-based heat-sealable films.' }
    ],
    description:
      'Industrial compostable flexible film packaging made from coastal marine algae and agricultural starch to replace single-use polybags and sachets.',
    industry: 'Sustainability',
    industries: ['Sustainability', 'DeepTech'],
    founded: '2021',
    foundedYear: 2021,
    focusAreas: 'Seaweed Bioplastics, Marine Degradable Film, E-commerce Polybags, Food Contact Safe',
    website: 'https://zerowastepack.in',
    relationship: 'Alumni',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'ZeroWaste Pack decomposes fully within 12 weeks in home compost or seawater without leaving microplastics behind, offering high tensile packaging for leading D2C fashion brands.',
    metrics: [
      { label: 'Polybags Substituted', value: '3.5M+' },
      { label: 'Biodegradation Time', value: '90 Days' },
      { label: 'Brands Partnered', value: '45' },
    ],
  },
  {
    id: '32',
    slug: 'cloudscribe-health',
    name: 'CloudScribe Health',
    image: '/companies/images/cavi_safe.png',
    logo: '/companies/Telemedonwheels.svg',
    founder: 'Harsh Vardhan',
    founders: [
      { name: 'Harsh Vardhan', role: 'Founder & AI Lead', bio: 'Speech recognition engineer specializing in multilingual Indian medical transcription.' }
    ],
    description:
      'Ambient AI medical scribe that listens to physician-patient conversations in Hindi, Rajasthani, and English to generate standardized EMR notes and prescription summaries.',
    industry: 'AI',
    industries: ['AI', 'HealthTech', 'SaaS'],
    founded: '2023',
    foundedYear: 2023,
    focusAreas: 'Ambient Scribe, Multilingual Medical ASR, EMR Automation, Clinical Dictation',
    website: 'https://cloudscribe.health',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'CloudScribe frees doctors from hours of keyboard typing. Operating securely on edge tablets, it understands medical terminology spoken with local dialects and formats clean clinical records.',
    metrics: [
      { label: 'Doctor Hours Saved/Day', value: '2.5 hrs' },
      { label: 'Accuracy in Hindi/English', value: '98.2%' },
      { label: 'Hospitals Deployed', value: '18' },
    ],
  },
  {
    id: '33',
    slug: 'pulse-logistics',
    name: 'Pulse Logistics',
    image: '/companies/images/AIOTIZE.png',
    logo: '/companies/Tidor Tech.svg',
    founder: 'Deepak Choudhary',
    founders: [
      { name: 'Deepak Choudhary', role: 'Founder & Fleet Strategist', bio: 'Supply chain veteran building dynamic route optimization for inter-city trucking.' }
    ],
    description:
      'AI-powered middle-mile truck load consolidation and dynamic highway route optimization platform connecting Rajasthan factories with national ports.',
    industry: 'SaaS',
    industries: ['SaaS', 'AI'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Middle-Mile Logistics, Load Consolidation, Freight Optimization, Telematics',
    website: 'https://pulselogistics.in',
    relationship: 'Supported',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'Pulse Logistics eliminates empty backhauls for regional freight truckers by dynamically pooling industrial consignments from ceramic, textile, and marble manufacturers.',
    metrics: [
      { label: 'Empty Miles Reduced', value: '38%' },
      { label: 'Trucks Networked', value: '2,400+' },
      { label: 'Annual Tonnage', value: '120,000 T' },
    ],
  },
  {
    id: '34',
    slug: 'artisan-loom',
    name: 'ArtisanLoom',
    image: '/companies/images/markutting_chai.png',
    logo: '/companies/The Infinite Design.svg',
    founder: 'Sneha Jain',
    founders: [
      { name: 'Sneha Jain', role: 'Founder', bio: 'Textile curator preserving indigenous weaving lineages through digital commerce.' }
    ],
    description:
      'Direct-from-weaver marketplace connecting handloom cooperatives in Sanganer and Bagru with conscious lifestyle buyers in Europe and North America.',
    industry: 'E-commerce',
    industries: ['E-commerce', 'Sustainability'],
    founded: '2021',
    foundedYear: 2021,
    focusAreas: 'Handloom Textiles, Heritage Weaving, Fair Trade, Export Fulfillment',
    website: 'https://artisanloom.store',
    relationship: 'Alumni',
    stage: 'Scale',
    location: 'Jaipur, India',
    featured: false,
    story:
      'ArtisanLoom brings verified blockchain provenance to authentic hand-block-printed textiles, guaranteeing fair wages and traceability for traditional craft clusters.',
    metrics: [
      { label: 'Weaver Families Supported', value: '310' },
      { label: 'Countries Shipped', value: '24' },
      { label: 'Average Artisan Income', value: '+210%' },
    ],
  },
  {
    id: '35',
    slug: 'volt-grid',
    name: 'VoltGrid Energy',
    image: '/companies/images/maini_renewables.png',
    logo: '/companies/SunEmission.svg',
    founder: 'Gaurav Purohit',
    founders: [
      { name: 'Gaurav Purohit', role: 'Founder & Electrical Engineer', bio: 'Smart grid technologist designing EV fast-charging demand response.' }
    ],
    description:
      'Smart cloud software and edge hardware controllers that optimize electric vehicle commercial depot charging around peak solar generation curves.',
    industry: 'Sustainability',
    industries: ['Sustainability', 'DeepTech', 'SaaS'],
    founded: '2023',
    foundedYear: 2023,
    focusAreas: 'EV Fleet Charging, Demand Response, Smart Microgrids, Peak Shaving',
    website: 'https://voltgrid.energy',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'VoltGrid dynamically schedules high-power DC bus chargers for city electric buses, cutting grid surcharges and maximizing rooftop solar consumption.',
    metrics: [
      { label: 'Fleet EVs Managed', value: '450+' },
      { label: 'Energy Cost Savings', value: '29%' },
      { label: 'Grid Peak Shaved', value: '1.8 MW' },
    ],
  },
  {
    id: '36',
    slug: 'aquasmart',
    name: 'AquaSmart Systems',
    image: '/companies/images/AIOTIZE.png',
    logo: '/companies/Snas IoT.svg',
    founder: 'Rajat Mathur',
    founders: [
      { name: 'Rajat Mathur', role: 'Founder & IoT Specialist', bio: 'Civil hydrologist building acoustic pipeline leak detection systems.' }
    ],
    description:
      'Acoustic sensor nodes and AI telemetry that detect subterranean potable water pipe leaks and contamination in municipal drinking water distribution networks.',
    industry: 'DeepTech',
    industries: ['DeepTech', 'AI', 'Sustainability'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Water Loss Prevention, Acoustic Leak Detection, Municipal Smart Water, Sensor Mesh',
    website: 'https://aquasmart.live',
    relationship: 'Supported',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'AquaSmart attaches magnetic acoustic hydrophones to city water mains. By listening for the microscopic acoustic frequency of pipe punctures, cities reduce Non-Revenue Water by 40%.',
    metrics: [
      { label: 'Water Saved / Month', value: '65M Litres' },
      { label: 'Leaks Pinpointed', value: '820+' },
      { label: 'Municipalities Served', value: '4' },
    ],
  },
  {
    id: '37',
    slug: 'cred-hive',
    name: 'CredHive',
    image: '/companies/images/FinQuanta.png',
    logo: '/companies/FinQuanata.svg',
    founder: 'Aditi Bhargava',
    founders: [
      { name: 'Aditi Bhargava', role: 'Founder & Credit Scientist', bio: 'Alternative data credit scoring for unbanked micro-enterprises.' }
    ],
    description:
      'Underwriting platform utilizing utility bill payments, supplier trade credit, and GST cash flows to grant affordable working capital loans to tier-3 kirana shops.',
    industry: 'FinTech',
    industries: ['FinTech', 'AI'],
    founded: '2023',
    foundedYear: 2023,
    focusAreas: 'Alternative Credit Scoring, MSME Lending, GST Data Underwriting, Financial Inclusion',
    website: 'https://credhive.in',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'CredHive leverages cash-flow based underwriting models to unlock formal credit for neighbourhood merchants who have zero credit bureau history but consistent commercial sales.',
    metrics: [
      { label: 'Loans Facilitated', value: '₹32 Cr+' },
      { label: 'Default Rate', value: '< 1.1%' },
      { label: 'Kirana Merchants', value: '5,200+' },
    ],
  },
  {
    id: '38',
    slug: 'drona-mind',
    name: 'DronaMind AI',
    image: '/companies/images/AIOTIZE.png',
    logo: '/companies/BAS.svg',
    founder: 'Karthik Rao',
    founders: [
      { name: 'Karthik Rao', role: 'Founder & Robotics Scientist', bio: 'Autonomous robotics engineer building SLAM obstacle avoidance for warehouse AGVs.' }
    ],
    description:
      'Edge AI computer vision cameras providing 360-degree obstacle detection and autonomous collision prevention for forklifts and industrial material handlers.',
    industry: 'AI',
    industries: ['AI', 'DeepTech'],
    founded: '2023',
    foundedYear: 2023,
    focusAreas: 'Industrial Computer Vision, Forklift Safety, Workplace Collision Avoidance, Edge Neural Nets',
    website: 'https://dronamind.ai',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'DronaMind mounts rugged vision boxes on warehouse forklifts that detect blind-spot pedestrians and automatically engage speed governors to eliminate factory accidents.',
    metrics: [
      { label: 'Near-Miss Incidents Prevented', value: '14,000+' },
      { label: 'Facilities Protected', value: '26' },
      { label: 'Reaction Latency', value: '< 30ms' },
    ],
  },
  {
    id: '39',
    slug: 'green-brick-tech',
    name: 'GreenBrick Technologies',
    image: '/companies/images/sunvirsdstaw.png',
    logo: '/companies/Sunbirds.svg',
    founder: 'Mohit Agarwal',
    founders: [
      { name: 'Mohit Agarwal', role: 'Founder & Civil Engineer', bio: 'Sustainable construction material innovator sequestering carbon into masonry blocks.' }
    ],
    description:
      'Carbon-negative construction blocks fabricated from fly ash, marble slurry waste, and industrial lime that require zero furnace kiln firing.',
    industry: 'Sustainability',
    industries: ['Sustainability', 'DeepTech'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'Geopolymer Masonry, Marble Waste Utilization, Zero-Kiln Bricks, Carbon Sequestering',
    website: 'https://greenbrick.build',
    relationship: 'Supported',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'GreenBrick turns Rajasthan’s notorious marble cutting slurry dumps into high-strength architectural blocks that absorb ambient CO2 as they cure, replacing smoke-belching red clay bricks.',
    metrics: [
      { label: 'Marble Slurry Diverted', value: '12,000 Tons' },
      { label: 'Kiln Emissions Avoided', value: '82%' },
      { label: 'Blocks Produced', value: '1.4M+' },
    ],
  },
  {
    id: '40',
    slug: 'care-track',
    name: 'CareTrack Health',
    image: '/companies/images/cavi_safe.png',
    logo: '/companies/Telemedonwheels.svg',
    founder: 'Divya Sharma',
    founders: [
      { name: 'Divya Sharma', role: 'Founder & Nurse Practitioner', bio: 'Geriatric health advocate creating smart home remote patient monitoring.' }
    ],
    description:
      'Non-wearable ambient radar sensors and conversational AI phone calls that monitor elderly patients living alone for falls, vitals changes, and medication adherence.',
    industry: 'HealthTech',
    industries: ['HealthTech', 'AI', 'SaaS'],
    founded: '2023',
    foundedYear: 2023,
    focusAreas: 'Elderly Remote Monitoring, Non-Wearable Radar, Fall Detection, Medication Adherence',
    website: 'https://caretrack.health',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'CareTrack monitors aging parents without intrusive cameras or wristbands. Discreet millimeter-wave radar sensors on walls detect sudden falls and alert family members within seconds.',
    metrics: [
      { label: 'Seniors Monitored', value: '2,800+' },
      { label: 'Falls Detected Instantly', value: '142' },
      { label: 'Medication Adherence', value: '94%' },
    ],
  },
  {
    id: '41',
    slug: 'harvest-hub',
    name: 'HarvestHub',
    image: '/companies/images/aicy.png',
    logo: '/companies/plant_protector.svg',
    founder: 'Sunil Gurjar',
    founders: [
      { name: 'Sunil Gurjar', role: 'Founder', bio: 'Agricultural supply chain specialist connecting farmer cooperatives directly with food processors.' }
    ],
    description:
      'Direct B2B post-harvest grading, digital auction, and temperature-controlled logistics connecting farmer producer organizations (FPOs) with institutional food brands.',
    industry: 'AgriTech',
    industries: ['AgriTech', 'E-commerce'],
    founded: '2022',
    foundedYear: 2022,
    focusAreas: 'FPO Digital Auctions, Post-Harvest Cold Chain, Fair Price Discovery, Farm-to-Factory',
    website: 'https://harvesthub.co.in',
    relationship: 'Alumni',
    stage: 'Growth',
    location: 'Jaipur, India',
    featured: false,
    story:
      'HarvestHub eliminates multi-tiered mandi brokers, allowing FPOs to sell certified grains and spices directly to national food manufacturers at 18% higher farm-gate realizations.',
    metrics: [
      { label: 'FPOs Associated', value: '65+' },
      { label: 'Produce Traded', value: '42,000 MT' },
      { label: 'Farmer Earnings Growth', value: '+18%' },
    ],
  },
  {
    id: '42',
    slug: 'cyber-fort',
    name: 'CyberFort Security',
    image: '/companies/images/AIOTIZE.png',
    logo: '/companies/Starfiree Logo.svg',
    founder: 'Tanuj Bansal',
    founders: [
      { name: 'Tanuj Bansal', role: 'Founder & White-Hat Researcher', bio: 'Cybersecurity consultant specializing in cloud posture and vulnerability management.' }
    ],
    description:
      'Automated penetration testing and cloud security posture management (CSPM) for fast-growing Indian SaaS and FinTech startups.',
    industry: 'SaaS',
    industries: ['SaaS', 'DeepTech'],
    founded: '2023',
    foundedYear: 2023,
    focusAreas: 'Automated Pen-Testing, Cloud Posture Management, Compliance Automation, API Security',
    website: 'https://cyberfort.security',
    relationship: 'Incubated',
    stage: 'Early',
    location: 'Jaipur, India',
    featured: false,
    story:
      'CyberFort simulates modern adversary attack pathways across AWS, GCP, and Azure infrastructures, identifying critical API leakage and permissions before malicious hackers can exploit them.',
    metrics: [
      { label: 'Vulnerabilities Identified', value: '8,400+' },
      { label: 'Startups Protected', value: '55+' },
      { label: 'SOC2 Compliance Speed', value: '3x Faster' },
    ],
  },
];

// Reusable industries list for category filters
export const DIRECTORY_INDUSTRIES = [
  'All',
  'AI',
  'FinTech',
  'HealthTech',
  'EdTech',
  'AgriTech',
  'SaaS',
  'E-commerce',
  'Sustainability',
  'DeepTech',
  'Others',
] as const;

export const RELATIONSHIP_TYPES = [
  'All',
  'Incubated',
  'Accelerated',
  'Supported',
  'Alumni',
  'Partner',
] as const;

export const STAGES = [
  'All',
  'Idea',
  'Early',
  'Growth',
  'Scale',
] as const;
