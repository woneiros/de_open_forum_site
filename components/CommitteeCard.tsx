interface CommitteeCardProps {
  name: string;
  title: string;
  linkedin: string;
}

export function CommitteeCard({ name, title, linkedin }: CommitteeCardProps) {
  return (
    <div className="border-l-2 border-accent/30 pl-4 py-3 space-y-1">
      <div className="flex items-center gap-2">
        <p className="font-semibold">{name}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-muted-foreground hover:text-accent"
          aria-label={`${name} on LinkedIn`}
          title={`${name} on LinkedIn`}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4"
            fill="currentColor"
          >
            <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.339 17.5v-7.02H5.675v7.02h2.664ZM7.007 9.417c.92 0 1.49-.61 1.49-1.371-.017-.779-.57-1.37-1.472-1.37-.903 0-1.492.591-1.492 1.37 0 .761.57 1.371 1.456 1.371h.018ZM18.5 17.5v-4.023c0-2.154-1.149-3.157-2.68-3.157-1.235 0-1.787.687-2.095 1.169v-1.01h-2.663c.035.671 0 7.02 0 7.02h2.663v-3.92c0-.21.016-.42.077-.569.168-.42.551-.856 1.194-.856.842 0 1.178.645 1.178 1.591V17.5H18.5Z" />
          </svg>
        </a>
      </div>
      <p className="font-mono text-sm text-muted-foreground">{title}</p>
    </div>
  );
}
