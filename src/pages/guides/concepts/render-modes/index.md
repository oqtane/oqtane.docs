---
uid: Oqtane.Concepts.RenderModes.Index
---

# Oqtane Render Modes

Oqtane supports multiple render modes to provide flexibility and performance optimization.
Each render mode has its own characteristics and use cases.
Here we'll give you some background, explain the differences and provide recommendations.

> [!TIP]
> Render Modes are strongly related to the separation of **Server Code** and **UI/Client Code**.
>
> So before you continue, make sure you understand the
> [Server Code and UI/Client Code Separation](xref:Oqtane.Concepts.ServerClientCodeSeparation.Index).


## TL;DR: Recommendations

In case you just want a quick answer and don't want to read the entire article, here are some recommendations:

### For Web Sites

* Render Mode: `Static`
* Runtime: `Server (SignalR)`
* Prerender: `Yes`
* Hybrid: `No` (unless you're creating MAUI apps)

### For Web Applications

* Render Mode: `Interactive`
* Runtime: `Server (SignalR)`
* Prerender: `Yes`
* Hybrid: `No` (unless you're creating MAUI apps)

### General Recommendations

* Avoid the **Runtime**: `Auto` for now, as many features will not work correctly.
* Only use **Hybrid**: `Yes` if you're creating MAUI apps.


## Background: Where Does UI Code / Client Code Run?

There are quite a few reasons why the UI Code should **not run in the browser**.
The UI Code / Client Code is the part of code which is responsible for rendering the UI.
This is basically just:

1. Generate HTML
1. Render UI, do some animations / transitions
1. Respond to user input (like transition no elsewhere; show other input fields)
1. Make network requests

This is quite simple and historically (e.g. with ASP.NET, PHP, etc.)
all of this was done on the server, with some JavaScript sprinkled in.
So it's quite natural to have the UI Code run on the server.

Blazor introduced the ability to run the UI Code in the browser,
which brings some of the benefits of a native app or SPAs
(Single Page Applications) to C# developers.
But it also introduced many new challenges.
For example, search crawlers are not able to run WebAssembly,
so they can't index the site.

Note that this problem is not unique to Blazor.
Any SPA (Single Page Application) has these problems.

> [!TIP]
> Because of these challenges, Blazor supports running the UI Code on the server.
>
> The developer or the site administrator can choose where the UI Code runs - and when.

These are the typical options in Oqtane:

1. Run the UI Code in the browser only (Render: **Interactive**; Runtime: **Client WebAssembly**)
1. Run the UI Code on the server only (Render: **Static**; Runtime: **SignalR**)

Especially when doing **Interactive**, you may still want to provide HTML
to search crawlers or improve startup experience for the user.
This is why there is also the option to **Prerender** the site.

## Oqtane: Difference between Render Modes and Runtime Options

The **Render Mode** determines how the browser receives new HTML and updates the page.

The **Runtime** options determine where the UI Code for the Blazor Components is executed.

## Oqtane Render Modes Settings

### Oqtane Render Mode: Interactive

In this mode the HTML is modified/updated in the browser,
through code which does DOM-Tree diffs and updates the parts as needed.

How it does this depends on the **Runtime** option.
But the essence is: code in the browser will continuously modify the DOM
and give the user a SPA experience, without the entire page reloading on every click.

### Oqtane Render Mode: Static

In this mode the HTML is generated on the server,
and provided as a complete page to the browser.
This is the classic web model, where the entire page is reloaded on every click.

### Oqtane Render Mode: Headless

In this mode the site operates as a backend API,
suitable for mobile apps, custom frontends or external applications.

It is not really meant to provide UIs.

## Oqtane Runtime Options Settings

### Oqtane Runtime: Server (SignalR)

In this mode the UI Code runs on the server,
and the browser receives updates through a SignalR connection.

SignalR is a fast communications technology to provide real-time updates to the browser.
It uses WebSockets, Server-Sent Events, or Long Polling to provide a fast and reliable connection.

In the background, the UI will tell the server about a click or other user interaction,
and the server will then figure out what parts of the HTML needs updating.

It will then send the updated parts to the browser.
The browser will then do a DOM-Tree diff and update the parts as needed.

### Oqtane Runtime: Client WebAssembly

In this mode the UI Code runs directly in the browser using WebAssembly.
This means that the .net code for the Blazor Components is...

1. compiled to WebAssembly (WASM)
1. stored as compressed [Brotli](https://en.wikipedia.org/wiki/Brotli) or Zip files
1. sent to the browser according to it's preferences
1. started by a small js library which is included in the initial page
1. run in the browser

This code will then do the same as the server code in the SignalR mode,
and apply the changes to the DOM.

### Oqtane Runtime: Auto

This mode was introduced with .net 8 and Oqtane 6.
The idea is that the server will start with static - to give a fast initial load,
and then transition to interactive to give a SPA experience.

So in theory, it would do this:

1. Provide the browser/client with HTML
1. Then start loading the WebAssembly parts
1. Then switch to interactive mode

> [!WARNING]
> As of now (November 2024) this does not work as expected.
> So we recommend to avoid this mode for now.

## Runtime: Differences between Server and Client

To really understand the differences between the two render modes,
let's look at the responsibilities of the client code:

1. 🔃 Get data from...
    1. ...state (like what page is currently shown or the current user)
    1. ...database
    1. ...a REST API
1. Construct the HTML
1. ✍🏽 Update the HTML in the DOM
1. React to events (like clicks)
    1. Attach event listeners
    1. React to events when triggered
    1. Perform some action, 🔃 possibly needing more data
    1. Constructed updated HTML (show a new warning on an input; change the table of results)
    1. ✍🏽 Update the HTML in the DOM

In the **Server** mode, the server does all of this,
_except for ✍🏽 the last step modifying the DOM._

In the **Client** mode, the client does all of this,
_except for 🔃 the steps of getting data which use backend calls._

## Pre-Rendering

Pre-rendering is a technique to provide the browser with HTML,
independent of the client code.

* **Yes**: Interactive components render their initial output on the server, improving perceived load times.
* **No**: Components are rendered entirely on the client side.

## Hybrid Mode (MAUI Support)

The **Hybrid** mode is a special mode which enables integration with .NET MAUI,
meaning you're using Oqtane to create mobile Apps.

* **No**: The site operates as a standard web application1
* **Yes**: Enables integration with .NET MAUI, allowing the site to be used in cross-platform desktop and mobile applications.
    These settings provide granular control over how Oqtane sites are rendered and hosted, allowing developers to optimize for performance, interactivity, and platform compatibility.

---

## Some History for Context

If some of the options may seem confusing, it helps to understand the history of Blazor.
So we wanted to give you these insights, to make it easier to make choices,
especially if you find conflicting (and possibly old) information.

### Blazor .net Core 3 - Run .net Code in a Browser

Blazor originally started on .net core 3, as a "you can run .net code inside a browser" project.
As such, it's roots started as a ".net DLL to WebAssembly" converter.
In the first few versions this was it's purpose.

🩸 This is also when Oqtane was first started and built upon this paradigm.


### Blazor .net 6 - Server Prerender

When it started to become popular, the Blazor team realized that there were some limitations.
to running .net code in the browser.
For example, a search crawler didn't have any HTML to index.
So, they added a **Server Prerender** option where **UI/Client Code runs on the server _once_**
on the first page load, and then the **WebAssembly** takes over.
In reality the client had to re-run the code again, so the UX was not great.

🩸 This was also supported by Oqtane, mainly for search crawlers.

### Blazor .net 8 - Static Mode

By the time .net 8 came around, the Blazor team realized that there were some limitations
to this model as well.
For example, the performance hit on the server was big, making it hard to scale up.
The search crawlers still had a lot of issues as well.
So they added a **Static** mode where the HTML is always generated on the server,
much more similar to the classic web model and scaled much better.

---

See also:

* [Blog: Oqtane: Demystifying Render Modes for CMS Administrators](https://www.linkedin.com/pulse/oqtane-demystifying-render-modes-cms-administrators-leigh-tjzoe/)
