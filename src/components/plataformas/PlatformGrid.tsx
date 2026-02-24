"use client";

import { platforms } from "@/data/portfolio";
import { PlatformCard } from "./PlatformCard";

export function PlatformGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {platforms.map((platform, index) => (
        <PlatformCard key={platform.id} platform={platform} index={index} />
      ))}
    </div>
  );
}
