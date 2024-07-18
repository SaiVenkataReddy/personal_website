import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaCuttlefish,
  FaDocker,
  FaFan,
  FaPython, FaJs, FaJava, FaNodeJs, FaServer, FaBrain, FaDatabase, FaCube, FaProjectDiagram
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import { calculateYearMonthFromToday } from '../controllers.js'

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpeg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-1.jpeg';
import Work5 from './assets/project-2.jpeg';
import Work6 from './assets/project-3.jpeg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';
import React from "react";

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },

];

export const personalInfo = [
  {
    id: 1,
    title: 'Name : ',
    description: 'Karri Sai Venkata Reddy',
  },

  {
    id: 2,
    title: 'Age : ',
    description: `${new Date().getFullYear() - 2002} Years`,
  },

  {
    id: 3,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 4,
    title: 'Tech Stack : ',
    description: 'ML/AI, Software Development',
  },

  {
    id: 5,
    title: 'Address : ',
    description: 'Andhra Pradesh, India',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+91 7794818918',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'saivenkatareddykarri190@gmail.com',
  },

  {
    id: 8,
    title: 'Languages : ',
    description: 'Telugu, English',
  },

  {
    id: 9,
    title: 'Company : ',
    description: 'Vymo',
  },

  {
    id: 10,
    title: 'Role : ',
    description: 'Member of Technical Staff (MTS)',
  },
];

export const stats = [
  {
    id: 1,
    no: `${calculateYearMonthFromToday(new Date('2023-01-01'))}`,
    title: 'Professional <br /> Experience',
  },

  {
    id: 2,
    no: '1700+',
    title: 'Leetcode <br /> Rating',
  }
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '05/2023 - PRESENT',
    title: 'MTS(Backend Developer/ Data Engineer/ ML Engineer) <span> Vymo </span>',
    desc: <ul>
      <li>Working on building new airflow pipelines for retraining and monitoring of ml models monthly.</li>
      <li>Build Api endpoints using NodeJs, Express and Python FastApi services.</li>
    </ul>
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '01/2023 - 04/2023',
    title: 'SWE Intern <span> Vymo </span>',
    desc: 'Improved existing airflow dags by reducing 30% load on the pipeline by doing feature engineering. ' +
        'Build streamlit interactive dashboard which run the simulation of ml model. Done analysis of impact of ' +
        'feature on existing ml model using probabilistic feature importance(PFI).',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '05/2022 - 07/2022',
    title: 'Summer Research Intern <span> NIT Silchar </span>',
    desc: 'Developed Automatic Licence Number Plate detection using openCV and EasyOCR.',
  },
];

export const education = [
  {
    id: 1,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-2023',
    title: 'Engineering Degree <span> NIT Silchar </span>',
    desc: <p>Electronics and Communication Engineering  <h6>CGPA - 8.43</h6></p>,
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017-2019',
    title: 'Intermediate (10+2) <span> Sasi New Gen Jr. College </span>',
    desc: <p>MPC(Mathematics, Physics, Chemistry  <h6>CGPA - 10</h6></p>,
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: '10th <span> Montessori EM School </span>',
    desc: <h6>GPA - 9.8</h6>
  },
]

export const skills = [
  {
    id: 1,
    title: 'C/C++',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Python',
    percentage: '85',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Java',
    percentage: '60',
  },

  {
    id: 5,
    title: 'Airflow',
    percentage: '80',
  },

  {
    id: 6,
    title: 'NodeJs',
    percentage: '70',
  },

  {
    id: 7,
    title: 'Express',
    percentage: '70',
  },

  {
    id: 8,
    title: 'ML/AI',
    percentage: '75',
  },

  {
    id: 9,
    title: 'MongoDB',
    percentage: '70',
  },

  {
    id: 10,
    title: 'Elasticsearch',
    percentage: '70',
  },

  {
    id: 11,
    title: 'Clickhouse',
    percentage: '85',
  },

  {
    id: 12,
    title: 'SQL',
    percentage: '85',
  },

  {
    id: 13,
    title: 'HTML/CSS',
    percentage: '45',
  }
];

export const skillsData = [
  {
    section: 'Programming Languages',
    skills: [
      { title: 'Python', icon: <FaPython /> },
      { title: 'Javascript', icon: <FaJs /> },
      { title: 'Java', icon: <FaJava /> },
      { title: 'C/C++', icon: <FaCuttlefish /> }
    ]
  },
  {
    section: 'Machine Learning and AI',
    skills: [
      { title: 'Machine Learning', icon: <FaBrain /> },
      { title: 'Deep Learning', icon: <FaBrain /> },
      { title: 'Scikit Learn', icon: <FaBrain /> },
      { title: 'Generative AI', icon: <FaBrain /> }
    ]
  },
  {
    section: 'Web Frameworks',
    skills: [
      { title: 'Node.js', icon: <FaNodeJs /> },
      { title: 'Express', icon: <FaServer /> },
      { title: 'FastAPI', icon: <FaPython /> }
    ]
  },
  {
    section: 'Data Engineering and Tools',
    skills: [
      { title: 'Airflow', icon: <FaFan /> },
      { title: 'Docker', icon: <FaDocker /> },
      { title: 'Kafka', icon: <FaProjectDiagram /> }
    ]
  },
  {
    section: 'Databases',
    skills: [
      { title: 'MySQL', icon: <FaDatabase /> },
      { title: 'MongoDB', icon: <FaDatabase /> },
      { title: 'Clickhouse', icon: <FaCube /> },
      { title: 'Elasticsearch', icon: <FaDatabase /> }
    ]
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Music Genre Classification',
    description: 'kcndjc  kjddds bds dlksdn s kcndjc  kjddds bds dlksdn s kcndjc  kjddds bds dlksdn s kcndjc  kjddds bds dlksdn s kcndjc  kjddds bds dlksdn s kcndjc  kjddds bds dlksdn s ',
    tags: ["Machine Learning", "Neural Networks"],
    details: [
      {
        icon: <FiFileText />,
        title: '',
        desc: 'Acquired GTZAN dataset from Kaggle and built various machine learning and deep learning methods for multi-class classification.\n' +
            'Attained a peak accuracy of 92% using Neural Networks and 85% with K-Nearest Neighbors (KNN) techniques.\n',

      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    description: '',
    tags: ["Machine Learning", "Neural Networks"],
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    description: '',
    tags: ["Machine Learning", "Neural Networks"],
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    description: '',
    tags: ["Machine Learning", "Neural Networks"],
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    description: '',
    tags: ["Machine Learning", "Neural Networks"],
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    description: '',
    tags: ["Machine Learning", "Neural Networks"],
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
