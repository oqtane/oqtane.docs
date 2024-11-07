---
uid: Guides.Extensions.Index
---

# Oqtane Extensions Development Guides (WIP)

> These guides will help you get started with developing
> **Extensions** _on_/_with_ Oqtane.
>
> This is _not_ about building Oqtane itself, but about
> building your own Extensions such as **Themes** and **Modules**.

## Background

Oqtane is a .net 8.0 Blazor application that is designed to be modular and extensible.
This means that you can create your own modules, themes, and other extensions
to customize your Oqtane solution.

Extensions can be:

1. **Themes**  
    Themes are the visual appearance of your Oqtane solution.
    They can be as simple as changing the colors and fonts,
    or as complex as changing the layout and adding new components.
1. **Modules**  
    Modules are the functional components of your Oqtane solution.
    They can be as simple as a single page with some text,
    or as complex as a full-featured application with a database backend.
1. **Language Packs**  
    Language Packs are translations of the user interface into different languages.
    They can be as simple as a few words, or as complex as a full translation
    of the entire user interface.
1. **Pure Extensions**  
    Pure Extensions are any other type of extension that you can think of.
    For example, an Image-Resizer which doesn't have a UI.

## Prerequisites

To develop on Oqtane, you will typically need the following skills / tools:

1. Visual Studio 2022 with the latest .net 8.0 SDK
1. SQL Server (alternatives are possible, but this is the easiest to get started)
1. C# programming skills

The following skills are also useful, or will need to be developed as you go:

1. Blazor programming skills
1. HTML / CSS / JavaScript / Bootstrap5 skills
1. Git / GitHub skills
1. [Oqtane installation](xref:Guides.Installation.Index)

## Basic Setup

You will need to [install Oqtane](xref:Guides.Installation.Index)
on your development machine to get started.
For this you have 2 options:

1. Clone/Fork the [](xref:Oqtane.Source) to your local machine
   and run using Visual Studio  
   This is the most common option, and the best way to also track down any issues.
1. Install a runtime version of Oqtane in your web server  
   This is the method you'll use when you create many Oqtane solutions,
   since it will run faster and allow you to focus on only the code you write.

## Next Steps

Read about:

1. Best Practices
1. [Themes](xref:Guides.Themes.Index)
1. Modules

[← Back to Documentation Guides Home Page](../index.md)