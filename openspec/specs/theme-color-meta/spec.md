# theme-color-meta Specification

## Purpose
Makes browser UI color on mobile match the visitor's active light or dark theme.

## Requirements

### Requirement: Theme color follows theme
The site SHALL set the theme-color meta tag to the background color of the active theme.

#### Scenario: Toggle to light
- **WHEN** the visitor switches to the light theme
- **THEN** the theme-color meta is the light page background (#f5f5f7)
