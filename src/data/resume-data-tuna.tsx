import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tuna Gönen",
  initials: "TG",
  location: "London, UK",
  about: "",
  summary:
    "Full stack data scientist experienced on building data visualization and natural language processing applications, proficient in Python and Typescript, interested in large models and music AI.",
  contact: {
    email: "tunagonen@gmail.com",
    tel: "+447904872456",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tunagonen",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tuna-g%C3%B6nen-024340b6/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Oxford",
      degree: "MEng (Master of Engineering in Engineering Science)",
      start: "2015",
      end: "2021",
      description: "2.i",
    },
  ],
  work: [
    {
      company: "Red Sift",
      link: { href: "https://redsift.com" },
      badges: [],
      title: "Data Scientist",
      start: "Dec 2022",
      end: null,
      descriptions: [
        "⦿ Training of NLP models for proof-of-concept projects on text classification, utilizing both publicly available datasets and custom data collection through web scraping techniques.",
        "⦿ Engineered and maintained scripts and Jupyter notebooks for the robust evaluation and monitoring of models in production environments, ensuring high reliability and performance.",
        "⦿ Led the implementation and experimentation of new product features, incorporating new NLP methodologies such as fine-tuning of large language models (LLMs), and developing sophisticated systems through function calling and retrieval-augmented generation techniques.",
        "⦿ Organized and facilitated brainstorming sessions and technical workshops with software engineers to foster innovation and share the latest advancements in Generative AI.",
      ],
    },
    {
      company: "King's College, Human Centred Computing Group",
      link: { href: "https://www.kcl.ac.uk/research/hcc" },
      badges: [],
      title: "Research Software Engineer",
      start: "Mar 2022",
      end: "Dec 2022",
      descriptions: [
        "⦿ Co-led the full-stack development of a visualization system tailored for epigenetics researchers, facilitating the exploration of connections between DNA methylation patterns and complex human traits using advanced network summarization and community detection algorithms.",
        "⦿ Orchestrated interdisciplinary meetings with computer scientists and domain experts to benchmark existing systems and identify novel research opportunities in multi-omics data integration and analysis.",
      ],
    },
    {
      company: "University of Oxford, e-Research Center",
      link: { href: "https://oerc.ox.ac.uk/" },
      badges: [],
      title: "Research Software Engineer",
      start: "Jul 2021",
      end: "Feb 2022",
      descriptions: [
        "⦿ Responsible for the full-stack development of a multidimensional time-series search, visualization, and prediction system, empowering health experts and decision-makers to dissect and compare global pandemic trends. Incorporated time-series similarity and clustering algorithms, complemented by uncertainty visualization, to deliver critical insights.",
        "⦿ Partnered with a diverse team of academics from machine learning and data visualization fields to forge interactive Observable notebooks which includes state-of-the-art data-mining techniques and innovative dashboard designs tailored for helping governmental decision-making capabilities.",
        "⦿ Directed and refined iterative online surveys, and orchestrated 'think aloud' feedback sessions with target users to pinpoint necessary system enhancements and optimize user interface design.",
      ],
    },
  ],
  publications: [
    '⦿ T. Gonen et al., "Visual Analytics based Search-Analyze-Forecast Framework for Epidemiological Time-series Data," 2023 IEEE VIS Workshop on Visualization for Pandemic and Emergency Responses (Vis4PandEmRes), Melbourne, Australia, 2023.',
    '⦿ J. Dykes et al., "Visualization for epidemiological modelling: challenges, solutions, reflections and recommendations" Phil. Trans. R. Soc. , 2022.',
  ],
  skills: [
    "Statistical Modelling and Evaluation",
    "Model Deployment and Monitoring",
    "Web Development with Next.js",
  ],
  projects: [
    {
      title: "Red Sift Radar",
      techStack: ["Next.js", "LLM APIs", "GraphQL", "BigQuery", "Vercel"],
      description:
        "Chatbot with RAG and function calling abilities for cybersecurity applications",
      link: {
        label: "Redsift Radar",
        href: "https://radar.redsift.com",
      },
    },
    {
      title: "Red Sift OnInbox & VendorSecure",
      techStack: [
        "Web Scraping",
        "Scikit-Learn",
        "PyTorch",
        "Docker",
        "AWS",
        "Datadog",
      ],
      description:
        "Supply chain threat detection and security monitoring system using NLP models",
    },
    {
      title: "VASAP",
      techStack: ["Next.js", "d3.js", "FastAPI", "Scikit-Learn"],
      description:
        "COVID timeseries similarity-based query and prediction engine.",
      link: {
        label: "VASAP Rampvis",
        href: "https://github.com/ScottishCovidResponse/",
      },
    },
    {
      title: "VATS",
      techStack: ["Next.js", "Sigma.js", "d3.js", "FastAPI"],
      description:
        "Circular plots and network diagrams for multi-omic datasets used by epigenetics researchers.",
    },
  ],
} as const;
