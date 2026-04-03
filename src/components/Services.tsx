const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "AI Literacy Workshops",
    description:
      "A hands-on, 2-hour intensive that takes your team from AI-curious to AI-competent. No theory decks—participants build real prompts, evaluate outputs, and leave with a personal workflow they can use Monday morning.",
    details: [
      "Prompt engineering for domain-specific tasks",
      "Evaluating AI outputs: accuracy, bias, and hallucination detection",
      "Security and governance fundamentals",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Custom Agent Development",
    description:
      "Bespoke AI assistants built on your data, your rules, your compliance requirements. From personal research agents to Open Canvas-style collaborative tools that fit your team's actual decision-making process.",
    details: [
      "RAG pipelines over proprietary datasets",
      "Multi-step reasoning with human-in-the-loop checkpoints",
      "Role-based access and audit logging",
    ],
    tag: "Most Requested",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Workflow Automation",
    description:
      "Replace the manual data entry, report compilation, and scouting report synthesis that burns 20+ hours per week. We build robust, testable scripts that integrate with your existing tools—not another SaaS login.",
    details: [
      "Data pipeline orchestration and ETL",
      "Automated report generation and distribution",
      "API integrations with CRMs, databases, and internal tools",
    ],
    tag: "Highest ROI",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-light">
            Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Three Ways We Drive{" "}
            <span className="gradient-text">Measurable Impact</span>
          </h2>
          <p className="mt-6 text-lg text-muted">
            Every engagement is scoped to deliver ROI within 90 days.
            No retainers without results.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/40 hover:bg-surface-light"
            >
              {/* Tag */}
              {service.tag && (
                <span className="absolute right-6 top-6 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
                  {service.tag}
                </span>
              )}

              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>

              {/* Details */}
              <ul className="mt-6 space-y-2">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent-light"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
