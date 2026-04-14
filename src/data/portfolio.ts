import type {
  AboutContent,
  ContactInfo,
  Experience,
  HeroContent,
  Project,
  SkillCategory,
  SocialLink,
} from "@/types/portfolio";

export const heroContent: HeroContent = {
  name: "Devashish Sharma",
  role: "Frontend Engineer",
  intro:
    "Frontend Engineer with 4 years of experience architecting and developing scalable web applications using React.js, Next.js, JavaScript, and TypeScript.",
  location: "Mohali, Punjab, India",
  availability: "Open to frontend engineer opportunities",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/DevashishCoder23" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/devashishsharmafrontend/" },
  { label: "Email", href: "mailto:devashishsharma039@gmail.com" },
];

export const aboutContent: AboutContent = {
  title: "Building high-performance products with clean architecture",
  description: [
    "I specialize in architecting responsive and scalable frontend systems with strong focus on performance, maintainability, and user experience.",
    "My recent work includes enterprise-grade crypto exchange products, e-commerce platforms, and travel booking systems where I collaborated with product, backend, and QA teams.",
  ],
  highlights: [
    "Expert in React.js, Next.js, JavaScript, and TypeScript",
    "Hands-on with AI-assisted development tools for faster and higher quality delivery",
    "Strong SDLC mindset with code reviews, testing, and Agile collaboration",
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Redux Saga",
      "Zustand",
      "Ant Design",
      "Sass",
      "Micro-Frontend (Module Federation)",
    ],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Apollo Client", "WebSockets"],
  },
  {
    category: "Testing, Tools & Delivery",
    items: [
      "Jest",
      "React Testing Library",
      "CI/CD Pipelines",
      "Git",
      "GitHub",
      "GitLab",
      "Agile",
      "Scrum",
      "Jira",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "gems-exchange",
    title: "Gems Exchange",
    description:
      "Built secure, responsive trading interfaces for a large-scale crypto exchange. Integrated TradingView charts, depth charts, and real-time market streams for order books, trades, and price updates.",
    techStack: ["React.js", "TypeScript", "Sass", "Redux Toolkit", "React Context", "WebSockets"],
    category: "frontend",
    image: "/projects/gems-exchange.svg",
    liveDemo: "https://www.gems.trade/",
  },
  {
    id: "coinhub",
    title: "Coinhub",
    description:
      "Optimized performance for large-scale market datasets and built reusable, scalable components with clean frontend architecture. Delivered real-time charting and market updates with WebSockets.",
    techStack: ["React.js", "TypeScript", "WebSockets", "TradingView", "Redux Toolkit"],
    category: "frontend",
    image: "/projects/coinhub.svg",
    liveDemo: "https://www.coinhub.mn/",
  },
  {
    id: "holibob",
    title: "Holibob",
    description:
      "Developed a large-scale e-commerce and travel booking platform for hotels, flights, buses, and tours. Implemented micro-frontend modules and optimized GraphQL API interactions with Apollo Client.",
    techStack: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "Module Federation",
      "Micro-Frontend",
    ],
    category: "fullstack",
    image: "/projects/holibob.svg",
  },
];

export const experiences: Experience[] = [
  {
    company: "Antier Solutions, Mohali",
    role: "Software Engineer",
    period: "Apr 2024 - Present",
    achievements: [
      "Worked as a Frontend Engineer on large-scale cryptocurrency exchange platforms similar to Binance.",
      "Built scalable and responsive UIs using React.js, TypeScript, JavaScript, Sass, Redux Toolkit, and React Context.",
      "Optimized frontend performance by reducing load times and improving state management with reusable components.",
      "Collaborated with backend and QA teams to implement and validate complex trading workflows and edge cases.",
      "Participated in architecture discussions, client requirement meetings, code reviews, and Agile ceremonies.",
    ],
  },
  {
    company: "Technogetic Pvt Ltd, Mohali",
    role: "React Developer",
    period: "Aug 2022 - Feb 2024",
    achievements: [
      "Built scalable e-commerce applications with React.js and Next.js focused on performance and UX.",
      "Implemented secure authentication and authorization flows for protected feature access.",
      "Delivered responsive interfaces across devices and browsers using modern CSS practices.",
      "Worked closely with product teams to refine features and ship high-quality releases.",
    ],
  },
];

export const contactInfo: ContactInfo = {
  email: "devashishsharma039@gmail.com",
  phone: "+91 86288-38334",
  location: "Mohali, Punjab, India",
  resumePath: "/Devashish_Sharma_Frontend_Engineer_4Y.pdf",
};

export const hobbies: string[] = [
  "Online learning",
  "Trekking",
  "Exploring modern web technologies",
  "Fitness and strength training",
];
