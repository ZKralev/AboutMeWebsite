# AGENT.md

Personal portfolio site for Zdravko Kralev (software engineer). Static single-page app, no backend.

## Stack
- React 18 + TypeScript 5, Vite (`vite.config.ts`), tests on Vitest + Testing Library
- `react-router-dom` v6, plain CSS (one `styles.css` per component), no UI library
- Hosted on GitHub Pages at `https://zkralev.github.io/AboutMeWebsite/`

## Commands
- `npm install`, `npm start` (dev server), `npm run build` (type check + build into `build/`), `npm test`, `npm run preview`
- Deploy: `.github/workflows/deploy.yml` tests, builds and publishes to GitHub Pages on every push to `main`. There is no lint step
- Changes are planned with OpenSpec (`openspec/`); archive each change once verified

## Layout
- `src/App.tsx` - routes (`/`, `about`, `stack`, `exp`, `*` falls back to Home) with a 300ms fade between pages
- `src/Components/Pages/page.tsx` - shared shell: menu + `<Outlet />`
- `src/Components/Pages/{Home,AboutMe,MyStack,Experience}/` - one folder per page (`index.tsx` + `styles.css`)
- `src/Components/Menu/menu.json` - menu entries (edit this to add or rename a nav link)
- `src/Components/Pages/Experience/data.json` - job history; add entries here, not in JSX. Company logos are mapped by company name in `Experience/index.tsx` (`logoMap`), so a new company needs a logo import there too
- `src/context/ThemeContext.tsx` - light/dark theme, stored in `localStorage`, applied as `data-theme` on `<html>`; CSS variables key off that attribute

## Conventions
- Build `base` is `/AboutMeWebsite/` (dev and tests run at `/`); the router basename comes from `import.meta.env.BASE_URL`. Import images from `src/` or use root-relative paths in `index.html` so the base is applied
- New page = new folder + route in `App.tsx` + entry in `menu.json`
- Style new components with the existing CSS variables so both themes work

## Gotchas
- Use npm, not yarn
- `postbuild` copies `build/index.html` to `build/404.html`; that is what makes direct page links work on GitHub Pages. Don't remove it
