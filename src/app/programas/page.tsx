import Link from "next/link";
import { Container, Section, Card } from "@/components/ui/Card";
import { ImageSlot } from "@/components/media/ImageSlot";
import { programs } from "@/content/programas";
import { ArrowRight } from "lucide-react";

export default function ProgramasPage() {
  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Nuestros Programas</h1>
          <p className="text-xl text-blue-100">
            Promovemos el desarrollo integral en educación, salud y recreación
          </p>
        </Container>
      </Section>

      {/* Programas Grid */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Link key={program.id} href={`/programas/${program.slug}`}>
                <Card className="h-full hover:shadow-xl cursor-pointer flex flex-col overflow-hidden group">
                  <ImageSlot
                    alt={program.title}
                    width={400}
                    height={250}
                    filename={program.image}
                    category="imagenes/programas"
                    className="mb-4 -mx-6 -mt-6 rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-grow">
                    {program.description}
                  </p>
                  <div className="text-blue-600 font-semibold flex items-center gap-2">
                    Conocer más
                    <ArrowRight size={16} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
