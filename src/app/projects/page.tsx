import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="font-mono text-sm text-green-400 mb-2">
        $ ls -la ./projects
      </div>
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-gray-400 mb-12">Things I&apos;ve built.</p>

      <section className="mb-16">
        <h2 className="text-lg font-semibold text-gray-300 mb-6 font-mono">
          // featured
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {rest.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-300 mb-6 font-mono">
            // other
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
