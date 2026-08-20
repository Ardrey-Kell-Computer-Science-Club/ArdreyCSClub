import type { Metadata } from "next";
import { ArrowRight, CalendarDays, Clock3, Code2, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hackathons | AK Computer Science Club",
  description: "Discover current and upcoming AKCS hackathons, buildathons, and student coding events.",
};

const futureEvents = [
  { season: "Fall 2026", title: "Fall Hackathon", description: "A longer team challenge focused on building something useful.", status: "Planning" },
  { season: "Winter 2027", title: "AI Buildathon", description: "A guided sprint exploring artificial intelligence and machine learning.", status: "Planned" },
  { season: "Spring 2027", title: "Social Impact Hackathon", description: "Build technology that helps the school or wider community.", status: "Planned" },
];

export default function HackathonsPage() {
  return (
    <main className="min-h-screen bg-[var(--ak-bg)]">
      <section className="border-b border-[var(--ak-line)] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-between border-b border-[var(--ak-line)] pb-3 text-[0.62rem] uppercase tracking-[0.18em] text-[var(--ak-dim)]"><span>AKCS / events</span><span>2026–27 season</span></div>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[var(--ak-orange)]">Build under pressure. Learn together.</p>
          <h1 className="max-w-6xl text-[clamp(3.6rem,10vw,8.5rem)] leading-[0.84] tracking-[-0.085em]">Hackathons<br /><span className="text-[var(--ak-orange)]">at AK.</span></h1>
          <div className="mt-10 grid gap-6 border-t border-[var(--ak-line)] pt-6 md:grid-cols-2"><p className="max-w-xl text-sm leading-7 text-[var(--ak-muted)]">This is the home for every AKCS hackathon and buildathon—not just one event. Find what is open now, then scroll through what is being planned for the rest of the year.</p><div className="flex flex-wrap gap-x-8 gap-y-3 text-[0.68rem] uppercase tracking-[0.12em] text-[var(--ak-muted)] md:justify-self-end"><span className="flex items-center gap-2"><Users className="size-4 text-[var(--ak-orange)]" /> Teams</span><span className="flex items-center gap-2"><Code2 className="size-4 text-[var(--ak-orange)]" /> Build</span><span className="flex items-center gap-2"><Clock3 className="size-4 text-[var(--ak-orange)]" /> Present</span></div></div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4"><div><p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">Open now</p><h2 className="text-3xl tracking-[-0.05em] sm:text-5xl">Featured event</h2></div><span className="hidden text-[0.65rem] uppercase tracking-[0.12em] text-[var(--ak-dim)] sm:block">Select to view full brief</span></div>
          <Link href="/hackathons/ahahacks" className="group grid min-h-[31rem] border border-[var(--ak-orange)] bg-[var(--ak-surface)] md:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col p-6 sm:p-10 lg:p-14"><div className="flex items-center justify-between"><span className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.14em] text-[var(--ak-orange)]"><span className="size-2 bg-[var(--ak-orange)]" /> Registration open</span><span className="text-[0.65rem] text-[var(--ak-dim)]">001</span></div><div className="mt-auto"><p className="mb-4 text-xs uppercase tracking-[0.16em] text-[var(--ak-muted)]">AHA Hacks presents</p><h3 className="text-[clamp(3rem,8vw,7rem)] leading-[0.86] tracking-[-0.08em]">IGNITE</h3><p className="mt-6 text-lg text-[var(--ak-orange)]">Start with a spark. Build something real.</p><p className="mt-3 max-w-xl text-sm leading-7 text-[var(--ak-muted)]">Turn the beginning of an idea into a working prototype, then show everyone what it can become.</p></div></div>
            <div className="flex flex-col border-t border-[var(--ak-line)] bg-[var(--ak-bg)] p-6 md:border-l md:border-t-0 sm:p-10"><div className="grid gap-5 border-y border-[var(--ak-line)] py-6"><div><span className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ak-dim)]">When</span><p className="mt-2 text-xl">Second week of September</p></div><div><span className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ak-dim)]">Format</span><p className="mt-2 text-xl">Teams of 1–4</p></div><div><span className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ak-dim)]">Experience</span><p className="mt-2 text-xl">Beginners welcome</p></div></div><div className="mt-auto flex items-center justify-between pt-8 text-xs uppercase tracking-[0.12em] text-[var(--ak-orange)]"><span>Open event details</span><ArrowRight className="size-5 transition-transform group-hover:translate-x-2" /></div></div>
          </Link>
        </div>
      </section>

      <section className="border-y border-[var(--ak-line)] bg-[var(--ak-surface)] py-16 sm:py-24">
        <div className="mx-auto mb-8 max-w-7xl px-5 sm:px-8 lg:px-12"><p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">On the horizon</p><div className="flex items-end justify-between"><h2 className="text-3xl tracking-[-0.05em] sm:text-5xl">The season ahead</h2><span className="text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ak-dim)]">Scroll →</span></div></div>
        <div className="hackathon-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12">
          {futureEvents.map((event, index) => <article key={event.title} className="flex min-h-80 w-[82vw] max-w-md shrink-0 snap-start flex-col border border-[var(--ak-line)] bg-[var(--ak-bg)] p-6 sm:w-[26rem]"><div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.12em]"><span className="text-[var(--ak-orange)]">{event.season}</span><span className="text-[var(--ak-dim)]">0{index + 2}</span></div><CalendarDays className="mt-12 size-7 text-[var(--ak-orange)]" strokeWidth={1.4} /><h3 className="mt-auto text-2xl tracking-[-0.04em]">{event.title}</h3><p className="mt-3 text-xs leading-6 text-[var(--ak-muted)]">{event.description}</p><div className="mt-5 border-t border-[var(--ak-line-soft)] pt-4 text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ak-dim)]">{event.status}</div></article>)}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">Every event includes</p><h2 className="text-4xl tracking-[-0.055em] sm:text-6xl">Make something real.</h2></div><ul className="grid border-l border-t border-[var(--ak-line)] sm:grid-cols-2">{["Team-based development","Beginner workshops","Mentor support","Project judging","Prizes + recognition","Final showcase"].map((item,index)=><li key={item} className="flex min-h-24 items-center gap-4 border-b border-r border-[var(--ak-line)] p-5 text-sm"><span className="text-[0.62rem] text-[var(--ak-dim)]">0{index+1}</span>{item}</li>)}</ul></div></section>
    </main>
  );
}
