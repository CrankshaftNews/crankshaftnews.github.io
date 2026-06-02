import { siteConfig } from "@/lib/site-config";

const pillars = [
  {
    title: "Content as Data",
    description:
      "Offerings and research papers live in JSON files under src/content/. Add a new entry — no code changes required.",
  },
  {
    title: "Component Composition",
    description:
      "Each page section (Hero, OfferingsGrid, ResearchPapers, FounderSection) is an independent React component you can reorder or reuse.",
  },
  {
    title: "Static-First Delivery",
    description:
      "Next.js static export produces pure HTML/CSS/JS served by GitHub Pages — fast, secure, and free.",
  },
  {
    title: "CI/CD Pipeline",
    description:
      "GitHub Actions builds on every push to main and deploys to crankshaftnews.github.io automatically.",
  },
];

export function ArchitectureSection() {
  return (
    <section className="border-t border-sky-500/10 bg-slate-950/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">
          Architecture
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Composability & Extendibility
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          Built for growth — extend offerings, add research papers, or spin up
          new product pages without rewriting the site.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <h3 className="font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <pre className="mt-10 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-6 text-xs leading-relaxed text-sky-300/90">
{`crankshaftnews.github.io/
├── src/content/          ← offerings.json, research-papers.json
├── src/components/       ← reusable UI blocks
├── src/app/page.tsx      ← composes sections
├── public/               ← logo, founder photo, .nojekyll
└── .github/workflows/    ← auto-deploy to GitHub Pages

Stack: Next.js (static export) + Tailwind CSS v4
Host:  GitHub Pages via GitHub Actions
URL:   ${siteConfig.url}`}
        </pre>
      </div>
    </section>
  );
}
