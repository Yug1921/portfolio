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
      "Engineered an end-to-end DPI system to process PCAP files, classify traffic by application/domain, and generate filtered PCAP outputs.",
    techStack: ["Java", "Node.js", "Express.js", "React.js", "TailwindCSS", "Multithreading"],
    github: "https://github.com/Yug1921/DPI-Engine-Java",
    demo: null,
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
          <h2 className="mt-1 font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight">FEATURED WORK</h2>
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
        "group relative border border-border/30 p-5 md:p-8 flex flex-col gap-4 transition-all duration-300 overflow-hidden",
        "hover:border-accent/80 hover:bg-accent/10 hover:shadow-xl",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/80 to-accent/30 group-hover:from-accent to-accent/60 transition-all duration-300" />

      {/* Meta */}
      <div>
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/80 group-hover:text-accent transition-colors duration-300 font-semibold">
          {experiment.medium}
        </span>
        <h3 className="mt-2 font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight group-hover:text-accent transition-colors duration-300">
          {experiment.title}
        </h3>
      </div>

      {/* Description */}
      <p className={cn(
        "font-mono text-[12px] md:text-sm text-foreground/75 leading-relaxed transition-all duration-300",
        isHovered ? "text-foreground/95" : "text-foreground/75",
      )}>
        {experiment.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {experiment.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="inline-block bg-gradient-to-r from-accent/25 to-accent/15 border border-accent/60 px-3.5 py-1.5 rounded-md text-[11px] md:text-xs text-accent font-mono font-semibold hover:from-accent/35 hover:to-accent/25 hover:border-accent hover:text-accent-light transition-all duration-300 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-2.5 mt-2 pt-4 border-t border-border/25">
        <a
          href={experiment.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[11px] md:text-sm font-mono text-foreground/80 hover:text-accent font-semibold transition-all duration-300 border border-border/40 px-4 py-2 rounded-md hover:border-accent/80 hover:bg-accent/15"
        >
          → GitHub
        </a>
        {experiment.demo && (
          <a
            href={experiment.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[11px] md:text-sm font-mono text-foreground/80 hover:text-accent font-semibold transition-all duration-300 border border-border/40 px-4 py-2 rounded-md hover:border-accent/80 hover:bg-accent/15"
          >
            ↗ Live Demo
          </a>
        )}
      </div>

      {/* Index */}
      <span className="absolute top-5 right-5 font-mono text-[11px] text-muted-foreground/40 group-hover:text-accent/50 transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </span>
    </article>
  )
}
