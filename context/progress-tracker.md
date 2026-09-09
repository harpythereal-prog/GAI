# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Design system and UI primitives

## Current Goal

- Define the immediate implementation goal here.

## Completed

- Feature: Design system & UI primitives (`context/feature-specs/01-design-system.md`) — shadcn/ui initialized, `lucide-react` installed, `lib/utils.ts` provides `cn()`, and Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea are in `components/ui/`. Dark-theme tokens from `ui-context.md` are wired into `app/globals.css` and mapped to shadcn's semantic variables (`--background`, `--primary`, `--border`, etc.). Verified: `tsc --noEmit`, `npm run lint`, and `npm run build` all pass; a temporary smoke-test import of all 7 components compiled cleanly and was removed.

## In Progress

- None yet.

## Next Up

- Add the next planned feature unit here.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- The `shadcn` CLI resolved to v4.21.0, a notably different major version than classic shadcn/ui: it uses a "preset" system (chose **Nova — Lucide/Geist**, matching this project's existing icon/font choices), a unified `radix-ui` package instead of per-component `@radix-ui/react-*` packages, and a standalone `cn` npm package (drop-in `twMerge(clsx(...))` replacement) that `lib/utils.ts` re-exports from — this is the CLI's own generated convention, not hand-rolled.
- Removed the individually-installed `@radix-ui/react-slot|dialog|tabs|scroll-area` packages since the unified `radix-ui` package (added by `shadcn init`) supersedes them and is what the generated components actually import.

## Session Notes

- `shadcn init` overwrote `app/globals.css` with its own light-mode oklch defaults and a `.dark` class-toggle block; since `ui-context.md` specifies dark-only (no light mode), the light `:root` defaults were replaced with the project's dark tokens (`--bg-base`, `--text-primary`, etc.) and the now-dead `.dark` override block was removed. Also fixed a self-referential `--font-sans: var(--font-sans)` bug introduced by init (now points at `--font-geist-sans`).
- Per `ai-workflow-rules.md`, `components/ui/*` files were left exactly as generated — no edits after installation.
