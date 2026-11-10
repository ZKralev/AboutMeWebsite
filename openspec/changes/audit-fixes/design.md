# Design
- GitHub Pages serves `stack.html` for `/stack` with no redirect, so `postbuild` copies `index.html` to `stack.html`, `about.html`, `exp.html` plus `404.html` for unknown paths. The list must match the routes.
- CSS merge keeps the rule that was already winning in the bundle, so the look does not change.
- Theme colour: `getComputedStyle` on `--page-bg`; if empty the meta tag is left alone.
