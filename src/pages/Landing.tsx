import { Link } from "react-router-dom";
import {
  ShieldCheck, Fingerprint, Layers, Network, ScrollText, ArrowRight,
  HeartPulse, Stethoscope, Building2, FlaskConical, Check, Lock,
} from "lucide-react";
import { Wordmark, NexusMark } from "@/components/Wordmark";
import { Button } from "@/components/ui/primitives";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#model" },
  { label: "For teams", href: "#teams" },
  { label: "Research", href: "#research" },
];

const STEPS = [
  { icon: Fingerprint, k: "01", title: "Identity", body: "An ABHA-linked identity anchors every record to one verified person, not a dozen local MRNs." },
  { icon: ShieldCheck, k: "02", title: "Consent", body: "The patient decides who sees what, why, and for how long. Nothing opens without an active grant." },
  { icon: Layers, k: "03", title: "Clinical context", body: "Authorised records from every facility are assembled into one reviewed view, not a document hunt." },
  { icon: Network, k: "04", title: "Coordination", body: "Lab orders, referrals and follow-ups move between organisations as tracked, accountable tasks." },
  { icon: ScrollText, k: "05", title: "Audit", body: "Every access and decision is written to an append-only log the patient and hospital both read." },
];

const TEAMS = [
  { icon: HeartPulse, title: "Patients", points: ["One health timeline across every visit", "Approve or revoke access in one step", "See exactly who opened your records"] },
  { icon: Stethoscope, title: "Clinicians", points: ["Unified context before the consult starts", "Consent state shown on every patient", "Order labs and referrals inside the chart"] },
  { icon: Building2, title: "Hospitals", points: ["Tenant-isolated data, role-based access", "Coordination and access analytics", "A defensible trail for every record touched"] },
  { icon: FlaskConical, title: "Labs & pharmacies", points: ["Inbound orders and scripts in one queue", "Results and dispense status flow back", "Patient context only where authorised"] },
];

