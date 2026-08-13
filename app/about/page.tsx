import { Calendar2 } from "./components/calendar";
import Meetings from "./components/meetings";
import Mission from "./components/mission";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-4 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            About AKCS
          </div>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Ardrey Kell
            <span className="block text-purple-400">Computer Science Club</span>
          </h1>

          <p className="max-w-3xl text-lg text-zinc-400">
            The Ardrey Kell Computer Science Club is a community of students
            interested in programming, software development, cybersecurity,
            artificial intelligence, hackathons, and technology. We provide
            opportunities for students to learn, build projects, compete, and
            grow as future innovators.
          </p>
        </div>
      </section>

      <Mission />
      <Meetings />
      <Calendar2 />
    </main>
  );
}
