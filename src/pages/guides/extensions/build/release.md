---
uid: Guides.Extensions.Build.Release
---

# Oqtane Extension - Release Build (WIP)

> These guides will help you understand how
> Oqtane Extensions (Themes and Modules) are packaged and distributed.
>
> This is _not_ about building/distributing Oqtane itself,
> but about packaging and distributing **releases** of your own Themes and Modules.

## What Happens in a Release-Build?

This is the typical `release.cmd` for a release-build:

```cmd
del "*.nupkg"
"..\..\oqtane.framework\oqtane.package\nuget.exe" pack Oqtane.Theme.Arsha.nuspec
XCOPY "*.nupkg" "..\..\oqtane.framework\Oqtane.Server\wwwroot\Themes\" /Y
```

As you can see, it will

1. Delete any previous NuGet packages
1. Use `nuget.exe` to pack the NuGet package instructions from the `.nuspec` file
1. Copy the NuGet package into the `wwwroot\Themes` folder of the Oqtane.Server project

> [!TIP]
> The same warnings apply as for the `debug.cmd` - you may need to adjust paths and names.

### What's missing here?

The previous example shows a default setup for a Theme.
As you may have noticed, it doesn't have a **WebPack** or other **JavaScript** build steps.

> [!TIP]
> As of now, the default templates/modules don't include examples for TypeScript or SASS.


## What is a (NuGet) Package?

A package is a collection of files that are bundled together.
In Oqtane, they are distributed in a `.nupkg` file, which is a NuGet package.
Internally, a NuGet package is a ZIP file with a specific structure,
so for discovery you can just rename a nuget package to `.zip` and open it.

The definition of what goes inside a package is defined in a `.nuspec` file.
The compiler will call `nuget.exe` and give it a NuSpec file to create the package.

## What is a NuSpec file?

Here is an example of a `.nuspec` file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://schemas.microsoft.com/packaging/2010/07/nuspec.xsd">
  <!-- Package information if publishing on NuGet.org -->
  <metadata>
    <!-- NuGet ID, must be unique to this extension -->
    <id>Oqtane.Theme.Arsha</id>

    <!-- Version, Copyright, URL etc. -->
    <version>1.0.0</version>
    <authors>Oqtane Labs Inc</authors>
    <owners>Oqtane Labs Inc</owners>
    <title>Arsha</title>
    <description>Arsha Theme for Oqtane</description>
    <copyright>Oqtane Labs Inc</copyright>
    <requireLicenseAcceptance>false</requireLicenseAcceptance>
    <license type="expression">MIT</license>
    <projectUrl>https://github.com/oqtane/oqtane.framework</projectUrl>

    <!-- Icon file to be shown eg. on nuget.org, if published there -->
    <icon>icon.png</icon>
    <tags>oqtane theme</tags>
    <releaseNotes></releaseNotes>
    <summary></summary>

    <!--
      Dependencies, in this case the Oqtane.Framework
      - These will be listed on NuGet.org (if you publish it there)
      - Oqtane may also check if they are installed before allowing installation
    -->
    <dependencies>
      <dependency id="Oqtane.Framework" version="5.1.0" />
    </dependencies>
  </metadata>

  <!-- Files to be included in the package -->
  <files>
    <!-- DLLs and PDBs (PDBs contains line-numbers for debugging exceptions) -->
    <file src="..\Client\bin\Release\net8.0\Oqtane.Theme.Arsha.Client.Oqtane.dll" target="lib\net8.0" /> 
    <file src="..\Client\bin\Release\net8.0\Oqtane.Theme.Arsha.Client.Oqtane.pdb" target="lib\net8.0" /> 
    <!-- All the files in your main projects wwwroot -->
    <file src="..\Client\wwwroot\**\*.*" target="wwwroot" />
    <!-- Icon file, located in the same folder as the nuspec file -->
    <file src="icon.png" target="" />
  </files>
</package>
```

## Release Build FAQs

### What is a DLL and a PDB?

A DLL is a Dynamic Link Library, which is a compiled .NET assembly.
It contains the compiled code of your project, and can be executed by the .NET runtime.

A PDB is a Program Database, which contains additional information for debugging.
It contains line-numbers, variable names, and other information that can be used to debug exceptions.

### How can I Add more Files to the Package

If you need to add more files to the package, you can add more `<file>` elements to the `.nuspec` file.
You can also use wildcards, like `**\*.*` to include all files in a folder.

> [!TIP]
> Make sure you don't include any unnecessary files, as they will increase the size of your package.
>
> You will typically only want to include release files, and not include
> source files.

### How can I change the Icon

Just replace the `icon.png` in the same folder as the `.nuspec` file.

Make sure your file is really a png, and not a jpg or other format.
