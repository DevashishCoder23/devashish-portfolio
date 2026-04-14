import { aboutContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <SectionHeading eyebrow="About Me" title={aboutContent.title} />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          {aboutContent.description.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
        <ul className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          {aboutContent.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 text-sm text-slate-700 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-cyan-500 dark:text-slate-200"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
