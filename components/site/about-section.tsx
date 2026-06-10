'use client'

import { Reveal } from './reveal'
import { Sparkles } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
      <Reveal className="glass-strong relative overflow-hidden rounded-3xl p-8 text-center sm:p-12">
        <div className="mx-auto mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet via-primary to-magenta">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          About Reach@Ease
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Reach@Ease is currently being built and refined with early users. Our
          mission is to help businesses discover customers already discussing
          relevant needs, interests, and buying intent online.
        </p>
      </Reveal>
    </section>
  )
}
