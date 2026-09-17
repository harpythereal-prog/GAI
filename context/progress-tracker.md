# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Design system and UI primitives

## Current Goal

- Build the editor chrome shell (navbar, floating project sidebar, reusable dialog pattern) per `context/feature-specs/02-editor.md`.

## Completed

- Feature: Design system & UI primitives (`context/feature-specs/01-design-system.md`) — shadcn/ui initialized, `lucide-react` installed, `lib/utils.ts` provides `cn()`, and Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea are in `components/ui/`. Dark-theme tokens from `ui-context.md` are wired into `app/globals.css` and mapped to shadcn's semantic variables (`--background`, `--primary`, `--border`, etc.). Verified: `tsc --noEmit`, `npm run lint`, and `npm run build` all pass; a temporary smoke-test import of all 7 components compiled cleanly and was removed.
- Feature: Editor chrome shell, part 1 (`context/feature-specs/02-editor.md`) — added `components/editor/editor-navbar.tsx` (fixed-height top bar, left/center/right sections, sidebar toggle using `PanelLeftOpen`/`PanelLeftClose` driven by an `isSidebarOpen` prop, dark `bg-surface` background with a `border-surface-border` bottom border; right section left empty per spec), `components/editor/project-sidebar.tsx` (fixed-position floating overlay so it does not push page content, slides in/out from the left via a translate-x transition gated on an `isOpen` prop, header with "Projects" title + close button, shadcn `Tabs` with "My Projects"/"Shared" both showing an empty placeholder state, full-width "New Project" button with a `Plus` icon), and `components/editor/editor-dialog.tsx` (the reusable dialog pattern — wraps the existing `components/ui/dialog.tsx` primitives to support `title`, optional `description`, and optional `footer` actions via props, styled entirely through the existing `globals.css` tokens; no concrete dialog instance was built, per spec). Both editor components are `"use client"` since they attach event handlers directly. Neither is wired into `app/page.tsx` yet — that wiring wasn't in this unit's scope. Verified: `tsc --noEmit` and `npm run lint` both pass.

## In Progress

- None yet.

## Next Up

- Wire `EditorNavbar` + `ProjectSidebar` into an actual editor route/page, with the shared `isSidebarOpen` state lifted to a parent client component.
- Build the first concrete dialog on top of the `EditorDialog` pattern (e.g. "New Project").

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- The `shadcn` CLI resolved to v4.21.0, a notably different major version than classic shadcn/ui: it uses a "preset" system (chose **Nova — Lucide/Geist**, matching this project's existing icon/font choices), a unified `radix-ui` package instead of per-component `@radix-ui/react-*` packages, and a standalone `cn` npm package (drop-in `twMerge(clsx(...))` replacement) that `lib/utils.ts` re-exports from — this is the CLI's own generated convention, not hand-rolled.
- Removed the individually-installed `@radix-ui/react-slot|dialog|tabs|scroll-area` packages since the unified `radix-ui` package (added by `shadcn init`) supersedes them and is what the generated components actually import.

## Session Notes

- `shadcn init` overwrote `app/globals.css` with its own light-mode oklch defaults and a `.dark` class-toggle block; since `ui-context.md` specifies dark-only (no light mode), the light `:root` defaults were replaced with the project's dark tokens (`--bg-base`, `--text-primary`, etc.) and the now-dead `.dark` override block was removed. Also fixed a self-referential `--font-sans: var(--font-sans)` bug introduced by init (now points at `--font-geist-sans`).
- Per `ai-workflow-rules.md`, `components/ui/*` files were left exactly as generated — no edits after installation.
