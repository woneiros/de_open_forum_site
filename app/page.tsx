import Image from "next/image";
import Link from "next/link";
import { FAQSection } from "@/components/FAQSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import SpeakerCarousel from "@/components/SpeakerCarousel";
import { faqItems } from "@/data/homepage";
import SponsorCredits from "@/components/SponsorCredits";
import eventData2026 from "@/data/past/2026.json";

const speakers2026 = Array.from(
  new Map(
    eventData2026.talks.flatMap((talk) => talk.authors).map((author) => [author.name, author])
  ).values()
).sort((a, b) => a.name.localeCompare(b.name, "en"));

const galleryItems = [
  {
    src: "/gallery/keynote-panel-2026.jpg",
    alt: "Frontiers of Data keynote panel - Data Engineering Open Forum 2026",
    title:
      "“Frontiers of Data” Keynote Panel",
    eventName: "Data Engineering Open Forum 2026",
    body: [
      "Paul Ellwood, Head of Data Engineering at OpenAI",
      "Vikram Koka, Chief Strategy Officer & Apache Airflow PMC at Astronomer",
      "Laura Pruitt, Senior Director, Data Science & Engineering at Netflix",
    ],
    photoCredit: "DuHon Photography",
  },
  {
    src: "/gallery/panel-discussion-2025.jpg",
    alt: "Panel discussion on stage - Data Engineering Open Forum 2025",
    title:
      "“The Future of Data Engineering” Keynote Panel",
    eventName: "Data Engineering Open Forum 2025",
    body: [
      "Inna Giguere, Director of Data Engineering at Netflix",
      "Ryan Blue, Technical Staff at Databricks",
      "Jerry Wang, Data Infrastructure Senior Leader at Airbnb",
    ],
    photoCredit: "Luis Medina",
  },
  {
    src: "/gallery/himanshi-manglunia-2026.jpg",
    alt: "Himanshi Manglunia presenting From Manual to Magical at Data Engineering Open Forum 2026",
    title: "From Manual to Magical: Building AI Agents for ETL Automation",
    eventName: "Data Engineering Open Forum 2026",
    body: ["Himanshi Manglunia, Senior Data Engineer at Amazon Web Services"],
    photoCredit: "DuHon Photography",
    objectPosition: "50% 32%",
  },
  {
    src: "/gallery/harel-shein-2026.jpg",
    alt: "Harel Shein presenting data observability with OpenLineage at Data Engineering Open Forum 2026",
    title: "Lessons from building a data observability product with OpenLineage",
    eventName: "Data Engineering Open Forum 2026",
    body: ["Harel Shein, Senior Engineering Manager at Datadog"],
    photoCredit: "DuHon Photography",
    objectPosition: "50% 100%",
  },
  {
    src: "/gallery/apache-spark-talk-2025.jpg",
    alt: "Apache Spark 4.0 Talk - Data Engineering Open Forum 2025",
    title: "Presenting Apache Spark 4.0",
    eventName: "Data Engineering Open Forum 2025",
    body: [
      "Allison Wang, Staff Software Engineer at Databricks",
      "Jules S. Damji, Technical Staff at Databricks",
    ],
    photoCredit: "Luis Medina",
  },
  {
    src: "/gallery/onsite-recruiting-2026.jpg",
    alt: "Attendees connecting with recruiters at Data Engineering Open Forum 2026",
    title: "Top Tech Companies Recruiting Onsite: Airbnb, Netflix, and OpenAI",
    eventName: "Data Engineering Open Forum 2026",
    body: [
      "Attendees connected with hiring teams from Airbnb, Netflix, and OpenAI to explore career opportunities in data and AI.",
    ],
    photoCredit: "DuHon Photography",
    objectPosition: "50% 100%",
  },
  {
    src: "/gallery/audience-qna-2025.jpg",
    alt: "Q&A Lines That Never Get Shorter - Data Engineering Open Forum 2025",
    title:
      "Q&A Lines That Never Get Shorter",
    eventName: "Data Engineering Open Forum 2025",
    body: [
      "The conversations don’t stop when the slides end.",
      "During Q&A, attendees line up at the mic for a deeper dive.",
      "The only problem? We always run out of time before we run out of questions.",
    ],
    photoCredit: "Luis Medina",
  },
  {
    src: "/gallery/audience-engagements-2025.jpg",
    alt: "Active Audience Engagements - Data Engineering Open Forum 2025",
    title: "Active Audience Engagements",
    eventName: "Data Engineering Open Forum 2025",
    body: [
      "A packed auditorium of data professionals actively engages with the speaker, with dozens of attendees raising their hands during a session.",
    ],
    photoCredit: "Luis Medina",
  },
] as const;

