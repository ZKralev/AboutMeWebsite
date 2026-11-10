# page-titles Specification

## Purpose
Makes the browser tab title reflect the page the visitor is viewing so tabs and history entries are distinguishable.

## Requirements

### Requirement: Title reflects current page
The site SHALL set the document title to "<Page name> | Zdravko Kralev" for each page, and to "Zdravko Kralev" on Home.

#### Scenario: Navigate to stack
- **WHEN** the visitor opens the stack page
- **THEN** the tab title is "My Stack | Zdravko Kralev"
