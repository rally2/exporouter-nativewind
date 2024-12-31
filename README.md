# Template Walkthrough

## Getting Started:

```
bun install
```

<p style="display: flex; align-items: center; justify-content: start; gap: 10px;">
  <a href="https://bun.sh"><img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" alt="Logo" height=25></a>
  <a href="https://bun.sh/docs" style="font-size: larger; font-weight: bold;">Read the docs →</a>
</p>

You can download Bun [here](https://bun.sh/docs/installation).

### Start Expo Development Server:

Create a new local development client or get an existing valid one from [expo.dev]("https://expo.dev/accounts/curaleaf)

**[New to Expo?](#eas-build)**

```
bun dev
```

### Environment Variables:

Create a `.env.dev` file at the root of the codebase.  
👫 Ask a friend for the .env variables 👫

## Main Components:

- Expo Router V4 & Expo SDK 52
- Nativewind (TailwindCSS for React Native)
- bun (package manager)
- Typescript
  
## Storybook

Storybook gives a VDD (Visual Driven Development) approach and a convenient sandbox to build components in isolation.  See `components/Button` for an example. 

To enable Storybook canvas, set `EXPO_PUBLIC_STORYBOOK_ENABLED=true` in the `.env.dev`
