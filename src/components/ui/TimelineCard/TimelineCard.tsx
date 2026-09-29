import type { TimelineEntry } from "@/types/timeline";

export interface TimelineCardProps {
  entry: TimelineEntry;
}

export function TimelineCard({ entry }: TimelineCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-card border border-neutral-text/10 border-l-2 border-l-accent-cyan/50 bg-neutral-text/5 p-6 sm:p-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-label uppercase text-accent-cyan/90">{entry.organization}</p>
          <h3 className="font-heading text-h3 font-semibold text-neutral-text">{entry.title}</h3>
        </div>
        <span className="w-fit shrink-0 rounded-full border border-neutral-text/15 px-3 py-1 text-body-sm text-neutral-text/70">
          {entry.period}
        </span>
      </div>

      {entry.technologies && entry.technologies.length > 0 && (
        <p className="text-body-sm text-neutral-text/60">
          <span className="font-semibold text-neutral-text/80">Tech Stack: </span>
          {entry.technologies.join(" · ")}
        </p>
      )}

      {entry.description && (
        <p className="text-body-lg text-neutral-text/80">{entry.description}</p>
      )}
    </div>
  );
}
