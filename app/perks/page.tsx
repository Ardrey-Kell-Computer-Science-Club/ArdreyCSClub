import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Check,
  Cloud,
  Code2,
  Cpu,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Palette,
  ShieldCheck,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Member Perks | AK Computer Science Club",
  description:
    "Explore free student technology offers, workshops, project teams, competitions, and career resources available to AK CS members.",
};

const studentOffers = [
  {
    name: "GitHub Student Developer Pack",
    icon: GitBranch,
    category: "Developer tools",
    description: "A rotating collection of developer tools, learning resources, hosting, and domain offers for verified students age 13+.",
    note: "Enrollment verification required",
    href: "https://education.github.com/pack",
  },
  {
    name: "JetBrains Student Pack",
    icon: Braces,
    category: "Professional IDEs",
    description: "Educational access to tools including IntelliJ IDEA, PyCharm, WebStorm, CLion, and more.",
    note: "High-school eligibility applies",
    href: "https://www.jetbrains.com/community/education/#students",
  },
  {
    name: "Figma for Education",
    icon: Palette,
    category: "UI / UX design",
    description: "Upgraded design and prototyping tools for interfaces, apps, websites, presentations, and collaborative projects.",
    note: "Student or school verification",
    href: "https://www.figma.com/education/",
  },
  {
    name: "Autodesk Education",
    icon: Wrench,
    category: "CAD + engineering",
    description: "Renewable educational access to Autodesk software, including tools for CAD, robotics, 3D design, and engineering.",
    note: "Educational use only",
    href: "https://www.autodesk.com/education/edu-software/overview",
  },
  {
    name: "AWS Educate",
    icon: Cloud,
    category: "Cloud computing",
    description: "Free, self-paced cloud learning with hands-on activities covering infrastructure, databases, and modern web systems.",
    note: "Available from age 13; no card",
    href: "https://aws.amazon.com/education/awseducate/",
  },
  {
    name: "Cisco Skills for All",
    icon: ShieldCheck,
    category: "Cybersecurity",
    description: "Free courses in cybersecurity, networking, Python, data science, operating systems, and computer hardware.",
    note: "Courses and achievements",
    href: "https://skillsforall.com/",
  },
  {
    name: "VS Code for Education",
    icon: Code2,
    category: "Learn to code",
    description: "A free browser-based computer science learning environment built around Visual Studio Code for students and teachers.",
    note: "Runs in your browser",
    href: "https://vscodeedu.com/",
  },
  {
    name: "Microsoft 365 Education",
    icon: GraduationCap,
    category: "School productivity",
    description: "Eligible students can use Microsoft education tools such as Word, PowerPoint, Excel, and Teams.",
    note: "School email eligibility varies",
    href: "https://www.microsoft.com/education/products/office-365-education",
  },
];

const learningTracks = [
  { number: "01", title: "Build for the web", skills: "HTML · CSS · JavaScript · TypeScript · React · Next.js", icon: Code2 },
  { number: "02", title: "Create with AI", skills: "Python · APIs · data science · machine learning · responsible AI", icon: Cpu },
  { number: "03", title: "Defend systems", skills: "Cybersecurity · networking · Linux · hardware · ethical hacking", icon: ShieldCheck },
  { number: "04", title: "Ship real software", skills: "Git · GitHub · databases · cloud · Docker · open source", icon: GitBranch },
];

const clubBenefits = [
  "Beginner mentorship and advanced project teams",
  "Hackathon and Congressional App Challenge teams",
  "USACO and competitive-programming preparation",
  "Open-source contributions and production projects",
  "GitHub portfolio, resume, and LinkedIn workshops",
  "Internship board and CS competition alerts",
  "Guest speakers and college CS student panels",
  "Mock technical interviews and DSA sessions",
  "Project showcases, recognition, and leadership roles",
  "Web, mobile, game, AI/ML, and cybersecurity workshops",
];

