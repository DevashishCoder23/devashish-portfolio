import { contactInfo, hobbies, socialLinks } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Code2, Globe, Mail } from "lucide-react";

export function ContactSection() {
  const getSocialIcon = (label: string) => {
    if (label === "GitHub") return <Code2 size={15} />;
    if (label === "LinkedIn") return <Globe size={15} />;
    if (label === "Email") return <Mail size={15} />;
    return null;
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let us build impactful frontend experiences together"
        description="Available for frontend engineer roles and collaborative product teams."
      />
      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Reach me directly</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>Email: {contactInfo.email}</li>
            <li>Phone: {contactInfo.phone}</li>
            <li>Location: {contactInfo.location}</li>
          </ul>
          <div className="mt-4 flex gap-4 text-sm font-medium">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-cyan-700 transition hover:text-cyan-500 dark:text-cyan-300"
              >
                {getSocialIcon(link.label)}
                {link.label}
              </a>
            ))}
          </div>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Beyond work</h3>
          <ul className="mt-4 space-y-2">
            {hobbies.map((hobby) => (
              <li
                key={hobby}
                className="flex gap-2 text-sm text-slate-700 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-cyan-500 dark:text-slate-300"
              >
                {hobby}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
