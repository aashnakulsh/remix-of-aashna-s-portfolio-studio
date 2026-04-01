import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimelineEntry {
  role: string;
  org: string;
  period: string;
  year: string;
  side: "left" | "right";
}

const timelineEntries: TimelineEntry[] = [
  {
    role: "Undergraduate Research Assistant",
    org: "HCI & Spatial Computing Lab",
    period: "2024 — Present",
    year: "2024",
    side: "left",
  },
  {
    role: "President",
    org: "Women in Computing",
    period: "2024 — Present",
    year: "2024",
    side: "right",
  },
  {
    role: "Software Engineering Intern",
    org: "Infrastructure Team — [Company]",
    period: "Summer 2024",
    year: "2024",
    side: "left",
  },
  {
    role: "Teaching Assistant",
    org: "Intro to Computer Science",
    period: "Spring 2024",
    year: "2024",
    side: "right",
  },
  {
    role: "Design Lead",
    org: "HackClub University Chapter",
    period: "2023 — 2024",
    year: "2023",
    side: "left",
  },
  {
    role: "Volunteer Instructor",
    org: "Code for Good Initiative",
    period: "2022 — 2023",
    year: "2022",
    side: "right",
  },
];

const years = [...new Set(timelineEntries.map((e) => e.year))];

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-card">
      <div className="max-w-5xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-2">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            Timeline
          </h2>
          <p className="font-body text-muted-foreground max-w-lg leading-relaxed mx-auto">
            A snapshot of my professional and extracurricular journey so far.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border md:hidden" />

          <div>
            {years.map((year, yi) => {
              const entriesForYear = timelineEntries.filter((e) => e.year === year);
              return (
                <div key={year}>
                  {/* Year marker */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: yi * 0.05 }}
                    className="relative flex items-center justify-center mb-3 mt-1"
                  >
                    <div className="hidden md:flex items-center justify-center relative z-10">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm">
                        <span className="font-display text-xs text-primary-foreground font-semibold">
                          {year}
                        </span>
                      </div>
                    </div>
                    <div className="md:hidden flex items-center relative z-10 w-full">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm ml-[0.25rem] -translate-x-1/2">
                        <span className="font-display text-xs text-primary-foreground font-semibold">
                          {year}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {entriesForYear.map((entry, i) => (
                    <motion.div
                      key={entry.role + entry.org}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
                      className={`relative mb-2.5 md:flex md:items-start ${
                        entry.side === "left"
                          ? "md:justify-start"
                          : "md:justify-end"
                      }`}
                    >
                      {/* Desktop node */}
                      <div className="hidden md:block absolute left-1/2 top-3 -translate-x-1/2 z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary border-2 border-card" />
                      </div>
                      {/* Mobile node */}
                      <div className="md:hidden absolute left-5 top-3 -translate-x-1/2 z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary border-2 border-card" />
                      </div>

                      {/* Connector */}
                      <div
                        className={`hidden md:block absolute top-[17px] h-px bg-border ${
                          entry.side === "left"
                            ? "left-[calc(50%-28px)] w-7"
                            : "left-[calc(50%+5px)] w-7"
                        }`}
                      />

                      {/* Card */}
                      <div
                        className={`ml-10 md:ml-0 md:w-auto md:max-w-[calc(50%-44px)] inline-flex flex-col rounded border border-border/60 bg-background px-3 py-2 shadow-sm ${
                          entry.side === "left" ? "md:mr-auto md:text-right md:items-end" : "md:ml-auto md:text-left md:items-start"
                        }`}
                      >
                        <p className="text-[10px] font-body text-primary/80 tracking-wide uppercase leading-none mb-0.5">
                          {entry.period}
                        </p>
                        <h4 className="font-display text-[13px] text-foreground leading-tight">
                          {entry.role}
                        </h4>
                        <p className="text-[11px] font-body text-muted-foreground leading-tight">
                          {entry.org}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-8"
        >
          <Button size="lg" className="font-body" asChild>
            <a href="/resume.pdf" download>
              <FileText className="mr-2 h-4 w-4" />
              Download Full Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
