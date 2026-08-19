import { ArrowRight, BookOpen, Check, Code2, ExternalLink, FileCode2, GitBranch, Lightbulb, MessageCircleQuestion, Rocket, Terminal, Users } from "lucide-react";

const orgUrl = "https://github.com/Ardrey-Kell-Computer-Science-Club";

const projects = [
  { name: "ArdreyCSClub", type: "TypeScript · website", description: "The official AKCS website. A great place to practice React, Next.js, responsive design, and accessible UI.", href: `${orgUrl}/ArdreyCSClub` },
  { name: "AKCSDiscordBot", type: "TypeScript · automation", description: "The code behind the official club Discord bot. Learn commands, events, APIs, and practical automation.", href: `${orgUrl}/AKCSDiscordBot` },
  { name: "TutorWeb3", type: "TypeScript · student platform", description: "A tutoring platform for AK computer science students to schedule support and find academic resources.", href: `${orgUrl}/TutorWeb3` },
  { name: "AKCS Wiki", type: "TypeScript · learning", description: "Guides and resources for computer science topics, hackathons, competitions, and club projects.", href: `${orgUrl}/AK-Computer-Science-Club-WIKI` },
];

const glossary = [
  ["Repository", "A project folder tracked by GitHub, including its code and history."],
  ["Clone", "Download a working copy of a repository to your computer."],
  ["Branch", "A safe lane where you can make changes without affecting main."],
  ["Commit", "A saved checkpoint with a short explanation of what changed."],
  ["Pull request", "A request for maintainers to review and merge your changes."],
  ["Issue", "A tracked bug, task, question, or feature idea."],
];

const steps = [
  { title: "Create your GitHub account", copy: "Choose a professional username, verify your email, and add a short profile. Your profile becomes a public portfolio of what you build.", action: "Create an account", href: "https://github.com/signup" },
  { title: "Install your tools", copy: "Install Git, Node.js, and VS Code. Git tracks changes, Node runs our TypeScript projects, and VS Code is where you edit files.", action: "Install Git", href: "https://git-scm.com/downloads" },
  { title: "Pick a repository", copy: "Open an AKCS project, read its README, and check the Issues tab. Start with a small documentation, design, or bug-fix task.", action: "Browse the organization", href: orgUrl },
  { title: "Make your first contribution", copy: "Create a branch, make one focused change, test it, commit it, push it, and open a pull request explaining what you changed.", action: "See open issues", href: `${orgUrl}/ArdreyCSClub/issues` },
];

const commands = [
  ["01", "Clone the website", "git clone https://github.com/Ardrey-Kell-Computer-Science-Club/ArdreyCSClub.git"],
  ["02", "Enter the folder", "cd ArdreyCSClub"],
  ["03", "Install packages", "npm install"],
  ["04", "Create your branch", "git switch -c your-name/short-change"],
  ["05", "Start the website", "npm run dev"],
];

