import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  // Show max 4 tools only
  const displayTools = project.tools.slice(0, 4);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group flex flex-col h-full bg-card rounded-lg border border-border shadow-card hover:shadow-elevated transition-shadow duration-300 ease-out"
    >
      {/* Image */}
      <div className="aspect-[16/9] rounded-t-lg overflow-hidden bg-muted">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-muted-foreground/40 font-body text-sm group-hover:scale-[1.04] transition-transform duration-500 ease-out">
            {project.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-4 py-3.5 gap-1.5">
        {/* Category */}
        <span className="text-xs font-body tracking-widest uppercase text-primary">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description — 2 lines max */}
        <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tools (max 4, inline text) */}
        <p className="text-xs font-body text-foreground/70">
          {displayTools.join(" · ")}
        </p>

        {/* Impact — single line */}
        <p className="text-xs font-body text-muted-foreground italic line-clamp-1">
          {project.impact}
        </p>

        {/* Link buttons */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-xs font-body font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors duration-200"
              >
                <ExternalLink className="h-3 w-3" />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
