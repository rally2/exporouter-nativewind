# GitHub Workflows

## Setup your `EXPO_TOKEN` Secret for Workflows

The EXPO_TOKEN needs to be added to your GitHub repository's secrets. Here's how to get and add it:

1. First, get your Expo token:

   - Log in to your Expo account on https://expo.dev
   - Go to your account settings (click your avatar → Settings)
   - In the "Access Tokens" section, click "Create new token"
   - Give it a name (e.g., "GitHub Actions")
   - Copy the token immediately (you won't be able to see it again)

2. Add the token to your GitHub repository secrets:
   - Go to your GitHub repository
   - Click on "Settings" tab
   - Click on "Secrets and variables" → "Actions" in the left sidebar
   - Click "New repository secret"
   - Name: EXPO_TOKEN
   - Value: Paste your Expo token from step 1
   - Click "Add secret"

Once you've added the secret, your GitHub Action will be able to access it using ${{ secrets.EXPO_TOKEN }} as shown in your workflow file.
