"use client"

import { personalInfo } from "@/lib/portfolio-data"
import { Github, GitFork, Star, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface GitHubStats {
  publicRepos: number
  followers: number
  following: number
  totalStars: number
  totalForks: number
}

export function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userRes = await fetch(`https://api.github.com/users/${personalInfo.github}`)
        const userData = await userRes.json()

        // Fetch repositories to calculate total stars and forks
        const reposRes = await fetch(
          `https://api.github.com/users/${personalInfo.github}/repos?per_page=100&sort=stars&order=desc`
        )
        const reposData = await reposRes.json()

        const totalStars = reposData.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0)
        const totalForks = reposData.reduce((acc: number, repo: any) => acc + (repo.forks_count || 0), 0)

        setStats({
          publicRepos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          totalStars,
          totalForks,
        })
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-8 uppercase tracking-wider">
          GitHub Activity
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* GitHub Profile Card */}
          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <Github className="w-8 h-8 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">@{personalInfo.github}</h3>
                <p className="text-sm text-muted-foreground">Open source enthusiast</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              I believe in building in public and contributing to open source. 
              Check out my repositories and feel free to collaborate!
            </p>

            <Link
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg font-medium text-sm hover:bg-foreground/90 transition-colors"
            >
              <Github className="w-4 h-4" />
              View Profile
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {/* Contribution Stats */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Open Source Highlights
            </h3>
            
            <div className="space-y-3">
              {loading ? (
                <div className="text-sm text-muted-foreground">Loading GitHub stats...</div>
              ) : stats ? (
                <>
                  <div className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-foreground">Public Repos</span>
                      <span className="font-bold text-primary">{stats.publicRepos}</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-primary rounded-full" />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-foreground">Followers</span>
                      <span className="font-bold text-primary">{stats.followers}</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-primary rounded-full" />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{stats.totalStars} stars received</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GitFork className="w-4 h-4 text-primary" />
                      <span>{stats.totalForks} forks</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-sm text-muted-foreground">Unable to load GitHub data</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
