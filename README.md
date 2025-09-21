
# Etterby Analytics — Jekyll Site

Static site built with Jekyll for GitHub Pages.

## Deploy
1) Push to `main` on GitHub
2) Settings → Pages → Source: GitHub Actions (or `main`/root)
3) Set Custom Domain (`etterby.com`) and Enforce HTTPS
4) DNS: `CNAME @` and `CNAME www` → `USERNAME.github.io`

## Edit content
- Homepage: `index.md`
- Services: `_services/*.md`
- Case studies: `_work/*.md`
- Insights: `_posts/*.md`
- Nav: `_data/nav.yml`
