# Install Oqtane Using Windows, IIS and MS SQL Server

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
2. Download and install the Windows hosting bundle.
3. Restart your machine.

## Step 4: Install Microsoft SQL Server

1. Download and install [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads).
2. Ensure that you enable SQL Server Authentication mode during the installation process.
3. During the installation, choose the option to enable TCP/IP protocol for network communication.

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

## Step 12: Secure the Site (Optional)

1. Once the installation is complete and the site is up and running, consider implementing security measures to protect your Oqtane application.
2. **Enable HTTPS**: Encrypt communication between the server and clients by enabling HTTPS. You can obtain SSL/TLS certificates from a trusted Certificate Authority (CA) like [Let's Encrypt](https://letsencrypt.org/) or purchase one from a commercial provider. Learn more about HTTPS and security best practices from the [Mozilla Server Side TLS Guidelines](https://wiki.mozilla.org/Security/Server_Side_TLS). [Mozilla SSL Configuration Generator](https://ssl-config.mozilla.org/) tool helps generate secure SSL configurations for popular web servers, including Apache, Nginx, and others. It provides recommended configurations based on Mozilla's SSL/TLS best practices.
3. **Configure Authentication and Authorization**: Control access to your site's resources by configuring appropriate authentication and authorization mechanisms. You can leverage [ASP.NET Core Identity](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity) for user authentication and role-based authorization. Explore additional security topics and best practices for ASP.NET Core from the [ASP.NET Core security topics](https://learn.microsoft.com/en-us/aspnet/core/security) documentation.
4. **Implement Security Best Practices**: Follow security best practices such as input validation, output encoding, and protection against common web vulnerabilities like [Cross-Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) and [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf/).
5. **Keep Software Updated**: Regularly update Oqtane and its dependencies to patch security vulnerabilities and ensure that your site is protected against known threats. Stay informed about security advisories and apply patches promptly.
6. **Monitor and Respond**: Monitor your site for suspicious activities and implement logging and monitoring solutions to detect and respond to security incidents effectively. Set up alerts for unusual behavior and unauthorized access attempts.
7. **Regular Security Audits**: Conduct regular security audits of your Oqtane application to identify and remediate security vulnerabilities. Perform code reviews, penetration testing, and vulnerability scanning to ensure the integrity and security of your site.

---
## Resources
- [Oqtane Supported Databases](databases.md)
- [Oqtane Installation Resources](resources.md)

[← Back to Installation Home](index.md)

