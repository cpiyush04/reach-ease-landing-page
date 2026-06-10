'use client'

import { motion } from 'motion/react'
import { Reveal } from './reveal'
import {
  Package,
  Users,
  MessagesSquare,
  Radar,
  Target,
  Send,
  Contact,
  ArrowRight,
} from 'lucide-react'

const steps = [
  { icon: Package, label: 'Product', sub: 'Define what you offer', tone: 'violet' },
  { icon: Users, label: 'Audience Discovery', sub: 'Identify ideal customers', tone: 'cyan' },
  { icon: MessagesSquare, label: 'Community Discovery', sub: 'Map where they gather', tone: 'magenta' },
  { icon: Radar, label: 'Intent Detection', sub: 'Catch live buying signals', tone: 'violet' },
  { icon: Target, label: 'Opportunities', sub: 'Prioritize the best moments', tone: 'cyan' },
  { icon: Send, label: 'Outreach', sub: 'Engage at the right time', tone: 'magenta' },
  { icon: Contact, label: 'CRM', sub: 'Nurture the relationship', tone: 'violet' },
] as const

const tone: Record<string, string> = {
  violet: 'from-violet/25 to-violet/5 text-violet ring-violet/30',
  cyan: 'from-cyan/25 to-cyan/5 text-cyan ring-cyan/30',
  magenta: 'from-magenta/25 to-magenta/5 text-magenta ring-magenta/30',
}

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-cyan">The journey</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          From product to relationship, one continuous flow
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Reach@Ease connects every stage of discovery into a single, guided
          customer journey.
        </p>
      </Reveal>

      <div className="relative mt-16">
        {/* connector line - desktop */}
        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-7 md:gap-2">
          {steps.map((s, i) => (
            <div key={s.label} className="relative flex flex-col items-center md:items-center">
              <Reveal delay={i * 0.1} className="w-full">
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-4 transition-colors hover:border-cyan/40 md:flex-col md:gap-3 md:p-4 md:text-center">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ${tone[s.tone]}`}
                  >
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium leading-tight">
                      {s.label}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">
                      {s.sub}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* arrow between - mobile vertical */}
              {i < steps.length - 1 && (
                <div className="flex w-full justify-center py-3 md:hidden">
                  <ArrowRight className="h-5 w-5 rotate-90 text-muted-foreground" />
                </div>
              )}

              {/* arrow between - desktop horizontal */}
              {i < steps.length - 1 && (
                <div className="absolute right-[-10px] top-1/2 z-10 hidden -translate-y-1/2 md:top-9 md:block">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <ArrowRight className="h-4 w-4 text-cyan/60" />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
