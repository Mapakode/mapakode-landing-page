# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.


## Key Versions

- Next.js 16.2.0 (breaking changes from v13/14/15)
- React 19.2.4
- Tailwind CSS 4.2.2 (new `@import "tailwindcss"` syntax, no tailwind.config.js)
- TypeScript 5.9.3 (strict mode)
- pnpm (package manager — use pnpm, not npm or yarn)

## Key Dependencies

- `lucide-react` — primary icon library (used across sections)
- `react-icons` — supplemental icon library
- `@base-ui/react` — headless UI primitives
- `tw-animate-css` — animation utilities (imported in `globals.css`)

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
- **Design tokens** — CSS custom properties defined in `:root` in `globals.css`: `--accent: #0b4ed7`, `--accent-dim: #0082fd`, `--accent-sky: #31c1c3`, `--foreground: #0c1935`, `--surface: #f7f9fc`, `--surface-2: #eef2f8`, `--border: #e2e6ef`, etc. Use these via Tailwind (`text-accent`, `bg-surface`) or raw hex.
- **Font loading** — Epilogue (`--font-epilogue`, `font-sans`) via `next/font/google` in `src/app/layout.tsx`
- **shadcn/ui** — components in `components/ui/` (`button.tsx`, `card.tsx`, `badge.tsx`); configured via `components.json`
- **Scroll animations** — `.reveal` / `.in-view` CSS classes toggled by `useInView` hook. Add `reveal` to elements, conditionally append `in-view` when `inView === true`. Variants: `.reveal-left`, `.reveal-right`, `.reveal-fade`. Use `delay-0` … `delay-800` utility classes for staggered entry.
- **Section glow effects** — `.section-glow-right` / `.section-glow-left` utility divs for subtle background radials (defined in `globals.css`)
- **UI utilities** — `.card-lift` (hover lift on cards), `.hero-dot-grid` (dot background pattern), `.glass-chip` / `.glass-chip-hover` (glassmorphism chips), `.skip-link` (a11y skip-to-content). Animation classes: `animate-marquee`, `animate-float-chip`, `animate-hero-fade-up`, `animate-chip-appear`, `animate-nav-enter`, etc.
- **Image assets** — under `public/images/`: `mapakode-light-mode.svg` / `mapakode-dark-mode.svg` (logo variants); `members/` (team photos); `casestudies/fillr/` (case study screenshots)
- **Image optimization** — `next.config.ts` sets `images.qualities: [75, 90]` and `formats: ['image/avif', 'image/webp']`; use Next.js `<Image>` with `sizes` prop on all images
- **SEO** — full metadata in `src/app/layout.tsx` (OG, Twitter Cards, canonical, robots, icons, themeColor); JSON-LD `ProfessionalService` schema in `src/app/page.tsx`; per-page JSON-LD on `/team` (Organization/Person) and `/projects/fillr` (SoftwareApplication); `robots.ts` and `sitemap.ts` auto-generate `/robots.txt` and `/sitemap.xml`

## Page Structure

**`/` (homepage)** — single-page layout in `src/app/page.tsx`:
`Navbar → Hero → About → Clients → Services → Projects → Testimonials → TechStack → Contact → Footer`

**`/team`** — `src/app/team/page.tsx`:
`Navbar → TeamHero → TeamMembers → Footer`

**`/projects/fillr`** — `src/app/projects/fillr/page.tsx` (case study):
`Navbar → FillrHero → FillrOverview → FillrChallenge → FillrFeatures → FillrResults → FillrCTA → Footer`

Case study section components live in `components/sections/casestudies/`.

Alternate section backgrounds create visual rhythm: white (`bg-white`) and surface (`bg-[#f7f9fc]`) sections alternate; `Clients` and `Contact` use `bg-[#0b4ed7]` (brand blue).

## Testing

No test framework is configured yet.

## Session Defaults

- **Always activate caveman mode** at the start of every session and before generating any code. Invoke `/caveman` in the introduction.

## Available Skills

Invoke with `/<skill-name>` in chat.

| Skill | Purpose |
|---|---|
| `caveman` | Ultra-compressed mode (~75% fewer tokens) |
| `brainstorming` | Explore intent/requirements before building |
| `feature-dev` | Guided feature development |
| `writing-plans` | Plan multi-step tasks before coding |
| `executing-plans` | Execute a written plan with checkpoints |
| `finishing-a-development-branch` | Integration options after work is done |
| `code-review` | Review a pull request |
| `simplify` | Refactor changed code for quality |
| `verification-before-completion` | Verify before claiming work is done |
| `receiving-code-review` | Process incoming review feedback |
| `requesting-code-review` | Verify work meets requirements before merging |
| `test-driven-development` | TDD workflow before implementation |
| `systematic-debugging` | Structured debugging loop |
| `diagnose` | Hard bugs and performance regressions |
| `security-review` | Security review of pending branch changes |
| `init` | Initialize a new CLAUDE.md |
| `claude-md-management:revise-claude-md` | Update CLAUDE.md with session learnings |
| `claude-md-management:claude-md-improver` | Audit and improve CLAUDE.md files |
| `update-config` | Configure settings, hooks, and permissions |
| `keybindings-help` | Customize keyboard shortcuts |
| `fewer-permission-prompts` | Allowlist common commands to reduce prompts |
| `grill-me` | Stress-test a plan via relentless questioning |
| `loop` | Run a prompt/command on a recurring interval |
| `find-skills` | Discover and install additional skills |
| `claude-api` | Build/debug Claude API & Anthropic SDK apps |
| `writing-skills` | Create or edit skills before deployment |
| `dispatching-parallel-agents` | Spawn parallel agents for independent tasks |
| `subagent-driven-development` | Execute plans with subagents |

## Available Agents

Dispatched automatically or by name request (e.g. "use the code-reviewer agent").

| Agent | Purpose |
|---|---|
| `claude` | General catch-all agent |
| `general-purpose` | Research, multi-step tasks, codebase searches |
| `feature-dev:code-architect` | Feature architecture and implementation blueprints |
| `feature-dev:code-explorer` | Traces execution paths and maps architecture |
| `feature-dev:code-reviewer` | Reviews code for bugs, security, and quality |
| `code-simplifier` | Refactors code for clarity and maintainability |
| `Explore` | Fast read-only file/symbol search |
| `Plan` | Designs implementation strategies |
| `claude-code-guide` | Answers questions about Claude Code CLI and API |
