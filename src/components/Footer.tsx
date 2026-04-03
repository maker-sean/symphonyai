export default function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <span className="text-sm font-semibold">Symphony AI</span>
        </div>

        <div className="flex gap-8 text-sm text-muted">
          <a href="#services" className="transition-colors hover:text-foreground">
            Services
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </div>

        <p className="text-xs text-muted/60">
          &copy; {new Date().getFullYear()} Symphony AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
