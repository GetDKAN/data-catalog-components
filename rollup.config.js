import React from 'react';
import reactDom from 'react-dom';
import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import del from 'rollup-plugin-delete';
import json from '@rollup/plugin-json';
import pkg from './package.json';

export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        external(),
        resolve({
          extensions: ['.js', '.jsx'],
          preferBuiltins: true,
        }),
        babel({
          // exclude: 'node_modules/**',
          presets: ['@babel/preset-react']
        }),
        commonjs({
          include: ['node_modules/**'],
          namedExports: {
            react: Object.keys(React),
            'react-dom': Object.keys(reactDom),
            'immutable': ['is']
          }
        }),
        json(),
        del({ targets: ['dist/*'] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
