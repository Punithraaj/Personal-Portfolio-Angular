export interface NavigationItem {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  category: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillGroup {
  title: string;
  description: string;
  tools: string[];
}

export interface EducationItem {
  period: string;
  title: string;
  school: string;
  detail: string;
}

export interface ProjectItem {
  title: string;
  summary: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  githubUrl: string;
  liveUrl?: string;
}

export const PROFILE = {
  name: 'Punithraj M N',
  role: 'Full Stack Developer',
  headline: 'Engineering dependable software for enterprise, web, and data-focused products.',
  heroSummary:
    'I build maintainable experiences with Java, Angular, and Python, combining enterprise development discipline with a modern product mindset.',
  location: 'Hassan, Karnataka, India',
  email: 'punithraaj14@gmail.com',
  phone: '+91 8088041006',
  resumeUrl: 'https://drive.google.com/file/d/1Bngz7t8l_RAtwVmtHjnPe6CIoFWK9AfY/view',
  languages: ['English', 'Kannada', 'Hindi', 'Telugu'],
  socialLinks: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/roaring-raaj' },
    { label: 'GitHub', url: 'https://github.com/Punithraaj' },
    { label: 'Facebook', url: 'https://www.facebook.com/roaring.raaj/' },
    { label: 'Twitter', url: 'https://twitter.com/roaringraaj' }
  ] satisfies SocialLink[]
} as const;

export const NAV_ITEMS: NavigationItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export const ABOUT_PARAGRAPHS: string[] = [
  'I enjoy turning complex requirements into maintainable software that is useful, accessible, and easy to evolve.',
  'My experience spans enterprise financial systems, analytical web applications, data-focused tooling, and modern front-end experiences.'
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: 'Current role',
    title: 'Associate Software Engineer',
    company: 'Morgan Stanley',
    category: 'Enterprise software',
    summary:
      'Working on software and application development for enterprise financial systems with a focus on dependable delivery and maintainable engineering.',
    highlights: [
      'Contribute to enterprise application development for financial systems.',
      'Support reliable delivery across core backend, database, and release workflows.'
    ],
    technologies: ['Java', 'Spring', 'DB2', 'Jenkins', 'Git']
  },
  {
    period: '2018 – 2019',
    title: 'Associate Software Engineer',
    company: 'Novelsynth Soft Solution Pvt Ltd',
    category: 'Web development',
    summary:
      'Developed analytical and visualization solutions for oil and gas industry applications using backend, data, and cloud tooling.',
    highlights: [
      'Built analytical and visualization solutions for domain-specific web applications.',
      'Worked across application logic, data access, and deployment-oriented tooling.'
    ],
    technologies: ['Java', 'Python', 'Vaadin', 'MySQL', 'Azure']
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Backend',
    description: 'Enterprise and API-focused development.',
    tools: ['Java', 'Spring', 'Python', 'REST APIs', 'Hibernate']
  },
  {
    title: 'Frontend',
    description: 'Modern web interfaces and responsive UI delivery.',
    tools: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Data',
    description: 'Relational systems, modelling, and analytics support.',
    tools: ['SQL', 'MySQL', 'DB2', 'Data modelling', 'Analytics']
  },
  {
    title: 'Tools & cloud',
    description: 'Delivery workflows and day-to-day engineering tooling.',
    tools: ['Git', 'Jenkins', 'Maven', 'Azure', 'Agile', 'Shell scripting']
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    period: '2015 – 2018',
    title: 'Bachelor of Engineering',
    school: 'R.V. College of Engineering',
    detail: 'Computer Engineering · 8.1 CGPA'
  },
  {
    period: '2012 – 2015',
    title: 'Diploma in Computer Science',
    school: 'Smt. L.V. Polytechnic, Hassan',
    detail: '90% aggregate'
  },
  {
    period: '2009 – 2011',
    title: 'Industrial Training Institute',
    school: 'Government ITI, Hassan',
    detail: 'Centre of Excellence · 80% aggregate'
  }
];

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    title: 'Personal Portfolio Angular',
    summary:
      'A modern Angular portfolio focused on smooth single-page navigation, clear content hierarchy, and GitHub Pages deployment.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'GitHub Pages'],
    image: 'assets/images/portfolio1.PNG',
    imageAlt: 'Angular portfolio project preview',
    githubUrl: 'https://github.com/Punithraaj/Personal-Portfolio-Angular',
    liveUrl: 'https://punithraaj.github.io/Personal-Portfolio-Angular/'
  },
  {
    title: 'Personal Portfolio Flutter',
    summary:
      'A Flutter portfolio that showcases the richer single-page content structure and navigation interaction patterns carried into this redesign.',
    technologies: ['Flutter', 'Dart', 'Responsive UI', 'GitHub Pages'],
    image: 'assets/images/portfolio2.PNG',
    imageAlt: 'Flutter portfolio project preview',
    githubUrl: 'https://github.com/Punithraaj/Personal-Portfolio-Flutter',
    liveUrl: 'https://punithraaj.github.io/Personal-Portfolio-Flutter/'
  },
  {
    title: 'Flutter Plant Shop',
    summary:
      'A modern Flutter-based mobile application built around responsive cross-platform screens, reusable widgets, and clean project structure.',
    technologies: ['Flutter', 'Dart', 'Responsive Design'],
    image: 'assets/images/project1.jpg',
    imageAlt: 'Flutter plant shop preview',
    githubUrl: 'https://github.com/Punithraaj/flutter-plant-shop'
  }
];
