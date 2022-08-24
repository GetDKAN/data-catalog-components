import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';
import del from "rollup-plugin-delete";
import json from "@rollup/plugin-json";
import pkg from "./package.json";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    external(),
    nodeResolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    typescript(),
    babel({
      exclude: "node_modules/**",
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
      include: ["node_modules/**"],
    }),
    json(),
    del({ targets: ["dist/*"] }),
  ],
  moduleContext: {
    "./node_modules/react-table/dist/react-table.development.js": "window",
    "./node_modules/react-table/dist/react-table.production.min.js": "window",
  },
  external: Object.keys(pkg.peerDependencies || {}),
};
