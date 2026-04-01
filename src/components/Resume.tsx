import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TimelineEntry {
  role: string;
  org: string;
  description: string;
  tags: string[];
  period: string;
  year: string;
  side: "left" | "right";
}

const timelineEntries: TimelineEntry[] = [
  {
    role: "Undergraduate Research Assistant",
    org: "HCI & Spatial Computing Lab",
    description:
      "Designing and evaluating VR interaction techniques for spatial navigation. Running user studies and co-authoring publications.",
    tags: ["VR", "User Studies", "Python"],
    period: "2024 — Present",
    year: "2024",
    side: "left",
  },
  {
    role: "President",
    org: "Women in Computing",
    description:
      "Scaled org membership 3× and launched a mentorship program pairing underclassmen with industry professionals.",
    tags: ["Leadership", "Community", "Events"],
    period: "2024 — Present",
    year: "2024",
    side: "right",
  },
  {
    role: "Software Engineering Intern",
    org: "Infrastructure Team — [Company]",
    description:
      "Built internal tooling for deployment pipelines and observability dashboards used across 12 engineering teams.",
    tags: ["Go", "Kubernetes", "Grafana"],
    period: "Summer 2024",
    year: "2024",
    side: "left",
  },
  {
    role: "Teaching Assistant",
    org: "Intro to Computer Science",
    description:
      "Led weekly lab sections, held office hours, and helped redesign autograder infrastructure for 300+ students.",
    tags: ["Java", "Mentorship", "Curriculum"],
    period: "Spring 2024",
    year: "2024",
    side: "right",
  },
  {
    role: "Design Lead",
    org: "HackClub University Chapter",
    description:
      "Directed branding, web presence, and event design for a 200-member student hacker community.",
    tags: ["Figma", "Branding", "Web"],
    period: "2023 — 2024",
    year: "2023",
    side: "left",
  },
  {
    role: "Volunteer Instructor",
    org: "Code for Good Initiative",
    description:
      "Taught introductory programming workshops to high school students from underrepresented backgrounds.",
    tags: ["Teaching", "Outreach", "Python"],
    period: "2022 — 2023",
    year: "2022",
    side: "right",
  },
];

// Group entries by year to place year markers
const years = [...new Set(timelineEntries.map((e) => e.year))];

const Resume = () => {
  return (
    <section id="resume" className="py-28 bg-card">
      <div className="max-w-5xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-3">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Timeline
          </h2>
          <p className="font-body text-muted-foreground max-w-lg leading-relaxed mx-auto">
            A snapshot of my professional and extracurricular journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          {/* Mobile line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:hidden" />

          <div className="space-y-0">
            {years.map((year, yi) => {
              const entriesForYear = timelineEntries.filter((e) => e.year === year);
              return (
                <div key={year}>
                  {/* Year marker */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: yi * 0.1 }}
                    className="relative flex items-center justify-center mb-8 mt-4"
                  >
                    {/* Desktop: centered marker */}
                    <div className="hidden md:flex items-center justify-center relative z-10">
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-md">
                        <span className="font-display text-sm text-primary-foreground font-semibold">
                          {year}
                        </span>
                      </div>
                    </div>
                    {/* Mobile: left-aligned marker */}
                    <div className="md:hidden flex items-center relative z-10 w-full">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                        <span className="font-display text-xs text-primary-foreground font-semibold">
                          {year}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Entries for this year */}
                  {entriesForYear.map((entry, i) => (
                    <motion.div
                      key={entry.role + entry.org}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                      className={`relative mb-10 md:flex md:items-start ${
                        entry.side === "left"
                          ? "md:justify-start"
                          : "md:justify-end"
                      }`}
                    >
                      {/* Desktop: node on center line */}
                      <div className="hidden md:block absolute left-1/2 top-5 -translate-x-1/2 z-10">
                        <div className="w-3 h-3 rounded-full bg-primary border-2 border-card" />
                      </div>

                      {/* Mobile: node on left line */}
                      <div className="md:hidden absolute left-6 top-5 -translate-x-1/2 z-10">
                        <div className="w-3 h-3 rounded-full bg-primary border-2 border-card" />
                      </div>

                      {/* Connector line desktop */}
                      <div
                        className={`hidden md:block absolute top-[26px] h-px bg-border ${
                          entry.side === "left"
                            ? "left-[calc(50%-40px)] w-10"
                            : "left-[calc(50%+6px)] w-10"
                        }`}
                      />

                      {/* Card */}
                      <div
                        className={`ml-14 md:ml-0 md:w-[calc(50%-40px)] rounded-lg bg-background p-5 shadow-card ${
                          entry.side === "left" ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                        }`}
                      >
                        <p className="text-xs font-body text-primary tracking-wide uppercase mb-1">
                          {entry.period}
                        </p>
                        <h4 className="font-display text-lg text-foreground leading-snug">
                          {entry.role}
                        </h4>
                        <p className="text-sm font-body text-muted-foreground mt-0.5">
                          {entry.org}
                        </p>
                        <p className="text-sm font-body text-muted-foreground leading-relaxed mt-2">
                          {entry.description}
                        </p>
                        <div
                          className={`flex flex-wrap gap-1.5 mt-3 ${
                            entry.side === "left" ? "md:justify-end" : ""
                          }`}
                        >
                          {entry.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-[11px] font-body font-medium px-2 py-0.5"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
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
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-14"
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
