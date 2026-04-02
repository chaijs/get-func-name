import eslintjs from "@eslint/js";
import {defineConfig} from "eslint/config";
import globals from 'globals';

const {configs: eslintConfigs} = eslintjs;

export default defineConfig([
  {
    ignores: [
      'coverage/'
    ],
  },
  {
    files: ['index.js', 'test/**/*.js'],
    plugins: {
      js: eslintjs
    },
    extends: [
      'js/recommended'
    ]
  },
  {
    files: ['test/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
      }
    }
  },
  {
    files: ['test/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.mocha,
        ...globals.node,
      }
    }
  }
]);
