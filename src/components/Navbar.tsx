import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href?: string;
  to?: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHome) return;
      const sections = navItems
        .filter((item) => item.href)
        .map((item) => item.href!.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!isHome) {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-body",
        scrolled
          ? "bg-card/80 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between section-padding py-4">
        <a
          href="/"
          onClick={handleLogoClick}
          className="font-display text-lg text-foreground tracking-tight"
        >
          AK
        </a>
        <div className="flex items-center gap-1 md:gap-6">
          {navItems.map((item) => {
            if (item.to) {
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={cn(
                    "text-sm tracking-wide transition-colors duration-200 px-2 py-1 rounded-sm",
                    location.pathname === item.to
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href!)}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-200 px-2 py-1 rounded-sm",
                  isHome && activeSection === item.href!.slice(1)
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
