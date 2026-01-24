import { projects, type Project } from "@/lib/portfolio-data"
import { Github, ExternalLink, Folder, Star } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={cn(
        "group relative p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300",
        featured && "lg:col-span-1"
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <Folder className="w-5 h-5 text-primary" />
          {featured && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
        </div>
        <div className="flex items-center gap-3">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">View source on GitHub</span>
            </Link>
          )}
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="sr-only">View live site</span>
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
        {project.name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs font-mono text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
        <span
          className={cn(
            "text-xs font-mono px-2 py-1 rounded",
            project.status === "Live" && "bg-green-500/10 text-green-500",
            project.status === "In Progress" && "bg-yellow-500/10 text-yellow-500",
            project.status === "Idea" && "bg-blue-500/10 text-blue-500"
          )}
        >
          {project.status}
        </span>
      </div>
    </article>
  )
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">
          Featured Projects
        </h2>
        <p className="text-muted-foreground mb-8">
          Things I&apos;ve built that I&apos;m proud of.
        </p>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} featured />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
