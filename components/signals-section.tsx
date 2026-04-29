"use client"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const signals = [
  {
    date: "SKILL.01",
    title: "Languages",
    note: "JavaScript (ES6+), TypeScript, Python, Java, C/C++, and R.",
  },
  {
    date: "SKILL.02",
    title: "Frontend",
    note: "React.js, Next.js, Redux, HTML5, CSS3, TailwindCSS, and ShadCN UI.",
  },
  {
    date: "SKILL.03",
    title: "Backend",
    note: "Node.js, Express.js, REST API design, and JWT authentication.",
  },
  {
    date: "SKILL.04",
    title: "Databases",
    note: "MySQL, MongoDB, and Firebase Firestore.",
  },
  {
    date: "SKILL.05",
    title: "Cloud & DevOps",
    note: "AWS (EC2, VPC, S3, Lambda, IAM, CloudTrail, CloudWatch, Security Groups, NACLs), CI/CD, Docker, and cloud security.",
  },
  {
    date: "SKILL.06",
    title: "Developer Tools",
    note: "Git, GitHub Actions, Postman, Figma, Docker, Vercel, and Render.",
  },
  {
    date: "SKILL.07",
    title: "Core Concepts",
    note: "Data structures and algorithms, OOP, Agile/Scrum, system design, and security-first development.",
  },
  {
    date: "CERT.01",
    title: "AWS Academy Graduate",
    note: "Cloud Security Foundations (2026) — IAM hardening, audit pipelines, and threat detection.",
  },
  {
    date: "CERT.02",
    title: "AWS Academy Graduate",
    note: "Cloud Foundations (2025) — VPC design, EC2 deployment, and Well-Architected Framework principles.",
  },
]

export function SignalsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!sectionRef.current || !cursorRef.current) return

    const section = sectionRef.current
    const cursor = cursorRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power3.out",
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    section.addEventListener("mousemove", handleMouseMove)
    section.addEventListener("mouseenter", handleMouseEnter)
    section.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      section.removeEventListener("mousemove", handleMouseMove)
      section.removeEventListener("mouseenter", handleMouseEnter)
      section.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

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
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="signals" ref={sectionRef} className="relative py-8 md:py-10 px-4 md:px-6">
      <div
        ref={cursorRef}
        className={cn(
          "pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50",
          "w-6 h-6 rounded-full border border-accent bg-accent",
          "transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Container */}
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">01 / Skills</span>
          <h2 className="mt-1 font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight">EXPERTISE</h2>
        </div>

        {/* Responsive grid */}
        <div
          ref={(el) => {
            scrollRef.current = el
            cardsRef.current = el
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
        >
          {signals.map((signal, index) => (
            <SignalCard key={index} signal={signal} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SignalCard({
  signal,
  index,
}: {
  signal: { date: string; title: string; note: string }
  index: number
}) {
  return (
    <article
      className={cn(
        "group relative",
        "transition-transform duration-300 ease-out",
        "hover:shadow-md hover:-translate-y-0.5",
      )}
    >
      {/* Card */}
      <div className="relative bg-card border border-border/40 p-3 md:p-4 h-full flex flex-col gap-2">
        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-accent/40 group-hover:bg-accent transition-colors duration-300" />

        {/* Meta info */}
        <div className="flex items-baseline justify-between gap-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/75">
            {String(index + 1).padStart(2, "0")}
          </span>
          <time className="font-mono text-[10px] text-muted-foreground/65 text-right">{signal.date}</time>
        </div>

        {/* Title */}
        <h3 className="font-[var(--font-bebas)] text-base md:text-lg tracking-tight group-hover:text-accent transition-colors duration-300">
          {signal.title}
        </h3>

        {/* Description */}
        <p className="font-mono text-[11px] md:text-sm text-muted-foreground leading-relaxed">
          {signal.note}
        </p>
      </div>
    </article>
  )
}
