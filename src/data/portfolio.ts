export type PortfolioType = "website" | "platform";

export interface PortfolioItem {
  id: string; // Used as slug
  type: PortfolioType;
  name: string;
  niche?: string;
  location?: string;
  description: string;
  url?: string;
  screenshot: string; // For websites
  screenshotMobile?: string;
  tags: string[];
  metrics?: string[];
  client?: string;
  status?: string;
  featured?: boolean;
}

export const portfolioData: PortfolioItem[] = [
  // --- PLATAFORMAS ---
  {
    id: "alquimica-hub",
    type: "platform",
    name: "Alquímica Hub",
    description: "Linktree B2B con panel admin, lista de precios escalonada, analytics propio y capacidad white-label.",
    screenshot: "", // Placeholder
    tags: ["Next.js", "React", "PostgreSQL", "Prisma"],
    metrics: ["+500 visitas/mes", "Panel autoadministrable"],
    status: "En producción",
    client: "Química Alquímica S.R.L."
  },
  {
    id: "alquimica-studio",
    type: "platform",
    name: "Alquímica Studio",
    description: "Generador de fotoproductos con Gemini AI. Tres modos de generación, galería avanzada y almacenamiento cloud.",
    screenshot: "", // Placeholder
    tags: ["Next.js", "Gemini AI", "Cloudflare R2"],
    metrics: ["IA integrada", "3 modos de generación"],
    status: "En producción",
    client: "Química Alquímica S.R.L."
  },
  {
    id: "bambu-crm",
    type: "platform",
    name: "Bambú CRM",
    description: "CRM a medida para fábrica de artículos de limpieza. Gestión de clientes, pedidos, seguimiento y reportes.",
    screenshot: "", // Placeholder
    tags: ["Laravel", "Inertia.js", "React", "PostgreSQL"],
    metrics: ["+2,500 clientes", "En producción"],
    status: "En producción",
    client: "Química Bambú"
  },
  {
    id: "abundancia-hogar",
    type: "platform",
    name: "Abundancia Hogar",
    description: "Catálogo online autoadministrable con checkout a WhatsApp. Panel admin completo con productos, categorías, galería y leads.",
    screenshot: "", // Placeholder
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    metrics: ["Producto escalable", "Multi-nicho"],
    status: "Pre-lanzamiento",
    client: "Validación con cliente real"
  },
  {
    id: "presskit-ar",
    type: "platform",
    name: "Presskit.AR",
    description: "SaaS freemium multi-tenant para que músicos y DJs argentinos armen su press kit digital profesional.",
    screenshot: "", // Placeholder
    tags: ["Next.js", "Multi-tenant", "SaaS"],
    metrics: ["Freemium", "Multi-tenant"],
    status: "Pre-lanzamiento",
    client: "Producto propio"
  },
  {
    id: "iteratube",
    type: "platform",
    name: "IteraTube",
    description: "Suite de repurposing: analiza videos de YouTube y genera hilos, posts y contenido para redes sociales con IA.",
    screenshot: "", // Placeholder
    tags: ["Next.js", "Gemini Vision", "AI"],
    metrics: ["966 tests", "Multi-formato"],
    status: "Producción",
    client: "Producto propio"
  },

  // --- SITIOS WEB ---
  {
    id: "cerro-solar",
    type: "website",
    name: "Cerro Solar",
    niche: "Turismo & Hospitalidad",
    location: "Patagonia, Argentina",
    description: "Sitio web inmersivo para un complejo de domos ecológicos. Motor de reservas propio, integración de pagos y portal de autogestión.",
    url: "https://demo.itera.lat/cerrosolar",
    screenshot: "/images/portfolio/screenshot-cerro-solar.png",
    screenshotMobile: "/images/portfolio/screenshot-cerro-solar.png",
    tags: ["turismo", "reservas", "glamping"],
    featured: true,
  },
  {
    id: "cota-estudio",
    type: "website",
    name: "Cota Estudio",
    niche: "Creativos & Tech",
    location: "Córdoba, Argentina",
    description: "Portfolio de arquitectura minimalista y de alta performance. Carga ultra-rápida de imágenes mediante optimización server-side.",
    url: "https://demo.itera.lat/cotaestudio",
    screenshot: "/images/portfolio/screenshot-cota-estudio.png",
    screenshotMobile: "/images/portfolio/screenshot-cota-estudio.png",
    tags: ["portfolio", "arquitectura", "minimal"],
    featured: true,
  },
  {
    id: "surco-cafe",
    type: "website",
    name: "Surco Café",
    niche: "Gastronomía",
    location: "Neuquén, Argentina",
    description: "Identidad digital para cafetería de especialidad. E-commerce integrado para venta de granos y take-away autogestionado.",
    url: "https://demo.itera.lat/surcocafe",
    screenshot: "/images/portfolio/screenshot-surco-cafe.jpg",
    screenshotMobile: "/images/portfolio/screenshot-surco-cafe.jpg",
    tags: ["gastronomía", "café", "e-commerce"],
    featured: false,
  },
  {
    id: "brasa-burgers",
    type: "website",
    name: "Brasa Burgers",
    niche: "Gastronomía",
    location: "Buenos Aires, Argentina",
    description: "Plataforma de delivery optimizada para móviles. Integración directa a WhatsApp con gestión de inventario automatizada.",
    url: "https://demo.itera.lat/brasaburgers",
    screenshot: "/images/portfolio/screenshot-brasa-burgers.jpg",
    screenshotMobile: "/images/portfolio/screenshot-brasa-burgers.jpg",
    tags: ["gastronomía", "delivery", "whatsapp"],
    featured: true,
  },
  {
    id: "filo-barberia",
    type: "website",
    name: "Filo Barbería",
    niche: "Servicios Profesionales",
    location: "Rosario, Argentina",
    description: "Sitio institucional enfocado en reservas online ágiles. Panel de control para que cada barbero gestione su propia agenda.",
    url: "https://demo.itera.lat/filobarberia",
    screenshot: "/images/portfolio/screenshot-filo-barberia.jpg",
    screenshotMobile: "/images/portfolio/screenshot-filo-barberia.jpg",
    tags: ["barbería", "turnos", "institucional"],
    featured: false,
  }
];
