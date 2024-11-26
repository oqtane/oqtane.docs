---
uid: Dev.Extensions.Installation
---

# Oqtane Extension - Installation

## Package Installation

In most scenarios you will install a [nuget package](xref:Dev.Extensions.Package).

Extension Package installation can be done by either:

1. uploading the nuget package in the Modules section of the admin area
2. by auto-downloading it from the Oqtane marketplace
3. by placing it in the `Packages` folder of your Oqtane installation
4. manually copying the files to your Oqtane installation

...and then restarting Oqtane.

## Manual File-Copy Installation

You can also install an extension without a package.

This actually happens when you build your extension
in debug mode. In this case, the `debug.cmd` will just
copy all the files to the correct places.

When doing this, remember to restart Oqtane after copying the files.
