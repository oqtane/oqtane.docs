# Oqtane Documentation Conventions

The following conventions should help all docs contributors work together.

## Images / Files / Assets

When using files, especially images, please follow these conventions.

### 1. Remember: Case Sensitive when Hosted

Be aware that the final docs will be hosted on github, which is case-sensitive.

1. So `MyImage.png` and `myimage.png` are different files
1. This is important when you're linking to files
1. Always use lower-case file names

> [!NOTE]
> If you accidentally get this wrong (eg. `MyImage.png`), and linking `myimage.png`
> it will work on your IIS/Windows, but not when finally hosted on Github.

### 2. Put Files Close to Where They Are Used

Put all files in the `assets` folder below the page where they are used.  

1. This makes it easier to find the files when you're editing the page.
1. It also makes it easier to move the page to a different location.
1. This also helps to "see" when files are not used any more.
1. Only use files in the "own" asset folder.
1. Don't use files from far-away asset folders.

### 3. Use Relative Paths

1. `./assets/myimage.png` or `assets/myimage.png`
1. Rarely `../assets/myimage.png` (only if you're in a sub-folder),
   but the file is still part of the same topic and should be reused

### 4. Creativity and Contribution
There’s no hard and fast rule about how you create or edit images and videos. Any contribution is welcome. Feel free to use tools that you’re comfortable with. For instance, Windows Screen Snippet is a fast and easy tool for creating and saving files. Remember, the goal is to make the documentation as clear and helpful as possible.

