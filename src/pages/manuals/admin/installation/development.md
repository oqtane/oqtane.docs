## Install Oqtane for Visual Studio Development

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

1. Download the [Official Oqtane 5 Release Source](https://github.com/oqtane/oqtane.framework/releases/tag/v5.0.2).

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

---  

## Resources
- [Official Oqtane Latest Release](https://github.com/oqtane/oqtane.framework/releases/latest)
- [All Official Oqtane Releases](https://github.com/oqtane/oqtane.framework/releases)
- [Oqtane Framework GitHub Repository](https://github.com/oqtane/oqtane.framework)
- [Visual Studio Code](https://code.visualstudio.com)
- [.NET Core](https://dotnet.microsoft.com)
- 

## Related Pages
- [Oqtane Supported Databases](databases.md)
- [Oqtane Installation Resources](resources.md)
- [Oqtane Development Using Visual Studio Code](development-vs-code.md)
- [Oqtane Development Using Linux and Visual Studio Code](development-vs-code-linux.md)

[← Back to Installation Home](index.md)

