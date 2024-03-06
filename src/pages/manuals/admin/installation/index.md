# Installation

## Install an Official Release on IIS

The [Official Oqtane Releases are found on Github](https://github.com/oqtane/oqtane.framework/releases)

Read the [detailed instructions for installing Oqtane on IIS](https://www.oqtane.org/Resources/Blog/PostId/542/installing-oqtane-on-iis)

## Upgrade an Existing Oqtane

Read the [instructions for upgrading Oqtane](https://www.oqtane.org/Resources/Blog/PostId/543/upgrading-oqtane)

## Reset an Exiting Oqtane

If you have already installed a previous version of Oqtane and you wish to do a clean database install, simply reset the `DefaultConnection` value in the `Oqtane.Server\appsettings.json` file to "". 
This will trigger a re-install when you run the application which will execute the database installation scripts.

## Install Oqtane for Development

### Development Version (Latest)

For general development and keeping up with the latest features, you can use the development branch of Oqtane Framework. However, for module development, it is recommended to target a stable release version of Oqtane Framework.

1. Install **[Latest .NET SDK Release](https://dotnet.microsoft.com/download/dotnet)**.

2. Install the latest edition of [Visual Studio](https://visualstudio.microsoft.com/downloads/) with the **ASP.NET and web development** workload enabled.
   Oqtane works with ALL editions of Visual Studio from Community to Enterprise.

3. If you wish to use _LocalDB_ for development (not a requirement as Oqtane supports _SQLite_, _mySQL_, and _PostgreSQL_), you must also install the **Data storage and processing**.

4. Visit the [Oqtane Framework GitHub Repository](https://github.com/oqtane/oqtane.framework) to download and extract the [Oqtane Dev Branch Source Zip File](https://github.com/oqtane/oqtane.framework/archive/dev.zip) or clone the Oqtane dev branch source code to your local system using [Git Bash](https://git-scm.com/) with the following command:
   ```bash
   git clone -b dev https://github.com/oqtane/oqtane.framework.git
5. Open the **Oqtane.sln** solution file.
   
6. Build the solution.

7. Ensure that you specify **Oqtane.Server** as the Startup Project.
 
8. Run the application.
   
### Release and Legacy Development

Below is a list of current and prior releases for module development targeting different frameworks.  
Check the official release page for any newer versions not listed.

### Oqtane Version 5 (.net 8)

1. Install **[.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)**
   
1. Install the latest edition of [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) with the **ASP.NET and web development** workload enabled.
Oqtane works with ALL editions of Visual Studio from Community to Enterprise.

1. If you wish to use _LocalDB_ for development (not a requirement as Oqtane supports _SQLite_, _mySQL_ and _PostgreSQL_) you must also install the **Data storage and processing**.

1. Download the [Official Oqtane 5 Release Source](https://github.com/oqtane/oqtane.framework/releases/tag/v5.0.1).

1. Open the **Oqtane.sln** solution file.

1. Build the solution.

1. Make sure you specify **Oqtane.Server** as the Startup Project

1. Run the application.

### Oqtane Version 4 (.net 7)

1. Install **[.NET 7 SDK](https://dotnet.microsoft.com/download/dotnet/7.0)**
   
1. Install the latest edition of [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) with the **ASP.NET and web development** workload enabled.
Oqtane works with ALL editions of Visual Studio from Community to Enterprise.

1. If you wish to use _LocalDB_ for development (not a requirement as Oqtane supports _SQLite_, _mySQL_ and _PostgreSQL_) you must also install the **Data storage and processing**.

1. Download the [Official Oqtane Release Source 4.0.6](https://github.com/oqtane/oqtane.framework/releases/tag/v4.0.6).

1. Open the **Oqtane.sln** solution file.

1. Build the solution.

1. Make sure you specify **Oqtane.Server** as the Startup Project.
   
1. Run the application.

### Oqtane Version 3 (.net 6)

1. Install **[.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)**
   
1. Install the latest edition of [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) with the **ASP.NET and web development** workload enabled.
Oqtane works with ALL editions of Visual Studio from Community to Enterprise.

1. If you wish to use _LocalDB_ for development (not a requirement as Oqtane supports _SQLite_, _mySQL_ and _PostgreSQL_) you must also install the **Data storage and processing**.

1. Download the latest [Official Oqtane Release Source 3.4.3](https://github.com/oqtane/oqtane.framework/releases/tag/v3.4.3).

1. Open the **Oqtane.sln** solution file.

1. Build the solution.

1. Make sure you specify **Oqtane.Server** as the Startup Project.
   
1. Run the application.

### Oqtane Version 2 (.net 5)

1. Install the latest [.NET 5 SDK (v5.0.100)](https://dotnet.microsoft.com/download/dotnet/5.0)

1. Install the latest edition (v16.8 or higher) of 
[Visual Studio 2019](https://visualstudio.microsoft.com/vs/) (Community, Professional, or Enterprise Editions) 
with the **ASP.NET and web development workload enabled**.
Oqtane works with ALL editions of Visual Studio from Community to Enterprise. 
  
1. If you do not have a SQL Server installation available already and you wish to use LocalDB for development, 
you must also install the **.NET desktop development workload**.

1. Download the [Official Oqtane Release Source 2.3.1](https://github.com/oqtane/oqtane.framework/releases/tag/v2.3.1).

1. Open the **Oqtane.sln** solution file.

1. Build the solution.

1. Make sure you specify **Oqtane.Server** as the Startup Project.
   
1. Run the application.

### Oqtane Version 1 (.net core 3)

1. Install [.NET Core 3.1 SDK (v3.1)](https://dotnet.microsoft.com/en-us/download/dotnet/3.1)

1. Install [Visual Studio 2019 (Community, Professional, or Enterprise Editions)](https://visualstudio.microsoft.com/vs) 
with the ASP.NET and web development workload enabled.
Oqtane works with ALL editions of Visual Studio from Community to Enterprise.

1. If you do not have a SQL Server installation available already and you wish to use LocalDB for development, you must also install the .NET desktop development workload.

1. Download the [Official Oqtane Release Source 1.0.4](https://github.com/oqtane/oqtane.framework/releases/tag/v1.0.4).

1. Open the **Oqtane.sln** solution file.

1. Build the solution.

1. Make sure you specify **Oqtane.Server** as the Startup Project.
   
1. Run the application.

## Additional Resources

### IIS & .NET Core Hosting:

- [IIS URL Rewrite Module](https://www.iis.net/downloads/microsoft/url-rewrite): Download and install URL Rewrite Module for configuring URL rewriting rules in IIS.
- [.NET Core Hosting Bundle](https://dotnet.microsoft.com/permalink/dotnetcore-windows-runtime-bundle-installer): Download the .NET Core Hosting Bundle for hosting .NET Core applications on Windows servers.
- [WebSocket Support on IIS](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/websockets?#enabling-websockets-on-iis): Instructions for enabling WebSockets on IIS.

### Database Resources:

#### MySQL:
- [MySQL Downloads](https://dev.mysql.com/downloads/): Download MySQL Community Edition for Ubuntu.
- [MySQL Workbench Download](https://dev.mysql.com/downloads/workbench/): MySQL Workbench for database administration.
- [MySQL Documentation for Ubuntu Installation](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/): Quick guide for installing MySQL on Ubuntu using APT repository.

#### PostgreSQL:
- [PostgreSQL Downloads](https://www.postgresql.org/download/): Download the latest version of PostgreSQL for Ubuntu.
- [pgAdmin Download](https://www.pgadmin.org/download/): Tool for PostgreSQL administration.
- [PostgreSQL Documentation for Ubuntu Installation](https://www.postgresql.org/download/linux/ubuntu/): Installation guide specific to Ubuntu environment.

#### SQL Server:
- [SQL Server Downloads](https://www.microsoft.com/en-us/sql-server/sql-server-downloads): Download SQL Server for Ubuntu.
- [SQL Server Installation Guide for Ubuntu](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver15): Detailed guide on installing SQL Server on Ubuntu.
- [SQL Server Management Studio (SSMS) Download](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms): Download SQL Server Management Studio for database management.

#### LocalDB:
- [LocalDB Installation Guide](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb): Instructions for installing LocalDB on Ubuntu.

### Oqtane Framework:
- [Oqtane Framework Releases](https://github.com/oqtane/oqtane.framework/releases): Download the latest Oqtane release for installation on Ubuntu.
- [Oqtane GitHub Repository](https://github.com/oqtane/oqtane.framework): Contribute to the Oqtane project and report issues on GitHub.
- [Oqtane Blog](https://www.oqtane.org/blog/): Stay updated with the latest news, tips, and tutorials.
