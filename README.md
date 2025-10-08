
# dependabot-vuln-test

Minimal React app with intentionally **outdated/vulnerable** dependencies to exercise Dependabot / GHAS alerts and PRs.

> ⚠️ **Do NOT deploy this app to production.** Use only for testing scanners in a private or throwaway repository.

## What’s included
- CRA app using `react-scripts@3.0.1` with older React 16.8.x
- Vulnerable libs pinned to known-bad versions:
  - `lodash@4.17.15`
  - `serialize-javascript@1.6.1`
  - `marked@0.3.6`
  - `axios@0.18.0`
- `.github/dependabot.yml` configured to open PRs against `dependabot-test` branch

## Quickstart
```bash
npm install
npm start
```

## Pushing to GitHub
```bash
git init
git add .
git commit -m "Initial commit: intentionally vulnerable app for Dependabot testing"
git branch -M main
git remote add origin https://github.com/<your-username>/dependabot-vuln-test.git
git push -u origin main
```

Create the target branch for Dependabot PRs:
```bash
git checkout -b dependabot-test
git push -u origin dependabot-test
```

## Dependabot
Dependabot runs on a schedule (daily/weekly/monthly). This repo uses **daily** checks.
If you need more frequent checks, consider a GitHub Action workflow that runs `npm outdated` or `npm audit` on a cron and opens issues/PRs.

## Notes
This repository is intentionally risky; treat it as a lab environment.
