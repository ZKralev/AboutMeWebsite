# Spec Delta

## Purpose
Guarantees that every page of the site can be opened, refreshed and shared by its own URL on GitHub Pages.

## ADDED Requirements

### Requirement: Direct page URLs load the page
The site SHALL render the matching page when a visitor opens or refreshes any page URL directly.

#### Scenario: Open stack page directly
- **WHEN** a visitor opens `/AboutMeWebsite/stack` in a new tab
- **THEN** the My Stack page renders

#### Scenario: Unknown path
- **WHEN** a visitor opens a path that matches no page
- **THEN** the Home page renders
