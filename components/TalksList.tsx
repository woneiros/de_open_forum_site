import Link from "next/link";

interface Author {
  name: string;
  title: string;
}

interface Talk {
  title: string;
  authors: Author[];
  youtubeUrl: string | null;
}

interface TalksListProps {
  talks: Talk[];
  year: string;
}

export default function TalksList({ talks, year }: TalksListProps) {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground bg-diagonal-pattern">
      {/* Top bar with retro feel */}
      <div className="border-b border-accent/30 px-4 py-2 font-mono text-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="hover:text-accent">
            {"← BACK TO HOME"}
          </Link>
          <span>{"[SAN FRANCISCO, CA]"}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <div className="font-mono text-sm text-accent">
            {`> TALKS_${year}_ `}
          </div>
          <h1 className="text-balance font-mono text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            DATA ENGINEERING
            <br />
            OPEN FORUM {year}
          </h1>
          <div className="font-mono text-lg text-muted-foreground">
            {`// ${talks.length} talks from our ${year} edition`}
          </div>
        </div>

        {/* Talks list */}
        <div className="space-y-8">
          {talks.map((talk, index) => (
            <div
              key={index}
              className="border-l-2 border-accent/30 pl-6 py-4 space-y-3 hover:border-accent/60 transition-colors"
            >
              {/* Talk title */}
              <h2 className="text-xl font-semibold leading-tight sm:text-2xl">
                {talk.title}
              </h2>

              {/* Authors */}
              <div className="space-y-1">
                {talk.authors.map((author, authorIndex) => (
                  <div
                    key={authorIndex}
                    className="font-mono text-sm text-muted-foreground"
                  >
                    <span className="text-primary-foreground">
                      {author.name}
                    </span>
                    {" // "}
                    <span>{author.title}</span>
                  </div>
                ))}
              </div>

              {/* YouTube link */}
              {talk.youtubeUrl ? (
                <div>
                  <a
                    href={talk.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline"
                  >
                    {"[▶ WATCH ON YOUTUBE]"}
                  </a>
                </div>
              ) : (
                <div className="font-mono text-sm text-muted-foreground/50">
                  {"// Recording not available"}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 border-t border-accent/30 pt-8 font-mono text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>{"// Data Engineering Open Forum"}</div>
            <div className="flex gap-6">
              <span>{"[OPEN]"}</span>
              <span>{"[TECHNICAL]"}</span>
              <span>{"[COMMUNITY]"}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
