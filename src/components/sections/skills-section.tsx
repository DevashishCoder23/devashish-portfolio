import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <SectionHeading
        eyebrow="Skills"
        title="Technical strengths that help teams ship with confidence"
        description="A practical toolkit focused on frontend architecture, UI quality, and reliable delivery."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {skillCategories.map((category) => (
          <article
            key={category.category}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="mb-4 text-base font-semibold text-slate-900 dark:text-slate-100">{category.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
