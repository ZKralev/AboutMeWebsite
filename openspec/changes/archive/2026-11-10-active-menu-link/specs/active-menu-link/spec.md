# Spec Delta

## Purpose
Helps visitors see which page they are on by marking it in the menu.

## ADDED Requirements

### Requirement: Current page is marked
The menu SHALL visually highlight the link of the current page and mark it with `aria-current="page"`.

#### Scenario: On stack page
- **WHEN** the visitor is on the stack page
- **THEN** only the "My Stack" link is marked current
