import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
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
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello, I'm Guillermo Follana Berná`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Palma de Mallorca based <strong className="text-stone-100">Backend Software Engineer</strong>, currently working
        at <strong className="text-stone-100"><a href="https://apsl.tech/">APSL a Nagarro Company</a></strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time you can find me with my little daughter, going to the beach in summer, hiking in winter, reading about history in general, monetary history in particular, technology and/or philosophy.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
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

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
        I am a motivated Junior Backend Web Developer with a robust background in Natural Sciences 
        (PhD in Marine Ecology) and a strong passion for technology and data analysis. Over <Experience/> years of 
        professional experience in backend development using Python and Django, complemented by a solid 
        foundation in statistical analysis and database management. Proactive and self-taught, proficient 
        in R and Python, seeking new challenges in data analysis and science beyond natural sciences. I 
        believe I have made a good transition to web application development, which demonstrates my ability 
        to adapt and learn new technologies, applying knowledge in a new discipline.
        <p></p>
        "Be curious. Read widely. Try new things. What people call intelligence simply is curiosity." (Aaron Swartz)
        <p></p>
        "Live as if you were going to die tomorrow. Learn as if you will live forever." (Mahatma Gandhi)
    </>
  ),
  aboutItems: [
    { label: 'Location', text: 'Inca, Palma de Mallorca', Icon: MapIcon },
    { label: 'Age', text: <AgeCalculator />, Icon: CalendarIcon },
    { label: 'Nationality', text: 'Spanish', Icon: FlagIcon },
    { label: 'Interests', text: 'Diving, IoT, Read, Beach, Hiking', Icon: SparklesIcon },
    { label: 'Study', text: 'Universidad de las Islas Baleares', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'APSL a Nagarro Company', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'Catalan',
        level: 8,
      },
      {
        name: 'English',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'R',
        level: 9,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Javascript',
        level: 6,
      },
      {
        name: 'SQL',
        level: 6,
      },
      {
        name: 'Bash',
        level: 5,
      },
      {
        name: 'Go',
        level: 4,
      },
    ],
  },
  {
    name: 'Frameworks and Libraries',
    skills: [
      {
        name: 'Django',
        level: 8,
      },
      {
        name: 'Flask',
        level: 6,
      },
      {
        name: 'FastAPI',
        level: 7,
      },
      {
        name: 'React',
        level: 6,
      },
    ],
  },
  {
    name: 'Web Technologies',
    skills: [
      {
        name: 'REST API',
        level: 8,
      },
      {
        name: 'JSON',
        level: 8,
      },
      {
        name: 'Google APIs (Maps, Gmail, YouTube, Calendar)',
        level: 6,
      },
      {
        name: 'CSS',
        level: 6,
      },
      {
        name: 'HTML',
        level: 6,
      },
      {
        name: 'AJAX',
        level: 6,
      },
      {
        name: 'XML',
        level: 6,
      },
      {
        name: 'Bootstrap',
        level: 6,
      },
    ],
  },
  {
    name: 'Tools and platforms',
    skills: [
      {
        name: 'GitHub',
        level: 9,
      },
      {
        name: 'GitLab',
        level: 9,
      },
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'Redmine',
        level: 6,
      },
      {
        name: 'JIRA',
        level: 5,
      },
      {
        name: 'Visual Studio Code',
        level: 8,
      },
      {
        name: 'Zulip',
        level: 7,
      },
      {
        name: 'Trivy',
        level: 7,
      },
      {
        name: 'Swagger API',
        level: 7,
      },
      {
        name: 'Dependency track',
        level: 9,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'PostgreSQL',
        level: 9,
      },
      {
        name: 'Redis',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Development in medical and logistics management project',
    client: 'A medical services group in Spain offering innovative diagnostic tools to determine the best therapeutic options for patients with cancer.',
    description: 'Development and enhancement of functionalities in a medical management system. The project involved the design of both back-end and front-end solutions, with a strong focus on security, efficiency, and user experience.',
    url: 'https://www.reveal-genomics.com/',
    image: porfolioImage2,
  },
  {
    title: 'Application for the management of film locations and projects',
    client: 'Company dedicated to the search of film locations.',
    description: 'Web platform for location management and film projects with advanced management, mapping and collaboration features. Project in active development with continuous improvements in user interface, location management features and user experience.',
    url: 'https://scoutters.com/',
    image: porfolioImage3,
  },
  {
    title: 'Internal Projects',
    client: 'Versionator, to find an open-source solution with a front-end that would allow us to monitor updates and vulnerabilities of the packages used in various projects.',
    description: '',
    url: '#portfolio',
    image: porfolioImage4,
  },
  {
    title: 'Internal Projects',
    client: 'Tools Research, the goal was to identify a tool that could automatically generate an API from a database.',
    description: '',
    url: '#portfolio',
    image: porfolioImage5,
  },
  {
    title: 'Internal Projects',
    client: 'Lightning, platform created to share knowledge and news in the world of technology.',
    description: '',
    url: 'https://lightnings.apsl.net/',
    image: porfolioImage6,
  },
  {
    title: 'Internal Projects',
    client: 'HotChair, a project which goal is to offer companies a user-friendly app to make workspace reservations.',
    description: '',
    url: 'https://hotchair.es/',
    image: porfolioImage7,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'APSL a Nagarro Company',
    title: 'Junior Backend Web Developer',
    content: (
      <>
        Design and development of efficient, secure and scalable solutions, combining full-stack programming skills with experience in agile methodologies.
        <ul>
          <li><strong>Featured projects:</strong></li>
          <ul>
            <li>- Medical and logistics management: development of advanced functionalities such as secure authentication (OTP tokens, password validators), optimized administrative interfaces and automatic generation of identifiers. Improved user experience through SCSS and visual components. Multi-region support and administrator management. Technology: Python (Django), PostgreSQL, JavaScript, Docker.</li>
            <li>- Cinema location management: Platform with map integration, permissions management, file upload and image galleries. Key improvements in responsive design, performance and user management. Use of technologies such as Django REST Framework, PostgreSQL (PostGIS), Redis and Bootstrap.</li>
          </ul>
        </ul>
        <ul>
          <li><strong>Internal projects:</strong></li>
          <ul>
            <li>- Tool to monitor updates and vulnerabilities in projects (Docker).</li>
            <li>- Platform for educational videos on web development and technology (Django).</li>
            <li>- Workspace reservation application (Django).</li>
          </ul>
        </ul>
      </>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

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

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to send me a message to contact me.',
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
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'GuilleFB',
      href: 'https://github.com/GuilleFB',
    },
  ],
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
];
