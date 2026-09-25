import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Wordmark } from "@/components/Wordmark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SampleTag } from "@/components/ui/primitives";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-canvas text-zinc-100">
      <header className="sticky top-0 z-30 border-b border-line bg-canvas/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link to="/">
            <Wordmark />
          </Link>
          <ThemeToggle className="grid h-9 w-9 place-items-center rounded-lg text-zinc-400 hover:bg-white/[0.06] hover:text-zinc-100" />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[13px] text-zinc-500 hover:text-zinc-200">
          <ArrowLeft className="h-4 w-4" /> Back to Jan Arogya Nexus
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <h1 className="text-[26px] font-semibold tracking-tight">{title}</h1>
          <SampleTag />
        </div>
        <p className="mt-1.5 text-[12.5px] text-zinc-500">Last updated {updated}</p>

        <div className="prose-legal mt-8 space-y-7 text-[14px] leading-relaxed text-zinc-300">
          {children}
        </div>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-4 py-8 text-[12px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>Jan Arogya Nexus &middot; Consent-Aware Continuity of Care</span>
          <span className="flex gap-4">
            <Link to="/privacy" className="hover:text-zinc-400">Privacy</Link>
            <Link to="/terms" className="hover:text-zinc-400">Terms</Link>
            <Link to="/login" className="hover:text-zinc-400">Sign in</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export function Section({ h, children }: { h: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[15px] font-semibold text-zinc-100">{h}</h2>
      <div className="mt-2 space-y-3">{children}</div>
    </section>
  );
}
