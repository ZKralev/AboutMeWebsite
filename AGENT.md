# AGENT.md

Personal portfolio site for Zdravko Kralev (software engineer). Static single-page app, no backend.

## Stack
- React 18 + TypeScript 4, Create React App 5 via `react-app-rewired` (`config-overrides.js` is a no-op)
- `react-router-dom` v6, plain CSS (one `styles.css` per component), no UI library
- Hosted on GitHub Pages: `homepage` in `package.json` is `https://zkralev.github.io/AboutMeWebsite/`

## Commands
- `npm install`, `npm start` (dev, port 3000), `npm run build`, `npm test`
- Deploy: `.github/workflows/deploy.yml` tests, builds and publishes to GitHub Pages on every push to `main`. CI treats lint warnings as errors, so check with `CI=true npm run build`
- Changes are planned with OpenSpec (`openspec/`); archive each change once verified

## Layout
- `src/App.tsx` - routes (`/`, `about`, `stack`, `exp`, `*` falls back to Home) with a 300ms fade between pages
- `src/Components/Pages/page.tsx` - shared shell: menu + `<Outlet />`
- `src/Components/Pages/{Home,AboutMe,MyStack,Experience}/` - one folder per page (`index.tsx` + `styles.css`)
- `src/Components/Menu/menu.json` - menu entries (edit this to add or rename a nav link)
- `src/Components/Pages/Experience/data.json` - job history; add entries here, not in JSX. Company logos are mapped by company name in `Experience/index.tsx` (`logoMap`), so a new company needs a logo import there too
- `src/context/ThemeContext.tsx` - light/dark theme, stored in `localStorage`, applied as `data-theme` on `<html>`; CSS variables key off that attribute

## Conventions
- Router uses `basename={process.env.PUBLIC_URL}`; keep asset paths relative to `PUBLIC_URL` so they work on the Pages subpath
- New page = new folder + route in `App.tsx` + entry in `menu.json`
- Style new components with the existing CSS variables so both themes work

## Gotchas
- Use npm, not yarn
- `public/404.html` exists for GitHub Pages SPA deep links; don't delete it
