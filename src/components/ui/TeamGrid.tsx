"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { regions, teamMembers, type Region } from "@/lib/who-we-are-data";

const regionStyles: Record<Region, { dot: string; badge: string }> = {
  UK: { dot: "bg-brand-600", badge: "bg-brand-50 text-brand-700" },
  Asia: { dot: "bg-blue-500", badge: "bg-blue-50 text-blue-700" },
  "South Africa": { dot: "bg-emerald-500", badge: "bg-emerald-50 text-emerald-700" },
};

export function TeamGrid() {
  const [active, setActive] = useState<Region | null>(null);
  const visible = active ? teamMembers.filter((m) => m.region === active) : teamMembers;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {regions.map((region) => {
          const isActive = active === region;
          return (
            <button
              key={region}
              type="button"
              onClick={() => setActive(isActive ? null : region)}
              className={cn(
                "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                isActive
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-black/10 bg-white text-ink/70 hover:border-brand-700/40"
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  isActive ? "bg-white" : regionStyles[region].dot
                )}
              />
              {region}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {visible.map((member) => (
          <Card key={member.name} className="p-5">
            <div className="flex items-center gap-3">
              <Avatar initials={member.initials} shape="square" size="sm" />
              <div>
                <p className="text-sm font-semibold text-ink">{member.name}</p>
                <p className="text-xs text-muted">{member.role}</p>
              </div>
            </div>
            <span
              className={cn(
                "mt-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                regionStyles[member.region].badge
              )}
            >
              {member.region}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}
