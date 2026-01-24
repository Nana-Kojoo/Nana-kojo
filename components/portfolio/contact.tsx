import { personalInfo } from "@/lib/portfolio-data"
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    label: personalInfo.email,
  },
  {
    name: "GitHub",
    href: `https://github.com/${personalInfo.github}`,
    icon: Github,
    label: `@${personalInfo.github}`,
  },
  {
    name: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    name: "Twitter",
    href: personalInfo.twitter,
    icon: Twitter,
    label: "Twitter",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12">
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
              If you would like to discuss a project or just say hi, I&apos;m always down to chat.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m currently open to new opportunities and collaborations. 
              Whether you have a question, a project idea, or just want to connect — 
              my inbox is always open.
            </p>

            <Link
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors group"
            >
              <Mail className="w-5 h-5" />
              Say Hello
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Find Me Online
            </h3>
            
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm text-foreground">{link.name}</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
