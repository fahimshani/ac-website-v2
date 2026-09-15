import { Avatar } from "@/components/ui/Avatar";

export function LeadershipCard({
  initials,
  name,
  role,
  bio,
}: {
  initials: string;
  name: string;
  role: string;
  bio: string;
}) {
  return (
    <div className="flex h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="flex w-2/5 shrink-0 items-end bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-4">
        <Avatar initials={initials} size="lg" tone="onDark" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="font-bold text-ink">{name}</h3>
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
          {role}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{bio}</p>
      </div>
    </div>
  );
}
