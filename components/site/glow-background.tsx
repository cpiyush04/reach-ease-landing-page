export function GlowBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base near-black */}
      <div className="absolute inset-0 bg-background" />

      {/* violet top-left bloom */}
      <div
        className="absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, oklch(0.62 0.24 295 / 0.55), transparent 65%)',
          animation: 'pulse-glow 9s ease-in-out infinite',
        }}
      />
      {/* cyan right bloom */}
      <div
        className="absolute -right-32 top-1/3 h-[38rem] w-[38rem] rounded-full opacity-30 blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, oklch(0.78 0.14 200 / 0.5), transparent 65%)',
          animation: 'pulse-glow 11s ease-in-out infinite',
        }}
      />
      {/* magenta bottom bloom */}
      <div
        className="absolute bottom-0 left-1/4 h-[34rem] w-[34rem] rounded-full opacity-25 blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, oklch(0.7 0.22 350 / 0.45), transparent 65%)',
          animation: 'pulse-glow 13s ease-in-out infinite',
        }}
      />

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />
    </div>
  )
}
