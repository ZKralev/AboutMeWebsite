# reduced-motion Specification

## Purpose
Makes the site comfortable for visitors who set their system to reduce motion.

## Requirements

### Requirement: Honor reduced motion
When the visitor's system requests reduced motion, the site SHALL show content without animation.

#### Scenario: Home text
- **WHEN** reduced motion is requested and Home renders
- **THEN** the welcome lines appear in full immediately

#### Scenario: Page change
- **WHEN** reduced motion is requested and the visitor navigates
- **THEN** the new page shows without a fade
