# Design
- `base` is `/AboutMeWebsite/` for builds, `/` for dev and tests. Router basename is `import.meta.env.BASE_URL` without trailing slash.
- `build.outDir` stays `build`, so workflow, `.gitignore` and the `404.html` copy step are unchanged.
- `npm start` kept as the dev command. `npm run build` type-checks then builds.
- Vitest with jsdom and globals; `jest.spyOn` becomes `vi.spyOn`.
- No ESLint replacement in this change.
