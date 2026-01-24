"use client"

import { useEffect, useState } from "react"
import { personalInfo } from "@/lib/portfolio-data"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = personalInfo.tagline
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 40)
    return () => clearInterval(timer)
  }, [fullText])

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Name and Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-primary mt-2 font-medium">
                {personalInfo.role}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>

            {/* Status Indicators */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-muted-foreground">Currently building</span>
                <span className="font-mono text-foreground">{personalInfo.currentlyBuilding}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">Currently learning</span>
                <span className="font-mono text-foreground">{personalInfo.currentlyLearning}</span>
              </div>
            </div>

            {/* Quick Links */}
            <nav className="flex items-center gap-6 pt-6">
              <Link href="#about" className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                ABOUT
              </Link>
              <Link href="#experience" className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                EXPERIENCE
              </Link>
              <Link href="#projects" className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                PROJECTS
              </Link>
            </nav>
          </div>

          {/* Right Column - Tagline with typing effect */}
          <div className="lg:pt-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {displayText}
              <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <Link
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors animate-bounce block"
          >
            <ArrowDown className="w-5 h-5" />
            <span className="sr-only">Scroll to content</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
