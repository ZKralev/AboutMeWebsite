# Spec Delta

## Purpose
Keeps images accessible to screen reader users by describing meaningful images and hiding decorative ones.

## ADDED Requirements

### Requirement: Meaningful images are described
Each image that carries information SHALL have alt text describing it.

#### Scenario: Portrait
- **WHEN** the About page renders
- **THEN** the portrait has alt text "Photo of Zdravko Kralev"

### Requirement: Decorative images are hidden
Images that only decorate, or repeat adjacent text, SHALL have empty alt text.

#### Scenario: Stack icon with label
- **WHEN** a tech icon renders beside its text label
- **THEN** the icon has empty alt text
