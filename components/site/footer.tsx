import { Sparkles, Mail } from 'lucide-react'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const product = [
  'Customer Discovery',
  'Intent Intelligence',
  'Outreach Automation',
  'CRM',
]

export function Footer() {
  return (
    <footer className="relative border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet via-primary to-magenta">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              Reach<span className="text-violet">@</span>Ease
            </span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Discover customers already discussing relevant needs, interests, and
            buying intent online.
          </p>
        </div>

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Platform
            </p>
            <ul className="mt-4 space-y-2.5">
              {product.map((p) => (
                <li key={p}>
                  <span className="text-sm text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:reach.ease.team@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-cyan" />
                  reach.ease.team@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/piyush-chandra-730438258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  <LinkedInIcon className="h-4 w-4 text-cyan" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Reach@Ease. All rights reserved.</p>
        <p>Currently in early access.</p>
      </div>
    </footer>
  )
}
