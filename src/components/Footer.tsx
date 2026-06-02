import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sky-500/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-slate-400">
          © {year}{" "}
          <span className="font-medium text-slate-200">{siteConfig.name}</span>
          . Automated news & entertainment with AI, CGI, GenAI & Agentic AI.
        </p>
        <div className="flex gap-4 text-sm">
          <a
            href={siteConfig.founder.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 transition hover:text-sky-300"
          >
            Founder
          </a>
          <a
            href={siteConfig.links.products}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 transition hover:text-sky-300"
          >
            Products
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 transition hover:text-sky-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
