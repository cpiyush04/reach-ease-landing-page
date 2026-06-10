'use client'

import { Reveal } from './reveal'
import { SearchX, Users, EyeOff, Clock } from 'lucide-react'

const problems = [
  {
    icon: SearchX,
    title: 'Ideal customers stay hidden',
    desc: 'They are out there discussing their needs — but spread across forums, communities, and threads you never see.',
  },
  {
    icon: Users,
    title: 'Communities are hard to find',
    desc: 'The right rooms exist, yet mapping where your audience actually gathers takes endless manual digging.',
  },
  {
    icon: EyeOff,
    title: 'Intent goes unnoticed',
    desc: 'People signal buying intent every day. Without detection, those signals disappear into the noise.',
  },
  {
    icon: Clock,
    title: 'Timing is everything',
    desc: 'By the time you reach out, the moment has passed and a competitor has already shown up first.',
  },
]

export function ProblemSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-magenta">The problem</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Customer acquisition is harder than it should be
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Most teams pour budget into content, ads, and cold outreach — while
          their best prospects are already talking online.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-magenta/40">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-magenta/10 text-magenta transition-transform group-hover:scale-110">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
