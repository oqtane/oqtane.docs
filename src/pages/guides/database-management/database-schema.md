# Oqtane Schema Documentation
#### Version 6.0.0

## Table of Contents

- [Enums](#enums)
  - [LogFunction Enum](#logfunction-enum)
  - [LogLevel Enum](#loglevel-enum)
  - [MigrationType Enum](#migrationtype-enum)
  - [ResourceDeclaration Enum (Deprecated)](#resourcedeclaration-enum-deprecated)
  - [ResourceLevel Enum](#resourcelevel-enum)
  - [ResourceLocation Enum](#resourcelocation-enum)
  - [ResourceType Enum](#resourcetype-enum)
  - [Runtime Enum](#runtime-enum)
  - [SearchSortField Enum](#searchsortfield-enum)
  - [SearchSortOrder Enum](#searchsortorder-enum)
  - [SecurityAccessLevel Enum](#securityaccesslevel-enum)
- [Models](#models)
  - [Alias Model](#alias-model)
  - [Culture Model](#culture-model)
  - [Database Model](#database-model)
  - [ExternalLoginProvider Model](#externalloginprovider-model)
  - [Installation Model](#installation-model)
  - [JobLog Model](#joblog-model)
  - [Log Model](#log-model)
  - [MigrationHistoryTable Model](#migrationhistorytable-model)
  - [ModuleContent Model](#modulecontent-model)
  - [Package Model](#package-model)
  - [RequestCulture Model](#requestculture-model)
  - [Resource Model](#resource-model)
  - [Result Model](#result-model)
  - [Route Model](#route-model)
  - [SearchContent Model](#searchcontent-model)
  - [SearchContentProperty Model](#searchcontentproperty-model)
  - [SearchContentWord Model](#searchcontentword-model)
  - [SearchQuery Model](#searchquery-model)
  - [SearchResults Model](#searchresults-model)
  - [SearchWord Model](#searchword-model)
  - [Sitemap Model](#sitemap-model)
  - [SiteTemplate Model](#sitetemplate-model)
  - [PageTemplate Model](#pagetemplate-model)
  - [PageTemplateModule Model](#pagetemplatemodule-model)
  - [SqlQuery Model](#sqlquery-model)
  - [Sync Model](#sync-model)
  - [Template Model](#template-model)
  - [ThemeControl Model](#themecontrol-model)
  - [UrlMapping Model](#urlmapping-model)
  - [UserValidateResult Model](#uservalidateresult-model)
  - [Visitor Model](#visitor-model)
 
### See Also

- [**Enums API Documentation**](https://docs.oqtane.org/api/Oqtane.Enums.html)
- [**Models API Documentation**](https://docs.oqtane.org/api/Oqtane.Models.html)

## Enums

### **LogFunction Enum**

The `LogFunction` enum categorizes log entries based on the type of operation being performed.

- **Create**: Logs when a new entity is created.
- **Read**: Logs when an entity is read.
- **Update**: Logs when an entity is updated.
- **Delete**: Logs when an entity is deleted.
- **Security**: Logs security-related activities.
- **Other**: Logs other activities not covered by the above.

**Example:**
```csharp
LogFunction logFunction = LogFunction.Create;
```

**[Back to TOC](#table-of-contents)**

---

### LogLevel Enum

The `LogLevel` enum sets the verbosity level for log entries. Higher levels indicate more severe messages.

- **Trace**: Detailed information for troubleshooting.
- **Debug**: Debugging information for development purposes.
- **Information**: Standard informational logs.
- **Warning**: Warnings about potential issues.
- **Error**: Logs errors that indicate a problem.
- **Critical**: Critical errors requiring immediate attention.
- **None**: No logging.
**Description:** This enum is used to set the level of verbosity for log entries. The higher the level, the more severe the message.

**Example:**
```csharp
LogLevel logLevel = LogLevel.Error;
```

**[Back to TOC](#table-of-contents)**

---

### MigrationType Enum

The `MigrationType` enum specifies whether to apply or roll back database changes during migration.

- **Up**: Migrating database schema upwards (applying changes).
- **Down**: Rolling back database schema changes.

**Example:**
```csharp
MigrationType migrationType = MigrationType.Up;
```

**[Back to TOC](#table-of-contents)**

---

### ResourceDeclaration Enum (Deprecated)

**Description:** This enum was used to define whether a resource (like a script or stylesheet) is declared at a local or global level. It is now deprecated and should not be used.

- **Local**: Resource is declared at the local level (specific to the current scope).
- **Global**: Resource is available globally across the application.


**Note:** Use `ResourceLevel` enum instead for specifying resource scope.

**[Back to TOC](#table-of-contents)**

---

### ResourceLevel Enum

The `ResourceLevel` enum specifies the scope of a resource's availability, determining the context in which a resource is accessible.

- **Undefined**: Resource level is not specified.
- **Site**: Resource is associated with a specific site.
- **Page**: Resource is associated with a specific page.
- **Module**: Resource is associated with a specific module.


**Example:**
```csharp
ResourceLevel resourceLevel = ResourceLevel.Page;
```

**[Back to TOC](#table-of-contents)**

---

### ResourceLocation Enum

The `ResourceLocation` enum specifies whether a resource (such as a script or CSS file) should be loaded in the `<head>` or `<body>` of an HTML document.

- **Head**: Resource is placed in the `<head>` section.
- **Body**: Resource is placed just before the closing `</body>` tag.

**Example:**
```csharp
ResourceLocation resourceLocation = ResourceLocation.Head;
```

**[Back to TOC](#table-of-contents)**

---

### ResourceType Enum

The `ResourceType` enum defines the type of resource, which can either be a CSS file or a JavaScript file.

- **Stylesheet**: Resource is a CSS stylesheet.
- **Script**: Resource is a JavaScript script.

**Example:**
```csharp
ResourceType resourceType = ResourceType.Stylesheet;
```

**[Back to TOC](#table-of-contents)**

---

### Runtime Enum

The `Runtime` enum specifies the runtime environment of the application, helping determine the appropriate execution context.

- **Server**: Application is running on the server.
- **WebAssembly**: Application is running in the WebAssembly environment (browser).
- **Auto**: Automatically detects the runtime environment.
- **Hybrid**: Supports both server and WebAssembly environments.

**Example:**
```csharp
Runtime runtime = Runtime.Server;
```

**[Back to TOC](#table-of-contents)**

---

### SearchSortField Enum

The `SearchSortField` enum specifies the sorting order for search results, allowing control based on relevance, title, or last modified timestamp.

- **Relevance**: Sort results by relevance to the search query.
- **Title**: Sort results by the resource title.
- **LastModified**: Sort results by the last modified date.

**Example:**
```csharp
SearchSortField sortField = SearchSortField.Relevance;
```

**[Back to TOC](#table-of-contents)**

---

### SearchSortOrder Enum

The `SearchSortOrder` enum defines whether the search results should be sorted in ascending or descending order.

- **Ascending**: Sort in ascending order.
- **Descending**: Sort in descending order.

**Example:**
```csharp
SearchSortOrder sortOrder = SearchSortOrder.Ascending;
```

**[Back to TOC](#table-of-contents)**

---

### SecurityAccessLevel Enum

The `SecurityAccessLevel` enum controls the level of access a user has in the system, ranging from no access (Anonymous) to full administrative or host access.

- **Anonymous**: No authentication required; accessible by everyone.
- **View**: Users can view content.
- **Edit**: Users can edit content.
- **Admin**: Users have administrative privileges.
- **Host**: Users have host-level access (highest privilege).

**Example:**
```csharp
SecurityAccessLevel accessLevel = SecurityAccessLevel.Admin;
```

**[Back to TOC](#table-of-contents)**

---

**Notes:**
- These enums are critical for managing various functionalities in the Oqtane framework, such as logging, resource management, security, and search sorting.
- The `ResourceDeclaration` enum is marked as obsolete and should no longer be used in new development.

---

## Models

---

### **Alias Model**

The `Alias` model represents an alias for a site within the Oqtane framework.

#### Properties:

- **AliasId**: Primary key used for internal site identification.
- **Name**: The alias name, representing the URL (e.g., `oqtane.me` or `oqtane.me/products`).
- **TenantId**: Foreign key referencing the Tenant to which the alias belongs.
- **SiteId**: Foreign key referencing the Site to which the alias belongs.
- **IsDefault**: Indicates whether this alias is the default for the Tenant/Site.
- **Path**: Extracted from the URL to provide the part after the first slash, used for routing.
- **SiteKey**: Combines `TenantId` and `SiteId` to create a unique identifier for the site.
- **Protocol**: Defines the protocol (e.g., `http://` or `https://`) for accessing the alias.
- **BaseUrl**: Base URL for static resources, typically for remote clients.

#### Example Usage:
```csharp
var alias = new Alias
{
    AliasId = 1,
    Name = "oqtane.me",
    TenantId = 1,
    SiteId = 1,
    IsDefault = true
};

// Access the Path property
string path = alias.Path; // returns ""
```

#### Change Log:
- **Initial Creation**: Added primary properties for `AliasId`, `Name`, `TenantId`, `SiteId`, and `IsDefault`.
- **Enhancement**: Added `Path` property to extract the URL part after the first slash.
- **Update**: Introduced `SiteKey` and `Protocol` properties for better identification and request handling.
- **Refinement**: Added `BaseUrl` property for accessing static resources.

**[Back to TOC](#table-of-contents)**

---

### **Culture Model**

The `Culture` model represents a culture used within the Oqtane framework.

#### Properties:

- **Name**: The culture's short code (e.g., `en` or `en-US`).
- **DisplayName**: The friendly display name of the culture (e.g., `English (United States)`).
- **IsDefault**: Indicates if this culture is the default for the system (currently unverified).

#### Example Usage:
```csharp
var culture = new Culture
{
    Name = "en-US",
    DisplayName = "English (United States)",
    IsDefault = true
};
```

#### Change Log:
- **Initial Creation**: Defined primary properties for `Name`, `DisplayName`, and `IsDefault`.

**[Back to TOC](#table-of-contents)**

---

### **Database Model**

The `Database` model represents a database configuration within the Oqtane framework.

#### Properties:

- **Name**: The name of the database.
- **ControlType**: The UI control used to configure the database (e.g., `SqlServerConfig`).
- **DBType**: The full namespace of the database type (e.g., `SqlServerDatabase`).
- **IsDefault**: A flag indicating whether this database is the default database provider.

#### Example Usage:
```csharp
var database = new Database
{
    Name = "OqtaneDB",
    ControlType = "Oqtane.Installer.Controls.SqlServerConfig, Oqtane.Client",
    DBType = "Oqtane.Database.SqlServer.SqlServerDatabase, Oqtane.Database.SqlServer",
    IsDefault = true
};
```

#### Change Log:
- **Initial Creation**: Added properties for `Name`, `ControlType`, `DBType`, and `IsDefault`.

**[Back to TOC](#table-of-contents)**

---

### **ExternalLoginProvider Model**

The `ExternalLoginProvider` model represents an external login provider within the Oqtane framework.

#### Properties:

- **Name**: The name of the external login provider (e.g., `Google`, `Facebook`).
- **Settings**: A dictionary of key-value pairs for the provider's configuration settings.

#### Example Usage:
```csharp
var externalLoginProvider = new ExternalLoginProvider
{
    Name = "Google",
    Settings = new Dictionary<string, string>
    {
        {"ClientId", "your-client-id"},
        {"ClientSecret", "your-client-secret"}
    }
};
```

#### Change Log:
- **Initial Creation**: Defined properties for `Name` and `Settings`.

**[Back to TOC](#table-of-contents)**

---

### **File Model**

The `File` model represents a file within the Oqtane framework.

#### Properties:

- **FileId**: Primary identifier for the file.
- **FolderId**: Foreign key referencing the folder the file belongs to.
- **Name**: The name of the file.
- **Extension**: File extension (e.g., 'jpg'), lowercase and without the dot.
- **Size**: File size in bytes.
- **ImageHeight**: Height of the image in pixels.
- **ImageWidth**: Width of the image in pixels.
- **Description**: Description of the file.
- **IsDeleted**: Flag indicating if the file is marked as deleted (deprecated, not used).
- **Folder**: Reference to the `Folder` object, used to determine the site the file belongs to.
- **Url**: URL for accessing the file.

#### Example Usage:
```csharp
var file = new File
{
    FileId = 1,
    FolderId = 10,
    Name = "example.jpg",
    Extension = "jpg",
    Size = 2048,
    ImageHeight = 1080,
    ImageWidth = 1920,
    Description = "An example image file",
    IsDeleted = false,
    Url = "/files/example.jpg"
};
```

#### Change Log:
- Initial creation of File model.
- Added properties for image dimensions.
- Deprecated `IsDeleted` property.

**[Back to TOC](#table-of-contents)**

---

### **Folder Model**

The `Folder` model represents a folder within the Oqtane framework.

#### Properties:

- **FolderId**: Primary identifier for the folder.
- **SiteId**: Foreign key referencing the site the folder belongs to.
- **ParentId**: Foreign key referencing the parent folder, if any.
- **Type**: Type of the folder based on predefined folder types.
- **Name**: The name of the folder.
- **Path**: Path to the folder.
- **Order**: Sorting order of the folder.
- **ImageSizes**: List of image sizes that can be generated from uploaded images.
- **Capacity**: Maximum capacity of the folder in bytes.
- **IsSystem**: Indicates if the folder is a system folder.
- **IsDeleted**: Deprecated flag indicating if the folder is marked as deleted.
- **PermissionList**: List of permissions for the folder.
- **Level**: Depth level of the folder in the hierarchy.
- **HasChildren**: Indicates if the folder has sub-items.
- **Permissions**: Deprecated property for folder permissions (use `PermissionList` instead).

**Example Usage:**
```csharp
var folder = new Folder
{
    FolderId = 1,
    SiteId = 1,
    ParentId = null,
    Type = "Documents",
    Name = "Project Files",
    Path = "/project-files",
    Order = 1,
    ImageSizes = "200x200,x200,200x",
    Capacity = 10485760,
    IsSystem = false,
    IsDeleted = false,
    PermissionList = new List<Permission>(),
    Level = 0,
    HasChildren = true
};

// Accessing properties
string folderName = folder.Name; // returns "Project Files"
int folderCapacity = folder.Capacity; // returns 10485760 (10 MB)
```

**Change Log:**
- **Initial Creation**: Added primary properties for `FolderId`, `SiteId`, `ParentId`, `Type`, `Name`, `Path`, `Order`, `ImageSizes`, `Capacity`, `IsSystem`, and `IsDeleted`.
- **Enhancement**: Added `PermissionList`, `Level`, and `HasChildren` properties.
- **Update**: Deprecated the `Permissions` property and provided a replacement with `PermissionList`.

**[Back to TOC](#table-of-contents)**

---

### **Installation Model**

The `Installation` model represents the result of an installation attempt within the Oqtane framework.

- **Success**: Boolean flag indicating whether the installation was successful.
- **Message**: Message or error description in case something failed.
- **Alias**: Current alias value retrieved from the server during installation.

**Example Usage:**
```csharp
var installation = new Installation
{
    Success = true,
    Message = "Installation completed successfully.",
    Alias = new Alias { AliasId = 1, Name = "oqtane.me", TenantId = 1, SiteId = 1 }
};

// Accessing properties
bool isSuccess = installation.Success; // returns true
string installMessage = installation.Message; // returns "Installation completed successfully."
Alias installAlias = installation.Alias; // returns Alias object
```

**Change Log:**
- **Initial Creation**: Added primary properties for `Success`, `Message`, and `Alias`.

**[Back to TOC](#table-of-contents)**

---

### **Job Model**

The `Job` model represents a scheduled task within the Oqtane framework.

- **JobId**: Internal ID of the job.
- **Name**: Name for simple identification.
- **JobType**: Type of job.
- **Frequency**: Unit used to define how often the job should run (e.g., 'm' for minutes, 'H' for hours).
- **Interval**: How often the job should run, in conjunction with `Frequency`.
- **StartDate**: When the job is to be run for the first time.
- **EndDate**: When the job is to be run for the last time.
- **IsEnabled**: Indicates if the job is activated/enabled.
- **IsStarted**: Indicates if the job has ever started running.
- **IsExecuting**: Indicates if the job is currently executing.
- **NextExecution**: When the job will run next.
- **RetentionHistory**: (Todo: Document the purpose of this property).

**Example Usage:**
```csharp
var job = new Job
{
    JobId = 1,
    Name = "Daily Backup",
    JobType = "Backup",
    Frequency = "H",
    Interval = 24,
    StartDate = DateTime.Now,
    EndDate = DateTime.Now.AddYears(1),
    IsEnabled = true,
    IsStarted = false,
    IsExecuting = false,
    NextExecution = DateTime.Now.AddHours(24),
    RetentionHistory = 30
};

// Accessing properties
bool isEnabled = job.IsEnabled; // returns true
DateTime? nextExecution = job.NextExecution; // returns the next execution time
```

**Change Log:**
- **Initial Creation**: Added primary properties for `JobId`, `Name`, `JobType`, `Frequency`, `Interval`, `StartDate`, `EndDate`, `IsEnabled`, `IsStarted`, `IsExecuting`, and `NextExecution`.
- **Enhancement**: Added `RetentionHistory` property.

**[Back to TOC](#table-of-contents)**

---

### **JobLog Model**

The `JobLog` model represents a record of a job execution within the Oqtane framework.

- **JobLogId**: Internal ID of the job log.
- **JobId**: Reference to the job that was run.
- **StartDate**: Timestamp when the job started.
- **FinishDate**: Timestamp when the job ended.
- **Succeeded**: Indicates whether the job succeeded.
- **Notes**: Additional protocol information left after the job ran.
- **Job**: Reference to the job, though it's not clear if this is always populated.

**Example Usage:**
```csharp
var jobLog = new JobLog
{
    JobLogId = 1,
    JobId = 100,
    StartDate = DateTime.Now,
    FinishDate = DateTime.Now.AddMinutes(30),
    Succeeded = true,
    Notes = "Backup completed successfully.",
    Job = new Job { JobId = 100, Name = "Daily Backup" }
};

// Accessing properties
bool? succeeded = jobLog.Succeeded; // returns true
string logNotes = jobLog.Notes; // returns "Backup completed successfully."
```

**Change Log:**
- **Initial Creation**: Added primary properties for `JobLogId`, `JobId`, `StartDate`, `FinishDate`, `Succeeded`, `Notes`, and `Job`.

**[Back to TOC](#table-of-contents)**

---

For the `database-schema.md` file, you can simplify the documentation to make it concise and focused on essential details. Here's an example of how you might document the **Language** model without the full class definition:

---

### **Language Model**

The `Language` model provides information about languages used on different sites within the Oqtane framework.

#### Properties:

- **LanguageId**: Internal ID for the language.
- **SiteId**: Nullable reference to a `Site`. Not all languages need to be linked to a specific site, hence the property is nullable.
- **Code**: Language/Culture code (e.g., 'en-US') corresponding to `Culture.Name`.
- **IsDefault**: Indicates if this is the default language for a site.
- **Name**: (Not Mapped) Language name corresponding to `Culture.DisplayName`, not `Culture.Name`.
- **Version**: (Not Mapped) Version of the satellite assembly.

#### Example Usage:

```csharp
var language = new Language
{
    LanguageId = 1,
    SiteId = 100,
    Code = "en-US",
    IsDefault = true,
    Name = "English (United States)",
    Version = "1.0.0"
};

// Cloning the language object
var clonedLanguage = language.Clone();
```

#### Change Log:

- **Initial Creation**: Added primary properties for `LanguageId`, `SiteId`, `Code`, `IsDefault`, `Name`, and `Version`.
- **Enhancement**: Added `Clone` method for creating copies of the `Language` object.

**[Back to TOC](#table-of-contents)**

---

### **Log Model**

The `Log` model represents an entry in the events log within the Oqtane framework.

#### Properties:

- **LogId**: Internal ID of the log entry.
- **SiteId**: Nullable reference to the `Site` related to this log entry.
- **LogDate**: Timestamp when the log entry was created.
- **PageId**: Nullable reference to the `Page` related to this log entry.
- **ModuleId**: Nullable reference to the `Module` related to this log entry.
- **UserId**: Nullable reference to the `User` related to this log entry.
- **Url**: URL relevant to this log entry, if applicable.
- **Server**: Name of the server that created this entry.
- **Category**: Usually the full type name related to the log entry.
- **Feature**: Feature associated with this log entry.
- **Function**: Function or method associated with this log entry.
- **Level**: Log level or severity of the log entry.
- **Message**: Log message.
- **MessageTemplate**: Template used for the log message.
- **Exception**: Information about any exceptions raised.
- **Properties**: Additional properties or metadata related to the log entry.

#### Example Usage:

```csharp
var log = new Log
{
    LogId = 1,
    SiteId = 10,
    LogDate = DateTime.Now,
    PageId = 20,
    ModuleId = 30,
    UserId = 40,
    Url = "https://example.com",
    Server = "Server1",
    Category = "Oqtane.Pages.PageController",
    Feature = "PageLoad",
    Function = "GetPage",
    Level = "Error",
    Message = "An error occurred while loading the page.",
    MessageTemplate = "Error loading page {PageId}",
    Exception = "NullReferenceException",
    Properties = "Additional context or metadata"
};
```

#### Change Log:

- **Initial Creation**: Added primary properties for `LogId`, `SiteId`, `LogDate`, `PageId`, `ModuleId`, `UserId`, `Url`, `Server`, `Category`, `Feature`, `Function`, `Level`, `Message`, `MessageTemplate`, `Exception`, and `Properties`.

**[Back to TOC](#table-of-contents)**

---

### **MigrationHistoryTable Model**

The `MigrationHistoryTable` model provides information about the migration history table used for tracking database migrations within the Oqtane framework.

#### Properties:

- **TableName**: Name of the migration history table.
- **TableSchema**: Schema of the migration history table.
- **MigrationIdColumnName**: Column name for the migration ID.
- **ProductVersionColumnName**: Column name for the product version.
- **AppliedVersionColumnName**: Column name for the applied version.
- **AppliedDateColumnName**: Column name for the date when the migration was applied.

#### Example Usage:

```csharp
var migrationHistoryTable = new MigrationHistoryTable
{
    TableName = "MigrationHistory",
    TableSchema = "dbo",
    MigrationIdColumnName = "MigrationId",
    ProductVersionColumnName = "ProductVersion",
    AppliedVersionColumnName = "AppliedVersion",
    AppliedDateColumnName = "AppliedDate"
};
```

#### Change Log:

- **Initial Creation**: Added properties for `TableName`, `TableSchema`, `MigrationIdColumnName`, `ProductVersionColumnName`, `AppliedVersionColumnName`, and `AppliedDateColumnName`.

**[Back to TOC](#table-of-contents)**

---

### **ModelBase Class**

The `ModelBase` class is a base class for other models, providing common auditing properties.

#### Properties:

- **CreatedBy**: The username or identifier of the user who created the record.
- **CreatedOn**: The timestamp when the record was created.
- **ModifiedBy**: The username or identifier of the user who last modified the record.
- **ModifiedOn**: The timestamp when the record was last modified.

#### Example Usage:

```csharp
public class ExampleModel : ModelBase
{
    public int ExampleModelId { get; set; }
    public string Name { get; set; }
}

var example = new ExampleModel
{
    ExampleModelId = 1,
    Name = "Sample",
    CreatedBy = "admin",
    CreatedOn = DateTime.UtcNow,
    ModifiedBy = "admin",
    ModifiedOn = DateTime.UtcNow
};
```

#### Change Log:

- **Initial Creation**: Added properties for `CreatedBy`, `CreatedOn`, `ModifiedBy`, and `ModifiedOn`.

**[Back to TOC](#table-of-contents)**

---

### **Module Model**

The `Module` model describes a module instance that will be shown on a page. This is different from a `ModuleDefinition` which describes the module itself.

#### Properties:

- **ModuleId**: The ID of this instance.
- **SiteId**: Reference to the `Site`.
- **ModuleDefinitionName**: Reference to the `ModuleDefinition`.
- **AllPages**: Determines if this module should be shown on all pages of the current `Site`.
- **ModuleDefinition**: (Not Mapped) Reference to the `ModuleDefinition` used for this module.
- **DeletedBy**: (Not Mapped) The user who deleted this module (if applicable).
- **DeletedOn**: (Not Mapped) The timestamp when the module was deleted (if applicable).
- **IsDeleted**: (Not Mapped) Indicates if the module is deleted.
- **PermissionList**: (Not Mapped) List of permissions for this module.
- **Settings**: (Not Mapped) List of settings for this module.
- **PageModuleId**: (Not Mapped) The ID of the `PageModule` instance.
- **PageId**: (Not Mapped) Reference to the `Page` this module is on.
- **Title**: (Not Mapped) Title of the `PageModule` instance.
- **Pane**: (Not Mapped) The pane where this `PageModule` instance will be injected on the page.
- **Order**: (Not Mapped) The order of the `PageModule` instance within the pane.
- **ContainerType**: (Not Mapped) The container for the `PageModule` instance.
- **EffectiveDate**: (Not Mapped) Start of when this module is visible.
- **ExpiryDate**: (Not Mapped) End of when this module is visible.
- **ModuleType**: (Not Mapped) Stores the type name for the module component being rendered.
- **PaneModuleIndex**: (Not Mapped) The position of the module instance in a pane.
- **PaneModuleCount**: (Not Mapped) The number of modules in a pane.
- **RenderId**: (Not Mapped) A unique ID to help determine if a component should be rendered.
- **SecurityAccessLevel**: (Not Mapped) The minimum access level to view the component being rendered.
- **ControlTitle**: (Not Mapped) An optional title for the component.
- **Actions**: (Not Mapped) Optional mapping of URL actions to a component.
- **UseAdminContainer**: (Not Mapped) Indicates if a component should not be rendered with the default modal admin container.
- **RenderMode**: (Not Mapped) Optionally specify the render mode for the component (overrides the site setting).
- **Prerender**: (Not Mapped) Optionally specify if the component should be prerendered (overrides the site setting).
- **Permissions**: (Deprecated, Not Mapped) Use `PermissionList` instead.

#### Example Usage:

```csharp
var module = new Module
{
    ModuleId = 1,
    SiteId = 2,
    ModuleDefinitionName = "TextModule",
    AllPages = false,
    PageModuleId = 10,
    PageId = 20,
    Title = "Sample Module",
    Pane = "ContentPane",
    Order = 1,
    ContainerType = "Default",
    EffectiveDate = DateTime.Now,
    ExpiryDate = DateTime.Now.AddYears(1),
    DeletedBy = null,
    DeletedOn = null,
    IsDeleted = false,
    ModuleType = "Oqtane.Modules.Text.TextModule",
    PaneModuleIndex = 0,
    PaneModuleCount = 1,
    RenderId = Guid.NewGuid(),
    SecurityAccessLevel = SecurityAccessLevel.View,
    ControlTitle = "Text Module",
    Actions = "View;Edit",
    UseAdminContainer = true,
    RenderMode = "Server",
    Prerender = false,
    PermissionList = new List<Permission>(),
    Settings = new Dictionary<string, string>()
};

// Cloning the module object
var clonedModule = module.Clone();
```

#### Change Log:

- **Initial Creation**: Added primary properties for `ModuleId`, `SiteId`, `ModuleDefinitionName`, `AllPages`, `DeletedBy`, `DeletedOn`, `IsDeleted`, `PermissionList`, `Settings`, `PageModuleId`, `PageId`, `Title`, `Pane`, `Order`, `ContainerType`, `EffectiveDate`, `ExpiryDate`, `ModuleType`, `PaneModuleIndex`, `PaneModuleCount`, `RenderId`, `SecurityAccessLevel`, `ControlTitle`, `Actions`, `UseAdminContainer`, `RenderMode`, and `Prerender`.
- **Enhancement**: Added `Clone` method for creating copies of the `Module` object.

**[Back to TOC](#table-of-contents)**

---

### **ModuleContent Model**

The `ModuleContent` model is used for enabling import/export of module data within the Oqtane framework.

#### Properties:

- **ModuleDefinitionName**: Reference to the `ModuleDefinition` for which this content is relevant.
- **Version**: Version of the `ModuleDefinition` used, not the version of the content.
- **Content**: Serialized content of the module for import/export.

#### Example Usage:

```csharp
var moduleContent = new ModuleContent
{
    ModuleDefinitionName = "TextModule",
    Version = "1.0.0",
    Content = "{\"Text\":\"Hello, world!\"}"
};
```

#### Change Log:

- **Initial Creation**: Added properties for `ModuleDefinitionName`, `Version`, and `Content`.

**[Back to TOC](#table-of-contents)**

---

### **ModuleDefinition Model**

The `ModuleDefinition` model describes a module type in Oqtane. The available modules are determined at startup.

#### Properties:

- **ModuleDefinitionId**: Reference to the `ModuleDefinition`.
- **ModuleDefinitionName**: Name of the `ModuleDefinition`.
- **Name**: Friendly name to show in the UI.
- **Description**: Module description for admin dialogs.
- **Categories**: Categories this module will be shown in (in the admin dialogs).
- **Version**: Version information of this module based on the DLL / NuGet package.
- **Owner**: (Not Mapped) Owner of the module.
- **Url**: (Not Mapped) URL for more information about the module.
- **Contact**: (Not Mapped) Contact information for the module.
- **License**: (Not Mapped) License information for the module.
- **Runtimes**: (Not Mapped) Supported runtimes for the module.
- **Dependencies**: (Not Mapped) Dependencies required for the module.
- **PermissionNames**: (Not Mapped) Names of permissions associated with the module.
- **ServerManagerType**: (Not Mapped) Type of the server manager for the module.
- **ControlTypeRoutes**: (Not Mapped) Routes for the control types used by the module.
- **ReleaseVersions**: (Not Mapped) Comma-delimited list of all official release versions of the module (e.g., "1.0.0,1.0.1").
- **DefaultAction**: (Not Mapped) Default action for the module.
- **SettingsType**: (Not Mapped) Type of settings used by the module (added in 2.0.2).
- **PackageName**: (Not Mapped) Package name of the module (added in 2.1.0).
- **Resources**: (Not Mapped) List of resources used by the module (added in 4.0.0).
- **IsAutoEnabled**: (Not Mapped) Indicates if the module is auto-enabled (added in 4.0.0).
- **PageTemplates**: (Not Mapped) List of page templates associated with the module (added in 4.0.0).
- **SiteId**: (Not Mapped) Internal property for the site ID.
- **IsEnabled**: (Not Mapped) Indicates if the module is enabled.
- **ControlTypeTemplate**: (Not Mapped) Template for the control type.
- **AssemblyName**: (Not Mapped) Assembly name of the module.
- **PermissionList**: (Not Mapped) List of permissions associated with the module.
- **Template**: (Not Mapped) Template used by the module.
- **IsPortable**: (Not Mapped) Indicates if the module is portable.
- **Permissions**: (Deprecated, Not Mapped) Use `PermissionList` instead.

#### Example Usage:

```csharp
var moduleDefinition = new ModuleDefinition
{
    ModuleDefinitionId = 1,
    ModuleDefinitionName = "TextModule",
    Name = "Text Module",
    Description = "A module for displaying text content.",
    Categories = "Content",
    Version = "1.0.0",
    Owner = "Oqtane",
    Url = "https://oqtane.org",
    Contact = "support@oqtane.org",
    License = "MIT",
    Runtimes = "netcoreapp3.1",
    Dependencies = "Oqtane.Modules.Text",
    PermissionNames = "View;Edit",
    ServerManagerType = "Oqtane.Modules.Text.ServerManager",
    ControlTypeRoutes = "View;Edit",
    ReleaseVersions = "1.0.0",
    DefaultAction = "View",
    SettingsType = "Oqtane.Modules.Text.Settings",
    PackageName = "Oqtane.Modules.Text",
    Resources = new List<Resource>(),
    IsAutoEnabled = true,
    PageTemplates = new List<PageTemplate>(),
    SiteId = 1,
    IsEnabled = true,
    ControlTypeTemplate = "Oqtane.Modules.Text.Template",
    AssemblyName = "Oqtane.Modules.Text",
    PermissionList = new List<Permission>(),
    Template = "Default",
    IsPortable = true
};
```

#### Change Log:

- **Initial Creation**: Added primary properties for `ModuleDefinitionId`, `ModuleDefinitionName`, `Name`, `Description`, `Categories`, `Version`, `Owner`, `Url`, `Contact`, `License`, `Runtimes`, `Dependencies`, `PermissionNames`, `ServerManagerType`, `ControlTypeRoutes`, `ReleaseVersions`, `DefaultAction`, `SettingsType`, `PackageName`, `Resources`, `IsAutoEnabled`, `PageTemplates`, `SiteId`, `IsEnabled`, `ControlTypeTemplate`, `AssemblyName`, `PermissionList`, `Template`, and `IsPortable`.
- **Enhancement**: Added `Permissions` property as deprecated and provided `PermissionList` as a replacement.

**[Back to TOC](#table-of-contents)**

---

### **Notification Model**

The `Notification` model represents a notification for a user, usually meant to be sent as an email.

#### Properties:

- **NotificationId**: Internal ID.
- **SiteId**: Reference to the `Site` on which the notification was created.
- **FromUserId**: Nullable ID of the user who created the notification.
- **FromDisplayName**: Display name of the creator.
- **FromEmail**: Email address of the creator.
- **ToUserId**: Nullable ID of the recipient user (can be null if the recipient is not a user).
- **ToDisplayName**: Display name of the recipient.
- **ToEmail**: Email address of the recipient.
- **ParentId**: Nullable reference to an optional parent `Notification` in case of a thread with reply messages.
- **Subject**: Subject of the notification.
- **Body**: Body/content of the notification.
- **CreatedOn**: Timestamp when the notification was created.
- **IsDelivered**: Indicates whether the notification has been delivered.
- **DeliveredOn**: Nullable timestamp when the notification was delivered.
- **DeletedBy**: User who deleted the notification (if applicable).
- **DeletedOn**: Nullable timestamp when the notification was deleted.
- **IsDeleted**: Indicates whether the notification is deleted.
- **SendOn**: Nullable timestamp when the notification should be sent.
- **IsRead**: Indicates whether the notification has been read.

#### Example Usage:

```csharp
var notification = new Notification
{
    NotificationId = 1,
    SiteId = 1,
    FromUserId = 2,
    FromDisplayName = "Admin",
    FromEmail = "admin@example.com",
    ToUserId = 3,
    ToDisplayName = "User",
    ToEmail = "user@example.com",
    Subject = "Welcome to Oqtane",
    Body = "Hello, welcome to Oqtane!",
    CreatedOn = DateTime.UtcNow,
    IsDelivered = false,
    SendOn = DateTime.UtcNow.AddHours(1)
};
```

#### Change Log:

- **Initial Creation**: Added properties for `NotificationId`, `SiteId`, `FromUserId`, `FromDisplayName`, `FromEmail`, `ToUserId`, `ToDisplayName`, `ToEmail`, `ParentId`, `Subject`, `Body`, `CreatedOn`, `IsDelivered`, `DeliveredOn`, `DeletedBy`, `DeletedOn`, `IsDeleted`, `SendOn`, and `IsRead`.

**[Back to TOC](#table-of-contents)**

---

### **Package Model**

The `Package` model represents a software package for installation within the Oqtane framework.

#### Properties:

- **PackageId**: ID of the package, usually constructed from the namespace.
- **Owner**: Owner of the package.
- **OwnerUrl**: URL for the owner of the package.
- **Name**: Friendly name of the package.
- **Description**: Description of the package.
- **LogoFileId**: Nullable ID for the logo file.
- **LogoUrl**: URL for the logo image.
- **License**: License for the package.
- **ProductUrl**: URL for the product.
- **Version**: Version as defined in the NuGet package.
- **Downloads**: Download count to show how popular the package is.
- **ReleaseDate**: Date the package was released.
- **PackageUrl**: Direct URL for downloading the package.
- **SupportUrl**: Direct URL for getting support for the package.
- **Vulnerabilities**: Indicates if any known security vulnerabilities exist.
- **Price**: (Commercial) Nullable price of the package.
- **PaymentUrl**: (Commercial) URL for purchasing the package.
- **TrialPeriod**: (Commercial) Trial period in days.
- **ExpiryDate**: (Commercial) Nullable expiry date of the package.

#### Example Usage:

```csharp
var package = new Package
{
    PackageId = "Oqtane.Modules.Text",
    Owner = "Oqtane",
    OwnerUrl = "https://oqtane.org",
    Name = "Text Module",
    Description = "A module for displaying text content.",
    LogoFileId = null,
    LogoUrl = "https://oqtane.org/images/logo.png",
    License = "MIT",
    ProductUrl = "https://oqtane.org",
    Version = "1.0.0",
    Downloads = 1000,
    ReleaseDate = DateTime.UtcNow,
    PackageUrl = "https://oqtane.org/downloads/textmodule.zip",
    SupportUrl = "https://oqtane.org/support",
    Vulnerabilities = 0,
    Price = 0.0m,
    PaymentUrl = "https://oqtane.org/payment",
    TrialPeriod = 30,
    ExpiryDate = null
};
```

#### Change Log:

- **Initial Creation**: Added properties for `PackageId`, `Owner`, `OwnerUrl`, `Name`, `Description`, `LogoFileId`, `LogoUrl`, `License`, `ProductUrl`, `Version`, `Downloads`, `ReleaseDate`, `PackageUrl`, `SupportUrl`, `Vulnerabilities`, `Price`, `PaymentUrl`, `TrialPeriod`, and `ExpiryDate`.

**[Back to TOC](#table-of-contents)**

---

### **Page Model**

The `Page` model describes a page in Oqtane.

#### Properties:

- **PageId**: ID of the page.
- **SiteId**: Reference to the `Site`.
- **Path**: Path of the page.
- **ParentId**: Nullable reference to the parent `Page`, if it has one.
- **Name**: Name of the page.
- **Title**: Page title shown in the browser tab.
- **Order**: Sort order in the list of sibling pages.
- **Url**: Full URL to this page.
- **ThemeType**: Reference to the `Theme` used to display this page.
- **DefaultContainerType**: Reference to the container used for modules on this page.
- **HeadContent**: Content to be included in the head of the page.
- **BodyContent**: Content to be included in the body of the page.
- **Icon**: Icon class name for this page.
- **IsNavigation**: Indicates if this page should be included in the navigation menu.
- **IsClickable**: Indicates if this page should be clickable in the navigation menu.
- **IsPersonalizable**: Indicates if the page is personalizable, allowing users to create custom versions.
- **UserId**: Nullable reference to the user who owns the personalized page.
- **EffectiveDate**: Nullable start date of when this page is visible.
- **ExpiryDate**: Nullable end date of when this page is visible.
- **Level**: (Not Mapped) The hierarchical level of the page.
- **HasChildren**: (Not Mapped) Indicates if the page has sub-pages.
- **PermissionList**: (Not Mapped) List of permissions for this page.
- **Settings**: (Not Mapped) List of settings for this page.
- **Panes**: (Not Mapped) List of pane names for the theme assigned to this page.
- **Resources**: (Not Mapped) List of resources (CSS, JS) needed to render this page properly.
- **DeletedBy**: User who deleted the page (if applicable).
- **DeletedOn**: Nullable timestamp when the page was deleted.
- **IsDeleted**: Indicates if the page is deleted.
- **EditMode**: (Deprecated, Not Mapped) Indicates if the page is in edit mode.
- **LayoutType**: (Deprecated, Not Mapped) Layout type of the page.
- **Permissions**: (Deprecated, Not Mapped) Use `PermissionList` instead.

#### Example Usage:

```csharp
var page = new Page
{
    PageId = 1,
    SiteId = 1,
    Path = "home",
    ParentId = null,
    Name = "Home",
    Title = "Home Page",
    Order = 1,
    Url = "/home",
    ThemeType = "DefaultTheme",
    DefaultContainerType = "DefaultContainer",
    HeadContent = "<meta name=\"description\" content=\"Home page\">",
    BodyContent = "<div>Welcome to the home page!</div>",
    Icon = "home",
    IsNavigation = true,
    IsClickable = true,
    IsPersonalizable = false,
    UserId = null,
    EffectiveDate = DateTime.UtcNow,
    ExpiryDate = null,
    Level = 0,
    HasChildren = false,
    PermissionList = new List<Permission>(),
    Settings = new Dictionary<string, string>()
};

// Cloning the page object
var clonedPage = page.Clone();
```

#### Change Log:

- **Initial Creation**: Added properties for `PageId`, `SiteId`, `Path`, `ParentId`, `Name`, `Title`, `Order`, `Url`, `ThemeType`, `DefaultContainerType`, `HeadContent`, `BodyContent`, `Icon`, `IsNavigation`, `IsClickable`, `IsPersonalizable`, `UserId`, `EffectiveDate`, `ExpiryDate`, `Level`, `HasChildren`, `PermissionList`, `Settings`, `Panes`, `Resources`, `DeletedBy`, `DeletedOn`, `IsDeleted`, `EditMode`, `LayoutType`, and `Permissions`.
- **Enhancement**: Added `Clone` method for creating copies of the `Page` object.

**[Back to TOC](#table-of-contents)**

---

### **PageModule Model**

The `PageModule` model provides information about a `Module` instance on a `Page`.

#### Properties:

- **PageModuleId**: Internal ID to identify this instance.
- **PageId**: Reference to the `Page`.
- **ModuleId**: Reference to the `Module`.
- **Title**: Module title shown in the container if the container shows titles.
- **Pane**: The pane in which this module instance appears.
- **Order**: The sorting order or position in the pane where this module appears.
- **ContainerType**: Reference to a Razor container that wraps this module instance.
- **EffectiveDate**: Nullable start date of when this assignment is valid.
- **ExpiryDate**: Nullable end date of when this assignment is valid.
- **DeletedBy**: User who deleted the instance (if applicable).
- **DeletedOn**: Nullable timestamp when the instance was deleted.
- **IsDeleted**: Indicates if the instance is deleted.
- **Module**: The `Module` itself.
- **Page**: The `Page` itself.

#### Example Usage:

```csharp
var pageModule = new PageModule
{
    PageModuleId = 1,
    PageId = 2,
    ModuleId = 3,
    Title = "Sample Module",
    Pane = "ContentPane",
    Order = 1,
    ContainerType = "DefaultContainer",
    EffectiveDate = DateTime.UtcNow,
    ExpiryDate = DateTime.UtcNow.AddYears(1),
    DeletedBy = null,
    DeletedOn = null,
    IsDeleted = false,
    Module = new Module { ModuleId = 3, SiteId = 1, ModuleDefinitionName = "TextModule" },
    Page = new Page { PageId = 2, SiteId = 1, Path = "home" }
};
```

#### Change Log:

- **Initial Creation**: Added properties for `PageModuleId`, `PageId`, `ModuleId`, `Title`, `Pane`, `Order`, `ContainerType`, `EffectiveDate`, `ExpiryDate`, `DeletedBy`, `DeletedOn`, `IsDeleted`, `Module`, and `Page`.

**[Back to TOC](#table-of-contents)**

---

### **Permission Model**

The `Permission` model provides information about permissions for entities in Oqtane. Entities in Oqtane can be identified and described using this model.

#### Properties:

- **PermissionId**: Internal ID storing this information.
- **SiteId**: Reference to the `Site` which contains both the target entity and permissions.
- **EntityName**: Name of the entity these permissions apply to (e.g., Module).
- **EntityId**: ID of the entity these permissions apply to (e.g., a ModuleId). A value of -1 indicates the permission applies to all entity names regardless of ID (e.g., API permissions).
- **PermissionName**: Name of the permission (e.g., View).
- **RoleId**: Nullable ID of the `Role` this permission applies to. If null, then this is a user permission.
- **RoleName**: (Not Mapped) The role name associated with the RoleId.
- **UserId**: Nullable ID of the `User` this permission applies to. If null, then this is a role permission.
- **IsAuthorized**: Indicates the type of permission (grant = true, deny = false).

#### Example Usage:

```csharp
var permission = new Permission
{
    PermissionId = 1,
    SiteId = 1,
    EntityName = "Module",
    EntityId = 10,
    PermissionName = "View",
    RoleId = null,
    RoleName = "Administrator",
    UserId = null,
    IsAuthorized = true
};

// Cloning the permission object
var clonedPermission = permission.Clone();
```

#### Change Log:

- **Initial Creation**: Added properties for `PermissionId`, `SiteId`, `EntityName`, `EntityId`, `PermissionName`, `RoleId`, `RoleName`, `UserId`, and `IsAuthorized`.
- **Enhancement**: Added `Clone` method for creating copies of the `Permission` object.

**[Back to TOC](#table-of-contents)**

---

### **Profile Model**

The `Profile` model represents a single profile property information of a `User`. A user will have multiple profile properties to fully describe their profile.

#### Properties:

- **ProfileId**: Internal ID.
- **SiteId**: Nullable reference to the `Site`. Certain users, like super-users, may not belong to any specific site.
- **Name**: Name of the profile property (not the user name).
- **Title**: Label of the profile property.
- **Description**: Description of the property for the UI.
- **Category**: Category of the profile property for grouping, etc.
- **ViewOrder**: Order of the property in the list of profile properties.
- **MaxLength**: Limits the input length of the property.
- **DefaultValue**: Initial or default value of the property.
- **IsRequired**: Indicates if the profile property is required.
- **IsPrivate**: Indicates if the profile property is private, meaning other users won't see them.
- **Options**: Possible values for dropdown input fields.
- **Validation**: Optional regular expression validation.
- **Rows**: Optional number of rows for textarea input.
- **Autocomplete**: Autocomplete setting for the property, enabling autocomplete for the corresponding input field if set.

#### Example Usage:

```csharp
var profile = new Profile
{
    ProfileId = 1,
    SiteId = 2,
    Name = "FirstName",
    Title = "First Name",
    Description = "User's first name",
    Category = "Personal Information",
    ViewOrder = 1,
    MaxLength = 50,
    DefaultValue = "",
    IsRequired = true,
    IsPrivate = false,
    Options = null,
    Validation = "^[A-Za-z]+$",
    Rows = 1,
    Autocomplete = "given-name"
};
```

#### Change Log:

- **Initial Creation**: Added properties for `ProfileId`, `SiteId`, `Name`, `Title`, `Description`, `Category`, `ViewOrder`, `MaxLength`, `DefaultValue`, `IsRequired`, `IsPrivate`, `Options`, `Validation`, `Rows`, and `Autocomplete`.

**[Back to TOC](#table-of-contents)**

---

### **RequestCulture Model**

The `RequestCulture` model describes culture information for a request, including both formatting and UI cultures.

#### Properties:

- **Culture**: Gets the `CultureInfo` for the request to be used for formatting.
- **UICulture**: Gets the `CultureInfo` for the request to be used for text, i.e., language.

#### Example Usage:

```csharp
var requestCulture = new RequestCulture("en-US");

// Accessing properties
CultureInfo culture = requestCulture.Culture; // returns CultureInfo for "en-US"
CultureInfo uiCulture = requestCulture.UICulture; // returns CultureInfo for "en-US"
```

#### Constructors:

- **RequestCulture(CultureInfo culture)**: Creates a new `RequestCulture` object with both `Culture` and `UICulture` properties set to the same `CultureInfo` value.
- **RequestCulture(string culture)**: Creates a new `RequestCulture` object with both `Culture` and `UICulture` properties set to the same `CultureInfo` value.
- **RequestCulture(string culture, string uiCulture)**: Creates a new `RequestCulture` object with `Culture` and `UICulture` properties set to the respective `CultureInfo` values provided as strings.
- **RequestCulture(CultureInfo culture, CultureInfo uiCulture)**: Creates a new `RequestCulture` object with `Culture` and `UICulture` properties set to the respective `CultureInfo` values provided.

#### Change Log:

- **Initial Creation**: Added properties for `Culture` and `UICulture`, and various constructors for initializing these properties.

**[Back to TOC](#table-of-contents)**

---

### **Resource Model**

The `Resource` model describes a JavaScript or CSS file which is needed by the module to work.

#### Properties:

- **ResourceType**: A `ResourceType` so the interop can properly create `script` or `link` tags.
- **Url**: Path to the resource (query string parameters can be included for cache busting, e.g., `?v=#`).
- **Integrity**: Integrity checks to increase the security of resources accessed, especially common in CDN resources.
- **CrossOrigin**: Cross-origin rules for this resource, usually `anonymous`.
- **Bundle**: For scripts, a bundle can be used to identify dependencies and ordering in the script loading process.
- **Level**: For stylesheets, this defines the relative position for cascading purposes.
- **Location**: For scripts, this defines if the resource should be included in the head or body.
- **ES6Module**: For scripts, allows `type="module"` registrations (not applicable to stylesheets).
- **Content**: Allows specification of inline script (not applicable to stylesheets).
- **RenderMode**: For scripts, this defines the render mode (default is all render modes) - not applicable to stylesheets.
- **Reload**: Indicates that a script should be reloaded on every page transition - not applicable to stylesheets.
- **Namespace**: The namespace of the component that declared the resource, used only in `SiteRouter`.
- **Declaration**: (Deprecated) Use `ResourceDeclaration` instead.

#### Example Usage:

```csharp
var resource = new Resource
{
    ResourceType = ResourceType.Script,
    Url = "/scripts/myscript.js?v=1.0.0",
    Integrity = "sha384-abc123",
    CrossOrigin = "anonymous",
    Bundle = "main",
    Level = ResourceLevel.Page,
    Location = ResourceLocation.Body,
    ES6Module = true,
    Content = "console.log('Hello, world!');",
    RenderMode = "Server",
    Reload = true,
    Namespace = "Oqtane.Modules"
};

// Cloning the resource object
var clonedResource = resource.Clone(ResourceLevel.Page, "Oqtane.Modules");
```

#### Change Log:

- **Initial Creation**: Added properties for `ResourceType`, `Url`, `Integrity`, `CrossOrigin`, `Bundle`, `Level`, `Location`, `ES6Module`, `Content`, `RenderMode`, `Reload`, `Namespace`, and `Declaration`.
- **Enhancement**: Added `Clone` method for creating copies of the `Resource` object.

**[Back to TOC](#table-of-contents)**

---

### **Result Model**

The `Result` model represents the outcome of an operation, including a success flag and an optional message.

#### Properties:

- **Success**: Indicates whether the operation was successful.
- **Message**: An optional message providing additional information about the result.

#### Example Usage:

```csharp
var result1 = new Result(true);
var result2 = new Result(false, "An error occurred");

// Accessing properties
bool isSuccess = result1.Success; // returns true
string message = result2.Message; // returns "An error occurred"
```

#### Constructors:

- **Result(bool success)**: Initializes a new instance of the `Result` class with a success flag.
- **Result(bool success, string message)**: Initializes a new instance of the `Result` class with a success flag and a message.

#### Change Log:

- **Initial Creation**: Added properties for `Success` and `Message`, along with constructors for initializing these properties.

**[Back to TOC](#table-of-contents)**

---

### **Role Model**

The `Role` model describes a security role in Oqtane.

#### Properties:

- **RoleId**: Primary ID.
- **SiteId**: Nullable reference to a `Site`, if applicable.
- **Name**: Role name to show in admin dialogs.
- **Description**: Brief description for admin dialogs.
- **IsAutoAssigned**: Determines if users automatically get assigned to this role.
- **IsSystem**: Indicates if the role is a system role.

#### Example Usage:

```csharp
var role = new Role
{
    RoleId = 1,
    SiteId = 2,
    Name = "Administrator",
    Description = "Admin role with full permissions",
    IsAutoAssigned = false,
    IsSystem = true
};
```

#### Change Log:

- **Initial Creation**: Added properties for `RoleId`, `SiteId`, `Name`, `Description`, `IsAutoAssigned`, and `IsSystem`.

**[Back to TOC](#table-of-contents)**

---

### **Route Model**

The `Route` model describes a route comprising multiple components. The structure is `{scheme}://{hostname}/{aliaspath}/{pagepath}/*/{moduleid}/{action}/!/{urlparameters}?{query}#{fragment}`.

#### Properties:

- **Authority**: The host name or IP address and port number (does not include scheme or trailing slash).
- **Scheme**: A fully qualified route contains a scheme (e.g., http, https).
- **Host**: A fully qualified route contains a host name, which may include a port number.
- **Port**: A host name may contain a port number.
- **AbsolutePath**: The absolute path for the route.
- **PathAndQuery**: The absolute path for the route including the query string.
- **AliasPath**: An absolute path may contain an alias path.
- **PagePath**: An absolute path may contain a page path.
- **ModuleId**: A route may contain a module ID, located after the module delimiter segment (/*/).
- **Action**: A route may contain an action, located after the module ID.
- **UrlParameters**: A route may contain parameters located after the URL parameter delimiter segment (/!/).
- **Query**: All query string parameters (prefixed with a ? delimiter).
- **Fragment**: A route may contain a fragment located after the # delimiter.
- **RootUrl**: Contains the resource identifier for the root of an Oqtane installation (including scheme).
- **SiteUrl**: Contains the resource identifier for the home page of a specific Oqtane site (including scheme and possibly an alias path).

#### Example Usage:

```csharp
var route = new Route("https://example.com/oqtane/home/*/10/View/!/param1?query=value#fragment", "oqtane");

// Accessing properties
string authority = route.Authority; // returns "example.com"
string scheme = route.Scheme; // returns "https"
string host = route.Host; // returns "example.com"
string port = route.Port; // returns "443"
string absolutePath = route.AbsolutePath; // returns "/oqtane/home/*/10/View/!/param1"
string pathAndQuery = route.PathAndQuery; // returns "/oqtane/home/*/10/View/!/param1?query=value"
string aliasPath = route.AliasPath; // returns "oqtane"
string pagePath = route.PagePath; // returns "home"
string moduleId = route.ModuleId; // returns "10"
string action = route.Action; // returns "View"
string urlParameters = route.UrlParameters; // returns "param1"
string query = route.Query; // returns "?query=value"
string fragment = route.Fragment; // returns "#fragment"
string rootUrl = route.RootUrl; // returns "https://example.com"
string siteUrl = route.SiteUrl; // returns "https://example.com/oqtane"
```

#### Constructors:

- **Route()**: Parameterless constructor to prevent deserialization exceptions.
- **Route(string route, string aliaspath)**: Initializes a new instance of the `Route` class using the provided route and alias path.

#### Change Log:

- **Initial Creation**: Added properties for `Authority`, `Scheme`, `Host`, `Port`, `AbsolutePath`, `PathAndQuery`, `AliasPath`, `PagePath`, `ModuleId`, `Action`, `UrlParameters`, `Query`, `Fragment`, `RootUrl`, and `SiteUrl`.
- **Enhancement**: Added constructors for initializing these properties.

**[Back to TOC](#table-of-contents)**

---

### **SearchContent Model**

The `SearchContent` model provides information about searchable content within a site in the Oqtane framework.

#### Properties:

- **SearchContentId**: Internal ID of the searchable content.
- **SiteId**: ID of the site containing this content.
- **EntityName**: Name of the entity that this content pertains to.
- **EntityId**: ID of the entity that this content pertains to.
- **Title**: Title of the content.
- **Description**: Description of the content.
- **Body**: Body text of the content.
- **Url**: URL where the content can be accessed.
- **Permissions**: Comma-delimited string of permissions in the format `EntityName:EntityId`.
- **ContentModifiedBy**: Username or identifier of the user who last modified the content.
- **ContentModifiedOn**: Timestamp when the content was last modified.
- **AdditionalContent**: Additional content or metadata.
- **CreatedOn**: Timestamp when the content was created.
- **SearchContentProperties**: (Not Mapped) List of properties related to the search content, used only during updates.
- **Count**: (Not Mapped) Count of matching records, populated only for queries.
- **IsDeleted**: (Not Mapped) Indicates if the content is deleted, used only during updates.
- **TenantId**: (Not Mapped) ID of the tenant, used only during updates.
- **UniqueKey**: (Not Mapped) Unique key for the content in the format `TenantId:SiteId:EntityName:EntityId`.

#### Example Usage:

```csharp
var searchContent = new SearchContent
{
    SearchContentId = 1,
    SiteId = 1,
    EntityName = "Page",
    EntityId = "10",
    Title = "Home Page",
    Description = "This is the home page.",
    Body = "<p>Welcome to the home page!</p>",
    Url = "/home",
    Permissions = "Page:10,Module:20",
    ContentModifiedBy = "admin",
    ContentModifiedOn = DateTime.UtcNow,
    AdditionalContent = "",
    CreatedOn = DateTime.UtcNow,
    SearchContentProperties = new List<SearchContentProperty>(),
    Count = 0,
    IsDeleted = false,
    TenantId = 1
};

// Accessing the unique key
string uniqueKey = searchContent.UniqueKey; // returns "1:1:Page:10"
```

#### Change Log:

- **Initial Creation**: Added properties for `SearchContentId`, `SiteId`, `EntityName`, `EntityId`, `Title`, `Description`, `Body`, `Url`, `Permissions`, `ContentModifiedBy`, `ContentModifiedOn`, `AdditionalContent`, `CreatedOn`, `SearchContentProperties`, `Count`, `IsDeleted`, `TenantId`, and `UniqueKey`.

**[Back to TOC](#table-of-contents)**

---

### **SearchContentProperty Model**

The `SearchContentProperty` model represents a property related to search content within a site in the Oqtane framework.

#### Properties:

- **PropertyId**: Internal ID of the search content property.
- **SearchContentId**: ID of the associated search content.
- **Name**: Name of the property.
- **Value**: Value of the property.

#### Example Usage:

```csharp
var searchContentProperty = new SearchContentProperty
{
    PropertyId = 1,
    SearchContentId = 10,
    Name = "Author",
    Value = "John Doe"
};
```

#### Change Log:

- **Initial Creation**: Added properties for `PropertyId`, `SearchContentId`, `Name`, and `Value`.

**[Back to TOC](#table-of-contents)**

---

### **SearchContentWord Model**

The `SearchContentWord` model represents the relationship between search content and search words, tracking occurrences of specific words within the content.

#### Properties:

- **SearchContentWordId**: Internal ID of the search content word relationship.
- **SearchContentId**: ID of the associated search content.
- **SearchWordId**: ID of the associated search word.
- **Count**: Number of times the word appears in the content.
- **CreatedOn**: Timestamp when the relationship was created.
- **ModifiedOn**: Timestamp when the relationship was last modified.
- **SearchWord**: The associated `SearchWord` object.
- **SearchContent**: The associated `SearchContent` object.

#### Example Usage:

```csharp
var searchContentWord = new SearchContentWord
{
    SearchContentWordId = 1,
    SearchContentId = 10,
    SearchWordId = 5,
    Count = 3,
    CreatedOn = DateTime.UtcNow,
    ModifiedOn = DateTime.UtcNow,
    SearchWord = new SearchWord { SearchWordId = 5, Word = "example" },
    SearchContent = new SearchContent { SearchContentId = 10, Title = "Example Content" }
};
```

#### Change Log:

- **Initial Creation**: Added properties for `SearchContentWordId`, `SearchContentId`, `SearchWordId`, `Count`, `CreatedOn`, `ModifiedOn`, `SearchWord`, and `SearchContent`.

**[Back to TOC](#table-of-contents)**

---

### **SearchQuery Model**

The `SearchQuery` model represents the parameters used to perform a search within a site in the Oqtane framework.

#### Properties:

- **SiteId**: ID of the site in which the search is performed.
- **Alias**: The `Alias` associated with the site.
- **Keywords**: Keywords used for the search.
- **IncludeEntities**: Comma-delimited entities to include in the search.
- **ExcludeEntities**: Comma-delimited entities to exclude from the search.
- **FromDate**: Start date for the search range.
- **ToDate**: End date for the search range.
- **Properties**: Additional properties or filters for the search, represented as a dictionary.
- **PageIndex**: Index of the current page of results.
- **PageSize**: Number of results per page.
- **SortField**: Field by which to sort the search results.
- **SortOrder**: Order in which to sort the search results (ascending or descending).
- **BodyLength**: Length of the body text to return in the search results, defaulting to 255 characters.

#### Example Usage:

```csharp
var searchQuery = new SearchQuery
{
    SiteId = 1,
    Alias = new Alias { AliasId = 1, Name = "Default" },
    Keywords = "Oqtane",
    IncludeEntities = "Page,Module",
    ExcludeEntities = "User",
    FromDate = DateTime.UtcNow.AddMonths(-1),
    ToDate = DateTime.UtcNow,
    Properties = new Dictionary<string, string> { { "Category", "Documentation" } },
    PageIndex = 0,
    PageSize = 10,
    SortField = SearchSortField.Title,
    SortOrder = SearchSortOrder.Ascending,
    BodyLength = 255
};
```

#### Change Log:

- **Initial Creation**: Added properties for `SiteId`, `Alias`, `Keywords`, `IncludeEntities`, `ExcludeEntities`, `FromDate`, `ToDate`, `Properties`, `PageIndex`, `PageSize`, `SortField`, `SortOrder`, and `BodyLength`.

**[Back to TOC](#table-of-contents)**

---

### **SearchResult Model**

The `SearchResult` model extends the `SearchContent` model to include additional properties related to search results, such as score and snippet.

#### Properties:

- **SearchContentId**: Inherited from `SearchContent` - Internal ID of the searchable content.
- **SiteId**: Inherited from `SearchContent` - ID of the site containing this content.
- **EntityName**: Inherited from `SearchContent` - Name of the entity that this content pertains to.
- **EntityId**: Inherited from `SearchContent` - ID of the entity that this content pertains to.
- **Title**: Inherited from `SearchContent` - Title of the content.
- **Description**: Inherited from `SearchContent` - Description of the content.
- **Body**: Inherited from `SearchContent` - Body text of the content.
- **Url**: Inherited from `SearchContent` - URL where the content can be accessed.
- **Permissions**: Inherited from `SearchContent` - Comma-delimited string of permissions in the format `EntityName:EntityId`.
- **ContentModifiedBy**: Inherited from `SearchContent` - Username or identifier of the user who last modified the content.
- **ContentModifiedOn**: Inherited from `SearchContent` - Timestamp when the content was last modified.
- **AdditionalContent**: Inherited from `SearchContent` - Additional content or metadata.
- **CreatedOn**: Inherited from `SearchContent` - Timestamp when the content was created.
- **SearchContentProperties**: Inherited from `SearchContent` - List of properties related to the search content, used only during updates.
- **Count**: Inherited from `SearchContent` - Count of matching records, populated only for queries.
- **IsDeleted**: Inherited from `SearchContent` - Indicates if the content is deleted, used only during updates.
- **TenantId**: Inherited from `SearchContent` - ID of the tenant, used only during updates.
- **UniqueKey**: Inherited from `SearchContent` - Unique key for the content in the format `TenantId:SiteId:EntityName:EntityId`.

- **Score**: Score of the search result.
- **DisplayScore**: Display score of the search result, formatted as a string.
- **Snippet**: Snippet of the content to display in the search result.

#### Example Usage:

```csharp
var searchResult = new SearchResult
{
    SearchContentId = 1,
    SiteId = 1,
    EntityName = "Page",
    EntityId = "10",
    Title = "Home Page",
    Description = "This is the home page.",
    Body = "<p>Welcome to the home page!</p>",
    Url = "/home",
    Permissions = "Page:10,Module:20",
    ContentModifiedBy = "admin",
    ContentModifiedOn = DateTime.UtcNow,
    AdditionalContent = "",
    CreatedOn = DateTime.UtcNow,
    SearchContentProperties = new List<SearchContentProperty>(),
    Count = 0,
    IsDeleted = false,
    TenantId = 1,
    Score = 0.95f,
    DisplayScore = "95%",
    Snippet = "Welcome to the home page!"
};
```

#### Change Log:

- **Initial Creation**: Added properties for `Score`, `DisplayScore`, and `Snippet`.

**[Back to TOC](#table-of-contents)**

---

### **SearchResults Model**

The `SearchResults` model represents the outcome of a search query, containing the list of search results and the total number of results.

#### Properties:

- **Results**: List of search results (`List<SearchResult>`).
- **TotalResults**: Total number of results returned by the search query.

#### Example Usage:

```csharp
var searchResults = new SearchResults
{
    Results = new List<SearchResult>
    {
        new SearchResult
        {
            SearchContentId = 1,
            SiteId = 1,
            EntityName = "Page",
            EntityId = "10",
            Title = "Home Page",
            Description = "This is the home page.",
            Body = "<p>Welcome to the home page!</p>",
            Url = "/home",
            Permissions = "Page:10,Module:20",
            ContentModifiedBy = "admin",
            ContentModifiedOn = DateTime.UtcNow,
            AdditionalContent = "",
            CreatedOn = DateTime.UtcNow,
            SearchContentProperties = new List<SearchContentProperty>(),
            Count = 0,
            IsDeleted = false,
            TenantId = 1,
            Score = 0.95f,
            DisplayScore = "95%",
            Snippet = "Welcome to the home page!"
        }
    },
    TotalResults = 1
};
```

#### Change Log:

- **Initial Creation**: Added properties for `Results` and `TotalResults`.

**[Back to TOC](#table-of-contents)**

---

### **SearchWord Model**

The `SearchWord` model represents a word that has been indexed for search purposes within a site in the Oqtane framework.

#### Properties:

- **SearchWordId**: Internal ID of the search word.
- **Word**: The word that has been indexed.
- **CreatedOn**: Timestamp when the word was indexed.

#### Example Usage:

```csharp
var searchWord = new SearchWord
{
    SearchWordId = 1,
    Word = "example",
    CreatedOn = DateTime.UtcNow
};
```

#### Change Log:

- **Initial Creation**: Added properties for `SearchWordId`, `Word`, and `CreatedOn`.

**[Back to TOC](#table-of-contents)**

---

### **Setting Model**

The `Setting` model represents a setting for various objects such as `Tenant`, `Site`, `Page`, `Module`, etc., within the Oqtane framework.

#### Properties:

- **SettingId**: ID in the database, mainly used to later update an existing setting.
- **EntityName**: Name of the entity the setting is for (e.g., `Page`, `Site`).
- **EntityId**: ID of the entity being described (e.g., `Site` number 2).
- **SettingName**: Name of the setting.
- **SettingValue**: The value of the setting. It is always a string, so ensure to convert or cast as needed.
- **IsPrivate**: Indicates if this setting is private, meaning it should be maintained on the server and not sent to the client.

#### Example Usage:

```csharp
var setting = new Setting
{
    SettingId = 1,
    EntityName = "Site",
    EntityId = 2,
    SettingName = "Theme",
    SettingValue = "Default",
    IsPrivate = false
};
```

#### Change Log:

- **Initial Creation**: Added properties for `SettingId`, `EntityName`, `EntityId`, `SettingName`, `SettingValue`, and `IsPrivate`.

**[Back to TOC](#table-of-contents)**

---

### **Site Model**

The `Site` model describes a site in a `Tenant` within an Oqtane installation. Sites can have multiple `Alias`es.

#### Properties:

- **SiteId**: The ID of the site.
- **TenantId**: Reference to the `Tenant` the site is in.
- **Name**: The site name.
- **LogoFileId**: Reference to a `File` that has the logo for this site. Should be an image.
- **FaviconFileId**: Reference to a `File` that has the favicon for this site. Should be an image.
- **DefaultThemeType**: Default theme for the site.
- **DefaultContainerType**: Default container for the site.
- **AdminContainerType**: Default admin container.
- **PwaIsEnabled**: Indicates if the site is a progressive web application (PWA).
- **PwaAppIconFileId**: The app icon for the PWA.
- **PwaSplashIconFileId**: The splash icon for the PWA.
- **AllowRegistration**: Determines if visitors may register or create user accounts.
- **VisitorTracking**: Determines if site visitors will be recorded.
- **CaptureBrokenUrls**: Determines if broken URLs (404s) will be captured automatically.
- **SiteGuid**: Unique GUID to identify the site.
- **RenderMode**: The default render mode for the site (e.g., Static, Interactive, Headless).
- **Runtime**: The render mode for UI components requiring interactivity (e.g., Server, WebAssembly, Auto).
- **Prerender**: Indicates if the site supports prerendering (only applies to Interactive render mode).
- **Hybrid**: Indicates if a site can be integrated with an external .NET MAUI hybrid application.
- **Version**: Keeps track of site configuration changes and is used by the ISiteMigration interface.
- **HomePageId**: The home page of the site. The "/" path will be used by default if no home page is specified.
- **HeadContent**: Content to be included in the head of the page.
- **BodyContent**: Content to be included in the body of the page.
- **IsDeleted**: Indicates if the site is deleted.
- **DeletedBy**: The user who deleted the site.
- **DeletedOn**: The date the site was deleted.
- **ImageFiles**: (Not Mapped) The allowable image file extensions.
- **UploadableFiles**: (Not Mapped) The allowable file extensions which can be uploaded.
- **SiteTemplateType**: (Not Mapped) Used when provisioning a site from a site template.
- **Settings**: (Not Mapped) The settings for the site.
- **Pages**: (Not Mapped) List of pages for the site.
- **Languages**: (Not Mapped) List of languages for the site.
- **Themes**: (Not Mapped) List of themes for the site.

#### Example Usage:

```csharp
var site = new Site
{
    SiteId = 1,
    TenantId = 1,
    Name = "Example Site",
    LogoFileId = null,
    FaviconFileId = null,
    DefaultThemeType = "DefaultTheme",
    DefaultContainerType = "DefaultContainer",
    AdminContainerType = "AdminContainer",
    PwaIsEnabled = false,
    PwaAppIconFileId = null,
    PwaSplashIconFileId = null,
    AllowRegistration = true,
    VisitorTracking = true,
    CaptureBrokenUrls = true,
    SiteGuid = Guid.NewGuid().ToString(),
    RenderMode = "Static",
    Runtime = "Server",
    Prerender = false,
    Hybrid = false,
    Version = "1.0.0",
    HomePageId = 1,
    HeadContent = "<meta name=\"description\" content=\"Example site\">",
    BodyContent = "<div>Welcome to the example site!</div>",
    IsDeleted = false,
    DeletedBy = null,
    DeletedOn = null,
    ImageFiles = ".jpg,.png,.gif",
    UploadableFiles = ".jpg,.png,.gif,.pdf,.docx",
    SiteTemplateType = "DefaultTemplate",
    Settings = new Dictionary<string, string>(),
    Pages = new List<Page>(),
    Languages = new List<Language>(),
    Themes = new List<Theme>()
};

// Cloning the site object
var clonedSite = site.Clone();
```

#### Change Log:

- **Initial Creation**: Added properties for `SiteId`, `TenantId`, `Name`, `LogoFileId`, `FaviconFileId`, `DefaultThemeType`, `DefaultContainerType`, `AdminContainerType`, `PwaIsEnabled`, `PwaAppIconFileId`, `PwaSplashIconFileId`, `AllowRegistration`, `VisitorTracking`, `CaptureBrokenUrls`, `SiteGuid`, `RenderMode`, `Runtime`, `Prerender`, `Hybrid`, `Version`, `HomePageId`, `HeadContent`, `BodyContent`, `IsDeleted`, `DeletedBy`, `DeletedOn`, `ImageFiles`, `UploadableFiles`, `SiteTemplateType`, `Settings`, `Pages`, `Languages`, and `Themes`.
- **Enhancement**: Added `Clone` method for creating copies of the `Site` object.

**[Back to TOC](#table-of-contents)**

---

### **Sitemap Model**

The `Sitemap` model describes a sitemap within the Oqtane framework.

#### Properties:

- **Url**: URL of the sitemap.
- **ModifiedOn**: Timestamp indicating when the sitemap was last modified.

#### Example Usage:

```csharp
var sitemap = new Sitemap
{
    Url = "https://example.com/sitemap.xml",
    ModifiedOn = DateTime.UtcNow
};
```

#### Change Log:

- **Initial Creation**: Added properties for `Url` and `ModifiedOn`.

**[Back to TOC](#table-of-contents)**

---

### **SiteTemplate Model**

The `SiteTemplate` model represents a template for creating a new site within the Oqtane framework.

#### Properties:

- **Name**: Name of the site template.
- **TypeName**: Type name of the site template.

#### Example Usage:

```csharp
var siteTemplate = new SiteTemplate
{
    Name = "Default Site Template",
    TypeName = "Oqtane.SiteTemplates.Default"
};
```

#### Change Log:

- **Initial Creation**: Added properties for `Name` and `TypeName`.

**[Back to TOC](#table-of-contents)**

---

### **PageTemplate Model**

The `PageTemplate` model represents a template for creating a new page within the Oqtane framework.

#### Properties:

- **Path**: The path of the page.
- **Parent**: The parent path of the page.
- **Name**: The name of the page.
- **Title**: The title of the page.
- **Order**: The order of the page.
- **Url**: The URL of the page.
- **ThemeType**: The theme type of the page.
- **DefaultContainerType**: The default container type of the page.
- **HeadContent**: The content to be included in the head of the page.
- **BodyContent**: The content to be included in the body of the page.
- **Icon**: The icon of the page.
- **IsNavigation**: Indicates if the page should be included in the navigation menu.
- **IsClickable**: Indicates if the page should be clickable in the navigation menu.
- **IsPersonalizable**: Indicates if the page is personalizable.
- **IsDeleted**: Indicates if the page is deleted.
- **PermissionList**: List of permissions for the page.
- **PageTemplateModules**: List of modules for the page.
- **AliasName**: The alias name of the page.
- **Version**: The version of the page.
- **Update**: Indicates if the page should be updated.
- **EditMode**: (Obsolete) Indicates if the page is in edit mode.
- **PagePermissions**: (Obsolete) Use `PermissionList` instead.

#### Example Usage:

```csharp
var pageTemplate = new PageTemplate
{
    Path = "/example",
    Parent = "/",
    Name = "Example Page",
    Title = "Example Page Title",
    Order = 1,
    Url = "/example",
    ThemeType = "DefaultTheme",
    DefaultContainerType = "DefaultContainer",
    HeadContent = "<meta name=\"description\" content=\"Example page\">",
    BodyContent = "<div>Welcome to the example page!</div>",
    Icon = "example-icon",
    IsNavigation = true,
    IsClickable = true,
    IsPersonalizable = false,
    IsDeleted = false,
    PermissionList = new List<Permission>
    {
        new Permission(PermissionNames.View, RoleNames.Admin, true),
        new Permission(PermissionNames.Edit, RoleNames.Admin, true)
    },
    PageTemplateModules = new List<PageTemplateModule>(),
    AliasName = "default",
    Version = "1.0.0",
    Update = false
};
```

#### Change Log:

- **Initial Creation**: Added properties for `Path`, `Parent`, `Name`, `Title`, `Order`, `Url`, `ThemeType`, `DefaultContainerType`, `HeadContent`, `BodyContent`, `Icon`, `IsNavigation`, `IsClickable`, `IsPersonalizable`, `IsDeleted`, `PermissionList`, `PageTemplateModules`, `AliasName`, `Version`, `Update`, `EditMode`, and `PagePermissions`.

**[Back to TOC](#table-of-contents)**

---

### **PageTemplateModule Model**

The `PageTemplateModule` model represents a module within a page template in the Oqtane framework.

#### Properties:

- **ModuleDefinitionName**: The name of the module definition.
- **Title**: The title of the module.
- **Pane**: The pane in which the module is placed.
- **Order**: The order of the module within the pane.
- **ContainerType**: The container type of the module.
- **IsDeleted**: Indicates if the module is deleted.
- **PermissionList**: List of permissions for the module.
- **Content**: The content of the module.
- **ModulePermissions**: (Obsolete) Use `PermissionList` instead.

#### Example Usage:

```csharp
var pageTemplateModule = new PageTemplateModule
{
    ModuleDefinitionName = "TextModule",
    Title = "Text Module",
    Pane = "ContentPane",
    Order = 1,
    ContainerType = "DefaultContainer",
    IsDeleted = false,
    PermissionList = new List<Permission>
    {
        new Permission(PermissionNames.View, RoleNames.Admin, true),
        new Permission(PermissionNames.Edit, RoleNames.Admin, true)
    },
    Content = "Sample text content"
};
```

#### Change Log:

- **Initial Creation**: Added properties for `ModuleDefinitionName`, `Title`, `Pane`, `Order`, `ContainerType`, `IsDeleted`, `PermissionList`, `Content`, and `ModulePermissions`.

**[Back to TOC](#table-of-contents)**

---

### **SqlQuery Model**

The `SqlQuery` model represents a SQL query that belongs to a specific `Tenant` within the Oqtane framework.

#### Properties:

- **TenantId**: Reference to the `Tenant` this query belongs to.
- **DBType**: Type of the database.
- **DBConnectionString**: Connection string for the database.
- **Query**: The SQL query to be executed.
- **Results**: List of results returned by the query, represented as a list of dictionaries.

#### Example Usage:

```csharp
var sqlQuery = new SqlQuery
{
    TenantId = 1,
    DBType = "SQLServer",
    DBConnectionString = "Server=myServer;Database=myDB;User Id=myUser;Password=myPassword;",
    Query = "SELECT * FROM Users",
    Results = new List<Dictionary<string, string>>()
};
```

#### Change Log:

- **Initial Creation**: Added properties for `TenantId`, `DBType`, `DBConnectionString`, `Query`, and `Results`.

**[Back to TOC](#table-of-contents)**

---

### **Sync Model**

The `Sync` model represents a synchronization event within the Oqtane framework, containing the synchronization date and a list of synchronization events.

#### Properties:

- **SyncDate**: The date and time when the synchronization occurred.
- **SyncEvents**: List of synchronization events (`List<SyncEvent>`).

#### Example Usage:

```csharp
var sync = new Sync
{
    SyncDate = DateTime.UtcNow,
    SyncEvents = new List<SyncEvent>
    {
        new SyncEvent
        {
            TenantId = 1,
            SiteId = 1,
            EntityName = "Page",
            EntityId = 10,
            Action = "Update",
            ModifiedOn = DateTime.UtcNow
        }
    }
};
```

**[Back to TOC](#table-of-contents)**

---

### **SyncEvent Model**

The `SyncEvent` model represents an individual synchronization event within the Oqtane framework.

#### Properties:

- **TenantId**: ID of the tenant involved in the synchronization event.
- **SiteId**: ID of the site involved in the synchronization event.
- **EntityName**: Name of the entity involved in the synchronization event.
- **EntityId**: ID of the entity involved in the synchronization event.
- **Action**: Action performed in the synchronization event (e.g., "Update", "Delete").
- **ModifiedOn**: Timestamp when the event occurred.

#### Example Usage:

```csharp
var syncEvent = new SyncEvent
{
    TenantId = 1,
    SiteId = 1,
    EntityName = "Page",
    EntityId = 10,
    Action = "Update",
    ModifiedOn = DateTime.UtcNow
};
```

#### Change Log:

- **Initial Creation**: Added properties for `SyncDate` and `SyncEvents` to the `Sync` model.
- **Initial Creation**: Added properties for `TenantId`, `SiteId`, `EntityName`, `EntityId`, `Action`, and `ModifiedOn` to the `SyncEvent` model.

**[Back to TOC](#table-of-contents)**

---

### **Template Model**

The `Template` model defines metadata for a module or theme template within the Oqtane framework.

#### Properties:

- **Name**: Name of the template (folder name).
- **Title**: Title of the template.
- **Type**: Type of template (Internal or External).
- **Version**: Minimum framework version dependency.
- **Namespace**: Namespace of the template, which uses tokens.
- **Location**: Location where the template will be created (dynamically set).

#### Example Usage:

```csharp
var template = new Template
{
    Name = "MyModuleTemplate",
    Title = "My Module Template",
    Type = "Internal",
    Version = "1.0.0",
    Namespace = "Oqtane.Modules.MyModule",
    Location = "/path/to/template"
};
```

#### Change Log:

- **Initial Creation**: Added properties for `Name`, `Title`, `Type`, `Version`, `Namespace`, and `Location`.

**[Back to TOC](#table-of-contents)**

---

### **Tenant Model**

The `Tenant` model describes a tenant in Oqtane. Tenants can contain multiple `Site`s and have all their data in a separate database.

#### Properties:

- **TenantId**: ID of the tenant.
- **Name**: Name of the tenant to show in tenant lists.
- **DBConnectionString**: Connection string to access this tenant's database.
- **DBType**: Type of database used by this tenant (new in v2.1.0).
- **Version**: Version of the tenant.

#### Example Usage:

```csharp
var tenant = new Tenant
{
    TenantId = 1,
    Name = "Default Tenant",
    DBConnectionString = "Server=myServer;Database=myTenantDB;User Id=myUser;Password=myPassword;",
    DBType = "SQLServer",
    Version = "1.0.0"
};
```

#### Change Log:

- **Initial Creation**: Added properties for `TenantId`, `Name`, `DBConnectionString`, `DBType`, and `Version`.

**[Back to TOC](#table-of-contents)**

---

### **Theme Model**

The `Theme` model provides information about a theme in Oqtane.

#### Properties:

- **ThemeId**: Reference ID of the theme.
- **ThemeName**: Full namespace/identifier of the theme.
- **Name**: Friendly name to show in the UI.
- **Version**: (Not Mapped) Version of the theme.
- **Owner**: (Not Mapped) Owner of the theme.
- **Url**: (Not Mapped) URL associated with the theme.
- **Contact**: (Not Mapped) Contact information for the theme owner.
- **License**: (Not Mapped) License of the theme.
- **Dependencies**: (Not Mapped) Dependencies required by the theme.
- **ThemeSettingsType**: (Not Mapped) Type of settings for the theme (added in v2.0.2).
- **ContainerSettingsType**: (Not Mapped) Type of settings for the container (added in v2.0.2).
- **PackageName**: (Not Mapped) Name of the package (added in v2.1.0).
- **Resources**: (Not Mapped) List of resources associated with the theme (added in v4.0.0).
- **IsAutoEnabled**: (Not Mapped) Indicates if the theme is auto-enabled (added in v4.0.0).
- **SiteId**: (Not Mapped) Internal site ID.
- **IsEnabled**: (Not Mapped) Indicates if the theme is enabled.
- **AssemblyName**: (Not Mapped) Assembly name of the theme.
- **Themes**: (Not Mapped) List of theme controls.
- **Containers**: (Not Mapped) List of container controls.
- **Template**: (Not Mapped) Template associated with the theme.
- **ThemeControls**: (Obsolete, Not Mapped) Use `Themes` instead.
- **PaneLayouts**: (Obsolete, Not Mapped) Use `Layouts` instead.
- **ContainerControls**: (Obsolete, Not Mapped) Use `Containers` instead.
- **Layouts**: (Obsolete, Not Mapped) List of theme layouts.

#### Example Usage:

```csharp
var theme = new Theme
{
    ThemeId = 1,
    ThemeName = "Oqtane.Themes.Default",
    Name = "Default Theme",
    Version = "1.0.0",
    Owner = "Oqtane Community",
    Url = "https://oqtane.org",
    Contact = "support@oqtane.org",
    License = "MIT",
    Dependencies = "",
    ThemeSettingsType = "DefaultSettings",
    ContainerSettingsType = "DefaultContainerSettings",
    PackageName = "Oqtane.DefaultTheme",
    Resources = new List<Resource>(),
    IsAutoEnabled = true,
    SiteId = 1,
    IsEnabled = true,
    AssemblyName = "Oqtane.DefaultTheme",
    Themes = new List<ThemeControl>(),
    Containers = new List<ThemeControl>(),
    Template = "DefaultTemplate"
};
```

#### Change Log:

- **Initial Creation**: Added properties for `ThemeId`, `ThemeName`, `Name`, `Version`, `Owner`, `Url`, `Contact`, `License`, `Dependencies`, `ThemeSettingsType`, `ContainerSettingsType`, `PackageName`, `Resources`, `IsAutoEnabled`, `SiteId`, `IsEnabled`, `AssemblyName`, `Themes`, `Containers`, `Template`, `ThemeControls`, `PaneLayouts`, `ContainerControls`, and `Layouts`.

**[Back to TOC](#table-of-contents)**

---

### **ThemeControl Model**

The `ThemeControl` model provides information about a theme control within the Oqtane framework.

#### Properties:

- **TypeName**: Type name of the theme control.
- **Name**: Friendly name of the theme control.
- **Thumbnail**: URL or path to the thumbnail image of the theme control.
- **Panes**: Information about the panes in the theme control.

#### Example Usage:

```csharp
var themeControl = new ThemeControl
{
    TypeName = "Oqtane.Themes.Default.DefaultTheme",
    Name = "Default Theme",
    Thumbnail = "/images/default-theme-thumbnail.png",
    Panes = "ContentPane, SidePane"
};
```

#### Change Log:

- **Initial Creation**: Added properties for `TypeName`, `Name`, `Thumbnail`, and `Panes`.

**[Back to TOC](#table-of-contents)**

---

### **UrlMapping Model**

The `UrlMapping` model describes a URL mapping in Oqtane.

#### Properties:

- **UrlMappingId**: ID of this URL mapping.
- **SiteId**: Reference to a `Site`.
- **Url**: A fully qualified URL.
- **MappedUrl**: A URL to which the visitor will be redirected.
- **Requests**: Number of requests all time for the URL.
- **CreatedOn**: Date when the URL was first requested for the site.
- **RequestedOn**: Date when the URL was last requested for the site.

#### Example Usage:

```csharp
var urlMapping = new UrlMapping
{
    UrlMappingId = 1,
    SiteId = 1,
    Url = "https://example.com/old-url",
    MappedUrl = "https://example.com/new-url",
    Requests = 100,
    CreatedOn = DateTime.UtcNow.AddMonths(-6),
    RequestedOn = DateTime.UtcNow
};
```

#### Change Log:

- **Initial Creation**: Added properties for `UrlMappingId`, `SiteId`, `Url`, `MappedUrl`, `Requests`, `CreatedOn`, and `RequestedOn`.

**[Back to TOC](#table-of-contents)**

---

### **User Model**

The `User` model describes a user in Oqtane.

#### Properties:

- **UserId**: ID of the user.
- **Username**: Username used for login.
- **DisplayName**: Name shown in menus and dialogs.
- **Email**: User's email address.
- **PhotoFileId**: Reference to a `File` containing the user's photo.
- **LastLoginOn**: Timestamp of the user's last login.
- **LastIPAddress**: IP address when the user last logged in.
- **TwoFactorRequired**: Indicates if the user requires 2-factor authentication to sign in.
- **TwoFactorCode**: Stores the 2-factor verification code.
- **TwoFactorExpiry**: Expiry date and time for the 2-factor verification code.
- **SecurityStamp**: (Not Mapped) A token indicating if a user's security properties have been modified.
- **SiteId**: (Not Mapped) Reference to the `Site` this user belongs to.
- **Roles**: (Not Mapped) Semi-colon delimited list of role names for the user.
- **DeletedBy**: (IDeletable) The user who deleted this user.
- **DeletedOn**: (IDeletable) Date when the user was deleted.
- **IsDeleted**: (IDeletable) Indicates if the user is deleted.
- **Password**: (Not Mapped) The user's password (not plaintext).
- **IsAuthenticated**: (Not Mapped) Indicates if the user is authenticated.
- **FolderPath**: (Not Mapped) Path name of the user's personal folder.
- **EmailConfirmed**: (Not Mapped) Indicates if the user's email address is confirmed.
- **SuppressNotification**: (Not Mapped) Indicates if new user should be notified by email.
- **Settings**: (Not Mapped) Public user settings.

#### Example Usage:

```csharp
var user = new User
{
    UserId = 1,
    Username = "john.doe",
    DisplayName = "John Doe",
    Email = "john.doe@example.com",
    PhotoFileId = null,
    LastLoginOn = DateTime.UtcNow,
    LastIPAddress = "192.168.1.1",
    TwoFactorRequired = true,
    TwoFactorCode = "123456",
    TwoFactorExpiry = DateTime.UtcNow.AddMinutes(10),
    SecurityStamp = "XYZ",
    SiteId = 1,
    Roles = "Admin;User",
    DeletedBy = null,
    DeletedOn = null,
    IsDeleted = false,
    Password = null,
    IsAuthenticated = true,
    EmailConfirmed = true,
    SuppressNotification = false,
    Settings = new Dictionary<string, string> { { "Theme", "Dark" } }
};

// Accessing FolderPath
string folderPath = user.FolderPath; // returns "Users/1/"
```

#### Change Log:

- **Initial Creation**: Added properties for `UserId`, `Username`, `DisplayName`, `Email`, `PhotoFileId`, `LastLoginOn`, `LastIPAddress`, `TwoFactorRequired`, `TwoFactorCode`, `TwoFactorExpiry`, `SecurityStamp`, `SiteId`, `Roles`, `DeletedBy`, `DeletedOn`, `IsDeleted`, `Password`, `IsAuthenticated`, `FolderPath`, `EmailConfirmed`, `SuppressNotification`, and `Settings`.

**[Back to TOC](#table-of-contents)**

---

### **UserRole Model**

The `UserRole` model assigns a `Role` to a `User`.

#### Properties:

- **UserRoleId**: ID of this assignment.
- **UserId**: Reference to the `User` who receives this `Role` assignment.
- **RoleId**: Reference to the `Role` which the `User` receives.
- **EffectiveDate**: Start date of when this assignment is valid.
- **ExpiryDate**: End date of when this assignment is valid.
- **IgnoreSecurityStamp**: (Not Mapped) Indicates that the User Security Stamp should not be updated when this user role is added or updated.
- **Role**: Direct reference to the `Role` object.
- **User**: Direct reference to the `User` object.

#### Example Usage:

```csharp
var userRole = new UserRole
{
    UserRoleId = 1,
    UserId = 10,
    RoleId = 2,
    EffectiveDate = DateTime.UtcNow,
    ExpiryDate = DateTime.UtcNow.AddYears(1),
    IgnoreSecurityStamp = false,
    Role = new Role { RoleId = 2, Name = "Admin" },
    User = new User { UserId = 10, Username = "john.doe" }
};
```

#### Change Log:

- **Initial Creation**: Added properties for `UserRoleId`, `UserId`, `RoleId`, `EffectiveDate`, `ExpiryDate`, `IgnoreSecurityStamp`, `Role`, and `User`.

**[Back to TOC](#table-of-contents)**

---

### **UserValidateResult Model**

The `UserValidateResult` model represents the result of validating a user within the Oqtane framework.

#### Properties:

- **Succeeded**: Indicates whether the validation succeeded.
- **Errors**: Dictionary containing error messages, if any, with the key as the error field and the value as the error message.

#### Example Usage:

```csharp
var userValidateResult = new UserValidateResult
{
    Succeeded = true,
    Errors = new Dictionary<string, string>
    {
        { "Email", "Invalid email format" },
        { "Password", "Password must be at least 6 characters long" }
    }
};
```

#### Change Log:

- **Initial Creation**: Added properties for `Succeeded` and `Errors`.

**[Back to TOC](#table-of-contents)**

---

### **Visitor Model**

The `Visitor` model describes a visitor in Oqtane.

#### Properties:

- **VisitorId**: ID of this visitor.
- **SiteId**: Reference to a `Site`.
- **UserId**: Reference to a `User`, if applicable.
- **Visits**: Number of times a visitor has visited the site.
- **IPAddress**: Last recorded IP address of the visitor.
- **UserAgent**: Last recorded user agent of the visitor.
- **Language**: Last recorded language of the visitor.
- **Url**: Last recorded URL of the visitor.
- **Referrer**: Last recorded referrer of the visitor.
- **CreatedOn**: Date the visitor first visited the site.
- **VisitedOn**: Date the visitor last visited the site.
- **User**: Direct reference to the `User` object, if applicable.

#### Example Usage:

```csharp
var visitor = new Visitor
{
    VisitorId = 1,
    SiteId = 1,
    UserId = 10,
    Visits = 5,
    IPAddress = "192.168.1.1",
    UserAgent = "Mozilla/5.0",
    Language = "en-US",
    Url = "https://example.com",
    Referrer = "https://google.com",
    CreatedOn = DateTime.UtcNow.AddMonths(-3),
    VisitedOn = DateTime.UtcNow,
    User = new User { UserId = 10, Username = "john.doe" }
};
```

#### Change Log:

- **Initial Creation**: Added properties for `VisitorId`, `SiteId`, `UserId`, `Visits`, `IPAddress`, `UserAgent`, `Language`, `Url`, `Referrer`, `CreatedOn`, `VisitedOn`, and `User`.

**[Back to TOC](#table-of-contents)**

---
