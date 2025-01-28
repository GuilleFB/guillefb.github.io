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
import heroImage from '../images/header-background.webp';
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
      href: '/#resume',
      text: 'Resume',
      primary: true,
      Icon: BookOpenIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
      Icon: ChatBubbleBottomCenterTextIcon,
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
    { label: 'Study', text: <>
                              <p>
                              University of Alicante (Degree Marine Science)
                              </p>
                              <p>
                              University of Murcia (Master Fisheries Research)
                              </p>
                              <p>
                              University of Islas Baleares (PhD Marine Ecology)
                              </p>
                              </>, 
                              Icon: AcademicCapIcon },
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
      {
        name: 'LaTeX',
        level: 8,
      },
      {
        name: 'Markdown',
        level: 8,
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
        level: 5,
      },
            {
        name: 'Mongo',
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
    date: '2021',
    location: 'University of Balearic Island',
    title: 'Doctor in Marine Ecology',
    content: '',
  },
  {
    date: '2014',
    location: 'University of Murcia',
    title: 'Master in Fishery Resources Management',
    content: '',
  },
  {
    date: '2013',
    location: 'University of Alicante',
    title: 'Marine Science Graduate',
    content: '',
  },
  {
    date: '2011',
    location: 'University of Alicante',
    title: 'Bachelor in Biology',
    content: '',
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'APSL a Nagarro Company',
    title: 'Junior Backend Web Developer',
    content: (
        <ul className="list-disc pl-5">
          <li>
            Design and development of <strong>efficient, secure, and scalable solutions</strong>, leveraging full-stack programming skills and agile methodologies.
          </li>
          <li>
            Implementation of advanced features:
            <ul className="list-disc pl-5">
              <li>Secure authentication systems (2FA email and app, password validators).</li>
              <li>Multi-region support and robust permission management.</li>
              <li>Automated ID generation and optimized admin interfaces.</li>
              <li>
                Integrated Google Maps API for interactive location-based features.
              </li>
              <li>
                Implemented PDF rendering with digital signature support to enhance document security.
              </li>
            </ul>
          </li>
          <li>
            Enhanced user experience through:
            <ul className="list-disc pl-5">
              <li>Responsive design and CSS styling.</li>
              <li>Reusable components, interactive maps, file uploads, and image galleries.</li>
            </ul>
          </li>
          <li>
            Key technologies: <strong>Django, Django REST Framework, PostgreSQL (PostGIS), Redis, Docker, and Bootstrap</strong>.
          </li>
          <li>
            Focused on delivering high-quality, user-centric solutions, improving <strong>performance, security, and scalability</strong>.
          </li>
        </ul>
    ),
  },
  {
    date: 'November 2020 - October 2022',
    location: 'Spanish Institute of Oceanography',
    title: 'Technical Specialist',
    content: (
      <ul className="list-disc pl-5">
        <li>
          Led the development, maintenance, and analysis of Spain's allochthonous species database, integrating data from international sources (<strong>GBIF, WORMS, FishBase, AlgaeBase</strong>) via APIs, web scraping (<strong>R, Python</strong>), and field campaigns.
        </li>
        <li>
          Spearheaded cumulative impact assessments for <strong>Marine Spatial Planning (MSP)</strong> in the Western Mediterranean, designing data-driven scenarios using <strong>QGIS, ArcGIS, R, Python, and PostgreSQL</strong>.
        </li>
        <li>
          Coordinated cross-border policy recommendations, aligning spatial uses (<strong>fisheries, conservation zones</strong>) with regulatory frameworks in collaboration with EU Member States and stakeholders.
        </li>
        <li>
          Managed activities for the <strong>MSPMED project</strong>, contributing to scientific publications, budget oversight, and multinational workshops.
        </li>
        <li>
          Technical skills: <strong>Data automation (R, Python), GIS-based spatial analysis, and PostgreSQL database management</strong>.
        </li>
        <li>
          Published research in peer-reviewed journals, enhancing academic impact and supporting evidence-based policy decisions.
        </li>
        <li>
          Developed resilience and time-management skills in fast-paced, multidisciplinary environments, particularly during offshore campaigns and high-stakes EU-funded initiatives.
        </li>
      </ul>
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
  {label: 'ResearchGate', Icon: ResearchGateIcon, href: 'https://www.researchgate.net/profile/Guillermo-Follana-Berna'},
  {label: 'Orcid', Icon: OrcidIcon, href: 'https://orcid.org/0000-0001-9314-6567'},
];
