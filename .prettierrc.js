module.exports = {
  printWidth: 80,
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  overrides: [
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        proseWrap: 'preserve',
        embeddedLanguageFormatting: 'auto',
      },
    },
  ],
};