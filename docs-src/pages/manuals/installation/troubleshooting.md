# Installation Troubleshooting

The Installation Troubleshooting section provides solutions for common errors and challenges encountered during the installation of the Oqtane Framework. This guide aims to assist users in resolving issues efficiently, ensuring a smooth setup experience.

## Common Installation Issues

1. **Database Connection Problems**: 
   - If the installation wizard fails to connect to the database, check the following:
     - Ensure the server address and database name are correctly entered.
     - Verify that the database server is running and accessible.
     - Confirm that the provided login credentials are valid and have the necessary permissions.

2. **File Permission Errors**:
   - If you encounter file permission issues, ensure that your web server has write access to the required directories. This is particularly important for:
     - SQLite databases, where the server needs permission to create and modify database files.
     - Configuration files that need to be updated during installation.

3. **Re-running the Installation Wizard**:
   - To re-run the installation wizard after an initial setup, remove the database connection string from the `appsettings.json` file. This file can typically be found in:
     - The website's root folder or in the `Oqtane.Server` project in Visual Studio.
   - Once the connection string is deleted, the installation wizard will prompt upon accessing the application URL.

4. **Unexpected Errors**:
   - If unexpected errors occur, refer to the server logs for detailed error messages. These logs can often provide insights into what went wrong during the installation process.

## Additional Resources

For more in-depth guidance, consider exploring the following resources:

- [Installation Guides](../../guides/installation/index.md): Comprehensive setup guidance and environment-specific tips to help you through the installation process.
- [Troubleshooting Installation Issues](troubleshooting.md): Detailed solutions for common installation errors and setup challenges, designed to assist both new and experienced users.
- [GitHub Discussions](https://github.com/oqtane/oqtane.framework/discussions): Engage with the Oqtane community to find solutions to common installation questions and share your experiences.
- [GitHub Issues](https://github.com/oqtane/oqtane.framework/issues): Report issues you encounter or check for existing issues related to installation problems.

This section aims to streamline your installation experience by providing quick access to troubleshooting steps and resources. If you encounter any issues not covered in this guide, please refer to the community support channels for further assistance.
