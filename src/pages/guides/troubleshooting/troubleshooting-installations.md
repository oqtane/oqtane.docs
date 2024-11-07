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

## Additional Resources

For further assistance and discussions on installation troubleshooting, you can explore the [Oqtane Framework GitHub repository](https://github.com/oqtane/oqtane.framework) and review [existing issues](https://github.com/oqtane/oqtane.framework/issues) and [discussions](https://github.com/oqtane/oqtane.framework/discussions) related to installation problems. Engaging with the community and seeking help from experienced users and developers can often provide valuable insights and solutions to resolve installation issues.

- [Oqtane Supported Databases](../installation/databases.md)
- [Oqtane Installation Resources](../installation/resources.md)

[← Back to Installation Home](index.md)
