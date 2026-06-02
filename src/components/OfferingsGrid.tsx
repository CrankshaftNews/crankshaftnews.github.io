import { statusStyles } from "@/lib/site-config";
import type { Offering } from "@/types/content";

interface OfferingsGridProps {
  offerings: Offering[];
}

export function OfferingsGrid({ offerings }: OfferingsGridProps) {
  return (
    <section id="offerings" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What We Build"
          title="Crankshaft News Offerings"
          description="Composable AI pipelines for news automation, CGI storytelling, and generative entertainment — each designed to extend independently."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {offerings.map((offering) => (
            <OfferingCard key={offering.id} offering={offering} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferingCard({ offering }: { offering: Offering }) {
  const status = statusStyles[offering.status];
  const Wrapper = offering.href ? "a" : "div";
  const linkProps = offering.href
    ? {
        href: offering.href,
        target: offering.href.startsWith("http") ? "_blank" : undefined,
        rel: offering.href.startsWith("http")
          ? "noopener noreferrer"
          : undefined,
      }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`glass-panel card-hover block rounded-2xl p-6 ${
        offering.href ? "cursor-pointer" : ""
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{offering.title}</h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${status.className}`}
        >
          {status.label}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-slate-400">
        {offering.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {offering.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-800/80 px-2 py-1 text-xs text-sky-300/90"
          >
            {tag}
          </span>
        ))}
      </div>
      {offering.href && (
        <p className="mt-4 text-sm font-medium text-sky-400">
          Open product →
        </p>
      )}
    </Wrapper>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-slate-400">{description}</p>
    </div>
  );
}

export { SectionHeading };
