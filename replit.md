# August Krys — Portfolio Site

Personal portfolio website for August Krys at augustkrys.ai, with a planned AI assistant that answers questions about his resume and work.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run portfolio frontend
- `pnpm --filter @workspace/api-server run dev` — run API backend
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)

Required env vars: `DATABASE_URL` (auto-set when DB provisioned), `PORT`, `BASE_PATH`

## Stack

- **Monorepo**: pnpm workspaces
- **Frontend**: React 19, Vite 7, Tailwind CSS 4 (portfolio uses custom CSS, not Tailwind)
- **Backend**: Express 5, Node 24
- **Database**: PostgreSQL + Drizzle ORM (schema empty — not yet used)
- **API codegen**: Orval (from OpenAPI spec in `lib/api-spec/openapi.yaml`)
- **TypeScript**: 5.9

## Where things live

- `artifacts/portfolio/` — the portfolio site (react-vite, serves at `/`)
  - `src/portfolioContent.html` — full HTML body content (raw import)
  - `src/portfolio.css` — all site styles (verbatim from GitHub source)
  - `src/pages/Portfolio.tsx` — main React component with JS behaviors
  - `public/resumeimage.png` — profile photo
- `artifacts/api-server/` — Express API backend (serves at `/api`)
- `lib/api-spec/openapi.yaml` — API contract (source of truth)
- `lib/db/src/schema/` — Drizzle schema (empty, ready for AI assistant tables)

## Architecture decisions

- Portfolio uses `dangerouslySetInnerHTML` with a `?raw` HTML import to preserve 100% visual fidelity from the original static site without JSX conversion errors on complex inline SVGs.
- All original JS behaviors (scroll reveal, scroll spy, vim nav, modals, clock) run as a single `useEffect` with cleanup.
- No Tailwind used in the portfolio — custom CSS variables and class names from the original design are preserved as-is.
- AI assistant backend will use the existing Express API server (new routes) and Replit AI Integrations for the LLM.

## Product

- Full personal portfolio for August Krys: Hero, How I Think, Operating Principles, Builder Projects, Experience (Salesforce, Krys IT), Skills, AI Harness
- Status bar with vim-style keyboard navigation (j/k scroll, g/G top/bottom)
- Section scroll-spy that highlights the active tab
- Live clock in the status bar

## User preferences

- Site should match the original GitHub repo (not2technical/resume) exactly
- AI assistant to be added as a follow-up iteration
- Will be hosted at augustkrys.ai

## Gotchas

- `portfolioContent.html` is imported as a raw string via Vite's `?raw` suffix — do not process it through React's JSX transform
- Profile image served from `/resumeimage.png` (in `public/`) — the portfolio HTML references it at this root path
- The portfolio uses its own `portfolio.css`, not the Tailwind `index.css` used by the scaffold
