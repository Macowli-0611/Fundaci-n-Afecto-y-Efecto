"use client";

import { useState } from "react";
import { Container, Section, Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site.config";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    // TODO: Conectar a un servicio de email real (Resend, Formspree, etc)
    // Por ahora solo simula el envío
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Mensaje de contacto:", formData);
      setStatus("success");
      setFormData({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-blue-100">
            Nos encantaría saber de ti. Contáctanos con tus preguntas o comentarios.
          </p>
        </Container>
      </Section>

      {/* Content */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {/* Info Cards */}
            <Card>
              <Mail className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold mb-2">Email</h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-blue-600 hover:underline break-words"
              >
                {siteConfig.contact.email}
              </a>
            </Card>

            <Card>
              <Phone className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold mb-2">Teléfono</h3>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-blue-600 hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
            </Card>

            <Card>
              <MapPin className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold mb-2">Ubicación</h3>
              <p className="text-slate-700 text-sm">
                {siteConfig.contact.address}
                <br />
                {siteConfig.contact.city}, {siteConfig.contact.department}
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulario */}
            <Card>
              <h2 className="text-3xl font-bold mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu teléfono"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Asunto</label>
                  <input
                    type="text"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Asunto del mensaje"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tu mensaje"
                  ></textarea>
                </div>

                {status === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-3 rounded-lg">
                    ¡Gracias! Tu mensaje ha sido recibido. Pronto nos pondremos en contacto.
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg">
                    Hubo un error. Por favor, intenta de nuevo o contáctanos directamente.
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </Card>

            {/* Redes Sociales */}
            <div className="space-y-6">
              <Card>
                <h3 className="text-2xl font-bold mb-4">Síguenos</h3>
                <div className="space-y-4">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <span className="font-bold">Instagram</span>
                    <span className="ml-auto">→</span>
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <span className="font-bold">Facebook</span>
                    <span className="ml-auto">→</span>
                  </a>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
                <MessageCircle className="text-green-600 mb-3" size={32} />
                <h3 className="font-bold mb-2">WhatsApp</h3>
                <p className="text-slate-700 text-sm mb-4">
                  Envíanos un mensaje directo por WhatsApp
                </p>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="secondary" size="md">
                    Chatear en WhatsApp
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
