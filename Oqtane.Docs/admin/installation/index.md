# Installation

## Install an Official Release on IIS

The [Official Oqtane Relases are found on Github](https://github.com/oqtane/oqtane.framework/releases)

Read the [detailed instructions for installing Oqtane on IIS](https://www.oqtane.org/Resources/Blog/PostId/542/installing-oqtane-on-iis)

## Upgrade an Existing Oqtane

Read the [instructions for upgrading Oqtane](https://www.oqtane.org/Resources/Blog/PostId/543/upgrading-oqtane)

## Reset an Exiting Oqtane

If you have already installed a previous version of Oqtane and you wish to do a clean database install, simply reset the `DefaultConnection` value in the `Oqtane.Server\appsettings.json` file to "". 
This will trigger a re-install when you run the application which will execute the database installation scripts.

## Install Oqtane for Development

### Oqtane Version 3 (.net 6)

1. Install **[.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)**
   
1. Install the latest edition of [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) with the **ASP.NET and web development** workload enabled.
Oqtane works with ALL editions of Visual Studio from Community to Enterprise.

1. If you wish to use _LocalDB_ for development (not a requirement as Oqtane supports _SQLite_, _mySQL_ and _PostgreSQL_) you must also install the **Data storage and processing**.

1. Clone the Oqtane dev branch source code to your local system. Open the **Oqtane.sln** solution file and Build the solution.

1. Make sure you specify **Oqtane.Server** as the Startup Project and then Run the application.

### Oqtane Version 2 (.net 5)

1. Install the latest [.NET 5 SDK (v5.0.100)](https://dotnet.microsoft.com/download/dotnet/5.0)

1. Install the latest edition (v16.8 or higher) of 
[Visual Studio 2019](https://visualstudio.microsoft.com/vs/) (Community, Professional, or Enterprise Editions) 
with the **ASP.NET and web development workload enabled**.
Oqtane works with ALL editions of Visual Studio from Community to Enterprise. 
  
1. If you do not have a SQL Server installation available already and you wish to use LocalDB for development, 
you must also install the **.NET desktop development workload**.

1. Download a release or Clone the Oqtane source code to your local system. Open the **Oqtane.sln** solution file and Build the solution.

1. Make sure you specify Oqtane.Server as the Startup Project and then Run the application.

### Oqtane Version 1 (.net core 3)

1. Install [.NET Core 3.1 SDK (v3.1.300)](https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-3.1.300-windows-x64-installer)

1. Install [Visual Studio 2019 (Community, Professional, or Enterprise Editions)](https://visualstudio.microsoft.com/vs) 
with the ASP.NET and web development workload enabled.
Oqtane works with ALL editions of Visual Studio from Community to Enterprise. 
If you do not have a SQL Server installation available already and you wish to use LocalDB for development, you must also install the .NET desktop development workload.

1. Download a release or Clone the Oqtane source code from a v1.x Tag to your local system. Open the **Oqtane.sln** solution file and Build the solution.
Make sure you specify Oqtane.Server as the Startup Project and then Run the application.