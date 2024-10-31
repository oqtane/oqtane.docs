# Search Manual

This document describes the Search module, settings, and configuration for administrators to set up effective search functionality across their Oqtane site.

## Overview

The **Search** feature allows users to locate relevant content quickly across the site. Through scheduled indexing, the Search service keeps the content index updated. The following sections cover search settings, scheduling, and customization options for the administrator.

---

## Search Settings

Administrators can configure the Search module through **Host > Search Settings**. Below are explanations for each setting:

| **Setting**                | **Description**                                                                                                                                                                |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Search Provider**        | Specifies the provider responsible for indexing and retrieving search results. Example: `DatabaseSearchProvider`.                                                              |
| **Enabled**                | Toggles the search feature on or off. When set to `Yes`, the site content is regularly indexed, and search queries return up-to-date results.                                  |
| **Last Indexed**           | Displays the last date and time the site was indexed. This helps administrators know the freshness of indexed data in search results.                                          |
| **Ignore Pages**           | A list of pages excluded from indexing. Prevents certain content from appearing in search results, e.g., pages with sensitive or irrelevant content.                           |
| **Ignore Entities**        | Specifies types of entities to exclude from indexing, such as `Modules` or `Users`.                                                                                            |
| **Word Length**            | Defines the minimum character length for words indexed in search results. Only words meeting or exceeding this length will be indexed.                                         |
| **Ignore Words**           | Commonly ignored words in search queries (e.g., "and," "the"). This list helps refine search results by avoiding indexing or returning results for these words.                |

---

## Search Components

### Search.resx File

The `.resx` file includes localization data for search terms and placeholders in the search UI. Examples include:

```xml
<data name="Search" xml:space="preserve">
    <value>Search</value>
</data>
<data name="SearchPlaceHolder" xml:space="preserve">
    <value>Search</value>
</data>
