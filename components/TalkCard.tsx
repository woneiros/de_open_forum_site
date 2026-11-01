import SessionRecording from "./SessionRecording";
import type { Talk, TalksPresentation } from "./TalksList";

interface TalkCardProps {
  talk: Talk;
  presentation?: TalksPresentation;
}

export default function TalkCard({ talk, presentation = "list" }: TalkCardProps) {
  if (presentation === "cards") {
    const videoId = talk.youtubeUrl ? new URL(talk.youtubeUrl).searchParams.get("v") : null;

    return (
      <article className="grid min-w-0 grid-cols-1 overflow-hidden rounded-md border border-accent/30 bg-primary/70 transition-colors hover:border-accent/60 md:grid-cols-[18rem_minmax(0,1fr)] lg:grid-cols-[20rem_minmax(0,1fr)]">
        {videoId && (
          <div className="flex min-w-0 items-center bg-black/20">
            <SessionRecording videoId={videoId} title={talk.title} />
          </div>
        )}

        <div className="flex min-w-0 flex-col p-4 sm:p-5">
          {talk.sessionType && (
            <p className="mb-2 self-start rounded-sm border border-accent/30 bg-accent/10 px-2 py-1 font-mono text-[11px] uppercase tracking-widest text-accent">
              {talk.sessionType}
            </p>
          )}
          <h2 className="text-lg font-semibold leading-snug sm:text-xl">
            {talk.title}
          </h2>

          <div className={`mt-3 grid gap-x-5 gap-y-2 ${talk.authors.length > 2 ? "lg:grid-cols-2" : ""}`}>
            {talk.authors.map((author) => (
              <p key={author.name} className="min-w-0 text-sm leading-relaxed">
                <span className="font-semibold text-primary-foreground">{author.name}</span>
                {" // "}
                <span className="text-primary-foreground/70">{author.title}</span>
              </p>
            ))}
          </div>

          {talk.youtubeUrl && (
            <div className="mt-auto pt-4">
              <a
                href={talk.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {"[▶ WATCH ON YOUTUBE]"}
              </a>
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <div className="border-l-2 border-accent/30 pl-6 py-4 space-y-3 hover:border-accent/60 transition-colors">
      <h2 className="text-xl font-semibold leading-tight sm:text-2xl">
        {talk.title}
      </h2>

      <div className="space-y-1">
        {talk.authors.map((author) => (
          <div
            key={author.name}
            className="font-mono text-sm text-muted-foreground"
          >
            <span className="text-primary-foreground">{author.name}</span>
            {" // "}
            <span>{author.title}</span>
          </div>
        ))}
      </div>

      {talk.youtubeUrl ? (
        <a
          href={talk.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline"
        >
          {"[▶ WATCH ON YOUTUBE]"}
        </a>
      ) : (
        <div className="font-mono text-sm text-muted-foreground/50">
          {"// Recording not available"}
        </div>
      )}
    </div>
  );
}
