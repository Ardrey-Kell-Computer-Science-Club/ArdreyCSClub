export default function HackathonPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.2),transparent_50%)]" />

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          Hackathons Are
          <span className="block text-purple-400">Coming Soon</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
          The Ardrey Kell Computer Science Club is preparing exciting hackathon
          opportunities for members throughout the school year. Whether you&apos;re a
          beginner looking to build your first project or an experienced
          developer ready for a challenge, future hackathons will provide
          opportunities to collaborate, learn new technologies, and create
          innovative solutions with fellow students.
        </p>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6 backdrop-blur">
          <h2 className="mb-3 text-2xl font-semibold text-purple-400">
            What to Expect
          </h2>

          <ul className="space-y-2 text-zinc-300">
            <li>• Team-based project development</li>
            <li>• Beginner-friendly workshops</li>
            <li>• Mentorship and technical support</li>
            <li>• Real-world problem solving</li>
            <li>• Prizes, recognition, and showcases</li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          Check back soon for announcements, registration details, schedules,
          and upcoming hackathon events.
        </p>
      </div>
    </main>
  );
}
