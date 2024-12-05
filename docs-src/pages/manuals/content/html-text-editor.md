# HTML/Text Editor

The HTML/Text Editor module in Oqtane enables you to create, edit, and restore content using a rich text editor (WYSIWYG) and a raw HTML editor. This module is ideal for exploring Oqtane's editing and content management features, including moving modules between panes, configuring settings, and managing roles.

![HTML/Text Editor](./assets/html-text-editor.png)

**To access the HTML/Text Editor:**  
1. Enter Content Editor mode by clicking the pencil icon.

   ![HTML/Text Editor Edit Content Mode](./assets/content-editor-html-editor-edit-content-button.png)

2. Click the **Edit Content** button on the module to open the HTML/Text Editor.

   ![HTML/Text Editor Edit Content Button](./assets/html-text-editor-edit-content-button.png)

The editor has two main tabs:

1. **Edit** – Contains content editing tools.
2. **Versions** – Manages past content versions with options to view, restore, and delete.

### Edit Tab

The Edit tab provides three sub-tabs for different editing options:

* **Rich Text Editor** – A WYSIWYG editor powered by QuillJS (v1.3.7), providing an easy way to format content visually.

   ![HTML/Text Editor Rich Text Editor](./assets/html-text-editor-rich-text-editor.png)

* **Raw HTML Editor** – Enables direct HTML editing for more control over the source code.

   ![HTML/Text Editor Raw HTML Editor](./assets/html-text-editor-raw-html-editor.png)

* **Settings** – Provides configuration options for the editor's features.

#### Rich Text Editor Settings

In the **Settings** sub-tab, you can customize the editor with the following options:

- **Enable Rich Text Editor?** - Yes
- **Enable Raw HTML Editor?** - Yes
- **Insert Images?** - Yes
- **Theme**: Options like "snow" theme
- **Debug Level**: Example setting "info"
- **Toolbar Content**: Define the editor's toolbar

   ![HTML/Text Editor Settings Tab](./assets/html-text-editor-settings.png)

Each editor (Rich Text and HTML) includes an **"Insert Image"** button that opens a dialog with the following options:

   ![HTML/Text Editor Insert Image Button](./assets/html-text-editor-insert-image-button.png)

- **Select Folder** – Choose the folder where images are stored.
- **Select File** – Pick an image file from the selected folder.

   ![HTML/Text Editor Select Folder/File](./assets/html-text-editor-insert-image-select-file.png)

Once an image file is selected, click the **Insert Image** button.

   ![HTML/Text Editor Image Selected](./assets/html-text-editor-image-selected.png)

- **Upload File** – Upload new images to the selected folder by using **Choose File** and **Upload** buttons.

   ![HTML/Text Editor Upload File Button](./assets/html-text-editor-image-upload-button.png)

If you encounter issues with uploading files, see the [Troubleshooting File Manager](../../guides/troubleshooting/troubleshooting-file-manager.md) guide.

After uploading the image to the selected folder, click the **Insert Image** button.

#### Saving Edits

After making changes in the editor, click the **Save** button to confirm and save the settings and content updates.

   ![HTML/Text Editor Save Button](./assets/html-text-editor-save-button.png)

---

### Versions Tab

The Versions tab displays a list of previous content versions, along with:

* **CreatedOn** – The date each version was created.
* **CreatedBy** – The user who created the version.

   ![HTML/Text Editor Versions Tab](./assets/html-text-editor-versions.png)

Each version offers the following actions:

- **View** – Shows the selected version's content.

   ![HTML/Text Editor Versions View Button](./assets/html-text-editor-versions-view-button.png)

   Below is an example of what the **View** button will display at the bottom of the modal window.

   ![HTML/Text Editor Versions View Content](./assets/html-text-editor-versions-view.png)

- **Restore** – Restores the module content to this version.

   ![HTML/Text Editor Versions Restore Button](./assets/html-text-editor-versions-restore-button.png)

   After clicking **Restore**, you will be prompted to confirm. To proceed, click the **Restore** button in the confirmation window.

   ![HTML/Text Editor Confirm Restore Button](./assets/html-text-editor-versions-confirm-restore-button.png)

- **Delete** – Removes the selected version from the list.  

   ![HTML/Text Editor Versions Delete Button](./assets/html-text-editor-versions-delete-button.png)

   After clicking **Delete**, you will be prompted to confirm. To proceed, click the **Delete** button in the confirmation window.

  ![HTML/Text Editor Versions Confirm Delete Button](./assets/html-text-editor-versions-confirm-delete-button.png)
