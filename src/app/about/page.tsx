const timeline = [
  {
    year: "2024–present",
    role: "Full-stack Developer",
    company: "Azflow",
    description:
      "VC/investment management platform. NestJS + React, handling fund/LP/portfolio data.",
  },
  {
    year: "2023–present",
    role: "Indie Developer",
    company: "Self",
    description:
      "Building Vinjari, Wecanner, Cookting. Flutter + Next.js + Spring Boot ecosystem.",
  },
  {
    year: "2022–2023",
    role: "Security Research",
    company: "Self",
    description:
      "OSINT tooling, threat intelligence, IOC scanning. Threat Crawler & IOC Scanner.",
  },
];

const skills = {
  Languages: ["TypeScript", "Dart", "Java", "Python", "Swift", "Kotlin"],
  "Mobile / Frontend": ["Flutter", "Next.js", "React", "Tailwind CSS"],
  Backend: ["NestJS", "Spring Boot", "Node.js", "PostgreSQL", "MySQL", "Redis"],
  Security: ["OSINT", "Threat Intelligence", "Penetration Testing", "CTF"],
  DevOps: ["Docker", "Nginx", "GitHub Actions", "Linux", "Cloudflare"],
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="font-mono text-sm text-green-400 mb-2">
        $ cat ./about.md
      </div>
      <h1 className="text-3xl font-bold mb-6">About</h1>

      <section className="mb-16">
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Full-stack developer based in Korea. I build mobile apps, web
          platforms, and security tools — usually all three at once.
        </p>
        <p className="text-gray-400 leading-relaxed">
          TDD purist. Investigation-first debugger. I care about getting things
          right the first time more than moving fast and breaking things.
        </p>
      </section>

      <section className="mb-16">
        <div className="font-mono text-sm text-green-400 mb-4">// timeline</div>
        <div className="space-y-6">
          {timeline.map((item) => (
            <div key={item.year} className="flex gap-6">
              <div className="w-28 shrink-0 text-xs text-gray-500 font-mono pt-1">
                {item.year}
              </div>
              <div className="border-l border-gray-700 pl-6">
                <div className="font-semibold">{item.role}</div>
                <div className="text-sm text-green-400 font-mono mb-1">
                  {item.company}
                </div>
                <div className="text-sm text-gray-400">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="font-mono text-sm text-green-400 mb-4">// skills</div>
        <div className="space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex gap-4">
              <div className="w-44 shrink-0 text-xs text-gray-500 font-mono pt-0.5">
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="text-sm text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
