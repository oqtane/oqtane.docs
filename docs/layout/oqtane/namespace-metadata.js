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
  "Oqtane.Documentation": isDocumentation,
  "Oqtane.Controllers": isWeb,
  "Oqtane.Enums": isInternal,
  "Oqtane.Extensions": isInternal,
  "Oqtane.Infrastructure": isInternal,
  "Oqtane.Models": isData,
  "Oqtane.Modules": isModule,
  "Oqtane.Modules.Admin.ModuleCreator": isModule,
  "Oqtane.Modules.Controls": isModule,
  "Oqtane.Modules.HtmlText": isImplementation,
  "Oqtane.Modules.HtmlText.Controllers": isImplementation,
  "Oqtane.Modules.HtmlText.Manager": isImplementation,
  "Oqtane.Modules.HtmlText.Models": isImplementation,
  "Oqtane.Modules.HtmlText.Repository": isImplementation,
  "Oqtane.Modules.HtmlText.Services": isImplementation,
  "Oqtane.Pages": isData,
  "Oqtane.Repository": isData,
  "Oqtane.Server": isInternal,
  "Oqtane.Themes": isTheme,
  "Oqtane.Themes.BlazorTheme": isImplementation,
  "Oqtane.Themes.Controls": isTheme,
  "Oqtane.Themes.OqtaneTheme": isImplementation,
  "Oqtane.UI": isTheme,
}

exports.priorityNormal = 'normal';
