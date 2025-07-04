import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiNextdotjs,
  SiFirebase,
  SiExpress,
  SiNodedotjs,
  SiHtml5,
  SiMongodb,
  SiGooglecalendar,
  SiTensorflow,
  SiBlockchaindotcom,
  SiStreamlit,
  SiJupyter,
  SiDjango,
  SiSolidity
} from "react-icons/si";

export const projects = [
  {
    id: "project-0",
    title: "FundVerify",
    github: "https://github.com/Sagarshivalingappaathani/Public-Fund-Management",
    link: "",
    demo: "https://youtu.be/lmQ_og4sBYg?feature=shared",
    image: "/project/fundverify.png",
    content: "A decentralized government fund management system combining blockchain and AI. Features smart contracts for transparent fund allocation, public voting via Soulbound Tokens, and AI-powered verification using RAG and LangChain for automated document analysis. Includes staged fund distribution with IPFS storage and comprehensive verification checks.",
    stack: [
      {
        id: "icon-1",
        icon: SiNextdotjs,
        name: "Next.js"
      },
      {
        id: "icon-2",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-3",
        icon: SiDjango,
        name: "Django"
      },
      {
        id: "icon-4",
        icon: SiTensorflow,
        name: "LangChain"
      }
    ],
  },
  {
    id: "project-1",
    title: "LetsCode",
    github: "https://github.com/Sagarshivalingappaathani/letsCode-Coding-Platform",
    link: "https://lets-code-pink.vercel.app/",
    demo: "https://www.youtube.com/watch?v=Ax2vHEGnrkU",
    image: "/project/letscode.png",
    content:
     "This platform is designed to resemble popular coding websites such as LeetCode and GeeksforGeeks.Its primary purpose is to assist users in competitive coding. Users can solve coding problems and track their progress, including the number of problems they've solved in each topic.Additionally, they can participate in coding contests.",
      stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "Javascript",
        
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js"
      },
      {
        id: "icon-4",
        icon: SiFirebase,
        name: "Firebase"
      },
    ],
  },
  {
    id: "project-2.1",
    title: "Cyber Threat Detection",
    github: "https://github.com/Sagarshivalingappaathani/Cyber-Threat-Detection",
    link: "",
    demo: "",
    image: "/project/cyber.png",
    content:
     "This project focuses on network intrusion detection using the UNSW-NB15 dataset. It preprocesses data through feature engineering, outlier handling, and categorical encoding. To address class imbalance, SMOTE is applied. The model is trained using XGBoost and Random Forest, with performance evaluated through cross-validation using accuracy, precision, recall, and F1-score.",
      stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python",
        
      },
      {
        id: "icon-2",
        icon: SiJupyter,
        name: "Jupyter-Notebook"
      },
    ],
  },
  {
    id: "project-2.2",
    title: "Decentralized Exchange",
    github: "https://github.com/Sagarshivalingappaathani/liquidity-pool",
    link: "",
    demo : "",
    image: "/project/dex.png",
    content:
      "This project implements a Decentralized Exchange (DEX) with features for token creation, liquidity pooling, and token swapping. Token metadata is securely stored on Pinata for decentralized file storage. The Constant Product Market Maker (CPMM) algorithm powers the liquidity pool, ensuring efficient token swaps. Users can seamlessly trade tokens as long as a liquidity pool exists",
       stack: [
      {
        id: "icon-1",
        icon: SiNextdotjs,
        name: "Next.js"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiBlockchaindotcom,
        name: "Block-Chain"
      },
    ],
  },
  {
    id: "project-4",
    title: "IPL-Win-Probability",
    github: "https://github.com/Sagarshivalingappaathani/ipl-win-probability",
    link: "https://ipl-match-winning-probability.streamlit.app/",
    demo : "",
    image: "/project/Ipl.jpg",
    content:
      "The IPL Win Predictor is a platform designed to predict the outcome of IPL matches using Machine Learning. Users can select the batting team, bowling team, host city, and enter match details like target score, current score, overs completed, and wickets lost. The model processes this data to provide real-time win probability, helping users analyze match scenarios effectively.",
      stack: [
        {
          id: "icon-1",
          icon: SiPython,
          name: "Python"
        },
        {
          id: "icon-2",
          icon: SiStreamlit,
          name: "Streamlit"
        },
      ],
  },
  {
    id: "project-3",
    title: "Club Events Manegement System",
    github: "https://github.com/Sagarshivalingappaathani/Club-Event-Management-System",
    link: "",
    demo : "https://github.com/Sagarshivalingappaathani/Club-Event-Management-System",
    image: "/project/cems.png",
    content:
      "The Club Event Management System is a comprehensive web application built to streamline event organization within clubs or organizations. Powered by Mycalendar.js library. Users can explore upcoming events, register for participation, and provide feedback for concluded Events.",
      stack: [
      {
        id: "icon-1",
        icon: SiNextdotjs,
        name: "Next.Js"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiNodedotjs,
        name: "Express.Js"
      },
      {
        id: "icon-4",
        icon: SiGooglecalendar,
        name: "MyCalender.js"
      },
    ],
  }
];

