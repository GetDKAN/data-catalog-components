# Data Catalog Components

[![GetDKAN](https://circleci.com/gh/GetDKAN/data-catalog-components/tree/master.svg?style=svg)](https://circleci.com/gh/GetDKAN/data-catalog-components/tree/master)
[![Maintainability](https://api.codeclimate.com/v1/badges/c790605d9099259ebda4/maintainability)](https://codeclimate.com/github/GetDKAN/data-catalog-components/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c790605d9099259ebda4/test_coverage)](https://codeclimate.com/github/GetDKAN/data-catalog-components/test_coverage)

A set of React components to facilitate the creation of Open Data Catalogs with React. This library is powered by [Parcel](https://parceljs.org/).

## Local Development
For local development, we recommend using npm workspaces. Once you have a workspace directory, install this library inside your workspace along any Open Data downstream sites you wish to work on.

In the root folder for this project, run npm run watch to build local code. Ensure the upstream is using the same version number located in package.json of this repo. Start the upstream site locally as well, and it should load local code from this repo as the dependency. Parcel also provides hot rebuilding while watch is running.


## Viewing the Components

This project utilizes [storybook](https://github.com/storybooks/storybook) to document the available components.

To see the available components:
1) clone this repo
1) Install the dependencies with [npm](https://www.npmjs.com/):
    1) ``cd data-catalog-components``
    1) ``npm install``
1) Start storybook
    1) ``npm run storybook``

## Docz preview
- Comment out `base: '/data-catalog-components'` from doczrc.js
- Run `npm run docz:serve` then visit `http://localhost:3000`.

## Publishing

1) Review exports in index.js
2) Increase version in package.json
3) run `npm login`
4) run `npm publish --access public`

## Publish to Github Pages

1) run `npm run prepublish; npm run deploy-storybook`

## Testing Components without Updating NPM Package

To test or use the components from a github branch:

1) Create new branch locallly
1) Remove `dist` from .gitignore
1) Run `npm run build`
1) Push dist folder and .gitignore to your branch
1) Add branch to package.json by running `npm install --save getdkan/data-catalog-components#MY-BRANCH`
