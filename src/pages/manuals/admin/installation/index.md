# Installation Introduction

This manual introduces the **Installation Wizard** for Oqtane, focusing on setting up a core installation. The Installation Wizard streamlines the configuration of essential settings, including database connections and host account setup.

## Installation Wizard Overview

The **Installation Wizard** simplifies the setup process by guiding you through the following essential steps:

1. **Database Configuration**
   - **Choose Database Provider**: Select a supported database (SQL Server, MySQL, PostgreSQL, SQLite).
   - **Configure Connection String**: Ensure accurate server address, credentials, and database name.
   - **Set Permissions**: The database user should have permissions for `CREATE`, `READ`, and `WRITE` operations.

2. **Host and Admin Configuration**
   - **Host Name**: Enter the primary domain or URL for accessing your Oqtane installation.
   - **Admin Account**: Set up an admin user to access and manage your Oqtane installation after setup.

3. **Finalize Installation**
   - **Confirm Settings**: Verify and apply your configurations to complete setup.
   - **Access the Site**: Redirect to the site homepage upon successful installation.

For an in-depth explanation of each screen and configuration in the wizard, refer to [Installation Wizard](installation-wizard.md).

## Environment-Specific Recommendations

For different deployment environments, such as production or development, consult the extended guides linked below. These provide more specific setup instructions, including handling permissions, optimizing server configurations, and other advanced considerations.

> **Note**: Oqtane is optimized for Windows Server with IIS but also supports deployment on Linux (e.g., with NGINX or Apache).

- [Installation Guides](../../../guides/installation/index.md): Detailed setup instructions for deploying Oqtane in different environments.

markdown

## Additional Resources

For further insights on Oqtane installation and configuration, consider exploring these resources:

- [GitHub Discussions](https://github.com/oqtane/oqtane.framework/discussions): Find community support and solutions for common installation questions.
- [Oqtane Blog - Installation Best Practices](https://www.oqtane.org/blog): Read about best practices and tips for a smooth installation process.
- [Community Wiki - Oqtane Setup](https://github.com/oqtane/oqtane.framework/wiki): Access community-contributed knowledge for specific setup scenarios and troubleshooting.

## See Also

For more comprehensive setup guidance, see the [Installation Guides(../../../guides/installation/index.md).
