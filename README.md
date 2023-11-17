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
https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components

Toast för att visa statusmeddelande: https://react-hot-toast.com

Alla dependencies för ett npm package:
npx npm-remote-ls <packagename>

Fler dependency-relaterade kommandon:
https://bobbyhadz.com/blog/view-dependency-tree-of-npm-module

Tillståndshantering när varken props drilling eller Context räcker:
https://docs.pmnd.rs/zustand/getting-started/introduction

(Context: https://react.dev/learn/scaling-up-with-reducer-and-context)

(Redux: https://redux-toolkit.js.org/tutorials/overview)

Flexbox Froggy, övningar för flexbox:
https://flexboxfroggy.com/#sv

Specialare för att skapa typer från arrayer finns i "array till typ.md"

React drag and drop
https://react-dnd.github.io/react-dnd/docs/api/dnd-provider

Typesafe kommunikation med server i (bland annat) Next, trpc
https://trpc.io

Zod, för enkel validering av data som kommer från användare eller apier
https://zod.dev

Kommunikation med databas om du har en egen server och Next, Prisma
https://www.prisma.io

Om du vill köra databas på CDN, Drizzle (funkar på egen server också)
https://orm.drizzle.team

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
