# Install Oqtane Using Linux Ubuntu, Apache, and PostgreSQL

## Step 1: Install Ubuntu Desktop

1. Visit the [Ubuntu Desktop download page](https://ubuntu.com/download/desktop) to download the latest version of Ubuntu Desktop.

2. Choose the appropriate version based on your system architecture (32-bit or 64-bit) and click on the "Download" button.

3. Once the download is complete, create a bootable USB drive or DVD from the downloaded ISO file. You can use tools like [Rufus](https://rufus.ie/) for Windows or [Etcher](https://etcher.balena.io/) for macOS and Linux to create the bootable media.

4. Insert the bootable USB drive or DVD into your computer and boot from it. Follow the on-screen instructions to start the Ubuntu installation process.

5. During the installation process, you will be prompted to choose various options such as language, keyboard layout, and installation type. Make your selections according to your preferences and proceed with the installation.

6. When prompted, choose the option to install Ubuntu alongside your existing operating system or replace it entirely, depending on your requirements.

7. Follow the remaining steps to complete the installation. Once finished, restart your computer to boot into the newly installed Ubuntu Desktop.

8. After booting into Ubuntu Desktop, follow the initial setup wizard to configure your system preferences and create a user account.

9. Once the setup is complete, you will have Ubuntu Desktop installed and ready for use.

For more information on installing Ubuntu Desktop, refer to the [official Ubuntu Desktop Installation Guide](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview).

For additional resources and documentation, visit the [Ubuntu documentation home page](https://help.ubuntu.com/).

## Step 2: Install PostgreSQL Database

This step covers the installation of PostgreSQL Database on Ubuntu. PostgreSQL is a powerful, open-source relational database management system used for storing and managing data.

### Prerequisites

- Ubuntu Desktop or Server installed and configured on your system.

### Installation Process

1. **Open Terminal**:
    - Open a terminal window by pressing `Ctrl + Alt + T` or searching for "Terminal" in the applications menu.

2. **Update Package List**:
    - Before installing any new software, it's good practice to update the package list to ensure you're installing the latest versions. Run the following command:

    ```bash
    sudo apt update
    ```

3. **Install PostgreSQL**:
    - Install PostgreSQL Database Server using the following command:

    ```bash
    sudo apt install postgresql
    ```

4. **Start PostgreSQL Service**:
    - Once the installation is complete, PostgreSQL service should start automatically. However, you can ensure that it's running by executing the following command:

    ```bash
    sudo systemctl start postgresql
    ```

5. **Enable PostgreSQL Service to Start on Boot**:
    - To ensure that PostgreSQL starts automatically every time the system boots, enable it as a systemd service:

    ```bash
    sudo systemctl enable postgresql
    ```

6. **Access PostgreSQL Command-Line Interface**:
    - To access the PostgreSQL command-line interface, use the following command:

    ```bash
    sudo -u postgres psql
    ```

### Additional Resources

- [PostgreSQL Documentation](https://www.postgresql.org/docs/): Official documentation for PostgreSQL.

## Step 3: Create Database and User in PostgreSQL

This step covers creating a new database and user in PostgreSQL for Oqtane Framework. Additionally, it includes instructions for using pgAdmin, a popular graphical user interface for PostgreSQL administration.

### Prerequisites

- PostgreSQL installed and running on your Ubuntu system.

### Process

1. **Access PostgreSQL Command-Line Interface**:
    - Open a terminal window and access the PostgreSQL command-line interface as the `postgres` user:

    ```bash
    sudo -u postgres psql
    ```

2. **Create a New Database**:
    - Within the PostgreSQL command-line interface, run the following SQL command to create a new database for Oqtane Framework. Replace `oqtanedb` with your desired database name:

    ```sql
    CREATE DATABASE oqtanedb;
    ```

3. **Create a New User**:
    - Next, create a new user for accessing the Oqtane database. Replace `oqtaneuser` with your desired username and `OqtaneDevPassword1-1` with a strong password:

    ```sql
    CREATE USER oqtaneuser WITH PASSWORD 'OqtaneDevPassword1-1';
    ```

4. **Grant Privileges to the User**:
    - Grant all privileges on the Oqtane database to the newly created user:

    ```sql
    GRANT ALL PRIVILEGES ON DATABASE oqtanedb TO oqtaneuser;
    ```

5. **Exit PostgreSQL Command-Line Interface**:
    - After completing the database setup, exit the PostgreSQL command-line interface:

    ```sql
    \q
    ```

6. **(Optional) Use pgAdmin for PostgreSQL Administration**:
    - [pgAdmin](https://www.pgadmin.org/) is a feature-rich graphical user interface for PostgreSQL administration. You can install pgAdmin on your Ubuntu system and use it to manage your PostgreSQL databases, users, and more.
    - **Installation**:
        - Visit the [pgAdmin download page](https://www.pgadmin.org/download/) and download the appropriate package for Ubuntu.
        - Follow the installation instructions provided on the download page to install pgAdmin on your system.
    - **Usage**:
        - Once installed, launch pgAdmin from the applications menu or by running the `pgadmin4` command in the terminal.
        - Connect to your PostgreSQL server by providing the necessary connection details, including host, port, username, and password.
        - Once connected, you can perform various database administration tasks using pgAdmin's intuitive graphical interface.

### Additional Resources

- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/): Comprehensive tutorial for PostgreSQL beginners.
- [pgAdmin Documentation](https://www.pgadmin.org/docs/): Official documentation for pgAdmin.


## Step 4: Install Apache Server

This step covers the installation of Apache HTTP Server on Ubuntu. Apache is a widely-used web server that can serve HTML files and other content over HTTP.

### Prerequisites

- Ubuntu Desktop or Server installed and configured on your system.

### Installation Process

1. **Open Terminal**:
    - Open a terminal window by pressing `Ctrl + Alt + T` or searching for "Terminal" in the applications menu.

2. **Update Package List**:
    - Before installing any new software, it's good practice to update the package list to ensure you're installing the latest versions. Run the following command:

    ```bash
    sudo apt update
    ```

3. **Install Apache**:
    - Install Apache HTTP Server using the following command:

    ```bash
    sudo apt install apache2
    ```

4. **Start Apache Service**:
    - Once the installation is complete, Apache service should start automatically. However, you can ensure that it's running by executing the following command:

    ```bash
    sudo systemctl start apache2
    ```

5. **Enable Apache Service to Start on Boot**:
    - To ensure that Apache starts automatically every time the system boots, enable it as a systemd service:

    ```bash
    sudo systemctl enable apache2
    ```

6. **Check Apache Status**:
    - To verify that Apache is running without any errors, you can check its status using:

    ```bash
    sudo systemctl status apache2
    ```

7. **Access Apache Default Page**:
    - Open a web browser and navigate to `http://localhost`. You should see the Apache default page if the installation was successful.

### Additional Resources

- [Apache HTTP Server Documentation](https://httpd.apache.org/docs/): Official documentation for Apache HTTP Server.
- [Ubuntu Server Guide](https://ubuntu.com/server/docs): Comprehensive guide for Ubuntu Server, which includes instructions for installing and configuring various software packages.

## Step 5: Install .NET Core

This step covers the installation of .NET Core on Ubuntu. .NET Core is a cross-platform, open-source framework for building modern, cloud-based, and internet-connected applications.

### Prerequisites

- Ubuntu Desktop or Server installed and configured on your system.

### Installation Process

1. **Open Terminal**:
    - Open a terminal window by pressing `Ctrl + Alt + T` or searching for "Terminal" in the applications menu.

2. **Register Microsoft Product Repository**:
    - To install .NET Core, you first need to register the Microsoft product repository. Run the following command to download and install the Microsoft package signing key:

    ```bash
    wget https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
    sudo dpkg -i packages-microsoft-prod.deb
    ```

3. **Install .NET SDK**:
    - Once the repository is registered, update the package list and install the .NET SDK using the following commands:

    ```bash
    sudo apt update
    sudo apt install -y apt-transport-https
    sudo apt update
    sudo apt install -y dotnet-sdk
    ```

4. **Verify Installation**:
    - After installation, verify that the .NET SDK has been successfully installed by running:

    ```bash
    dotnet --version
    ```

5. **Install ASP.NET Core Runtime (Optional)**:
    - If you plan to deploy ASP.NET Core applications, you may also want to install the ASP.NET Core Runtime. Use the following command to install it:

    ```bash
    sudo apt install -y aspnetcore-runtime
    ```

### Additional Resources

- [.NET Documentation](https://docs.microsoft.com/en-us/dotnet/): Official documentation for .NET.
- [.NET Core Download Page](https://dotnet.microsoft.com/download/dotnet): Official download page for .NET Core SDK and runtime.

## Step 6: Configure Host and Service Files for Apache

This step involves creating configuration files for Apache virtual host and service to serve your .NET Core application.

### Prerequisites

- Apache server installed on your Ubuntu system.
- .NET Core SDK installed on your system.
- Oqtane Framework files ready to be deployed.

## Configuration Process

1. **Create Apache Virtual Host Configuration File**:
    - Open a terminal window and navigate to the Apache sites-available directory:

    ```bash
    cd /etc/apache2/sites-available
    ```

    - Create a new virtual host configuration file for your .NET Core application. Replace `example.com` with your domain name:

    ```bash
    sudo nano example.com.conf
    ```

    - Add the following configuration to the file, adjusting the values as needed:

    ```apache
    <VirtualHost *:80>
        ServerName example.com
        DocumentRoot /var/www/example.com
        ErrorLog ${APACHE_LOG_DIR}/example.com-error.log
        CustomLog ${APACHE_LOG_DIR}/example.com-access.log combined
    </VirtualHost>
    ```

    - Save the file and exit the text editor. If you're not familiar with `nano`, you can learn more about it in the [nano documentation](https://www.nano-editor.org/dist/latest/nano.html).

2. **Create Document Root Directory**:
    - Create the document root directory where your .NET Core application files will be stored:

    ```bash
    sudo mkdir /var/www/example.com
    ```

3. **Configure Apache Service**:
    - Enable the newly created virtual host configuration and restart the Apache service:

    ```bash
    sudo a2ensite example.com.conf
    sudo systemctl restart apache2
    ```

4. **Deploy .NET Core Application**:
    - Copy or publish your .NET Core application files to the document root directory (`/var/www/example.com`) of the virtual host.

5. **Adjust File Permissions (Optional)**:
    - Depending on the deployment scenario, you may need to adjust file permissions to ensure that Apache can access and serve your .NET Core application files properly.

6. **Verify Configuration**:
    - Open a web browser and navigate to your domain name (e.g., `http://example.com`). If configured correctly, you should see your .NET Core application running.

### Additional Resources

- [Apache HTTP Server Documentation](https://httpd.apache.org/docs/): Official documentation for Apache HTTP Server.
- [.NET Core Deployment Guide](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/): Official deployment guide for .NET Core applications.

## Step 7: Setup App Files and Folders

1. **Create Directory Structure**: Begin by creating a directory structure to organize your Oqtane application files. Choose a location on your Ubuntu system where you want to store the application files. For example:

```bash

    sudo mkdir /var/www/oqtane

```

 Clone or Download Oqtane Framework: Navigate to the Oqtane Framework GitHub repository and clone the repository to your local machine using Git or download the source code as a ZIP archive.

  Option 1: Clone Repository

  ```bash

     sudo git clone https://github.com/oqtane/oqtane.framework.git /var/www/oqtane
 
  ```

 Option 2: Download ZIP Archive
     Visit the Oqtane Framework repository on GitHub.
     Click on the "Code" button and select "Download ZIP".
     Extract the downloaded ZIP archive to the /var/www/oqtane directory.

Place Oqtane Files: Once you have obtained the Oqtane Framework files, place them in the directory structure you created earlier. Ensure that the files are organized correctly within the directory to maintain the application's structure.

```bash

    sudo cp -r /path/to/oqtane.framework/* /var/www/oqtane

```

Set Permissions (Optional): Depending on your setup, you may need to adjust file permissions to ensure that the web server can access the Oqtane application files properly. Use the following commands to set appropriate permissions:

```bash

    sudo chown -R www-data:www-data /var/www/oqtane
    sudo chmod -R 755 /var/www/oqtane
    
```

Configure Web Server: If you haven't already configured Apache to serve your Oqtane application, you'll need to set up a virtual host and configure the necessary Apache directives to point to the application directory. Refer to the Apache documentation for detailed instructions on virtual host configuration.

By following these steps, you have successfully set up the directory structure and placed the Oqtane Framework files in the appropriate location on your Ubuntu system. Your application is now ready for further configuration and deployment.

# Step 8: Install Oqtane Framework (Linux)

To install the Oqtane Framework on Linux, follow these steps:

1. **Download Oqtane Release**: Download the latest release of Oqtane from the [official GitHub repository](https://github.com/oqtane/oqtane.framework/releases/latest). Choose the appropriate version and download the ZIP file containing the release files.

2. **Extract Release Files**: After downloading the ZIP file, extract its contents to a directory on your Linux machine where you want to host the Oqtane application.

3. **Set Permissions**: Ensure that the appropriate permissions are set for the Oqtane files and directories, allowing the web server user to read and execute the files. You can use the following commands in the terminal to set permissions:

```bash
   sudo chown -R www-data:www-data /path/to/oqtane
sudo chmod -R 755 /path/to/oqtane
```

Configure Database Connection: Update the database connection string in the appsettings.json file located in the root directory of your Oqtane application. Use the connection string for your preferred database server (e.g., MySQL, PostgreSQL).

Access Oqtane Installation Wizard: Open a web browser and navigate to the URL associated with your Oqtane installation directory. If everything is configured correctly, you should see the Oqtane installation wizard, where you can proceed with the installation and setup of your Oqtane application.

By following these steps, you will have successfully installed and configured the Oqtane Framework on your Linux machine, making your application accessible via a web browser.

# Step 9: Test the Installation

After completing the installation process, it's important to test your Oqtane application to ensure everything is working correctly. Follow these steps to test the installation:

1. **Access Oqtane Application**: Open a web browser and navigate to the URL associated with your Oqtane application. This should be the URL you configured during the installation process.

2. **Verify Functionality**: Once the Oqtane application loads, verify that it is running correctly. Test various features and functionalities to ensure that everything is working as expected.

3. **Login and Administration**: If applicable, log in to the Oqtane application using the provided credentials and verify that you have access to the administration interface. This will allow you to manage users, modules, pages, and other aspects of your Oqtane application.

4. **Test User Experience**: Test the user experience by navigating through different pages, interacting with modules, and performing common tasks within the application. Ensure that the application is responsive and functions properly across different devices and screen sizes.

By testing the installation and functionality of your Oqtane application, you can identify any issues or errors early on and address them accordingly, ensuring a smooth and successful deployment.

---  

## Resources

- [Official Oqtane Latest Release](https://github.com/oqtane/oqtane.framework/releases/latest)
- [All Official Oqtane Releases](https://github.com/oqtane/oqtane.framework/releases)
- [Oqtane Framework GitHub Repository](https://github.com/oqtane/oqtane.framework)
- [Visual Studio Code](https://code.visualstudio.com)
- [.NET Core](https://dotnet.microsoft.com)

## Related Pages

- [Oqtane Supported Databases](databases.md)
- [Oqtane Installation Resources](resources.md)

[← Back to Installation Home](index.md)
