# GJ's Blog - Content Studio

Content studio for [GJ's blog](https://blog-gjtiquia.netlify.app) built with [Sanity](https://www.sanity.io/), a Headless Content Management System (CMS).

The content studio is currently hosted [here](https://blog-gjtiquia.sanity.studio/) for managing blog content.

## Description

[Sanity Studio](https://www.sanity.io/docs/sanity-studio) is used as the content studio for GJ's blog.

All content is saved in the [Sanity Content Lake](https://www.sanity.io/docs/datastore).

Only authorized users are allowed to manage blog contents.

## Instructions

### Development

Install the required packages with the following command:

```bash
npm install
```

Start a development server with the following command:

```bash
npm run dev
```

### Deployment

Only authorized users are allowed to deploy to Sanity.

Log in with the following command:

```bash
npx sanity login
```

Deploy to Sanity with the following command:

```bash
npx sanity deploy
```

Read more about deploying Sanity Studio [here](https://www.sanity.io/docs/deployment#bd4e07db3e37).
