import Web from '../assets/web.png'
import Mobile from '../assets/mobile.png'
import  Style from '../assets/style.png'
import React from '../assets/reactjs.png'
import Css from '../assets/css.png'
import Figma from '../assets/figma.png'
import HTML from '../assets/html.png'
import Node from '../assets/nodejs.png'
import Redux from '../assets/redux.png'
import Tailwind from '../assets/tailwind.png'
import Javascript from '../assets/javascript.png'
import Git from '../assets/git.png'
import Mongo from '../assets/mongodb.png'
import Github from '../assets/github.png'

import Gym from '../assets/images/gym1.jpeg'
import Ecommerce from '../assets/images/ecommerce.png'
import Lego from '../assets/lego.png'
import TicTacToe from '../assets/tic.png'
import Tracker from '../assets/images/tracker.webp'
import Food from '../assets/food.png'
const services = [
    {
      title: "Web Developer",
      icon: Web,
    },
    {
      title: "React Native Developer",
      icon: Mobile,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    {
      title: "Design",
      icon: Style,
    },
  ];

const Educations = [
  {
    title:'Coder house',
    icon:'https://res.cloudinary.com/hdsqazxtw/image/upload/v1559681445/logo_coderhouse_1_rec5vl.png',
    iconBg: 'white',
    date: "September 2021 - July 2022",
    points: [
       "Web Development",
       "React js",
       "UX/UI Designer",
       "Mobile Application Development: React native"
    ],
  },
  {
    title:'Code Academy',
    icon:'https://th.bing.com/th/id/OIP.0M5Jaujvzrffe3gsrr9DNgHaHa?pid=ImgDet&rs=1',
    iconBg: 'white',
    date: "April 2022 - May 2022",
    points: [
       "Learn Javascript",
       "Building Interactive Javascript Websites"
    ],
  },
  {
    title:'Udemy',
    icon:'https://th.bing.com/th/id/OIP.dyGbEFscguIDgUaLxiSeDwHaEK?w=263&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    iconBg: 'white',
    date: "November 2022 - March 2023",
    points: [
       "React Zero to Expert: Hooks & MERN",
       
    ],
  },
  {
    title:'Universidad Siglo 21',
    icon:'data:image/png;base64,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',
    iconBg: 'white',
    date: "May 2023 - March 2027",
    points: [
       "Bachelor's Degree in Computer Science ",
    ],
  },
]
const technologies = [
  {
    name: "HTML 5",
    icon: HTML,
  },
  {
    name: "CSS 3",
    icon: Css,
  },
  {
    name: "JavaScript",
    icon: Javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: React,
  },
  {
    name: "Redux Toolkit",
    icon: Redux,
  },
  {
    name: "Tailwind CSS",
    icon: Tailwind,
  },
  {
    name: "Node JS",
    icon: Node,
  },
  {
    name: "MongoDB",
    icon: Mongo,
  },
  // {
  //   name: "Three JS",
  //   // icon: threejs,
  // },
  {
    name: "git",
    icon: Git,
  },
  {
    name: "figma",
    icon: Figma,
  },
 
];

const projects = [
  {
    name:'Africa Clothing',
    img:Ecommerce,
    description: 'E-commerce that allows users to buy clothes such as t-shirts, hoodies and trousers.',
    tech:['reactjs','firebase', 'boostrap'],
    link:'https://github.com/FranciscoSantos01/React-CODER'
  },
  {
    name:'Quiz App',
    img: Lego,
    description: 'Web page where you can practice your react knowledge',
    tech:['React','hmtl', 'css3','zustand'],
    link:'https://github.com/FranciscoSantos01/React-Quizz-App'
  },
  {
    name:'Shortify',
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/erg4fyzl3bu0r4kwcvvq.jpg',
    description: 'Web page where you short your urls',
    tech:['React','zustand', 'tailwind','node js','express js','mongo DB'],
    link:'https://github.com/FranciscoSantos01/shortify-front'
  },
  {
    name:'Tracker App',
    img: Tracker,
    description: 'Web App where only by putting the domain or ip you can see the location in the map from where it comes from ',
    tech:['javascript','hmtl', 'css3'],
    link:'https://github.com/FranciscoSantos01/trackerApi'
  },
  {
    name:'Gym app',
    img: Gym,
    description: 'Mobile App which counts with all the tools to have an efficient training and also keep track of your progress',
    responsibility: "Login & register of the app" ,
    tech:['React native','mongo', 'nodejs'],
    link:'https://github.com/No-Country/c7-38-m-reactnative'
  },
  {
    name:'Food app',
    img: Food,
    description: 'Mobile App where you can order food',
    tech:['React native','Firebase', 'Redux'],
    link:'https://github.com/FranciscoSantos01/FoodApp'
  },
  {
    name:'Pro-Grama',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbW5LV5QOyD_ApPLdF-Y_lSncx7EzgxepunA&usqp=CAU",
    description: 'Web application that offers a wide variety of programming courses in different languages and levels, from beginner to advanced.',
    responsibility: "Login & register, Folder structure of the project, general routing of the web page, profile section" ,
    tech:['React js','mongo', 'nodejs'],
    link:'https://github.com/No-Country/s6-02-m-java-react'
  },

]
const socials = [
  {
    name:'Linkedin',
    icon: "https://th.bing.com/th?id=OIP.FPjQ2OolWgNHEDLXkIf98AHaF2&w=281&h=222&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    link:' https://www.linkedin.com/in/franciscosantosaraoz/'
  },
  {
    name:'Github',
    icon: 'https://th.bing.com/th?id=OIP.YyOMn9wj8tZCEyCPTYGlegHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    link:'https://github.com/FranciscoSantos01'
  }
]

  export {services,Educations,technologies,projects, socials}