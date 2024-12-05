---
uid: Oqtane.Documentation.PrivateApi
---

If you attach this attribute to a class like this:

```cs
[PrivateApi]
public class YourClass {

}
```
or like this

```cs
[PrivateApi("Reason why the API should remain private")]
public class YourClass {

}
```

or in combination with [](xref:Oqtane.Documentation.PublicApi)

```cs
[PublicApi]
public class YourClass {
	public string Name;

	[PrivateApi("Don't publish this - should only be used internally")]
	public string InternalSpecialName;
}
```


It will result in this class, method etc. to _not_ be documented in the docs.oqtane.org.
