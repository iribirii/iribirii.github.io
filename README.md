# iribirii.github.io

Personal academic website based on [al-folio](https://github.com/alshedivat/al-folio).

## Branch `big-website-update`

This branch rebuilds the site with al-folio (replacing the previous hand-written HTML).

### Local preview

```bash
bundle install
bundle exec jekyll serve
```

Or with Docker (see al-folio docs): `docker compose up`.

### Deploy

GitHub Actions deploys from `main`/`master` only. Merge this branch when ready; until then the live site stays on the old HTML.
