import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CommitteeCard } from "@/components/CommitteeCard";
import { FAQSection } from "@/components/FAQSection";
import { programCommittee, faqItems } from "@/data/homepage";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground bg-diagonal-pattern">
      {/* Top bar with retro feel */}
      <div className="border-b border-accent/30 px-4 py-2 font-mono text-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span>{"// DATA ENGINEERING OPEN FORUM"}</span>
          <span>{"[SAN FRANCISCO, CA]"}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-10 lg:gap-10">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center space-y-8 lg:col-span-6 mx-1 md:mx-8 lg:mx-0">
            <div className="space-y-4">
              <div className="font-mono text-sm text-accent">
                {"> AGENDA_COMING_SOON_ "}
              </div>
              <h1 className="text-balance font-mono text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl whitespace-pre-line">
                Data Engineering Open Forum
              </h1>
              <div className="font-mono text-lg text-muted-foreground sm:text-xl">
                {"// San Francisco: April 16th, 2026"}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-pretty text-lg leading-relaxed">
                The most anticipated and respected conference in the data
                engineering community.
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                World-class content. Meaningful connections. Open dialogue.
                We&apos;re building an event that practitioners, leaders, and
                enthusiasts actively seek out — not just for the technical
                depth, but for the experience it delivers.
              </p>
            </div>

            {/* Why Should I Attend? */}
            <div className="space-y-6">
              <div className="font-mono text-sm text-accent">
                {"> WHY_ATTEND_ "}
              </div>
              <p className="text-pretty text-lg leading-relaxed">
                This isn&apos;t just another conference. It&apos;s a grassroots
                community gathering where genuine connections are formed and
                real problems are discussed openly. No vendor pitches, no
                superficial networking — just practitioners sharing authentic
                experiences and building relationships that matter.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="border-l-2 border-accent/30 pl-4 py-3 space-y-2">
                  <p className="font-semibold">Community-Driven</p>
                  <p className="text-sm text-muted-foreground">
                    Built by practitioners, for practitioners. Our content and
                    direction come from the community, not corporate agendas.
                  </p>
                </div>
                <div className="border-l-2 border-accent/30 pl-4 py-3 space-y-2">
                  <p className="font-semibold">Vendor-Neutral</p>
                  <p className="text-sm text-muted-foreground">
                    An open space for honest dialogue about what works, what
                    doesn&apos;t, and the real challenges we face.
                  </p>
                </div>
                <div className="border-l-2 border-accent/30 pl-4 py-3 space-y-2">
                  <p className="font-semibold">Authentic Connections</p>
                  <p className="text-sm text-muted-foreground">
                    Meaningful relationships that extend beyond the event.
                    Connect with peers who truly get it.
                  </p>
                </div>
              </div>
            </div>

            {/* Agenda Section */}
            <div className="space-y-4">
              <div className="font-mono text-sm text-accent">
                {"> AGENDA_ "}
              </div>
              <p className="font-mono font-extrabold text-2xl text-accent">
                {">>"} Coming soon!
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                We&apos;re curating an exceptional lineup of talks from
                practitioners sharing real-world experiences and production
                system insights. Stay tuned for the full agenda.
              </p>
              <p className="font-mono text-sm">
                <span className="text-accent">
                  {"> CHECK_OUT_PREVIOUS_SESSIONS:"}
                </span>
                {" Get a sense of what to expect by exploring talks from "}
                <Link
                  href="/past/2024"
                  className="underline hover:text-accent"
                >
                  2024
                </Link>
                {" and "}
                <Link
                  href="/past/2025"
                  className="underline hover:text-accent"
                >
                  2025
                </Link>
                {"."}
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-sm">
                <span className="text-accent text-base">
                  {"> BE_THE_FIRST_TO_KNOW:"}
                </span>
                {" Join our Google group "}
                <br />
                {" > "}
                <a
                  rel="noopener noreferrer"
                  href="https://groups.google.com/g/data-engineering-open-forum"
                  target="_blank"
                  className="underline hover:text-accent"
                >
                  data-engineering-open-forum
                </a>
                {" for updates & announcements."}
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-accent/30 pl-4 font-mono text-sm text-muted-foreground">
              <p>{"// Technically deep, globally relevant"}</p>
              <p>{"// Community-driven content"}</p>
              <p>{"// Open dialogue & collaboration"}</p>
              <p>{"// Connections that outlive the event"}</p>
            </div>

            {/* Organizer Information */}
            <div className="border-2 border-accent/40 p-6 space-y-3 rounded-sm">
              <p className="font-mono text-sm text-accent">
                {"// ORGANIZED_BY_"}
              </p>
              <h3 className="font-mono text-xl font-bold">
                Data Engineering Team (DET)
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                This event is organized by the Data Engineering Team (DET), a
                grassroots community of data engineering practitioners. We are
                vendor-neutral and community-driven — this is not a Netflix
                event, though some Netflix employees are involved as community
                members. Our mission is to create an open, authentic space for
                data engineering dialogue.
              </p>
            </div>

            {/* Program Committee */}
            <div className="space-y-4">
              <div className="font-mono text-sm text-accent">
                {"> PROGRAM_COMMITTEE_ "}
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {programCommittee.map((member) => (
                  <CommitteeCard
                    key={member.name}
                    name={member.name}
                    company={member.company}
                  />
                ))}
              </div>
            </div>

            {/* Previous editions */}
            <div className="flex flex-col flex-wrap items-start gap-2">
              <p className="font-mono">
                <span className="italic">{"Previous editions: "}</span>
                <Link
                  href="/past/2024"
                  className="hover:text-accent hover:underline"
                >
                  [2024]
                </Link>
                {", "}
                <Link
                  href="/past/2025"
                  className="hover:text-accent hover:underline"
                >
                  [2025]
                </Link>
              </p>
            </div>

            {/* FAQ Section */}
            <div className="space-y-4">
              <div className="font-mono text-sm text-accent">
                {"> FREQUENTLY_ASKED_QUESTIONS_ "}
              </div>
              <FAQSection items={faqItems} />
            </div>
          </div>

          {/* Right column - Visual element */}
          <div className="flex items-center justify-center lg:col-span-4">
            <div className="relative aspect-square w-full max-w-md">
              <Image
                src="/de_open_forum_goldengate.png"
                alt="Data Engineering Open Forum - Golden Gate Bridge representing San Francisco"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 border-t border-accent/30 pt-8 font-mono text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>{"// Excellence in content & community"}</div>
            <div className="flex gap-6">
              <span>{"[OPEN]"}</span>
              <span>{"[INCLUSIVE]"}</span>
              <span>{"[INSPIRING]"}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
