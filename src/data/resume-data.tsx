import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ata Tuna",
  initials: "AT",
  location: "London, UK",
  about: "",
  summary: "Detail-oriented Machine Learning & AI Research Master's Graduate. My research’s focus was on generative models for networks and topological structures.",
  contact: {
    email: "ata.tuna@email.com",
    tel: "+44 739 253 0859",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Ata-Tuna",
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
      degree: "MRes Artificial Intelligence & Machine Learning",
      start: "Oct 2023",
      end: "Oct 2024",
      description: "2.i",
    },

    {
      school: "University of Edinburgh",
      degree: "BSc Mathematics & Statistics",
      start: "Sep 2018",
      end: "May 2023",
      description: "2.i, in second year I transferred from mechanical engineering.",
    },
  ],
  work: [
    {
      company: "REEF Technology",
      link: "https://reeftechnology.com/",
      badges: ["Remote", "R", "Excel"],
      title: "Data Intern",
      start: "July 2023",
      end: "August 2023",
      descriptions: [
        "⦿ Clean datasets collected on the field such as vessels and warehouses.",
        "⦿ Read simple financial contracts.",
        // "⦿ Organized and facilitated brainstorming sessions and technical workshops with software engineers to foster innovation and share the latest advancements in Generative AI.",
      ],
    },
  ],
  publications: [
    '⦿ Tuna, A. (2025). A Deep Autoregressive Model for Dynamic Combinatorial Complexes. Zenodo. https://doi.org/10.5281/zenodo.14907028',
  ],
  skills: [
    "Statistical Modelling and Evaluation",
    "Model Deployment and Monitoring",
    "Web Development with Next.js",
  ],
  projects: [
    {
      title: "DAMCC",
      techStack: ["PyTorch", "Docker", "Scikit-Learn", "NetworkX", "Torch-Geometric"],
      description:
        "The first deep learning model designed to generate dynamic combinatorial complexes (CCs)",
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
      description:
        "LLM based tax management system developed during and after AI Ventures Hackathon organised by Imperial's Business School.",
    },

  ],

  volunteering: [
    {
      title: "MathClans Leader",
      organization: "University of Edinburgh, School of Mathematics",
      start: "Sep 2021",
      end: "Aug 2022",
      descriptions: [
        "⦿ Successfully created a sense of community within the School of Mathematics, helping to integrate new students.",
        "⦿ Organized events and promoted activities related to MathClans throughout the year with the support of the School of Mathematics.",
      ],
    },
    {
      title: "Programme Representative",
      organization: "Edinburgh University Students' Association",
      start: "Sep 2021",
      end: "Aug 2022",
      descriptions: [
        "⦿ Represented 3rd year students at the School of Mathematics, University of Edinburgh.",
        "⦿ Gathered feedback from students and communicated it to relevant staff through Student Staff Liaison Committee meetings.",
      ],
    },
    {
      title: "Academic Societies Representative",
      organization: "Edinburgh University Students' Association",
      start: "Oct 2019",
      end: "May 2020",
      descriptions: [
        "⦿ Conveyed ideas and concerns regarding academic societies.",
        "⦿ Participated in decision-making processes, including motions, proposals, and council voting.",
      ],
    },
  ],
} as const;
