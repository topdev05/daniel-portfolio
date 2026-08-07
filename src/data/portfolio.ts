export type SkillCategory =
  | 'All'
  | 'Languages'
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'AI'
  | 'APIs'
  | 'Cloud'

export interface SkillItem {
  name: string
  category: Exclude<SkillCategory, 'All'>
  level: number
  mark: string
  color: string
}

export type ProjectStatus = 'Featured' | 'Completed' | 'In Progress' | 'Archived'

export interface Project {
  id: string
  title: string
  summary: string
  description: string
  stack: string[]
  status: ProjectStatus[]
  url: string
  image: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
  tech: string[]
}

export interface Education {
  id: string
  degree: string
  school: string
  period: string
  note: string
}

export const PROFILE = {
  name: 'Daniel Bianca Guardado Henríquez',
  shortName: 'Daniel Guardado',
  title: 'Full Stack Developer',
  location: 'Mexico',
  experienceYears: '9+',
  email: 'tldev7155@gmail.com',
  github: 'https://github.com/topdev05',
  githubHandle: 'topdev05',
  avatar: '/images/avatar.png?v=3',
  headline: 'Senior Full Stack Developer building scalable SaaS, CRM, and AI-powered systems.',
  bio: `Results-driven Senior Full Stack Developer with more than nine years of experience designing enterprise web applications, CRM platforms, AI-powered automation systems, customer management software, email marketing platforms, API integrations, cloud infrastructure, and scalable SaaS solutions using Python, PHP, JavaScript, React, FastAPI, Laravel, MySQL, PostgreSQL, AWS, Docker, and AI technologies.`,
  highlights: [
    { label: 'Years Building', value: '9+' },
    { label: 'Focus', value: 'Full Stack' },
    { label: 'Delivery', value: 'End-to-End' },
  ],
}

export const SKILL_FILTERS: SkillCategory[] = [
  'All',
  'Languages',
  'Frontend',
  'Backend',
  'Databases',
  'AI',
  'APIs',
  'Cloud',
]

