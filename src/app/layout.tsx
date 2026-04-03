import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Symphony AI — Orchestrating the Future of Performance",
  description:
    "Custom AI Agents, Workflow Automation, and AI Literacy for Elite Agencies. We bridge the gap between AI hype and business reality.",
  keywords: [
    "AI consulting",
    "AI agents",
    "workflow automation",
    "AI implementation",
    "sports agency AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
