# August Krys — Portfolio Site

Personal portfolio website for August Krys at augustkrys.ai, with an AI assistant ("Ask August") that answers questions in his voice.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run portfolio frontend
- `pnpm --filter @workspace/api-server run dev` — run API backend
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

Required secrets: `CLAUDE_API_KEY` (Anthropic API key for the chat assistant)

## Stack

- **Monorepo**: pnpm workspaces
- **Frontend**: React 19, Vite 7 (portfolio uses custom CSS, no Tailwind)
- **Backend**: Express 5, Node 24, Anthropic SDK (`@anthropic-ai/sdk`)
- **Database**: PostgreSQL + Drizzle ORM (schema empty — not yet used)
- **TypeScript**: 5.9

## Where things live

- `artifacts/portfolio/` — the portfolio site (react-vite, serves at `/`)
  - `src/index.css` — full site styles + chat widget CSS at the bottom
  - `src/pages/Portfolio.tsx` — root component; mounts all section components + ChatWidget
  - `src/components/` — HeroSection, HowIThinkSection, OperatingPrinciplesSection, ProofIBuildSection, HarnessSection, DetailSection, ExperienceModal, FooterSection, StatusBar, **ChatWidget**
- `artifacts/api-server/` — Express API backend (serves at `/api`)
  - `src/routes/chat.ts` — `POST /api/chat` SSE streaming route (Claude)
  - `src/knowledge/august.md` — source markdown (edit this file directly; esbuild inlines it at build time via `.md` text loader — no compile step needed)
- `lib/api-spec/openapi.yaml` — API contract (source of truth)

## Architecture decisions

- Portfolio is componentized JSX: each page section is its own file, converted from original static HTML.
- All JS behaviors (scroll reveal, scroll-spy, vim nav, live clock, modal) run in a single `useEffect` in `Portfolio.tsx`.
- No Tailwind — custom CSS variables and class names from original design preserved in `src/index.css`.
- Knowledge base is a `.md` file compiled to a `.ts` string export so esbuild inlines it at build time (no file-system reads at runtime).
- Chat uses SSE streaming: `POST /api/chat` → server-sent events → token-by-token render in the widget.
- `ChatWidget` is self-contained; no external UI deps — navy/cyan palette matches the site CSS vars.

## Product

- Full personal portfolio: Hero, How I Think, Operating Principles, Builder Projects, Experience, AI Harness, Resume, Footer
- Status bar with vim-style keyboard navigation (j/k scroll, g/G top/bottom), scroll-spy, live clock
- Experience modal (opens on detail section link click)
- **"Ask August" AI chat widget** — floating button bottom-right, expands to panel, streams Claude responses in August's voice with starter prompt chips

## User preferences

- Site should match the original GitHub repo (not2technical/resume) exactly
- Hosted at augustkrys.ai

## Gotchas

- Knowledge base: edit `august.md`, then run the node script in `src/knowledge/` to regenerate `august.ts` before restarting the server
- Portfolio CSS lives in `src/index.css` — do not add Tailwind or boilerplate back
- Modal open/close uses event delegation via `data-open-modal` / `data-close-modal` HTML attrs
- Chat widget clears the status bar (z-index 30, positioned `bottom: 50px`)
