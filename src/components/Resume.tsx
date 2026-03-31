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
}

const workTimeline: TimelineEntry[] = [
  {
    role: "Undergraduate Research Assistant",
    org: "HCI & Spatial Computing Lab",
    description:
      "Designing and evaluating VR interaction techniques for spatial navigation. Running user studies and co-authoring publications.",
    tags: ["VR", "User Studies", "Python"],
    period: "2024 — Present",
  },
  {
    role: "Software Engineering Intern",
    org: "Infrastructure Team — [Company]",
    description:
      "Built internal tooling for deployment pipelines and observability dashboards used across 12 engineering teams.",
    tags: ["Go", "Kubernetes", "Grafana"],
    period: "Summer 2024",
  },
  {
    role: "Teaching Assistant",
    org: "Intro to Computer Science",
    description:
      "Led weekly lab sections, held office hours, and helped redesign autograder infrastructure for 300+ students.",
    tags: ["Java", "Mentorship", "Curriculum"],
    period: "Spring 2024",
  },
];

const extracurricularTimeline: TimelineEntry[] = [
  {
    role: "President",
    org: "Women in Computing",
    description:
      "Scaled org membership 3× and launched a mentorship program pairing underclassmen with industry professionals.",
    tags: ["Leadership", "Community", "Events"],
    period: "2024 — Present",
  },
  {
    role: "Design Lead",
    org: "HackClub University Chapter",
    description:
      "Directed branding, web presence, and event design for a 200-member student hacker community.",
    tags: ["Figma", "Branding", "Web"],
    period: "2023 — 2024",
  },
  {
    role: "Volunteer Instructor",
    org: "Code for Good Initiative",
    description:
      "Taught introductory programming workshops to high school students from underrepresented backgrounds.",
    tags: ["Teaching", "Outreach", "Python"],
    period: "2022 — 2023",
  },
];

const TimelineColumn = ({
  title,
  entries,
  delay = 0,
}: {
  title: string;
  entries: TimelineEntry[];
  delay?: number;
}) => (
  <div>
    <motion.h3
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="font-display text-2xl text-foreground mb-8"
    >
      {title}
    </motion.h3>

    <div className="relative pl-8">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

      <div className="space-y-8">
        {entries.map((entry, i) => (
          <motion.div
            key={entry.role + entry.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + i * 0.1 }}
            className="relative"
          >
            {/* Node */}
            <div className="absolute -left-8 top-3 w-[15px] h-[15px] rounded-full border-2 border-primary bg-card z-10" />
            {/* Connector */}
            <div className="absolute -left-[17px] top-[9px] w-[17px] h-px bg-border" />

            {/* Card */}
            <div className="rounded-lg bg-card p-5 shadow-card">
              <h4 className="font-display text-lg text-foreground leading-snug">
                {entry.role}
              </h4>
              <p className="text-sm font-body text-muted-foreground mt-0.5">
                {entry.org}
              </p>
              <p className="text-sm font-body text-muted-foreground leading-relaxed mt-2">
                {entry.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
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
              <p className="text-xs font-body text-primary mt-3 tracking-wide">
                {entry.period}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Resume = () => {
  return (
    <section id="resume" className="py-28 bg-card">
      <div className="max-w-5xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-3">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Timeline
          </h2>
          <p className="font-body text-muted-foreground max-w-lg leading-relaxed">
            A snapshot of my professional and extracurricular journey so far.
          </p>
        </motion.div>

        {/* Dual timelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 mb-12">
          <TimelineColumn title="Work & Research" entries={workTimeline} delay={0} />
          <TimelineColumn
            title="Leadership & Community"
            entries={extracurricularTimeline}
            delay={0.15}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
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
