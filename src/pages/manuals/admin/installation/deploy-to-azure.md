# Deploy to Azure
  [![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Foqtane%2Foqtane.framework%2Fmaster%2Fazuredeploy.json)

The Oqtane framework is a modular application framework for Blazor that allows you to easily deploy and manage web applications on Azure.

## Prerequisites
- An Azure account. If you don’t have one, you can [create one for free here](https://azure.microsoft.com/en-in/free/).
- The Oqtane GitHub repository. You can [access it here](https://www.github.com/oqtane/oqtane.framework).

## Steps
1. Click on the **Deploy to Azure** button above. This will open the Azure portal and prompt you to log in with your Azure account.
2. On the **Custom deployment** form, select an existing **Resource group** or create a new one. A resource group is a logical container for your Azure resources.
3. Fill in the values for **Sql Server Name** and **Blazor Website Name**. These values must be unique to any other values on Azure. You can also change the other settings if you want, such as the location, the pricing tier, and the database size.
4. Click the **Purchase** button. This will create and deploy the resources needed for your Oqtane application, such as the app service plan, the web app, and the SQL database.
5. Wait for the deployment to finish. You can monitor the progress on the **Deployment details** page.
6. Once the deployment is complete, you can access your Oqtane application by visiting the URL of your Blazor Website Name. For example, if your Blazor Website Name is `my-oqtane-app`, then your URL would be `https://my-oqtane-app.azurewebsites.net/`.
7. Follow the installation wizard to set up your Oqtane application. You will need to enter the administrator email and password, and optionally later you can set the site name, logo plus more in the administration dashboard site settings.

## Congratulations!
You have successfully deployed your Oqtane application on Azure. Enjoy! 😊
