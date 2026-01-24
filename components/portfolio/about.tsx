import { aboutMe } from "@/lib/portfolio-data"
import { User } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-8 uppercase tracking-wider">
          About Me
        </h2>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutMe.bio}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              What Drives Me
            </h3>
            <ul className="space-y-3">
              {aboutMe.interests.map((interest) => (
                <li key={interest} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
