import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-4xl mx-auto section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-sm font-body tracking-widest uppercase text-muted-foreground">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Let's connect.
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto leading-relaxed">
            I'm always open to thoughtful conversations — whether about research, internships, collaborations, or interesting problems worth solving.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card text-foreground font-body text-sm hover:bg-secondary hover:border-primary/20 transition-colors duration-200 shadow-card"
            >
              <Linkedin className="h-4 w-4 text-primary" />
              LinkedIn
              <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card text-foreground font-body text-sm hover:bg-secondary hover:border-primary/20 transition-colors duration-200 shadow-card"
            >
              <Mail className="h-4 w-4 text-primary" />
              Email
              <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-border"
        >
          <p className="text-xs font-body text-muted-foreground tracking-wide">
            Designed & built by Aashna Kulshrestha · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
