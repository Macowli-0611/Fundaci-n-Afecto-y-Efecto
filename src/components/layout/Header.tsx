"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Card";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Quiénes Somos", href: "/nosotros" },
  { name: "Programas", href: "/programas" },
  { name: "Galería", href: "/galeria" },
  { name: "Actividades", href: "/actividades" },
  { name: "Contacto", href: "/contacto" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-amber-400 rounded-full flex items-center justify-center text-white font-bold">
              A&E
            </div>
            <span className="hidden sm:inline">Afecto y Efecto</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link href="/contacto" className="hidden md:inline-block">
            <Button variant="secondary" size="sm">
              Apoyar
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contacto" onClick={() => setMobileOpen(false)}>
              <Button variant="secondary" size="sm" className="w-full text-center">
                Apoyar
              </Button>
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
}
