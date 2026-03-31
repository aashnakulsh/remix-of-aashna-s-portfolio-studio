import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  skills: string[];
  tools: string[];
  impact: string;
}

const projects: Project[] = [
  {
    title: "Immersive Wayfinding in VR",
    category: "VR / Research",
    description:
      "Designed and developed a VR navigation prototype exploring spatial cognition and landmark-based wayfinding in unfamiliar virtual environments.",
    skills: ["Spatial interaction design", "User testing", "3D prototyping"],
    tools: ["Unity", "C#", "Oculus SDK", "Blender"],
    impact:
      "Published findings on how landmark density affects navigation accuracy, contributing to ongoing HCI research at the lab.",
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
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-3">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="group grid md:grid-cols-12 gap-6 bg-card rounded-lg border border-border p-6 md:p-8 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Image placeholder */}
              <div className="md:col-span-4 aspect-[4/3] rounded-md bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-muted-foreground/40 font-body text-sm group-hover:scale-[1.02] transition-transform duration-500">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-8 flex flex-col justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-body tracking-widest uppercase text-primary mb-1">
                        {project.category}
                      </p>
                      <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 shrink-0" />
                  </div>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-body tracking-wide uppercase text-muted-foreground mb-1.5">
                      Skills
                    </p>
                    <p className="text-sm font-body text-foreground">
                      {project.skills.join(" · ")}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-body px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-body text-muted-foreground italic">
                    {project.impact}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
