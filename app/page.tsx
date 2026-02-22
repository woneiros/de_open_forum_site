import Image from "next/image";
import Link from "next/link";
import { CommitteeCard } from "@/components/CommitteeCard";
import { FAQSection } from "@/components/FAQSection";
import { MuseumAgendaPrototype } from "@/components/MuseumAgendaPrototype";
import GalleryCarousel from "@/components/GalleryCarousel";
import { programCommittee, faqItems } from "@/data/homepage";

const sponsorTiers = [
  {
    tier: "PLATINUM PLUS",
    sponsors: [
      {
        name: "Databricks",
        href: "https://www.databricks.com/",
        logoSrc: "/sponsors/databriks.svg",
      },
    ],
  },
  {
    tier: "PLATINUM",
    sponsors: [
      {
        name: "Astronomer",
        href: "https://www.astronomer.io/",
        logoSrc: "/sponsors/astronomer.png",
      },
    ],
  },
  {
    tier: "GOLD",
    sponsors: [
      {
        name: "VeloDB",
        href: "https://www.velodb.io/",
        logoSrc: "/sponsors/velodb.png",
      },
    ],
  },
  {
    tier: "SILVER",
    sponsors: [
      {
        name: "CelerData",
        href: "https://celerdata.com/",
        logoSrc: "/sponsors/celerdata.svg",
      },
      {
        name: "Dremio",
        href: "https://www.dremio.com/",
        logoSrc: "/sponsors/dremio.png",
      },
      {
        name: "MinIO",
        href: "https://min.io/",
        logoSrc: "/sponsors/minio-color.svg",
      },
      {
        name: "Netflix",
        href: "https://www.netflix.com/",
        logoSrc: "/sponsors/netflix.svg",
      },
      {
        name: "PuppyGraph",
        href: "https://www.puppygraph.com/",
        logoSrc: "/sponsors/puppygraph.png",
      },
      {
        name: "StreamNative",
        href: "https://streamnative.io/",
        logoSrc: "/sponsors/streamnative.svg",
      },
    ],
  },
] as const;

