'use client'

import { motion } from 'motion/react'
import { ArrowRight, Play } from 'lucide-react'
import { HeroDashboard } from './hero-dashboard'

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:pt-44"
    >
      <div className="flex flex-col items-center text-center">
        <motion.a
          href="#early-access"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          Intent intelligence, now in early access
          <ArrowRight className="h-3 w-3" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Find customers already{' '}
          <span className="text-gradient">looking for what you offer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Reach@Ease helps businesses discover audiences, communities, intent
          signals, and outreach opportunities across the web — before anyone
          else reaches them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#early-access"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-magenta px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Join Early Access
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#workflow"
            className="glass inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5 sm:w-auto"
          >
            <Play className="h-3.5 w-3.5 text-cyan" />
            See How It Works
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 48, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mt-14 sm:mt-16"
      >
        <HeroDashboard />
      </motion.div>
    </section>
  )
}
