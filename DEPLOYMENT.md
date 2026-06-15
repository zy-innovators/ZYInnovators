# ZY Innovators Website Deployment Guide

This repository is configured with a GitHub Actions workflow to automatically build and deploy the website to GitHub Pages whenever changes are pushed to the `main` branch.

## How It Works

1. **Automated Trigger**: Every time you push or merge code into the `main` branch, GitHub Actions will trigger a workflow runner.
2. **Build Process**: The runner installs dependencies and builds the project using:
   ```bash
   npx ng build --configuration production --base-href /ZYInnovators/
   ```
3. **SPA Routing Support**: It automatically copies `index.html` as `404.html` so that direct URLs (e.g. `/about/leadership` or `/competitions`) work correctly when users reload the page.
4. **Deploy Branch**: The built files are pushed automatically to the `gh-pages` branch.

---

## First-Time Repository Configuration (Mandatory)

To make sure GitHub Pages serves the site correctly from the `gh-pages` branch, you need to configure these settings once on GitHub:

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/zy-innovators/ZYInnovators`.
   - Click **Settings** (top right tab).
   - Under the left sidebar, click **Pages**.
   - Under **Build and deployment** > **Source**, make sure it is set to **Deploy from a branch**.
   - Under **Branch**, select **`gh-pages`** and **`/ (root)`**, then click **Save**.

2. **Actions Permissions (If build fails)**:
   - Go to **Settings** > **Actions** > **General**.
   - Scroll down to **Workflow permissions**.
   - Ensure **Read and write permissions** is selected.
   - Click **Save**.

---

## How to Trigger Deployment

### 1. Automatic Deployment (Recommended)
Simply commit and push any changes to your repository:
```bash
git add .
git commit -m "Your update message"
git push
```
GitHub Actions will run the build and publish the live site within ~2 minutes. You can monitor the progress under the **Actions** tab of your repository.

### 2. Manual / Local Deployment (Alternative)
If you ever need to deploy the website directly from your local terminal without pushing to the main branch, run:
```bash
# 1. Build the production files
npx ng build --configuration production --base-href /ZYInnovators/

# 2. Copy index.html to 404.html for routing support
cp dist/zy-innovators/browser/index.html dist/zy-innovators/browser/404.html

# 3. Publish to GitHub Pages
npx angular-cli-ghpages --dir=dist/zy-innovators/browser
```
