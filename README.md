# Oqtane Docs Builder

This project generates the documentation for Oqtane using [docfx](https://dotnet.github.io/docfx/).

It's explained in detail on https://docs.oqtane.org/articles/documentation/

## Setup

To set everything up, do the following:

In some folder (like `c:\projects\oqtane`) pull this repo and also the oqtane.framework. You should then have something like

* some-root\oqtane.docs
* some-root\oqtane.framework

## Run with Visual Studio

Open the `Oqtane Docs Builder.sln` solution in this folder and just rebuild everything. 

The final docs are generated into the `/docs` folder.

## Test locally

As some of the stuff needs JS which only runs well from HTTP, you should setup IIS to publish the `/docs` folder on any domain you want - like `docs.oqtane.me`. 


## Publish

When you push back this repo github will automatically publish the updated documentation. 