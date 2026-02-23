"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight, LayoutTemplate, Server } from "lucide-react";
import { portfolioData, PortfolioItem } from "@/data/portfolio";

type TabType = "websites" | "platforms";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabType>("websites");

  const tabs = [
    { id: "websites", label: "Sitios Web", icon: <LayoutTemplate size={16} /> },
    { id: "platforms", label: "Plataformas", icon: <Server size={16} /> },
  ] as const;

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background border-t border-border overflow-hidden min-h-[800px] flex flex-col relative">
      {/* Dark gradient for separation without earthiness */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-shrink-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Experiencias Digitales</h2>
            {/* The paragraph context is now handled inside each tab for smooth transitioning */}
          </div>
          
          <div className="flex bg-elevated border border-border rounded-sm p-1.5 self-start md:self-end">
             {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-semibold transition-all relative ${
                    activeTab === tab.id ? "text-white" : "text-white/40 hover:text-white/80 hover:scale-105 active:scale-95"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-background border border-border shadow-sm rounded-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                     {tab.icon} {tab.label}
                  </span>
                </button>
             ))}
          </div>
        </div>
      </div>

      <motion.div layout className="w-full relative flex-grow flex flex-col">
        <AnimatePresence mode="wait" initial={false}>
          {activeTab === "websites" && (
             <motion.div 
               key="websites"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.4 }}
               className="w-full flex-grow flex flex-col"
             >
               <div className="container mx-auto px-6 md:px-12 relative z-20 mb-12">
                 <p className="text-xl text-white/60 leading-relaxed max-w-3xl">
                   Diseñamos sitios web institucionales, corporativos y tiendas online para negocios de todos los rubros. Cada sitio es una pieza de software optimizada para velocidad, SEO y conversión — no una plantilla genérica. Estos son algunos de nuestros trabajos.
                 </p>
               </div>
               <WebsitesGallery data={portfolioData.filter(p => p.type === "website")} />
             </motion.div>
          )}

          {activeTab === "platforms" && (
             <motion.div 
               key="platforms"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.4 }}
               className="container mx-auto px-6 md:px-12 w-full flex-grow flex flex-col"
             >
               <div className="relative z-20 mb-12">
                 <p className="text-xl text-white/60 leading-relaxed max-w-3xl">
                   Algunos clientes necesitan más que una web: necesitan un sistema que soporte sus operaciones diarias. CRMs a medida, paneles de administración, catálogos autogestionables, herramientas con inteligencia artificial. Estas son las plataformas que construimos para clientes reales.
                 </p>
               </div>
               <PlatformsGrid data={portfolioData.filter(p => p.type === "platform")} />
             </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function PlatformsGrid({ data }: { data: PortfolioItem[] }) {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
         {data.map((project, index) => {
            const isProduction = project.status?.toLowerCase().includes("producción");
            
            return (
               <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group flex flex-col bg-elevated/30 border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_rgba(255,60,0,0.15)] transition-all duration-300 relative"
               >
                  {/* Image Area / Placeholder */}
                  <div className="aspect-[16/9] relative bg-[#050505] border-b border-border overflow-hidden flex items-center justify-center">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
                     
                     {project.screenshot ? (
                        <Image
                           src={project.screenshot}
                           alt={project.name}
                           fill
                           className="object-cover object-top opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                        />
                     ) : (
                        <span className="text-3xl font-bold text-white/10 relative z-10 uppercase tracking-widest">{project.name}</span>
                     )}

                     {project.status && (
                        <div className="absolute top-4 right-4 z-20">
                           <span className={`px-3 py-1.5 text-xs font-semibold rounded-full border backdrop-blur-md ${
                              isProduction 
                              ? "bg-green-500/10 border-green-500/20 text-green-400" 
                              : "bg-cold/10 border-cold/20 text-cold"
                           }`}>
                              {project.status}
                           </span>
                        </div>
                     )}
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-8 relative z-20 flex flex-col flex-grow bg-background/50">
                     <div className="mb-4">
                        <h3 className="text-2xl font-bold">{project.name}</h3>
                     </div>
                     
                     <p className="text-white/60 text-base mb-8 flex-grow leading-relaxed">
                        {project.description}
                     </p>
                     
                     {/* Metrics & Tags */}
                     <div className="space-y-4 mb-8">
                        {project.metrics && project.metrics.length > 0 && (
                           <div className="flex flex-wrap gap-2">
                              {project.metrics.map(metric => (
                                 <span key={metric} className="text-xs font-mono text-primary-soft bg-primary/10 px-2.5 py-1 rounded-sm border border-primary/20">
                                    {metric}
                                 </span>
                              ))}
                           </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                           {project.tags.map(tag => (
                              <span key={tag} className="text-xs font-medium text-white/40 bg-elevated border border-border px-3 py-1 rounded-full">
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>
                     
                     {/* Footer Links */}
                     <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                        <span className="text-sm font-medium text-white/40">
                           {project.client}
                        </span>
                        <Link 
                           href={`/portfolio/${project.id}`}
                           className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors group-hover:translate-x-1"
                        >
                           Ver caso de estudio <ArrowRight size={16} />
                        </Link>
                     </div>
                  </div>
               </motion.div>
            );
         })}
      </div>
   );
}

// === EXISTING 3D GALLERY REUSED FOR 'WEBSITES' TAB ===

function WebsitesGallery({ data }: { data: PortfolioItem[] }) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [isMobile, setIsMobile] = useState(false);
 
   useEffect(() => {
     const checkMobile = () => setIsMobile(window.innerWidth < 768);
     checkMobile();
     window.addEventListener("resize", checkMobile);
     return () => window.removeEventListener("resize", checkMobile);
   }, []);
 
   const handleNext = () => setCurrentIndex((prev) => (prev + 1) % data.length);
   const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
 
   const currentProject = data[currentIndex];
   if (!currentProject) return null;

   return (
      <div className="flex flex-col flex-grow items-center w-full">
         <div className="container mx-auto px-6 md:px-12 flex justify-end mb-8 relative z-20">
            <div className="flex gap-4">
               <button 
                 onClick={handlePrev}
                 className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center hover:bg-elevated hover:text-primary transition-all active:scale-95"
               >
                 <ChevronLeft size={24} />
               </button>
               <button 
                 onClick={handleNext}
                 className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center hover:bg-elevated hover:text-primary transition-all active:scale-95"
               >
                 <ChevronRight size={24} />
               </button>
            </div>
         </div>

         <div className="w-full flex-grow flex flex-col relative overflow-hidden">
            {isMobile ? (
               <div className="container mx-auto px-6 relative z-10 pb-12 flex-grow">
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-elevated border border-border">
                     <div className="absolute top-0 w-full h-10 bg-black flex justify-center items-center z-20">
                        <div className="w-16 h-4 bg-background rounded-full" />
                     </div>
                     <div className="w-full h-full pt-10 flex items-center justify-center bg-zinc-900 relative">
                        <Image 
                           src={currentProject.screenshotMobile || currentProject.screenshot || ""} 
                           alt={`Screenshot of ${currentProject.name}`}
                           fill
                           className="object-cover object-top pt-10"
                           priority
                        />
                     </div>
                  </div>
               </div>
            ) : (
               <div className="relative h-[550px] w-full flex items-center justify-center perspective-[2000px] transform-style-3d z-10 flex-shrink-0">
                  <div className="absolute bottom-0 w-[80%] h-32 bg-gradient-to-t from-primary/10 to-transparent blur-2xl rounded-full" />
                  
                  {data.map((project, index) => {
                     const offset = index - currentIndex;
                     const isActive = offset === 0;
                     
                     let zIndex = 10;
                     let scale = 1;
                     let x: number | string = 0;
                     let z = 0;
                     let rotateY = 0;
                     let opacity = 1;
             
                     if (isActive) {
                       zIndex = 20;
                       scale = 1;
                       x = 0;
                       z = 0;
                       rotateY = 0;
                       opacity = 1;
                     } else if (offset === 1 || (offset === -(data.length - 1))) {
                       zIndex = 10;
                       scale = 0.85;
                       x = "45%";
                       z = -200;
                       rotateY = -25;
                       opacity = 0.5;
                     } else if (offset === -1 || (offset === data.length - 1)) {
                       zIndex = 10;
                       scale = 0.85;
                       x = "-45%";
                       z = -200;
                       rotateY = 25;
                       opacity = 0.5;
                     } else {
                       zIndex = 0;
                       scale = 0.7;
                       x = offset > 0 ? "80%" : "-80%";
                       z = -400;
                       rotateY = offset > 0 ? -40 : 40;
                       opacity = 0;
                     }
             
                     return (
                       <motion.div
                         key={project.id}
                         initial={false}
                         animate={{ scale, x, z, rotateY, opacity, zIndex }}
                         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] aspect-video bg-elevated rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-border/50 cursor-pointer"
                         onClick={() => {
                           if (offset === 1 || (offset === -(data.length - 1))) handleNext();
                           if (offset === -1 || (offset === data.length - 1)) handlePrev();
                         }}
                       >
                         <div className="absolute top-0 w-full h-8 bg-black border-b border-border flex items-center px-4 gap-2 z-20">
                           <div className="w-3 h-3 rounded-full bg-red-500/20" />
                           <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                           <div className="w-3 h-3 rounded-full bg-green-500/20" />
                           <div className="mx-auto text-[10px] text-white/30 font-mono hidden sm:block">
                             {project.url?.replace("https://", "")}
                           </div>
                         </div>
                         
                         <div className="w-full h-full pt-8 bg-zinc-900 flex items-center justify-center relative">
                            {project.screenshot && (
                               <Image 
                                 src={project.screenshot} 
                                 alt={`Screenshot of ${project.name}`}
                                 fill
                                 className="object-cover object-top opacity-90 pt-8"
                                 priority={isActive}
                               />
                            )}
                            <div className="absolute inset-0 flex items-center justify-center text-white/5 font-bold text-4xl -z-10">
                               {project.name}
                            </div>
                         </div>
                         
                         {!isActive && <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors z-30" />}
                       </motion.div>
                     );
                  })}
               </div>
            )}

            <div className="mt-8 mb-12 max-w-2xl mx-auto text-center relative z-20 px-6">
               <motion.div
                 key={currentIndex}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.3 }}
               >
                 <div className="inline-flex px-3 py-1 rounded-full bg-elevated border border-border text-primary-soft text-sm font-medium mb-4">
                   {currentProject.niche}
                 </div>
                 <h3 className="text-3xl font-bold mb-4">{currentProject.name}</h3>
                 <p className="text-white/60 mb-8 max-w-lg mx-auto">{currentProject.description}</p>
                 {currentProject.url && (
                    <a 
                      href={currentProject.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-sm font-medium hover:bg-primary-soft transition-all hover:scale-105 active:scale-95"
                    >
                      Ver sitio en vivo <ExternalLink size={18} />
                    </a>
                 )}
               </motion.div>
            </div>
         </div>
      </div>
   );
}
