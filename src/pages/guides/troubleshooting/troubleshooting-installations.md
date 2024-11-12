# Installation Troubleshooting

---

## Overview

Encountering issues during the installation process can be frustrating, but with the right troubleshooting steps, you can overcome common obstacles and successfully set up Oqtane. Below are some common troubleshooting tips for both Windows and Linux installations:

---

## Windows Installation Troubleshooting

![Windows Logo](../installation/assets/windows-logo.png)

- **Check Prerequisites**: Ensure that all prerequisites, such as .NET Framework, IIS, or SQL Server, are installed correctly and meet the minimum version requirements specified in the [Oqtane documentation](https://docs.oqtane.org/manuals/installation).

- **Permissions**: Verify that you have sufficient permissions to install and configure Oqtane. Running installation processes with administrative privileges can help resolve permission-related issues.

- **Firewall and Antivirus**: Temporarily disable firewall or antivirus software during the installation process, as they may interfere with file downloads or server connections.

- **Error Logs**: Check error logs generated during the installation process for any specific error messages or exceptions. These logs can provide valuable insights into the root cause of installation failures.

---

## Linux Installation Troubleshooting

![Linux Logo](../installation/assets/linux-logo.png)

- **Package Dependencies**: Ensure that all required dependencies, such as Mono, Apache, MySQL, or PostgreSQL, are installed and configured correctly on your Linux system. Use package managers like `apt` or `yum` to install missing dependencies.

- **File Permissions**: Check file and directory permissions to ensure that the installation directory and relevant files are accessible by the installation process. Adjust permissions using `chmod` or `chown` commands as needed.

- **Service Status**: Verify the status of Apache or other web servers, as well as database services like MySQL or PostgreSQL, to ensure they are running properly. Restart services if necessary to resolve any issues.

- **SELinux**: If SELinux is enabled on your Linux system, it may restrict certain operations during the installation process. Temporarily disable SELinux or adjust its policies to allow necessary operations for Oqtane installation.

---

## WebDAV Issues

### Disabling WebDAV in Control Panels

WebDAV is not supported by Oqtane Framework. To ensure a smooth installation and operation of Oqtane, it is important to disable WebDAV in your control panel hosting environment. Below are the steps to disable WebDAV in common control panels.

#### Plesk

1. **Login to Plesk Control Panel.**
2. Navigate to **`Websites & Domains`**.
3. Click on the domain name you are working with.
4. Click on **`Hosting Settings`**.
5. Scroll down to **`Web Scripting and Security`** section.
6. Uncheck **`WebDAV`**.
7. Click **`OK`** to save changes.

#### cPanel

1. **Login to cPanel.**
2. Go to **`File Manager`**.
3. Click on the **`Settings`** icon at the top right corner.
4. Select **`WebDAV`** tab.
5. Uncheck **`Enable WebDAV`**.
6. Click **`Save`** to apply the changes.

#### DirectAdmin

1. **Login to DirectAdmin.**
2. Navigate to **`Advanced Features`**.
3. Click on **`WebDAV`**.
4. Uncheck **`Enable WebDAV`**.
5. Click **`Save`** to apply the changes.

#### Additional Notes

- It is recommended to contact your hosting provider’s support if you encounter difficulties disabling WebDAV.
- Ensure all changes are properly saved and applied before proceeding with the Oqtane installation.

## Additional Resources

---

For further assistance and discussions on installation troubleshooting, you can explore the [Oqtane Framework GitHub repository](https://github.com/oqtane/oqtane.framework) and review [existing issues](https://github.com/oqtane/oqtane.framework/issues) and [discussions](https://github.com/oqtane/oqtane.framework/discussions) related to installation problems. Engaging with the community and seeking help from experienced users and developers can often provide valuable insights and solutions to resolve installation issues.

- [Oqtane Supported Databases](../installation/databases.md)
- [Oqtane Installation Resources](../installation/resources.md)

[← Back to Installation Home](index.md)
