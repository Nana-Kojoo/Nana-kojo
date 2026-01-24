import { education } from "@/lib/portfolio-data"
import { GraduationCap, Award } from "lucide-react"

export function Education() {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-8 uppercase tracking-wider">
          Education & Qualifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Degree */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">{education.degree}</h3>
                <p className="text-sm text-muted-foreground">{education.university}</p>
                <p className="text-xs font-mono text-muted-foreground">{education.period}</p>
              </div>
            </div>
            
            <div className="pl-8">
              <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          {education.certifications && education.certifications.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Certifications</h3>
              </div>
              
              <ul className="pl-8 space-y-2">
                {education.certifications.map((cert) => (
                  <li key={cert} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