export function Welcome() {
  return (
    <main className="min-h-screen bg-[var(--ak-bg)]">
      <section className="border-b border-[var(--ak-line)] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-between border-b border-[var(--ak-line)] pb-3 text-[0.62rem] uppercase tracking-[0.18em] text-[var(--ak-dim)]">
            <span>AKCS / developer docs</span>
            <span className="flex items-center gap-2 text-[var(--ak-orange)]"><span className="size-2 bg-[var(--ak-orange)]" /> Beginner mode</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-end">
            <div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-[var(--ak-orange)]">No experience required</p><h1 className="max-w-5xl text-[clamp(3.4rem,9vw,8rem)] leading-[0.86] tracking-[-0.085em]">Start<br /><span className="text-[var(--ak-orange)]">building.</span></h1></div>
            <div className="border-l border-[var(--ak-orange)] pl-5"><p className="text-sm leading-7 text-[var(--ak-muted)]">A zero-to-first-pull-request guide for AKCS members. Learn the language, set up your computer, choose a real club project, and ship a small change.</p><a href="#start" className="mt-6 inline-flex min-h-12 items-center gap-3 bg-[var(--ak-orange)] px-5 text-xs uppercase tracking-[0.12em] text-[var(--ak-bg)]">Start here <ArrowRight className="size-4" /></a></div>
          </div>
        </div>
      </section>

      <nav className="sticky top-16 z-30 overflow-x-auto border-b border-[var(--ak-line)] bg-[color:var(--ak-bg)]/95 px-5 backdrop-blur sm:px-8 lg:px-12" aria-label="Developer guide sections">
        <div className="mx-auto flex min-w-max max-w-7xl gap-8 py-4 text-[0.66rem] uppercase tracking-[0.14em] text-[var(--ak-muted)]">
          <a href="#start" className="hover:text-[var(--ak-orange)]">01 Start</a><a href="#terminal" className="hover:text-[var(--ak-orange)]">02 Setup</a><a href="#workflow" className="hover:text-[var(--ak-orange)]">03 Workflow</a><a href="#projects" className="hover:text-[var(--ak-orange)]">04 Projects</a><a href="#help" className="hover:text-[var(--ak-orange)]">05 Help</a>
        </div>
      </nav>

      <section id="start" className="scroll-mt-36 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 border-b border-[var(--ak-line)] pb-7 md:grid-cols-2 md:items-end"><div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">01 / Your path</p><h2 className="text-4xl tracking-[-0.055em] sm:text-6xl">From curious to contributor.</h2></div><p className="max-w-xl text-sm leading-7 text-[var(--ak-muted)] md:justify-self-end">Work through these in order. You do not need to memorize every command—understand the goal, then use the examples when you need them.</p></div>
          <div className="grid border-l border-t border-[var(--ak-line)] md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => <article key={step.title} className="flex min-h-[22rem] flex-col border-b border-r border-[var(--ak-line)] bg-[var(--ak-surface)] p-5 sm:p-6"><span className="text-xs text-[var(--ak-orange)]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-12 text-2xl tracking-[-0.04em]">{step.title}</h3><p className="mt-4 text-xs leading-6 text-[var(--ak-muted)]">{step.copy}</p><a href={step.href} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-between border-t border-[var(--ak-line-soft)] pt-4 text-[0.65rem] uppercase tracking-[0.1em] text-[var(--ak-orange)]">{step.action}<ExternalLink className="size-3.5" /></a></article>)}
          </div>
        </div>
      </section>

      <section id="terminal" className="scroll-mt-36 border-y border-[var(--ak-line)] bg-[var(--ak-surface)] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">02 / Local setup</p><h2 className="text-4xl tracking-[-0.055em] sm:text-6xl">Run the site.</h2><p className="mt-6 max-w-md text-sm leading-7 text-[var(--ak-muted)]">Open Terminal on macOS/Linux or PowerShell on Windows. Run one line at a time. If a command fails, read the last error line and ask for help.</p><div className="mt-8 border-l border-[var(--ak-orange)] pl-4 text-xs leading-6 text-[var(--ak-muted)]"><strong className="block text-[var(--ak-text)]">Before you start</strong>Install Git and the current Node.js LTS release. Never paste passwords, API keys, or private tokens into code or GitHub.</div></div>
          <div className="overflow-hidden border border-[var(--ak-line)] bg-[#09080c]"><div className="flex items-center justify-between border-b border-[var(--ak-line)] px-4 py-3 text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ak-dim)]"><span className="flex items-center gap-2"><Terminal className="size-3.5" /> terminal</span><span>copy line by line</span></div><ol>{commands.map(([number, label, command]) => <li key={number} className="grid gap-2 border-b border-[var(--ak-line-soft)] p-4 last:border-0 sm:grid-cols-[2rem_9rem_1fr] sm:items-center"><span className="text-[0.62rem] text-[var(--ak-dim)]">{number}</span><span className="text-xs text-[var(--ak-muted)]">{label}</span><code className="overflow-x-auto whitespace-nowrap bg-[var(--ak-surface)] px-3 py-2 text-[0.7rem] text-[var(--ak-orange)] sm:text-xs">{command}</code></li>)}</ol></div>
        </div>
      </section>

      <section id="workflow" className="scroll-mt-36 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl"><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">03 / GitHub language</p><h2 className="mb-10 text-4xl tracking-[-0.055em] sm:text-6xl">Know the workflow.</h2><dl className="grid border-l border-t border-[var(--ak-line)] sm:grid-cols-2 lg:grid-cols-3">{glossary.map(([term, definition], index) => <div key={term} className="min-h-44 border-b border-r border-[var(--ak-line)] p-5 sm:p-6"><div className="mb-8 flex items-center justify-between"><GitBranch className="size-5 text-[var(--ak-orange)]" /><span className="text-[0.62rem] text-[var(--ak-dim)]">{String(index + 1).padStart(2, "0")}</span></div><dt className="text-xl">{term}</dt><dd className="mt-3 text-xs leading-6 text-[var(--ak-muted)]">{definition}</dd></div>)}</dl>
          <div className="mt-10 grid gap-px border border-[var(--ak-line)] bg-[var(--ak-line)] sm:grid-cols-5">{["Choose an issue", "Create a branch", "Make + test", "Commit + push", "Open a PR"].map((item, index) => <div key={item} className="bg-[var(--ak-surface)] p-5"><span className="text-[0.62rem] text-[var(--ak-orange)]">STEP {index + 1}</span><p className="mt-3 text-sm">{item}</p></div>)}</div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-36 border-y border-[var(--ak-line)] bg-[var(--ak-surface)] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl"><div className="mb-10 flex flex-col gap-5 border-b border-[var(--ak-line)] pb-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">04 / Real club code</p><h2 className="text-4xl tracking-[-0.055em] sm:text-6xl">Choose a project.</h2></div><a href={orgUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[var(--ak-orange)]">View organization <ExternalLink className="size-4" /></a></div>
          <div className="grid border-l border-t border-[var(--ak-line)] md:grid-cols-2">{projects.map((project, index) => <a key={project.name} href={project.href} target="_blank" rel="noopener noreferrer" className="group min-h-64 border-b border-r border-[var(--ak-line)] bg-[var(--ak-bg)] p-5 transition-colors hover:bg-[var(--ak-surface-raised)] sm:p-7"><div className="flex items-start justify-between"><FileCode2 className="size-6 text-[var(--ak-orange)]" /><span className="text-[0.62rem] text-[var(--ak-dim)]">0{index + 1}</span></div><p className="mt-10 text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ak-orange)]">{project.type}</p><h3 className="mt-2 flex items-center justify-between text-2xl tracking-[-0.04em]">{project.name}<ArrowRight className="size-5 transition-transform group-hover:translate-x-1" /></h3><p className="mt-4 max-w-xl text-xs leading-6 text-[var(--ak-muted)]">{project.description}</p></a>)}</div>
        </div>
      </section>

      <section id="help" className="scroll-mt-36 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl border border-[var(--ak-orange)] bg-[var(--ak-surface)] p-6 sm:p-10 lg:p-14"><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><div className="mb-8 flex gap-3 text-[var(--ak-orange)]"><MessageCircleQuestion className="size-6" /><Users className="size-6" /><Lightbulb className="size-6" /></div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--ak-orange)]">05 / Getting unstuck</p><h2 className="max-w-4xl text-4xl tracking-[-0.06em] sm:text-6xl">Questions are part of coding.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--ak-muted)]">Before asking, copy the exact error, note the command you ran, and explain what you expected. Open a GitHub issue for project problems or bring your laptop to an AKCS meeting for hands-on help.</p><div className="mt-7 grid gap-3 text-xs text-[var(--ak-muted)] sm:grid-cols-3"><span className="flex gap-2"><Check className="size-4 text-[var(--ak-orange)]" /> Exact error message</span><span className="flex gap-2"><Check className="size-4 text-[var(--ak-orange)]" /> Steps to reproduce</span><span className="flex gap-2"><Check className="size-4 text-[var(--ak-orange)]" /> What you already tried</span></div></div><a href={`${orgUrl}/ArdreyCSClub/issues/new`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 w-full items-center justify-between gap-5 bg-[var(--ak-orange)] px-6 text-xs uppercase tracking-[0.12em] text-[var(--ak-bg)] sm:w-auto">Ask on GitHub <Rocket className="size-4" /></a></div></div>
      </section>

      <section className="border-t border-[var(--ak-line)] px-5 py-10 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--ak-dim)] sm:flex-row sm:items-center sm:justify-between"><span className="flex items-center gap-2"><BookOpen className="size-4" /> Docs for first-time contributors</span><a href={orgUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--ak-orange)]">Ardrey Kell Computer Science Club <Code2 className="size-4" /></a></div></section>
    </main>
  );
}
