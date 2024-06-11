# kamalu-chioma-Web-Programming-Framework-1---ITE-5315

# Express App with Handlebars

This is a basic Express.js application that uses Handlebars.js as its template engine.

## Setup

The application is set up to use Handlebars.js with the following configuration:

- The file extension for Handlebars templates is `.hbs`.
- The default layout is `main`.
- The layouts are stored in the `views/layouts/` directory.
- The partials are stored in the `views/partials/` directory.

## Custom Helpers

The application also imports a module named `helpers` from a file named `helpers.js`. This module should export an object where the keys are the names of the helpers and the values are the helper functions.

## Running the Application

To run the application, use the following command:

```bash
node index.js
