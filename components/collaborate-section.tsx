"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function CollaborateSection() {
  return (
    <section className="relative py-10 md:py-14 px-4 md:px-6 border-b border-border/25 bg-linear-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-(--font-bebas) text-4xl md:text-6xl leading-none tracking-tight text-foreground mb-3">
          Let's collaborate
        </h2>
        <p className="mx-auto max-w-md font-mono text-[12px] md:text-base leading-relaxed text-muted-foreground">
          Open to internships, freelance work, and product-focused full-stack builds.
        </p>

        {/* Social Icons and Resume Button */}
        <div className="mt-6 flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 md:gap-5">
            <a
              href="https://github.com/Yug1921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-accent/20 bg-accent/5 text-foreground/75 shadow-sm transition-all duration-300 hover:border-accent/70 hover:bg-accent/15 hover:text-accent hover:shadow-accent/15"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yug-upadhyay-2a91b8316/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-accent/20 bg-accent/5 text-foreground/75 shadow-sm transition-all duration-300 hover:border-accent/70 hover:bg-accent/15 hover:text-accent hover:shadow-accent/15"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/Yug_1921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-accent/20 bg-accent/5 text-foreground/75 shadow-sm transition-all duration-300 hover:border-accent/70 hover:bg-accent/15 hover:text-accent hover:shadow-accent/15"
              title="X"
            >
              <span className="font-mono text-[18px] font-semibold leading-none">X</span>
            </a>
            <a
              href="mailto:yugyugupadhyay@gmail.com"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-accent/20 bg-accent/5 text-foreground/75 shadow-sm transition-all duration-300 hover:border-accent/70 hover:bg-accent/15 hover:text-accent hover:shadow-accent/15"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/resume/Yug_Upadhyay_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent px-6 py-2.5 font-mono text-sm font-semibold text-background shadow-lg shadow-accent/15 transition-all duration-300 hover:border-accent hover:bg-accent-light hover:text-background"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  )
}
