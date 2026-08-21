import Link from "next/link";
import { Container, Section, Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formasDeApoyo } from "@/content/apoyo";
import { Heart, Gift, Briefcase, Users, BookOpen, MapPin } from "lucide-react";

const iconMap: Record<string, any> = {
  "1": Heart,
  "2": Gift,
  "3": Briefcase,
  "4": Users,
  "5": BookOpen,
  "6": MapPin,
};

export default function DonarPage() {
  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-br from-red-600 to-red-700 text-white">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Formas de Apoyo</h1>
          <p className="text-xl text-red-100">
            Hay muchas maneras de ser parte de esta transformación
          </p>
        </Container>
      </Section>

      {/* Formas de Apoyo */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {formasDeApoyo.map((forma) => {
              const Icon = iconMap[forma.id] || Heart;
              return (
                <Card key={forma.id} className="flex flex-col hover:shadow-xl">
                  <Icon className="text-red-600 mb-4" size={40} />
                  <h3 className="text-2xl font-bold mb-3">{forma.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{forma.description}</p>
                  {forma.details && (
                    <ul className="space-y-2 mb-6 text-sm text-slate-700">
                      {forma.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Métodos de pago - Pendiente de completar */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Métodos de Donación</h2>
            <p className="text-lg text-slate-600">
              Elige la forma que mejor se adapte a ti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PayPal - Pendiente */}
            <Card className="border-2 border-dashed border-slate-300">
              <div className="text-slate-500 text-center py-8">
                <p className="font-semibold mb-2">PayPal</p>
                <p className="text-sm text-slate-400">
                  Información de PayPal pendiente de configurar
                </p>
              </div>
            </Card>

            {/* Transferencia bancaria - Pendiente */}
            <Card className="border-2 border-dashed border-slate-300">
              <div className="text-slate-500 text-center py-8">
                <p className="font-semibold mb-2">Transferencia Bancaria</p>
                <p className="text-sm text-slate-400">
                  Datos bancarios pendiente de completar
                </p>
              </div>
            </Card>

            {/* Contacto directo */}
            <Card className="bg-blue-50">
              <h4 className="font-bold text-blue-600 mb-2">¿Necesitas más info?</h4>
              <p className="text-slate-700 text-sm mb-4">
                Contáctanos directamente para conocer otras opciones de donación.
              </p>
              <Link href="/contacto">
                <Button variant="primary" size="sm" className="w-full">
                  Contactar
                </Button>
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Tu aporte hace la diferencia
            </h2>
            <p className="text-lg text-red-100 mb-8">
              El 100% de las donaciones se destina directamente a beneficiar a nuestros
              niños, niñas y adolescentes.
            </p>
            <Link href="/contacto">
              <Button variant="secondary" size="lg">
                Comunícate con nosotros
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
