import { Terminal, Server, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-muted border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight sticky top-32">
              Tecnología real, <br />
              <span className="text-white/40">sin burocracia.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-7 space-y-12">
            <div className="prose prose-invert prose-lg">
              <p className="text-2xl text-white/80 leading-relaxed font-medium mb-8">
                ÍTERA es un estudio con base en el Alto Valle, diseñado para ser el socio tecnológico que los negocios de hoy necesitan.
              </p>
              
              <div className="h-px w-full bg-border my-12" />

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Nuestra Filosofía</h3>
                  <p className="text-white/60 leading-relaxed text-lg mb-6">
                    La mayoría de las agencias te venden humo, reuniones interminables y sitios web hechos en WordPress que tardan 10 segundos en cargar. Nosotros escribimos código. Construimos infraestructura sólida, rápida y pensada para convertir.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Construimos lo que usamos</h3>
                  <p className="text-white/60 leading-relaxed text-lg mb-6">
                    No solo desarrollamos para clientes. Creamos nuestras propias herramientas internas (itera.tools), plataformas SaaS y utilidades públicas. Usamos las mismas herramientas que las startups más valiosas del mundo.
                  </p>
                  
                  <ul className="space-y-6 mt-8">
                    <li className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-elevated border border-border flex items-center justify-center shrink-0">
                        <Server size={18} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Infraestructura Propia</h4>
                        <p className="text-sm text-white/60">Servidores bare-metal y edge network optimizados, sin depender de nubes costosas.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-elevated border border-border flex items-center justify-center shrink-0">
                        <Sparkles size={18} className="text-primary-soft" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Agentic Coding</h4>
                        <p className="text-sm text-white/60">Desarrollo acelerado con IA para entregar código de calidad de forma ultra-rápida.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-8 bg-elevated/50 border border-border rounded-sm">
                  <h4 className="text-primary font-bold mb-2">Focus 2026</h4>
                  <p className="text-white/80">
                    Democratizar el acceso a tecnología premium. Sitios profesionales estáticos con modelo de suscripción (cambios autogestionados) y desarrollo de productos web escalables para nichos específicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
