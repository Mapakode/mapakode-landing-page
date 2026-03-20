# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Key Versions

- Next.js 16.2.0 (breaking changes from v13/14/15)
- React 19.2.4
- Tailwind CSS 4.2.2 (new `@import "tailwindcss"` syntax, no tailwind.config.js)
- TypeScript 5.9.3 (strict mode)
- pnpm (package manager — use pnpm, not npm or yarn)

## Commands

```bash
pnpm dev       # Start development server
pnpm build     # Production build
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

## Architecture

- **App Router** under `src/app/` — routes, layouts, pages, `robots.ts`, `sitemap.ts`
- **Components** under root `components/` (NOT `src/components/`) — `layout/`, `sections/`, `ui/`
- **Hooks** under root `hooks/` — `useInView.ts` (IntersectionObserver for scroll animations)
- **Path alias**: `@/*` maps to the **project root** (e.g., `@/components/…`, `@/hooks/…`, `@/src/app/…`)
- **Server Components by default** — only add `"use client"` when necessary (event handlers, hooks, browser APIs). All section components use `useInView` so they are client components.
- **Tailwind CSS v4** — configured entirely in `src/app/globals.css` via `@import "tailwindcss"` and `@theme inline`. No `tailwind.config.js`.
- **Design tokens** — CSS custom properties defined in `:root` in `globals.css`: `--accent: #345ec4`, `--accent-dim: #46a9fb`, `--accent-sky: #6cd4fe`, `--surface: #f7f9fc`, `--border: #e2e6ef`, etc. Use these via Tailwind (`text-accent`, `bg-surface`) or raw hex.
- **Font loading** — Unbounded (`--font-unbounded`, `font-display`) + Figtree (`--font-figtree`, `font-sans`) via `next/font/google` in `src/app/layout.tsx`
- **shadcn/ui** — components in `components/ui/` (`button.tsx`, `card.tsx`, `badge.tsx`); configured via `components.json`
- **Scroll animations** — `.reveal` / `.in-view` CSS classes toggled by `useInView` hook. Add `reveal` to elements, conditionally append `in-view` when `inView === true`. Use `delay-100` … `delay-400` utility classes for staggered entry.
- **Section glow effects** — `.section-glow-right` / `.section-glow-left` utility divs for subtle background radials (defined in `globals.css`)
- **SEO** — full metadata in `src/app/layout.tsx` (OG, Twitter Cards, canonical, robots, icons); JSON-LD `ProfessionalService` schema in `src/app/page.tsx`; `robots.ts` and `sitemap.ts` auto-generate `/robots.txt` and `/sitemap.xml`

## Page Structure

Single-page layout composed in `src/app/page.tsx`:
`Navbar → Hero → About → Clients → Services → Projects → Testimonials → TechStack → Contact → Footer`

Alternate section backgrounds create visual rhythm: white (`bg-white`) and surface (`bg-[#f7f9fc]`) sections alternate; `Clients` and `Contact` use `bg-[#345ec4]` (brand blue).

## Testing

No test framework is configured yet.
