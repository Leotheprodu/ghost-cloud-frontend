module.exports = {
  // ...
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // ...
    'plugin:astro/recommended',
    'eslint:recommended',
    /* 'plugin:react/recommended', */
    /* 'plugin:@typescript-eslint/recommended', */
  ],
  parser: '@typescript-eslint/parser',
  // ...
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    // ...
  ],
  /*  plugins: ['react', '@typescript-eslint'], */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
