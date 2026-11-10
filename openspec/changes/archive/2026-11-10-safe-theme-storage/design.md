# Design
Add two tiny helpers in `ThemeContext.tsx` that wrap `localStorage.getItem/setItem` in try/catch. Reader returns null on failure; writer swallows the error.
