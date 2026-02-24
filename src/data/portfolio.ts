// --- TIPOS DISCRIMINADOS ---

export interface WebItem {
  id: string;
  type: "website";
  name: string;
  niche: string;
  location?: string;
  description: string;
  url?: string;
  screenshot: string;
  screenshotMobile: string;
  tags: string[];
  featured?: boolean;
}

export interface PlatformItem {
  id: string;
  type: "platform";
  productName: string;
  tagline: string;
  description: string;
  features: string[];
  tags: string[];
  status: string;
  screenshot: string;
  screenshots?: string[];
  adopters: { name: string; url?: string }[];
  caseStudySlug?: string;
}

export interface ToolItem {
  id: string;
  type: "tool";
  name: string;
  description: string;
  screenshot: string;
  tags: string[];
  license: string;
  audience: string;
  highlights: string[];
  status: string;
  externalUrl: string;
}

export type PortfolioItem = WebItem | PlatformItem | ToolItem;

// --- DATOS ---

export const websites: WebItem[] = [
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
  },
];

export const platforms: PlatformItem[] = [
  {
    id: "hublink",
    type: "platform",
    productName: "HubLink",
    tagline: "Hub de enlaces B2B con panel admin y analytics",
    description: "Linktree B2B con panel admin, lista de precios escalonada, analytics propio y capacidad white-label. Diseñado para empresas que necesitan centralizar su presencia digital con métricas reales.",
    features: [
      "Panel de administración completo",
      "Lista de precios escalonada",
      "Analytics propio integrado",
      "Capacidad white-label",
      "Gestión multi-enlace",
    ],
    tags: ["Next.js", "React", "PostgreSQL", "Prisma"],
    status: "En producción",
    screenshot: "",
    adopters: [{ name: "Química Alquímica S.R.L." }],
  },
  {
    id: "studioai",
    type: "platform",
    productName: "StudioAI",
    tagline: "Generador de fotoproductos con inteligencia artificial",
    description: "Generador de fotoproductos con Gemini AI. Tres modos de generación, galería avanzada y almacenamiento cloud. Transforma fotos de productos comunes en imágenes profesionales de catálogo.",
    features: [
      "3 modos de generación con IA",
      "Galería avanzada de resultados",
      "Almacenamiento cloud (Cloudflare R2)",
      "Procesamiento batch",
      "Export en múltiples formatos",
    ],
    tags: ["Next.js", "Gemini AI", "Cloudflare R2"],
    status: "En producción",
    screenshot: "",
    adopters: [{ name: "Química Alquímica S.R.L." }],
  },
  {
    id: "flowcrm",
    type: "platform",
    productName: "FlowCRM",
    tagline: "CRM a medida para industrias y fábricas",
    description: "CRM a medida para fábrica de artículos de limpieza. Gestión de clientes, pedidos, seguimiento y reportes. Pensado para operaciones industriales con flujos de venta complejos.",
    features: [
      "Gestión completa de clientes",
      "Sistema de pedidos con seguimiento",
      "Reportes y métricas de venta",
      "Pipeline visual de ventas",
      "Historial de interacciones",
    ],
    tags: ["Laravel", "Inertia.js", "React", "PostgreSQL"],
    status: "En producción",
    screenshot: "",
    adopters: [{ name: "Química Bambú" }],
  },
  {
    id: "vitrina",
    type: "platform",
    productName: "Vitrina",
    tagline: "Catálogo online autoadministrable con checkout a WhatsApp",
    description: "Catálogo online autoadministrable con checkout a WhatsApp. Panel admin completo con productos, categorías, galería y leads. Producto escalable multi-nicho para cualquier negocio que venda productos.",
    features: [
      "Catálogo autoadministrable",
      "Checkout directo a WhatsApp",
      "Panel admin con productos y categorías",
      "Galería de imágenes optimizada",
      "Captura de leads automática",
    ],
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    status: "Pre-lanzamiento",
    screenshot: "",
    adopters: [{ name: "Abundancia Hogar" }],
  },
  {
    id: "presskit-ar",
    type: "platform",
    productName: "PressKit.AR",
    tagline: "Press kit digital para músicos y DJs argentinos",
    description: "SaaS freemium multi-tenant para que músicos y DJs argentinos armen su press kit digital profesional. Cada artista tiene su propio subdominio con bio, tracks, fotos y rider técnico.",
    features: [
      "Multi-tenant con subdominios",
      "Modelo freemium",
      "Bio, tracks y fotos integrados",
      "Rider técnico descargable",
      "Estadísticas de visitas",
    ],
    tags: ["Next.js", "Multi-tenant", "SaaS"],
    status: "Pre-lanzamiento",
    screenshot: "",
    adopters: [],
  },
  {
    id: "iteratube",
    type: "platform",
    productName: "IteraTube",
    tagline: "Suite de repurposing de contenido con IA",
    description: "Suite de repurposing: analiza videos de YouTube y genera hilos, posts y contenido para redes sociales con IA. Convierte un solo video en múltiples piezas de contenido optimizadas para cada plataforma.",
    features: [
      "Análisis de video con IA",
      "Generación multi-formato",
      "Hilos para Twitter/X",
      "Posts para LinkedIn e Instagram",
      "966 tests automatizados",
    ],
    tags: ["Next.js", "Gemini Vision", "AI"],
    status: "En producción",
    screenshot: "",
    adopters: [],
  },
  {
    id: "raiz",
    type: "platform",
    productName: "RAIZ",
    tagline: "Sistema de gestión para estudios jurídicos",
    description: "Sistema integral de gestión para estudios jurídicos. Administración de expedientes, clientes, agenda judicial, vencimientos y documentación. En uso activo por múltiples estudios.",
    features: [
      "Gestión de expedientes judiciales",
      "Agenda judicial con vencimientos",
      "Administración de clientes",
      "Repositorio de documentación",
      "Sistema de alertas y recordatorios",
    ],
    tags: ["CodeIgniter", "MySQL", "jQuery"],
    status: "En producción",
    screenshot: "",
    adopters: [{ name: "Estudios jurídicos del Alto Valle" }],
  },
];

export const tools: ToolItem[] = [
  {
    id: "itera-studio",
    type: "tool",
    name: "Itera Studio",
    description: "Entorno visual para diseñar, prototipar y generar componentes UI production-ready con IA. Exporta directamente a código React + Tailwind listo para integrar en cualquier proyecto.",
    screenshot: "",
    tags: ["Next.js", "React", "Tailwind CSS", "AI"],
    license: "Single-tenant",
    audience: "Desarrolladores y equipos que necesitan acelerar la creación de interfaces sin sacrificar calidad de código.",
    highlights: ["Generación con IA", "Export a React + Tailwind", "Componentes reutilizables", "Preview en tiempo real"],
    status: "Beta privada",
    externalUrl: "https://studio.itera.lat",
  },
  {
    id: "iteratools",
    type: "tool",
    name: "IteraTools",
    description: "Colección de micro-herramientas web para desarrolladores y diseñadores. Conversores, generadores, validadores y utilidades que usamos internamente y abrimos al público.",
    screenshot: "",
    tags: ["Next.js", "Open Source", "Utilidades"],
    license: "Open Source",
    audience: "Desarrolladores, diseñadores y cualquiera que necesite herramientas rápidas sin instalar nada.",
    highlights: ["Sin registro", "Código abierto", "Zero tracking", "Procesamiento local"],
    status: "En producción",
    externalUrl: "https://tools.itera.lat",
  },
];

// Helper para obtener todo junto (backward compat)
export const portfolioData: PortfolioItem[] = [
  ...platforms,
  ...tools,
  ...websites,
];
