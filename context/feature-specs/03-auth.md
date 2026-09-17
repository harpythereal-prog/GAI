Clerk is already installed and connected. Wire it into Next.js app: provider, auth pages, redirects, route protection, and user menu .

## Design

Use Clerk's 'dark' theme from '@clerk/ui/themes' as the base .

Overrside Clerk apperance variables using the app,s existing CSS variables. Do not hardcore colors.

###  Sign-in and sign-up pages: 

- large screens: simple two-panel layout, 50/50 width split, left panel on `bg-elevated` to differentiate it from the `bg-base` right panel (per reference screenshot supplied after the initial build)
- left: compact logo, tagline, short feature list (small icon + title + one-line description per item — updated from text-only per the same reference screenshot; still no card backgrounds/borders around each item)
- right: centered Clerk form
- small screens: form only
- no gradients
- no oversized hero sections
- no feature cards
- no scroll-heavy layouts

Keep the layout minimal and professional.

## Implementation

wrap the root layout with 'ClerkProvider' using Clerk's 'dark' theme.

Create sign-in and sign-up pages using Clerk components.

Use 'proxy.ts' at the project root, not 'middleware.ts'

Define public routers using the existing sign-in and sign-up env vars. Protect everything elseby default. 

Update '/':

- authenticated users redirect to '/editor'
- unauthenticated users redirects to'/sign-in'

Add Clerk's built-in 'UserButton' to the editor navbar right section for profile settings and logout. 

Keep Clerk's default user menu and profile flows intact. Do not revuild or heavily customize Clerk internals.

Use existing Clerk env vars. Do not rename or invent new ones. 

## Dependencies

install: @clerk/ui.

## Check When Done

- 'proxy.ts' exists at the root
- all routes are protected exept public auth paths
- auth pages use CSS variables with no hardcoded colors 
- 'ClerkProvider' wraps the root layout 
- 'npm run build' passes  