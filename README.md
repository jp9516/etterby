
# Etterby Analytics - Jekyll Site

Static site built with Jekyll for GitHub Pages.

## Local preview
1. Install Ruby 3.x and Bundler (`gem install bundler`)
2. Install project dependencies:
   ```bash
   bundle config set --local path vendor/bundle
   bundle install
   ```
3. Serve the site locally with livereload:
   ```bash
   bundle exec jekyll serve --livereload
   ```
4. Visit <http://127.0.0.1:4000> to preview content changes before committing.

## Deploy
1. Push to `main` on GitHub
2. Settings → Pages → Source: GitHub Actions (or `main`/root)
3. Set Custom Domain (`etterby.com`) and Enforce HTTPS
4. DNS: `CNAME @` and `CNAME www` → `USERNAME.github.io`

## Google Analytics (GA4)
1. Visit <https://analytics.google.com> and sign in with your personal Google account. A free GA4 property is included in every account.
2. Create a new property (or reuse an existing one) and follow the setup wizard until you reach the "Data streams" step. Select "Web" and enter the production URL (e.g. `https://etterby.com`).
3. Copy the Measurement ID that begins with `G-` from the stream details.
4. Update `_config.yml` and set `google_analytics.measurement_id` to the copied ID (the production site currently uses `G-8T9EL4DVTW`). When the site builds, the default layout automatically injects the Google tag snippet.

## Edit content
- Homepage: `index.md`
- Services: `_services/*.md`
- Case studies: `_work/*.md`
- Insights: `_posts/*.md`
- Nav: `_data/nav.yml`
