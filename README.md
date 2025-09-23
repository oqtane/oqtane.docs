# Oqtane Docs Builder

This project generates the documentation for Oqtane using [docfx](https://dotnet.github.io/docfx/).

It's published on [docs.oqtane.org](https://docs.oqtane.org).

## Setup, Build & Publish

To set everything up, follow the instructions on <https://docs.oqtane.org/dev/docs/index.html/>.

For further discussions, feedback, or questions, head over to [GitHub Discussions](https://github.com/oqtane/oqtane.docs/discussions).

## NPM Scripts

`cd docs-src`

- `npm run docfx-metadata` – runs the wrapper script that injects temporary stubs and executes `docfx metadata`.
- `npm run docfx-build` – run `docfx build` to regenerate the output in `../docs`.
- `npm run docfx-serve` – runs the build metadata pipeline and then starts `docfx serve ../docs --hostname localhost --port 8080`.

_All three commands rely on PowerShell (`pwsh`) being available on your PATH._

## Join Our Community

For more interactive discussions and community support, join us on Discord!

[![Join our Discord](https://img.shields.io/badge/Join%20Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/BnPny88avK)

Happy documenting!