const galleryItems = [
  {
    src: "/gallery/panel-discussion-2025.jpg",
    alt: "Panel discussion on stage - Data Engineering Open Forum 2025",
    title:
      "“The Future of Data Engineering” Panel - Data Engineering Open Forum 2025",
    body: [
      "Inna Giguere, Director of Data Engineering at Netflix",
      "Ryan Blue, Technical Staff at Databricks",
      "Jerry Wang, Data Infrastructure Senior Leader at Airbnb",
    ],
  },
  {
    src: "/gallery/apache-spark-talk-2025.jpg",
    alt: "Apache Spark 4.0 Talk - Data Engineering Open Forum 2025",
    title:
      "Presenting Apache Spark 4.0 - Data Engineering Open Forum 2025",
    body: [
      "Allison Wang, Staff Software Engineer at Databricks",
      "Jules S. Damji, Technical Staff at Databricks",
    ],
  },
  {
    src: "/gallery/apache-xtable-talk-2025.jpg",
    alt: "Apache XTable talk - Data Engineering Open Forum 2025",
    title: "Presenting Apache XTable - Data Engineering Open Forum 2025",
    body: [
      "Dipankar Mazumdar, Staff Data Engineer Advocate at Onehouse.ai",
    ],
  },
  {
    src: "/gallery/audience-qna-2025.jpg",
    alt: "Q&A Lines That Never Get Shorter - Data Engineering Open Forum 2025",
    title: "Q&A Lines That Never Get Shorter - Data Engineering Open Forum 2025",
    body: [
      "The conversations don’t stop when the slides end.",
      "During Q&A, attendees line up at the mic for a deeper dive.",
      "The only problem? We always run out of time before we run out of questions.",
    ],
  },
  {
    src: "/gallery/audience-engagements-2025.jpg",
    alt: "Active Audience Engagements - Data Engineering Open Forum 2025",
    title:
      "Active Audience Engagements - Data Engineering Open Forum 2025",
    body: [
      "A packed auditorium of data professionals actively engages with the speaker, with dozens of attendees raising their hands during a session.",
    ],
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground bg-diagonal-pattern">
      {/* Top bar with retro feel */}
      <div className="border-b border-accent/30 px-4 py-2 font-mono text-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span>{"// DATA ENGINEERING OPEN FORUM"}</span>
          <div className="flex items-center gap-4">
            <Link href="/past/2025" className="underline hover:text-accent">
              [DEOF 2025]
            </Link>
            <Link href="/past/2024" className="underline hover:text-accent">
              [DEOF 2024]
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-10 lg:gap-10 ">
          {/* Header */}
          <div className="col-span-full grid lg:grid-cols-10 grid-cols-1 border-b border-accent/30 pb-10 mb-10 gap-8">
            <div className="space-y-4 lg:col-span-6">
              <h1 className="text-balance font-mono text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl whitespace-pre-line">
                Data Engineering Open Forum
              </h1>
              <div className="font-mono font-extrabold text-xl text-accent sm:text-2xl border-flow px-3 py-2 inline-block">
                The Contemporary Jewish Museum
                <br />
                San Francisco | April 16th, 2026
              </div>
              <p className="text-pretty text-lg leading-relaxed">
                The most anticipated data engineering community conference of the year, organized by{" "}
                  <a
                    rel="noopener noreferrer"
                    href="#organized-by"
                    className="underline hover:text-accent"
                  >
                    Data Engineer Things (DET)
                  </a>
              </p>
              <div className="space-y-2 font-mono text-sm text-muted-foreground">
                <p>{"// Community-driven content with technical depth"}</p>
                <p>{"// Make connections that outlive the event"}</p>
                <p>{"// Exclusive access to career opportinities"}</p>
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
                {"> WHY_ATTEND_"}
              </div>
              <p className="text-pretty text-lg leading-relaxed">
                The Data Engineering Open Forum (DEOF) is a world-class community
                conference that practitioners and leaders actively seek out,
                not just for its content, but for the authentic experience
                it delivers.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="border-l-2 border-accent/30 pl-4 py-3 space-y-2">
                  <p className="font-semibold">Community Driven</p>
                  <p className="text-sm text-muted-foreground">
                    Our sessions, curated and approved by the{" "}
                    <a
                      href="#program-committee"
                      className="underline underline-offset-2 hover:text-accent"
                    >
                      program committee
                    </a>{" "}
                    , will be technically deep and community-driven, reflecting
                    the real challenges and innovations shaping the data
                    engineering landscape.
                  </p>
                </div>
                <div className="border-l-2 border-accent/30 pl-4 py-3 space-y-2">
                  <p className="font-semibold">Lasting Connections</p>
                  <p className="text-sm text-muted-foreground">
                    We aim to create an inclusive space where meaningful
                    conversations happen not only in sessions but everywhere,
                    empowering you to build lasting connections and collaborate
                    in ways that outlive the conference itself.
                  </p>
                </div>
                <div className="border-l-2 border-accent/30 pl-4 py-3 space-y-2">
                  <p className="font-semibold">Career Opportunities</p>
                  <p className="text-sm text-muted-foreground">
                    You will get the unique opportunity to explore job opportunities at
                    top tech companies, meet the hiring teams in person at the event,
                    and make connections that can turn into real next steps after the event.
                  </p>
                </div>
              </div>
            </div>

            {/* Agenda Section */}
            <div className="space-y-4">
              <div className="font-mono text-3xl font-semibold text-accent">
                {"> AGENDA_ "}
              </div>
              <MuseumAgendaPrototype />
            </div>
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="font-mono text-3xl font-semibold text-accent">
                {"> PHOTO_GALLERY_ "}
              </div>
              <p className="text-pretty text-sm text-muted-foreground">
                // Photos from previous Data Engineering Open Forum events.
              </p>
              <div className="max-w-2xl">
                <GalleryCarousel items={galleryItems} />
              </div>
            </div>

            <div className="space-y-2">
              {/* Organizer Information */}
              <div id="organized-by" className="space-y-2 scroll-mt-24">
                <div className="font-mono text-3xl font-semibold text-accent">
                  {"> ORGANIZED_BY_"}
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex justify-start">
                    <a
                      href="https://dataengineerthings.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <img
                        src="/logos/det_logo.jpeg"
                        alt="Data Engineer Things logo"
                        className="h-44 w-44 object-contain"
                      />
                    </a>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-mono text-xl font-bold text-accent">
                      Data Engineer Things
                    </h3>
                    <p className="text-pretty leading-relaxed text-white">
                      This event is organized by{" "}
                      <a
                        href="https://dataengineerthings.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-accent"
                      >
                        Data Engineer Things (DET)
                      </a>
                      ,{" "}
                      a global community built by data engineers for data engineers.
                      Our mission is to create an open and safe space for data professionals
                      to learn and connect.
                    </p>
                  </div>
                </div>
              </div>

              {/* Program Committee */}
              <div
                id="program-committee"
                className="space-y-4 scroll-mt-24 rounded-sm border-2 border-accent/40 p-5"
              >
                <div className="font-mono font-semibold text-accent">
                  {"// PROGRAM_COMMITTEE_ "}
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {programCommittee.map((member) => (
                    <CommitteeCard
                      key={member.name}
                      name={member.name}
                      title={member.title}
                      linkedin={member.linkedin}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sponsors Section */}
            <div className="space-y-4">
              <div className="font-mono text-3xl font-semibold text-accent">
                {"> SPONSORS_ "}
              </div>
              <p className="font-mono text-sm text-muted-foreground">
                {"// Thank you to our partners for supporting the community."}
              </p>

              <section className="mt-6 rounded-sm bg-primary/70 px-5 py-8 sm:px-8 sm:py-10">
                <div className="space-y-10">
                  {sponsorTiers.map((group) => (
                    <div key={group.tier} className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-accent/35" />
                        <p className="font-mono text-lg font-semibold text-accent">
                          {group.tier}
                        </p>
                        <div className="h-px flex-1 bg-accent/35" />
                      </div>

                      <div
                        className={
                          group.sponsors.length === 1
                            ? "grid grid-cols-1 gap-4"
                            : group.tier === "SILVER"
                            ? "grid grid-cols-2 gap-4 sm:grid-cols-3"
                            : "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
                        }
                      >
                        {group.sponsors.map((sponsor, index) => (
                          <a
                            key={`${group.tier}-${sponsor.name}-${index}`}
                            href={sponsor.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sponsor-link group mx-auto flex h-20 w-full max-w-[260px] items-center justify-center rounded-sm bg-primary/20 px-3 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            aria-label={sponsor.name}
                          >
                            <Image
                              src={sponsor.logoSrc}
                              alt={`${sponsor.name} logo`}
                              width={220}
                              height={56}
                              className={`sponsor-logo mx-auto w-auto max-w-full object-contain ${
                                sponsor.name === "Dremio"
                                  ? "h-20 sm:h-[88px]"
                                  : sponsor.name === "MinIO"
                                  ? "h-5 sm:h-[22px]"
                                  : "h-10 sm:h-11"
                              }`}
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* FAQ Section */}
            <div className="space-y-4">
              <div className="font-mono text-3xl font-semibold text-accent">
                {"> FAQ_ "}
              </div>
              <FAQSection items={faqItems} />
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <div className="font-mono text-3xl font-semibold text-accent">
                {"> CONTACT_ "}
              </div>
              <div className="rounded-sm border-2 border-accent/40 p-5">
                <p className="text-pretty leading-relaxed text-primary-foreground">
                  Join our{" "}
                  <a
                    href="https://groups.google.com/g/data-engineering-open-forum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-accent"
                  >
                    Google Group
                  </a>{" "}
                  to receive email updates on Data Engineering Open Forum, including event announcements, Call for Proposals (CFP), volunteer opportunities, and more.
                </p>
                <p className="mt-3 text-pretty leading-relaxed text-primary-foreground">
                  If you have any questions, email us at{" "}
                  <a
                    href="mailto:info@dataengineerthings.org"
                    className="underline hover:text-accent"
                  >
                    info@dataengineerthings.org
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 border-t border-accent/30 pt-8 font-mono text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div>{"// Data Engineering Open Forum"}</div>
              <div>{"// Organized by Data Engineer Things (DET)"}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
