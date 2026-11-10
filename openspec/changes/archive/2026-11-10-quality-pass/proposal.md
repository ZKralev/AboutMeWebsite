# Proposal
## Why
Owner review after deploy: About Me photo is cropped on desktop, Conga has no logo, menu colours are hardcoded, there is no lint step, `react-router` has audit findings, and the site icons are still the React defaults.
## What Changes
- About Me photo keeps its proportions on desktop.
- Conga logo (purple wordmark) on Experience.
- Menu colours come from theme variables. No visual change: the menu is dark in both themes by design.
- ESLint (TypeScript, React hooks, jsx-a11y) with a `lint` script, run in the deploy workflow.
- `react-router-dom` 6 to 7.
- "ZK" favicon and app icons replace the React logo.
## Capabilities
### New Capabilities
### Modified Capabilities
## Impact
About Me and Menu styles, Experience logos, `App.tsx` fade logic (state derived instead of set in an effect), `package.json`, lockfile, workflow, `public/` icons.
