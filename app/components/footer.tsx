export default function Footer() {
  return (
    <footer className="mt-auto bg-black text-sm text-zinc-400 py-6">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mb-2">
          &copy; {new Date().getFullYear()} Ardrey Kell Computer Science Club.
        </div>

        <div>
          <a
            href="https://github.com/shaypat112/ArdreyCSClub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
