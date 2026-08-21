import Link from "next/link";
import { Container, Section } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Heart } from "lucide-react";

export default function NotFound() {
  return (
    <Section className="bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center min-h-screen">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <Heart className="text-red-500 mx-auto mb-4" size={64} />
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-2xl font-semibold text-slate-900 mb-4">
            Página no encontrada
          </p>
          <p className="text-lg text-slate-600 mb-8">
            Lo sentimos, la página que buscas no existe. Pero podemos ayudarte a encontrar lo que necesitas.
          </p>
          <Link href="/">
            <Button variant="primary" size="lg">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
