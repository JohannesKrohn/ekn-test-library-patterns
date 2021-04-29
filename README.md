# Frontify API Project

Starterkit for the Frontify Node API.

The Frontify API documentation is available at https://www.npmjs.com/package/@frontify/frontify-api

## Setup

Install Node Dependencies

```
npm install
```

Install Gulp (if not already installed)

```
npm install -g gulp

npm install --global gulp-cli
```

## Usage

Sync Assets

```
gulp frontify
```

This starts a watch process. When files are added to the folder the upload is triggered and the files are uploaded to the assets area of the projects pattern library.
To stop the process press ctrl + c.