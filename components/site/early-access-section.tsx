'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'

export function EarlyAccessSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="early-access" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-8 sm:p-14">
        {/* gradient backdrop */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet/30 via-primary/15 to-magenta/30" />
        <div className="absolute inset-0 -z-10 glass-strong" />
        <div
          className="absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full opacity-50 blur-[100px]"
          style={{ background: 'oklch(0.62 0.24 295 / 0.6)' }}
        />
        <div
          className="absolute -bottom-24 -right-16 -z-10 h-72 w-72 rounded-full opacity-50 blur-[100px]"
          style={{ background: 'oklch(0.7 0.22 350 / 0.6)' }}
        />

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            Start discovering customers with intent.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
            Join the early access list and be first to find the people already
            looking for what you offer.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan/15 px-5 py-3 text-sm font-medium text-cyan"
            >
              <Check className="h-4 w-4" />
              You&apos;re on the list — we&apos;ll be in touch soon.
            </motion.div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/40"
              />
              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-magenta px-6 text-sm font-medium text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.03]"
              >
                Join Early Access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-muted-foreground">
            No spam. Just early access and product updates.
          </p>
        </div>
      </div>
    </section>
  )
}
