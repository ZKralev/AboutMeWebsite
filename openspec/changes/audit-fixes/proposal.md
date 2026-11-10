# Proposal
## Why
Repo audit found ten issues: sub-pages answer HTTP 404, duplicated global CSS rules, contact data exposed to scrapers, four parallel lists on My Stack, no Experience test, a typing-effect timer leak, oversized icons, dead code, a hardcoded age, and theme colours duplicated in code.
## What Changes
- Sub-page URLs answer HTTP 200 (static copy of the app shell per page).
- One `.page-text` and one `.menu-box` rule; same rendered result.
- About Me: phone number and age removed, email becomes a `mailto:` link.
- My Stack driven by one list. Tests for Experience and My Stack.
- Typing effect stops its timers when done. Icons resized. Dead CSS and data removed.
- Browser-bar colour read from the CSS variable.
## Capabilities
### New Capabilities
### Modified Capabilities
- `spa-deep-links`: page URLs must answer with a success status, not only render.
## Impact
`package.json` postbuild, page styles, About Me, My Stack, Home, ThemeContext, Experience data, tests, images.
