"use client"

import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Karnavati University",
    year: "2022 - Present",
    description: "Ahmedabad, Gujarat.",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "LJ University",
    year: "2019 - 2022",
    description: "CGPA: 7.50 / 10.",
  },
  {
    degree: "Secondary Education (SSC)",
    institution: "Nelson's High School",
    year: "2019",
    description: "Score: 85.11%.",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="relative py-8 md:py-10 px-4 md:px-6 border-b border-border/20">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            Academic
          </span>
          <h2 className="mt-1 font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight">
            EDUCATION
          </h2>
        </div>

        {/* Education cards */}
        <div className="space-y-4 md:space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="relative border border-border/40 p-4 md:p-5 hover:border-accent/60 hover:bg-accent/5 transition-all duration-300 group"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-accent/40 group-hover:bg-accent transition-colors duration-300" />

              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground group-hover:text-accent group-hover:border-accent/60 transition-all duration-300">
                    <GraduationCap size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-[var(--font-bebas)] text-base md:text-lg tracking-tight group-hover:text-accent transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-[11px] text-muted-foreground/75 mt-0.5">
                    {edu.institution} • {edu.year}
                  </p>
                  <p className="font-mono text-[11px] md:text-sm text-muted-foreground leading-relaxed mt-2">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
