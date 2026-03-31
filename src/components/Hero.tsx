import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImg from "@/assets/portrait-placeholder.jpg";

const tags = ["Research", "Systems", "HCI", "VR", "Development"];

const Hero = () => {
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Subtle geometric accent */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-secondary/40 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-2xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full section-padding">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text content — takes 7 cols */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-3">
              <p className="text-sm font-body tracking-widest uppercase text-muted-foreground">
                Portfolio — 2025
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight">
                Aashna
                <br />
                Kulshrestha
              </h1>
            </div>

            <p className="font-display text-xl md:text-2xl text-muted-foreground italic leading-relaxed max-w-lg">
              I'm a junior computer scientist who wants to leave the world a better place than how I found it.
            </p>

            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md">
              Building at the intersection of human-centered design and technical systems.
              I care about making technology that's thoughtful, accessible, and genuinely useful — not just functional.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-body tracking-wide px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button size="lg" onClick={handleScrollToProjects} className="font-body">
                View Projects
                <ArrowDown className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="font-body" asChild>
                <a href="/resume.pdf" download>
                  <FileText className="mr-1 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Portrait — takes 5 cols, offset upward for asymmetry */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative max-w-sm mx-auto lg:ml-auto lg:-mt-8">
              {/* Layered background rectangles for depth */}
              <div className="absolute -inset-4 bg-secondary/60 rounded-lg -rotate-2" />
              <div className="absolute -inset-2 bg-card rounded-lg rotate-1" />
              <img
                src={portraitImg}
                alt="Aashna Kulshrestha — portrait"
                className="relative rounded-lg w-full aspect-[4/5] object-cover shadow-elevated"
                width={640}
                height={800}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
