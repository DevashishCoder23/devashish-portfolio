type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-slate-50">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
