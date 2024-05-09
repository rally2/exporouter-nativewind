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
bun dev:client
```

### Environment Variables:

Create a `.env.local` file at the root of the codebase.  
👫 Ask a friend for the .env variables 👫

#### Using WSL2?

_TODO?: This stopped working recently on my (Shane) machine. Potentially add alternate solution for troubleshooting._

Try running `npx expose-wsl@latest` in a terminal on your WSL instance. This circumvents all the hassle of network routing and port forwarding.

After that, create a `.env.local` file and copy the contents of `.env.example`.
Comment out `REACT_NATIVE_PACKAGER_HOSTNAME` and add your local IP address shown from `expose-wsl`.


## Main Components:

- Expo Router V3 via Expo Managed Workflow (Expo SDK 50)
- Nativewind (TailwindCSS for React Native)
- bun (package manager)
- Typescript

## Opinionated Template

This template DOES make certain opinionated decisions. They are based on common project decisions I've come accross while building Expo apps in Production. See below.

### Typescript

Expo provides Typescript support out of the box for the most part. This template will leverage it for any example code.

### Typed Routes:

Add the following to your project:

`expo-env.d.ts`:

```
/// <reference types="expo-router/types" />

// NOTE: This file should not be edited and should be in your git ignore
```

### File Aliasing:

This project has path aliases configured. To extend aliasing capability further, you can change the `tsconfig.json`:

```
    "paths": {
      "@/*": ["./*"]
    }
```

### Dark Mode Configuration:

// TODO:

### Favorable Extensions:

See `.vscode/extensions.json` for a list of recommended extensions.

## EAS (Expo Application Services)

### Environment Variables

We need the following environment variables to be set in EAS:

**Project Secrets:**

### EAS Build

To kick off a build using EAS, you will need to be logged in to your Expo account that is linked to the Curaleaf Organization. It is free to create an account. 👫 Ask a friend for access. 👫

After getting access to the organization... you can run the following commands:

```
# Installs the latest version of the EAS CLI globally on the computer.
# YOU DON'T WANT TO INSTALL THIS ON THE PROJECT LEVEL!
npm install -g eas-cli

# Log in to your Expo account
eas login

# Sanity Step: Check your login
eas whoami
```

An admin or existing EAS user with credentials needs to add you to the provisioning profile if on iOS.

Admin...

1. Run `eas device:create`. Follow prompts and send website QR code to new developer.

New developer...

1. Enable developer mode on your iOS device. May require restart.
2. Scan setup QR code and follow steps given. May require restart.

You're all set...

```
# Kick off development build. See package.json for additional build scripts based on need.
eas:build:dev:ios

# Follow prompts.  You will be asked to select your new device to add to the build profile.
```

### EAS Submit

// TODO:

### EAS Updates:

// TODO:
