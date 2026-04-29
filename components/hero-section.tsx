"use client"

import { useEffect, useRef } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center px-4 md:px-6">
      <AnimatedNoise opacity={0.03} />

      {/* Main content - tight centered container */}
      <div ref={contentRef} className="w-full max-w-2xl mx-auto text-center">
        <SplitFlapAudioProvider>
          <div className="relative overflow-hidden">
            <SplitFlapText text="YUG Upadhyay" speed={80} />
            <div className="mt-2">
              <SplitFlapMuteToggle />
            </div>
          </div>
        </SplitFlapAudioProvider>

        <h2 className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-(--font-bebas) text-[clamp(0.875rem,2vw,1.25rem)] tracking-wide text-muted-foreground/70">
          <span>AWS Cloud Certified Engineer</span>
          <span className="text-accent/80">|</span>
          <span className="text-foreground/85">Full-Stack</span>
          <span className="text-accent/80">×</span>
          <span className="text-foreground/85">Cloud Security</span>
          <span className="text-accent/80">×</span>
          <span className="text-foreground/85">DevOps</span>
        </h2>

        <p className="mt-5 mx-auto max-w-xl font-mono text-xs leading-relaxed text-muted-foreground md:text-sm">
          <span className="text">AWS-certified Full-Stack Engineer with hands-on experience deploying secure cloud infrastructure on AWS—VPC design, IAM hardening, and CloudTrail audit pipelines. Building production-grade applications using{" "}</span>
          <span className="inline-block">
            MERN and Next.js
          </span>{" "}
          with a <span className="text">security-first mindset</span> from{" "}
          <span className="inline-flex flex-col items-start gap-2 align-middle">
            <span className="text-[12px] uppercase tracking-[0.25em] text-foreground/70">zero to production</span>
    
          </span>
          .
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 border border-foreground/20 px-5 py-2 font-mono text-[10px] uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover text="View Projects" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-400 ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="#signals"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Skills
          </a>
        </div>
      </div>

    </section>
  )
}
