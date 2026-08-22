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
    name: 'BAS',
    image: '/companies/images/BAS.png',
    description:
      'BAS is an innovative startup incubated at AIC-JKLU, building solutions that address real-world challenges through technology and entrepreneurship.',
    industry: 'Technology',
    founded: '2022',
    focusAreas: 'Technology, Innovation, Entrepreneurship',
    website: 'aicjklu.com',
  },
  {
    id: '02',
    name: 'CaviSafe',
    image: '/companies/images/CaviSafe.png',
    description:
      'CaviSafe is a healthcare technology company focused on early detection and prevention solutions, leveraging AI to improve patient outcomes.',
    industry: 'HealthTech',
    founded: '2021',
    focusAreas: 'Healthcare, AI Diagnostics, Prevention',
    website: 'aicjklu.com',
  },
  {
    id: '03',
    name: 'FinQuanata',
    image: '/companies/images/FinQuanata.png',
    description:
      'FinQuanata delivers quantitative financial analytics and intelligent tools to help businesses and investors make smarter, data-driven decisions.',
    industry: 'FinTech',
    founded: '2022',
    focusAreas: 'Quantitative Finance, Analytics, Investment Intelligence',
    website: 'aicjklu.com',
  },
  {
    id: '04',
    name: 'Marketing Chai',
    image: '/companies/images/Marketing_chai.png',
    description:
      'Marketing Chai is a full-stack digital marketing platform helping startups and SMEs grow their brand presence, reach and revenue online.',
    industry: 'MarTech',
    founded: '2021',
    focusAreas: 'Digital Marketing, Brand Growth, SME Solutions',
    website: 'aicjklu.com',
  },
  {
    id: '05',
    name: 'Papair',
    image: '/companies/images/Papair.png',
    description:
      'Papair is building the next generation of air quality monitoring and management solutions for urban environments and industrial applications.',
    industry: 'CleanTech',
    founded: '2022',
    focusAreas: 'Air Quality, IoT Sensors, Environmental Tech',
    website: 'aicjklu.com',
  },
  {
    id: '06',
    name: 'Snas IoT',
    image: '/companies/images/Snas IoT.jpg',
    description:
      'Snas IoT develops smart connected device solutions and IoT infrastructure for agriculture, manufacturing and smart city applications.',
    industry: 'IoT',
    founded: '2020',
    focusAreas: 'Internet of Things, Smart Devices, Agriculture Tech',
    website: 'aicjklu.com',
  },
  {
    id: '07',
    name: 'Spadent',
    image: '/companies/images/Spadent.jpg',
    description:
      'Spadent is a dental health technology company providing accessible, affordable digital dental care solutions to patients and clinics across India.',
    industry: 'HealthTech',
    founded: '2021',
    focusAreas: 'Dental Health, Digital Care, Accessibility',
    website: 'aicjklu.com',
  },
  {
    id: '08',
    name: 'SportsThat',
    image: '/companies/images/SportsThat.jpg',
    description:
      'SportsThat is a sports engagement platform connecting athletes, coaches and fans through technology, data and immersive experiences.',
    industry: 'Sports Tech',
    founded: '2022',
    focusAreas: 'Sports Engagement, Athlete Management, Fan Experience',
    website: 'aicjklu.com',
  },
  {
    id: '09',
    name: 'Starfire',
    image: '/companies/images/Starfiree Logo.png',
    description:
      'Starfire is a deep-tech startup developing high-performance energy and propulsion systems for aerospace and advanced manufacturing industries.',
    industry: 'Deep Tech',
    founded: '2021',
    focusAreas: 'Aerospace, Energy Systems, Advanced Manufacturing',
    website: 'aicjklu.com',
  },
  {
    id: '10',
    name: 'SunEmission',
    image: '/companies/images/SunEmission.png',
    description:
      'SunEmission creates solar-powered emission reduction technologies, helping industries transition to cleaner and more sustainable energy operations.',
    industry: 'CleanTech',
    founded: '2020',
    focusAreas: 'Solar Energy, Emission Reduction, Sustainability',
    website: 'aicjklu.com',
  },
  {
    id: '11',
    name: 'Sunbirds',
    image: '/companies/images/Sunbirds.png',
    description:
      'Sunbirds is a drone technology company building autonomous aerial solutions for precision agriculture, surveillance and logistics.',
    industry: 'Drone Tech',
    founded: '2021',
    focusAreas: 'Drones, Precision Agriculture, Autonomous Systems',
    website: 'aicjklu.com',
  },
  {
    id: '12',
    name: 'Telemed on Wheels',
    image: '/companies/images/Telemedonwheels.png',
    description:
      'Telemed on Wheels brings telemedicine to rural and semi-urban India through mobile health clinics and remote diagnostic technology.',
    industry: 'HealthTech',
    founded: '2020',
    focusAreas: 'Telemedicine, Rural Health, Mobile Diagnostics',
    website: 'aicjklu.com',
  },
  {
    id: '13',
    name: 'The Infinite Design',
    image: '/companies/images/The Infinite Design.png',
    description:
      'The Infinite Design is a creative technology studio producing immersive digital experiences, UI/UX design and interactive brand storytelling.',
    industry: 'Creative Tech',
    founded: '2022',
    focusAreas: 'Design, UX, Immersive Experiences, Branding',
    website: 'aicjklu.com',
  },
  {
    id: '14',
    name: 'Tidor Tech',
    image: '/companies/images/Tidor Tech.jpg',
    description:
      'Tidor Tech develops intelligent automation and robotics solutions for industrial and warehouse environments, improving efficiency and safety.',
    industry: 'Robotics',
    founded: '2021',
    focusAreas: 'Robotics, Automation, Industrial Tech',
    website: 'aicjklu.com',
  },
  {
    id: '15',
    name: 'Vorac Innovations',
    image: '/companies/images/Vorac Innovations.jpg',
    description:
      'Vorac Innovations is an R&D-driven startup developing breakthrough material science and advanced engineering solutions for industrial use cases.',
    industry: 'Deep Tech',
    founded: '2022',
    focusAreas: 'Material Science, R&D, Advanced Engineering',
    website: 'aicjklu.com',
  },
  {
    id: '16',
    name: "Bowler's Academy",
    image: '/companies/images/bowlers_acadmey.png',
    description:
      "Bowler's Academy is a sports performance platform dedicated to training and developing cricket bowlers through data-driven coaching methodologies.",
    industry: 'Sports Tech',
    founded: '2022',
    focusAreas: 'Cricket, Sports Performance, Coaching Tech',
    website: 'aicjklu.com',
  },
  {
    id: '17',
    name: 'Plant Protector',
    image: '/companies/images/plant_protector.png',
    description:
      'Plant Protector develops AI-powered crop disease detection and precision pest management solutions for Indian farmers and agribusinesses.',
    industry: 'AgriTech',
    founded: '2021',
    focusAreas: 'Crop Protection, AI, Precision Agriculture',
    website: 'aicjklu.com',
  },
  {
    id: '18',
    name: 'Satyukt',
    image: '/companies/images/satyukt.png',
    description:
      'Satyukt provides satellite-based agricultural analytics, offering actionable insights on soil health, crop monitoring and weather patterns to farmers.',
    industry: 'AgriTech / Space Tech',
    founded: '2019',
    focusAreas: 'Satellite Analytics, Soil Health, Crop Intelligence',
    website: 'satyukt.com',
  },
];
