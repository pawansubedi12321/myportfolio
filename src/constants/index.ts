// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  EmergeInfosys,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  // user1,
  // user2,
  // user3,
  youtube,
  linkedin,
  Xsocialsite,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },

] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Figma Basic",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Intern",
    company_name: "Emerge Infosys",
    icon: EmergeInfosys,
    iconBg: "#383E56",
    date: "Aug 2023 - Nov 2023",
    points: [
      "During my internship at Emerge Infosys, I gained hands-on experience in web development.",
      "I learned the fundamentals of HTML and CSS, which laid the foundation for creating responsive and user friendly web interfaces.",
      "Additionally, I worked with popular frameworks like Tailwind CSS and Bootstrap to design modern and visually appealing layouts.",
      " I became proficient in working with various HTTP methods, including GET, POST, PUT,PATCH, and DELETE, which enhanced my ability to interact with APIs effectively."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Emerge Infosys",
    icon:EmergeInfosys,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "As part of my professional work at Emerge Infosys, I contributed to the development of the XittooSewa platform.",
      "This project includes a user-friendly website for service providers and customers, along with a robust admin panel for managing operations.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: EmergeInfosys,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Proficient in developing web applications using the Django framework, with a strong understanding of its core features and functionalities.",
      "Experienced in implementing authentication and authorization mechanisms, ensuring secure user access and data protection.",
      "Proficient in using the Django REST Framework to create robust and scalable APIs, enabling seamless communication between front-end and back-end systems.",
    ],
  },
] as const;

// Testimonials
// export const TESTIMONIALS = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: user1,
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: user2,
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: user3,
//   },
// ] as const;

// Projects
export const PROJECTS = [
  {
    name: "Xittoo Sewa",
    description:
      "Xittoo Sewa is an on-demand service platform that connects users with skilled technicians for fast, reliable, and location-based solutions to everyday problems.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind and css",
        color: "pink-text-gradient",
      },
      
    ],
    image: project1,
    // source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://xittoosewa.com",
  },
  {
    name: "Dice Game",
    description:
      "This is a web based game .In the game if selected number is equal to dice number you will ge the selected number point . if you get wrong guess then 2 point will be deducted.Always select 6 for maximum points.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "rapidapi",
      //   color: "green-text-gradient",
      // },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/pawansubedi12321/dicegame",
    live_site_link: "https://pawansubedi12321.github.io/dicegame/",
  },
  {
    name: "Drink Water Goal",
    description:
      "This is web based application .In this application the main goal is to drink the 2 liter of water in a day.After drinking the 250ml you can select the glass.The glass will appear blue after you select",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "syncfusion",
      //   color: "green-text-gradient",
      // },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/pawansubedi12321/drinkwatergoal",
    live_site_link: "https://pawansubedi12321.github.io/drinkwatergoal/",
  },
  {
    name: "Little Lemon Restaurant",
    description:
      "I have created an api using   django  where i have implemented the authentication and authorization.In this project there is a user where he order the food and the order food will be delivered by an delivery boy.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django Rest Framework",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/pawansubedi12321/django-rest-framework-",
    live_site_link: "",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "",
  },
  {
    name: "Twitter",
    icon:Xsocialsite,
    link: "https://x.com/pawansubed30964?t=yaxbnD7dEGPWPePmTXbETw&s=09",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/pawansubedi12321",
  },
] as const;
