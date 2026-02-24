"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Wrench } from "lucide-react";
import type { ToolItem } from "@/data/portfolio";

export function ToolPreviewCard({ tool, index }: { tool: ToolItem; index: number }) {
  const isProduction = tool.status.toLowerCase().includes("producción");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] bg-elevated/30 border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-[0_8px_30px_-12px_rgba(255,60,0,0.1)] transition-all duration-300"
    >
      {/* Left: Image */}
      <div className="aspect-[4/3] lg:aspect-auto relative bg-[#050505] border-b lg:border-b-0 lg:border-r border-border overflow-hidden flex items-center justify-center min-h-[280px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
        {tool.screenshot ? (
          <Image
            src={tool.screenshot}
            alt={tool.name}
            fill
            className="object-cover object-top opacity-70 group-hover:opacity-90 transition-opacity duration-500"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 p-12">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
              <Wrench size={36} className="text-primary/60 group-hover:text-primary transition-colors" />
            </div>
            <span className="text-xl font-bold text-white/8 uppercase tracking-[0.2em]">{tool.name}</span>
          </div>
        )}
      </div>

      {/* Right: Info */}
      <div className="p-8 lg:p-10 flex flex-col bg-background/50">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="px-3 py-1 text-xs font-semibold rounded-full border bg-primary/10 border-primary/20 text-primary-soft">
            {tool.license}
          </span>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${
            isProduction
              ? "bg-green-500/10 border-green-500/20 text-green-400"
              : "bg-cold/10 border-cold/20 text-cold"
          }`}>
            {tool.status}
          </span>
        </div>

        <h3 className="text-2xl lg:text-3xl font-bold mb-3">{tool.name}</h3>
        <p className="text-white/60 text-base leading-relaxed mb-6">{tool.description}</p>

        {tool.audience && (
          <div className="mb-6">
            <span className="text-[11px] font-semibold text-white/30 uppercase tracking-wider mb-2 block">¿Para quién?</span>
            <p className="text-white/50 text-sm leading-relaxed">{tool.audience}</p>
          </div>
        )}

        {tool.highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tool.highlights.map(h => (
              <span key={h} className="text-xs font-mono text-primary-soft bg-primary/10 px-2.5 py-1 rounded-sm border border-primary/20">
                {h}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {tool.tags.map(tag => (
            <span key={tag} className="text-xs font-medium text-white/40 bg-elevated border border-border px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-auto pt-6 border-t border-border">
          <a
            href={tool.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-primary-soft transition-all hover:scale-105 active:scale-95"
          >
            Probar en vivo <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
