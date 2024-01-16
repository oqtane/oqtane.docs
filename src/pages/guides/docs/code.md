
# Documenting Code

## Basic Documentation

For starters, you will add normal documentation with `/// <summary>` tags to your code, like this:

```cs
/// <summary>
/// Constructor which does xyz
/// </summary>
/// <param name="id">the id</param>
public MyMethod(int id) { }
```

All this is automatically picked up and converted to documentation. 

## Adding Extensive Documentation

Let's assume you have a class `Oqtane.Example.MyClass` and you would like to add images and a lot of markdown to explain what it does. This is your code:

```cs
/// <summary>
/// This class does something
/// </summary>
public class MyClass
{

}
```

Now go to the documentation project `Oqtane.Docs` in the solution and open the `apidoc\Example` folder (create it, if it doesn't exist yet'). 
In this, create a `MyClass.md` file which contains this

```md
---
uid: Oqtane.Example.MyClass
---

Here is some **great** additional [Information](https://oqtane.org).

1. Do this
1. Then that

```

Because you have the `uid: ...` header in your file, docfx will now combine these documentations in the output. 
You can also add images, html, or whatever you need. 

You can also find examples of this merge in the `apidoc\Documentation\PublicApi.md` file. 


## Documenting Namespaces

It's usually very helpful to document what a namespace does. 
Using the same mechanism with the `uid: ` you can create markdown files which will show extensive instructions. 

Check out the `apidoc\Documentation\index.md` file for an example. 