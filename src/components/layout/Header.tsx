"use client";

import Link from "next/link";
import Image from "next/image";
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
          <Link href="/" className="flex items-center gap-3 font-bold text-xl">
            <Image
              src="/logo.jpg"
              alt="Fundación Afecto y Efecto"
              width={44}
              height={44}
              className="rounded-md"
              priority
            />
            <span className="hidden sm:inline">Afecto y Efecto</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link href="/contacto" className="hidden lg:inline-block">
            <Button variant="secondary" size="sm">
              Apoyar
            </Button>
          </Link>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {mobileOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col space-y-3">
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
