# Spec Delta

## Purpose
Defines how the site identifies itself to browsers, installers and link-preview crawlers.

## ADDED Requirements

### Requirement: Link previews
The home document SHALL expose Open Graph title, description, URL and image so shared links render a preview.

#### Scenario: Shared on LinkedIn
- **WHEN** a crawler fetches the site URL
- **THEN** it finds `og:title`, `og:description`, `og:url` and an absolute `og:image`

### Requirement: Manifest names the site
The web app manifest SHALL name the site "Zdravko Kralev".

#### Scenario: Install prompt
- **WHEN** a browser reads the manifest
- **THEN** name and short name are "Zdravko Kralev"
