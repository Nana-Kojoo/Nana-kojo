import { experience } from "@/lib/portfolio-data"
import { Briefcase } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-8 uppercase tracking-wider">
          Work Experience
        </h2>

        <div className="space-y-0">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.period}`}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-b border-border last:border-b-0 hover:bg-secondary/20 -mx-6 px-6 transition-colors"
            >
              <div className="text-sm font-mono text-muted-foreground">
                {job.period}
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {job.role}
                  </h3>
                  <p className="text-primary text-sm">{job.company}</p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
