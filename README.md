# Oqtane Docs Builder

This project generates the documentation for Oqtane using [docfx](https://dotnet.github.io/docfx/).

It's explained in detail on https://docs.oqtane.org/articles/documentation/

## Setup

To set everything up, do the following:

1. Clone this repository and the oqtane.framework repository in the same parent folder (e.g., `c:\projects\oqtane`), creating a structure like:

    ```
    some-root\
    ├── oqtane.docs
    ├── oqtane.framework
    ```

2. Run with Visual Studio:

   - Open the `Oqtane Docs Builder.sln` solution located in the `oqtane.docs` folder.
   - Rebuild the entire solution.

3. The final documentation is generated into the `/docs` folder.

## Test Locally

To test locally, considering some functionalities requiring JavaScript:

1. Set up IIS to publish the `/docs` folder on any domain of your choice, such as `docs.oqtane.me`.

## Publish

Upon pushing changes back to this repository, GitHub will automatically publish the updated documentation.

## Current Homepage

Visit the [current homepage](https://docs.oqtane.org) for a quick overview.

For further discussions, feedback, or questions, head over to [GitHub Discussions](https://github.com/oqtane/oqtane.docs/discussions).

Happy documenting!

