export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  skills: string[];
  tools: string[];
  impact: string;
  featured?: boolean;
  image?: string;
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "Immersive Wayfinding in VR",
    category: "VR / Research",
    description:
      "Designed and developed a VR navigation prototype exploring spatial cognition and landmark-based wayfinding in unfamiliar virtual environments.",
    skills: ["Spatial interaction design", "User testing", "3D prototyping"],
    tools: ["Unity", "C#", "Oculus SDK", "Blender"],
    impact:
      "Published findings on how landmark density affects navigation accuracy, contributing to ongoing HCI research at the lab.",
    featured: true,
    links: [
      { label: "Demo", url: "#" },
      { label: "Writeup", url: "#" },
    ],
  },
  {
    title: "Distributed Task Scheduler",
    category: "Backend / Systems",
    description:
      "Built a fault-tolerant distributed task scheduler that handles job queuing, retry logic, and worker coordination across multiple nodes.",
    skills: ["Distributed systems", "Concurrency", "API design"],
    tools: ["Go", "gRPC", "Redis", "Docker"],
    impact:
      "Reduced average job completion latency by 40% compared to the team's previous single-node approach.",
    featured: true,
    links: [
      { label: "GitHub", url: "#" },
    ],
  },
  {
    title: "Procedural Dungeon Crawler",
    category: "Game Development",
    description:
      "Developed a roguelike dungeon crawler with procedurally generated levels, real-time combat, and adaptive difficulty scaling.",
    skills: ["Game architecture", "Procedural generation", "State machines"],
    tools: ["Unity", "C#", "Photoshop"],
    impact:
      "Showcased at a university game expo; received recognition for level design and replayability.",
    featured: true,
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
  {
    title: "Campus Accessibility Audit Platform",
    category: "HCI / Full-Stack",
    description:
      "Led a team to build a web platform enabling students to report and map accessibility barriers across campus infrastructure.",
    skills: ["Team leadership", "Full-stack development", "UX research"],
    tools: ["React", "Node.js", "PostgreSQL", "Mapbox"],
    impact:
      "Adopted by the university's disability services office for ongoing infrastructure reviews.",
    featured: true,
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
      { label: "Writeup", url: "#" },
    ],
  },
  {
    title: "Student Org Operations Toolkit",
    category: "Leadership / Product",
    description:
      "Designed and shipped internal tools for a 200-member student organization — including event management, member tracking, and communications dashboards.",
    skills: ["Product thinking", "Stakeholder management", "System design"],
    tools: ["React", "Firebase", "Figma"],
    impact:
      "Cut administrative overhead by roughly 60%, freeing the leadership team to focus on programming.",
    links: [
      { label: "GitHub", url: "#" },
    ],
  },
];

export const categories = Array.from(new Set(projects.map((p) => p.category)));
