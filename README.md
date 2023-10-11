# Template Walkthrough

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

Environment files are loaded automatically Post-Expo SDK 49. See `.env` for base example.

You can additionally create `.env.*` for your own purposes. To switch between environment files used you can leverage `NODE_ENV=* ...` in your `package.json` script that is used to start the development server.

### File Aliasing:

// TODO:

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
