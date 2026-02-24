"use client";

import { tools } from "@/data/portfolio";
import { ToolPreviewCard } from "./ToolPreviewCard";

export function ToolsList() {
  return (
    <div className="space-y-8">
      {tools.map((tool, index) => (
        <ToolPreviewCard key={tool.id} tool={tool} index={index} />
      ))}
    </div>
  );
}
