# Installation
---
## Overview

### Downloading an Official Release

Find the official Oqtane releases on GitHub and follow these steps to download:

1. Visit the [Official Oqtane Releases page on GitHub](https://github.com/oqtane/oqtane.framework/releases).
2. Browse the list of releases to find the version you need.
3. Click on the release to view its details.
4. Download the release package by clicking on the appropriate link.

### Resetting an Existing Oqtane Installation

If you need to perform a clean database install for a previous version of Oqtane, follow these steps:

1. Open the `Oqtane.Server\appsettings.json` file.
2. Locate the `DefaultConnection` value and set it to `""`.
3. Run the application to trigger the re-installation process, which will execute the database installation scripts.

---

## Development

- [Windows Development](development.md): Install Oqtane quickly for development, primarily for Visual Studio and Windows development.
- [Linux Development](development.md): Install Oqtane quickly for development, primarily for Visual Studio Code and Linux development. *TODO*

---

## Windows IIS

Install Oqtane with various configurations on Windows using IIS:

- [Install Oqtane with IIS Express and SQL Express](windows-iis-express-sql-express.md)
- [Install Oqtane with IIS Express and LocalDB](windows-iis-express-localdb.md)
- [Install Oqtane with IIS and SQL Server](windows-iis-sql.md)

---

## Linux (Ubuntu) Apache

Install Oqtane with Apache on Linux (Ubuntu) with MySQL or PostgreSQL:

- [Install Oqtane with Apache and MySQL](linux-ubuntu-apache-mysql.md)
- [Install Oqtane with Apache and PostgreSQL](linux-ubuntu-apache-postgresql.md)

---

## Upgrades

Learn how to upgrade your existing Oqtane installation manually or through an automated process:

- [Upgrading Oqtane](upgrades.md)

## Databases

Explore additional installation resources and access the Oqtane blog and GitHub repository:

- [Supported Databases](databases.md)

---

## Resources

Explore additional installation resources and access the Oqtane blog and GitHub repository:

- [Installation Resources](resources.md)
- [Oqtane Blog](resources.md#oqtane-blog)
- [Oqtane GitHub Repository](resources.md#oqtane-github-repository)
