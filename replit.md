# August Krys — Portfolio Site

Personal portfolio website for August Krys at augustkrys.ai, with a planned AI assistant that answers questions about his resume and work.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run portfolio frontend
- `pnpm --filter @workspace/api-server run dev` — run API backend
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks from OpenAPI spec

Required env vars: `PORT` (defaults to 3000), `BASE_PATH` (defaults to `/`)

## Stack

- **Monorepo**: pnpm workspaces
- **Frontend**: React 19, Vite 7 (portfolio uses custom CSS, not Tailwind)
- **Backend**: Express 5, Node 24
- **Database**: PostgreSQL + Drizzle ORM (schema empty — not yet used)
- **TypeScript**: 5.9

## Where things live

- `artifacts/portfolio/` — the portfolio site (react-vite, serves at `/`)
  - `src/index.css` — full site styles (verbatim from GitHub source styles.css + hero__photo rule)
  - `src/pages/Portfolio.tsx` — root component; mounts section components + all JS behaviors via useEffect
  - `src/components/` — one file per section: HeroSection, HowIThinkSection, OperatingPrinciplesSection, ProofIBuildSection, HarnessSection, DetailSection, ExperienceModal, FooterSection, StatusBar
  - `public/resumeimage.png` — profile photo (rendered in HeroSection)
- `artifacts/api-server/` — Express API backend (serves at `/api`)
- `lib/api-spec/openapi.yaml` — API contract (source of truth)
- `lib/db/src/schema/` — Drizzle schema (empty, ready for AI assistant tables)

## Architecture decisions

- Portfolio is componentized JSX: each page section is its own file under `src/components/`, converted from the original static HTML with proper camelCase SVG attrs and style objects.
- All original JS behaviors (scroll reveal, scroll-spy, vim j/k/g/G nav, live clock, modal open/close) run in a single `useEffect` in `Portfolio.tsx` with full cleanup.
- No Tailwind used in the portfolio — custom CSS variables and class names from the original design preserved in `src/index.css`.
- `vite.config.ts` uses sensible defaults for `PORT` and `BASE_PATH` so builds work without mandatory env vars.
- AI assistant backend will use the existing Express API server (new routes) + Replit AI Integrations for the LLM.

## Product

- Full personal portfolio for August Krys: Hero, How I Think, Operating Principles, Builder Projects, Experience (Salesforce, Krys IT), AI Harness, Resume, Footer
- Status bar with vim-style keyboard navigation (j/k scroll, g/G top/bottom)
- Section scroll-spy that highlights the active tab
- Live clock in the status bar
- Experience modal (opens on detail section link click)

## User preferences

- Site should match the original GitHub repo (not2technical/resume) exactly
- AI assistant to be added as a follow-up iteration
- Will be hosted at augustkrys.ai

## Gotchas

- Profile image served from `/resumeimage.png` (in `public/`) — rendered as circular hero photo
- Portfolio CSS lives in `src/index.css` — do not add Tailwind imports or scaffold boilerplate back
- Modal open/close uses event delegation via `data-open-modal` / `data-close-modal` HTML attributes
