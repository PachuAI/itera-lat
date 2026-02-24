"use client";

import { useState, useMemo } from "react";
import { websites } from "@/data/portfolio";
import type { WebItem } from "@/data/portfolio";
import { WebCard } from "./WebCard";
import { ScreenshotViewer } from "./ScreenshotViewer";

export function WebCatalog() {
  const [activeNiche, setActiveNiche] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<WebItem | null>(null);

  const niches = useMemo(
    () => Array.from(new Set(websites.map((w) => w.niche))),
    []
  );

  const filtered = activeNiche
    ? websites.filter((w) => w.niche === activeNiche)
    : websites;

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveNiche(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
            activeNiche === null
              ? "bg-primary/10 border-primary/30 text-primary-soft"
              : "bg-elevated border-border text-white/50 hover:text-white hover:border-white/20"
          }`}
        >
          Todos
        </button>
        {niches.map((niche) => (
          <button
            key={niche}
            onClick={() => setActiveNiche(niche)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              activeNiche === niche
                ? "bg-primary/10 border-primary/30 text-primary-soft"
                : "bg-elevated border-border text-white/50 hover:text-white hover:border-white/20"
            }`}
          >
            {niche}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, index) => (
          <WebCard
            key={item.id}
            item={item}
            index={index}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <ScreenshotViewer
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}
