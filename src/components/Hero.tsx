import Image from "next/image";
import { gridBackground, siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={gridBackground}
      />
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl animate-pulse-glow" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-sky-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            AI · CGI · GenAI · Agentic AI
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            The future of{" "}
            <span className="text-gradient">automated news</span> &{" "}
            <span className="text-gradient">entertainment</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#offerings"
              className="rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:brightness-110"
            >
              Explore Offerings
            </a>
            <a
              href={siteConfig.links.products}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-sky-500/25 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-sky-200 transition hover:border-sky-400/40 hover:bg-sky-500/5"
            >
              View Products →
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-sky-500/20 to-violet-500/20 blur-2xl" />
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} emblem`}
              width={320}
              height={320}
              className="relative rounded-full ring-2 ring-sky-500/20"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
