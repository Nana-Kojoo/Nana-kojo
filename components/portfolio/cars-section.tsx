import { carsSection } from "@/lib/portfolio-data"
import { Car, Wrench } from "lucide-react"

export function CarsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/20 p-8 md:p-12">
          {/* Decorative element */}
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
                Beyond Code
              </h2>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 max-w-xl">
              {carsSection.headline}
            </h3>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {carsSection.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                Automotive Projects
              </h4>
              <ul className="space-y-2">
                {carsSection.projects.map((project) => (
                  <li key={project} className="text-sm text-foreground flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
