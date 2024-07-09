---
uid: Manuals.HowTo.Restart.Index
---

# How To Restart Oqtane

There are a few scenarios where you will want to restart Oqtane.
The most common is after installing/updating an extension.

The process is different depending on if you are running
Oqtane from Visual Studio (while developing) or if you are
running in production (typically in IIS).

## Restart Oqtane in Production

Go to `/admin/system` and hit Restart...

<img src="./assets/production-system-info-with-restart-button.jpg" class="full-width">

...confirm your choice...

<img src="./assets/production-confirm-restart.jpg" class="full-width">

...and wait for it to restart.

<img src="./assets/production-wait-for-restart.jpg" class="full-width">

## Restart Oqtane in Development Mode

If you try to restart Oqtane from the **System** dialog during development,
it will only shut down Oqtane, since Visual Studio will terminate the process.
So you can use the steps above to stop Oqtane, but this makes more sense:

Stop Oqtane in Visual Studio:

<img src="./assets/dev-stop-oqtane.jpg" class="full-width">

...then start it again:

<img src="./assets/dev-start-oqtane.jpg" class="full-width">

## Manually Force-Restart Oqtane

In special scenarios - e.g. in production when Oqtane crashes,
you may want to force-restart Oqtane.

The simplest method to do this is to open the `web.config` and save it again.
This will restart Oqtane.
