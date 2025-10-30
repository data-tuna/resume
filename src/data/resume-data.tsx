import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ata Tuna",
  initials: "AT",
  location: "London, UK",
  about: "",
  summary: (
    <>
MRes graduate in Artificial Intelligence and Machine Learning from Imperial College London, with research focused on generative topological deep learning and applications to information architecture, influence systems, and complex network dynamics. Currently seeking ML engineering and data science roles.    
</>
  ),
  summaryPlainText: "MRes graduate in Artificial Intelligence and Machine Learning from Imperial College London, with research focused on generative topological deep learning. My academic background integrates a strong foundation in mathematics and statistical modeling with applied machine learning. I’m particularly interested in how advanced modeling can be used to analyse information architecture, influence systems, and complex real-world dynamics.",
  // ... other data
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
      badges: ["Python", "FastAPI", "NetworkX", "Pyvis", "Typescript", "Git"],
      title: "Data Intern",
      start: "Jul 2025",
      end: "Aug 2025",
      descriptions: [
      "⦿ Developed a time-series network visualization and prediction tool using NetworkX, Pyvis, FastAPI, and the state-of-the-art DAMNETS model, enabling stakeholders to identify emerging influence patterns and forecast network evolution across social media data.",
      "⦿ Presented findings to non-technical stakeholders across multiple teams, driving adoption of network analysis for client account strategy.",
      "⦿ Recognized as top-performing intern by management and data science team."
      ],
    },
    {
      company: "REEF Technology",
      link: "https://reeftechnology.com/",
      badges: ["R", "Excel"],
      title: "Data Intern",
      start: "Jul 2023",
      end: "Aug 2023",
      descriptions: [
        "⦿ Processed and cleaned 1000+ records from vessel and warehouse operations, standardising data quality for downstream analysis.",
        "⦿ Analysed and standardised structured financial contracts to improve consistency across internal audit workflows.",
        // "⦿ Organised and facilitated brainstorming sessions and technical workshops with software engineers to foster innovation and share the latest advancements in Generative AI.",
      ],
    },

  ],
  publications: [
    '⦿ A. Tuna, "A Deep Autoregressive Model for Dynamic Combinatorial Complexes," arXiv preprint, 2025. DOI: 10.48550/arXiv.2503.01999.',
  ],
  skills: [
    "Statistical Modeling and Evaluation",
    "Topological Data Analysis",
    "Generative Models",
    "Graph Neural Networks",  
    "Deep Learning",
    "Network Science",
    "Measure Theory",
    "Stochastic Calculus",
    "Bayesian Inference",
    "Linear Algebra"


  ],
  projects: [
    {
      title: "DAMCC",
      techStack: ["PyTorch", "Scikit-Learn", "NetworkX", "Torch-Geometric", "Docker", "Git"],
      description:
        "Developed the first deep learning architecture for generating dynamic combinatorial complexes, enabling structured prediction in high-dimensional social and informational networks.",
      link: {
        label: "DAMCC",
        href: "https://github.com/Ata-Tuna/DAMCC_1.2.git",
      },
    },
    {
      title: "TaxOff",
      techStack: [
        "Web Scraping",
        "Scikit-Learn",
        "PyTorch",
      ],
      award: "",
      description:
        "LLM-based tax management system developed at the finals of Imperial's Business School AI Ventures Hackathon. I led a custom web-scraping and data preparation pipeline for model fine-tuning.",
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
        "Served as Stability Engineer for the UK's top Hyperloop team and received awards from SpaceX, Virgin Hyperloop One, and the Institution of Civil Engineers. Participated in the finals at SpaceX, California.",
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
