# CS Career Portfolio

An Astro personal website built for GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

Open http://127.0.0.1:4322 (or the exact URL printed in Terminal). Keep
Terminal running while editing; saved changes in `src/` update automatically.
Port 4321 may serve an older static build and does not watch source edits.

## Deploying

1. Push this project to a GitHub repository.
2. In the repository settings, open **Pages** and set the source to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.

The Astro config infers the GitHub Pages base path during GitHub Actions builds. For a custom domain, set a repository variable named `SITE_URL` to your domain and `BASE_PATH` to `/`.
