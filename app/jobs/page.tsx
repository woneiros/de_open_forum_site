import type { Metadata } from "next";
import PageNavBar from "@/components/PageNavBar";
import PageFooter from "@/components/PageFooter";

export const metadata: Metadata = {
  title: "Job Opportunities - Data Engineering Open Forum",
  description:
    "Recruiting partners and job opportunities for Data Engineering Open Forum 2027 are coming soon.",
};

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground bg-diagonal-pattern">
      <PageNavBar />

      <div className="mx-1 md:mx-8 lg:mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="space-y-4 mb-10">
          <div className="font-mono text-sm text-accent">
            {"> JOB_OPPORTUNITIES_"}
          </div>
          <h1 className="text-balance font-mono text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Job Opportunities
          </h1>
          <p className="text-pretty leading-relaxed text-muted-foreground max-w-3xl">
            Recruiting partners and job opportunities for DEOF 2027 are coming
            soon.
          </p>
          <div>
            <a
              href="https://luma.com/deof2027?utm_source=website-job-page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-accent bg-accent px-5 py-3 font-mono font-semibold text-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Register Now
            </a>
          </div>
        </div>

        <PageFooter />
      </div>
    </main>
  );
}
