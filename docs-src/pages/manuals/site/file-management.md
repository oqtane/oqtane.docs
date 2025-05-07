# File Management

![File Management](./assets/file-management.png)

## Overview

Nearly everything you could need to do with files and folders in Oqtane can be done from this view. You have the ability to upload, edit, and delete files and folders. You can also control where files are stored and what permissions should be applied to which folders. Folder permissions specified by roles allow you to determine who can see folders and files and who is allowed to modify the contents of a folder.
The options provided by the file manager are:
* A drop down menu to select the file in which you what your view to placed in.
* Edit Folder: Lets you change the parent of the folder, the name of the folder, and the permissions for what roles are able to see and access the folder and its files.
* Add Folder: Allows you to create a new folder with the ability to choose a name, parent folder, and permissions to access.
* Upload Files: This is the feature that allows for user to upload files like images from their local system to a folder in Oqtane and allows for files to downloaded from Oqtane to their local system.

# Add/Edit Folder Feature Overview

The **Add/Edit Folder** features allows users to organize content within the application efficiently. By creating folders, users can categorize and manage their files according to their needs. This feature provides options for setting various parameters, such as folder type, image sizes, and capacity, ensuring flexibility in how users store and access their content.

## Accessing the Add/Edit Folder Feature

To add a folder, follow these steps:

1. **Locate the Add or Edit Folder Button**: In the main user interface, find the **Add Folder**

![Add Folder Button](./assets/file-management-add-folder-button.png)

or **Edit Folder** button.

![Add Folder Button](./assets/file-management-edit-folder-button.png)

2. **Open the Modal Window**: Click on the **Add Folder** or **Edit Folder** button to open the modal window where you can configure the new folder's settings and permissions.

![Folder Settings](./assets/file-management-folder-settings.png)

## Folder Settings Tab

When the modal window opens, you will see the following fields:

1. **Parent Folder**:
   - **Description**: Select the parent folder under which this new folder will be created. This helps maintain a clear hierarchy within your content organization.

2. **Folder Name**:
   - **Description**: Enter a name for the new folder. This name will be displayed in the folder list.

3. **Folder Type**:
   - **Description**: Choose the visibility of the folder. You can set the folder as either:
     - **Private**: Accessible only to the user who created it.
     - **Public**: Accessible to all users within the application.

4. **Image Sizes**:
   - **Description**: Specify the allowed image sizes for files that will be uploaded to this folder. This helps maintain consistency in file dimensions.

5. **Capacity**:
   - **Description**: Define the maximum storage capacity for the folder. This ensures that users do not exceed their allotted storage.

6. **Buttons**:
   - **Save**: Save the new folder configuration.
   - **Cancel**: Close the modal window without saving changes.

## Permissions Tab

The **Permissions** tab allows users to manage access to the newly created folder based on defined roles within the application. By setting permissions, users can control who can view, edit, or manage the contents of the folder.

### Accessing the Permissions Tab

After opening the **Add Folder** modal window, navigate to the **Permissions** tab. 

![Permissions Tab](./assets/file-management-folder-permissions.png)

### Permissions Configuration Options

The following options are available in the Permissions tab:

1. **Role Permissions**:
   - **Description**: A list of roles for which you want to set permissions.

   ![Role Selection](./assets/file-management-folder-permissions-role.png) 

1. **User Permissions**:
   - **Description**: A list of users for which you want to set permissions.  (This is only displayed if at least one user has been added to be granted permissions.)
   ![User Selection](./assets/file-management-folder-permissions-user.png) 

2. **Browse Folder Permission**:
   - **Description**: Check or uncheck this option to allow or deny the selected role or user the ability to browse the folder and its contents.
   - **Control**: Checkbox labeled **Browse Folder**.

   ![Browse Folder Permission](./assets/file-management-folder-permissions-browse-folder.png)

3. **View Folder Permission**:
   - **Description**: Check or uncheck this option to allow or deny the selected role the ability to view the folder and its contents (e.g., add, delete, or rename files).
   - **Control**: Checkbox labeled **View Folder**.

   ![View Folder Permission](./assets/file-management-folder-permissions-view-folder.png)

4. **Edit Folder Permission**:
   - **Description**: Check or uncheck this option to allow or deny the selected role or user the ability to modify the folder and its contents (e.g., add, delete, or rename files). This is typically reserved for higher-level roles.
   - **Control**: Checkbox labeled **Edit Folder**.

   ![Edit Folder Permissions](./assets/file-management-folder-permissions-edit-folder.png) 

5. **Add Users**:
   - **Description**: Users can add permissions for multiple users by clicking the **Add** button after selecting a user from the search field below the roles permissions.  This will make a section for **Users** appear which allows for easy management of permissions of one or many users.
   - **Control**: Input field and button to add another role with permissions.

   ![Add Role Button](./assets/file-management-folder-permissions-add-user.png) 

6. **Save**:
   - **Description**: After setting the desired settings and permissions for each click the **Save** button to apply the changes.
   - **Control**: Save button at the bottom of the Permissions tab.

   ![Save Permissions](./assets/file-management-folder-permissions-save.png)

---

By effectively managing folder permissions, users can ensure that sensitive content is only accessible to authorized roles, thus enhancing the security and organization of files within Oqtane.

## Uploading a File

The **Upload Files** feature allows users to easily transfer files from their local system to a designated folder within Oqtane. This functionality is essential for managing content effectively and ensures that users can access the necessary files whenever required.

### Accessing the Upload Files Feature

