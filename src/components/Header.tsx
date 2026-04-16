import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-green-400 font-bold hover:text-green-300 transition-colors"
        >
          jell@dev:~$
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-white transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
