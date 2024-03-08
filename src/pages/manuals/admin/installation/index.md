# Installation
---

## Overview
Oqtane is a modular application framework that allows you to create dynamic web sites and applications using Blazor and .NET MAUI. Oqtane supports various deployment scenarios and databases. This section provides installation instructions for different environments and configurations.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Foqtane%2Foqtane.framework%2Fmaster%2Fazuredeploy.json)

---

## Downloading an Official Release
Find the official Oqtane releases on GitHub and follow these steps to download:

1. Visit the [Official Oqtane Releases page on GitHub](https://github.com/oqtane/oqtane.framework/releases).
2. Browse the list of releases to find the version you need.
3. Click on the release to view its details.
4. Download the release package by clicking on the appropriate link.

---

## Resetting an Existing Oqtane Installation
If you need to perform a clean database install for a previous version of Oqtane, follow these steps:

1. Open the `Oqtane.Server\appsettings.json` file.
2. Locate the `DefaultConnection` value and set it to `""`.
3. Run the application to trigger the re-installation process, which will execute the database installation scripts.

---

## Upgrade
Learn how to upgrade your existing Oqtane installation manually or through an automated process:
- [Upgrading Oqtane](upgrade.md): This section provides information on how to upgrade your existing Oqtane installation manually or through an automated process.

---

## Development
This section provides installation instructions for development purposes. You can choose between Windows or Linux development environments and use Visual Studio or Visual Studio Code as your IDE.

### Windows
- [Windows Visual Studio Development](development.md): Install Oqtane quickly for development, primarily for Visual Studio and Windows development.
- [Windows Visual Studio Code Development](development-vs-code.md): Install Oqtane quickly for development, primarily for Visual Studio Code and Windows development. *TODO*

### Linux
- [Linux Visual Studio Code Development](development-vs-code-linux.md): Install Oqtane quickly for development, primarily for Visual Studio Code and Linux development. *TODO*

---

## Deploy
_Note: In the guides below you will learn how to install the prerequisites, create a database, and deploy Oqtane using a release package._

### Windows IIS
Install Oqtane with various configurations on Windows using IIS:
- [Install Oqtane with IIS Express and SQL Express](windows-iis-express-sql-express.md): This guide shows you how to install Oqtane on Windows using IIS Express and SQL Express Server. You will learn how to configure IIS, create a database, and deploy Oqtane using a release package.
- [Install Oqtane with IIS Express and LocalDB](windows-iis-express-localdb.md): This guide shows you how to install Oqtane on Windows using IIS (Express) and LocalDb. You will learn how to configure IIS, create a database, and deploy Oqtane using a release package.
- [Install Oqtane with IIS and SQL Server](windows-iis-sql.md): This guide shows you how to install Oqtane on Windows using IIS and SQL Server. You will learn how to configure IIS, create a database, and deploy Oqtane using a release package.

### Linux Apache
Install Oqtane with Apache on Linux (Ubuntu) with MySQL or PostgreSQL:
- [Install Oqtane with Apache and MySQL](linux-ubuntu-apache-mysql.md): This guide shows you how to install Oqtane on Linux using Apache and MySQL. You will learn how to install the prerequisites, create a database, and deploy Oqtane using a release package.
- [Install Oqtane with Apache and PostgreSQL](linux-ubuntu-apache-postgresql.md): This guide shows you how to install Oqtane on Linux using Apache and PostgreSQL. You will learn how to install the prerequisites, create a database, and deploy Oqtane using a release package.

---

## Databases
Explore additional installation resources and access the Oqtane blog and GitHub repository:
- [Supported Databases](databases.md): Find detailed information relating to all databases currently supported by Oqtane for both Windows and Linux. 

---

## Resources
Explore additional installation resources and access the Oqtane blog and GitHub repository:
- [Installation Resources](resources.md)
- [Oqtane Blog](https://www.oqtane.org/blog)
- [Oqtane GitHub Repository](https://github.com/oqtane/oqtane.framework)
