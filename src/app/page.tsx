import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-20">
        <div className="font-mono text-sm text-green-400 mb-2">$ whoami</div>
        <h1 className="text-4xl font-bold mb-4">Jell</h1>
        <p className="text-xl text-gray-400">
          Full-stack developer building secure, scalable applications.
          <br />
          Flutter · Next.js · NestJS · Security · DevOps
        </p>
      </section>

      {/* Featured Projects */}
      <section className="mb-20">
        <div className="font-mono text-sm text-green-400 mb-2">
          $ ls ./projects --featured
        </div>
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-6">
          <a
            href="/projects"
            className="text-sm text-green-400 hover:text-green-300 font-mono transition-colors"
          >
            view all projects →
          </a>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="font-mono text-sm text-green-400 mb-2">
          $ cat ./skills.txt
        </div>
        <h2 className="text-2xl font-bold mb-8">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              category: "Mobile",
              items: ["Flutter", "Dart", "iOS", "Android"],
            },
            {
              category: "Frontend",
              items: ["Next.js", "React", "TypeScript", "Tailwind"],
            },
            {
              category: "Backend",
              items: ["NestJS", "Spring Boot", "Node.js", "PostgreSQL"],
            },
            {
              category: "Security",
              items: ["OSINT", "Threat Intel", "Pentesting", "CTF"],
            },
            {
              category: "DevOps",
              items: ["Docker", "Nginx", "CI/CD", "Linux"],
            },
            {
              category: "Tools",
              items: ["Git", "Electron", "Figma", "Obsidian"],
            },
          ].map(({ category, items }) => (
            <div
              key={category}
              className="border border-gray-800 rounded-lg p-4 bg-gray-900"
            >
              <h3 className="text-sm font-semibold text-green-400 font-mono mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="text-xs text-gray-300">
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
