import Link from "next/link";
import { Container, Section, Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formasDeApoyo } from "@/content/apoyo";
import { siteConfig } from "@/config/site.config";
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
  const { paypal, banco, billetera } = siteConfig.donations;
  const paypalConfigured = Object.values(paypal.buttonIds).some(Boolean);
  const bancoConfigured = Boolean(banco.numero && banco.titular);
  const billeteraConfigured = Boolean(billetera.numero);

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
            {/* PayPal */}
            {paypalConfigured ? (
              <Card>
                <p className="font-semibold mb-4 text-center">Donar por PayPal</p>
                <div className="flex flex-col gap-3">
                  {paypal.buttonIds.alimentos && (
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                      <input type="hidden" name="hosted_button_id" value={paypal.buttonIds.alimentos} />
                      <button type="submit" className="w-full text-sm text-blue-700 underline">
                        Alimentos
                      </button>
                    </form>
                  )}
                  {paypal.buttonIds.bioseguridad && (
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                      <input type="hidden" name="hosted_button_id" value={paypal.buttonIds.bioseguridad} />
                      <button type="submit" className="w-full text-sm text-blue-700 underline">
                        Bioseguridad
                      </button>
                    </form>
                  )}
                  {paypal.buttonIds.recursos && (
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                      <input type="hidden" name="hosted_button_id" value={paypal.buttonIds.recursos} />
                      <button type="submit" className="w-full text-sm text-blue-700 underline">
                        Recursos digitales
                      </button>
                    </form>
                  )}
                </div>
              </Card>
            ) : (
              <Card className="border-2 border-dashed border-slate-300">
                <div className="text-slate-500 text-center py-8">
                  <p className="font-semibold mb-2">PayPal</p>
                  <p className="text-sm text-slate-400">
                    Información de PayPal pendiente de configurar
                  </p>
                </div>
              </Card>
            )}

            {/* Transferencia bancaria */}
            {bancoConfigured ? (
              <Card>
                <p className="font-semibold mb-4 text-center">Transferencia Bancaria</p>
                <dl className="text-sm text-slate-700 space-y-2">
                  {banco.nombre && (
                    <div>
                      <dt className="text-slate-500">Banco</dt>
                      <dd className="font-medium">{banco.nombre}</dd>
                    </div>
                  )}
                  {banco.tipo && (
                    <div>
                      <dt className="text-slate-500">Tipo de cuenta</dt>
                      <dd className="font-medium">{banco.tipo}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-slate-500">Número</dt>
                    <dd className="font-medium">{banco.numero}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Titular</dt>
                    <dd className="font-medium">{banco.titular}</dd>
                  </div>
                </dl>
              </Card>
            ) : (
              <Card className="border-2 border-dashed border-slate-300">
                <div className="text-slate-500 text-center py-8">
                  <p className="font-semibold mb-2">Transferencia Bancaria</p>
                  <p className="text-sm text-slate-400">
                    Datos bancarios pendiente de completar
                  </p>
                </div>
              </Card>
            )}

            {billeteraConfigured ? (
              <Card>
                <p className="font-semibold mb-4 text-center">{billetera.tipo || "Billetera digital"}</p>
                <p className="text-center text-lg font-medium text-slate-700">{billetera.numero}</p>
              </Card>
            ) : (
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
            )}
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
