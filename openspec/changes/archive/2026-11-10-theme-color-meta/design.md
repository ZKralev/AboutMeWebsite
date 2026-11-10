# Design
Existing effect in ThemeContext sets `data-theme`. Same effect sets `meta[name=theme-color]` content: `#000000` dark, `#ffffff` light. Values read from existing CSS variables to stay in sync if found; else hardcode.
