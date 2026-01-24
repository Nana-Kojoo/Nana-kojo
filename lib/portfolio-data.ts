export const personalInfo = {
  name: "Nana Kojo",
  role: "Computer Science Student & Software Developer",
  tagline: "Building practical, user-friendly web applications that solve real problems.",
  currentlyBuilding: "Real-world applications for students and businesses in Africa",
  currentlyLearning: "Full-stack development and startup building",
  github: "nana-kojoo",
  email: "asareelvis200@gmail.com",
  linkedin: "https://linkedin.com/in/nana-kojo",
  twitter: "https://twitter.com/_asarekojo",
}

export const techStack = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  backend: ["Python", "Flask", "Firebase"],
  tools: ["Git", "GitHub", "Firebase Auth", "REST APIs"],
  payments: ["Paystack"],
}

export type Project = {
  name: string
  description: string
  tech: string[]
  status: "Live" | "In Progress" | "Idea"
  github?: string
  live?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: "Campus Chauffeur",
    description: "Student ride-hailing platform connecting students with safe, affordable transportation on and off campus.",
    tech: ["React", "Next.js", "Firebase", "Paystack"],
    status: "In Progress",
    featured: true,
  },
  {
    name: "Car Event Tracker",
    description: "Platform for discovering and tracking car events, meetups, and automotive gatherings.",
    tech: ["React", "Next.js", "Firebase"],
    status: "In Progress",
    featured: true,
  },
  {
    name: "AfriSubs",
    description: "Subscription billing platform designed specifically for African businesses and payment methods.",
    tech: ["Next.js", "Python", "Flask", "Paystack"],
    status: "In Progress",
    featured: true,
  },
  {
    name: "Wire",
    description: "Digitized fare payment solution for shared transport and ride-sharing services.",
    tech: ["React", "Firebase", "Paystack"],
    status: "In Progress",
  },
  {
    name: "Ride Fund",
    description: "Ride credit platform providing affordable transportation credits for students and workers.",
    tech: ["Next.js", "Firebase"],
    status: "In Progress",
  },
  {
    name: "TORQ",
    description: "Automotive brand and merchandise platform combining software, design, and car culture.",
    tech: ["React", "Next.js", "Firebase"],
    status: "In Progress",
  },
  {
    name: "Spot & Rev",
    description: "Automotive-focused platform for car enthusiasts and automotive content.",
    tech: ["React", "Next.js"],
    status: "In Progress",
  },
]

export const currentWork = [
  {
    name: "Building web applications at Presto Solutions",
    description: "Working on real-world applications and internal tools as a Junior Developer.",
  },
  {
    name: "Campus Chauffeur & AfriSubs",
    description: "Iterating on student ride-hailing and subscription billing platforms based on user feedback.",
  },
  {
    name: "Freelance Development",
    description: "Building web applications and MVPs for clients, handling frontend, backend, and integrations.",
  },
]

export const experience = [
  {
    role: "Junior Developer",
    company: "Presto Solutions",
    period: "September 2025 — Present",
    description: "Working on web applications and internal tools. Supporting development and feature implementation.",
    tech: ["Python", "Flask", "JavaScript"],
  },
  {
    role: "Software Developer / Consultant",
    company: "Kinkan Educational Consult",
    period: "2023 — Present",
    description: "Building and maintaining education-focused software solutions. Providing technical consulting and system improvements.",
    tech: ["React", "Next.js", "Firebase"],
  },
  {
    role: "Junior Software Intern",
    company: "Greyparrot.io",
    period: "October 2023 — December 2023",
    description: "Assisted in software development tasks. Gained exposure to production-level systems and workflows.",
    tech: ["JavaScript", "React"],
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2025 — Present",
    description: "Building web applications and MVPs for clients. Handling frontend, backend, and integrations.",
    tech: ["React", "Next.js", "Firebase", "Python", "Flask", "Paystack", "HTML"],
  },
]

export const education = {
  university: "Ghana Telecommunications University",
  degree: "BSc. Computer Science",
  period: "2025 — 2028",
  coursework: ["Software Engineering", "Data Structures", "Algorithms", "Web Development"],
  certifications: ["Responsive Web Design — freeCodeCamp"],
}

export const aboutMe = {
  bio: "I'm a Computer Science student and software developer passionate about building practical, user-friendly web applications that solve real problems. I focus on turning ideas into real products, especially in areas like student services, payments, mobility, and local tech solutions. I value clean UI, simple workflows, and building things that actually matter.",
  interests: ["Building real-world applications", "Student services tech", "Payment systems", "Automotive platforms", "Startup culture"],
}

export const carsSection = {
  headline: "Beyond code: Cars and automotive culture.",
  description: "Cars are a major part of my identity. I'm deeply interested in automotive culture and actively build car-related platforms and brands that combine technology, design, and community. I run platforms like Spot & Rev and TORQ, blending software development with automotive creativity.",
  projects: [
    "TORQ — Automotive brand and merchandise platform"
  ],
}
