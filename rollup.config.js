import React from "react";
import reactDom from "react-dom";
import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import json from "@rollup/plugin-json";
import pkg from "./package.json";

const config = {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    external(),
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    babel({
      exclude: ["node_modules/**", "../../node_modules/**"],
      babelHelpers: "runtime",
      presets: ["@babel/preset-react"],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            regenerator: true,
          },
        ],
      ],
    }),
    commonjs({
      include: ["node_modules/**", "../../node_modules/**"],
    }),
    json(),
    del({ targets: ["dist/*"] }),
  ],
  moduleContext: {
    "../../node_modules/react-table/dist/react-table.development.js": "window",
    "../../node_modules/react-table/dist/react-table.production.min.js":
      "window",
  },
  external: Object.keys(pkg.peerDependencies || {}),
};

export default config;

// // external(),
//         // babel({
//         //   babelrc: false,
//         //   exclude: 'node_modules/**',
//         //   babelHelpers: 'runtime',
//         //   presets: [
//         //     ['@babel/preset-env',
//         //       {
//         //         corejs: 3,
//         //         modules: false,
//         //         useBuiltIns: 'usage',
//         //         targets: {
//         //           ie: '11',
//         //         }
//         //       }
//         //     ],
//         //     '@babel/preset-react'
//         //   ],
//         //   plugins: [
//         //     ['@babel/plugin-transform-runtime', {
//         //       'regenerator': true
//         //     }]
//         //   ]
//         // }),
//         // resolve({
//         //   extensions: ['.js', '.jsx'],
//         //   preferBuiltins: true,
//         // }),
// commonjs({
//   include: ['node_modules/**'],
//   namedExports: {
//     react: Object.keys(React),
//     'react-dom': Object.keys(reactDom),
//     'immutable': ['is']
//   }
// }),
//         // json(),
//         // del({ targets: ['dist/*'] }),
//       ],
//       // external: Object.keys(pkg.peerDependencies || {}),
