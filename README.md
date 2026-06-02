# Crankshaft News

Company website for [Crankshaft News](https://crankshaftnews.github.io/) — automated news and entertainment powered by AI, CGI, GenAI, and Agentic AI.

**Live URL:** https://crankshaftnews.github.io

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router, static export) |
| Styling | Tailwind CSS v4 |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

> **Why not Jekyll?** GitHub Pages runs Jekyll by default, but this site uses Next.js static export instead. A `.nojekyll` file tells GitHub Pages to skip Jekyll so the `/_next/` assets load correctly.

## Architecture: Composability & Extendibility

```
src/
├── content/              # Data layer — edit JSON to add offerings or papers
│   ├── offerings.json
│   └── research-papers.json
├── components/           # UI layer — reusable, composable sections
│   ├── Hero.tsx
│   ├── OfferingsGrid.tsx
│   ├── ResearchPapers.tsx
│   ├── FounderSection.tsx
│   └── ArchitectureSection.tsx
├── lib/site-config.ts    # Site-wide constants (founder, links, nav)
└── app/page.tsx          # Page composition — reorder sections here
```

### Adding a new offering

Edit `src/content/offerings.json`:

```json
{
  "id": "my-product",
  "title": "My Product",
  "description": "What it does.",
  "tags": ["GenAI"],
  "href": "https://crankshaftnews.github.io/my-product/",
  "status": "live"
}
```

### Adding a research paper

Edit `src/content/research-papers.json` with the same shape as existing entries.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

Static output goes to `./out/`.

## Deploy to GitHub Pages

1. Create a repo named **`crankshaftnews.github.io`** under the **crankshaftnews** GitHub org.
2. Push this code to the `main` branch.
3. In repo **Settings → Pages**, set **Source** to **GitHub Actions**.
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

### Required GitHub Settings

| Setting | Value |
|---------|-------|
| Repository name | `crankshaftnews.github.io` |
| Pages source | GitHub Actions |
| Default branch | `main` |
| Actions permissions | Read and write (for Pages deploy) |

## Links

- **Founder:** [Shyamal Suhana Chandra](https://shyamalschandra.github.io/)
- **Products:** [Book2Screenplay](https://crankshaftnews.github.io/book2screenplay/)
- **Organization:** [github.com/crankshaftnews](https://github.com/crankshaftnews)

## License

Copyright © Crankshaft News. All rights reserved.
