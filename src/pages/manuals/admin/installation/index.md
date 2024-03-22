# Installation
---

# Overview
Oqtane is a modular application framework that allows you to create dynamic web sites and applications using Blazor and .NET MAUI. Oqtane supports various deployment scenarios and databases. This section provides installation instructions for different environments and configurations.

## Downloading an Official Release
Find the official Oqtane releases on GitHub and follow these steps to download:

1. Visit the [Official Oqtane Releases page on GitHub](https://github.com/oqtane/oqtane.framework/releases).
2. Browse the list of releases to find the version you need.
3. Click on the release to view its details.
4. Download the release package by clicking on the appropriate link.

## Resetting an Existing Oqtane Installation
If you need to perform a clean database install for a previous version of Oqtane, follow these steps:

1. Open the `Oqtane.Server\appsettings.json` file.
2. Locate the `DefaultConnection` value and set it to `""`.
3. Run the application to trigger the re-installation process, which will execute the database installation scripts.

---

# Upgrade
Learn how to upgrade your existing Oqtane installation manually or through an automated process:
- [Upgrading Oqtane](upgrade.md): This section provides information on how to upgrade your existing Oqtane installation manually or through an automated process.

---

# Development
This section provides installation instructions for development purposes. You can choose between Windows or Linux development environments and use Visual Studio or Visual Studio Code as your IDE.

## Windows
- [Windows Visual Studio Development](development.md): Install Oqtane quickly for development, primarily for Visual Studio and Windows development.
- [Windows Visual Studio Code Development](development-vs-code.md): Install Oqtane quickly for development, primarily for Visual Studio Code and Windows development. *TODO*

## Linux
- [Linux Visual Studio Code Development](development-vs-code-linux.md): Install Oqtane quickly for development, primarily for Visual Studio Code and Linux development. *TODO*

---

# Deploy
This section provides installation instructions for deploying Oqtane to various environments using a release package. You will learn how to install the prerequisites, create a database, and configure the web server for your Oqtane application.

You can choose between the following deployment options:

## Azure
Install Oqtane using the Deploy to Azure feature:
- [Deploy Oqtane To Azure](deploy-to-azure.md): This guide shows you how to install Oqtane using the above Deploy To Azure feature.

## Windows IIS
Install Oqtane with various configurations on Windows using IIS:
- [Install Oqtane with IIS Express and SQL Express](windows-iis-express-sql-express.md): This guide shows you how to install Oqtane on Windows using IIS Express and SQL Express Server.
- [Install Oqtane with IIS Express and LocalDB](windows-iis-localdb.md): This guide shows you how to install Oqtane on Windows using IIS (Express) and LocalDb.
- [Install Oqtane with IIS and SQL Server](windows-iis-sql.md): This guide shows you how to install Oqtane on Windows using IIS and SQL Server.

## Linux Apache
Install Oqtane with Apache on Linux (Ubuntu) with MySQL or PostgreSQL:
- [Install Oqtane with Apache and MySQL](linux-ubuntu-apache-mysql.md): This guide shows you how to install Oqtane on Linux using Apache and MySQL.
- [Install Oqtane with Apache and PostgreSQL](linux-ubuntu-apache-postgresql.md): This guide shows you how to install Oqtane on Linux using Apache and PostgreSQL.

---

# Resources
Explore additional installation resources and access the Oqtane blog and GitHub repository:
- [Oqtane Supported Databases](databases.md): Find detailed information on all databases supported by Oqtane for both Windows and Linux.
- [Oqtane Installation Resources](resources.md): Access comprehensive installation guides and resources for deploying Oqtane on various platforms. 
- [Oqtane Blog](https://www.oqtane.org/blog): Stay updated with the latest news, announcements, and insights from the Oqtane community by exploring the Oqtane blog.
- [Oqtane GitHub Repository](https://github.com/oqtane/oqtane.framework): Access the Oqtane framework's GitHub repository to explore the source code, contribute to development, and stay informed about the latest updates and releases.

[← Back to Administration Documentation Manuals Home Page](../index.md)

