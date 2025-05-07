# File Management

![File Management Icon](./assets/admin-dashboard-file-management.png)

## Overview

The **File Management** feature in Oqtane enables users to upload, organize, edit, and delete files and folders directly from the user interface. With fine-grained folder permissions and intuitive tools, site administrators can control access and maintain structured file systems.

Key features include:

- **Folder Hierarchy Management** – Create and nest folders to organize content.
- **Role-Based Permissions** – Assign browse, view, and edit rights to roles or specific users.
- **File Uploading** – Upload images, documents, and other supported formats to selected folders.
- **File Editing** – Rename files, update descriptions, or move files to different folders.
- **File Deletion** – Remove unwanted files with confirmation.
- **Custom Folder Settings** – Set folder type, allowed image sizes, and capacity limits.
- **Dropdown View Selector** – Choose which folder view to display from a dropdown menu.

---

## Control Panel Walkthrough

### Accessing the File Management Feature

1. Click the **Control Panel** icon to access additional settings.

   ![Control Panel Icon](./assets/control-panel-button.png)

2. In the control panel, click the **Admin Dashboard** button.

   ![Admin Dashboard](./assets/control-panel-admin-dashboard-button.png)

3. In the admin dashboard, select the **File Management** icon.

   ![File Management Icon](./assets/admin-dashboard-file-management.png)

---

## Add/Edit Folder Feature

The **Add/Edit Folder** modal allows administrators to structure content and configure storage rules.

### Accessing the Add/Edit Folder Feature

1. Click the **Add Folder** button to create a new folder.

   ![Add Folder Button](./assets/file-management-add-folder-button.png)

2. To modify an existing folder, click the **Edit Folder** button next to it.

   ![Edit Folder Button](./assets/file-management-edit-folder-button.png)

3. Either option opens the folder configuration modal.

   ![Folder Settings](./assets/file-management-folder-settings.png)

### Folder Settings Tab

- **Parent Folder**: Choose the location within the folder hierarchy.
- **Folder Name**: Name to be displayed in the file manager.
- **Folder Type**: Set visibility (Private or Public).
- **Image Sizes**: Define accepted dimensions for uploaded images.
- **Capacity**: Limit storage for this folder (in MB).

Controls: **Save** or **Cancel**.

### Permissions Tab

Configure access per role or user.

![Permissions Tab](./assets/file-management-folder-permissions.png)

- **Role Permissions**: Assign Browse, View, Edit rights.
  ![Role Selection](./assets/file-management-folder-permissions-role.png)
- **User Permissions**: Add individual user access if needed.
  ![User Selection](./assets/file-management-folder-permissions-user.png)
- **Browse Folder**: Toggle folder listing access.
  ![Browse Folder Permission](./assets/file-management-folder-permissions-browse-folder.png)
- **View Folder**: Toggle file viewing access.
  ![View Folder Permission](./assets/file-management-folder-permissions-view-folder.png)
- **Edit Folder**: Toggle file management rights.
  ![Edit Folder Permission](./assets/file-management-folder-permissions-edit-folder.png)
- **Add User**: Search and add users to permission list.
  ![Add Role Button](./assets/file-management-folder-permissions-add-user.png)
- **Save**: Apply permission changes.
  ![Save Button](./assets/file-management-folder-permissions-save.png)

---

## Uploading Files

The **Upload Files** tool lets users import content from their local devices into the platform.

### Steps:

1. Click **Upload Files** in the toolbar.

   ![Upload Files Button](./assets/file-management-upload-files-button.png)

2. Choose a destination folder.

   ![Select Folder](./assets/file-management-upload-files-folder.png)

3. Select files using **Choose Files**.

   ![Choose File Button](./assets/file-management-upload-files-choose-file-button.png)

   ![Select File](./assets/file-management-upload-files-choose-file.png)

4. Make sure the file extension is allowed under **Site Settings > Allowed Extensions**.

5. Click **Upload** to begin transfer.

   ![Upload Button](./assets/file-management-upload-files-upload-button.png)

A progress bar will show upload status.

   ![Progress](./assets/file-management-upload-files-progress-bar.png)

Once complete, a notification confirms success.

   ![Success](./assets/file-management-upload-files-success-notification.png)

To close the window, click the **X** icon.

   ![Close Upload](./assets/file-management-upload-files-close-window.png)

---

## Editing and Deleting Files

### Editing a File

1. Select a folder from the dropdown.
2. In the file list, click **Edit File** next to the item.

   ![Edit File Button](./assets/file-management-edit-file-button.png)

3. Modify the file name, folder, or description.
4. Click **Save** to apply changes or **Cancel** to discard.

   ![Edit File Window](./assets/file-management-edit-file-window.png)

### Deleting a File

1. Click the **Delete File** button.

   ![Delete File Button](./assets/file-management-file-delete-button.png)

2. Confirm deletion in the popup.

   ![Delete File Confirmation](./assets/file-management-file-delete-confirmation-window.png)

---

## File Management Settings

Found in **Site Settings**:

- **Image Extensions**: Allowed image types (e.g., `jpg,png,gif`).
- **Uploadable File Extensions**: Permitted general file types (e.g., `pdf,docx,xlsx`).
- **Max Upload Chunk Size**: Limits upload chunk size for performance tuning.

   ![File Management Settings Window](./assets/file-management-settings.png)

---

If you experience an error, please review our troubleshooting guides or start a GitHub issue or discussion to get help.

By following this guide, administrators can fully leverage the File Management capabilities of Oqtane to maintain an organized, secure, and efficient content system.
