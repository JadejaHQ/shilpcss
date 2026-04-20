# Contributing

Thanks for your interest in contributing to Shilp CSS. Contributions are
welcome! 🤗

We appreciate bug reports, feature requests, code improvements, and any other
forms of contribution.

To contribute to this project, Please take a moment to review this document
**before submitting a pull request**.

<br>

## Reporting Issues

If you encounter any issues or bugs, please
[Create an Issue](https://github.com/JadejaHQ/shilpcss/issues) on our GitHub
repository.

Provide as much detail as possible to help us reproduce and identify the
problem.

<br>

## Feature Requests

If you have an idea for a new feature or enhancement, feel free to create
[Feature Request](https://github.com/JadejaHQ/shilpcss/discussions/new?category=ideas)
on our GitHub repository.

Describe the feature or enhancement you would like to see, and provide any
additional context or examples.

<br>

## Pull Requests

We welcome pull requests!

**Please ask first before starting work on any significant new features.**

It's never a fun experience to have your pull request declined after investing a
lot of time and effort into a new feature.

To avoid this from happening, we request that contributors to first
[Discuss Pull Request](https://github.com/JadejaHQ/shilpcss/discussions/new?category=pull-request)
it.

<br>

## Contribute

1. [Fork The Repository](https://github.com/JadejaHQ/shilpcss/fork).
   - If already forked, then sync the `dev` branch
2. [Create an Issue](https://github.com/JadejaHQ/shilpcss/issues) or
   [Feature Request](https://github.com/JadejaHQ/shilpcss/discussions/new?category=ideas)
   if not exist.
3. Follow Branch naming conventions
   - Name must be in `kebab-case`
   - Name only contain alphanumericals (<kbd>A-Z</kbd>, <kbd>a-z</kbd> and
     <kbd>0-9</kbd>).
   - Name must start with the type of change
     - `feat` → new functionality
     - `fix` → bug fix
     - `docs` → documentation changes
     - `refactor` → code restructuring without behavior change
     - `test` → tests added or updated
     - `chore` → maintenance / tooling / setup
   - Followed by github issue id
   - > For example, <br> If issue (feature request) url is
     > https://github.com/JadejaHQ/shilpcss/issues/11, <br> then your branch
     > name must be `feat-11`
4. Create a new branch for your changes from the `dev`.
   - ```shell
     git checkout -b <branch-name> dev
     ```
5. Make your code changes in the new branch.
6. Create a changeset before committing.
   - **Stable release**:
     - ```bash
        pnpm release
       ```
   - **Prerelease (alpha, beta, rc)** — ensure the correct mode is set first:
     - ```bash
       pnpm pre:alpha   # or pre:beta / pre:rc
       pnpm release
       ```
   - **Return to stable releases**:
     - ```bash
       pnpm pre:exit
       pnpm release
       ```
7. Ensure your code adheres to the project's coding style and conventions.
   - NOTE: ⚠️ linter and formatter is not configured yet.
8. Commit the generated `.changeset` file along with your changes.
9. Push the branch to your forked repository.
10. Submit a pull request from your forked branch to the main repository (_`dev`
    branch_).

<br>

**A project maintainer will review your pull request, provide feedback if
necessary, and merge it once it meets the project's requirements.**

<br><br>

## Code Style and Conventions

Follow the existing code style and conventions used in the project.

Pay attention to naming conventions, formatting, and documentation standards.

NOTE: ⚠️ linter and formatter is not configured yet.

<br>

## License

By contributing to this project, you acknowledge and agree that any
contributions you make will be subject to the terms outlined in the project's
[LICENSE](https://github.com/JadejaHQ/shilpcss/blob/main/LICENSE) file.

---

Thank you for your time 🙂

_Last updated on April 19, 2026_
