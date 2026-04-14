export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-6 dark:border-slate-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between dark:text-slate-400">
        <p>© {new Date().getFullYear()} Devashish Sharma</p>
        <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
      </div>
    </footer>
  );
}
