"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export interface JobListing {
  company: string;
  link: string;
  title: string;
  subtitle: string;
  location: string;
  location_type: "Remote" | "Hybrid" | "Onsite";
  years_experience: string;
}

const LOCATION_TYPE_ICONS: Record<JobListing["location_type"], string> = {
  Remote: "~",
  Hybrid: "⇄",
  Onsite: "●",
};

const ALL_LOCATION_TYPES: JobListing["location_type"][] = [
  "Remote",
  "Hybrid",
  "Onsite",
];

const COMPANY_LOGOS: Record<string, string> = {
  Airbnb: "/job_logos/Airbnb_jobs.png",
  CelerData: "/job_logos/celerdata_jobs.svg",
  Netflix: "/job_logos/netflix_jobs.png",
  OpenAI: "/job_logos/openai_jobs.png",
  "Altimate AI": "/job_logos/altimateai_jobs.png",
};

interface JobListingsProps {
  jobs: JobListing[];
  initialCompany?: string;
}

export default function JobListings({
  jobs,
  initialCompany,
}: JobListingsProps) {
  const [query, setQuery] = useState("");
  const [activeCompany, setActiveCompany] = useState<string | null>(
    initialCompany ?? null,
  );
  const [activeLocationType, setActiveLocationType] = useState<
    JobListing["location_type"] | null
  >(null);

  const sortedJobs = useMemo(
    () =>
      [...jobs].sort((a, b) => {
        const co = a.company.localeCompare(b.company);
        return co !== 0 ? co : a.title.localeCompare(b.title);
      }),
    [jobs],
  );

  const availableCompanies = useMemo(() => {
    const seen = new Set<string>();
    return sortedJobs
      .filter((j) => {
        if (seen.has(j.company)) return false;
        seen.add(j.company);
        return true;
      })
      .map((j) => j.company);
  }, [jobs]);

  const availableLocationTypes = useMemo(() => {
    const types = new Set(sortedJobs.map((j) => j.location_type));
    return ALL_LOCATION_TYPES.filter((t) => types.has(t));
  }, [sortedJobs]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return sortedJobs.filter((job) => {
      const matchesQuery =
        !q ||
        job.company.toLowerCase().includes(q) ||
        job.title.toLowerCase().includes(q) ||
        job.subtitle.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q);
      const matchesCompany = !activeCompany || job.company === activeCompany;
      const matchesLocationType =
        !activeLocationType || job.location_type === activeLocationType;
      return matchesQuery && matchesCompany && matchesLocationType;
    });
  }, [sortedJobs, query, activeCompany, activeLocationType]);

  return (
    <div className="space-y-4">
      {/* Search + location type filter row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Input
          type="search"
          placeholder="// search by title, location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="font-mono text-sm bg-primary/40 border-accent/30 placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/30 h-10"
        />
        {availableLocationTypes.length > 0 && (
          <div className="flex gap-2 shrink-0">
            {availableLocationTypes.map((type) => (
              <button
                key={type}
                type="button"
                aria-pressed={activeLocationType === type}
                onClick={() =>
                  setActiveLocationType(
                    activeLocationType === type ? null : type,
                  )
                }
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs border transition-colors ${
                  activeLocationType === type
                    ? "border-accent bg-accent text-primary"
                    : "border-accent/30 text-muted-foreground hover:border-accent hover:text-primary-foreground"
                }`}
              >
                <span>{LOCATION_TYPE_ICONS[type]}</span>
                {type.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Company pills row */}
      {availableCompanies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {availableCompanies.map((company) => {
            const logo = COMPANY_LOGOS[company];
            const isActive = activeCompany === company;
            return (
              <button
                key={company}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCompany(isActive ? null : company)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs border transition-colors ${
                  isActive
                    ? "border-accent bg-accent text-primary"
                    : "border-accent/30 text-muted-foreground hover:border-accent hover:text-primary-foreground"
                }`}
              >
                {logo && (
                  <Image
                    src={logo}
                    alt={`${company} logo`}
                    width={14}
                    height={14}
                    className={`h-3.5 w-auto object-contain ${isActive ? "brightness-0" : "brightness-0 invert"}`}
                  />
                )}
                {company.toUpperCase()}
              </button>
            );
          })}
        </div>
      )}

      {/* Result count */}
      <div className="font-mono text-xs text-muted-foreground">
        {`// ${filtered.length} ${filtered.length === 1 ? "opportunity" : "opportunities"} found`}
      </div>

      {/* Listings */}
      <div data-testid="job-listings">
        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map((job) => (
              <div
                key={`${job.company}-${job.title}`}
                className="flex items-start justify-between gap-4 border border-accent/20 bg-primary/40 px-5 py-4 transition-colors hover:border-accent/50 hover:bg-primary/60"
              >
                <div className="space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-accent border border-accent/40 px-1.5 py-0.5 inline-flex items-center gap-1">
                      {COMPANY_LOGOS[job.company] && (
                        <Image
                          src={COMPANY_LOGOS[job.company]}
                          alt={`${job.company} logo`}
                          width={14}
                          height={14}
                          className="h-3.5 w-auto object-contain brightness-0 invert opacity-80"
                        />
                      )}
                      {job.company.toUpperCase()}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground border border-accent/20 px-1.5 py-0.5 inline-flex items-center gap-1">
                      <span>{LOCATION_TYPE_ICONS[job.location_type]}</span>
                      {job.location_type.toUpperCase()}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground border border-accent/20 px-1.5 py-0.5">
                      {job.location}
                    </span>
                  </div>
                  <p className="text-base font-semibold leading-snug">
                    {job.title}
                  </p>
                  <p className="font-mono text-sm text-muted-foreground">
                    {"// "}
                    {job.subtitle}
                  </p>
                  <p className="font-mono text-sm text-muted-foreground">
                    {"// "}
                    {job.years_experience} years experience
                  </p>
                </div>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center border border-accent/40 px-3 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-primary hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent mt-0.5"
                >
                  APPLY →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-accent/20 bg-primary/40 px-5 py-8 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              {"// no results found. try a different search term."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
