# theme-preference Specification

## Purpose
Defines how the site picks, applies and remembers the visitor's light or dark theme, including when browser storage is unavailable.

## Requirements

### Requirement: Theme falls back to system preference
The site SHALL use the visitor's saved theme if available, otherwise the system color scheme.

#### Scenario: Nothing saved
- **WHEN** no theme is saved and the system prefers dark
- **THEN** the dark theme is applied

### Requirement: Site works without storage
The site MUST render and let the visitor toggle the theme even when browser storage throws on read or write.

#### Scenario: Storage blocked
- **WHEN** reading or writing browser storage throws
- **THEN** the page still renders and the toggle still changes the theme for the session