To upload a file, follow these steps:

1. **Locate the Upload Files Button**: In the main file management interface, find the **Upload Files** button.

   ![Upload Files Button](./assets/file-management-upload-files-button.png)

2. **Open the Upload Files Window**: Click on the **Upload Files** button to open the file selection window.

   ![File Selection Window](./assets/file-management-upload-files.png)

### Uploading a File

Once the file selection window is open, you can upload your file by following these steps:

1. **Choose Destination Folder**:
   - **Description**: In the upload window, select the destination folder where the file(s) will be stored. This can be done from a dropdown menu or by navigating through your folder structure.
   - **Control**: Dropdown menu to select the destination folder.

      ![Browse Files](./assets/file-management-upload-files-folder.png)

2. **Select File(s) to Upload**:
   - **Description**: Click the **Choose Files** button to open your file explorer. Navigate to the desired file(s) on your local system and select them.
   - **Control**: Browse button to choose file(s) from your system.

   ![Choose File Button](./assets/file-management-upload-files-choose-file-button.png)

   Select a file with an extension type that is allowed in the **Allowed Extentions** configuration setting located in **Site Settings** to upload.

   ![Select A File](./assets/file-management-upload-files-choose-file.png)

3. **Confirm Upload**:
   - **Description**: After selecting the files and destination, click the **Upload** button to begin the upload process.
   - **Control**: Upload button to start uploading the selected file(s).

   ![Upload Button](./assets/file-management-upload-files-upload-button.png)

   > Note: You should see the file name next to the Choose Files

### Upload Progress

Once you initiate the upload, a progress bar will appear, showing the status of the upload. This allows you to monitor the upload process.

![Upload Progress](./assets/file-management-upload-files-progress-bar.png)

### Successful Upload Notification

After the upload is complete, a notification will confirm that your files have been successfully uploaded to the designated folder.

![Upload Success Notification](./assets/file-management-upload-files-success-notification.png)

When done uploading files click the X on the top right to close the window.

![Close Upload Files Window](./assets/file-management-upload-files-close-window.png)

---

By following these steps, users can efficiently upload files to Oqtane, enhancing their ability to manage and organize content within the application. Ensure that the files you are uploading meet any specified requirements (such as file types and sizes) set by the folder configuration.

If you experience an error please review our troubleshooting guides or start a github issue or discussion to get help.

## Editing Files

The **Edit Files** feature allows users to modify the properties of existing files within Oqtane. This functionality is essential for keeping file details up to date and ensuring that users can manage their content effectively.

### Accessing the Edit Files Feature

To edit a file, follow these steps:

1. **Select a Folder**:
   - **Description**: Choose the folder from which you want to edit a file. This can be done from a dropdown menu or by navigating through your folder structure.
   - **Control**: Dropdown menu to select the folder.

   ![Select Folder](./assets/file-management-select-folder.png)

2. **View Files**:
   - **Description**: After selecting a folder, you will see a list of files within that folder. The file list includes the following columns:
   - **Name**: The name of the file (hyperlinked to view the file).
   - **Modified**: The date the file was last modified.
   - **Type**: The file type (e.g., image, document).
   - **Size**: The file size.

   ![File List](./assets/file-management-file-list.png)

3. **Locate the Edit File Button**:
   - **Description**: Find the **Edit File** button next to the file you wish to edit.
   - **Control**: Edit File button associated with the specific file.

   ![Edit File Button](./assets/file-management-edit-file-button.png)

4. **Open the Edit File Window**: Click on the **Edit File** button to open the editing window.

   ![Edit File Window](./assets/file-management-edit-file-window.png)

### Edit File Window Components

When the edit file window opens, you will see the following fields:

1. **File Name**:
   - **Description**: The current name of the file. You can edit this name as needed.

2. **Select Folder**:
   - **Description**: Choose a different folder for the file if required. This helps in organizing files into appropriate categories.

3. **Description**:
   - **Description**: Enter a description for the file to provide additional context or information about its content.

4. **File Size**:
   - **Description**: Displays the current size of the file, which is read-only and helps users understand the file's storage requirements.

5. **Buttons**:
   - **Save**: Click to save the changes made to the file properties.
   - **Cancel**: Close the editing window without saving changes.

   ![Edit File Save Cancel Buttons](./assets/file-management-edit-file-save-cancel-buttons.png)

### Deleting a File

If you need to remove a file, you can do so by following these steps:

1. **Locate the Delete File Button**: Next to the file you want to delete, find the **Delete File** button.
   - **Control**: Delete File button associated with the specific file.

   ![Delete File Button](./assets/file-management-file-delete-button.png)

2. **Confirm Deletion**: Click on the **Delete File** button, and confirm the action when prompted. This action will permanently remove the file from the system.

   ![Delete File Confirmation](./assets/file-management-file-delete-confirmation-window.png)

---

By utilizing the **Edit Files** feature, users can ensure that their file details remain accurate and relevant, enhancing the organization and management of content within Oqtane.

---

### File Management Settings
- **Image Extensions**: Specify a comma-separated list of allowed image file extensions (e.g., jpg, png, gif).
- **Uploadable File Extensions**: List the allowed file extensions for all other uploads (e.g., pdf, docx, xlsx).
- **Max Upload Chunk Size (MB)**: Files are split into chunks to streamline the upload process. Specify the maximum chunk size in MB (note that higher chunk sizes should only be used on faster networks).

   ![File Management Settings Window](./assets/file-management-settings.png)
