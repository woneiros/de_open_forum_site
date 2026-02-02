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
        <div className="grid gap-6 lg:grid-cols-10 lg:gap-10 ">
          {/* Header */}
          <div className="col-span-full grid lg:grid-cols-10 grid-cols-1 border-b border-accent/30 pb-10 mb-10 gap-8">
            <div className="space-y-4 lg:col-span-6">
              <div className="font-mono text-sm text-accent">
                {"> AGENDA_COMING_SOON_ "}
              </div>
              <h1 className="text-balance font-mono text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl whitespace-pre-line">
                Data Engineering Open Forum
              </h1>
              <div className="font-mono font-extrabold text-xl text-accent sm:text-2xl border-flow px-3 py-2 inline-block">
                {"San Francisco: April 16th, 2026"}
              </div>
              <p className="text-pretty text-lg leading-relaxed">
                A Data Engineering event by the community for the community.
                <br />
                <span className="italic font-mono text-sm">
                  Brought to you by{" "}
                  <a
                    rel="noopener noreferrer"
                    href="https://dataengineeringthings.com"
                    target="_blank"
                    className="underline hover:text-accent"
                  >
                    Data Engineering Things
                  </a>
                </span>
              </p>
              <div className="space-y-2 font-mono text-sm text-muted-foreground">
                <p>{"// Technically deep, globally relevant"}</p>
                <p>{"// Community-driven content"}</p>
                <p>{"// Open dialogue & collaboration"}</p>
                <p>{"// Connections that outlive the event"}</p>
              </div>
            </div>
            {/* Right column - Visual element */}
            <div className="flex items-center justify-center lg:col-span-4 ">
              <div className="relative  w-full h-70 lg:h-110 max-w-md">
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
          {/* End of header -- begin main content */}
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center space-y-16 lg:col-span-8 mx-1 md:mx-8 lg:mx-0">
            {/* Why Should I Attend? */}
            <div className="space-y-6">
              <div className="font-mono text-3xl font-semibold text-accent">
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
              <div className="font-mono text-3xl font-semibold text-accent">
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
              <p className="font-mono">
                <span className="text-accent">
                  {"> CHECK_OUT_PREVIOUS_SESSIONS:"}
                </span>
                <br />
                {" Get a sense of what to expect by exploring talks from "}
                <Link href="/past/2024" className="underline hover:text-accent">
                  [2024]
                </Link>
                {" and "}
                <Link href="/past/2025" className="underline hover:text-accent">
                  [2025]
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

            {/* Organizer Information */}
            <div className="border-2 border-accent/40 p-6 space-y-3 rounded-sm">
              <p className="font-mono text-xl font-semibold text-accent">
                {"> ORGANIZED_BY_"}
              </p>
              <h3 className="font-mono text-xl font-bold">
                Data Engineering Things{" "}
                <a
                  href="https://dataengineeringthings.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent"
                >
                  [DET]
                </a>
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                This event is organized by the team behind Data Engineering
                Things (DET), a grassroots community of data engineering
                practitioners. We are vendor-neutral and community-driven. Our
                mission is to create an open, authentic space for data
                engineering dialogue.
              </p>

              {/* Program Committee */}
              <div className="space-y-4">
                <div className="font-mono  font-semibold text-accent">
                  {"// PROGRAM_COMMITTEE_ "}
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
            </div>

            {/* FAQ Section */}
            <div className="space-y-4">
              <div className="font-mono text-3xl font-semibold text-accent">
                {"> FREQUENTLY_ASKED_QUESTIONS_ "}
              </div>
              <FAQSection items={faqItems} />
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
