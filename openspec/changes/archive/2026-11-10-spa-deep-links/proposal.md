# Proposal
## Why
Opening or refreshing any page except Home shows a blank page. GitHub Pages serves `404.html` for unknown paths, and ours is an empty shell that never loads the app.
## What Changes
Build copies `index.html` to `404.html`, so the app loads on any path and the router shows the right page. Static `public/404.html` removed.
## Capabilities
### New Capabilities
- `spa-deep-links`: every page URL works when opened directly.
### Modified Capabilities
## Impact
`package.json` build script, `public/404.html`.
