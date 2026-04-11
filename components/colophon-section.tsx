"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ColophonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Grid columns fade up with stagger
      if (gridRef.current) {
        const columns = gridRef.current.querySelectorAll(":scope > div")
        gsap.from(columns, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Footer fade in
      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="colophon"
      className="relative py-8 md:py-10 px-4 md:px-6 border-t border-border/20"
    >
      {/* Container */}
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">04 / Contact</span>
          <h2 className="mt-1 font-(--font-bebas) text-3xl md:text-4xl tracking-tight">GET IN TOUCH</h2>
        </div>

        {/* Multi-column layout */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {/* Frontend */}
          <div className="col-span-1">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/75 mb-1.5">Frontend</h4>
            <ul className="space-y-0.5">
              <li className="font-mono text-[11px] text-foreground/75">React</li>
              <li className="font-mono text-[11px] text-foreground/75">Next.js</li>
              <li className="font-mono text-[11px] text-foreground/75">TypeScript</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="col-span-1">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/75 mb-1.5">Backend</h4>
            <ul className="space-y-0.5">
              <li className="font-mono text-[11px] text-foreground/75">Node.js</li>
              <li className="font-mono text-[11px] text-foreground/75">Express</li>
              <li className="font-mono text-[11px] text-foreground/75">MySQL</li>
            </ul>
          </div>

          {/* Cloud */}
          <div className="col-span-1">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/75 mb-1.5">Cloud</h4>
            <ul className="space-y-0.5">
              <li className="font-mono text-[11px] text-foreground/75">AWS EC2</li>
              <li className="font-mono text-[11px] text-foreground/75">S3</li>
              <li className="font-mono text-[11px] text-foreground/75">Lambda</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="col-span-1">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/75 mb-1.5">Tools</h4>
            <ul className="space-y-0.5">
              <li className="font-mono text-[11px] text-foreground/75">Git</li>
              <li className="font-mono text-[11px] text-foreground/75">Postman</li>
              <li className="font-mono text-[11px] text-foreground/75">VS Code</li>
            </ul>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/75 mb-1.5">Links</h4>
            <ul className="space-y-0.5">
              <li>
                <a
                  href="mailto:yugyugupadhyay@gmail.com"
                  className="font-mono text-[11px] text-foreground/75 hover:text-accent transition-colors duration-200"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Yug1921"
                  className="font-mono text-[11px] text-foreground/75 hover:text-accent transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
      </div>

        {/* Contact CTA */}
        <div className="mt-10 pt-8 border-t border-border/20">
          <h3 className="font-(--font-bebas) text-2xl md:text-3xl tracking-tight mb-3">
            Let's Work Together
          </h3>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
            Always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:yugyugupadhyay@gmail.com"
              className="inline-flex items-center gap-2 border border-border/40 px-4 py-2 rounded font-mono text-sm hover:border-accent/60 hover:text-accent transition-colors duration-300"
            >
              ✉ Email Me
            </a>
            <a
              href="https://twitter.com/YugUpadhyay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded font-mono text-sm font-semibold hover:bg-accent transition-colors duration-300"
            >
              𝕏 Connect on X
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          ref={footerRef}
          className="mt-8 pt-4 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
        >
          <p className="font-mono text-[10px] text-muted-foreground/75 uppercase tracking-widest">
            © 2026 Yug Upadhyay. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
