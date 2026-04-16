const posts = [
  {
    slug: "threat-intel-osint",
    title: "Building a Threat Intelligence Platform with OSINT",
    date: "2025-03-15",
    summary:
      "How I built Threat Crawler — scraping dark web sources, normalizing IOCs, and surfacing actionable intel.",
    tags: ["Security", "OSINT", "NestJS"],
  },
  {
    slug: "flutter-security-best-practices",
    title: "Flutter Security Best Practices",
    date: "2025-01-20",
    summary:
      "Certificate pinning, secure storage, jailbreak detection — what actually matters in production Flutter apps.",
    tags: ["Flutter", "Security", "Mobile"],
  },
  {
    slug: "nextjs-monorepo-setup",
    title: "Next.js Monorepo with Turborepo and pnpm",
    date: "2024-11-05",
    summary:
      "Setting up a production-grade monorepo for multiple Next.js apps sharing components and types.",
    tags: ["Next.js", "DevOps", "TypeScript"],
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="font-mono text-sm text-green-400 mb-2">
        $ cat ./blog/index.md
      </div>
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-gray-400 mb-12">
        Writing about code, security, and building things.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-gray-800 rounded-lg p-6 bg-gray-900 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <time className="text-xs text-gray-500 font-mono">
                {post.date}
              </time>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-gray-800 text-green-400 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2 hover:text-green-400 transition-colors cursor-pointer">
              {post.title}
            </h2>
            <p className="text-gray-400 text-sm">{post.summary}</p>
          </article>
        ))}
      </div>

      <p className="mt-12 text-sm text-gray-600 font-mono">
        // MDX support coming soon
      </p>
    </div>
  );
}
