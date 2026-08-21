import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Section, Card } from "@/components/ui/Card";
import { ImageSlot } from "@/components/media/ImageSlot";
import { Button } from "@/components/ui/Button";
import { programs } from "@/content/programas";
import { ArrowLeft, CheckCircle } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default function ProgramDetailPage({ params }: PageProps) {
  const program = programs.find((p) => p.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <Container>
          <Link href="/programas" className="inline-flex items-center gap-2 mb-6 hover:opacity-80">
            <ArrowLeft size={20} />
            Volver a programas
          </Link>
          <h1 className="text-5xl font-bold mb-4">{program.title}</h1>
          <p className="text-xl text-blue-100">{program.description}</p>
        </Container>
      </Section>

      {/* Contenido */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Imagen */}
              <ImageSlot
                alt={program.title}
                width={800}
                height={500}
                filename={program.image}
                category="imagenes/programas"
                className="mb-8 rounded-lg overflow-hidden"
              />

              {/* Descripción completa */}
              <Card className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Descripción</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {program.fullDescription}
                </p>
              </Card>

              {/* Actividades */}
              <Card>
                <h2 className="text-3xl font-bold mb-6">¿Qué hacemos?</h2>
                <div className="space-y-4">
                  {program.activities.map((activity, idx) => (
                    <div key={idx} className="flex gap-4">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                      <p className="text-slate-700 text-lg">{activity}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="sticky top-24">
                <h3 className="text-xl font-bold mb-4">Información</h3>

                <div className="mb-6">
                  <p className="text-sm text-slate-600 mb-1">Población destinataria:</p>
                  <p className="font-semibold text-slate-900">
                    {program.targetAudience}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-slate-600 mb-2">Áreas de trabajo:</p>
                  <ul className="space-y-2">
                    {program.activities.map((activity, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-slate-700 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contacto" className="block">
                  <Button variant="secondary" size="md" className="w-full">
                    Apoyar este programa
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              ¿Quieres conocer más sobre este programa?
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Contáctanos para obtener más información o para apoyar esta iniciativa.
            </p>
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                Contactar
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
