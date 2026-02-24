import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ÍTERA | Soluciones digitales que evolucionan con vos.",
  description: "Estudio de tecnología digital. Desarrollo web de alta performance, automatización inteligente con IA, y herramientas a medida.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased selection:bg-primary selection:text-white`}>
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
