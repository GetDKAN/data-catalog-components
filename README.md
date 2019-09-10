# Data Catalog Components

A set of React components to facilitate the creation of Open Data Catalogs with React.

## Viewing the Components

This project utilizes [storybook](https://github.com/storybooks/storybook) to document the available components.

To see the available components:
1) clone this repo
1) Install the dependencies with [npm](https://www.npmjs.com/):
    1) ``cd data-catalog-components``
    1) ``npm install``
1) Start storybook
    1) ``npm run storybook``

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
1) Remove `lib` from .gitignore
1) Run `npm run lib`
1) Push lib folder and .gitignore to your branch
1) Add branch to package.json by running `npm install --save getdkan/data-catalog-components#MY-BRANCH`
1) Profit
