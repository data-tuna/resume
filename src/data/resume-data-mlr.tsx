import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ata Tuna",
  initials: "AT",
  location: "London, UK",
  about: "",
  summary: (
    <>
MRes graduate in Artificial Intelligence and Machine Learning from Imperial College London, specialising in generative models for structured graph and combinatorial data, with methods directly transferable to molecular interaction modelling and drug discovery. Seeking Machine Learning Research Engineer roles.</>
  ),
    summaryPlainText: "MRes graduate in Artificial Intelligence and Machine Learning from Im  perial College London, specialising in generative models over structured graph and combinatorial data. Experienced in translating research models into scalable PyTorch implementations, with strong mathematical foundations and direct applicability to molecular interaction modelling, structure-based drug design, and biological networks. Seeking Machine Learning Research Engineer roles.",
  avatarUrl: "", // Added to match type if needed, though not used in compact view
  personalWebsiteUrl: "https://data-tuna.github.io/resume", // Placeholder
  contact: {
    email: "ata.tuna.work@gmail.com",
    tel: "+44 739 253 0859",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/data-tuna",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ata-tuna/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Imperial College London",
      degree: "Master of Research (MRes) in Artificial Intelligence & Machine Learning",
      start: "Oct 2023",
      end: "Oct 2024",
      description: "2:1",
    },

    {
      school: "University of Edinburgh",
      degree: "Bachelor of Science (BSc) in Mathematics & Statistics",
      start: "Sep 2018",
      end: "May 2023",
      description: "2:1; transferred from Mechanical Engineering in second year.",
    },
  ],
  work: [

      {
      company: "M&C Saatchi World Services",
      link: "https://mcsaatchiworldservices.com/",
      badges: ["Python", "TypeScript", "FastAPI", "NetworkX", "Pyvis", "Git"],
      title: "Data Intern",
      start: "Jul 2025",
      end: "Aug 2025",
      descriptions: [
      "⦿ Developed a time-series network visualization and prediction tool using state-of-the-art DAMNETS model, enabling stakeholders to identify emerging influence patterns and forecast network evolution across social media data.",
      "⦿ Presented findings to non-technical stakeholders across multiple teams, driving adoption of network analysis for client account strategy.",
      "⦿ Top-performing intern; recommended for return offer by management and data science team."
      ],
    },
    // {
    //   company: "REEF Technology",
    //   link: "https://reeftechnology.com/",
    //   badges: ["R", "Excel"],
    //   title: "Data Intern",
    //   start: "Jul 2023",
    //   end: "Aug 2023",
    //   descriptions: [
    //     "⦿ Processed and cleaned 1000+ records from vessel and warehouse operations, standardising data quality for downstream analysis.",
    //     "⦿ Analysed and standardised structured financial contracts to improve consistency across internal audit workflows.",
    //     // "⦿ Organised and facilitated brainstorming sessions and technical workshops with software engineers to foster innovation and share the latest advancements in Generative AI.",
    //   ],
    // },

  ],
  publications: [
    '⦿ A. Tuna, "A Deep Autoregressive Model for Dynamic Combinatorial Complexes," arXiv preprint, 2025. DOI: 10.48550/arXiv.2503.01999.',
  ],
  skills: [
    "Deep Learning",
    "Generative Models",
    "Graph Neural Networks",
    "Statistical Modeling and Evaluation",
    "Topological Data Analysis",
    "Network Science",
    "Bayesian Inference",
    "Stochastic Calculus",
    "Linear Algebra",
  ]
  
  ,
  languages: [
    "English (Fluent)",
    "Turkish (Native)",
    "German (B2)",
    "French (A1)",
  ],
  projects: [
   
    
    {
      title: "DAMCC",
      techStack: [
        "PyTorch", 
        "Scikit-Learn", 
        "NetworkX", 
        "TopoModelX",
        "Torch-Geometric"
      ],
      description:
"Developed a novel autoregressive generative model for structured, high-dimensional graph and combinatorial data (arXiv:2503.01999). Implemented the model in PyTorch with custom loss functions, evaluation pipelines, and memory-aware handling of sparse, high-dimensional structures.",
      // "Developed a novel deep autoregressive model for dynamic combinatorial complexes, enabling structured prediction in high-dimensional networks (arXiv:2503.01999).",
      link: {
        label: "arXiv:2503.01999",
        href: "https://arxiv.org/abs/2503.01999",
      },
    },
    {
      title: "Pabu",
      techStack: [
        "LangChain",
        "LangGraph",
        "Pydantic",
        "React",
        "FastAPI",
        "Node.js",
      ],
      award: "3rd Place",
      description:
        // "Won 3rd Place at the AI Engine Hackathon. Joined the founder team to enhance the real-time content analysis system that intelligently blocks distracting websites.",
      "Co-designed and implemented a Chrome extension for AI-driven content filtering, selectively blocking distracting online material while allowing context-relevant resources. The project was developed collaboratively during the AI Engine Hackathon and awarded 3rd Place for Best Use of ACI.dev Unified MCP.",
        link: {
        label: "Pabu",
        href: "https://pabu.app/",
      },
    },
    {
      title: "HYPED",
      techStack: [
        "SolidWorks",
        "MATLAB",
        "COMSOL",
      ],
      award: "UK Winner",
      description:
        // "Served as Stability Engineer for the UK's top Hyperloop team and received awards from SpaceX, Virgin Hyperloop One, and the Institution of Civil Engineers. Participated in the finals at SpaceX, California.",
      
      "Designed and oversaw manufacture of the monorail–pod structural interface, enabling stable operation at speeds up to 311 km/h, for the UK’s leading Hyperloop team; the project was recognised by SpaceX, Virgin Hyperloop One, and the Institution of Civil Engineers, and reached SpaceX finals in Los Angeles.",

link: {
        label: "hyped",
        href: "https://www.hyp-ed.com/",
      },
      },

  ],

  volunteering: [
    {
      title: "MathClans Leader",
      organization: "University of Edinburgh, School of Mathematics",
      start: "Sep 2021",
      end: "Aug 2022",
      descriptions: [
      "⦿ Fostered a sense of community by leading peer integration initiatives for new students.",
      "⦿ Organised academic and social events supporting student engagement and departmental cohesion.",
      ],
    },
    {
      title: "Programme Representative, Academic Societies Representative",
      organization: "Edinburgh University Students' Association",
      start: "Oct 2019",
      end: "Aug 2022",
      descriptions: [
        //      "⦿ Programme Representative (Sep 2021–Aug 2022): Represented third-year Mathematics students, gathered academic feedback, and contributed to Student-Staff Liaison Committee.",
      //       "⦿ Academic Societies Representative (Oct 2019–May 2020): Acted as liaison between academic societies and the Students' Association, participating in governance processes including motions, proposals, and council decisions.",
      "⦿ Gathered feedback and represented third-year Mathematics students in the Student-Staff Liaison Committee.",
      "⦿ Liaised between academic societies and the Association, contributing to governance via motions and proposals.",
      ],
    },
  ],
} as const;
