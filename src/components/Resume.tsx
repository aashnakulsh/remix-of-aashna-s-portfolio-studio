import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimelineEntry {
  role: string;
  org: string;
  period: string;
  startMonth: number; // 1-12
  startYear: number;
  endMonth: number | null; // null = present
  endYear: number | null;
  side: "left" | "right";
}

const NOW_YEAR = 2025;
const NOW_MONTH = 4;

const timelineEntries: TimelineEntry[] = [
  {
    role: "Undergraduate Research Assistant",
    org: "HCI & Spatial Computing Lab",
    period: "Jan 2024 — Present",
    startMonth: 1,
    startYear: 2024,
    endMonth: null,
    endYear: null,
    side: "left",
  },
  {
    role: "President",
    org: "Women in Computing",
    period: "Aug 2024 — Present",
    startMonth: 8,
    startYear: 2024,
    endMonth: null,
    endYear: null,
    side: "right",
  },
  {
    role: "Software Engineering Intern",
    org: "Infrastructure Team — [Company]",
    period: "Jun — Aug 2024",
    startMonth: 6,
    startYear: 2024,
    endMonth: 8,
    endYear: 2024,
    side: "left",
  },
  {
    role: "Teaching Assistant",
    org: "Intro to Computer Science",
    period: "Jan — May 2024",
    startMonth: 1,
    startYear: 2024,
    endMonth: 5,
    endYear: 2024,
    side: "right",
  },
  {
    role: "Design Lead",
    org: "HackClub University Chapter",
    period: "Aug 2023 — May 2024",
    startMonth: 8,
    startYear: 2023,
    endMonth: 5,
    endYear: 2024,
    side: "left",
  },
  {
    role: "Volunteer Instructor",
    org: "Code for Good Initiative",
    period: "Sep 2022 — May 2023",
    startMonth: 9,
    startYear: 2022,
    endMonth: 5,
    endYear: 2023,
    side: "right",
  },
];

// Convert year+month to a fractional year value for positioning
function toFractional(year: number, month: number): number {
  return year + (month - 1) / 12;
}

// Calculate layout constants
const PIXELS_PER_YEAR = 160; // vertical pixels per year of duration
const MIN_CARD_HEIGHT = 52; // minimum card height in px
const CARD_WIDTH = 220; // fixed card width

const Resume = () => {
  // Determine the full time range
  const allStarts = timelineEntries.map((e) => toFractional(e.startYear, e.startMonth));
  const allEnds = timelineEntries.map((e) =>
    e.endYear && e.endMonth
      ? toFractional(e.endYear, e.endMonth)
      : toFractional(NOW_YEAR, NOW_MONTH)
  );
  const timelineStart = Math.min(...allStarts);
  const timelineEnd = Math.max(...allEnds);
  const totalYears = timelineEnd - timelineStart;
  const totalHeight = totalYears * PIXELS_PER_YEAR;

  // Generate year tick marks
  const firstFullYear = Math.ceil(timelineStart);
  const lastFullYear = Math.floor(timelineEnd);
  const yearTicks: number[] = [];
  for (let y = firstFullYear; y <= lastFullYear; y++) {
    yearTicks.push(y);
  }

  // Position helper: fractional year → px from top (timeline goes top=latest, bottom=earliest)
  // Actually let's go top=earliest, bottom=latest (chronological top-down)
  // Wait, conventional timelines often go newest on top. Let's do newest on top.
  const toTop = (fractionalYear: number) => {
    return (timelineEnd - fractionalYear) * PIXELS_PER_YEAR;
  };

  return (
    <section id="resume" className="py-12 bg-card">
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

        {/* Desktop duration timeline */}
        <div className="hidden md:block relative mx-auto" style={{ height: totalHeight + 24 }}>
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Year tick marks */}
          {yearTicks.map((year) => {
            const top = toTop(year);
            return (
              <div
                key={year}
                className="absolute left-1/2 -translate-x-1/2 flex items-center z-20"
                style={{ top }}
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
                  <span className="font-display text-[10px] text-primary-foreground font-semibold">
                    {year}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Entry cards */}
          {timelineEntries.map((entry, i) => {
            const startF = toFractional(entry.startYear, entry.startMonth);
            const endF =
              entry.endYear && entry.endMonth
                ? toFractional(entry.endYear, entry.endMonth)
                : toFractional(NOW_YEAR, NOW_MONTH);
            const durationYears = endF - startF;
            const cardHeight = Math.max(MIN_CARD_HEIGHT, durationYears * PIXELS_PER_YEAR);
            const cardTop = toTop(endF); // top of card = end date (newest on top)

            const isLeft = entry.side === "left";
            // Card offset from center: gap for connector
            const connectorLength = 20;
            const cardLeft = isLeft
              ? `calc(50% - ${CARD_WIDTH + connectorLength + 4}px)`
              : `calc(50% + ${connectorLength + 4}px)`;

            // Connector vertical center of card
            const connectorTop = cardTop + cardHeight / 2;

            return (
              <motion.div
                key={entry.role + entry.org}
                initial={{ opacity: 0, x: isLeft ? -12 : 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                {/* Connector line */}
                <div
                  className="absolute h-px bg-border"
                  style={{
                    top: connectorTop,
                    left: isLeft ? `calc(50% - ${connectorLength + 4}px)` : "calc(50% + 4px)",
                    width: connectorLength,
                  }}
                />
                {/* Node dot */}
                <div
                  className="absolute w-2 h-2 rounded-full bg-primary border-2 border-card z-10"
                  style={{
                    top: connectorTop - 4,
                    left: "calc(50% - 4px)",
                  }}
                />
                {/* Card */}
                <div
                  className={`absolute border border-border/60 rounded bg-background shadow-sm flex flex-col justify-center ${
                    isLeft ? "text-right" : "text-left"
                  }`}
                  style={{
                    top: cardTop,
                    left: cardLeft,
                    width: CARD_WIDTH,
                    minHeight: cardHeight,
                    padding: "8px 12px",
                  }}
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
            );
          })}
        </div>

        {/* Mobile: simple stacked list */}
        <div className="md:hidden relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
          {timelineEntries.map((entry, i) => (
            <motion.div
              key={entry.role + entry.org}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="relative mb-3 flex items-start"
            >
              <div className="absolute left-5 top-3 -translate-x-1/2 z-10">
                <div className="w-2 h-2 rounded-full bg-primary border-2 border-card" />
              </div>
              <div className="ml-10 border border-border/60 rounded bg-background shadow-sm px-3 py-2">
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
