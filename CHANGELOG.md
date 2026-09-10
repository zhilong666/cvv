# Changelog

All notable changes to this repository are documented in this file.

## [v1.1] - 2026-09-10
### Added
- Split interaction logic into separate files: `js/interaction.js` and `docs/js/interaction.js`.
- Split interaction styles into `css/interaction.css` and `docs/css/interaction.css`.
- Updated `index.html` and `docs/index.html` to import the new interaction files.
- Ensured `js/script.js` remains for basic navigation and now loads interaction module as well.

### Improved
- Reveal-on-scroll animations (IntersectionObserver) with staggered timeline entries.
- Button hover/press feedback and keyboard accessibility for navigation toggle.
- Responsive and reduced-motion aware interaction styles.

### Notes
- Interaction files are duplicated under both root and docs directories to avoid path mismatches when serving from either location (GitHub Pages / local preview).

