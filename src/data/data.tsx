import {
  AcademicCapIcon,
  BookOpenIcon,
  ChatBubbleBottomCenterTextIcon,
  // ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import ResearchGateIcon from '../components/Icon/ResearchGateIcon';
import OrcidIcon from '../components/Icon/OrcidIcon';
// import heroImage from '../images/fondo/mallorca.jpg';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import { useTranslation } from 'react-i18next';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Guillermo Follana Berná',
  description: "Guillermo Follana Berná Porfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const useHeroData = (): Hero => {
  const { t } = useTranslation();

  return {
    // imageSrc: HeroImg(),
    name: t('hero.name'),
    description: (
      <>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          {t('hero.description.0')}<strong className="text-stone-100">{t('hero.description.1')}</strong>{t('hero.description.2')}
          <strong className="text-stone-100"><a href="https://apsl.tech/">{t('hero.description.3')}</a></strong>.
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          {t('hero.description.4')}
        </p>
      </>
    ),
    actions: [
      {
        href: '/#resume',
        text: t('hero.actions.0'),
        primary: true,
        Icon: BookOpenIcon,
      },
      {
        href: `#${SectionId.Contact}`,
        text: t('hero.actions.1'),
        primary: false,
        Icon: ChatBubbleBottomCenterTextIcon,
      },
    ],
  };
};

/**
 * About section
 */
const AgeCalculator = () => {
  const [age, setAge] = useState('');

  useEffect(() => {
    const birthDate = new Date(1988, 3, 9);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }

    setAge(calculatedAge.toString());
  }, []);

  return <span>{age}</span>;
};

const Experience = () => {
  const [years, setYears] = useState('');

  useEffect(() => {
    const employDate = new Date(2022, 9, 1);
    const today = new Date();
    let calculatedExperience = today.getFullYear() - employDate.getFullYear();
    const monthDifference = today.getMonth() - employDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < employDate.getDate())) {
      calculatedExperience--;
    }

    setYears(calculatedExperience.toString());
  }, []);

  return <span>{years}</span>;
};

export const useAboutData = (): About => {
  const { t } = useTranslation();

  return {
    profileImageSrc: profilepic,
    description: (
      <>
          {t('about.description.0')} <Experience/> {t('about.description.1')}
          <p></p>
          {t('about.quotes.0')}
          <p></p>
          {t('about.quotes.1')}
      </>
    ),
    aboutItems: [
      { label: t('about.items_title.location'), text: t('about.items.location'), Icon: MapIcon },
      { label: t('about.items_title.age'), text: <AgeCalculator />, Icon: CalendarIcon },
      { label: t('about.items_title.nationality'), text: t('about.items.nationality'), Icon: FlagIcon },
      { label: t('about.items_title.interests'), text: t('about.items.interests'), Icon: SparklesIcon },
      { label: t('about.items_title.studies'), text: <>
                                <p>
                                {t('about.studies.0')}
                                </p>
                                <p>
                                {t('about.studies.1')}
                                </p>
                                <p>
                                {t('about.studies.2')}
                                </p>
                                </>, 
                                Icon: AcademicCapIcon },
      { label: t('about.items_title.employment'), text: t('about.items.employment'), Icon: BuildingOffice2Icon },
    ],
  };
};
  

/**
 * Skills section
 */
