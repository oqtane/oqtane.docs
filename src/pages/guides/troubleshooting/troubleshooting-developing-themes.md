# Troubleshooting Developing Themes

## Overview

This guide provides troubleshooting steps for common issues developers may encounter when creating, modifying, or debugging themes in the Oqtane Framework. Themes control the look and feel of the site, and issues related to theme development can affect the user experience and functionality. The troubleshooting steps below address some of the most common problems faced by theme developers.

---

## 1. Theme Not Displaying Correctly

**Symptoms**: After activating the theme, the site displays with default styles or fails to load the theme correctly.

**Solution**:
- **Check Theme Files**: Ensure that the theme files (CSS, JavaScript, images, etc.) are correctly located in the theme directory and are properly referenced in the theme's `.cshtml` files. Any missing or misreferenced files can cause the theme to load incorrectly.
- **Clear Cache**: Sometimes, changes may not appear due to cached assets. Clear both the browser cache and the Oqtane cache by going to the control panel and refreshing the page.
- **Validate Theme Settings**: Ensure the correct theme is set in the Oqtane control panel. If a different theme is activated, it may override your changes.
- **Check for Errors**: Review the browser console and server logs for any errors that might indicate missing files or issues with theme-related scripts or styles.

---

## 2. Theme Styles Not Applied

**Symptoms**: The theme loads but the styles do not apply as expected.

**Solution**:
- **Check CSS References**: Verify that the CSS files are correctly linked in the layout files (e.g., `_Host.cshtml`). Ensure the paths to the CSS files are correct, and check that they are being loaded in the page's `<head>` section.
- **Validate CSS Rules**: Ensure there are no conflicting or overridden styles. Use browser developer tools to inspect the page and check whether the CSS rules are being applied to elements as intended.
- **Check for Specificity Issues**: If your styles are not being applied, it could be due to CSS specificity. Review the order of CSS rules and make sure that your custom styles are more specific than the default styles or are being loaded after them.

---

## 3. JavaScript Not Working

**Symptoms**: JavaScript functionality (e.g., interactive elements) does not work after applying the theme.

**Solution**:
- **Check Console for Errors**: Open the browser’s developer console and look for any JavaScript errors. These could provide clues about why the script isn't running, such as missing files or syntax issues.
- **Check Script References**: Ensure JavaScript files are correctly linked in the layout (`_Host.cshtml`). Verify that they are loaded in the right order, as some libraries may depend on others (e.g., jQuery needs to be loaded before Bootstrap).
- **Check for jQuery Conflicts**: If you're using jQuery, ensure there are no conflicts with other JavaScript libraries. For example, a newer version of jQuery might conflict with older plugins or vice versa.

---

## 4. Theme Layout Issues

**Symptoms**: The theme layout breaks on different screen sizes, or the content does not appear as expected.

**Solution**:
- **Responsive Design**: Ensure that your theme's CSS includes responsive design rules (e.g., media queries). This ensures that the layout adapts to different screen sizes and devices.
- **Check Layout Files**: Review your theme’s layout files (e.g., `_Layout.cshtml`) for issues with the grid system, container elements, or view sections that could be causing layout issues.
- **Browser Compatibility**: Test your theme in different browsers to ensure cross-browser compatibility. Some CSS or JavaScript features may not be supported in older versions of certain browsers.
- **Use Browser Developer Tools**: Use developer tools in the browser to test different screen sizes and identify issues with the layout or design.

---

## 5. Theme Assets Not Loading

**Symptoms**: Images, fonts, or other assets are missing or not loading after activating the theme.

**Solution**:
- **Check File Paths**: Ensure that the paths to images, fonts, and other assets are correct. If you're using relative paths, verify they are correct based on the folder structure.
- **Permissions**: Check that the server has the proper permissions to serve static assets (e.g., images, fonts, JS files).
- **Browser Console Errors**: Review the browser console for errors related to missing assets. These errors can provide the exact paths that are broken, allowing you to correct them.
- **Check for CORS Issues**: If your theme uses assets hosted on a different domain (e.g., CDNs), ensure that cross-origin resource sharing (CORS) is configured correctly on the server.

---

## 6. Performance Issues

**Symptoms**: The theme causes the site to load slowly or have performance issues.

**Solution**:
- **Optimize Images**: Ensure that images are optimized for web use. Large, unoptimized images can significantly slow down the page load time.
- **Minify CSS and JavaScript**: Minify and bundle your CSS and JavaScript files to reduce the number of HTTP requests and the size of each file.
- **Lazy Load Images**: For images that are below the fold or not immediately visible, consider implementing lazy loading to defer their loading until they are needed.
- **Check for Heavy Scripts**: Review your JavaScript files to ensure they are efficient and don't contain any blocking or resource-heavy operations that might impact performance.

---

## 7. Custom Theme Components Not Rendering

**Symptoms**: Custom components (e.g., widgets or dynamic content) do not appear or render incorrectly within the theme.

**Solution**:
- **Check for Rendering Errors**: Inspect the browser console for any rendering errors. Missing or incorrectly configured components will usually throw errors that can guide you to the root cause.
- **Verify Component Registration**: Ensure your custom components are correctly registered in the Oqtane module or layout file.
- **Ensure Correct Model Binding**: If your custom component requires data binding, ensure the model is being correctly passed from the controller or view.

---

## 8. Theme Compatibility with Oqtane Updates

**Symptoms**: The theme breaks or doesn't work as expected after updating Oqtane.

**Solution**:
- **Check Release Notes**: Review the Oqtane release notes for any breaking changes or updates to the theme framework that might affect your theme. Pay attention to changes in the layout or module system.
- **Update Theme Files**: If necessary, update your theme to be compatible with the new Oqtane version. This could involve adjusting CSS, JavaScript, or layout files to align with changes introduced in newer Oqtane versions.
- **Test in Development**: Before applying updates in production, test your theme in a development environment to ensure everything works as expected with the latest version of Oqtane.

---

## Conclusion

By following the troubleshooting steps outlined in this guide, you should be able to resolve most common issues encountered when developing or maintaining themes in Oqtane Framework. For issues that persist, consider seeking help from the Oqtane community or support channels for further assistance.
