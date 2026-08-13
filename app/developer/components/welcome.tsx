import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function Welcome() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold sm:text-4xl">Developer Guide</h1>

      <Card className="mb-6 border-zinc-800 bg-zinc-950">
        <CardContent className="p-6">
          <h2 className="mb-2 text-xl font-semibold">Get started locally</h2>
          <p className="text-zinc-400">
            Clone the repo, install dependencies, and run the dev server. A
            typical flow:
          </p>

          <ul className="mt-3 space-y-2 text-zinc-300">
            <li>
              1. git clone
              https://github.com/Ardrey-Kell-Computer-Science-Club/ArdreyCSClub.git
            </li>
            <li>2. npm install</li>
            <li>3. npm run dev</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6 border-zinc-800 bg-zinc-950">
        <CardContent className="p-6">
          <h2 className="mb-2 text-xl font-semibold">Contributing</h2>
          <p className="text-zinc-400">
            We welcome contributions! Our projects live under the official
            GitHub organization:{" "}
            <a
              href="https://github.com/Ardrey-Kell-Computer-Science-Club"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:underline"
            >
              Ardrey-Kell-Computer-Science-Club
            </a>
            . The easiest ways to help:
          </p>

          <ul className="mt-3 space-y-2 text-zinc-300">
            <li>
              - Open issues for bugs or feature ideas on the project GitHub.
            </li>
            <li>
              - Pick an issue labeled <em>good first issue</em> or{" "}
              <em>help wanted</em>.
            </li>
            <li>
              - Create a branch, implement your changes, and open a Pull
              Request. Use descriptive commit messages and link the issue.
            </li>
          </ul>

          <p className="mt-4 text-zinc-400">
            For code style, follow the existing patterns (Tailwind + React +
            TypeScript). Keep changes small and focused. If you&apos;re unsure, open
            a draft PR or start a discussion in an issue. We prefer new features
            and project code to be added under the organization so they are
            discoverable and maintained by the club.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6 border-zinc-800 bg-zinc-950">
        <CardContent className="p-6">
          <h2 className="mb-2 text-xl font-semibold">Helpful links</h2>

          <ul className="mt-3 space-y-2 text-zinc-300">
            <li>
              <Link
                href="https://github.com/shaypat112/ArdreyCSClub"
                className="text-purple-400 hover:underline"
              >
                Project repository on GitHub
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/shaypat112/ArdreyCSClub#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                Project README (development notes)
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-zinc-800 bg-zinc-950">
        <CardContent className="p-6">
          <h2 className="mb-2 text-xl font-semibold">Community & Support</h2>
          <p className="text-zinc-400">
            If you have questions, open an issue or reach out to the maintainers
            via GitHub. We try to respond quickly and help contributors get
            unblocked.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
