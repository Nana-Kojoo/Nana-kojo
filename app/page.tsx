import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { TechStack } from "@/components/portfolio/tech-stack"
import { Projects } from "@/components/portfolio/projects"
import { CurrentWork } from "@/components/portfolio/current-work"
import { Experience } from "@/components/portfolio/experience"
import { Education } from "@/components/portfolio/education"
import { CarsSection } from "@/components/portfolio/cars-section"
import { GitHubActivity } from "@/components/portfolio/github-activity"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <CurrentWork />
      <Experience />
      <Education />
      <CarsSection />
      <GitHubActivity />
      <Contact />
      <Footer />
    </main>
  )
}
