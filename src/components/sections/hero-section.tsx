"use client";

import Image from "next/image";
import { Code2, Globe, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { contactInfo, heroContent, socialLinks } from "@/data/portfolio";

export function HeroSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const getSocialIcon = (label: string) => {
    if (label === "GitHub") return <Code2 size={14} />;
    if (label === "LinkedIn") return <Globe size={14} />;
    if (label === "Email") return <Mail size={14} />;
    return null;
  };

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-18 md:grid-cols-[1.35fr_0.65fr] md:py-24">
      <div className="space-y-6">
        <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-700 dark:border-cyan-500/40 dark:bg-cyan-500/10 dark:text-cyan-300">
          {heroContent.availability}
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-slate-100">
            {heroContent.name}
          </h1>
          <p className="text-xl font-medium text-slate-700 md:text-2xl dark:text-slate-200">{heroContent.role}</p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
            {heroContent.intro}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-cyan-400 dark:text-slate-900 dark:hover:bg-cyan-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-600 dark:text-slate-200 dark:hover:border-cyan-400/60 dark:hover:bg-slate-800 dark:hover:text-cyan-200"
          >
            Contact Me
          </a>
          <a
            href={contactInfo.resumePath}
            download
            className="rounded-full border border-cyan-300 px-5 py-2.5 text-sm font-semibold text-cyan-700 transition hover:-translate-y-0.5 hover:bg-cyan-50 dark:border-cyan-500/60 dark:text-cyan-300 dark:hover:bg-cyan-500/10"
          >
            Download Resume
          </a>
        </div>
      </div>

      <aside className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label="Open profile photo preview"
          >
            <Image
              src="/profile-devashish.png"
              alt="Portrait of Devashish Sharma"
              width={84}
              height={84}
              priority
              className="rounded-full border-2 border-cyan-200 object-cover transition hover:scale-[1.03] dark:border-cyan-500/50"
            />
          </button>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{heroContent.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{heroContent.role}</p>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Location</p>
          <p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-200">{heroContent.location}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Connect</p>
          <ul className="mt-3 space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
                >
                  {getSocialIcon(link.label)}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {isPreviewOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4"
          onClick={() => setIsPreviewOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Profile photo preview"
        >
          <div
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src="/profile-devashish.png"
              alt="Devashish Sharma profile preview"
              width={900}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="absolute right-3 top-3 rounded-full bg-slate-950/75 px-3 py-1 text-sm font-medium text-white transition hover:bg-slate-800"
              aria-label="Close preview"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
