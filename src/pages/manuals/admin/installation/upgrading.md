# Upgrading Oqtane

Regularly upgrading Oqtane is essential to ensure you have access to the latest fixes, features, and security patches. This guide provides detailed instructions for both manual and automated upgrade processes.

## Manual Upgrade

Performing a manual upgrade gives you full control over the process. Follow these steps to upgrade Oqtane:

### Step 1: Download an Upgrade Package

- Visit the [Oqtane Framework releases page](https://github.com/oqtane/oqtane.framework/releases) on GitHub.
- Download the package for your desired version that ends with *.Upgrade.zip (e.g., Oqtane.Framework.5.0.2.Upgrade.zip).

### Step 2: Navigate to Your Installation

- Access the root location where the Oqtane framework files were originally deployed. This location typically contains files with a .dll extension (e.g., Oqtane.Server.dll).

### Step 3: Shutdown Your Site

- Depending on your setup, stop your website using your web server or cloud provider's interface. Alternatively, create an `app_offline.htm` file in the root folder to temporarily shut down your site.

### Step 4: Extract the Files

- Extract all files from the Upgrade.zip package to the root location obtained in Step 2. When prompted, replace existing files with those from the upgrade package.

### Step 5: Bring Your Site Back Online

- Restart your site using your web server or cloud provider's interface. If you created an `app_offline.htm` file, delete it now.

### Step 6: Browse to Your Site

- Open your web browser and navigate to the URL for your site. The upgrade scripts will execute automatically during application startup.

## Automated Upgrade

Oqtane offers a streamlined upgrade experience for non-technical users through its automated upgrade feature. Follow these steps:

1. Log in to your Oqtane site as the host user.
2. Navigate to the Admin Dashboard via the Control Panel.
3. Choose the "System Update" option.
4. On the default tab, if a newer version of Oqtane is available on Nuget.org, click the "Upgrade to #.#.#" button to download and perform the upgrade automatically. If you're already running the latest version, a message indicating this will be displayed.
5. Alternatively, use the "Upload" tab to manually upload a framework upgrade package to the site and then select a button to install it. This method also allows you to reinstall or repair an existing installation with the current version.

**Note:** Automated upgrades may not always be successful due to environmental factors. If an automated upgrade fails, revert to the manual method described above.

By following these instructions, you can ensure your Oqtane installation remains up-to-date with the latest enhancements and security fixes.
