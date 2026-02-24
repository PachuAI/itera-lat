"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Server } from "lucide-react";
import type { PlatformItem } from "@/data/portfolio";

export function PlatformCard({ platform, index }: { platform: PlatformItem; index: number }) {
  const isProduction = platform.status.toLowerCase().includes("producción");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group flex flex-col bg-elevated/30 border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_rgba(255,60,0,0.15)] transition-all duration-300 relative"
    >
      {/* Image Area */}
      <div className="aspect-[16/9] relative bg-[#050505] border-b border-border overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
        {platform.screenshot ? (
          <Image
            src={platform.screenshot}
            alt={platform.productName}
            fill
            className="object-cover object-top opacity-60 group-hover:opacity-90 transition-opacity duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-3">
            <Server size={32} className="text-white/10" />
            <span className="text-3xl font-bold text-white/10 uppercase tracking-widest">{platform.productName}</span>
          </div>
        )}
        <div className="absolute top-4 right-4 z-20">
          <span className={`px-3 py-1.5 text-xs font-semibold rounded-full border backdrop-blur-md ${
            isProduction
              ? "bg-green-500/10 border-green-500/20 text-green-400"
              : "bg-cold/10 border-cold/20 text-cold"
          }`}>
            {platform.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 relative z-20 flex flex-col flex-grow bg-background/50">
        <h3 className="text-2xl font-bold mb-1">{platform.productName}</h3>
        <p className="text-sm text-white/40 mb-4">{platform.tagline}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {platform.tags.map(tag => (
            <span key={tag} className="text-xs font-medium text-white/40 bg-elevated border border-border px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {platform.adopters.length > 0 && (
          <p className="text-xs text-white/30 mb-6">
            Usado por: {platform.adopters.map(a => a.name).join(", ")}
          </p>
        )}

        <div className="flex items-center justify-end mt-auto pt-6 border-t border-border">
          <Link
            href={`/plataformas/${platform.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
          >
            Ver producto <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
