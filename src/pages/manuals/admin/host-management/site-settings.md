# Site Settings (Host Management)

![site-settings](./assets/site-settings.png)

## Overview

The **Site Settings** feature in Oqtane allows both Admin and Host users to configure site-specific options. While Admin users have access to a standard set of settings, Host users are provided with additional, advanced configuration options. This guide will summarize both types of settings and provide links to further details.

To access **Site Settings** in the Oqtane admin dashboard:

1. **Open the Control Panel**: Click the **Control Panel** icon to access additional settings.

   ![Control Panel Icon](./assets/control-panel-button.png)

2. **Navigate to the Admin Dashboard**: In the control panel, click the button to open the **Admin Dashboard**.

   ![Open Admin Dashboard](./assets/control-panel-admin-dashboard-button.png)

3. **Select Site Settings**: In the Admin Dashboard, click on the **Site Settings** icon to configure your site settings.

   ![Admin Dashboard Site Settings](./assets/site-settings.png)

---

## Admin Management Site Settings

For the **Admin Management** features in **Site Settings**, see the following sections in the [Admin Management Site Settings](../../admin-management/site-settings.md) documentation:

- **General Settings**: [General Settings Section](../../admin-management/site-settings.md#general-settings)
  - Configure the basic site settings such as site name, description, and default language.

- **Security Settings**: [Security Settings Section](../../admin-management/site-settings.md#security-settings)
  - Adjust site security settings, including registration, password policies, and allowed roles.

- **Performance Settings**: [Performance Settings Section](../../admin-management/site-settings.md#performance-settings)
  - Control caching, logging, and other performance-related settings.

- **Localization Settings**: [Localization Settings Section](../../admin-management/site-settings.md#localization-settings)
  - Manage language preferences and regional settings.

Each of these links provides in-depth details on configuring the corresponding settings.

---

## Host-Specific Site Settings

As a Host user, you have access to additional settings that allow for more advanced site configuration. Below is an overview of these exclusive options.

### URLs

The **URLs** section lets you manage the URLs associated with your site, including domains, subdomains, or virtual folders.

![Site URLs](./assets/site-settings-site-urls.png)

- **Add a URL**:
  - Click the **Add** button.
  - Enter the **URL** in the provided field.
  - Choose **Yes** or **No** for **Default** to set it as the primary URL.
  - Click **Save** to add the URL or **Cancel** to discard changes.

   ![Add URL Window](./assets/site-settings-urls-add-window.png)

- **Edit a URL**:
  - Click the **Edit** button next to an existing URL.
  - Modify the URL or adjust the **Default** setting.
  - Click **Save** to save changes or **Cancel** to discard them.

   ![Edit URL Window](./assets/site-settings-urls-edit-window.png)

- **Delete a URL**:
  - Click the **Delete** button next to a URL.
  - Confirm deletion in the prompt window.

   ![Delete URL Confirmation](./assets/site-settings-urls-delete-confirmation-window.png)

---

### UI Component Settings

The **UI Component Settings** section allows you to control render modes and interactivity options for UI components.

![UI Component Settings](./assets/site-settings-ui-components-settings.png)

- **Render Mode**: The default render mode for the site, defining how components are rendered on the page.
  
   ![Render Mode](./assets/site-settings-ui-components-settings-render-mode.png)

- **Interactivity**: Specifies the render mode for components requiring interactive features.

   ![Interactivity](./assets/site-settings-ui-components-settings-interactivity.png)

- **Prerender**: Indicates if interactive components should prerender their output on the server.

   ![Prerender](./assets/site-settings-ui-components-settings-prerender.png)

- **Hybrid**: Determines if the site can integrate with an external .NET MAUI hybrid application.

   ![Hybrid](./assets/site-settings-ui-components-settings-hybrid.png)

---

### Database

The **Database** section provides essential database information for the site.

![Database Settings](./assets/site-settings-database.png)

- **Database**: The name of the database used within the site. This is the tenant name in the framework rather than the physical database name.

- **Type**: Specifies the type of database (e.g., SQL Server, MySQL).

- **Connection**: The name of the connection string from `appsettings.json` used to connect to the database.

---

## Conclusion

The **Site Settings** for Host users offer advanced options for managing URLs, UI components, and database configurations, in addition to the standard settings accessible to Admin users. Use these settings to customize your site further and optimize performance, security, and interactivity.

For more detailed information on Admin features, refer to the [Admin Management Site Settings documentation](../../admin-management/site-settings.md).

