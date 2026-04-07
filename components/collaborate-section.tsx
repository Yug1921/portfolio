"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function CollaborateSection() {
  return (
    <section className="relative py-8 md:py-10 px-4 md:px-6 border-b border-border/20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-[var(--font-bebas)] text-xl md:text-2xl tracking-tight mb-4">
          Let's collaborate
        </h2>

        {/* Social Icons and Resume Button */}
        <div className="flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Yug1921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/40 text-foreground/70 hover:text-accent hover:border-accent/60 transition-all duration-300"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yug-upadhyay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/40 text-foreground/70 hover:text-accent hover:border-accent/60 transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/YugUpadhyay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/40 text-foreground/70 hover:text-accent hover:border-accent/60 transition-all duration-300"
              title="X (Twitter)"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:yugyugupadhyay@gmail.com"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/40 text-foreground/70 hover:text-accent hover:border-accent/60 transition-all duration-300"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/resume/Yug_Upadyay_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-full font-mono text-sm font-semibold hover:bg-accent transition-all duration-300"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  )
}
