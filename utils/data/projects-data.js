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
  SiTypescript,
  SiEthereum,
  SiFastapi,
  SiSolidity,
  SiIpfs
} from "react-icons/si";

  export const projects = [
    {
      id: "project-0",
      title: "FundVerify",
      github: "https://github.com/Sagarshivalingappaathani/Public-Fund-Management",
      link: "",
      demo: "https://www.youtube.com/watch?v=lmQ_og4sBYg",
      image: "/project/fundverify.png",
      content:
        "Built a decentralized public fund management system using Ethereum smart contracts with multi-stage fund allocation, ensuring transparency and accountability. Implemented secure voting with Zero-Knowledge Proofs and Soulbound Tokens for verified identity. Automated fund disbursement with AI-powered verification using LangChain and RAG models to validate IPFS-hosted reports.",
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
          icon: SiSolidity,
          name: "Solidity"
        },
        {
          id: "icon-4",
          icon: SiEthereum,
          name: "Ethereum"
        },
        {
          id: "icon-5",
          icon: SiIpfs,
          name: "IPFS"
        },
      ],
    },
    {
      id: "project-1",
      title: "TrustFlow",
      github: "https://github.com/Sagarshivalingappaathani/TrustFlow",
      link: "",
      demo: "https://www.youtube.com/watch?v=PganpPv28KU&themeRefresh=1",
      image: "/project/trustflow.png",
      content:
        "Built an agentic supply chain management platform on Ethereum with complete product traceability and 6-stage delivery pipeline. Developed autonomous AI agents that analyze market conditions, execute blockchain transactions, and generate PDF reports. Implemented smart contracts for supplier-buyer relationships, QR-based order tracking, and Razorpay UPI payment integration.",
      stack: [
        {
          id: "icon-1",
          icon: SiNextdotjs,
          name: "Next.js"
        },
        {
          id: "icon-2",
          icon: SiTypescript,
          name: "TypeScript"
        },
        {
          id: "icon-3",
          icon: SiEthereum,
          name: "Ethereum"
        },
        {
          id: "icon-4",
          icon: SiFastapi,
          name: "FastAPI"
        },
        {
          id: "icon-5",
          icon: SiTailwindcss,
          name: "TailwindCSS"
        },
      ],
    },
    {
      id: "project-2",
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
    },
  ];
  
  