import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  detailed?: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const ProjectCard = ({ project, index, detailed = false }: ProjectCardProps) => {
  const Wrapper = project.link ? "a" : "div";
  const wrapperProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeInUp}
    >
      <Wrapper
        {...(wrapperProps as any)}
        className="group flex flex-col h-full bg-card rounded-lg border border-border p-5 shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
      >
        {/* Category & link icon */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-body tracking-widest uppercase text-primary">
            {project.category}
          </span>
          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
        </div>

        {/* Title */}
        <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className={`font-body text-sm text-muted-foreground leading-relaxed mb-4 ${detailed ? "" : "line-clamp-2"}`}>
          {project.description}
        </p>

        {/* Impact (detailed only) */}
        {detailed && (
          <p className="text-xs font-body text-muted-foreground italic mb-3">
            {project.impact}
          </p>
        )}

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-xs font-body px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </Wrapper>
    </motion.div>
  );
};

export default ProjectCard;
