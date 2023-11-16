Tips om Fig: https://fig.io

Variant på npm:
https://pnpm.io/installation

Tailwind Intellisense: installera extension som heter Tailwind CSS Intellisense

Tailwind Installation:
https://tailwindcss.com/docs/installation/

Filer:
.gitignore: listar filer och mappar som INTE ska följa med när man pushar till Git-servern (Github/Gitlab/Bitbucket) (filen syns normalt inte i Finder eller Utforskaren, eftersom namnet börjar med en punkt).

= = = = =
package.json: fil som har med npm / pnpm / yarn att göra, för flera ändamål: överst är metadata som ska följa med om man publicerar till npm

sedan följer några alias till kommandon man kan ge för att utföra olika saker, typ starta dev-server, eller bygga för distribution etc, här kan man lägga till egna om man vill

dependencies: bibliotek som måste följa med när man bygger för distribution

devdependencies: bibliotek som bara används under utvecklingen
= = = = =

tsconfig.json: inställningar för TypeScript-kompilatorn som skapar JS av TS, och för TypeCheckern som håller oss i örat medan vi utvecklar
= = = = =

Annat:
ESLint: https://eslint.org

State (tillstånd) och hooks:
https://react.dev/reference/react/useState

Controlled Components

Toast för att visa statusmeddelande: https://react-hot-toast.com

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
