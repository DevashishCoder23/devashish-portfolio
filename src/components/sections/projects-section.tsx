"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                isActive
                  ? "bg-slate-900 text-white dark:bg-cyan-400 dark:text-slate-900"
                  : "border border-slate-300 text-slate-600 hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                loading="lazy"
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-4 p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-slate-300 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 text-sm font-medium">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-700 transition hover:text-cyan-500 dark:text-cyan-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-700 transition hover:text-slate-900 dark:text-slate-200"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
