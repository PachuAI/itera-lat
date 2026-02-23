"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Herramientas", href: "#herramientas" },
    { name: "Sobre ÍTERA", href: "#nosotros" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 hover:scale-105 active:scale-95 transition-transform">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
            <ArrowUpRight size={20} strokeWidth={3} />
          </div>
          <span className="font-bold text-xl tracking-wide">ÍTERA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors hover:scale-105 active:scale-95 inline-block"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="text-sm font-semibold bg-white text-background px-5 py-2.5 rounded-sm hover:bg-primary hover:text-white transition-all hover:scale-105 active:scale-95 inline-block"
          >
            Hablemos
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 z-40">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="mt-4 text-xl font-semibold bg-primary text-white px-8 py-4 rounded-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hablemos
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
