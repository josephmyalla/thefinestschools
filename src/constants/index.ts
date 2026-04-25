import {
  studentsphoto1,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  learningIcon,
  admissionIcon,
  feesIcon,
  sportsIcon,
  collaborationIcon,
  twitter,
  yourlogo,
  kipslogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Admission",
    url: "/admissions",
    ispublic: true
  },
  // {
  //  id: "1",
  //   title: "Academics",
  //   url: "/academics",
  //   ispublic: true
  // },
  {
    id: "2",
    title: "Sports",
    url: "/sports",
    ispublic: true
  },
  {
    id: "3",
    title: "Fees",
    url: "/fees",
    ispublic: true
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
    ispublic: true
  },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  //   ispublic: true
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = ["Ministry of Education", "PMO RALG", "NECTA", "TEA"];

export const fainestSports = [
  "Football",
  "Basketball",
  "Swimming",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  ["We follow the Curriculum of the ministry of education of Tanzania, we quickly adapt to apply curriculum apdates.",
    "We collaborate with other schools, Kips Msangani, Maryland Primary School to offer joint exams up to four times a year, this help prepare our students to be ready for any exams and testing settings.",
   ]

export const collabContent = [
  {
    id: "0",
    title: "Registered with the Ministry",
    text: collabText[0],
  },
  {
    id: "1",
    title: "Exams Testing Communities",
    text:collabText[1]
  }
];

export const collabApps = [
  {
    id: "0",
    title: "Kips Anex Primary School",
    icon: kipslogo,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Flexible installments",
    icon: feesIcon,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Open for new ideas to improve our community",
    icon: collaborationIcon,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Healthier body carries a fast catche brain",
    icon: sportsIcon,
    width: 34,
    height: 35,
  }
];

export const pricing = [
  {
    id: "0",
    title: "Pre Primary",
    description: "School transport is provided and is charged based on the distance from home to school",
    price: "720,000.00",
    features: [
      "School Fee",
      "Tea and bites",
      "Lunch",
      "Diary"
    ],
  },
  {
    id: "2",
    title: "Grade I,VII",
    description: "School transport is provided and is charged based on the distance from home to school",
    price: "950,000.00",
    features: [
      "School Fee",
      "Tea and bites",
      "Lunch",
      "Diary"
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Admission",
    text: "There are 3 import easy steps you will follow to apply for admission at the Finest Schools.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: admissionIcon,
    imageUrl: studentsphoto1,
  },
  {
    id: "1",
    title: "Learning",
    text: "At our school, learning is an adventure! We believe in nurturing curious minds and fostering a love for knowledge through innovative teaching methods and hands-on experiences.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: learningIcon,
    imageUrl: studentsphoto1,
    light: true,
  },
  {
    id: "2",
    title: "Sports",
    text: "A healthy and happier family come alive on our sports activities! From football, running, to swimming. Our programs are designed to build confidence and resilience.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: sportsIcon,
    imageUrl: studentsphoto1,
  },
  {
    id: "3",
    title: "Fees",
    text: "A Our Fees are affordable and can be paid in four Installments.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: feesIcon,
    imageUrl: studentsphoto1,
    light: true,
  },
  {
    id: "4",
    title: "Teachers and Staff",
    text: "Our teachers are qualified and dedicated to teaching students of all ages Standardized lesson plans are created to meet the need of each student and queezes are offered to help students understand complex topics.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: studentsphoto1,
  },
  {
    id: "5",
    title: "Open for improvement",
    text: "If there is anything specific that you would like to know about or would like us to include on our community you can contact the school and see how we can work together.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: collaborationIcon,
    imageUrl: studentsphoto1,
  },
];

export const socials = [
  
 {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/thefinestschools_tz"
  },
   {
    id: "1",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.instagram.com/thefinestschools_tz"
  }
];



export const quicklinks = [
 {
    id: "0",
    linktitle: "Wizara ya Elimu, Sayansi na Teknolojia",
    url: "https://www.moe.go.tz"
  },
    {
    id: "1",
    linktitle: "Ofisi ya Rais Tawala za Mikoa na Serikali za Mtaa",
    url: "https://tamisemi.go.tz"
  },
   {
    id: "2",
    linktitle: "The National Council for Technical and Vocational Education and Training",
    url: "https://www.nactvet.go.tz"
  }
];

export const partnerschools = [
  
 {
    id: "0",
    linktitle: "Kips Anex Msangani Pr School",
    url: "/#"
  },
    {
    id: "1",
    linktitle: "Maryland Primary School",
    url: "/#"
  }
];

export const applicationsteps =[
  {
    id:0,
    step:"STEP 1",
    image:"",
    title:"Submit online or download application form .",
    steps:[
      "The application form will introduce your family to the Finest Schools.",
      "Once your application form has been submitted, you will be given payment instructions.",
      "Our school has a rolling admission throughout the year. However, students applying for Grades 4-6 must enroll at the start of year (January)."
    ]
  },
  {
    id:1,
    step:"STEP 2",
    image:"",
    title:"Pay the non-refundable application Fee.",
    steps:[
      "Follow the payments instruction to complete payment of evaluation fee and submit the relevant details to the school.",
      "Complete all items on your child’s application checklist including the submission of any supplemental materials that may be requested.",
      "Then you will be given the dates and timings for the interviews.",
    ]
  },{
    id:2,
    step:"STEP 3",
    image:"",
    title:"Complete the application for consideration",
    steps:[
      "Bring your child for eveluations and interviews on the dates you were spotted.",
      "Receive the results of evaluations, which normally takes up to 5 working days. ",
      "Congratutions and welcome to the Finest Schools community."
    ]
  }
]
