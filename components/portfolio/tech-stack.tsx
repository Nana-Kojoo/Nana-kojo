import { techStack } from "@/lib/portfolio-data"

type CategoryKey = keyof typeof techStack

const categories: { key: CategoryKey; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
  { key: "payments", label: "Payments" },
]

export function TechStack() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-8 uppercase tracking-wider">
          What I Work With
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.key} className="space-y-4">
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack[category.key].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md font-mono hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
