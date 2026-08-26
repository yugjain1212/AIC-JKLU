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
    linkedin: 'https://www.linkedin.com/in/aakarshansethi/',
  },
  {
    name: 'Aashish Beergi',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/aashishbeergi/',
  },
  {
    name: 'Amit Singal',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/amitsingalca/',
  },
  {
    name: 'Anupam Deb',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/anupamdeb1985/',
  },
  {
    name: 'Apoorv Bamba',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/apoorv-bamba-19b53214/',
  },
  {
    name: 'Apoorv Sharma',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/aposh/',
  },
  {
    name: 'Ashish Khare',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/ashish-khare-94161723/',
  },
  {
    name: 'Dhruv Jyoti Chakraborti',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/dhruvajyoti-chakraborty-66737b2b/',
  },
  {
    name: 'Dr. Hima Trivedi',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/dr-hima-trivedi/',
  },
  {
    name: 'Dr. Kirtika Chetia',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/kirtika-chetia/',
  },
  {
    name: 'Dr. Sheenu Jhavar',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/dr-sheenu-jhawar-4b18a05/',
  },
  {
    name: 'Garima Pande',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/garimapande/',
  },
  {
    name: 'Gautham Sivaramakrishnan',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/sgautham/',
  },
  {
    name: 'Jishnu Changkakoti',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/jishnuchangkakoti/',
  },
  {
    name: 'Madhup Bansal',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/madhupbansal/',
  },
  {
    name: 'Mahadevan Hariharan',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/mahadevanhariharan/',
  },
  {
    name: 'Mahavir Pratap Sharma',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/mahavir-pratap-sharma-26476915/',
  },
  {
    name: 'Mittu Tigi',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/mittutigi/',
  },
  {
    name: 'Mohammad Azhar',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/mohammadazahar/',
  },
  {
    name: 'Pallavi Tak',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/pallavi-tak/',
  },
  {
    name: 'Praveen Arora',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/praveen-arora-a73602/',
  },
  {
    name: 'Prof. Dr. Saurabh Trivedi',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/prof-dr-saurabh-trivedi-43161119/',
  },
  {
    name: 'Sharad Bansal',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/shrdbnsl/',
  },
  {
    name: 'Shrikant Prabhakar Ghode',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/shrikant-prabhakar-ghode/',
  },
  {
    name: 'Tushar V',
    role: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/tusharvadera/',
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
