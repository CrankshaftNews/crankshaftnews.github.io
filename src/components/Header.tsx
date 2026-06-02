import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-500/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={`${siteConfig.name} logo`}
            width={44}
            height={44}
            className="rounded-full ring-1 ring-sky-500/30 transition group-hover:ring-sky-400/50"
            priority
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-wide text-white">
              {siteConfig.name}
            </p>
            <p className="text-xs text-sky-400/80">{siteConfig.tagline}</p>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-sky-500/10 hover:text-sky-300"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-sky-500/10 hover:text-sky-300"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
