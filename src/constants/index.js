import {
  mobile,
  backend,
  creator,
  web,
  stack,
  movieRenter,
  littleLemon,
  cleverSearch,
  personalWeb,
  projectSmall,
  email,
  location,
  github,
  linkedin

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analysis",
    icon: mobile,
  },
  {
    title: "Data Science",
    icon: creator,
  },
];

const technology = [
  {
    name: 'Languages',
    content: [
      {
        name: "JavaScript",
        icon: 'javascript/javascript-original.svg',
      },
      {
        name: "Python",
        icon: 'python/python-original.svg',
      },
      {
        name: "C#",
        icon: 'csharp/csharp-original.svg',
      },
    ]
  },
  {
    name: 'Front-end Frameworks/Tools',
    content: [
      {
        name: "React JS",
        icon: 'react/react-original-wordmark.svg',
      },
      {
        name: "Tailwind CSS",
        icon: 'tailwindcss/tailwindcss-plain.svg',
      },
      {
        name: "Sass",
        icon: 'sass/sass-original.svg',
      },
      {
        name: "Figma",
        icon: 'figma/figma-original.svg',
      },
      {
        name: "Jest",
        icon: 'jest/jest-plain.svg',
      },
      {
        name: "HTML 5",
        icon: 'html5/html5-original.svg',
      },
      {
        name: "CSS 3",
        icon: 'css3/css3-plain-wordmark.svg',
      },
    ],
  },
  {
    name: 'Back-end Frameworks/Tools',
    content: [
      {
        name: "Node JS",
        icon: 'nodejs/nodejs-plain.svg',
      },
      {
        name: "Express JS",
        icon: 'express/express-original.svg',
      },
      {
        name: "npm",
        icon: 'npm/npm-original-wordmark.svg',
      },
    ],
  },
  {
    name: 'Databases',
    content: [
      {
        name: "MongoDB",
        icon: 'mongodb/mongodb-plain-wordmark.svg',
      },
      {
        name: "MySQL",
        icon: 'mysql/mysql-original-wordmark.svg',
      },
      {
        name: "PostgreSQL",
        icon: 'postgresql/postgresql-original.svg',
      },
    ],
  },
  {
    name: 'Data Science Frameworks/Packages',
    content: [
      {
        name: "NumPy",
        icon: 'numpy/numpy-original-wordmark.svg',
      },
      {
        name: "Pandas",
        icon: 'pandas/pandas-original-wordmark.svg',
      },
      {
        name: "Selenium",
        icon: 'selenium/selenium-original.svg',
      },
      {
        name: "Kaggle",
        icon: 'kaggle/kaggle-original.svg',
      },
      {
        name: "RStudio",
        icon: 'rstudio/rstudio-original.svg',
      },
    ],
  },

  {
    name: "IDE's and Tools",
    content: [
      {
        name: "VSCode",
        icon: 'vscode/vscode-original.svg',
      },
      {
        name: "git",
        icon: 'git/git-original-wordmark.svg',
      },
      {
        name: "Jupyter",
        icon: 'jupyter/jupyter-original-wordmark.svg',
      },
    ]
  },
]

const experiences = [
  {
    title: "Full-Stack Development",
    project_name: "iMovie-Renter",
    image: movieRenter,
    icon: stack,
    icons: [
      'devicon-react-original',
      'devicon-express-original',
      'devicon-mongodb-plain',
      'devicon-bootstrap-plain'
    ],
    date: "Jan 2021 - Feb 2022",
    note: 'Please allow a couple of minutes for backend and DB to run',
    gitUrl: 'https://github.com/fabio-writes-code/iMovieRenter/tree/main',
    liveUrl: 'https://imovie-renter.onrender.com/movies',
    points: [
      "Designed and Developed front and back end of a movie renter administrative dashboard using the MERN Stack",
      "Built and tested the back-end of the application using Node.js, Express, Joi, Mongoose  and other complimentary backend libraries ",
      "Developed the front end interface using React.js, Boostrap, React-Router, Toasties, Joi among other complimentary packages",
      "Designed the database system using MongoDB and the Atlas Cloud",
      "Deployed Database using Atlas Cloud. Front-end and Back end deployment via Render.io"
    ],
  },
  {
    title: "React.js UI/UX Development",
    image: littleLemon,
    project_name: "Little Lemon",
    icon: web,
    icons: [
      'devicon-react-original',
      "devicon-sass-original",
      'devicon-javascript-plain'
    ],
    date: "March 2020 - April 2021",
    gitUrl: 'https://github.com/fabio-writes-code/little-lemon/tree/main',
    liveUrl: 'https://littlelemon-lpre.onrender.com',
    points: [
      "Designed and test UX/UI using Figma to create a cohesive and recognizable brand",
      "Applied UX/UI principles to emulate personas and journeys throughout the web application",
      "Designed and deployed website and webApp using React.js, React-Router and other related frameworks.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Development",
    project_name: "Clever Search",
    image: cleverSearch,
    icon: backend,
    icons: [
      'devicon-react-original',
      'devicon-tailwindcss-plain',
      'devicon-javascript-plain'
    ],
    date: "Jan 2022 - Jan 2023",
    gitUrl: '',
    liveUrl: '',
    points: [
      "Developed the UI/UX experience for a Medical Search Engine",
      "Designed and test UX/UI using Figma to create a cohesive and recognizable brand",
      "Designed and deployed the webApp using React.js, React-Router, SaSS, Formik and complimentary frameworks.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Development",
    project_name: "Personal Website",
    image: personalWeb,
    icon: web,
    icons: [
      'devicon-react-original',
      'devicon-tailwindcss-plain',
      'devicon-threejs-original',
    ],
    date: "Jan 2023 - Present",
    gitUrl: 'https://github.com/fabio-writes-code/iMovieRenter/tree/main',
    liveUrl: 'https://imovie-renter.onrender.com/movies',
    points: [
      "Develop the Front end presentation of my personal portfolio website",
      "Designed and deploy the website using React.js, React-Router, TailwindCSS, Three.Js, Motion and complimentary frameworks.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Deployed website to Render.io",
    ],
  },
  {
    title: "Additional Projects",
    project_name: "Personal Projects",
    image: projectSmall,
    icon: stack,
    icons: [
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-javascript-plain',
    ],
    date: "Jan 2023 - Present",
    gitUrl: 'https://github.com/fabio-writes-code?tab=repositories',
    liveUrl: 'https://fabio-writes-code.github.io/',
    points: [
      "Scheduler list app built using React.js and React-router",
      "Functional calculator built using vanilla JS, CSS and HTML",
      "Functional etch-a-sketch built using vanilla JS, CSS and HTML",
      "Deployed website to Render.io",
    ],
  },
];

const contact = [
  {
    name: 'EMAIL',
    icon: email,
    content: 'henaocaviedesg@gmail.com',
    href: 'mailto:henaocaviedesg@gmail.com',
    link: true,
  },
  {
    name: 'GITHUB REPOS',
    icon: github,
    content: 'https://github.com/fabio-writes-code',
    href: 'https://github.com/fabio-writes-code',
    link: true,
  },
  {
    name: 'LINKEDIN',
    icon: linkedin,
    content: 'https://www.linkedin.com/in/fabio-andres-henao-caviedes/',
    href: 'https://www.linkedin.com/in/fabio-andres-henao-caviedes/',
    link: true,
  },
  {
    name: 'LOCATION',
    icon: location,
    content: 'Alberta, Canada',
    href: '',
    link: false,
  },
]
export { services, technology, experiences, contact };