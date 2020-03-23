# Data Catalog Components

A set of React components to facilitate the creation of Open Data Catalogs with React.

## Working locally
To develop locally against a working version of the data-catalog-frontend, you will need to make the following update to your `.babelrc` file.
```
["module-resolver", {
  "root": ["./src"],
  "alias": {
    "react": "<relative link to frontend on local env>/node_modules/react",
    "styled-components": "<relative link to frontend on local env>/node_modules/styled-components"
  }
}]
```
After making the update above, you will need to do the following to see the updates in your data-catalog-frontend.
1. In this repo, run the command `npm link`. This will create a symlink to your global npm registry.
1. In the data-catalog-frontend repo, run the command `npm link @civicactions/data-catalog-components`. This will make it so when you run npm install it will symlink the node_modules folder to the global symlink instead of downloading the library from npm.
1. Run `rm -rf node_modules && npm install` in the data-catalog-frontend repo.
1. In the data-catalog-frontend repo, run `gatsby develop`.
1. In this repo, run `npm run lib:watch` to work on components or `npm run css:watch` to work on just CSS changes. Babel will now watch any commands you make to React components in this folder and rebuild the library. When a rebuild happens it will cause the frontend Gatsby development server to rebuild and show your changes.



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
