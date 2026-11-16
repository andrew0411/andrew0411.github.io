# andrew0411.github.io — Agent Instructions

Personal academic site and blog of Jaehwan Lee (Ph.D. student, ISyE, UW–Madison).

## Stack

- Astro 5 + MDX (remark-math, rehype-katex), Pagefind search, sitemap, RSS
- Deploy: push to `main` → GitHub Actions (`.github/workflows/gh-pages.yml`) → GitHub Pages
- Commands: `npm run dev` (localhost:4321), `npm run build` (Astro + Pagefind → `dist/`), `npm run cv:pdf` (regenerates `public/cv.pdf`)

## Content sources

- `src/data/profile.ts` is the single source for About, Publication, and CV. Edit it, not the pages.
- `public/cv.pdf` is generated from the `/cv` page (print stylesheet) by `scripts/build-cv-pdf.mjs`. Run `npm run cv:pdf` after any `profile.ts` change and commit the PDF.
- Achievements log used to update the profile: `R:\phd-hub\10_career\achievements.md`.
- Blog posts: `src/content/blog/*.mdx`. Follow `.claude/rules/mdx-formatting.md`.

## Verification policy

Choose the level before editing and state it in the report. Stop once its checks pass.

| Level | Scope | Checks |
|---|---|---|
| L1 | Blog post, text, or PDF swap | `npm run build` passes |
| L2 | Page, component, or data-structure change | L1 + local preview of changed pages: desktop/mobile width, light/dark theme; `npm run cv:pdf` and inspect the PDF when CV data or styles change |
| L3 | Site-wide redesign or dependency upgrade | L2 on every page + internal link check |

## Rules

- No commit or push unless explicitly requested.
- By-products go to `.agent-scratch/` (git-ignored).
- Project documentation: this file, `progress.md`. Session logs belong in the app-development Obsidian vault (path not yet assigned — ask before creating).
