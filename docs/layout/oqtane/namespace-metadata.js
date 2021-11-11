// Metadata decorators which will affect how something with this
// priority is shown in the output. It affects the color and emojis shown
// The emojis which appear are configured in the CSS file

const isWeb = { priority: 'web' };
const isInternal = { priority: 'internal' };
const isDocumentation = { priority: 'documentation' };
const isData = { priority: 'data' };
const isTheme = { priority: 'theme' };

const isModule = { priority: 'module' };
const isImplementation = { priority: 'implementation' };

exports.data = {
  "Oqtane": isInternal,
  "Oqtane.Client": isInternal,
  "Oqtane.Database.MySQL": isInternal,
  "Oqtane.Database.PostgreSQL": isInternal,
  "Oqtane.Database.Sqlite": isInternal,
  "Oqtane.Database.SqlServer": isInternal,
  "Oqtane.Databases": isInternal,
  "Oqtane.Databases.Interfaces": isInternal,

  "Oqtane.Documentation": isDocumentation,
  "Oqtane.Controllers": isWeb,
  "Oqtane.Enums": isInternal,
  "Oqtane.Extensions": isInternal,
  "Oqtane.Infrastructure": isInternal,
  "Oqtane.Interfaces": isInternal,
  "Oqtane.Migrations": isInternal,
  "Oqtane.Migrations.EntityBuilders": isInternal,
  "Oqtane.Migrations.Framework": isInternal,
  "Oqtane.Migrations.Master": isInternal,
  "Oqtane.Migrations.Tenant": isInternal,
  "Oqtane.Models": isData,
  "Oqtane.Modules": isModule,
  "Oqtane.Modules.Admin.ModuleCreator": isInternal, // isModule,
  "Oqtane.Modules.Controls": isModule,
  "Oqtane.Modules.HtmlText": isImplementation,
  "Oqtane.Modules.HtmlText.Controllers": isImplementation,
  "Oqtane.Modules.HtmlText.Manager": isImplementation,
  "Oqtane.Modules.HtmlText.Migrations": isImplementation,
  "Oqtane.Modules.HtmlText.Migrations.EntityBuilders": isImplementation,
  "Oqtane.Modules.HtmlText.Models": isImplementation,
  "Oqtane.Modules.HtmlText.Repository": isImplementation,
  "Oqtane.Modules.HtmlText.Services": isImplementation,
  "Oqtane.Oqtane.Client.Tests": isInternal,
  "Oqtane.Pages": isData,
  "Oqtane.Repository": isData,
  "Oqtane.Repository.Databases.Interfaces": isInternal,
  "Oqtane.SiteTemplates": isImplementation,
  "Oqtane.Server": isInternal,
  "Oqtane.Themes": isTheme,
  "Oqtane.Themes.BlazorTheme": isImplementation,
  "Oqtane.Themes.Controls": isTheme,
  "Oqtane.Themes.OqtaneTheme": isImplementation,
  "Oqtane.UI": isTheme,
}

exports.priorityNormal = 'normal';
