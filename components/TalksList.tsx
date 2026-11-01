import TalkCard from "./TalkCard";

export interface Author {
  name: string;
  title: string;
  avatarUrl?: string | null;
}

export interface Talk {
  title: string;
  authors: Author[];
  youtubeUrl: string | null;
  sessionType?: string;
}

export type TalksPresentation = "list" | "cards";

interface TalksListProps {
  talks: Talk[];
  presentation?: TalksPresentation;
}

export default function TalksList({ talks, presentation = "list" }: TalksListProps) {
  if (presentation === "cards") {
    const recordings = talks.filter(talk => talk.youtubeUrl);
    const unrecorded = talks.filter(talk => !talk.youtubeUrl);

    return (
      <div className="space-y-10">
        <div className="grid min-w-0 grid-cols-1 gap-4">
          {recordings.map(talk => (
            <TalkCard key={talk.title} talk={talk} presentation="cards" />
          ))}
        </div>

        {unrecorded.length > 0 && (
          <section
            id="sessions-without-recordings"
            aria-labelledby="unrecorded-sessions-heading"
            className="border-t border-accent/30 pt-8"
          >
            <h2 id="unrecorded-sessions-heading" className="font-mono text-xl font-semibold text-accent">
              Other Sessions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              These sessions were part of the event, but recordings are not available.
            </p>
            <ul className="mt-4 divide-y divide-accent/15">
              {unrecorded.map(talk => (
                <li key={talk.title} className="space-y-2 py-4">
                  <h3 className="text-lg font-semibold leading-snug">{talk.title}</h3>
                  {talk.authors.map(author => (
                    <p key={author.name} className="text-sm leading-relaxed text-primary-foreground/70">
                      <span className="text-primary-foreground">{author.name}</span>
                      {" // "}{author.title}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {talks.map(talk => (
        <TalkCard key={talk.title} talk={talk} />
      ))}
    </div>
  );
}
