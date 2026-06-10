'use client'

import { motion } from 'motion/react'
import {
  Users,
  MessagesSquare,
  Radar,
  Target,
  Send,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react'

const stages = [
  { icon: Users, label: 'Audience', tone: 'violet' },
  { icon: MessagesSquare, label: 'Community', tone: 'cyan' },
  { icon: Radar, label: 'Intent', tone: 'magenta' },
  { icon: Target, label: 'Opportunity', tone: 'violet' },
  { icon: Send, label: 'Outreach', tone: 'cyan' },
] as const

const toneMap: Record<string, string> = {
  violet: 'from-violet/30 to-violet/5 text-violet',
  cyan: 'from-cyan/30 to-cyan/5 text-cyan',
  magenta: 'from-magenta/30 to-magenta/5 text-magenta',
}

const intentSignals = [
  {
    handle: 'r/SaaS',
    text: 'Looking for a tool to find where my buyers hang out…',
    score: 94,
    tone: 'magenta',
  },
  {
    handle: '@founderlog',
    text: 'Anyone know how to track buying intent across forums?',
    score: 88,
    tone: 'cyan',
  },
  {
    handle: 'IndieHackers',
    text: 'Need a better way to discover relevant communities.',
    score: 81,
    tone: 'violet',
  },
]

export function HeroDashboard() {
  return (
    <div className="gradient-border glass-strong relative overflow-hidden rounded-3xl p-3 shadow-2xl shadow-black/50 sm:p-4">
      {/* top bar */}
      <div className="mb-3 flex items-center gap-2 px-2 pt-1">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-magenta/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-violet/70" />
        </div>
        <div className="ml-2 flex-1 rounded-md bg-white/5 px-3 py-1 text-[11px] text-muted-foreground">
          app.reachatease.com / discovery
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
        {/* left: intent feed */}
        <div className="glass rounded-2xl p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radar className="h-4 w-4 text-magenta" />
              <span className="text-sm font-medium">Live Intent Feed</span>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-magenta/15 px-2 py-1 text-[10px] font-medium text-magenta">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-magenta" />
              Live
            </span>
          </div>

          <div className="space-y-2.5">
            {intentSignals.map((s, i) => (
              <motion.div
                key={s.handle}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.18, duration: 0.5 }}
                className="flex items-start gap-3 rounded-xl bg-white/[0.03] p-3"
              >
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-[10px] font-bold ${toneMap[s.tone]}`}
                >
                  {s.score}
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-foreground/90">
                    {s.handle}
                  </p>
                  <p className="truncate text-[11px] text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* right: metrics + journey */}
        <div className="flex flex-col gap-3">
          <div className="glass rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Opportunities found
              </span>
              <TrendingUp className="h-4 w-4 text-cyan" />
            </div>
            <div className="mt-1 flex items-end gap-2">
              <span className="text-3xl font-semibold tracking-tight">
                1,284
              </span>
              <span className="mb-1 flex items-center gap-0.5 text-[11px] font-medium text-cyan">
                <ArrowUpRight className="h-3 w-3" />
                this week
              </span>
            </div>
            {/* mini bar chart */}
            <div className="mt-3 flex h-12 items-end gap-1">
              {[40, 55, 35, 70, 60, 85, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.8 + i * 0.06, duration: 0.5 }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-violet/40 to-cyan/80"
                />
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-4">
            <span className="text-xs text-muted-foreground">
              Discovery pipeline
            </span>
            <div className="mt-3 space-y-2">
              {stages.map((st, i) => (
                <motion.div
                  key={st.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + i * 0.12 }}
                  className="flex items-center gap-2.5"
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${toneMap[st.tone]}`}
                  >
                    <st.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs text-foreground/80">{st.label}</span>
                  <div className="ml-auto h-1.5 w-16 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${90 - i * 12}%` }}
                      transition={{ delay: 1 + i * 0.12, duration: 0.6 }}
                      className="h-full rounded-full bg-gradient-to-r from-violet to-cyan"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
