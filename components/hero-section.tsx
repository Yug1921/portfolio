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
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-12 md:px-6">
      <AnimatedNoise opacity={0.03} />

      {/* Main content - tight centered container */}
      <div ref={contentRef} className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <SplitFlapAudioProvider>
          <div className="relative w-full overflow-hidden">
            <SplitFlapText text="YUG Upadhyay" speed={80} />
            <div className="mt-2">
              <SplitFlapMuteToggle />
            </div>
          </div>
        </SplitFlapAudioProvider>

        <h2 className="mt-4 max-w-2xl font-(--font-bebas) text-[clamp(0.9rem,2vw,1.25rem)] leading-tight tracking-[0.04em] text-muted-foreground/80">
          <span className="block text-foreground/85">
            Production-Focused Engineer <span className="text-accent/80">|</span> Full Stack <span className="text-accent/80">×</span> Cloud-Native & AWS <span className="text-accent/80">×</span>
          </span>
          <span className="mt-1 block text-foreground/90">AI-Augmented Development</span>
        </h2>

        <p className="mt-5 mx-auto max-w-2xl px-1 font-mono text-xs leading-relaxed text-muted-foreground md:text-sm">
          Production-focused Full-Stack Engineer building and shipping scalable, cloud-native SaaS applications using MERN, Next.js, and AWS. Combines strong backend architecture with AI integration (LLMs, OpenAI API, prompt engineering) and hands-on AWS cloud infrastructure to deliver secure, high-performance systems. Accelerates development cycles through AI-augmented workflows and a security-first, scalable-architecture mindset from <span className="inline-block whitespace-nowrap text-[11px] uppercase tracking-[0.25em] text-accent md:text-[12px]">zero to production</span>.
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
