# Oqtane Documentation

Here we'll explain how the documentation works, with all the magic in it.

## The Basics

> [!TIP]
> The `Oqtane.Docs` project generates the documentation for Oqtane using [docfx](https://dotnet.github.io/docfx/).
> So for the most part, you'll want to read the docfx documentation to understand how it works.

This is how it works

1. This project has a `src` folder containing...
    1. a bunch of markdown files for standalone docs pages
    1. a bunch of markdown files which will be merged with XML-docs in the source of Oqtane
    1. various YAML files (`.yml`) which describe the navigation structure
    1. Solution (`.sln`) and project (`.csproj`) files to build the documentation
    1. docfx configurations (`docxf.json` and `filterConfig.yml`)
    1. various json configs so it also works in VS-Code
1. It requires the `Oqtane.Framework` project to be in a sibling folder (see setup details below)
1. When you build this project, it will
    1. Compile Oqtane
    1. Extract the XML documentation from Oqtane and generate YAML and markdown files
    1. Merge the generated files with the ones in this project
    1. Generate a `../docs` folder with the documentation which are static HTML files that can be hosted anywhere
1. When pushed back to Github, Github will automatically build and deploy the documentation to <https://docs.oqtane.org>

> [!NOTE]
> When testing the generated docs locally, you'll need to host the `../docs` folder on a web server.
> This is because there are some absolute paths used in some JavaScripts for the TOC (table of contents) and search functionality.
> The setup is explained below.

## Setup

To set everything up, clone this repository and the oqtane.framework repository in the same parent folder (e.g., `c:\projects\oqtane`), creating a structure like:

```text
some-root\
├── oqtane.docs
├── oqtane.framework
```

## Build and Test Locally using Visual Studio

1. Run with Visual Studio:

   - Open the `Oqtane.Docs.sln` solution located in the `/src` folder.

   - Rebuild the entire solution. It is generated into the root `/docs` folder.

2. Test Locally

    - Set up IIS to publish the `/docs` folder on any domain of your choice, such as `docs.oqtane.me`.

## Build and Test Locally using VS Code

1. Run with VS Code:

    - Open the `Oqtane.Docs.code-workspace` workspace located in the `/src` folder.

    - Rebuild the entire solution (`Ctrl+Shift+B`). It is generated into the root `/docs` folder.

2. Test Locally - three options:

    - _Either:_ Set up IIS to publish the `/docs` folder on any domain of your choice, such as `docs.oqtane.me`.

    - _Or:_ Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension to serve the `/docs` folder on `http://localhost:5500` using `Alt + L, Alt + O`.

    - _Or:_ Use [IIS Express Extension](https://marketplace.visualstudio.com/items?itemName=warren-buckley.iis-express) to serve the `/docs` folder on `http://localhost:27629` using `Ctrl+F5`.

## Publish

Upon pushing changes back to this repository, GitHub will automatically publish the updated documentation to <https://docs.oqtane.org>.

## Questions

For further discussions, feedback, or questions, head over
to [GitHub Discussions](https://github.com/oqtane/oqtane.docs/discussions)
or [GitHub Issues](https://github.com/oqtane/oqtane.docs/issues).
