// @ts-check

/** "schema": "https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/prettierrc.json", */
// "$schema": "http://json.schemastore.org/prettierrc",
/** @type { import('./prettier.zod').PrettierSchema[] } */
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 100,
  proseWrap: 'never',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  quoteProps: 'as-needed',
  semi: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  overrides: [
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        printWidth: 120,
        proseWrap: 'never',
        tabWidth: 4,
        useTabs: true,
        singleQuote: false,
        bracketSpacing: true,
      },
    },
  ],
};
