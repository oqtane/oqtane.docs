# Installing Oqtane on Windows with IIS and MS SQL Server

## Overview

This guide will walk you through the steps to install Oqtane on a Windows system using Internet Information Services (IIS) as the web server and Microsoft SQL Server as the database backend. We'll also use SQL Server Management Studio (SSMS) for database management.

## Prerequisites

Before you begin, make sure you have the following:

- A Windows machine with administrative privileges.
- Internet Information Services (IIS) installed.
- Microsoft SQL Server installed, along with SQL Server Management Studio (SSMS).

## Step 1: Enable Internet Information Services (IIS)

1. Open the "Turn Windows features on or off" menu next to the Windows Start button.
2. Enable Internet Information Services (IIS), ensuring that the WebSocket Protocol is enabled and WebDAV Publishing is disabled.
3. Click OK to complete the installation.

## Step 2: Install URL Rewrite Module

1. Navigate to the [Url Rewrite Module](https://www.iis.net/downloads/microsoft/url-rewrite) page.
2. Download and install the module.

## Step 3: Install .NET Core Hosting Bundle

1. Navigate to the [.NET Core Hosting Bundle](https://dotnet.microsoft.com/download) page.
2. Download and install the bundle.
3. Restart your machine.

## Step 4: Install Microsoft SQL Server

1. Download and install [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads).
2. Ensure that you enable SQL Server Authentication mode during the installation process.

## Step 5: Install SQL Server Management Studio (SSMS)

1. Download and install [SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms).

## Step 6: Configure SQL Server

1. Open SQL Server Management Studio (SSMS).
2. Connect to your SQL Server instance.
3. Create a new database for Oqtane.
4. Optionally, create a new SQL Server login or use an existing one for Oqtane.

## Step 7: Download and Extract Oqtane

1. Download the latest release of Oqtane from the [Oqtane Releases](https://github.com/oqtane/oqtane.framework/releases/latest) page.
2. Extract the files to your desired directory.

## Step 8: Configure IIS App Pool

1. Open "Internet Information Services (IIS) Manager" from the Start menu.
2. Create a new Application Pool named "oqtane" with No Managed Code for the .NET CLR version.
3. Set appropriate permissions for the folder containing the Oqtane files.

_Note: Ensure that the folder containing the Oqtane files has appropriate modify permissions set for the "IIS AppPool\oqtane" user to avoid any permission issues during installation or runtime._

## Step 9: Configure IIS Website

1. In IIS Manager, right-click on Sites and select "Add Website".
2. Provide a name and choose the "oqtane" Application Pool.
3. Specify the path to the Oqtane files and a host name (e.g., "oqtane.dev").

## Step 10: Add a Host Entry (Optional)

1. Open Notepad as Administrator.
2. Open the "hosts" file located in C:\Windows\System32\drivers\etc.
3. Add an entry mapping the host name to 127.0.0.1, e.g., 127.0.0.1 oqtane.dev.
4. Save the file.

## Step 11: Navigate to the Site

1. Open your favorite web browser.
2. Navigate to the specified host name, e.g., http://oqtane.dev.
3. You should now see the Oqtane installation wizard. Follow the on-screen instructions to complete the installation process.

