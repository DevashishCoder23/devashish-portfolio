import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <SectionHeading
        eyebrow="Experience"
        title="Impact-driven frontend delivery across teams and products"
      />
      <div className="space-y-4">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{experience.role}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{experience.company}</p>
              </div>
              <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {experience.period}
              </p>
            </div>
            <ul className="mt-4 space-y-2">
              {experience.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex gap-2 text-sm text-slate-700 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-cyan-500 dark:text-slate-300"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
