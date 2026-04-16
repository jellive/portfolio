export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Threat Crawler",
    description: "Dark web & OSINT threat intelligence platform",
    tech: ["Python", "NestJS", "Next.js", "PostgreSQL", "Elasticsearch"],
    github: "https://github.com/jellive/threat-crawler",
    featured: true,
  },
  {
    title: "Cookting (쿡팅)",
    description: "AI-powered smart fridge & recipe recommendation",
    tech: ["Flutter", "NestJS", "Next.js", "PostgreSQL", "AI"],
    featured: true,
  },
  {
    title: "IOC Scanner",
    description: "CLI + Web threat intelligence indicator scanner",
    tech: ["TypeScript", "Node.js", "Next.js"],
    github: "https://github.com/jellive/ioc-scanner",
    featured: true,
  },
  {
    title: "Vinjari (빈자리)",
    description: "Real-time camping site vacancy alert mobile app",
    tech: ["Flutter", "Spring Boot", "PostgreSQL", "Firebase"],
    featured: false,
  },
  {
    title: "Dev Utils Hub",
    description: "Electron-based developer utility toolkit with 13 tools",
    tech: ["Electron", "React", "TypeScript"],
    featured: false,
  },
  {
    title: "Wecanner",
    description: "Weekly schedule widget app for iOS and Android",
    tech: ["Flutter", "Swift", "WidgetKit"],
    featured: false,
  },
];
