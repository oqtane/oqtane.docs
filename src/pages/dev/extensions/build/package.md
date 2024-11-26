---
uid: Dev.Extensions.Package
---

# Oqtane Extension - Nuget Package

Extensions like Themes / modules are usually distributed as nuget packages.
Internally such a nuget package is actually just a ZIP file.

<img src="./assets/oqtane-theme-nuget-file-in-folder.jpg" class="full-width">

It contains:

1. a `.nuspec` file containing information about it's contents
2. a `lib` folder containing the DLL file(s)
3. a `wwwroot` folder containing the JS and CSS files
4. an `icon.png` file
5. and some other files which are not important to us

<img src="./assets/oqtane-theme-nuget-file-unzipped.jpg" class="full-width">

---

[!include[](~/shared/authors/iJungleboy/_main-author.md)]
