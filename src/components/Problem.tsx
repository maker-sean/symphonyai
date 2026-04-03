export default function Problem() {
  return (
    <section id="problem" className="relative px-6 py-24 md:py-32">
      <div className="glow-line mx-auto mb-20 max-w-xl" />

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-light">
            The Reality Check
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everyone Wants &ldquo;AI Agents.&rdquo;
            <br />
            <span className="text-muted">Almost Nobody Has the Foundation.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            The market is flooded with demos of autonomous agents that can
            &ldquo;do anything.&rdquo; The reality? Most enterprises don&rsquo;t
            have the data pipelines, error handling, or governance frameworks to
            let an agent operate unsupervised. You don&rsquo;t need another
            chatbot. You need infrastructure.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* What They Sell */}
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-red-400">What They Sell You</h3>
            </div>
            <ul className="space-y-3 text-muted">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/50" />
                &ldquo;Plug-and-play&rdquo; agents that hallucinate on your proprietary data
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/50" />
                Off-the-shelf chatbots with no integration into your actual workflows
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/50" />
                &ldquo;AI Transformation&rdquo; decks that never ship production code
              </li>
            </ul>
          </div>

          {/* What We Build */}
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-accent-light">What We Build</h3>
            </div>
            <ul className="space-y-3 text-muted">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light/50" />
                Deterministic scripts and pipelines that run reliably&mdash;every time
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light/50" />
                Agents with guardrails: human-in-the-loop approval, audit trails, fallback logic
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light/50" />
                Production systems your ops team can actually maintain and trust
              </li>
            </ul>
          </div>
        </div>

        {/* Methodology callout */}
        <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            The Symphony Methodology
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            We don&rsquo;t start with the model. We start with your process.
            Map the workflow. Identify the bottleneck. Automate with precision.{" "}
            <span className="text-foreground font-medium">Then</span> layer in
            intelligence where it compounds ROI&mdash;not where it looks
            impressive in a demo.
          </p>
        </div>
      </div>
    </section>
  );
}
