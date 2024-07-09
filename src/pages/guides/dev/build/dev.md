---
uid: Guides.Dev.Build.Dev
---

# Oqtane Extension - Dev Build and Deployment

> These guides will help you understand how
> Oqtane Extensions (Themes and Modules) are built and deployed for development.
>
> This is _not_ about building/distributing Oqtane itself,
> but about developing your own Themes and Modules.

## What Happens in a Dev-Build?

This is the typical `debug.cmd` for a dev-build:

```cmd
XCOPY "..\Client\bin\Debug\net8.0\Oqtane.Theme.Arsha.Client.Oqtane.dll" "..\..\oqtane.framework\Oqtane.Server\bin\Debug\net8.0\" /Y
XCOPY "..\Client\bin\Debug\net8.0\Oqtane.Theme.Arsha.Client.Oqtane.pdb" "..\..\oqtane.framework\Oqtane.Server\bin\Debug\net8.0\" /Y
XCOPY "..\Client\wwwroot\*" "..\..\oqtane.framework\Oqtane.Server\wwwroot\" /Y /S /I
```

As you can see, it will **deploy** your work to the Oqtane.Server project:

1. Copy the DLL and PDB files into the Oqtane.Server folder which is
   _right beside_ the current module - see [Best Practices](xref:Guides.Dev.BestPractice.SeparateSolutions.Index)
1. Copy the files in the `wwwroot` folder into the `wwwroot` folder of the Oqtane.Server project

> [!TIP]
> As you can see, the `debug.cmd` has project names and paths hard-wired.
> You may need to adjust these values as your DLL names change
> or you move your projects around.

> [!WARNING]
> The DLLs are compiles to a specific path, e.g. `…\bin\Debug\net8.0\…`.
> Upon upgrading to a newer .net framework, you **must** adjust these paths.

## Remember to Restart your Oqtane

After you have deployed your work, you **must** restart your Oqtane solution.
This is because the DLLs are loaded into memory and will not be reloaded
until the application is restarted.
