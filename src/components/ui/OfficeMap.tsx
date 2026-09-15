import { MapPin } from "lucide-react";

interface Office {
  flag: string;
  badge: string;
  name: string;
  addressLines: string[];
  top: string;
  left: string;
  pinTop: string;
  pinLeft: string;
}

export function OfficeMap({ offices }: { offices: Office[] }) {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-slate-100 sm:min-h-[480px]">
      {offices.map((office) => (
        <div key={office.name}>
          <span
            className="absolute flex h-3 w-3 -translate-x-1/2 items-center justify-center text-brand-700"
            style={{ top: office.pinTop, left: office.pinLeft }}
          >
            <MapPin className="h-5 w-5 fill-brand-700 text-brand-700" strokeWidth={1.5} />
          </span>

          <div
            className="absolute w-64 rounded-xl border border-black/5 bg-white p-4 shadow-md"
            style={{ top: office.top, left: office.left }}
          >
            <div className="flex items-center gap-2">
              <span>{office.flag}</span>
              <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                {office.badge}
              </span>
            </div>
            <p className="mt-2 text-sm font-bold text-ink">{office.name}</p>
            {office.addressLines.map((line) => (
              <p key={line} className="text-xs text-muted">
                {line}
              </p>
            ))}
            <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-brand-700">
              <MapPin className="h-3 w-3" />
              Office location
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
