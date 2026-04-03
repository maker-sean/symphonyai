const metrics = [
  { value: "20+", label: "Hours/week saved in manual reporting" },
  { value: "3x", label: "Faster scouting report synthesis" },
  { value: "90", label: "Day ROI timeline" },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="relative px-6 py-24 md:py-32">
      <div className="glow-line mx-auto mb-20 max-w-xl" />

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-light">
            Case Study
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Excel Sports Management
          </h2>
          <p className="mt-4 text-lg text-muted">
            Premier Baseball Agency &middot; Inaugural Client
          </p>
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-surface p-8 md:p-12">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Narrative */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent-light">
                The Challenge
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Excel Sports&rsquo; baseball division manages rosters of elite
                talent across the MLB landscape. Their agents were spending
                hours each week on manual data entry, compiling scouting
                reports from disparate sources, and synthesizing market
                intelligence that was outdated by the time it reached decision-makers.
              </p>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-accent-light">
                Our Approach
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                We began with a 2-hour AI Literacy Workshop to align the team
                on what&rsquo;s possible&mdash;and what isn&rsquo;t. From there,
                we mapped their end-to-end workflow: data ingestion, report
                generation, and client communication. The result is a phased
                automation roadmap that delivers wins at each milestone, not a
                single big-bang deployment.
              </p>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-accent-light">
                What We&rsquo;re Building
              </h3>
              <ul className="mt-4 space-y-3 text-muted">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                  Automated scouting report pipeline — structured data from raw notes in seconds
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                  Custom research agent for player market analysis with guardrails
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                  Workflow integration with their existing CRM and communication tools
                </li>
              </ul>
            </div>

            {/* Metrics & Visual */}
            <div className="flex flex-col justify-between">
              <div className="space-y-6">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-border bg-background p-6"
                  >
                    <div className="text-3xl font-extrabold text-accent-light md:text-4xl">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-sm text-muted">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-6">
                <p className="text-sm italic text-muted">
                  &ldquo;Symphony AI didn&rsquo;t just show us a demo.
                  They sat in our workflow, found the friction, and built
                  systems that our team actually uses every day.&rdquo;
                </p>
                <p className="mt-3 text-sm font-medium text-foreground">
                  — Excel Sports Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
