
# Run Oqtane Docs Locally

The generated docs are static pages and contain various JavaScripts to provide menu and search functionality. 
These do not work, if you just open the `index.html` in a browser. 
So you need to run it in a local IIS to fully test it. 

This is how you can set it up:

<iframe src="https://azing.org/oqtane/r/RGNE-ePH?embed=1" width="100%" height="400" frameborder="0" allowfullscreen style="box-shadow: 0 1px 3px rgba(60,64,67,.3), 0 4px 8px 3px rgba(60,64,67,.15)"></iframe>

## Warning about Caching

The navigation / menus in docfx use JavaScript, so you'll sometimes see an old cached menu on your local system. Just activate F12 and disable cache to ensure that you're always viewing the latest build. 