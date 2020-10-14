---
uid: Oqtane.Documentation
---

This namespace contains attributes like `PublicApi` which mark code as public, private, internal, etc. 
Depending on what attributes you add to your code it will appear in the generated docs - and possibly have a warning or something attached. 

Typical use:

```cs
[PublicApi]
public class YourClass {
	// this will be documented without any special comments
	// because we're not using the <summary> tag
	public string Name;

    /// <summary>
    /// This will be documented with this text in the summary
    /// </summary>
	public string Something;

    /// <summary>
	/// This won't appear in the public documentation
    /// </summary>
	[PrivateApi("Don't publish this - should only be used internally")]
	public string InternalSpecialName;

    /// <summary>
	/// This will appear in the docs, but the Work-In-Progress will be clearly visible
    /// </summary>
	[WorkInProgressApi("We're not done yet, may change")]
	public string NotDoneYet;

    /// <summary>
	/// This will appear in the docs, but with a warning
    /// </summary>
	[InternalApi_DoNotUse_MayChangeWithoutNotice("This may help you, but please don't use it")]
	public string YouShouldKnowAboutThisButNotUseIt;
}
```