# Copilot Instructions

## Project at a glance
- Next.js 14 (App Router) + TypeScript + Tailwind; data-driven single-page portfolio. Entry: `src/app/page.tsx`, layout: `src/app/layout.tsx`.
- Design language: minimalist/brutalist — hard edges, visible borders/shadows, monochrome with sparse accents; avoid rounded corners, gradients, glossy effects.
- Bilingual (zh/en) via `LanguageProvider` + `useLanguage().t()`. All user-facing strings should be `BilingualText` objects and routed through `t()`.

## Content source of truth
- Do **not invent** data. Resume-aligned content lives in `src/data/`: `content.ts` (profile), `games.ts`, `experience.ts`, `research.ts`, `skills.ts`. Links, dates, awards must match these files; if missing, surface a question rather than fabricating.
- Types in `src/types/content.ts` define required shapes. Research items now support `links` arrays; game links are optional and must be real.
- If adding fields, update both type definitions and renderers (e.g., sections in `src/components/sections/`).

## Layout & sections
- Sticky nav: `src/components/layout/Navigation.tsx` uses `useScrollSpy` to highlight sections and manual scroll offset. Keep nav height consistent with top padding set in `src/app/page.tsx` (`pt-12 md:pt-14`).
- Sections: `Hero`, `About`, `Games`, `Experience`, `Research`, `Skills`, `Contact` under `src/components/sections/`. These are fed by data files; prefer updating data instead of hardcoding.
- Language toggle: subdued boxy toggle in `src/components/ui/LanguageToggle.tsx`; keep square corners and low visual weight.

## Styling patterns
- Global styles in `src/app/globals.css` define brutalist utilities (`brutalist-shadow`, thick borders). Prefer using these utilities and Tailwind classes; keep components border-forward and angular.
- Typography: IBM Plex Sans/Mono configured in `layout.tsx`. Keep headings bold, uppercase/monospace accents per existing components.
- Animations: wrappers in `src/components/animations/` with Framer Motion; reuse instead of ad-hoc animations.

## Workflow & commands
- Install: `npm install` (on Windows PowerShell, prefer `npm.cmd install` if execution policy blocks scripts).
- Dev server: `npm run dev` (Next.js at http://localhost:3000). Debug: attach Node inspector on 9229 if needed.
- Build/export: `npm run build`; static export via `npm run export` (outputs `out/`).

## Testing & correctness guardrails
- Bilingual: whenever adding text or buttons, supply both `zh` and `en` entries and route through `t()`.
- Scroll/anchor changes: adjust nav offset (`Navigation.scrollToSection`) and main top padding together to avoid overlap or gaps.
- Keep links verified; use resume-provided URLs (e.g., TapTap, scheminghare itch pages, project sites for EIM/FunToMove).
- Maintain brutalist minimalism: no rounded corners unless explicitly present, no extraneous gradients/shadows, concise copy.

## Where to look for examples
- Data rendering patterns: `src/components/sections/Games.tsx` + `ProjectCard`, `Experience.tsx` + `TimelineItem`, `Research.tsx` link rendering.
- Language handling: `src/contexts/LanguageContext.tsx`, `LanguageToggle` usage across sections.
- Utility patterns: `src/lib/utils.ts`, constants in `src/lib/constants.ts` (section IDs).
