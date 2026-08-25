export interface Stakeholder {
  id: string;
  name: string;
  slug: string;
  role: string;
  image: string;
  linkedin?: string;
}

/**
 * Automatically creates predictable lowercase hyphenated slugs from names.
 * Example: "Aakarshan (AK) Sethi" -> "aakarshan-ak-sethi"
 * Example: "Prof. Dr. Saurabh Trivedi" -> "prof-dr-saurabh-trivedi"
 */
export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[().]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/**
 * Raw list of all 25 stakeholders.
 * Role is strictly set to "Mentor" as requested.
 */
interface RawStakeholder {
  name: string;
  role: string;
  linkedin?: string;
}

const RAW_STAKEHOLDERS: RawStakeholder[] = [
  {
    name: 'Aakarshan (AK) Sethi',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/aakarshan-sethi/',
  },
  {
    name: 'Aashish Beergi',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/aashish-beergi/',
  },
  {
    name: 'Amit Singal',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/amit-singal/',
  },
  {
    name: 'Anupam Deb',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/anupam-deb/',
  },
  {
    name: 'Apoorv Bamba',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/apoorv-bamba/',
  },
  {
    name: 'Apoorv Sharma',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/apoorv-sharma/',
  },
  {
    name: 'Ashish Khare',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/ashish-khare/',
  },
  {
    name: 'Dhruv Jyoti Chakraborti',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/dhruv-jyoti-chakraborti/',
  },
  {
    name: 'Dr. Hima Trivedi',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/dr-hima-trivedi/',
  },
  {
    name: 'Dr. Kirtika Chetia',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/dr-kirtika-chetia/',
  },
  {
    name: 'Dr. Sheenu Jhavar',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/dr-sheenu-jhavar/',
  },
  {
    name: 'Garima Pande',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/garima-pande/',
  },
  {
    name: 'Gautham Sivaramakrishnan',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/gautham-sivaramakrishnan/',
  },
  {
    name: 'Jishnu Changkakoti',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/jishnu-changkakoti/',
  },
  {
    name: 'Madhup Bansal',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/madhup-bansal/',
  },
  {
    name: 'Mahadevan Hariharan',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/mahadevan-hariharan/',
  },
  {
    name: 'Mahavir Pratap Sharma',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/mahavir-pratap-sharma/',
  },
  {
    name: 'Mittu Tigi',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/mittu-tigi/',
  },
  {
    name: 'Mohammad Azhar',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/mohammad-azhar/',
  },
  {
    name: 'Pallavi Tak',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/pallavi-tak/',
  },
  {
    name: 'Praveen Arora',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/praveen-arora/',
  },
  {
    name: 'Prof. Dr. Saurabh Trivedi',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/saurabh-trivedi/',
  },
  {
    name: 'Sharad Bansal',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/sharad-bansal/',
  },
  {
    name: 'Shrikant Prabhakar Ghode',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/shrikant-prabhakar-ghode/',
  },
  {
    name: 'Tushar V',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/tushar-v/',
  },
];

/**
 * Exported fully resolved stakeholders list with auto-generated slug and image path.
 */
export const STAKEHOLDERS: Stakeholder[] = RAW_STAKEHOLDERS.map((s, index) => {
  const slug = createSlug(s.name);
  return {
    id: String(index + 1).padStart(2, '0'),
    name: s.name,
    slug,
    role: s.role,
    image: `/stakeholders/${slug}.png`,
    linkedin: s.linkedin,
  };
});
