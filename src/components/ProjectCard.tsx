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
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeInUp}
      className="group flex flex-col h-full bg-card rounded-lg border border-border shadow-card hover:shadow-elevated transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-[4/3] rounded-t-lg overflow-hidden bg-muted">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-muted-foreground/40 font-body text-sm group-hover:scale-[1.03] transition-transform duration-500">
            {project.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Category */}
        <span className="text-xs font-body tracking-widest uppercase text-primary">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors duration-200 -mt-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tools / Skills (inline text) */}
        <p className="text-xs font-body text-foreground/70 leading-relaxed">
          {[...project.tools, ...project.skills].join(" · ")}
        </p>

        {/* Impact */}
        <p className="text-xs font-body text-muted-foreground italic leading-relaxed">
          {project.impact}
        </p>

        {/* Link buttons */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-body font-medium px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors duration-200"
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
