# Design
One global `@media (prefers-reduced-motion: reduce)` rule in `index.css` shortens all animations and transitions. JS effects check `matchMedia` once: typing starts complete, route swap delay is 0.
