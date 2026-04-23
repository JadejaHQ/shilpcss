# Changelog

# 1.0.0-alpha.3

## Patch Changes

- Refactor actions workflows
  - Refactor job execution conditions (earlier it was producing race conditions)
  - Used "Reusable Workflows" instead of "Dependent Workflows"
  - `ci.yml`: execution conditions made more strictor
  - `create-release-pr.yml` and `docs.yml`
    - now called and executed by `ci.yml` conditionally as its job
    - this workflows splitted into two jobs, one for evaluation and other for
      actual job
  - `release.yml` splitted into two jobs, one for evaluation and other for
    actual job

## 1.0.0-alpha.2

### Patch Changes

- Minor changes in github issue templates
  - `bug_report.yml`: is not visible, bug not identified yet
  - `config.yml`: enable blank template due to `bug_report.yml` is not visible
  - `docs.yml`: removed emoji from name
- Disable turbo repo telemetry

## 1.0.0-alpha.1

### Patch Changes

- Remove "shilpcss-docs" from changeset

## 1.0.0-alpha.0

शुभारम्भः

---

**Shilp CSS Monorepo**

All notable changes to this project is documented in this file.

The format is loosely based on
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).
