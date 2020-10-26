
# Oqtane Concepts: DLL Handling

How / Why DLLs are loaded into memory:

- the .NET Core philosophy is to only load the specific assemblies an app needs ( to reduce startup time and memory )
- by default .NET Core will only load assemblies statically linked to the main app - it will not load every DLL in the /bin
- it will not load Oqtane module/theme DLLs as these are dynamically linked
- therefore Oqtane needs to manually load its modules/themes
- in order to do this it needs to be able to quickly identify the DLLs
- the only option available is via filename, as any other approach requires reflection which consumes startup time/processing and memory
- the convention is that the filename must contain `oqtane`
- once the required DLLs are loaded into the AppDomain, subsequent operations for assemblies can use the AppDomain rather than the file system
- the majority of assemblies in the AppDomain are not relevant to Oqtane
- reflection is expensive so we should only use reflection on assemblies which are actually relevant to Oqtane
- assembly fullname is same as DLL filename, so we can look for the `oqtane` qualifier to identify Oqtane assemblies
