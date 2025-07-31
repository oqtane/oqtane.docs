# Install Oqtane as CMS - Walkthrough for Developers

This demonstrates a step-by-step walkthrough to install Oqtane on your local development machine.
It shows both how to get it running in Visual Studio, as well as installing the extension CMS module 2sxc.

## Prerequisites

This assumes that you have the following software installed on your machine:

* [Visual Studio](https://visualstudio.microsoft.com) latest version
* [.NET Core SDK](https://dotnet.microsoft.com) latest version
* [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

If you need guidance on installing any of these prerequisites, refer to the links above.

## Video

Most of what you see here is also available in a video format.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dOD0gjvlGoc?si=fxP5GrDqebslRKbr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 1. Install Oqtane

These slides start by running

```bash
git clone -b master https://github.com/oqtane/oqtane.framework.git
```

to get the latest build, then

1. open the solution in Visual Studio
2. make minor adjustments
3. compile it
4. run it
5. specify the database connection etc.
6. let the installation run
7. login as super user

<div gallery="gallery01">
  <img src="./assets/121 Get from Github.jpg">
  <img src="./assets/200 Compile Oqtane.jpg">
  <img src="./assets/201 Disable HotReload.jpg">
  <img src="./assets/211 Oqtane Settings.jpg">
  <img src="./assets/211 Oqtane Installing.jpg">
  <img src="./assets/291 Oqtane Installed.jpg">
  <img src="./assets/292 Login as Super User.jpg">
  <img src="./assets/293 Oqtane Logged In.jpg">
</div>

## 2. Install the CMS Extension Module 2sxc

> [!IMPORTANT]
> .net 8 introduced a HotReload feature which causes trouble in development.
> Make sure you [disable it using these instructions](https://docs.2sxc.org/abyss/platforms/oqtane/install-issue-hot-reload.html).

These slides show how to install the 2sxc module, which is a powerful content management system (CMS) for Oqtane.

<div gallery="gallery02">
  <img src="./assets/311 Go to Modules - Open Menu.jpg">
  <img src="./assets/312 Go to Modules - Admin Dashboard.jpg">
  <img src="./assets/313 Go to Modules - Module Management.jpg">
  <img src="./assets/321 Install Module Start.jpg">
  <img src="./assets/322 Select Module.jpg">
  <img src="./assets/323 Accept Module License.jpg">
  <img src="./assets/324 Installed.jpg">
  <img src="./assets/331 Restart Oqtane.jpg">
  <img src="./assets/332 Confirm Restart.jpg">
  <img src="./assets/333 Restarting.jpg">
  <img src="./assets/334 Restart in Visual Studio.jpg">
</div>


## 3. Install the Default Content Configuration

These slides show how to install the default content configuration for the 2sxc module.

The **content configuration** basically tells the system
what kinds of content exist (e.g. videos, text/images, etc.)
and how they are presented to the end-user.

<div gallery="gallery03">
  <img src="./assets/341 Add Page.jpg">
  <img src="./assets/342 New Page Name and Permissions.jpg">
  <img src="./assets/351 Add Content Module.jpg">
  <img src="./assets/361 Install 2sxc Content Package.jpg">
  <img src="./assets/362 Install 2sxc Content Package - Confirm.jpg">
  <img src="./assets/363 Install 2sxc Content Package - Installing.jpg">
  <img src="./assets/364 Install 2sxc Content Package - Complete.jpg">
</div>

Once it's installed, you can verify it works by trying to add content.

<div gallery="gallery04">
  <img src="./assets/371 2sxc Select Content Type.jpg">
  <img src="./assets/372 2sxc Preview Content Type.jpg">
  <img src="./assets/373 2sxc Content Added.jpg">
</div>

## 4. Add an App

Apps are packages of functionality which can be added to your Oqtane installation.
Typical examples are Blog, News, Galleries, Swipers, Real-Estate-Listings, etc.

<div gallery="gallery05">
  <img src="./assets/411 Add App.jpg">
  <img src="./assets/421 App Auto-Installer - Select.jpg">
  <img src="./assets/422 App Auto-Installer - Confirm.jpg">
  <img src="./assets/423 App Auto-Installer - Installing.jpg">
  <img src="./assets/424 App Auto-Installer - Complete.jpg">
</div>


## Related Pages

[← Back to Installation Home](index.md)
