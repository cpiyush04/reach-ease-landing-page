'use client'

import { motion } from 'motion/react'
import { Reveal } from './reveal'
import {
  Users,
  MessagesSquare,
  Radar,
  Target,
  Send,
  Contact,
} from 'lucide-react'

export function PlatformSection() {
  return (
    <section
      id="features"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-violet">Modular platform</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          One connected platform, six powerful modules
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Every module works on its own — and together they form a complete
          customer discovery engine.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Audience Discovery — wide */}
        <Reveal className="sm:col-span-2" delay={0}>
          <BentoCard
            tone="violet"
            icon={Users}
            title="Audience Discovery"
            desc="Build a precise picture of who your ideal customers are and where they spend time online."
          >
            <div className="mt-auto flex h-20 items-end gap-1.5 pt-6">
              {[30, 55, 40, 70, 50, 85, 65, 95, 75, 60, 45, 80].map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  className="w-full max-w-[16px] rounded-sm bg-gradient-to-t from-violet/30 to-violet/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </BentoCard>
        </Reveal>

        {/* Community Discovery */}
        <Reveal delay={0.08}>
          <BentoCard
            tone="cyan"
            icon={MessagesSquare}
            title="Community Discovery"
            desc="Map the forums, groups, and threads where your audience gathers."
          >
            <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
              {['r/SaaS', 'Discord', 'Slack', 'IndieHackers', 'X', 'LinkedIn'].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full bg-cyan/10 px-2.5 py-1 text-[11px] text-cyan"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </BentoCard>
        </Reveal>

        {/* Intent Detection */}
        <Reveal delay={0.16}>
          <BentoCard
            tone="magenta"
            icon={Radar}
            title="Intent Detection"
            desc="Surface real buying signals from live conversations as they happen."
          >
            <div className="mt-auto space-y-2 pt-6">
              {[
                { l: 'High intent', v: 92 },
                { l: 'Researching', v: 78 },
              ].map((r, i) => (
                <div key={r.l} className="flex items-center gap-2">
                  <span className="w-20 shrink-0 text-[11px] text-muted-foreground">
                    {r.l}
                  </span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.v}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-magenta to-violet"
                    />
                  </div>
                  <span className="w-6 text-right text-[11px] text-magenta">
                    {r.v}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>
        </Reveal>

        {/* Opportunity Monitoring */}
        <Reveal delay={0.24}>
          <BentoCard
            tone="violet"
            icon={Target}
            title="Opportunity Monitoring"
            desc="Track high-value moments and never miss the right time to engage."
          >
            <div className="mt-auto flex items-center gap-3 pt-6">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-violet/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-violet" />
              </div>
              <span className="text-[11px] text-muted-foreground">
                3 live opportunities right now
              </span>
            </div>
          </BentoCard>
        </Reveal>

        {/* CRM & Follow-Up */}
        <Reveal delay={0.32}>
          <BentoCard
            tone="magenta"
            icon={Contact}
            title="CRM & Follow-Up"
            desc="Keep every relationship organized from first signal to closed deal."
          >
            <div className="mt-auto flex items-center pt-6">
              <div className="flex -space-x-2">
                {[
                  'from-violet to-magenta',
                  'from-cyan to-violet',
                  'from-magenta to-cyan',
                ].map((g, i) => (
                  <span
                    key={i}
                    className={`h-8 w-8 rounded-full border-2 border-card bg-gradient-to-br ${g}`}
                  />
                ))}
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-secondary text-[10px] text-muted-foreground">
                  +9
                </span>
              </div>
            </div>
          </BentoCard>
        </Reveal>

        {/* Outreach Automation — wide */}
        <Reveal className="sm:col-span-2 lg:col-span-3" delay={0.4}>
          <BentoCard
            tone="cyan"
            icon={Send}
            title="Outreach Automation"
            desc="Engage the right people with personalized, context-aware messages at scale."
          >
            <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
              {['Drafted', 'Personalized', 'Scheduled', 'Sent'].map((s, i) => (
                <div
                  key={s}
                  className="flex items-center gap-2 sm:flex-1"
                >
                  <span className="flex h-7 items-center rounded-full bg-cyan/10 px-3 text-[11px] text-cyan">
                    {s}
                  </span>
                  {i < 3 && (
                    <span className="hidden h-px flex-1 bg-gradient-to-r from-cyan/50 to-transparent sm:block" />
                  )}
                </div>
              ))}
            </div>
          </BentoCard>
        </Reveal>
      </div>
    </section>
  )
}

const toneStyles: Record<
  string,
  { icon: string; glow: string }
> = {
  violet: { icon: 'bg-violet/10 text-violet', glow: 'hover:border-violet/40' },
  cyan: { icon: 'bg-cyan/10 text-cyan', glow: 'hover:border-cyan/40' },
  magenta: { icon: 'bg-magenta/10 text-magenta', glow: 'hover:border-magenta/40' },
}

function BentoCard({
  tone,
  icon: Icon,
  title,
  desc,
  children,
}: {
  tone: 'violet' | 'cyan' | 'magenta'
  icon: React.ElementType
  title: string
  desc: string
  children?: React.ReactNode
}) {
  const s = toneStyles[tone]
  return (
    <div
      className={`group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-colors ${s.glow}`}
    >
      <div
        className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${s.icon}`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-medium">{title}</h3>
      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
        {desc}
      </p>
      {children}
    </div>
  )
}
