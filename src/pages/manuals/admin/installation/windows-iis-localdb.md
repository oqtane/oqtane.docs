# Install on Windows, IIS and LocalDB 

## Step 1: Install IIS

- Search for "Turn Windows features on or off" next to the Windows Start button.
- Enable Internet Information Services (IIS) ensuring [WebSocket Protocol](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/websockets?#enabling-websockets-on-iis) is enabled and WebDAV Publishing is disabled.
- Click OK to complete the installation.

*Note: Ensure that the WebSocket Protocol is enabled and WebDAV Publishing is disabled to avoid conflicts with Blazor.*

## Step 2: Install Url Rewrite Module

- Navigate to [Url Rewrite Module](https://www.iis.net/downloads/microsoft/url-rewrite).
- Download and install.

*Note: The URL Rewrite Module is necessary for configuring URL rewriting rules in IIS, which are often used in web applications like Oqtane.*

## Step 3: Install .NET Core Hosting Bundle

- Navigate to [.NET Core Hosting Bundle](https://dotnet.microsoft.com/permalink/dotnetcore-windows-runtime-bundle-installer).
- Download and install the bundle.
- Restart your machine.

*Note: The .NET Core Hosting Bundle is required for hosting .NET Core applications on Windows servers.*

## Step 4: Install LocalDB

- If doing a local install and wanting to use LocalDB for development, navigate to [LocalDB installation](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb) and choose the appropriate package.

*Note: LocalDB is recommended for development environments but can be substituted with other [database options supported by Oqtane](databases.md) such as SQLite, MySQL, PostgreSQL, or SQL Server.*

## Step 5: Install Oqtane

- Download the latest Install package from [Oqtane Releases](https://github.com/oqtane/oqtane.framework/releases).
- Extract the files to your desired directory.

*Note: Extract the files to a directory where you plan to host your application.*

### Step 6: Configure IIS App Pool

- Open "Internet Information Services (IIS) Manager" by searching for it using the search icon next to your Windows Start button.
- Expand the top node identifying your machine in the left-hand pane.
- Right-click on Application Pools and select "Add Application Pool".
- Provide a Name for the application pool, such as "oqtane".
- Specify No Managed Code for the .NET CLR version.
- Click OK.
- In the main Application Pools pane, select the newly created pool.
- In the right-hand Actions pane, select Advanced Settings.
- Scroll down to Process Model and find the Identity option.
- To ensure secure interaction with the file system and LocalDB without granting excessive privileges, it's recommended to modify the permissions of the folder containing the IIS Oqtane files to grant appropriate access to the Application Pool's identity.
   - Right-click on the folder containing the Oqtane files in Windows Explorer.
   - Select "Properties" and navigate to the "Security" tab.
   - Click on "Edit" to modify permissions.
   - Add the Application Pool's identity (e.g., `IIS AppPool\oqtane`) and grant it appropriate permissions, such as Modify access. This allows the application pool to write to the directory in addition to reading from it.
- Locate the LocalDB Data Directory: By default, LocalDB databases are stored in the user's profile directory under `C:\Users\{username}\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\{instancename}\`.

  - Modify Folder Permissions:
      - Right-click on the folder containing the LocalDB database files in Windows Explorer.
      - Select "Properties" and navigate to the "Security" tab.
      - Click on "Edit" to modify permissions.
      - Click on "Add" and enter the name of the user account or group that you want to grant modify permissions to. This could be your current user account or the Application Pool's identity if it needs to write to the LocalDB files.
      - After adding the user or group, select it from the list and check the "Modify" permission checkbox under "Allow".
      - Click "Apply" and then "OK" to save the changes.

*Note: For development environments, setting the App Pool's Identity to "LocalSystem" may be acceptable for simplicity and ease of setup. However, exercise caution and consider using a more granular approach for production environments to adhere to security best practices.*

## Step 7: Configure IIS Website

- In IIS, right-click on Sites and select "Add Website".
- Provide a name and choose the Application Pool created earlier.
- Specify the path to the Oqtane files.
- Specify a Host name, e.g., "oqtane.dev".

*Note: Ensure that the host name specified here is correctly mapped to the machine in the host file.*

## Step 8: Add a Host Entry

- Open Notepad as Administrator.
- Open the "hosts" file located in `C:\Windows\System32\drivers\etc`.
- Add an entry mapping the host name to 127.0.0.1, e.g., "127.0.0.1 oqtane.dev".
- Save the file.

*Note: This step is only required for a local development environment. In shared or public environments, standard DNS configurations are used.*

## Step 9: Navigate to Site

- Open your favorite browser and navigate to the specified host name, e.g., `http://oqtane.dev`.
- Follow the Oqtane install wizard, providing necessary database connection details and site administrator credentials.
- Click Install.

*Note: If encountering errors during the Install Wizard due to database creation permissions, consider creating the database manually before initiating the Install Wizard.*

---

## Related Links and Resources

### For SQL Server:
- [SQL Server Downloads](https://www.microsoft.com/en-us/sql-server/sql-server-downloads): Download SQL Server for Windows.
- [SQL Server Management Studio (SSMS) Download](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms): Download SQL Server Management Studio for database management.
- [SQL Server Installation Guide for Windows](https://learn.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server): Detailed guide on installing SQL Server on Windows.
- [SQL Server Express LocalDB Installation Guide](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb): Instructions for installing SQL Server Express LocalDB.

### For Other Database Options:

- **Note:** If you prefer to use MySQL, PostgreSQL, or another supported database, you can find installation instructions on their respective documentation pages. The installation process will be similar to SQL Server's installation.

---

### For MySQL:

- [MySQL Downloads](https://dev.mysql.com/downloads/): Download MySQL Community Edition for Windows.
- [MySQL Workbench Download](https://dev.mysql.com/downloads/workbench/): Download MySQL Workbench for database administration.
- [MySQL Documentation for Windows Installation](https://dev.mysql.com/doc/refman/8.3/en/windows-installation.html): Detailed guide for installing MySQL on Windows.


### For PostgreSQL:

- [PostgreSQL Downloads](https://www.postgresql.org/download/): Download page for the latest version of PostgreSQL for Windows.
- [pgAdmin Download](https://www.pgadmin.org/download/): Download pgAdmin for administration.
- [PostgreSQL Documentation for Windows Installation](https://www.postgresql.org/docs/current/install-windows.html): Installation guide specific to Windows environment.

### For SQLite:

- [SQLite Downloads](https://www.sqlite.org/download.html): Download SQLite for Windows.
- [SQLite Browser Download](https://sqlitebrowser.org/dl/): Download SQLite Database Browser for administration.
- [SQLite Documentation](https://www.sqlite.org/docs.html): Official documentation for SQLite.

---

## Additional Resources

- [Oqtane Blog: Installation Guide for IIS with LocalDB](https://www.oqtane.org/blog/!/24/installing-oqtane-on-iis): Explore detailed instructions and tips for setting up Oqtane with IIS and LocalDB.
- [Oqtane Framework GitHub Repository](https://github.com/oqtane/oqtane.framework): Contribute to the Oqtane Framework project and report issues on GitHub.
