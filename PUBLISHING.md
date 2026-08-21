# Publishing Data, ML & AI Atlas with GitHub Pages

The repository already contains a GitHub Pages workflow at `.github/workflows/pages.yml`.
Every push to `main` rebuilds the generated artifacts, validates the curriculum/labs/site, and deploys the site.

## 1. Create the GitHub repository

On GitHub, create a new repository. A public repository is the simplest option for GitHub Free.

Recommended repository name:

```text
data-ml-ai-atlas
```

With that name, the default project Pages URL will be:

```text
https://YOUR-USERNAME.github.io/data-ml-ai-atlas/
```

If instead you name the repository exactly `YOUR-USERNAME.github.io`, it becomes a user site at:

```text
https://YOUR-USERNAME.github.io/
```

Do not initialize the GitHub repository with another README if you are pushing this existing folder.

## 2. Initialize and push from VS Code terminal

Open this folder in VS Code, then run:

```bash
git init
git add .
git commit -m "Initial release of Data, ML & AI Atlas"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/data-ml-ai-atlas.git
git push -u origin main
```

Replace `YOUR-USERNAME` and the repository name if you chose a different one.

If the repository was already cloned or already has a remote, inspect it first:

```bash
git remote -v
```

## 3. Enable GitHub Pages

On GitHub:

1. Open the repository.
2. Go to **Settings**.
3. Open **Pages** in the left sidebar.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The workflow in `.github/workflows/pages.yml` handles the rest.

## 4. Watch the first deployment

Open the repository's **Actions** tab.

You should see the workflow:

```text
Build, validate and deploy Data, ML & AI Atlas
```

It runs these checks before publishing:

```bash
python scripts/build.py
python validate.py
python scripts/check_labs.py
python scripts/check_site.py
node --check app.js
```

A green workflow run means the deployment succeeded. The deployment job exposes the final Pages URL.

## 5. Updating the website later

`source/atlas.json` is the curriculum/content source of truth.

After editing it locally, run:

```bash
python scripts/build.py
python validate.py
python scripts/check_labs.py
python scripts/check_site.py
node --check app.js
```

Preview locally:

```bash
python -m http.server 8000
```

Then commit and push:

```bash
git add .
git commit -m "Update Atlas content"
git push
```

The GitHub Pages workflow redeploys automatically.

## Troubleshooting

### Pages says no site is published

Check **Settings → Pages** and ensure the source is **GitHub Actions**.

### The workflow is red

Open the failed workflow in the **Actions** tab and expand the failed step. The repository intentionally fails deployment when curriculum, code-lab, generated-file, local-link, or JavaScript validation fails.

### `remote origin already exists`

Use:

```bash
git remote -v
git remote set-url origin https://github.com/YOUR-USERNAME/data-ml-ai-atlas.git
```

### Push authentication fails

Use GitHub's normal browser/device authentication through VS Code/GitHub CLI, or authenticate Git with a personal access token rather than a GitHub account password.

### Custom domain

Publish successfully on the default `github.io` URL first. Then add the custom domain from **Settings → Pages** and configure the required DNS records with your domain provider.


## Resume + JD analyzer note

The analyzer is a static browser-side feature and does not require a backend, API key, secret, database, or server configuration. PDF parsing loads PDF.js from cdnjs only when a PDF is selected; the document text is processed in the browser. If the CDN is unavailable, users can paste resume/JD text directly.
