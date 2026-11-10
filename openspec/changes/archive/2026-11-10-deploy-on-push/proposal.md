# Proposal
## Why
Deploy is manual (`npm run deploy`). Easy to forget, and nothing runs tests before publishing.
## What Changes
GitHub Actions workflow tests, builds and deploys to GitHub Pages on every push to `main`.
## Capabilities
### New Capabilities
### Modified Capabilities
## Impact
New `.github/workflows/deploy.yml`. Repo Pages source must switch from the `gh-pages` branch to "GitHub Actions". `npm run deploy` stops being the publish path.