export default function PerksPage() {
  return (
    <main className="min-h-screen bg-[var(--ak-bg)]">
      <section className="border-b border-[var(--ak-line)] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-between border-b border-[var(--ak-line)] pb-3 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ak-dim)]">
            <span>AKCS / member access</span>
            <span className="flex items-center gap-2 text-[var(--ak-orange)]"><span className="size-2 bg-[var(--ak-orange)]" /> Perks online</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[var(--ak-orange)]">Learn more. Build more. Go further.</p>
              <h1 className="max-w-5xl text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.84] tracking-[-0.085em]">Member<br /><span className="text-[var(--ak-orange)]">perks.</span></h1>
            </div>
            <div className="border-l border-[var(--ak-orange)] pl-5">
              <p className="text-sm leading-7 text-[var(--ak-muted)]">Your membership connects you to professional tools, hands-on workshops, project teammates, competitions, and career-building experiences.</p>
              <a href="#offers" className="mt-6 inline-flex min-h-12 items-center gap-3 border border-[var(--ak-orange)] bg-[var(--ak-orange)] px-5 text-xs uppercase tracking-[0.12em] text-[var(--ak-bg)]">Explore the perks <ArrowRight className="size-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--ak-line)] px-5 sm:px-8 lg:px-12" aria-label="Perks summary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[var(--ak-line)] sm:grid-cols-4">
          {[["08", "student offers"], ["10+", "club benefits"], ["04", "learning tracks"], ["01", "community"]].map(([value, label]) => (
            <div key={label} className="px-4 py-7 first:pl-0 sm:px-7"><div className="text-2xl text-[var(--ak-orange)] sm:text-3xl">{value}</div><div className="mt-1 text-[0.62rem] uppercase tracking-[0.15em] text-[var(--ak-dim)]">{label}</div></div>
          ))}
        </div>
      </section>

      <section id="offers" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 border-b border-[var(--ak-line)] pb-7 md:grid-cols-[1fr_1fr] md:items-end">
            <div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">01 / Claim your access</p><h2 className="text-4xl tracking-[-0.055em] sm:text-6xl">Free student offers</h2></div>
            <p className="max-w-xl text-sm leading-7 text-[var(--ak-muted)] md:justify-self-end">These offers come from third-party education programs. Availability and verification rules can change; AKCS helps members find and apply for them.</p>
          </div>
          <div className="grid border-l border-t border-[var(--ak-line)] sm:grid-cols-2 lg:grid-cols-4">
            {studentOffers.map((offer, index) => {
              const Icon = offer.icon;
              return <a key={offer.name} href={offer.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-[21rem] flex-col border-b border-r border-[var(--ak-line)] bg-[var(--ak-surface)] p-5 transition-colors hover:bg-[var(--ak-surface-raised)] sm:p-6">
                <div className="flex items-start justify-between"><Icon className="size-7 text-[var(--ak-orange)]" strokeWidth={1.4} /><span className="text-[0.62rem] text-[var(--ak-dim)]">{String(index + 1).padStart(2, "0")}</span></div>
                <div className="mt-auto"><p className="mb-3 text-[0.62rem] uppercase tracking-[0.15em] text-[var(--ak-orange)]">{offer.category}</p><h3 className="text-xl leading-tight tracking-[-0.035em]">{offer.name}</h3><p className="mt-4 text-xs leading-6 text-[var(--ak-muted)]">{offer.description}</p><div className="mt-5 flex items-center justify-between border-t border-[var(--ak-line-soft)] pt-4 text-[0.62rem] uppercase tracking-[0.1em] text-[var(--ak-dim)]"><span>{offer.note}</span><ExternalLink className="size-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div></div>
              </a>;
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--ak-line)] bg-[var(--ak-surface)] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">02 / Pick a direction</p>
          <h2 className="mb-10 text-4xl tracking-[-0.055em] sm:text-6xl">Things you can learn</h2>
          <div className="divide-y divide-[var(--ak-line)] border-y border-[var(--ak-line)]">
            {learningTracks.map((track) => { const Icon = track.icon; return <div key={track.number} className="grid gap-4 py-6 sm:grid-cols-[3rem_1fr_1fr_auto] sm:items-center sm:gap-6"><span className="text-xs text-[var(--ak-dim)]">{track.number}</span><div className="flex items-center gap-4"><Icon className="size-6 text-[var(--ak-orange)]" strokeWidth={1.5} /><h3 className="text-xl sm:text-2xl">{track.title}</h3></div><p className="text-xs leading-6 text-[var(--ak-muted)] sm:text-sm">{track.skills}</p><ArrowRight className="hidden size-5 text-[var(--ak-dim)] sm:block" /></div>; })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">03 / Built by the club</p><h2 className="text-4xl tracking-[-0.055em] sm:text-6xl">More than free software.</h2><p className="mt-6 max-w-md text-sm leading-7 text-[var(--ak-muted)]">The strongest benefits come from making things together. These are the teams, workshops, resources, and experiences AKCS is building for members.</p></div>
          <ul className="grid border-l border-t border-[var(--ak-line)] sm:grid-cols-2">
            {clubBenefits.map((benefit, index) => <li key={benefit} className="flex min-h-28 gap-4 border-b border-r border-[var(--ak-line)] p-5 text-sm leading-6"><span className="text-[0.62rem] text-[var(--ak-dim)]">{String(index + 1).padStart(2, "0")}</span><Check className="mt-0.5 size-4 shrink-0 text-[var(--ak-orange)]" /><span>{benefit}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="border-t border-[var(--ak-line)] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl border border-[var(--ak-orange)] bg-[var(--ak-surface)] p-6 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><div className="mb-8 flex gap-3"><Users className="size-6 text-[var(--ak-orange)]" /><Trophy className="size-6 text-[var(--ak-orange)]" /></div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">Ready to unlock more?</p><h2 className="max-w-4xl text-4xl tracking-[-0.06em] sm:text-6xl">Join the people who build.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--ak-muted)]">Beginners, programmers, designers, hackers, and curious problem-solvers are all welcome.</p></div>
            <Link href="https://form.typeform.com/to/PuDW3kHi" target="_blank" className="inline-flex min-h-14 w-full items-center justify-between gap-5 bg-[var(--ak-orange)] px-6 text-xs uppercase tracking-[0.12em] text-[var(--ak-bg)] sm:w-auto">Apply to AKCS <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
