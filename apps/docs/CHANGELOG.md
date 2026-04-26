# Changelog

## 1.0.0-alpha.6

### Minor Changes

- feat: add basic usage example for properties and mixins

### Patch Changes

- refactor: separate **backdrop filter** from **filter**
  - create a new folder in content and moved backdrop related filters
  - move indent indicator from `li` to `li a` for `data-folder-page`
- fix: add correct description for text intent's utilites
- refactor: add correct titles, descriptions for all docs pages
- refactor: docs topics navigation label
  - make properties labels match utility's first token
    - links url and text changed accordingly
    - for `scroll-m` and `scroll-p`, an additional label was required
  - exlude `/docs/changelog` from `uppercase` styles
  - removed files and folder `title` to be inherited from `label`

## 1.0.0-alpha.5

### Minor Changes

- Add new **changelog** docs pages
- Refactor `rss.xml` to include only **changelog** pages
- Disable nextjs telemetry
- Updated metadata for better SEO and user experience
- Added keywords to layout and work-with-me pages

### Patch Changes

- From `rss.xml`, remove 1:1 mapping with sitemap
- Made minor adjustments to the work-with-me page for better structure and
  readability

## 1.0.0-alpha.4

### Minor Changes

- Improve frontmatter data for docs pages
  - Add description
  - Add keywords
  - Improve title

### Patch Changes

- Fix duplicate `h1`
- Fix wrong pathnames
- Reduce title length of "/work-with-me" page

## 1.0.0-alpha.3

### Patch Changes

- Fix rss.xml content
  - remove home page duplicate
  - refactor `guid`
  - remove duplicate slash (`...com//...`) in `url`
- Fix typo in content link
- Refactor analytics
  - Create component and add it at the end of body
  - Fix MS Clarity script
  - Render only for production environment

## 1.0.0-alpha.2

### Minor Changes

- Basic Search Engine Indexing & Analytics
  - Add canonical urls with mime-types including llms.txt and text/markdown for
    ai
  - Add GA4 and MS Clarity for tracking
  - Add rss.xml

## 1.0.0-alpha.1

### Patch Changes

- docs: fix typos and docs link styles, improve content
  - Fix docs active link styles affected by
  - Fix few typos in content
  - Improve intro line of [ Work With Me ] page

## 1.0.0-alpha.0

शुभारम्भः

---

**Shilp CSS Docs**

All notable changes to this project is documented in this file (using
changeset).

The format is loosely based on
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).
