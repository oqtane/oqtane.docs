# Oqtane Framework - Server Events (Webhooks)

## Overview

Webhooks allow the Oqtane Framework to notify consumers of the API when data changes occur. This guide provides an overview of how to implement and use webhooks in Oqtane.

## Community Suggestions

### Module Creation

One suggestion is to create a module with a configuration page where users can supply a URL. A job can be registered to fire when needed to notify users of data changes.

### IEventSubscriber

Another suggestion is to utilize `IEventSubscriber`. Oqtane raises events for all major actions, allowing you to create a subscriber to consume these events and POST them to a webhook.

## Server-Side Events

### Introduction

Oqtane 3.1 introduced the `INotifyPropertyChanged` concept for raising events within client-side Razor components. This method works well for creating rich, dynamic user interfaces. However, server-side events required a different approach.

### SyncManager

Oqtane includes a `SyncManager` on the server, traditionally used to synchronize specific server-side events with client-side state. This ensures that client-side caches remain consistent in a multi-user environment.

### Event Handling in Oqtane 3.2.1

In Oqtane 3.2.1, the ability to consume server-side events raised by the core framework was introduced using the standard .NET `EventHandler` in conjunction with the `SyncManager` to raise `SyncEvents`.

### IHostedServices

Server-side event handling can be challenging due to the short-lived nature of most services (scoped or transient). `IHostedServices` are ideal for this purpose as they run in the background for the lifetime of the application. However, they do not support standard dependency injection for scoped services, requiring additional effort for instantiation.

### EventDistributorHostedService in Oqtane 4.0

In Oqtane 4.0, a new interface, `IEventSubscriber`, was introduced, containing the `EntityChanged(SyncEvent syncEvent)` method. The `EventDistributorHostedService` captures all server events raised by the framework, calling every known implementation of `IEventSubscriber` and passing the `SyncEvent`.

### Example: Capturing File Download Event

```csharp
public class FileDownloadEventSubscriber : IEventSubscriber
{
    private readonly IServiceScopeFactory _serviceScopeFactory;

    public FileDownloadEventSubscriber(IServiceScopeFactory serviceScopeFactory)
    {
        _serviceScopeFactory = serviceScopeFactory;
    }

    public void EntityChanged(SyncEvent syncEvent)
    {
        if (syncEvent.EntityName == EntityNames.File && syncEvent.Action == "Download")
        {
            using (var scope = _serviceScopeFactory.CreateScope())
            {
                // create scoped services
                var tenantManager = scope.ServiceProvider.GetRequiredService<TenantManager>();
                var fileRepository = scope.ServiceProvider.GetRequiredService<FileRepository>();

                // set tenant
                tenantManager.SetTenant(syncEvent.TenantId);

                // get file and perform actions
                var file = fileRepository.GetFile(syncEvent.EntityId);
            }
        }
    }
}
```

### Core Framework Enhancements

All core framework entities raise Add, Update, and Delete events, providing new opportunities for developers to extend the framework server-side.

## Oqtane Events Summary

1. **INotifyPropertyChanged**: Communication between Razor UI components.
2. **SyncEvents**: Communication between server and client to signal UI refresh/reload.
3. **EntityChanged**: Communication between server workloads.

## Additional Resources

- [Oqtane Server Events Blog Post](https://www.oqtane.org/blog/!/53/oqtane-server-events)
- [ASP.NET WebHooks Overview](https://learn.microsoft.com/en-us/aspnet/webhooks/)
- [Using Server-Sent Events for Realtime Updates in ASP.NET Core](https://code-maze.com/aspnetcore-using-server-sent-events-for-realtime-updates/)
- [The Updated .NET Core Event Pattern](https://learn.microsoft.com/en-us/dotnet/csharp/modern-events)
