import type { Metadata } from "next";
import { WebCatalog } from "@/components/webs/WebCatalog";

export const metadata: Metadata = {
  title: "Sitios Web | ÍTERA",
  description: "Diseñamos sitios web institucionales, corporativos y tiendas online. Cada sitio es software optimizado para velocidad, SEO y conversión.",
};

export default function WebsPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Sitios Web</h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Diseñamos sitios web institucionales, corporativos y tiendas online para negocios de todos los rubros. Cada sitio es una pieza de software optimizada para velocidad, SEO y conversión.
          </p>
        </div>
        <WebCatalog />
      </div>
    </section>
  );
}
