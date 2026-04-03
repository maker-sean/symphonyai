export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent-light/8 blur-[96px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">

        {/* Headline */}
        <h1 className="animate-fade-in-up animate-delay-100 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Orchestrating the Future{" "}
          <span className="gradient-text">of Performance</span>
        </h1>

        {/* Sub-headline */}
        <p className="animate-fade-in-up animate-delay-200 mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          Custom AI Agents and Automation for Elite Agencies.
          We turn AI ambition into measurable operational leverage&mdash;no
          hype, no hallucinations, just systems that ship.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-accent-light/25"
          >
            Request a Consultation
          </a>
          <a
            href="#services"
            className="rounded-lg border border-border px-8 py-3.5 text-sm font-medium text-muted transition-colors hover:border-muted hover:text-foreground"
          >
            Explore Services
          </a>
        </div>

        {/* Trust indicators */}
        <div className="animate-fade-in-up animate-delay-500 mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted/70">
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            Enterprise-Grade Security
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            SOC 2 Aligned
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            White-Glove Onboarding
          </span>
        </div>
      </div>
    </section>
  );
}
