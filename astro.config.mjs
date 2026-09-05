import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGitHubPagesBuild = Boolean(process.env.GITHUB_ACTIONS && repository);
const isUserOrOrgPage = repository.endsWith('.github.io');

const site =
  process.env.SITE_URL ||
  (isGitHubPagesBuild
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    : 'http://localhost:4321');

const base =
  process.env.BASE_PATH ??
  (isGitHubPagesBuild && !isUserOrOrgPage ? `/${repository}` : '/');

export default defineConfig({
  site,
  base,
});
