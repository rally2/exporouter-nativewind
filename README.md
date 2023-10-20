# Template Walkthrough

## Getting Started:

// TODO:

## Main Components:

- Expo Router V2 via Expo Managed Workflow (Expo SDK 49)
- Nativewind (TailwindCSS for React Native)
- Pnpm (package manager)
- Typescript

## Opinionated Template

This template DOES make certain opinionated decisions. They are based on common project decisions I've come accross while building Expo apps in Production. See below.

### Typescript

Expo provides Typescript support out of the box for the most part. This template will leverage it for any example code.

### SVG Support:

React Native SVG Transformer is a great way to leverage SVG in your Expo project.

See [React Native SVG Transformer](https://github.com/kristerkari/react-native-svg-transformer) on setup instructions. This library already has it configured for Expo.

### Typed Routes:

The project is using Experimental Typed Routes Support. See [Expo Router: Typed Routes](https://docs.expo.dev/router/reference/typed-routes/)

### Environment Variables:

Environment files are loaded automatically Post-Expo SDK 49. See `.env.example` for base example.

You can additionally create `.env.*` for your own purposes. To switch between environment files used you can leverage `NODE_ENV=* ...` in your `package.json` script that is used to start the development server.

To make environment variables accessible using `process.env.*` syntax, you will need to append `EXPO_PUBLIC_` to each variable. See https://docs.expo.dev/guides/environment-variables/ for more info.

### File Aliasing:

This project has path aliases configured. To extend aliasing capability further, you can change the `tsconfig.json`:

```
    "paths": {
      "@/*": ["./*"]
    }
```

The above is configured to alias for any folder in the root of the project. See `app/index.tsx` importing `components/atoms/DemoPathAliasText` as an example. This may seem trivial in this project due to its relatively flat structure, but it really shines as the project grows in size.

### Custom Fonts:

`useCachedResources.ts` is configured to load custom fonts that are located in the `assets/fonts` folder.

See `tailwind.config.js` for the `fontFamily` configuration. You can then see it used in action via `font-racesport`:

```
<Text className="my-4 font-racesport text-center">RaceSport Custom Font</Text>
```

### Dark Mode Configuration:

// TODO:

### Favorable Extensions:

See `.vscode/extensions.json` for a list of recommended extensions.

The most important to note is the Headwind extension for Tailwind / Nativewind.

- It provides opinionated sorting of the Tailwind utlities for consistency in the codebase.
  - See `.vscode/settings.json` for the `headwind.defaultSortOrder` configuration.
  - For this Expo template it is vital that `dark:*` has been added to the end of the default sort order to ensure toggling dark mode is consistent. If the `dark:*` utility class is auto sorted before the defined `className` color scheme it will not work as expected.

## EAS

### EAS Build

// TODO:

### EAS Submit

// TODO:

### EAS Updates:

// TODO:
