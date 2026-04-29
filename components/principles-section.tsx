"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)

  const principles = [
    {
      number: "01",
      titleParts: [
        { text: "AWS Cloud Intern Candidate", highlight: true },
        { text: " - Full-Stack Cloud Engineer", highlight: false },
      ],
      description:
        "Actively pursuing AWS Cloud Internship with hands-on expertise in VPC design, IAM hardening, EC2 deployment, and CloudTrail audit pipelines. AWS Academy certified in Cloud Security and Cloud Foundations.",
      align: "left",
    },
    {
      number: "02",
      titleParts: [
        { text: "Software Developer Intern", highlight: true },
        { text: " - Sparks to Ideas (2023)", highlight: false },
      ],
      description:
        "Developed and maintained production React components, improving UI consistency and user experience across the platform.",
      align: "left",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !principlesRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      })

      // Animate all cards as soon as the section content enters the viewport.
      const articles = principlesRef.current?.querySelectorAll("article")
      if (articles && articles.length > 0) {
        gsap.from(articles, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: principlesRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="principles" className="relative py-8 md:py-10 px-4 md:px-6">
      {/* Container */}
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">02 / Experience</span>
          <h2 className="mt-1 font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight">PROFESSIONAL EXPERIENCE</h2>
        </div>

        {/* Principles grid */}
        <div ref={principlesRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {principles.map((principle, index) => (
            <article key={index} className="flex flex-col gap-2">
              {/* Annotation label */}
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/75">
                {principle.number}
              </span>

              {/* Title */}
              <h3 className="font-[var(--font-bebas)] text-lg md:text-xl tracking-tight leading-tight">
                {principle.titleParts.map((part, i) =>
                  part.highlight ? (
                    <HighlightText key={i} parallaxSpeed={0.6}>
                      {part.text}
                    </HighlightText>
                  ) : (
                    <span key={i}>{part.text}</span>
                  ),
                )}
              </h3>

              {/* Description */}
              <p className="font-mono text-[11px] md:text-sm text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
