'use client'

import { Reveal } from './reveal'
import { Rocket, Briefcase, Boxes, ArrowRight } from 'lucide-react'

const cases = [
  {
    icon: Rocket,
    title: 'SaaS Startups',
    tone: 'violet',
    desc: 'Find your earliest believers by discovering people already describing the exact problem you solve.',
    points: ['Pinpoint early adopters', 'Validate messaging in real threads', 'Reach buyers before competitors'],
  },
  {
    icon: Briefcase,
    title: 'Agencies',
    tone: 'cyan',
    desc: 'Surface qualified leads for every client by monitoring intent across the communities that matter to them.',
    points: ['Source leads per client niche', 'Scale outreach with context', 'Report on real opportunities'],
  },
  {
    icon: Boxes,
    title: 'Indie Studios',
    tone: 'magenta',
    desc: 'Punch above your weight — discover communities and conversations without a big marketing team.',
    points: ['Lean, focused discovery', 'Engage authentically', 'Grow without ad spend'],
  },
]

const C: Record<string, string> = {
  violet: 'oklch(0.62 0.24 295)',
  cyan: 'oklch(0.78 0.14 200)',
  magenta: 'oklch(0.7 0.22 350)',
}

export function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-violet">Use cases</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Built for teams that grow through discovery
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          However you go to market, Reach@Ease helps you find the customers
          already looking for you.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-white/20">
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ background: C[c.tone] }}
              />
              <div
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `color-mix(in oklch, ${C[c.tone]} 14%, transparent)`,
                  color: C[c.tone],
                }}
              >
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
              <ul className="mt-5 space-y-2.5">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                    <ArrowRight
                      className="h-3.5 w-3.5 shrink-0"
                      style={{ color: C[c.tone] }}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
