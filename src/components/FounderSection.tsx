import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function FounderSection() {
  const { founder } = siteConfig;

  return (
    <section id="founder" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-panel overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-[280px_1fr]">
            <div className="relative flex items-center justify-center bg-gradient-to-br from-sky-500/10 to-violet-500/10 p-8">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-sky-500/30 to-violet-500/30 blur-lg" />
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={200}
                  height={200}
                  className="relative rounded-full object-cover ring-2 ring-sky-500/30"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">
                Leadership
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Meet the Founder
              </h2>
              <p className="mt-4 text-lg font-medium text-slate-200">
                <a
                  href={founder.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gradient transition hover:opacity-80"
                >
                  {founder.name}
                </a>
              </p>
              <p className="text-sm text-sky-400/90">{founder.title}</p>
              <p className="mt-4 max-w-xl leading-relaxed text-slate-400">
                Shyamal leads Crankshaft News&apos;s technical vision — building
                composable agentic systems that automate news production,
                research verification, and generative entertainment from the
                ground up.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={founder.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-sky-500/15 px-5 py-2.5 text-sm font-semibold text-sky-200 ring-1 ring-sky-500/25 transition hover:bg-sky-500/25"
                >
                  Personal Site →
                </a>
                <a
                  href={siteConfig.links.products}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-600/50 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-sky-500/30 hover:text-sky-200"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
