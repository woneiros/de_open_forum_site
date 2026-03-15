import type { Metadata } from "next";
import PageNavBar from "@/components/PageNavBar";
import PageFooter from "@/components/PageFooter";
import JobListings, { type JobListing } from "@/components/JobListings";
import jobOpportunities from "@/data/job-opportunities.json";

export const metadata: Metadata = {
  title: "Job Opportunities - Data Engineering Open Forum",
  description:
    "Explore data engineering job opportunities from our event partners at the Data Engineering Open Forum.",
};

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground bg-diagonal-pattern">
      <PageNavBar />

      <div className="mx-1 md:mx-8 lg:mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="space-y-4 mb-10">
          <div className="font-mono text-sm text-accent">{"> JOB_OPPORTUNITIES_"}</div>
          <h1 className="text-balance font-mono text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Job Opportunities
          </h1>
          <p className="text-pretty leading-relaxed text-muted-foreground max-w-3xl">
            Our event partners are looking for top talent in data engineering. Explore open
            roles, meet the hiring teams in person at the event, and make connections that
            can turn into real next steps.
          </p>
        </div>

        <JobListings jobs={jobOpportunities as JobListing[]} />

        <PageFooter />
      </div>
    </main>
  );
}
