# Workarounds

Docs of workarounds, patches & relevant "to knows".

## Package.json Configs

The following `expo.doctor.reactNativeDirectoryCheck.exclude": ["tailwindcss"]` was added to `package.json` to address the following:

```
The following issues were found when validating your dependencies against React Native Directory:
No metadata available: tailwindcss
Advice: 
- Update React Native Directory to include metadata for unknown packages. Alternatively, set expo.doctor.reactNativeDirectoryCheck.listUnknownPackages in package.json to false to skip warnings about packages with no metadata, if the warning is not relevant.
```