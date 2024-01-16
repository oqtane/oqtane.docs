
# How the Documentation System Works

The initial configuration starts with the `docfx.json` file. 
Basically this says what code it should pick up, where the `.md` files are and where to put the output. 
We've tried to make it very clear where we made relevant changes and smuggled comment-nodes into the file for clarity. 

## Layout

The layout is configured in the `docfx.json` where it will 
start with the `default` template, extend it with `statictoc` (generate real html menu-structures, not just JS) 
and then apply the layout specified in `layout\oqtane`. 
It will also include images in `layout\images` like logos etc. because this was configured in `docfx.json`.

## Site Navigation

The site navigation is cascaded through the `toc.yml` files in each folder. 

> [!TIP]
> You may also find examples online which use `toc.md` files
> but you'll run into requirements that will force you to switch back to YAML.
> So we recommend you stick to the yaml format everywhere. 

## What Code is included in the Docs

1. The initial set is configured in the `docfx.json` with the base path `cwd` and include/filter files. 
1. Then we have a few basic rules, which are all configured in the `filterConfig.yml` file. 
    1. Ignore all `Microsoft.*`, `System.*` and `Oqtane.Test.*` namespaces


## Troubleshooting

### Problems with MSBuild or .net SDK
Docfx runs MSBuild to compile the projects it finds. 
This can easily cause trouble if your Dev-PC has been through various versions of Visual-Studio. 
If you need to troubleshoot this, best contact iJungleboy on Github. 

### Problems with Old / Unexpected Results

MSBuild will compile everyting into the `obj` folder of this docs-project. 
This is used as a cache for the next builds. If you run into unexpected results, always clean out the `obj` folder first. 

### Problems with Github links

Docfx automatically links all the auto-generated docs with the git-repo. So make sure that the `oqtane.framework` is pulled from the official location `https://github.com/oqtane/oqtane.framework` - otherwise the links will point to another repo. 