---
uid: Oqtane.Concepts.ServerClientCodeSeparation.Index
---

# Oqtane & Blazor Server and UI/Client Code Separation

> [!TIP]
> It is general best-practice to separate code according to its responsibilities.
>
> In Blazor, this has a more specific meaning,
> as it refers to the _required_ separation of **Server Code** and **UI/Client Code**.

Blazor originally started as a "you can run .net code inside a browser" project.
As such, it's roots started as a ".net DLL to WebAssembly" converter.

Now obviously not all code is suitable for running in a browser.
For example, direct database access is something which still requires a server.

So as at the heart of the entire architecture lies the separation
of **Server Code** and **UI Code aka Client Code**.

## Standard Code Separation in Oqtane & Blazor

* **UI Code / Client Code** is the part of code which is responsible for rendering the UI.
  * It usually runs in the browser, and it can respond to user input.
  * It can also make network requests to the server.
  * It can't do things like database access.
  * _UI/Client Code can run in the browser, but it can also run on the server - see below._

* **Server Code** is the code which runs on the server.
  * It can do things like database access, provide APIs, etc.
  * It is also better protected and in charge of security checks as well as limiting access.
  * _Server Code can only on the server._

* **Shared Code** is code which is used by both the **Server Code** and **UI/Client Code**.
  * This is usually things like common objects, enums, etc.
  * Also typical is certain interfaces, which may then be implemented differently on each layer.

Other code such as business logic could run on either the server or the client.
The choice of where this is located is up to the developer.

> [!TIP]
> **Client Code** describes the **UI responsibility** of the code which _could_ run in the browser.
>
> **Server Code** describes the responsibility of the code which _must_ run on the server.


## Running UI/Client-Code on the Server

There are quite a few reasons why the UI Code should **not run in the browser**.
So let's quickly recap what the UI Code actually does:

1. Generate HTML
1. Render UI, do some animations / transitions
1. Respond to user input (like transition no elsewhere; show other input fields)
1. Make network requests



But we can't stop there.

This separation of code is what allows Blazor to run on the server, in the browser, or both.
The UI/Client Code can run on the server for a few reasons:

1. **Search Engine Optimization (SEO)**: Search engines like Google can't run WebAssembly.
    So if your site is entirely JavaScript/WebAssembly, then it won't be indexed.
    By running the UI/Client Code on the server, you can generate the HTML for the search engines.

1. **Perceived Load Time**: If the UI/Client Code is running on the server,
    then the user can see the page before the UI/Client Code has even started.
    This makes the site feel faster.

1. **Simpler State Management**: If the UI/Client Code is running on the server,
    then the server must manage & remember a lot of client state.
    When running the client on the browser, the server must still do a lot of work
    and manage a lot of state.

➡️ To choose where the UI/Client Code runs, you can set the **Render Mode** and **Runtime** in Oqtane.
See [Render Modes](xref:Oqtane.Concepts.RenderModes.Index).

---

[!include[](~/shared/authors/iJungleboy/_main-author.md)]
