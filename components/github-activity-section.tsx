"use client"

import { useEffect, useState } from "react"
import GitHubCalendar from "react-github-calendar"

const GITHUB_USERNAME = "Yug1921"

export function GitHubActivitySection() {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) {

    return (

      <section
        id="github-activity"
        className="relative py-8 md:py-10 px-4 md:px-6 border-b border-border/20"
      >

        <div className="max-w-4xl mx-auto">

          <div className="h-40 border border-border/40 rounded-lg animate-pulse flex items-center justify-center">

            <span className="font-mono text-sm text-muted-foreground">
              Loading GitHub activity...
            </span>

          </div>

        </div>

      </section>

    )

  }


  return (

    <section
      id="github-activity"
      className="relative py-8 md:py-10 px-4 md:px-6 border-b border-border/20"
    >

      <div className="max-w-4xl mx-auto">


        {/* Header */}

        <div className="mb-6">

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            Contributions
          </span>

          <h2 className="mt-1 font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight">
            GITHUB ACTIVITY
          </h2>

          <p className="mt-2 font-mono text-[11px] md:text-sm text-muted-foreground leading-relaxed">
            Daily coding activity and open-source contributions visualized.
          </p>

        </div>



        {/* Calendar Box */}

        <div className="border border-border/40 p-4 md:p-5 overflow-x-auto">

          <div className="min-w-[700px]">

            <GitHubCalendar

              username={GITHUB_USERNAME}

              colorScheme="dark"

              blockSize={13}

              blockMargin={3}

              fontSize={12}

              hideColorLegend


              renderBlock={(block, activity) => {

                const { x, y, width, height, fill } = block.props

                return (

                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={fill}
                    rx={3}
                    ry={3}
                  >

                    <title>
                      {activity.date} — {activity.count} contributions
                    </title>

                  </rect>

                )

              }}

            />

          </div>

        </div>



        {/* Legend */}

        <div className="mt-4 flex justify-center items-center gap-2 text-[11px] font-mono text-muted-foreground">

          <span>Less</span>

          <div className="flex gap-1">

            {[
              "#0d1117",
              "#0e4429",
              "#006d32",
              "#26a641",
              "#39d353"
            ].map((color, i) => (

              <span
                key={i}
                className="w-3 h-3 border border-border/40"
                style={{ backgroundColor: color }}
              />

            ))}

          </div>

          <span>More</span>

        </div>


      </div>

    </section>

  )

}