# Install Oqtane for Development using Visual Studio Code (VS Code)
TODO: Placeholder Information
## Overview
Rewrite this section for what can be done using vs code to help develop oqtane such as using it for a tool for theme and module CSS (maybe not much or maybe some css editing?)  
TODO:  There are probably steps missing or need modified here are are considered.

### Development Version (Latest)

For general development and keeping up with the latest features, you can use the development branch of Oqtane Framework. However, for module development, it is recommended to target a stable release version of Oqtane Framework.

1. Install **[Latest .NET SDK Release](https://dotnet.microsoft.com/download/dotnet)**.

2. Install the latest edition of [Visual Studio Code](https://code.visualstudio.com/download) with the **ASP.NET and web development** workload enabled.
   Oqtane works with ALL editions of Visual Studio from Community to Enterprise.

3. If you wish to use _LocalDB_ for development (not a requirement as Oqtane supports _SQLite_, _mySQL_, and _PostgreSQL_), you must also install the **Data storage and processing**.

4. Visit the [Oqtane Framework GitHub Repository](https://github.com/oqtane/oqtane.framework) to download and extract the [Oqtane Dev Branch Source Zip File](https://github.com/oqtane/oqtane.framework/archive/dev.zip) or clone the Oqtane dev branch source code to your local system using [Git Bash](https://git-scm.com/) with the following command:
   ```bash
   git clone -b dev https://github.com/oqtane/oqtane.framework.git
5. Open the **Oqtane.sln** solution file.
   
6. **Build** the solution.

7. Ensure that you specify **Oqtane.Server** as the Startup Project.
 
8. Run the application.

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

[← Back to Installation Home](index.md)
