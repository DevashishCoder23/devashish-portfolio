# Devashish Sharma Portfolio

Modern, recruiter-focused frontend developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes (dark mode)
- lucide-react (icons)

## Features

- Clean, responsive, mobile-first UI
- Sticky navbar with smooth section scrolling
- Dark mode toggle
- Animated section reveals
- Project filtering (All / Frontend / Fullstack)
- Resume download support
- SEO-ready metadata
- Optimized images with `next/image`

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    footer.tsx
    navbar.tsx
    theme-toggle.tsx
    providers/
      theme-provider.tsx
    sections/
      about-section.tsx
      contact-section.tsx
      experience-section.tsx
      hero-section.tsx
      projects-section.tsx
      skills-section.tsx
    ui/
      animated-reveal.tsx
      section-heading.tsx
  data/
    portfolio.ts
  types/
    portfolio.ts
public/
  projects/
  profile-devashish.png
  Devashish_Sharma_Frontend_Engineer_4Y.pdf
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - start development server
- `npm run lint` - run ESLint
- `npm run build` - production build (webpack mode)
- `npm run start` - run production server

## Customization Guide

Most content is centralized in:

- `src/data/portfolio.ts`

Update these there:

- Hero information
- Social links
- Skills and categories
- Projects and links
- Experience entries
- Contact details
- Resume download path

## Dark Mode

Dark mode uses `next-themes` with class-based toggling (`html.dark`), and Tailwind dark variants are configured in `globals.css`.

## Deployment (Vercel)

1. Push project to GitHub.
2. Import repository in [Vercel](https://vercel.com/).
3. Keep default build command (`npm run build`).
4. Deploy.

## Notes

- Replace demo project links with your final production links whenever ready.
- Keep assets used in project cards/profile image inside `public/`.
