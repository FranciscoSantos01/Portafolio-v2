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
    link:'https://github.com/FranciscoSantos01/proyecto_final_coder_react'
  },
  {
    name:'Quiz App',
    img: Lego,
    description: 'Web page where you can practice your react knowledge',
    tech:['React','hmtl', 'css3','zustand'],
    link:'https://github.com/FranciscoSantos01/React-Quizz-App'
  },
  {
    name:'Tic Tac Toe',
    img: TicTacToe,
    description: 'Web page where you can play the famous tic tac toe',
    tech:['React','hmtl', 'css3'],
    link:'https://github.com/FranciscoSantos01/Tic-tac-toe-React'
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
    link:' https://www.linkedin.com/in/francisco-santos-a6973a1ab/'
  },
  {
    name:'Github',
    icon: 'https://th.bing.com/th?id=OIP.YyOMn9wj8tZCEyCPTYGlegHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    link:'https://github.com/FranciscoSantos01'
  }
]

  export {services,Educations,technologies,projects, socials}