const involvementOptions = [
  {
    title: "Attend",
    description:
      "Join the data and AI community for technical talks, shared ideas, and connections that last beyond the event.",
    action: "Register to attend →",
    href: "https://luma.com/deof2027",
  },
  {
    title: "Speak",
    description:
      "Share your experience and practical lessons with the data and AI community. Call for Proposals details are coming soon.",
    action: "Get CFP updates →",
    href: "https://luma.com/det-meetup-bay-area",
  },
  {
    title: "Volunteer",
    description:
      "Help shape DEOF 2027 as a Program Committee member or Community Ambassador. Volunteer opportunities are coming soon.",
    action: "Get volunteer updates →",
    href: "https://luma.com/det-meetup-bay-area",
  },
  {
    title: "Sponsor",
    description:
      "Connect your team with data and AI practitioners and leaders, recruit top talent, and support a community-driven conference.",
    action: "Sponsor DEOF 2027 →",
    href: "https://forms.gle/HpcaGq95Pf3R2iEQ9",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground bg-diagonal-pattern">
      {/* Top bar with retro feel */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-accent/30 bg-primary/95 px-4 py-2 font-mono text-xs backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-2">
          <span>{"// DATA ENGINEERING OPEN FORUM"}</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/past/2026" className="underline hover:text-accent">
              [DEOF 2026]
            </Link>
            <Link href="/past/2025" className="underline hover:text-accent">
              [DEOF 2025]
            </Link>
            <Link href="/past/2024" className="underline hover:text-accent">
              [DEOF 2024]
            </Link>
            <a
              href="https://forms.gle/HpcaGq95Pf3R2iEQ9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-accent bg-accent px-3 py-1 font-mono font-semibold text-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Sponsor
            </a>
            <a
              href="https://luma.com/deof2027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-accent bg-accent px-3 py-1 font-mono font-semibold text-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-32 sm:pb-16 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-10 lg:gap-10">
          {/* Header */}
          <div className="col-span-full grid lg:grid-cols-10 grid-cols-1 border-b border-accent/30 pb-10 mb-10 gap-8">
            <div className="space-y-4 lg:col-span-6">
              <h1 className="text-balance font-mono text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl whitespace-pre-line">
                Data Engineering Open Forum
              </h1>
              <div className="font-mono font-extrabold text-xl text-accent sm:text-2xl border-flow px-3 py-2 inline-block">
                Tuesday, April 20, 2027
                <br />
                South San Francisco Conference Center
              </div>
              <p className="text-pretty text-lg leading-relaxed">
                The most anticipated data engineering community conference of
                the year, organized by Data Engineer Things (DET)
              </p>
              <div className="space-y-2 font-mono text-sm text-muted-foreground">
                <p>{"// Community-driven content with technical depth"}</p>
                <p>{"// Make connections that outlive the event"}</p>
                <p>{"// Onsite recruiting details coming soon"}</p>
              </div>
              <a
                href="https://luma.com/deof2027"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-accent bg-accent px-5 py-3 font-mono font-semibold text-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Register Now
              </a>
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

          {/* Get Involved */}
          <section
            id="get-involved"
            aria-labelledby="get-involved-heading"
            className="col-span-full mx-1 min-w-0 space-y-4 scroll-mt-24 md:mx-8 lg:col-span-8 lg:mx-0"
          >
            <h2 id="get-involved-heading" className="break-words font-mono text-2xl font-semibold text-accent sm:text-3xl">
              {"> GET_INVOLVED_"}
            </h2>
            <p className="text-pretty text-lg leading-relaxed">
              There&apos;s a place for you at DEOF 2027. Join us as an attendee,
              volunteer, speaker, or sponsor.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {involvementOptions.map((option) => (
                <article
                  key={option.title}
                  className="flex min-w-0 flex-col rounded-md border border-accent/35 bg-primary/50 p-5 shadow-[0_0_0_1px_rgba(239,214,72,0.08)]"
                >
                  <h3 className="font-mono text-xl font-semibold text-accent">
                    {option.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-foreground/75">
                    {option.description}
                  </p>
                  <a
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center self-start font-mono text-sm font-semibold text-accent underline underline-offset-4 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {option.action}
                  </a>
                </article>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Subscribe to our{" "}
              <a
                href="https://luma.com/det-meetup-bay-area"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-accent hover:opacity-90"
              >
                community calendar
              </a>{" "}
              for email updates on CFPs, volunteer opportunities, and DEOF
              announcements.
            </p>
          </section>

          {/* Left column - Text content */}
          <div className="flex min-w-0 flex-col justify-center space-y-16 lg:col-span-8 mx-1 md:mx-8 lg:mx-0">
            {/* Why Should I Attend? */}
            <div className="space-y-6">
              <div className="break-words font-mono text-2xl font-semibold text-accent sm:text-3xl">
                {"> WHY_ATTEND_"}
              </div>
              <p className="text-pretty text-lg leading-relaxed">
                The Data Engineering Open Forum (DEOF) is a world-class
                community conference that practitioners and leaders actively
                seek out, not just for its content, but for the authentic
                experience it delivers.
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
                    Top tech companies will be recruiting onsite. Explore
                    open job roles, meet the hiring teams in person, and make
                    connections that can turn into real next steps after the
                    event.
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="break-words font-mono text-2xl font-semibold text-accent sm:text-3xl">
                {"> PAST_EVENTS_ "}
              </div>
              <p className="text-pretty text-lg leading-relaxed">
                Watch session recordings from our previous events:{" "}
                <Link href="/past/2026" className="underline hover:text-accent">
                  DEOF 2026
                </Link>,{" "}
                <Link href="/past/2025" className="underline hover:text-accent">
                  DEOF 2025
                </Link>{" "}
                and{" "}
                <Link href="/past/2024" className="underline hover:text-accent">
                  DEOF 2024
                </Link>
                .
              </p>
              <SpeakerCarousel speakers={speakers2026} />
              <section aria-labelledby="photo-gallery-heading" className="max-w-2xl space-y-4">
                <h3 id="photo-gallery-heading" className="font-mono text-xl font-semibold text-accent">
                  Photo Gallery
                </h3>
                <GalleryCarousel items={galleryItems} />
              </section>
            </div>

            {/* Sponsorship Section */}
            <div id="sponsors" className="space-y-4 scroll-mt-24">
              <div className="break-words font-mono text-2xl font-semibold text-accent sm:text-3xl">
                {"> SPONSORSHIP_"}
              </div>
              <p className="text-pretty text-lg leading-relaxed">
                Sponsorship for DEOF 2027 is now open! Connect your team with
                practitioners and leaders in the data
                and AI space, recruit top talent, and support a community-driven
                conference.
              </p>
              <a
                href="https://forms.gle/HpcaGq95Pf3R2iEQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-accent bg-accent px-4 py-2 font-mono text-sm font-semibold text-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Become a Sponsor
              </a>
              <SponsorCredits
                year="2026"
                sponsorTiers={eventData2026.sponsorTiers}
                className="scroll-mt-24"
              />
            </div>

            <div className="space-y-2">
              {/* Organizer Information */}
              <div id="organized-by" className="space-y-2 scroll-mt-24">
                <div className="break-words font-mono text-2xl font-semibold text-accent sm:text-3xl">
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
                      <Image
                        src="/logos/det_logo.jpeg"
                        alt="Data Engineer Things logo"
                        width={176}
                        height={176}
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
                      , a global community built by data engineers for data
                      engineers. Our mission is to create an open and safe space
                      for data professionals to learn and connect.
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
                <p className="text-muted-foreground">
                  The DEOF 2027 program committee is coming soon.
                </p>
                <div className="pt-2 font-mono font-semibold text-accent">
                  {"// COMMUNITY_AMBASSADORS_"}
                </div>
                <p className="text-muted-foreground">
                  DEOF 2027 community ambassadors and opportunities are coming soon.
                </p>
              </div>
            </div>

            {/* Event Production Section */}
            <div className="space-y-4">
              <div className="break-words font-mono text-2xl font-semibold text-accent sm:text-3xl">
                {"> EVENT_PARTNERS_ "}
              </div>
              <div className="grid gap-5 rounded-sm border border-border/70 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8">
                <div className="space-y-2">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    {"Event Production"}
                  </p>
                  <p className="text-pretty text-base leading-relaxed text-primary-foreground">
                    {"ImagineX Productions"}
                  </p>
                </div>
                <a
                  href="https://imaginexproductions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-sm px-2 py-2 transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="ImagineX Productions"
                >
                  <Image
                    src="/logos/ImagineX-Productions.png"
                    alt="ImagineX Productions logo"
                    width={110}
                    height={38}
                    className="h-auto w-24 object-contain sm:w-[110px]"
                  />
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-4">
              <div className="break-words font-mono text-2xl font-semibold text-accent sm:text-3xl">
                {"> FAQ_ "}
              </div>
              <FAQSection items={faqItems} />
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <div className="break-words font-mono text-2xl font-semibold text-accent sm:text-3xl">
                {"> CONTACT_ "}
              </div>
              <div className="space-y-5 rounded-sm border-2 border-accent/40 p-5">
                <div className="font-mono font-semibold text-accent">
                  {"// GET_DEOF_UPDATES_ "}
                </div>
                <p className="text-pretty leading-relaxed text-primary-foreground">
                  <a
                    href="https://luma.com/det-meetup-bay-area"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-accent hover:opacity-90"
                  >
                    Subscribe
                  </a>{" "}
                  to our community calendar for email updates about Data
                  Engineering Open Forum announcements, Call for Proposals
                  (CFP), volunteer opportunities, and upcoming DET events.
                </p>
                <div className="font-mono font-semibold text-accent">
                  {"// SPONSORSHIP_ "}
                </div>
                <p className="text-pretty leading-relaxed text-primary-foreground">
                  Interested in sponsoring DEOF? Please complete our{" "}
                  <a
                    href="https://forms.gle/HpcaGq95Pf3R2iEQ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-accent hover:opacity-90"
                  >
                    sponsorship interest form
                  </a>
                  .
                </p>
                <div className="font-mono font-semibold text-accent">
                  {"// QUESTIONS_ "}
                </div>
                <p className="mt-3 text-pretty leading-relaxed text-primary-foreground">
                  If you have any questions, please contact us by {" "}
                  <a
                    href="mailto:deof@dataengineerthings.org"
                    className="underline text-accent hover:opacity-90"
                  >
                    email
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
