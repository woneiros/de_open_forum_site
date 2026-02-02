interface CommitteeCardProps {
  name: string;
  company: string;
}

export function CommitteeCard({ name, company }: CommitteeCardProps) {
  return (
    <div className="border-l-2 border-accent/30 pl-4 py-3 space-y-1">
      <p className="font-semibold">{name}</p>
      <p className="font-mono text-sm text-muted-foreground">
        {"// "}
        {company}
      </p>
    </div>
  );
}
