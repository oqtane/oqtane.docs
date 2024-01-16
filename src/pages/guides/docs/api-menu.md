
# How the API-Navigation (TOC) Works

The API navigation can be quite tricky, because the default docfx behavior results in a very hard-to-use TOC-menu on the side. 
Because of this, we use a special trick where a javascript in `layout\oqtane\toc.extension.js` optimizes the names based on some rules. 

Here's what it does

1. The prefix `Oqtane.` is removed by default (unless that's all there is)
1. If the remaining namespace has more than 2 parts, it will be truncated with a prefix `...` to make it fit better 😎
1. In addition, it looks up if the namespace has metadata (in the `namespace-metadata.js`) to give it better colors and icons.
