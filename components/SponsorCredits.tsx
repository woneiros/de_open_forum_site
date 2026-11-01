import Image from "next/image";
import sponsorLogoBounds from "@/data/sponsor-logo-bounds.json";

export interface SponsorTier {
  tier: string;
  sponsors: { name: string; href: string; logoSrc: string }[];
}

// Visible bounds and painted area, measured from each asset's alpha channel.
const logoBounds: Record<string, {
  width: number;
  height: number;
  left: number;
  top: number;
  contentWidth: number;
  contentHeight: number;
  inkArea: number;
}> = sponsorLogoBounds;

const referenceLogo = logoBounds["/sponsors/datadog.svg"];

// Small optical corrections for wordmarks that appear heavier at equal painted area.
const opticalScale: Record<string, number> = {
  OpenAI: 0.87,
  MinIO: 0.9,
  Netflix: 0.92,
  Matia: 0.95,
  VeloDB: 0.95,
};

interface SponsorCreditsProps {
  year: string;
  sponsorTiers: SponsorTier[];
  className?: string;
}

export default function SponsorCredits({
  year,
  sponsorTiers,
  className = "mt-12",
}: SponsorCreditsProps) {
  return (
    <section
      id={`sponsors-${year}`}
      aria-labelledby={`sponsors-${year}-heading`}
      className={`rounded-sm border-2 border-accent/40 p-5 ${className}`}
    >
      <h2 id={`sponsors-${year}-heading`} className="font-mono text-xl font-semibold text-accent">
        {year} Sponsors
      </h2>
      <dl className="mt-4 divide-y divide-accent/15">
        {sponsorTiers.map((group) => (
          <div key={group.tier} className="space-y-2 py-3 sm:grid sm:grid-cols-[10rem_1fr] sm:gap-4 sm:space-y-0">
            <dt className="font-mono text-xs leading-6 text-muted-foreground">
              {group.tier}
            </dt>
            <dd className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-5">
              {group.sponsors.map((sponsor) => {
                const bounds = logoBounds[sponsor.logoSrc];
                // Match Datadog's visible weight while preserving each logo's proportions.
                const relativeHeight = bounds.contentHeight / referenceLogo.contentHeight
                  * Math.sqrt(referenceLogo.inkArea / bounds.inkArea)
                  * (opticalScale[sponsor.name] ?? 1);
                return (
                  <a
                    key={sponsor.name}
                    href={sponsor.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={sponsor.name}
                    className="inline-flex h-10 shrink-0 items-center justify-center rounded-sm opacity-90 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span
                      className="relative block shrink-0 overflow-hidden [--logo-height:20px] sm:[--logo-height:24px]"
                      style={{
                        height: `calc(var(--logo-height) * ${relativeHeight})`,
                        width: `calc(var(--logo-height) * ${relativeHeight * bounds.contentWidth / bounds.contentHeight})`,
                      }}
                    >
                      <Image
                        src={sponsor.logoSrc}
                        alt={`${sponsor.name} logo`}
                        width={bounds.width}
                        height={bounds.height}
                        sizes="(max-width: 640px) 256px, 320px"
                        className="sponsor-logo absolute max-w-none"
                        style={{
                          width: `${bounds.width / bounds.contentWidth * 100}%`,
                          height: `${bounds.height / bounds.contentHeight * 100}%`,
                          left: `${-bounds.left / bounds.contentWidth * 100}%`,
                          top: `${-bounds.top / bounds.contentHeight * 100}%`,
                        }}
                      />
                    </span>
                  </a>
                );
              })}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
