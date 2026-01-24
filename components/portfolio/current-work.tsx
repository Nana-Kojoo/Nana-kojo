import { currentWork } from "@/lib/portfolio-data"
import { Rocket } from "lucide-react"

export function CurrentWork() {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Rocket className="w-5 h-5 text-primary" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
            Currently Working On
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {currentWork.map((item, index) => (
            <div
              key={item.name}
              className="group relative p-5 border-l-2 border-primary/30 hover:border-primary transition-colors"
            >
              <span className="absolute -left-2 top-5 w-3 h-3 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
              <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
