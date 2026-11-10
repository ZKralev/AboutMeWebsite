# Proposal
## Why
Typing effect, fades and pulse run even when the visitor asked the system to reduce motion.
## What Changes
With reduced motion: CSS animations and transitions are effectively off, typing text shows at once, page change has no fade delay.
## Capabilities
### New Capabilities
- `reduced-motion`: site honors the reduced-motion system setting.
### Modified Capabilities
## Impact
`src/index.css`, Home typing component, `src/App.tsx`.
