import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, Clock3, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ slug: "ahahacks" }];
}

type HackathonPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: HackathonPageProps): Promise<Metadata> {
  const { slug } = await params;
  return slug === "ahahacks"
    ? { title: "AHAHacks | AKCS Hackathons", description: "AHAHacks, the first AKCS hackathon in the second week of September 2026." }
    : {};
}

export default async function HackathonDetailPage({ params }: HackathonPageProps) {
  const { slug } = await params;
  if (slug !== "ahahacks") notFound();  // want to chabge this cod ehre later when moe hackathons get palced for nw should be fine however

  const rules = ["Teams of 2–4 students", "All project code is written during the event", "Public libraries and frameworks are allowed", "Projects should follow the event theme", "Every team presents its work at the end"];
  const judging = [["25%","Creativity"],["25%","Technical difficulty"],["20%","Polish"],["15%","Usefulness"],["15%","Presentation"]];

  return (
    <main className="min-h-screen bg-[var(--ak-bg)]">
      <section className="border-b border-[var(--ak-line)] px-5 py-12 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link href="/hackathons" className="mb-14 inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.14em] text-[var(--ak-muted)] hover:text-[var(--ak-orange)]"><ArrowLeft className="size-4" /> All hackathons</Link>
          <div className="grid gap-10 lg:grid-cols-[1fr_23rem] lg:items-end">
            <div><div className="mb-6 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.16em] text-[var(--ak-orange)]"><span className="size-2 bg-[var(--ak-orange)]" /> Registration open</div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-muted)]">AKCS first hackathon</p><h1 className="text-[clamp(4rem,13vw,10rem)] leading-[0.78] tracking-[-0.09em]">AHA<br /><span className="text-[var(--ak-orange)]">Hacks.</span></h1></div>
            <div className="border-l border-[var(--ak-orange)] pl-5"><p className="text-sm leading-7 text-[var(--ak-muted)]">A beginner-friendly sprint where teams turn an idea into a working project, get mentor support, and share what they built.</p><a href="https://form.typeform.com/to/PuDW3kHi" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center gap-3 bg-[var(--ak-orange)] px-5 text-xs uppercase tracking-[0.12em] text-[var(--ak-bg)]">Register interest <ArrowRight className="size-4" /></a></div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--ak-line)] px-5 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl sm:grid-cols-3">
        <div className="flex gap-4 border-b border-[var(--ak-line)] py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0"><Clock3 className="size-5 text-[var(--ak-orange)]" /><div><span className="text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ak-dim)]">Date</span><p className="mt-1 text-sm">Second week of September 2026</p></div></div>
        <div className="flex gap-4 border-b border-[var(--ak-line)] py-6 sm:border-b-0 sm:border-r sm:px-6"><Users className="size-5 text-[var(--ak-orange)]" /><div><span className="text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ak-dim)]">Team size</span><p className="mt-1 text-sm">2–4 students</p></div></div>
        <div className="flex gap-4 py-6 sm:px-6"><MapPin className="size-5 text-[var(--ak-orange)]" /><div><span className="text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ak-dim)]">Location + time</span><p className="mt-1 text-sm">Exact details coming soon</p></div></div>
      </div></section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">The brief</p><h2 className="text-4xl tracking-[-0.055em] sm:text-6xl">Build something useful.</h2><p className="mt-6 max-w-md text-sm leading-7 text-[var(--ak-muted)]">Choose a real problem, build a focused solution, and show how it helps. Web apps, mobile apps, AI/ML projects, developer tools, and creative software are all welcome.</p></div>
        <div className="border-l border-t border-[var(--ak-line)]"><div className="border-b border-r border-[var(--ak-line)] p-6 sm:p-8"><span className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ak-orange)]">Who should join?</span><p className="mt-4 text-xl leading-relaxed">Beginners, experienced coders, designers, presenters, problem-solvers, and students who simply want to try.</p></div><div className="grid sm:grid-cols-2"><div className="border-b border-r border-[var(--ak-line)] p-6"><span className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ak-orange)]">You get</span><p className="mt-3 text-sm leading-7 text-[var(--ak-muted)]">Mentors, beginner support, food, team collaboration, judging, prizes, recognition, and a final showcase.</p></div><div className="border-b border-r border-[var(--ak-line)] p-6"><span className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ak-orange)]">Bring</span><p className="mt-3 text-sm leading-7 text-[var(--ak-muted)]">A laptop, charger, ideas, and curiosity. We will help you find teammates if needed.</p></div></div></div>
      </div></section>

      <section className="border-y border-[var(--ak-line)] bg-[var(--ak-surface)] px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">Event rules</p><h2 className="text-4xl tracking-[-0.055em] sm:text-5xl">Keep it fair.</h2><ul className="mt-8 divide-y divide-[var(--ak-line)] border-y border-[var(--ak-line)]">{rules.map((rule)=><li key={rule} className="flex gap-3 py-4 text-sm"><Check className="size-4 shrink-0 text-[var(--ak-orange)]" />{rule}</li>)}</ul></div>
        <div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">Judging</p><h2 className="text-4xl tracking-[-0.055em] sm:text-5xl">What matters.</h2><div className="mt-8 border-l border-t border-[var(--ak-line)]">{judging.map(([value,label])=><div key={label} className="grid grid-cols-[5rem_1fr] border-b border-r border-[var(--ak-line)]"><strong className="border-r border-[var(--ak-line)] p-4 text-[var(--ak-orange)]">{value}</strong><span className="p-4 text-sm">{label}</span></div>)}</div></div>
      </div></section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-8 border border-[var(--ak-orange)] bg-[var(--ak-surface)] p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between"><div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">Your first hackathon starts here</p><h2 className="text-4xl tracking-[-0.055em] sm:text-6xl">Bring an idea. Leave with a project.</h2></div><a href="https://form.typeform.com/to/PuDW3kHi" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 shrink-0 items-center justify-between gap-6 bg-[var(--ak-orange)] px-6 text-xs uppercase tracking-[0.12em] text-[var(--ak-bg)]">Register interest <ArrowRight className="size-4" /></a></div></section>
    </main>
  );
}
