'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Reveal } from './reveal'
import {
  Radar,
  Map,
  LayoutDashboard,
  Send,
  Contact,
  Search,
  Filter,
  Star,
  Check,
} from 'lucide-react'

const tabs = [
  { id: 'intent', label: 'Intent Feed', icon: Radar },
  { id: 'community', label: 'Community Map', icon: Map },
  { id: 'opportunity', label: 'Opportunity Dashboard', icon: LayoutDashboard },
  { id: 'outreach', label: 'Outreach Workspace', icon: Send },
  { id: 'crm', label: 'Relationships', icon: Contact },
] as const

export function ProductSection() {
  const [active, setActive] = useState<(typeof tabs)[number]['id']>('intent')

  return (
    <section
      id="product"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-magenta">Product experience</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          See discovery come to life
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          A workspace built for finding, understanding, and reaching the people
          who already want what you offer.
        </p>
      </Reveal>

      {/* tab bar */}
      <Reveal className="mt-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {tabs.map((t) => {
            const isActive = active === t.id
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-violet to-magenta text-white shadow-lg shadow-primary/25'
                    : 'glass text-muted-foreground hover:text-foreground'
                }`}
              >
                <t.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            )
          })}
        </div>
      </Reveal>

      {/* mockup window */}
      <Reveal className="mt-8" delay={0.1}>
        <div className="gradient-border glass-strong overflow-hidden rounded-3xl p-2 shadow-2xl shadow-black/50 sm:p-3">
          <div className="mb-2 flex items-center gap-2 px-2 pt-1">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-magenta/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-violet/70" />
            </div>
          </div>
          <div className="min-h-[360px] rounded-2xl bg-card/40 p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                {active === 'intent' && <IntentMock />}
                {active === 'community' && <CommunityMock />}
                {active === 'opportunity' && <OpportunityMock />}
                {active === 'outreach' && <OutreachMock />}
                {active === 'crm' && <CrmMock />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function PanelHeader({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="mb-5 flex items-center justify-between gap-3">
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  )
}

function IntentMock() {
  const rows = [
    { src: 'r/SaaS', msg: 'Need a tool to find buyers discussing my niche', score: 96, t: 'magenta' },
    { src: '@growthlee', msg: 'How do you track intent across communities?', score: 91, t: 'cyan' },
    { src: 'IndieHackers', msg: 'Looking for the right Slack groups for B2B', score: 84, t: 'violet' },
    { src: 'Hacker News', msg: 'Best way to monitor relevant threads daily?', score: 79, t: 'cyan' },
  ]
  return (
    <div>
      <PanelHeader title="Live Intent Feed">
        <span className="flex items-center gap-1.5 rounded-full bg-magenta/15 px-2.5 py-1 text-[10px] font-medium text-magenta">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-magenta" />
          Live
        </span>
      </PanelHeader>
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div
            key={r.msg}
            className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] p-3.5"
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
              style={tonecolor(r.t)}
            >
              {r.score}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium">{r.src}</p>
              <p className="truncate text-xs text-muted-foreground">{r.msg}</p>
            </div>
            <button className="rounded-lg bg-white/5 px-3 py-1.5 text-[11px] text-foreground/80 transition-colors hover:bg-white/10">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function CommunityMock() {
  const nodes = [
    { x: '20%', y: '30%', s: 56, t: 'violet', label: 'r/SaaS' },
    { x: '55%', y: '20%', s: 40, t: 'cyan', label: 'Discord' },
    { x: '75%', y: '50%', s: 64, t: 'magenta', label: 'LinkedIn' },
    { x: '38%', y: '62%', s: 44, t: 'cyan', label: 'Slack' },
    { x: '62%', y: '74%', s: 36, t: 'violet', label: 'X / Twitter' },
  ]
  return (
    <div>
      <PanelHeader title="Community Discovery Map">
        <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-muted-foreground">
          142 communities
        </span>
      </PanelHeader>
      <div className="relative h-[300px] overflow-hidden rounded-xl border border-border bg-white/[0.02]">
        <svg className="absolute inset-0 h-full w-full">
          <line x1="20%" y1="30%" x2="55%" y2="20%" stroke="oklch(0.62 0.24 295 / 0.3)" strokeWidth="1" />
          <line x1="55%" y1="20%" x2="75%" y2="50%" stroke="oklch(0.78 0.14 200 / 0.3)" strokeWidth="1" />
          <line x1="75%" y1="50%" x2="62%" y2="74%" stroke="oklch(0.7 0.22 350 / 0.3)" strokeWidth="1" />
          <line x1="38%" y1="62%" x2="20%" y2="30%" stroke="oklch(0.78 0.14 200 / 0.3)" strokeWidth="1" />
          <line x1="38%" y1="62%" x2="75%" y2="50%" stroke="oklch(0.62 0.24 295 / 0.3)" strokeWidth="1" />
        </svg>
        {nodes.map((n, i) => (
          <motion.div
            key={n.label}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
            style={{ left: n.x, top: n.y }}
          >
            <span
              className="flex items-center justify-center rounded-full"
              style={{
                width: n.s,
                height: n.s,
                ...tonebg(n.t),
              }}
            >
              <span className="h-2 w-2 rounded-full" style={tonedot(n.t)} />
            </span>
            <span className="whitespace-nowrap text-[10px] text-muted-foreground">
              {n.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function OpportunityMock() {
  const cols = [
    { name: 'New', tone: 'violet', items: ['Acme — pricing question', 'DevHub — feature ask'] },
    { name: 'Qualified', tone: 'cyan', items: ['Nimbus — demo intent', 'Loop — comparing tools'] },
    { name: 'Engaged', tone: 'magenta', items: ['Vertex — replied'] },
  ]
  return (
    <div>
      <PanelHeader title="Opportunity Dashboard">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 text-[10px] text-muted-foreground">
          <Filter className="h-3 w-3" /> Filter
        </span>
      </PanelHeader>
      <div className="grid grid-cols-3 gap-3">
        {cols.map((c) => (
          <div key={c.name} className="rounded-xl border border-border bg-white/[0.02] p-3">
            <div className="mb-2 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={tonedot(c.tone)} />
              <span className="text-[11px] font-medium">{c.name}</span>
              <span className="ml-auto text-[10px] text-muted-foreground">
                {c.items.length}
              </span>
            </div>
            <div className="space-y-2">
              {c.items.map((it) => (
                <div
                  key={it}
                  className="rounded-lg bg-white/[0.03] p-2.5 text-[11px] text-foreground/80"
                >
                  {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function OutreachMock() {
  return (
    <div>
      <PanelHeader title="Outreach Workspace" />
      <div className="grid gap-3 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-2.5 rounded-xl border border-border bg-white/[0.02] p-4">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan to-violet" />
            <div>
              <p className="text-xs font-medium">Jordan M.</p>
              <p className="text-[10px] text-muted-foreground">Founder · Nimbus</p>
            </div>
            <span className="ml-auto rounded-full bg-cyan/15 px-2 py-0.5 text-[10px] text-cyan">
              92 intent
            </span>
          </div>
          <div className="rounded-lg bg-white/[0.03] p-2.5 text-[11px] leading-relaxed text-muted-foreground">
            Mentioned needing a way to find communities for B2B SaaS in r/SaaS.
          </div>
        </div>
        <div className="rounded-xl border border-border bg-white/[0.02] p-4">
          <p className="mb-2 text-[10px] uppercase tracking-wide text-muted-foreground">
            Suggested message
          </p>
          <p className="text-xs leading-relaxed text-foreground/85">
            Hi Jordan — saw your note about finding the right B2B communities.
            We map exactly where your buyers gather. Happy to share what we
            found for Nimbus.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <button className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet to-magenta px-3 py-1.5 text-[11px] font-medium text-white">
              <Send className="h-3 w-3" /> Send
            </button>
            <button className="rounded-lg bg-white/5 px-3 py-1.5 text-[11px] text-foreground/80">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CrmMock() {
  const people = [
    { name: 'Jordan M.', co: 'Nimbus', stage: 'Replied', tone: 'cyan', done: true },
    { name: 'Avery K.', co: 'Vertex', stage: 'Meeting set', tone: 'violet', done: true },
    { name: 'Sam R.', co: 'Loop', stage: 'Following up', tone: 'magenta', done: false },
    { name: 'Riya P.', co: 'DevHub', stage: 'Nurturing', tone: 'cyan', done: false },
  ]
  return (
    <div>
      <PanelHeader title="Relationship Management">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 text-[10px] text-muted-foreground">
          <Search className="h-3 w-3" /> Search
        </span>
      </PanelHeader>
      <div className="overflow-hidden rounded-xl border border-border">
        {people.map((p, i) => (
          <div
            key={p.name}
            className={`flex items-center gap-3 p-3.5 ${
              i !== people.length - 1 ? 'border-b border-border' : ''
            } bg-white/[0.02]`}
          >
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-violet to-magenta" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium">{p.name}</p>
              <p className="text-[10px] text-muted-foreground">{p.co}</p>
            </div>
            <span
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px]"
              style={tonechip(p.tone)}
            >
              {p.done && <Check className="h-3 w-3" />}
              {p.stage}
            </span>
            <Star className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* color helpers (inline styles to keep dynamic tones reliable) */
const C: Record<string, string> = {
  violet: 'oklch(0.62 0.24 295)',
  cyan: 'oklch(0.78 0.14 200)',
  magenta: 'oklch(0.7 0.22 350)',
}
function tonecolor(t: string) {
  return {
    backgroundColor: `color-mix(in oklch, ${C[t]} 14%, transparent)`,
    color: C[t],
  } as React.CSSProperties
}
function tonebg(t: string) {
  return {
    background: `radial-gradient(circle, ${C[t]} 0%, transparent 70%)`,
    border: `1px solid ${C[t]}`,
    opacity: 0.85,
  } as React.CSSProperties
}
function tonedot(t: string) {
  return { backgroundColor: C[t] } as React.CSSProperties
}
function tonechip(t: string) {
  return {
    backgroundColor: 'oklch(1 0 0 / 0.05)',
    color: C[t],
  } as React.CSSProperties
}
