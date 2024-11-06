# Install Oqtane for Development using Visual Studio Code on Linux (VS Code Linux Ubuntu)

This document provides general instructions for installing Oqtane for development using Visual Studio Code on Linux Ubuntu. Oqtane is an open-source, modular application framework for Blazor that allows you to easily deploy and manage web applications on Azure or any web server.

TODO:  Review and update all steps to ensure things are as clear, easy and not missing steps, and also adding images.  This page will become more uniform with the others as this evolves.

## Prerequisites

Before you start, make sure you have the following prerequisites:

- A [Linux Ubuntu](https://ubuntu.com/download/desktop) machine with internet access and administrator privileges.
- [.NET SDK](https://dotnet.microsoft.com/download/dotnet) installed on your machine.
- A [database server](databases.md) installed on your machine or accessible from your network. You can use MySQL, PostgreSQL, SQLite, or SQL Server.

## Steps

1. **Install Visual Studio Code:**  
   Install Visual Studio Code on your machine. You can either download the .deb package from the [Visual Studio Code website](https://code.visualstudio.com) and install it using the command `sudo dpkg -i code*.deb`, or use the snap package manager and run the command `sudo snap install --classic code`.

2. **Clone the Oqtane GitHub Repository:**  
   Clone the Oqtane GitHub repository to your local machine using the following command:

   ```bash
   git clone https://github.com/oqtane/oqtane.framework.git
   ```

3. **Open the Oqtane Folder in Visual Studio Code:**
   Open the Oqtane folder in Visual Studio Code using the command:

   ```bash
   code oqtane.framework
   ```

4. **Install Required Extensions:**
   Install the required extensions for Blazor development, such as C#, Razor+, and Blazor Snippets, from the Extensions tab on the left sidebar of Visual Studio Code.

5. **Build the Oqtane Solution:**
   Build the Oqtane solution using the integrated terminal in Visual Studio Code. Navigate to the src folder and run the command:

   ```bash
   dotnet build
   ```

6. **Publish the Oqtane Project:**
   Publish the Oqtane project to a folder by running the command:

   ```bash
   dotnet publish -c Release -o publish
   ```

_Note: This may not copy everything over, please review contents of all the latest dll files are copied properly._

7. **Copy Folder Contents to Apache Folder:**
   Copy the folder contents to the Apache folder that hosts the site using the command:

   ```bash
   sudo cp -r publish /var/www/html/oqtane
   ```

   You may need to change the destination folder according to your Apache configuration.

8. **Configure Apache:**  
   Configure Apache to serve the Oqtane application following the instructions from the [Oqtane installation documentation](https://docs.oqtane.org/installation/index.md) on how to install Oqtane with Apache and [MySQL](linux-ubuntu-apache-mysql.md) or [PostgreSQL](linux-ubuntu-apache-postgresql.md).

9. **Access Your Oqtane Application:**  
   Access your Oqtane application by visiting the URL of your virtual host. For example, if your virtual host is `oqtane.example.com`, then your URL would be [http://oqtane.example.com/](http://oqtane.example.com/).

10. **Follow the Installation Wizard:**  
   Follow the installation wizard to set up your Oqtane application. You will need to enter the administrator email and password, and optionally the site name and logo.

**Congratulations!**  
You have successfully installed Oqtane for development using Visual Studio Code on Linux Ubuntu. Enjoy! 😊

---

## Resources

- [Official Oqtane Latest Release](https://github.com/oqtane/oqtane.framework/releases/latest)
- [All Official Oqtane Releases](https://github.com/oqtane/oqtane.framework/releases)
- [Oqtane Framework GitHub Repository](https://github.com/oqtane/oqtane.framework)
- [Visual Studio Code](https://code.visualstudio.com)
- [.NET Core](https://dotnet.microsoft.com)
- [Apache HTTPD Server](https://httpd.apache.org)

---

## Related Pages

- [Oqtane Supported Databases](databases.md)
- [Oqtane Installation Resources](resources.md)
- [Oqtane Framework Development Using Visual Studio Code with Windows](development-vs-code.md)
- [Oqtane Framework Development Using Visual Studio with Windows](development.md)

[← Back to Installation Home](index.md)
