# iribirii.github.io

Personal academic website based on [al-folio](https://github.com/alshedivat/al-folio).

### Local preview

```bash
bundle install
npm ci
bundle exec jekyll serve
```

Or with Docker (see al-folio docs): `docker compose up`.

### Git LFS

Large media (`*.gif`, `*.mp4`) is stored with Git LFS:

```bash
git lfs install
git lfs pull
```

Deploy checkout must use `lfs: true` so `_site` gets real binaries (not pointer files). GitHub Pages cannot serve LFS objects from the `gh-pages` branch.

### Pre-commit

Hooks catch whitespace/YAML issues, private keys, oversized non-LFS files, and run Prettier:

```bash
pre-commit install          # once per clone
pre-commit run --all-files  # optional full check
```

CI runs the same hooks on pushes/PRs to `main` (workflow `pre-commit`).

### Deploy

GitHub Actions builds with the full al-folio toolchain and publishes to the `gh-pages` branch. Set **Settings → Pages → Source** to deploy from `gh-pages` (root).
