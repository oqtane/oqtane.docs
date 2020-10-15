# Markdown Tips in the Octane Docs

Refer to [Markdown](http://daringfireball.net/projects/markdown/) for how to write markdown files. Here the most important tips for people working with this:

## Links

1. Link to a [website](https://www.oqtane.org/) `[website](https://www.oqtane.org/)`
1. Link to another [page](./build.md) `[page](./build.md)`
1. Link to some [](xref:Oqtane.Models) `[](xref:Oqtane.Models)` - will automatically pick the name of the target
1. Link to a class [](xref:Oqtane.Models.File) `[](xref:Oqtane.Models.File)`


## Images

Images can be added it two ways - using markdown, or the HTML counterpart. We recommend to always place images in an `assets` folder below the markdown file you're using the image on. 

Here's an example using markdown:

`![Folder structure for Building](./assets/folder-structure-for-building.jpg)`

![Folder structure for Building](./assets/folder-structure-for-building.jpg)

Here an example using an `<img>` tag which lets you provide more settings:

`<img src="./assets/folder-structure-for-building.jpg" width="100%">`

<img src="./assets/folder-structure-for-building.jpg" width="100%">

## Checklists

If you want to add checklists like this example, just use this checklist 😎

<iframe src="https://azing.org/oqtane/r/axPFtp2W?embed=1" width="100%" height="400" frameborder="0" allowfullscreen style="box-shadow: 0 1px 3px rgba(60,64,67,.3), 0 4px 8px 3px rgba(60,64,67,.15)"></iframe>


## Videos

Todo