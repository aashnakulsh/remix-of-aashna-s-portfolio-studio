import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, categories } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";

const ProjectsPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tools.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = !activeCategory || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back
            </Link>
            <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-3">
              Archive
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground">
              All Projects
            </h1>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mb-8 space-y-4"
          >
            {/* Search */}
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm font-body bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`text-xs font-body px-3 py-1.5 rounded-full border transition-colors duration-200 ${
                  !activeCategory
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setActiveCategory(activeCategory === cat ? null : cat)
                  }
                  className={`text-xs font-body px-3 py-1.5 rounded-full border transition-colors duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-sm font-body text-muted-foreground mt-16">
              No projects match your search.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
