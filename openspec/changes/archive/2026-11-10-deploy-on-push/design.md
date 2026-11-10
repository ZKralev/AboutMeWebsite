# Design
Official Pages actions (`upload-pages-artifact`, `deploy-pages`), no third-party action and no `gh-pages` branch push. Tests run first; a failure blocks the deploy. CI treats lint warnings as errors.
