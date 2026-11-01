import PageNavBar from "@/components/PageNavBar";
import PageFooter from "@/components/PageFooter";
import TalksList, { Talk } from "@/components/TalksList";
import eventData2024 from "@/data/past/2024.json";
import eventData2025 from "@/data/past/2025.json";
import eventData2026 from "@/data/past/2026.json";
import SponsorCredits, { type SponsorTier } from "@/components/SponsorCredits";
import { notFound } from "next/navigation";

// type definitions for event data
interface EventData {
  year: string;
  title: string;
  date: string;
  description: string;
  playlistUrl: string;
  talks: Talk[];
  sponsorTiers?: SponsorTier[];
}

// Map of available years to their data
const eventDataMap: Record<string, EventData> = {
  "2024": eventData2024,
  "2025": eventData2025,
  "2026": eventData2026,
};

// Tell Next.js which years to pre-render at build time
export async function generateStaticParams() {
  return Object.keys(eventDataMap).map((year) => ({ year }));
}

// Generate metadata dynamically based on year
export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const eventData = eventDataMap[year];

  if (!eventData) {
    return {
      title: "Talks Not Found - Data Engineering Open Forum",
    };
  }

  return {
    title: `Talks ${eventData.year} - Data Engineering Open Forum`,
    description: `Watch all the talks from Data Engineering Open Forum ${eventData.year} in San Francisco.`,
  };
}

export default async function TalksPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const eventData = eventDataMap[year];

  // Return 404 if year doesn't exist
  if (!eventData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-primary text-primary-foreground bg-diagonal-pattern">
      <PageNavBar />

      <div className="mx-1 md:mx-8 lg:mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-24">
        {/* Header section with metadata */}
        <div className="space-y-4 mb-12">
          <div className="font-mono text-sm text-accent">
            {`> TALKS_${eventData.year}_ `}
          </div>
          <h1 className="text-balance font-mono text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {eventData.title}
          </h1>

          {/* Description */}
          <p className="text-pretty leading-relaxed text-muted-foreground max-w-3xl">
            {eventData.description}
          </p>

          {/* Event date and talk count */}
          <div className="font-mono text-lg text-muted-foreground space-y-1">
            <div>{`// ${new Date(eventData.date).toLocaleDateString("en-US", {
              timeZone: "UTC",
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}`}</div>
          </div>

          {/* Playlist link */}
          <div className="pt-2">
            <a
              href={eventData.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline"
            >
              {"[▶ VIEW FULL PLAYLIST ON YOUTUBE]"}
            </a>
          </div>
        </div>

        {/* Talks list */}
        <TalksList
          talks={eventData.talks}
          presentation={eventData.year === "2026" ? "cards" : "list"}
        />

        {eventData.sponsorTiers && (
          <SponsorCredits year={eventData.year} sponsorTiers={eventData.sponsorTiers} />
        )}

        <PageFooter />
      </div>
    </main>
  );
}
