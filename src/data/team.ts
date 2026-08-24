export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '01',
    name: 'Nidhi Kachhawa',
    role: 'Chief Executive Officer',
    image: '/team/final_ceo.png',
    linkedin: 'https://www.linkedin.com/in/nidhi-kachhawa-97492b191/',
  },
  {
    id: '02',
    name: 'Shivam Vijay',
    role: 'Associate Manager',
    image: '/team/final_shivam_sir.png',
    linkedin: 'https://www.linkedin.com/in/shivam-vijay-8048a01ab/',
  },
  {
    id: '03',
    name: 'Divyanshu joshi',
    role: 'Executive at AIC JKLU',
    image: '/team/final_diyanshu_sir.png',
    linkedin: 'https://www.linkedin.com/in/divyanshu-joshi-5a5084274/',
  },
];