export const SKILL_ITEMS: SkillItem[] = [
  { name: 'Python', category: 'Languages', level: 95, mark: 'Py', color: '#3776AB' },
  { name: 'PHP', category: 'Languages', level: 90, mark: 'PHP', color: '#777BB4' },
  { name: 'JavaScript', category: 'Languages', level: 95, mark: 'JS', color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Languages', level: 90, mark: 'TS', color: '#3178C6' },
  { name: 'SQL', category: 'Languages', level: 90, mark: 'SQL', color: '#336791' },
  { name: 'React', category: 'Frontend', level: 95, mark: 'Re', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', level: 85, mark: 'N', color: '#111111' },
  { name: 'HTML5', category: 'Frontend', level: 100, mark: 'H5', color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', level: 95, mark: 'CSS', color: '#1572B6' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90, mark: 'Tw', color: '#06B6D4' },
  { name: 'Bootstrap', category: 'Frontend', level: 85, mark: 'Bs', color: '#7952B3' },
  { name: 'FastAPI', category: 'Backend', level: 90, mark: 'Fa', color: '#009688' },
  { name: 'Django', category: 'Backend', level: 85, mark: 'Dj', color: '#092E20' },
  { name: 'Laravel', category: 'Backend', level: 90, mark: 'La', color: '#FF2D20' },
  { name: 'Express.js', category: 'Backend', level: 85, mark: 'Ex', color: '#444444' },
  { name: 'MySQL', category: 'Databases', level: 95, mark: 'My', color: '#4479A1' },
  { name: 'PostgreSQL', category: 'Databases', level: 90, mark: 'Pg', color: '#4169E1' },
  { name: 'Redis', category: 'Databases', level: 80, mark: 'Rd', color: '#DC382D' },
  { name: 'OpenAI API', category: 'AI', level: 85, mark: 'AI', color: '#10A37F' },
  { name: 'LangChain', category: 'AI', level: 75, mark: 'Lc', color: '#1C3C3C' },
  { name: 'TensorFlow', category: 'AI', level: 70, mark: 'Tf', color: '#FF6F00' },
  { name: 'REST APIs', category: 'APIs', level: 95, mark: 'API', color: '#0EA5E9' },
  { name: 'Google Ads API', category: 'APIs', level: 80, mark: 'Ads', color: '#4285F4' },
  { name: 'Facebook Graph API', category: 'APIs', level: 80, mark: 'Fb', color: '#1877F2' },
  { name: 'Instagram Graph API', category: 'APIs', level: 75, mark: 'Ig', color: '#E4405F' },
  { name: 'SendGrid', category: 'APIs', level: 85, mark: 'Sg', color: '#1A82E2' },
  { name: 'AWS', category: 'Cloud', level: 85, mark: 'AWS', color: '#FF9900' },
  { name: 'Docker', category: 'Cloud', level: 90, mark: 'Dk', color: '#2496ED' },
  { name: 'JWT', category: 'Cloud', level: 90, mark: 'JWT', color: '#D63AFF' },
  { name: 'OAuth2', category: 'Cloud', level: 85, mark: 'O2', color: '#EB5424' },
]


export const PROJECTS: Project[] = [
  {
    id: 'planet-organic',
    title: 'Planet Organic',
    summary:
      'UK organic supermarket e-commerce for certified organic, vegan, and specialty grocery shopping.',
    description:
      'Full-stack grocery commerce experience with product catalog filtering (organic, vegan, gluten-free), cart/checkout flows, delivery messaging, promotions, and content-driven discovery for a sustainable retail brand.',
    stack: ['React', 'Next.js', 'TypeScript', 'Laravel', 'MySQL', 'Redis', 'AWS'],
    status: ['Featured', 'Completed'],
    url: 'https://www.planetorganic.com/',
    image: '/images/projects/planet-organic.jpg?v=2',
  },
  {
    id: 'umamicart',
    title: 'UmamiCart',
    summary:
      'Asian cuisine platform with authentic recipes, ingredient guides, and cooking techniques.',
    description:
      'Built a content-rich culinary platform covering Chinese, Japanese, Korean, Thai, and more — browse-by-cuisine navigation, recipe/guide publishing, and structured ingredient education for home cooks exploring Asian flavors.',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    status: ['Featured', 'Completed'],
    url: 'https://www.umamicart.com/',
    image: '/images/projects/umamicart.jpg?v=2',
  },
  {
    id: 'bombas',
    title: 'Bombas',
    summary:
      'DTC apparel store for comfort essentials with a one-purchased, one-donated giving model.',
    description:
      'E-commerce experience for socks, underwear, tees, slippers, and shoes — product discovery, packs/bundles, impact storytelling, and conversion-focused shopping flows that connect every purchase to donation programs.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Stripe', 'AWS'],
    status: ['Featured', 'Completed'],
    url: 'https://bombas.com/',
    image: '/images/projects/bombas.jpg?v=2',
  },
  {
    id: 'caraway',
    title: 'Caraway Home',
    summary:
      'Non-toxic ceramic cookware brand site with sets, bundles, and clean-kitchen storytelling.',
    description:
      'Commerce platform for cookware, bakeware, and kitchen storage — bestseller merchandising, bundle savings, product transparency messaging, and high-converting PDP/cart experiences for a modern home brand.',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'AWS'],
    status: ['Featured', 'Completed'],
    url: 'https://www.carawayhome.com/',
    image: '/images/projects/caraway.jpg?v=2',
  },
  {
    id: 'lead4you',
    title: 'Lead4You',
    summary:
      'Mexican sales growth platform that generates qualified leads and supports the full commercial process.',
    description:
      'Built a marketing and conversion website for Lead4You — digital campaigns, lead qualification, service pages, and contact flows oriented to real sales outcomes. Designed for clear messaging, strong CTAs, and end-to-end prospect nurturing.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
    status: ['Featured', 'Completed'],
    url: 'https://lead4you.com.mx/',
    image: '/images/projects/lead4you.jpg?v=1',
  },
]

export const EXPERIENCE: Experience[] = [
  {
    id: 'independent',
    title: 'Senior Full Stack Developer',
    company: 'Independent Consultant',
    location: 'Mexico · Remote',
    period: 'Jan 2021 — Present',
    bullets: [
      'Architected enterprise CRM platforms with modular services, role-based access, and analytics dashboards for sales and support teams.',
      'Developed bulk email marketing systems with segmentation, queue-based delivery, SendGrid integration, and campaign performance tracking.',
      'Implemented AI assistants using OpenAI and LangChain to automate responses, summaries, and internal operational workflows.',
      'Integrated ERP and marketing APIs (Google Ads, Facebook/Instagram Graph) into unified data and reporting layers.',
      'Built and operated AWS cloud deployments with Dockerized services, secure JWT/OAuth2 auth, and production-ready CI-friendly environments.',
    ],
    tech: ['Python', 'React', 'FastAPI', 'Laravel', 'PostgreSQL', 'AWS', 'Docker', 'OpenAI'],
  },
  {
    id: 'northline',
    title: 'Full Stack Software Engineer',
    company: 'Northline Digital Studio',
    location: 'Mexico · Contract',
    period: 'Mar 2017 — Dec 2020',
    bullets: [
      'Built CRM and customer management solutions end-to-end, from database design through React interfaces and Laravel APIs.',
      'Created production React and Laravel applications for business clients, focusing on maintainable architecture and clear UX flows.',
      'Optimized MySQL schemas, indexes, and queries to improve response times for reporting and transactional features.',
      'Collaborated with stakeholders to translate operational requirements into iterative releases and reliable deployments.',
    ],
    tech: ['React', 'Laravel', 'PHP', 'MySQL', 'JavaScript', 'REST APIs'],
  },
  {
    id: 'orbit',
    title: 'Software Developer',
    company: 'Orbit Web Collective',
    location: 'Mexico · Contract',
    period: 'Jun 2015 — Feb 2017',
    bullets: [
      'Developed business web applications for early-stage clients, covering core CRUD workflows, auth, and admin tooling.',
      'Integrated third-party REST APIs for payments, messaging, and operational data exchange.',
      'Performed testing and deployment support to ship stable releases and reduce production defects.',
      'Established foundational full-stack practices across PHP/JavaScript stacks that scaled into later senior delivery work.',
    ],
    tech: ['PHP', 'JavaScript', 'MySQL', 'HTML5', 'CSS3', 'REST APIs'],
  },
]

export const EDUCATION: Education[] = [
  {
    id: 'utec',
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'Universidad Tecnológica de México',
    period: '2011 — 2015',
    note: 'Foundational training in software engineering, systems design, databases, and web application development.',
  },
]

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#work', label: 'Work' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
] as const
