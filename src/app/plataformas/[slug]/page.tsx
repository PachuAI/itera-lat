import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Server, MessageSquare } from "lucide-react";
import { platforms } from "@/data/portfolio";

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const platform = platforms.find((p) => p.id === slug);
  if (!platform) return { title: "No encontrado | ÍTERA" };
  return {
    title: `${platform.productName} | ÍTERA`,
    description: platform.tagline,
  };
}

export default async function PlatformDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = platforms.find((p) => p.id === slug);
  if (!platform) notFound();

  const isProduction = platform.status.toLowerCase().includes("producción");

  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Back link */}
        <Link
          href="/plataformas"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Volver a Plataformas
        </Link>

        {/* Hero */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-3 py-1.5 text-xs font-semibold rounded-full border ${
              isProduction
                ? "bg-green-500/10 border-green-500/20 text-green-400"
                : "bg-cold/10 border-cold/20 text-cold"
            }`}>
              {platform.status}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{platform.productName}</h1>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed">{platform.tagline}</p>
        </div>

        {/* Screenshot hero */}
        {platform.screenshot && (
          <div className="aspect-[16/9] relative bg-[#050505] border border-border rounded-xl overflow-hidden mb-16">
            <Image
              src={platform.screenshot}
              alt={platform.productName}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        )}

        {!platform.screenshot && (
          <div className="aspect-[16/9] max-h-[400px] relative bg-[#050505] border border-border rounded-xl overflow-hidden mb-16 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
            <div className="flex flex-col items-center gap-4">
              <Server size={48} className="text-white/10" />
              <span className="text-4xl font-bold text-white/10 uppercase tracking-widest">{platform.productName}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Sobre el producto</h2>
              <p className="text-white/60 text-lg leading-relaxed">{platform.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Funcionalidades</h2>
              <ul className="space-y-4">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-white/70 text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional screenshots */}
            {platform.screenshots && platform.screenshots.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Capturas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {platform.screenshots.map((src, i) => (
                    <div key={i} className="aspect-[16/9] relative bg-[#050505] border border-border rounded-lg overflow-hidden">
                      <Image src={src} alt={`${platform.productName} screenshot ${i + 1}`} fill className="object-cover object-top" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Stack */}
            <div className="p-6 bg-elevated/30 border border-border rounded-xl">
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">Stack técnico</h3>
              <div className="flex flex-wrap gap-2">
                {platform.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-white/60 bg-elevated border border-border px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Adopters */}
            {platform.adopters.length > 0 && (
              <div className="p-6 bg-elevated/30 border border-border rounded-xl">
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">¿Quién ya lo usa?</h3>
                <ul className="space-y-3">
                  {platform.adopters.map((adopter) => (
                    <li key={adopter.name} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary/60" />
                      {adopter.url ? (
                        <a href={adopter.url} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors text-sm">
                          {adopter.name}
                        </a>
                      ) : (
                        <span className="text-white/70 text-sm">{adopter.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <h3 className="font-bold mb-2">¿Necesitás algo similar?</h3>
              <p className="text-white/50 text-sm mb-4">
                Podemos adaptar esta plataforma a tu negocio o construir algo completamente nuevo.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-primary-soft transition-all hover:scale-105 active:scale-95 w-full justify-center"
              >
                <MessageSquare size={16} /> Hablemos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
