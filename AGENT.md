# AGENT.md

Personal portfolio site for Zdravko Kralev (software engineer). Static single-page app, no backend.

## Stack
- React 18 + TypeScript 5, Vite (`vite.config.ts`), tests on Vitest + Testing Library
- `react-router-dom` v7, plain CSS (one `styles.css` per component), no UI library
- Hosted on GitHub Pages at `https://zkralev.github.io/AboutMeWebsite/`

## Commands
- `npm install`, `npm start` (dev server), `npm run build` (type check + build into `build/`), `npm test`, `npm run lint`, `npm run preview`
- Deploy: `.github/workflows/deploy.yml` tests, builds and publishes to GitHub Pages on every push to `main`; lint or test failures block the deploy
- Changes are planned with OpenSpec (`openspec/`); archive each change once verified

## Layout
- `src/App.tsx` - routes (`/`, `about`, `stack`, `exp`, `*` falls back to Home) with a 300ms fade between pages
- `src/Components/Pages/page.tsx` - shared shell: menu + `<Outlet />`
- `src/Components/Pages/{Home,AboutMe,MyStack,Experience}/` - one folder per page (`index.tsx` + `styles.css`)
- `src/Components/Menu/menu.json` - menu entries (edit this to add or rename a nav link)
- `src/Components/Pages/Experience/data.json` - job history; add entries here, not in JSX. Company logos are mapped by company name in `Experience/index.tsx` (`logoMap`), so a new company needs a logo import there too (without one the company name shows as text)
- `src/context/ThemeContext.tsx` - light/dark theme, stored in `localStorage`, applied as `data-theme` on `<html>`; CSS variables key off that attribute

## Conventions
- Build `base` is `/AboutMeWebsite/` (dev and tests run at `/`); the router basename comes from `import.meta.env.BASE_URL`. Import images from `src/` or use root-relative paths in `index.html` so the base is applied
- New page = new folder + route in `App.tsx` + entry in `menu.json` + title in `page.tsx` + file name in the `postbuild` list in `package.json`
- Shared classes (`.page-text`, `.menu-box`) are defined once (`src/index.css`, `Menu/styles.css`); all CSS is bundled globally, so don't redefine them per page
- My Stack: add a technology as one `[icon, label]` entry in `STACK` (`MyStack/index.tsx`)
- Style new components with the existing CSS variables so both themes work

## Gotchas
- Use npm, not yarn
- `postbuild` copies `build/index.html` to `404.html` and to `stack.html`, `about.html`, `exp.html`, so direct page links load and answer HTTP 200 on GitHub Pages. Don't remove it
