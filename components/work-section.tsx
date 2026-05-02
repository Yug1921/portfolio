"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const experiments = [
  {
    title: "DPI - Deep Packet Inspector",
    medium: "Cybersecurity System / 2025",
    description:
      "Developed a Java tool that reads PCAP files, inspects each packet to detect apps and domains (YouTube, Netflix, etc.), applies block rules, and exports filtered PCAP outputs via a web dashboard.",
    techStack: [
      "Java 17 ",
      "Node.js",
      "Express",
      "React 19",
      "Tailwind CSS",
      "Recharts",
      "Render (backend)",
      "Vercel (frontend)",
    ],
    github: "https://github.com/Yug1921/DPI-Engine-Java",
    demo: "https://dpi-engine-java.vercel.app/dashboard",
  },
  {
    title: "ContentForge — AI Marketing Content Platform 2026",
    medium: "AI Marketing Platform / 2026",
    description:
      "Built a full-stack AI content platform that generates platform-specific marketing copy from one campaign brief across 7 channels, reducing drafting time by about 60%. Added a structured prompt workflow with tone, audience, and CTA controls, plus a Tone Rewriter for side-by-side rewrites. Deployed on Vercel with secure server-side API routes and a responsive UI for non-technical marketing users.",
    techStack: ["Next.js", "OpenRouter AI", "Tailwind CSS", "REST API", "Prompt Engineering", "Vercel"],
    github: "https://github.com/Yug1921/ContentForge",
    demo: "https://content-forge-sand.vercel.app/",
  },
  {
    title: "Secure Cloud Infrastructure Deployment on AWS",
    medium: "AWS Cloud Infrastructure / 2026",
    description:
      "Provisioned a custom Amazon VPC with public and private subnets, route tables, and internet gateway, deployed an EC2-hosted web server demonstrating end-to-end cloud network architecture. Enforced identity security by configuring IAM users, groups, and least-privilege policies. Implemented a full audit and monitoring pipeline using CloudTrail and CloudWatch alarms for detecting unauthorized access.",
    techStack: ["AWS EC2", "VPC", "IAM", "S3", "CloudTrail", "CloudWatch", "Security Groups", "NACLs"],
    github: null,
    demo: null,
  },
  {
    title: "CropCart",
    medium: "MERN Stack Project",
    description:
      "A full-stack web application that bridges the gap between farmers and consumers with farmer profiles, consumer dashboards, messaging, order requests, and an admin panel.",
    techStack: ["React JS", "Tailwind CSS", "React Redux", "Node JS", "Express JS", "MongoDB", "JWT"],
    github: "https://github.com/Yug1921/CropCart/",
    demo: "https://crop-cart-six.vercel.app/",
  },
  {
    title: "RMS - Restaurant Management System",
    medium: "Full-Stack Platform / 2024",
    description:
      "Built a full-stack platform for reservations, order tracking, and table bookings with normalized MySQL schema and responsive UI.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs"],
    github: "https://github.com/Yug1921/RMS",
    demo: null,
  },
  {
    title: "Student Course Registration System",
    medium: "MERN-Style Application / 2026",
    description:
      "Built a full-stack course registration platform with JWT-based auth, secure password handling, course browsing, and enrollment dashboard workflows.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    github: "https://github.com/Yug1921/Student_Course_Registration_App",
    demo: null,
  },
]

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in from left
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = gridRef.current?.querySelectorAll("article")
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="work" className="relative py-8 md:py-10 px-4 md:px-6">
      {/* Container */}
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-6">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent">03 / Projects</span>
          <h2 className="mt-1 font-(--font-bebas) text-3xl md:text-4xl tracking-tight">FEATURED WORK</h2>
          <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
            Production-oriented projects focused on performance, full-stack architecture, and reliable delivery.
          </p>
        </div>

        {/* Responsive grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
        >
          {experiments.map((experiment, index) => (
            <WorkCard key={index} experiment={experiment} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkCard({
  experiment,
  index,
}: {
  experiment: {
    title: string
    medium: string
    description: string
    techStack: string[]
    github: string
    demo: string | null
  }
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLElement>(null)

  return (
    <article
      ref={cardRef}
      className={cn(
        "group relative border border-border/30 p-4 md:p-6 flex flex-col gap-3 transition-all duration-300 overflow-hidden",
        "hover:border-accent/80 hover:bg-accent/10 hover:shadow-xl",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-accent/80 to-accent/30 group-hover:from-accent group-hover:to-accent/60 transition-all duration-300" />

      {/* Meta */}
      <div>
        <span className="inline-flex items-center rounded-full border border-accent/45 bg-accent/10 px-3 py-1 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-accent-light shadow-sm transition-colors duration-300 group-hover:border-accent/70 group-hover:bg-accent/15 group-hover:text-accent">
          {experiment.medium}
        </span>
        <h3 className="mt-1.5 font-(--font-bebas) text-xl md:text-2xl tracking-tight group-hover:text-accent transition-colors duration-300">
          {experiment.title}
        </h3>
      </div>

      {/* Description */}
      <p className={cn(
        "font-mono text-[11px] md:text-xs text-foreground/75 leading-relaxed transition-all duration-300",
        isHovered ? "text-foreground/95" : "text-foreground/75",
      )}>
        {experiment.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5">
        {experiment.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="inline-block bg-linear-to-r from-accent/25 to-accent/15 border border-accent/60 px-3 py-1 rounded-md text-[10px] md:text-xs text-accent font-mono font-semibold hover:from-accent/35 hover:to-accent/25 hover:border-accent hover:text-accent-light transition-all duration-300 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {(experiment.github || experiment.demo) && (
        <div className="flex flex-wrap gap-2 mt-1 pt-3 border-t border-border/25">
          {experiment.github && (
            <a
              href={experiment.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[10px] md:text-xs font-mono text-foreground/80 hover:text-accent font-semibold transition-all duration-300 border border-border/40 px-3 py-1.5 rounded-md hover:border-accent/80 hover:bg-accent/15"
            >
              → GitHub
            </a>
          )}
          {experiment.demo && (
            <a
              href={experiment.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[10px] md:text-xs font-mono text-foreground/80 hover:text-accent font-semibold transition-all duration-300 border border-border/40 px-3 py-1.5 rounded-md hover:border-accent/80 hover:bg-accent/15"
            >
              ↗ Live Demo
            </a>
          )}
        </div>
      )}

      {/* Index */}
      <span className="absolute top-5 right-5 font-mono text-[11px] text-muted-foreground/40 group-hover:text-accent/50 transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </span>
    </article>
  )
}
