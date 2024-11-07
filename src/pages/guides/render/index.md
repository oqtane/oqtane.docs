
## An Example-Render

This should explain a basic render process of one specific scenario,
as a foundation for understanding the various scenarios explained later on.

The scenario is a **Interactive WASM** Oqtane site _without_ **Prerendering**.
This means:

1. The server is responsible for delivering data to the Web Assembly client.
2. The Web Assembly client is responsible for
    1. generating the HTML
    2. Handing the HTML to the browser
    3. handling user interactions

What will happen is this:

1. The browser requests the page
1. The server generates some minimal HTML containing a bit of JavaScript to load the WASM
1. The browser loads the bootloader
1. The bootloader requests all the WASM files containing Blazor themes, components, services and more
1. The Server returns these WASM files, some were precompiled / optimized, others are .net assemblies converted on the fly.
1. The bootloader hands over to the WASM to run the application
1. The WASM requests the data from the server - especially the site structure and the current page structure
1. The WASM runs the theme "component" to generate the HTML
1. The theme uses the site structure, settings etc. to generate the menus (usually with other Blazor controls)
1. The theme uses the page structure to generate the Panes and Modules inside the panes
1. Each module first loads a **Container** which is another small wrapper Blazor component
1. ...and inside that container the module is loaded
1. The module requests the data it needs from the server
1. The module generates the HTML


## Ways a Theme and Module can Render

1. SSR - Initial Load - Easiest to understand
1. SSR - Soft-Load - enhanced Navigation

1. Prerender

1. Interactive Server - Initial Load
1. Interactive Server - Soft-Load

1. Interactive Client WASM - Initial Load
1. Interactive Client WASM - Soft-Load

Your Theme or Control could be

1. Static Output
1. Interactive Output

...and it could be inside of a Module or a Theme which is

1. Static
1. Interactive

...and the site could be

1. Static
1. Interactive
1. Automatic - starting as static and transferring to Interactive


## Flow of a Click - Event

1. SSR: Click....tbd

[← Back to Documentation Guides Home Page](../index.md)