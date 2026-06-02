import type { CSSProperties } from "react";

export const siteConfig = {
  name: "Crankshaft News",
  tagline: "Automated News & Entertainment",
  description:
    "Crankshaft News builds automated news and entertainment systems powered by AI, CGI, GenAI, and Agentic AI — from research to production.",
  url: "https://crankshaftnews.github.io",
  founder: {
    name: "Shyamal Suhana Chandra",
    title: "Sole Technical Founder",
    href: "https://shyamalschandra.github.io/",
    image: "/founder.png",
  },
  links: {
    github: "https://github.com/crankshaftnews",
    products: "https://crankshaftnews.github.io/book2screenplay/",
  },
} as const;

export const navLinks: Array<{
  label: string;
  href: string;
  external?: boolean;
}> = [
  { label: "Offerings", href: "#offerings" },
  { label: "Research", href: "#research" },
  { label: "Founder", href: "#founder" },
  { label: "Products", href: siteConfig.links.products, external: true },
];

export const statusStyles: Record<
  string,
  { label: string; className: string }
> = {
  live: {
    label: "Live",
    className: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  beta: {
    label: "Beta",
    className: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  "coming-soon": {
    label: "Coming Soon",
    className: "bg-slate-500/15 text-slate-300 border-slate-500/30",
  },
};

export const gridBackground: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};
