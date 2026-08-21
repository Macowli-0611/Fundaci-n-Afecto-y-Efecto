import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { siteConfig } from "@/config/site.config";
import { InstagramIcon, FacebookIcon } from "@/components/brand/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <Image
              src="/logo.jpg"
              alt="Fundación Afecto y Efecto"
              width={56}
              height={56}
              className="rounded-md mb-3"
            />
            <h3 className="font-bold text-lg mb-3">Fundación Afecto y Efecto</h3>
            <p className="text-sm text-slate-300">
              Dedicada al desarrollo integral de niños, niñas y adolescentes en condición de vulnerabilidad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nosotros" className="text-slate-300 hover:text-white transition">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/programas" className="text-slate-300 hover:text-white transition">
                  Programas
                </Link>
              </li>
              <li>
                <Link href="/actividades" className="text-slate-300 hover:text-white transition">
                  Actividades
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-slate-300 hover:text-white transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-slate-300 hover:text-white transition"
                >
                  Email
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-slate-300 hover:text-white transition"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-400 transition"
                aria-label="Instagram"
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition"
                aria-label="Facebook"
              >
                <FacebookIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>© 2024 Fundación Afecto y Efecto. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition">
                Privacidad
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
