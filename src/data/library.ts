export interface MediaItem {
  id: string;
  title: string;
  date?: string;
  image?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  isSubmitCard?: boolean;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface InMotionItem {
  id: string;
  number: string;
  title: string;
  image?: string;
}

export const MEDIA_GRID_ITEMS: MediaItem[] = [
  {
    id: 'aarohan-panel-conclave',
    title: 'Aarohan Panel & Leadership Conclave',
    date: '25 - 27 SEP 2026',
    image: '/library/aaraohan_panel.png',
  },
  {
    id: 'startup-meet',
    title: 'Startup Meet & Ecosystem Gathering',
    date: '12 SEP 2026',
    image: '/library/admin_visit.png',
  },
  {
    id: 'team-brainstorm',
    title: 'Team Strategy & Brainstorming',
    date: '09 SEP 2026',
    image: '/library/meetings.png',
  },
  {
    id: 'aic-office-glimpse',
    title: 'Learning Resource Center & Library',
    date: '19 AUG 2026',
    image: '/library/lrc.png',
    aspectRatio: 'portrait',
  },
  {
    id: 'cohort-demo-day',
    title: 'iStart Incubation & Investor Demo Day',
    date: '15 AUG 2026',
    image: '/library/istart.png',
  },
  {
    id: 'mentor-connect',
    title: 'Executive Board & Mentors Meeting',
    date: '28 AUG 2026',
    image: '/library/boardmeet.png',
  },
  {
    id: 'workshop-design-thinking',
    title: 'Workshop & Classroom Lab Session',
    date: '10 AUG 2026',
    image: '/library/class.png',
  },
  {
    id: 'building-together-community',
    title: 'Collaborative Roundtable & Delegation',
    date: '02 AUG 2026',
    image: '/library/meeting.png',
  },
  {
    id: 'ideas-in-progress',
    title: 'Global Innovators & Keynote Dialogue',
    date: '01 AUG 2026',
    image: '/library/paulina.png',
  },
  {
    id: 'mou-signing-ceremony',
    title: 'Leadership Meet & Strategic Alliance',
    date: '22 JUL 2026',
    image: '/library/president_meet_1.png',
  },
  {
    id: 'prototyping-lab-session',
    title: 'Campus Delegation & AIC Tour',
    date: '15 JUL 2026',
    image: '/library/aic_visit.png',
    aspectRatio: 'portrait',
  },
  {
    id: 'women-in-tech-mixer',
    title: 'Presidential Advisory Discussion',
    date: '08 JUL 2026',
    image: '/library/presindet_meet.png',
  },
  {
    id: 'alumni-spotlight',
    title: 'Honorable President Address & Milestone',
    date: '25 JUN 2026',
    image: '/library/president.png',
  },
  {
    id: 'hackathon-night',
    title: 'Conclave Panel Discussion',
    date: '18 JUN 2026',
    image: '/library/aaraohan_panel.png',
  },
  {
    id: 'open-mic-founders',
    title: 'Cohort Synergy & Discussion Session',
    date: '05 JUN 2026',
    image: '/library/meetings.png',
  },
  {
    id: 'submit-moment-card',
    title: 'Have a moment to share?',
    isSubmitCard: true,
    description: 'Share your pictures with us and be a part of the archive.',
    ctaText: 'SUBMIT HERE',
    ctaLink: '/apply',
  },
];

export const IN_MOTION_ITEMS: InMotionItem[] = [
  {
    id: 'in-motion-1',
    number: '01',
    title: 'Workshop Sessions',
    image: '/library/class.png',
  },
  {
    id: 'in-motion-2',
    number: '02',
    title: 'Campus Delegation & Tours',
    image: '/library/aic_visit.png',
  },
  {
    id: 'in-motion-3',
    number: '03',
    title: 'iStart Incubation Highlights',
    image: '/library/istart.png',
  },
  {
    id: 'in-motion-4',
    number: '04',
    title: 'Executive Boardroom Dialogue',
    image: '/library/boardmeet.png',
  },
  {
    id: 'in-motion-5',
    number: '05',
    title: 'Learning Resource Center',
    image: '/library/lrc.png',
  },
];
