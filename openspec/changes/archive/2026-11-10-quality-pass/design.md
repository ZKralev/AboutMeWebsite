# Design
- Photo: `align-items: flex-start` on the About Me row; it was stretching to the text column height and cropping.
- Lint: ESLint 9, because `eslint-plugin-jsx-a11y` does not support 10 yet.
- Fade: the exit stage is computed from URL vs shown page, which satisfies the hooks lint rule and removes one state.
- Icons generated once with Pillow; no build step.
