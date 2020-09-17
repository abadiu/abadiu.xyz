# abadiu.xyz

This repository hold the source code of my personal website, see it live [here](https://abadiu.xyz). It is heavily based on the [Cara - Gatsby Starter Portfolio](https://cara.lekoarts.de/) `Gatsby.js` starter made by [LekoArts](https://www.lekoarts.de/).

## Scripts

``` sh
npm run dev //gatsby develop -o
npm run develop //gatsby develop
npm run build //gatsby build
npm run lint //eslint . --ext .js,.jsx --ignore-path .gitignore
npm run lint:fix //eslint . --ext .js,.jsx --fix --ignore-path .gitignore
```

## Deployment

This repo includes a `captain-definition` file, it is used to create a Docker container on a DigitalOcean droplet powered by CapRover.

### Deploy to CapRover

Start by running:

`npm run build`

Then make an archive of the build:

`tar -cvf ./deploy.tar --exclude='*.map' ./captain-definition ./public/*`

Deploy and enjoy!

`caprover deploy -t ./deploy.tar`

For other deployments simply delete the `capain-definition` file and set up your own deployment workflow.
