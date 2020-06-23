# Remote Work Now - Architecture description

## Folder structure

Files have been divided into folders using the client/server convention. The client folder and its subfolders contain all frontend components and the server folder all backend functionalities.

### Client

![Client](pictures/client.png)

The **components** folder and its subfolders consist of React components, **context** of tools required for language versions (unimplemented in the current production version), **fonts** of the typefaces used and **resources** of all other resources (e.g. images, icons, videos, text) used in the application. **Services** contains the frontend functionality for retrieving data from the backend (e.g. GET/POST using axios).

### Server

![Server](pictures/server.png)

In the server folder, **controllers** contains routers for the application's backend operations, such as returning calculator questions, newsletter management, csv file creation and returning calculator results. **Database** contains the necessary tools for managing the application's interaction with MongoDB document database. **Middleware** contains error middleware, **models** exportable mongoose database models and **services** backend functionality for calculating results, mailservice, newsletter and questions context as well as application tests and utils all utility functions not related to business logic.

