'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Loader2, CheckCircle2, ArrowRight } from 'lucide-react'
import { submitToWaitlist } from '@/app/actions/waitlist'

export function EarlyAccessSection() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError('')

    // Send just the email first
    const res = await submitToWaitlist({ email })

    if (res.error) {
      setError(res.error)
      setIsLoading(false)
    } else {
      setIsLoading(false)
      setStep(2) // Move to step 2 smoothly
    }
  }

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Send the email again so the script knows which row to update, along with new data
    const res = await submitToWaitlist({ email, name, position })

    setIsLoading(false)
    if (!res.error) {
      setStep(3) // Move to final thank you state
    }
  }

  return (
    <section id="early-access" className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
        
        {/* Header (Always visible until step 3) */}
        {step !== 3 && (
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get early access
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join the waitlist to be among the first to experience Reach@Ease.
            </p>
          </div>
        )}

        <div className="mx-auto max-w-md">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Email Only */}
            {step === 1 && (
              <motion.form
                key="step1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleStep1Submit}
                className="flex flex-col gap-4"
              >
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 pl-4 text-sm text-foreground outline-none transition-colors focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50"
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan px-4 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Join early access'}
                  {!isLoading && <ArrowRight className="h-4 w-4" />}
                </button>
              </motion.form>
            )}

            {/* STEP 2: Optional Info */}
            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleStep2Submit}
                className="flex flex-col gap-4"
              >
                <div className="mb-2 flex items-center justify-center gap-2 text-cyan">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">You're on the list!</span>
                </div>
                <p className="mb-2 text-center text-sm text-muted-foreground">
                  Want to skip the line? Tell us a bit more about yourself (Optional).
                </p>

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50"
                />
                <input
                  type="text"
                  placeholder="Position (e.g., Founder, Growth Manager)"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50"
                />
                
                <div className="mt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(3)} // Skip button
                    className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/50"
                  >
                    Skip
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan px-4 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                  >
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Complete Profile'}
                  </button>
                </div>
              </motion.form>
            )}

            {/* STEP 3: Final Thank You */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="mb-4 rounded-full bg-cyan/10 p-3 text-cyan">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">You're all set!</h3>
                <p className="mt-2 text-muted-foreground">
                  Keep an eye on your inbox. We'll be in touch soon.
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}