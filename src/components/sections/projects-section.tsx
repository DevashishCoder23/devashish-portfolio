"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  const categories = useMemo(() => {
    const fromProjects = Array.from(new Set(projects.map((project) => project.category)));
    return ["all", ...fromProjects];
  }, []);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <SectionHeading
        eyebrow="Projects"
        title="Selected projects that showcase product thinking and frontend depth"
        description="Each project highlights business impact, clean implementation, and a strong user experience foundation."
      />

      <div className="mb-8 inline-flex rounded-2xl border border-slate-200 bg-white/80 p-1.5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`relative cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                isActive
                  ? "text-slate-950 dark:text-slate-950"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-cyan-200"
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="active-project-filter"
                  className="absolute inset-0 -z-10 rounded-xl bg-cyan-400 shadow-[0_8px_20px_-12px_rgba(34,211,238,0.9)]"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              ) : null}
              {category}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.28, delay: index * 0.04 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="p-3 pb-0">
                <div className="relative h-44 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    loading={index < 2 ? "eager" : "lazy"}
                    fetchPriority={index < 2 ? "high" : "auto"}
                    className="object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 dark:ring-white/10" />
                </div>
              </div>
              <div className="space-y-4 p-5 pt-4">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{project.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-slate-300 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-700 transition hover:gap-2 hover:text-cyan-500 dark:text-cyan-300"
                    >
                      Live Demo <span aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <span className="cursor-not-allowed text-slate-400 dark:text-slate-500">Demo Disabled</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
