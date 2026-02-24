"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { WebItem } from "@/data/portfolio";

interface WebCardProps {
  item: WebItem;
  index: number;
  onClick: () => void;
}

export function WebCard({ item, index, onClick }: WebCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      onClick={onClick}
      className="group cursor-pointer bg-elevated/30 border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_rgba(255,60,0,0.15)] transition-all duration-300"
    >
      {/* Browser frame screenshot */}
      <div className="relative">
        <div className="h-7 bg-black border-b border-border flex items-center px-3 gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
          <div className="mx-auto text-[9px] text-white/20 font-mono">
            {item.url?.replace("https://", "")}
          </div>
        </div>
        <div className="aspect-[16/10] relative bg-zinc-900">
          <Image
            src={item.screenshot}
            alt={item.name}
            fill
            className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <ExternalLink size={14} /> Ver preview
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 bg-background/50">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-lg">{item.name}</h3>
          <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-elevated border border-border text-white/40 shrink-0">
            {item.niche}
          </span>
        </div>
        <p className="text-white/50 text-sm line-clamp-2">{item.description}</p>
      </div>
    </motion.div>
  );
}
