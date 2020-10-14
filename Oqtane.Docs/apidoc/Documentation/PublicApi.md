---
uid: Oqtane.Documentation.PublicApi
---

If you attach this attribute to a class like this:

```cs
[PublicApi]
public class YourClass {

}
```
or like this

```cs
[PublicApi("This is stable code")]
public class YourClass {

}
```

It will result in this class, method etc. to be publicly documented in the docs.oqtane.org.

If you want the entire class to be documented, just add this to the class. 
To exclude certain methods or properties add a [](xref:Oqtane.Documentation.PrivateApi), InternalApi or WorkInProgress attribute. 