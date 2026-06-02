import type { ResearchPaper } from "@/types/content";
import { SectionHeading } from "./OfferingsGrid";

interface ResearchPapersProps {
  papers: ResearchPaper[];
}

export function ResearchPapers({ papers }: ResearchPapersProps) {
  return (
    <section id="research" className="scroll-mt-24 border-t border-sky-500/10 bg-slate-950/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Research"
          title="Crankshaft News Research Papers"
          description="Published and in-progress research on agentic news systems, GenAI pipelines, and automated entertainment."
        />

        <div className="mt-12 space-y-4">
          {papers.map((paper) => (
            <article
              key={paper.id}
              className="glass-panel card-hover rounded-2xl p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <p className="text-xs font-medium text-violet-300">
                    {paper.year} · {paper.authors.join(", ")}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {paper.href && paper.href !== "#" ? (
                      <a
                        href={paper.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-sky-300"
                      >
                        {paper.title}
                      </a>
                    ) : (
                      paper.title
                    )}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {paper.abstract}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-violet-500/10 px-2 py-1 text-xs text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {paper.href && paper.href !== "#" && (
                  <a
                    href={paper.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-lg border border-violet-500/25 px-4 py-2 text-sm font-medium text-violet-200 transition hover:border-violet-400/40 hover:bg-violet-500/5"
                  >
                    Read →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
