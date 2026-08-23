export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '01',
    name: 'Niddhi Kachhawa',
    role: 'Chief Executive Officer',
    image: '/team/final_ceo.png',
  },
  {
    id: '02',
    name: 'Divyanshu joshi',
    role: 'Executive at AIC JKLU',
    image: '/team/final_diyanshu_sir.png',
  },
  {
    id: '03',
    name: 'Shivam Vijay',
    role: 'Associate Manager',
    image: '/team/final_shivam_sir.png',
  },
];
