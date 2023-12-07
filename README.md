# Template Walkthrough

## Getting Started:

// TODO: Add instructions for tweaking pre-defined template values...

```
npm install
```

You can then start the locally running development server with:

```
npm dev
```
for Expo Go|

or

```
npm dev:client
```
for Expo Development Client (assuming you have built and installed the client via the below EAS Build walkthrough)

#### Using WSL2?

Try running `npx expose-wsl@latest` in a terminal on your WSL instance. This circumvents all the hassle of network routing and port forwarding.

After that, create a `.env.local` file and copy the contents of `.env.example`.
Comment out `REACT_NATIVE_PACKAGER_HOSTNAME` and add your local IP address shown from `expose-wsl`.

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

Dark Mode compatibility is already configured in this template.  See `context/Theme.tsx` for the Theme context configuration.  Go to `(aux)/theme.tsx` to see setup for switching between Light Theme & Dark Theme.  Nativewind handles most of the heavy lifting afterwards as long as you apply the corresponding `dark:*` utility class to your component `className` prop.

### Favorable Extensions:

See `.vscode/extensions.json` for a list of recommended extensions.

## EAS (Expo Application Services)

### EAS Build

// TODO:

### EAS Submit

// TODO:

### EAS Updates:

// TODO:
