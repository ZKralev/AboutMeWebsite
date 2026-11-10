# Proposal
## Why
Create React App is deprecated, slow, and pins old tooling with audit findings that only breaking upgrades fix.
## What Changes
Replace CRA (`react-scripts`, `react-app-rewired`, `customize-cra`, webpack) with Vite and Vitest. TypeScript 5. Same pages, routes, URLs and output folder. **BREAKING** for contributors: ESLint `react-app` config goes away with CRA; no lint step until one is added.
## Capabilities
### New Capabilities
### Modified Capabilities
## Impact
`package.json`, lockfile, `index.html` moves to repo root, new `vite.config.ts`, `tsconfig.json`, test setup, `App.tsx` basename, deploy workflow test command.
