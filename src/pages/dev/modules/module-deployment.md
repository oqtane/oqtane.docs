# Module Deployment

Once you've developed and tested your module, it's time to deploy it to your Oqtane site. Deployment involves installing the module on your site and configuring it to meet your specific requirements.

## Installing the Module

To install a module on your Oqtane site, follow these steps:

1. **Access Module Management:**  
   Navigate to the **Module Management** section in the **Administration Dashboard** of your Oqtane site. Ensure you have the necessary permissions, such as "Host."

2. **Upload Module Package:**  
   Click on the **"Upload Module"** button and select the module package file with the extension `*.nupkg` from your local machine. The file must be a valid NuGet package for Oqtane.

3. **Install Module:**  
   Once the module package is uploaded, the module will appear in the list of available modules. Click on the **"Install"** button next to the uploaded module to initiate the installation process.

4. **Confirmation:**  
   After the installation is complete, a confirmation message will appear, indicating that the module was installed successfully and is ready for use.

## Activating the Module

Modules in Oqtane are typically activated automatically upon installation. However, if needed, you can adjust module permissions to control access to the module's features.

## Configuring the Module

After installation, you may need to configure the module settings to suit your specific requirements. This can include setting up permissions, defining custom settings, or integrating the module with other components of your site.

## Best Practices

- **Testing:** Before deploying the module to a production environment, thoroughly test it in a development or staging environment to ensure that it functions as expected.
  
- **Documentation:** Provide clear and comprehensive documentation for your module to help users understand its features and how to use them effectively.

- **Version Control:** Use version control systems like Git to manage the development and deployment of your module, allowing for easy tracking of changes and collaboration with other developers.

By following these best practices, you can effectively deploy modules to your Oqtane site and enhance its functionality with custom features and capabilities.

---

[!include[](~/shared/authors/thabaum/_main-author.md)]
