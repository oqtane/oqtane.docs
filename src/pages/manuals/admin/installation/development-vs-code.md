# Install Oqtane for Development using Visual Studio Code (VS Code)

## Overview
Developing Oqtane applications with Visual Studio Code (VS Code) offers a lightweight yet powerful environment for coding, debugging, and managing project resources. While VS Code may not provide the full IDE experience of Visual Studio, it offers extensive support for web development tasks, including CSS editing, theme development, and module creation.

---

## Development

For general development and keeping up with the latest features, you can use the development branch of the Oqtane Framework. However, for module development, it is recommended to target a [stable release version](https://github.com/oqtane/oqtane.framework/releases) of the Oqtane Framework.

1. **Install Latest .NET SDK Release**: Ensure you have the latest .NET SDK installed on your system. You can download it from the [official .NET website](https://dotnet.microsoft.com/download/dotnet).

2. **Install Visual Studio Code**: Download and install the latest edition of [Visual Studio Code](https://code.visualstudio.com/download). Ensure that the **ASP.NET and web development** workload is enabled during installation. Oqtane works with all editions of Visual Studio Code, from Community to Enterprise.

3. **Optional: Install Data Storage and Processing Extensions**: If you prefer to use LocalDB for development (although not required, as Oqtane supports SQLite, MySQL, and PostgreSQL), you must install the necessary **Data storage and processing** extensions in VS Code.

4. **Clone Oqtane Dev Branch**: Visit the [Oqtane Framework GitHub Repository](https://github.com/oqtane/oqtane.framework) and clone the Oqtane dev branch source code to your local system using Git Bash with the following command:
   ```bash
   git clone -b dev https://github.com/oqtane/oqtane.framework.git
   ```
   
6. **Open Oqtane Solution**": Navigate to the cloned directory and open the **Oqtane.sln** solution file in Visual Studio Code.

7. Copy Files to Hosted Folder Location: Copy the necessary files to the hosted folder location, which could be IIS or Apache root directory. This typically includes the compiled binaries and any static assets required for the application to run.
   
8. **Build the solution**: Build the solution using the built-in terminal or the .NET CLI by running the following command:
   ```bash
   dotnet build
   ```
 
9. **Run Application**: After building the solution, you can run the Oqtane application locally using IIS or Apache. Ensure to stop/start the app pool or services related to the Oqtane app on the web server when updating file changes.

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
- [Oqtane Development Using Visual Studio Code with Linux](development-vs-code-linux.md)
- [Oqtane Framework Development Using Visual Studio with Windows](development.md)

[← Back to Installation Home](index.md)