export const useSkills = (): SkillGroup[] => {
  const { t } = useTranslation();

  return [
    {
      name: t('skills.name.0'),
      skills: [
        { name: t('skills.skill_language_name.0'), level: 10 },
        { name: t('skills.skill_language_name.1'), level: 8 },
        { name: t('skills.skill_language_name.2'), level: 7 },
      ],
    },
    {
      name: t('skills.name.1'),
      skills: [
        { name: 'R', level: 9 },
        { name: 'Python', level: 9 },
        { name: 'Javascript', level: 6 },
        { name: 'SQL', level: 6 },
        { name: 'Bash', level: 5 },
        { name: 'Go', level: 4 },
        { name: 'LaTeX', level: 8 },
        { name: 'Markdown', level: 8 },
      ],
    },
    {
      name: t('skills.name.2'),
      skills: [
        { name: 'Django', level: 8 },
        { name: 'Flask', level: 6 },
        { name: 'FastAPI', level: 7 },
        { name: 'React', level: 6 },
      ],
    },
    {
      name: t('skills.name.3'),
      skills: [
        { name: 'REST API', level: 8 },
        { name: 'JSON', level: 8 },
        { name: 'Google APIs (Maps, Gmail, YouTube, Calendar)', level: 6 },
        { name: 'CSS', level: 6 },
        { name: 'HTML', level: 6 },
        { name: 'AJAX', level: 6 },
        { name: 'XML', level: 6 },
        { name: 'Bootstrap', level: 6 },
      ],
    },
    {
      name: t('skills.name.4'),
      skills: [
        { name: 'GitHub', level: 9 },
        { name: 'GitLab', level: 9 },
        { name: 'Docker', level: 7 },
        { name: 'Redmine', level: 6 },
        { name: 'JIRA', level: 5 },
        { name: 'VS Code', level: 8 },
        { name: 'Zulip', level: 7 },
        { name: 'Trivy', level: 7 },
        { name: 'Swagger API', level: 7 },
        { name: 'Dependency track', level: 9 },
      ],
    },
    {
      name: t('skills.name.5'),
      skills: [
        { name: 'PostgreSQL', level: 9 },
        { name: 'Redis', level: 5 },
        { name: 'Mongo', level: 4 },
      ],
    },
  ];
};
/**
 * Portfolio section
 */
const images = [porfolioImage2, porfolioImage3, porfolioImage4, porfolioImage5, porfolioImage6, porfolioImage7];

export const usePortfolioItems = (): PortfolioItem[] => {
  const { t } = useTranslation();
  const projects = t('portfolio', { returnObjects: true }) as Array<any>;

  return projects.map((project, index) => ({
    title: project.title || '',
    client: project.client || '',
    description: project.description || '',
    url: project.url || '#',
    image: images[index] || images[0],
  }));
};

/**
 * Resume section
 */
export const useEducation = (): TimelineItem[] => {
  const { t } = useTranslation();
  const education = t('education', { returnObjects: true }) as Array<any>;

  return education.map((education) => ({
    date: education.date || '',
    location: education.location || '',
    title: education.title || '',
    content: education.content || '',
    href: education.href || '',
  }));
};

export const useExperience = (): TimelineItem[] => {
  const { t } = useTranslation();
  const work = t('work', { returnObjects: true }) as Array<any>;

  return work.map((work) => ({
    date: work.date || '',
    location: work.location || '',
    title: work.title || '',
    content: work.content || '',
  }));
};

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const useContact = (): ContactSection => {
  const { t } = useTranslation();
  return {
    headerText: t('contact.headerText'),
    description: t('contact.description'),
    items: [
      {
        type: ContactType.Email,
        text: 'gfollana@gmail.com',
        href: 'mailto:gfollana@gmail.com',
      },
      {
        type: ContactType.Location,
        text: 'Inca, Islas Baleares, Spain',
        href: 'https://maps.app.goo.gl/ZC6JhXkMNbix8uAM7',
      },
      {
        type: ContactType.Github,
        text: 'GuilleFB',
        href: 'https://maps.app.goo.gl/ZC6JhXkMNbix8uAM7',
      },
      // {
      //   type: ContactType.Instagram,
      //   text: '@tbakerx',
      //   href: 'https://www.instagram.com/tbakerx/',
      // },
    ],
  };
};
/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/GuilleFB'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/guillefb/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
  {label: 'ResearchGate', Icon: ResearchGateIcon, href: 'https://www.researchgate.net/profile/Guillermo-Follana-Berna'},
  {label: 'Orcid', Icon: OrcidIcon, href: 'https://orcid.org/0000-0001-9314-6567'},
];