const PRODUCT = [
  { title: "Clinical context", body: "Problems, allergies, medications, encounters, labs and prescriptions from separate systems, reconciled into a single screen with a clear information hierarchy." },
  { title: "Consent", body: "A control surface, not a form: who, what, why, and for how long, with pending, approved, expired and revoked states enforced end to end." },
  { title: "Care coordination", body: "Cross-organisation tasks with owner, priority, source and destination, moving from pending to complete without a phone call." },
  { title: "Auditability", body: "An append-only event stream of every sensitive access, including blocked attempts, exportable for review." },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-zinc-100">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-line bg-canvas/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/">
            <Wordmark />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-[13.5px] font-medium text-zinc-400 transition-colors hover:text-zinc-100">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle className="grid h-9 w-9 place-items-center rounded-lg text-zinc-400 hover:bg-white/[0.06] hover:text-zinc-100" />
            <Link to="/login" className="hidden sm:block">
              <Button variant="ghost" size="sm">Sign in</Button>
            </Link>
            <Link to="/login">
              <Button size="sm" icon={<ArrowRight className="h-4 w-4" />}>Explore the demo</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <HeroBackdrop />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand-400">
              Healthcare coordination infrastructure
            </p>
            <h1 className="mt-5 font-display text-[44px] font-semibold leading-[1.04] tracking-tight text-zinc-50 [text-wrap:balance] sm:text-[58px]">
              Consent-aware
              <br />
              continuity <em className="text-brand-400 not-italic">of care</em>
            </h1>
            <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-zinc-400">
              A patient's history is scattered across hospitals, labs and pharmacies that don't share
              systems. Jan Arogya Nexus assembles the <span className="text-zinc-200">authorised</span> parts
              of that history into one clinical view, and records every access, so the patient stays in
              control.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/login">
                <Button size="lg" icon={<ArrowRight className="h-4 w-4" />}>Explore the demo</Button>
              </Link>
              <a href="#model">
                <Button size="lg" variant="secondary">How it works</Button>
              </a>
            </div>
            <p className="mt-7 font-mono text-[11px] text-zinc-600">
              Synthetic data only · Not a government service · Not a production ABDM integration
            </p>
          </div>

          <ConsentGraphic />
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">01 · The fragmentation problem</p>
          <h2 className="mt-3 max-w-2xl font-display text-[28px] font-semibold tracking-tight text-zinc-50 sm:text-[32px]">
            Care is delayed because the record is somewhere else
          </h2>
          <div className="mt-10 grid divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              ["Every referral", "starts with a phone call, a photo of a prescription, or the patient's memory of what was said."],
              ["Repeat tests", "get ordered because the previous result is held in another hospital's system."],
              ["No one can say", "with certainty who has looked at a patient's history, or on what authority."],
            ].map(([h, b]) => (
              <div key={h} className="py-7 sm:px-7 sm:first:pl-0">
                <p className="font-display text-[17px] font-semibold text-zinc-100">{h}</p>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-zinc-500">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model */}
      <section id="model" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">02 · The Nexus model</p>
          <h2 className="mt-3 font-display text-[28px] font-semibold tracking-tight text-zinc-50 sm:text-[32px]">
            Identity → Consent → Context → Coordination → Audit
          </h2>
          <div className="mt-10 grid border border-line md:grid-cols-5 md:divide-x md:divide-line [&>*]:border-b [&>*]:border-line md:[&>*]:border-b-0">
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="p-6">
                  <div className="flex items-center justify-between">
                    <Icon className="h-4 w-4 text-brand-400" />
                    <span className="font-display text-[22px] italic text-zinc-700">{s.k}</span>
                  </div>
                  <p className="mt-4 text-[14px] font-semibold text-zinc-100">{s.title}</p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-zinc-500">{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product: text left, real product surface right */}
      <section id="product" className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">03 · The product</p>
            <h2 className="mt-3 font-display text-[28px] font-semibold tracking-tight text-zinc-50 sm:text-[32px]">
              Four surfaces, one product
            </h2>
            <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-zinc-500">
              Each one is functional in the demo, not a screenshot. Sign in as any of six roles and every
              screen below is something you can click through.
            </p>
            <dl className="mt-8 space-y-6">
              {PRODUCT.map((p) => (
                <div key={p.title} className="border-l-2 border-line pl-4">
                  <dt className="font-display text-[15px] font-semibold text-zinc-100">{p.title}</dt>
                  <dd className="mt-1 text-[13px] leading-relaxed text-zinc-500">{p.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ProductVisual />
        </div>
      </section>

      {/* Teams */}
      <section id="teams" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">04 · Who it's for</p>
          <h2 className="mt-3 font-display text-[28px] font-semibold tracking-tight text-zinc-50 sm:text-[32px]">
            Built for every participant in a care episode
          </h2>
          <div className="mt-10 grid border border-line sm:grid-cols-2 lg:grid-cols-4 [&>*]:border-b [&>*]:border-line sm:[&>*]:border-r sm:[&>*:nth-child(2n)]:border-r-0 lg:[&>*]:border-r lg:[&>*:nth-child(4n)]:border-r-0 sm:[&>*:nth-last-child(-n+2)]:border-b-0 lg:[&>*:nth-last-child(-n+4)]:border-b-0">
            {TEAMS.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="p-6">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-500/10 text-brand-400 ring-1 ring-inset ring-brand-500/20">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="mt-3.5 font-display text-[15px] font-semibold text-zinc-100">{a.title}</p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-4 marker:text-zinc-700">
                    {a.points.map((pt) => (
                      <li key={pt} className="text-[12.5px] leading-snug text-zinc-500">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research — distinct band, its own background */}
      <section id="research" className="relative overflow-hidden border-b border-line bg-[#08090a]">
        <ResearchBackdrop />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-brand-400">05 · Research direction</p>
          <p className="mt-6 max-w-3xl font-display text-[24px] font-medium italic leading-snug text-zinc-100 sm:text-[28px]">
            "Can consent-aware clinical context assembly reduce the time and fragmentation involved in
            retrieving relevant patient information, while preserving patient control and access
            accountability?"
          </p>
          <p className="mt-6 max-w-2xl text-[13.5px] leading-relaxed text-zinc-500">
            The prototype instruments context-assembly time, records unified, navigation steps, blocked
            unauthorised attempts and consent enforcement, so the question can be studied with real
            interaction data. It does not claim results that have not been measured.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[11.5px] text-zinc-600">
            {["Context assembly time", "Records unified", "Navigation steps", "Blocked access attempts", "Consent enforcement", "Task completion time"].map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-[24px] font-semibold tracking-tight text-zinc-50">Explore Nexus</h2>
            <p className="mt-1.5 text-[13.5px] text-zinc-500">Seven personas. The full consent-to-context flow. No sign-up.</p>
          </div>
          <Link to="/login">
            <Button size="lg" icon={<ArrowRight className="h-4 w-4" />}>Open the demo workspace</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-[12px] text-zinc-600 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <NexusMark className="h-5 w-5" />
              <span>Jan Arogya Nexus · Consent-Aware Continuity of Care</span>
            </div>
            <p className="max-w-md sm:text-right">
              Prototype for the Avishkar Engineering &amp; Technology competition. Synthetic data only. No government
              affiliation. Not a certified ABDM / DPDP / HIPAA implementation.
            </p>
          </div>
          <div className="flex gap-5 border-t border-line pt-4">
            <Link to="/privacy" className="hover:text-zinc-400">Privacy</Link>
            <Link to="/terms" className="hover:text-zinc-400">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------- hero background */
function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <svg className="absolute inset-0 h-full w-full opacity-[0.35]" preserveAspectRatio="none">
        <defs>
          <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M56 0H0V56" fill="none" stroke="currentColor" strokeWidth="1" className="text-line" />
          </pattern>
          <radialGradient id="hero-fade" cx="30%" cy="20%" r="75%">
            <stop offset="0%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.9" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
        <rect width="100%" height="100%" fill="url(#hero-fade)" />
      </svg>
      <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-brand-500/[0.08] blur-[100px]" />
    </div>
  );
}

function ResearchBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
      <svg className="h-full w-full" preserveAspectRatio="none">
        <defs>
          <pattern id="research-lines" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M0 32H64M32 0V64" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-800" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#research-lines)" />
      </svg>
    </div>
  );
}

/* --------------------------------------------------- hero product graphic */
function ConsentGraphic() {
  const sources = [
    { y: 34, label: "Hospital", active: true },
    { y: 108, label: "Laboratory", active: true },
    { y: 182, label: "Pharmacy", active: false },
  ];
  return (
    <div className="relative rounded-xl border border-line bg-surface p-6">
      <svg viewBox="0 0 460 260" className="h-auto w-full" role="img" aria-label="Three source organisations connect through a consent gate to one authorised clinician">
        {sources.map((s) => (
          <path
            key={s.label}
            d={`M118 ${s.y + 16} C 170 ${s.y + 16}, 170 130, 222 130`}
            fill="none"
            stroke={s.active ? "#f5d742" : "#292a2c"}
            strokeWidth="2"
            strokeDasharray={s.active ? undefined : "5 5"}
          />
        ))}
        <path d="M300 130 C 350 130, 350 130, 400 130" fill="none" stroke="#f5d742" strokeWidth="2" />

        {sources.map((s) => (
          <g key={s.label}>
            <rect x="8" y={s.y} width="110" height="32" rx="6" className="fill-raised" stroke="#292a2c" />
            <circle cx="24" cy={s.y + 16} r="3.5" fill={s.active ? "#f5d742" : "#4b4d50"} />
            <text x="36" y={s.y + 20} fontSize="11" fontFamily="Inter, sans-serif" fill="#a1a1aa">{s.label}</text>
          </g>
        ))}

        <g>
          <rect x="222" y="96" width="78" height="68" rx="10" fill="#f5d742" />
          <foreignObject x="222" y="96" width="78" height="68">
            <div className="flex h-full w-full flex-col items-center justify-center gap-1">
              <Lock className="h-5 w-5 text-brand-950" strokeWidth={2.25} />
              <span className="text-center font-mono text-[8.5px] font-semibold uppercase tracking-wide text-brand-950">Consent</span>
            </div>
          </foreignObject>
        </g>

        <g>
          <rect x="400" y="106" width="52" height="48" rx="8" className="fill-raised" stroke="#292a2c" />
          <foreignObject x="400" y="106" width="52" height="48">
            <div className="flex h-full w-full items-center justify-center">
              <Stethoscope className="h-5 w-5 text-brand-400" />
            </div>
          </foreignObject>
        </g>
      </svg>

      <div className="mt-1 grid grid-cols-2 gap-3 border-t border-line pt-5 text-[12px]">
        <div>
          <p className="font-mono text-[9.5px] uppercase tracking-wide text-zinc-600">Sealed by default</p>
          <p className="mt-1 text-zinc-300">Pharmacy link stays dashed until the patient grants it.</p>
        </div>
        <div>
          <p className="font-mono text-[9.5px] uppercase tracking-wide text-zinc-600">Every crossing, logged</p>
          <p className="mt-1 text-zinc-300">Hospital and lab feeds are active, authorised, and audited.</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------ real product surface, in situ */
function ProductVisual() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-pop">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="font-mono text-[11px] uppercase tracking-wide text-zinc-500">Patient · clinical context</span>
        <span className="font-mono text-[10px] text-zinc-700">/app/patients/p-01</span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between border-b border-line pb-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded bg-brand-500/15 text-[13px] font-bold text-brand-400 ring-1 ring-inset ring-brand-500/20">AK</span>
            <div>
              <p className="font-display text-[15px] font-semibold text-zinc-100">Amit Kumar</p>
              <p className="text-[11.5px] text-zinc-500">Male · 34 · ABHA verified · NMC-NAS</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[10.5px] font-medium text-emerald-300 ring-1 ring-inset ring-emerald-500/25">
            <Check className="h-3 w-3" /> Access granted
          </span>
        </div>

        <div className="grid grid-cols-2 divide-x divide-line border-b border-line text-[12.5px]">
          <Row label="Allergies" value="Penicillin" tone="rose" />
          <Row label="Active problems" value="T2DM · Hypertension" />
          <Row label="Last encounter" value="IPD · Pneumonia" />
          <Row label="HbA1c" value="8.4% · above target" tone="amber" />
        </div>

        <div className="flex items-center justify-between px-1 pt-3 text-[11.5px] text-zinc-500">
          <span className="inline-flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-brand-400" /> 16 records unified · 3 organisations · one screen
          </span>
          <span className="font-mono text-zinc-700">consent con-03</span>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, tone }: { label: string; value: string; tone?: "rose" | "amber" }) {
  return (
    <div className="px-4 py-3">
      <p className="font-mono text-[9.5px] font-semibold uppercase tracking-wide text-zinc-600">{label}</p>
      <p className={`mt-1 text-[12.5px] font-medium ${tone === "rose" ? "text-rose-300" : tone === "amber" ? "text-amber-300" : "text-zinc-200"}`}>
        {value}
      </p>
    </div>
  );
}
