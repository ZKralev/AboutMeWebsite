# Proposal

## Why
`localStorage` access in the theme provider is unguarded. In browsers that block storage the site throws and renders blank.

## What Changes
Wrap theme reads and writes so failures fall back to the system preference.

## Capabilities
### New Capabilities
- `theme-preference`: choosing, persisting and restoring the light/dark theme.
### Modified Capabilities

## Impact
`src/context/ThemeContext.tsx`.
