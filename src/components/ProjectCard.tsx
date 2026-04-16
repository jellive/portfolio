import { ExternalLink, GitFork } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-800 rounded-lg p-6 bg-gray-900 hover:border-gray-600 transition-colors">
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-gray-800 text-green-400 font-mono"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
          >
            <GitFork size={14} />
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
