---
uid: Guides..Themes.Index
---

# Themes - Code Structure of a Theme

Internally a theme only needs the following 4 things:

1. An own namespace such as `YourCompany.Themes.YourTheme`.
1. A `ThemeInfo.cs` file in that namespace which implements `Oqtane.Themes.ITheme`.  
   This file contains information about the theme like name, author, version, etc.
1. A theme file like `MyTheme.razor` which is the main thing shown to the user.
1. A container file like `Container.razor` which is the main wrapper around a module.

> [!WARNING]
> It is crucial that the namespace of the theme is unique,
> and that all these core elements (ThemeInfo, Theme, Container)
> are in _exactly_ this namespace.

## Example from the Oqtane Arsha

**Arsha** is a sample theme that comes with Oqtane.
You can find the [git repo here](https://github.com/oqtane/Oqtane.Theme.Arsha).

### ThemeInfo.cs

The [ThemeInfo.cs](https://github.com/oqtane/Oqtane.Theme.Arsha/blob/main/Client/ThemeInfo.cs)
file is necessary to provide information about the theme.
In the code you can see it contains

1. The `namespace` of the theme - must be unique, and must match the theme/container namespace
1. the `Name` of the theme - displayed to the user
1. the `Version` of the theme
1. the `PackageName` - used for installation / differentiation
1. the _optional_ `ThemeSettingsType` (class name) of the theme settings
1. the _optional_ `ContainerSettingsType` (class name) of the container settings
1. a list of `Resources` - CSS and JS files that are loaded when the theme is used  
   _note: the `Resources` can also be specified in each `Theme.razor` file_

```csharp
using System.Collections.Generic;
using Oqtane.Models;
using Oqtane.Themes;
using Oqtane.Shared;

namespace Oqtane.Theme.Arsha
{
  public class ThemeInfo : ITheme
  {
    public Models.Theme Theme => new Models.Theme
    {
      Name = "Arsha",
      Version = "1.0.0",
      PackageName = "Oqtane.Theme.Arsha",
      ThemeSettingsType = "Oqtane.Theme.Arsha.ThemeSettings, Oqtane.Theme.Arsha.Client.Oqtane",
      ContainerSettingsType = "Oqtane.Theme.Arsha.ContainerSettings, Oqtane.Theme.Arsha.Client.Oqtane",
      Resources = new List<Resource>()
      {
        // Google Fonts
        new Resource { ResourceType = ResourceType.Stylesheet, Url = "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CRaleway:300,300i,400,400i,500,500i,600,600i,700,700i%7CPoppins:300,300i,400,400i,500,500i,600,600i,700,700i" },
        // Vendor CSS Files
        new Resource { ResourceType = ResourceType.Stylesheet, Url = "~/assets/vendor/aos/aos.css" },
        // ...rest of files omitted for brevity

        // Template Main CSS File
        new Resource { ResourceType = ResourceType.Stylesheet, Url = "~/assets/css/style.css" },

        // Vendor JS Files
        new Resource { ResourceType = ResourceType.Script, Url = "~/assets/vendor/aos/aos.js", Location = ResourceLocation.Body },
        // ...rest of files omitted for brevity
        
        // Template Main JS File 
        new Resource { ResourceType = ResourceType.Script, Url = "~/assets/js/main.js", Location = ResourceLocation.Body, Reload = true, RenderMode = RenderModes.Static },
        new Resource { ResourceType = ResourceType.Script, Url = "~/assets/js/interop.js", Location = ResourceLocation.Body, RenderMode = RenderModes.Interactive }
      }
    };
  }
}
```

## The Theme File

The [Theme.razor](https://github.com/oqtane/Oqtane.Theme.Arsha/blob/main/Client/Themes/Default.razor)
file is the main file that is shown to the user.

It contains the HTML structure of the theme and can include other Blazor components.
Important things to know:

1. The `@namespace` directive must match the namespace of the theme
1. The `@inherits` directive must inherit from `ThemeBase` or a class that inherits from `ThemeBase`
1. The `@inject` directive can be used to inject services like `NavigationManager` or `ISettingService`
1. The `@code` block can contain C# code that is executed when the component is rendered
1. The HTML part - which is the HTML inside the `<body>` tag (without `<head>` etc.).
   This "html" can be
    1. normal HTML such as `div`, `section`, `h1`, `p`, `img` etc.
    1. Razor variables such as `@PageState.Page.Name`
    1. Razor data from functions such as `@NavigateUrl()`
    1. Razor statements such as `@if` or `@foreach`
    1. Blazor components such as `<NavMenu />` or `<Login />`


```html
@namespace Oqtane.Theme.Arsha
@inherits ThemeBase
@inject NavigationManager NavigationManager
@inject ISettingService SettingService

<!-- ======= Header ======= -->
<header id="header" class="@_headerclass">
  <div class="container d-flex align-items-center">
    <!-- omited for brevity -->
    <nav id="navbar" class="navbar">
      <NavMenu />
    </nav>
    <div class="mx-3 controls-group"><UserProfile /> <Login /> <ControlPanel /></div>
  </div>
</header>
<!-- End Header -->

@if (!string.IsNullOrEmpty(_hero))
{
  <!-- ======= Hero Section ======= -->
  @((MarkupString)_hero)
  <!-- End Hero -->
  <!-- ======= Main ======= -->
  <main id="main">
      <Pane Name="@PaneNames.Default" />
  </main>
  <!-- End #main -->
}
else
{
  <!-- ======= Main ======= -->
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <section class="breadcrumbs">
      <div class="container">
        <h2 class="mt-2">@PageState.Page.Name</h2>
      </div>
    </section><!-- End Breadcrumbs -->
    <section class="inner-page">
      <div class="container">
        <Pane Name="@PaneNames.Default" />
      </div>
    </section>
  </main>
  <!-- End Main -->
}

<!-- ======= Footer ======= -->
@((MarkupString)_footer)
<!-- End Footer -->

<a href="@NavigateUrl()" class="back-to-top d-flex align-items-center justify-content-center" data-enhance-nav="false"><i class="bi bi-arrow-up-short"></i></a>

@code {
  public override string Name => "Default";
  public override string Panes => PaneNames.Default;

  private string _hero = "";
  private string _headerclass = "";
  private string _footer = "";

  protected override async Task OnParametersSetAsync()
  {
    // omitted for brevity
  }

  protected override async Task OnAfterRenderAsync(bool firstRender)
  {
    // omitted for brevity
  }

  private string DefaultFooter
  {
    get
    {
      return 
      "<footer id=\"footer\">\n" +
      "   <div class=\"footer-newsletter\">\n" +
          <!-- omitted for brevity -->
      "   </div>\n" +
      "</footer>\n";
    }
  }
}
```

## The Container File

The [Container.razor](https://github.com/oqtane/Oqtane.Theme.Arsha/blob/main/Client/Containers/Container.razor)
file is the main wrapper around a module.
Here's what you should know:

1. The `@namespace` directive must match the namespace of the theme
1. The `@inherits` directive must inherit from `ContainerBase` or a class that inherits from `ContainerBase`
1. The `@inject` directive can be used to inject services like `ISettingService`
1. The `@code` block can contain C# code that is executed when the component is rendered
1. The HTML parts with the same possibilities as the theme above.

```html
@namespace Oqtane.Theme.Arsha
@inherits ContainerBase
@inject ISettingService SettingService

@if (_title)
{
  @if (_animate)
  {
    <section>
      <div class="container" data-aos="fade-up">
        <ModuleActions />
        @if (ModuleState.Title != "-")
        {
          <div class="section-title">
            <h2>@ModuleState.Title</h2>
          </div>
        }
        <div class="row">
          <ModuleInstance />
        </div>
      </div>
    </section>
  }
  else
  {
    <!-- omitted for brevity -->
  }
}
else
{
    <!-- omitted for brevity -->
}

@code {
  private bool _title = true;
  private bool _animate = false;

  protected override void OnParametersSet()
  {
    // omitted for brevity
  }
}
```

## Blazor Components

In addition to the required minimum files, you can also include other Blazor components.
Here's an example of the [NavMenu.razor](https://github.com/oqtane/Oqtane.Theme.Arsha/blob/main/Client/Components/NavMenu.razor).

It doesn't do much, but check if the menu should show, and then calls the `NavMenuItems` component.

```html
@namespace Oqtane.Theme.Arsha

@inherits MenuBase

@if (MenuPages.Any())
{
  <NavMenuItems ParentPage="null" Pages="MenuPages" />
  <i class="bi bi-list mobile-nav-toggle"></i>
}
```

The [NavMenuItems.razor](https://github.com/oqtane/Oqtane.Theme.Arsha/blob/main/Client/Components/NavMenuItems.razor)
is way more complex, as it recursively calls itself to render the menu items.

```html
@namespace Oqtane.Theme.Arsha
@inherits MenuItemsBase

<ul>
  @foreach (var childPage in GetChildPages())
  {
    var _attributes = new Dictionary<string, object>();
    _attributes.Add("href", GetUrl(childPage));
    var _target = GetTarget(childPage);
    if (!string.IsNullOrEmpty(_target))
        _attributes.Add("target", _target);

    if (!childPage.HasChildren)
    {
      <!-- omitted for brevity -->
    }
    else
    {
      <li class="dropdown">
        <a @attributes="_attributes"><span>@childPage.Name</span> 
          @if (childPage.Level == 0)
            <i class="bi bi-chevron-down"></i>
          else
            <i class="bi bi-chevron-right"></i>
        </a>
        <NavMenuItems ParentPage="childPage" Pages="Pages" />
      </li>
    }
  }
</ul>
```

