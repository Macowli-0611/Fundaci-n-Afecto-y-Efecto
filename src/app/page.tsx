import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, Container, Section } from "@/components/ui/Card";
import { ImageSlot } from "@/components/media/ImageSlot";
import { organizacion } from "@/content/organizacion";
import { programs } from "@/content/programas";
import { actividades } from "@/content/actividades";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-blue-50 to-amber-50 pt-12">
        <Container>
          {/* Logo Destacado - Protagonista */}
          <div className="flex justify-center mb-12 lg:mb-16">
            <Image
              src="/logo.png"
              alt="Fundación Afecto y Efecto"
              width={280}
              height={280}
              className="drop-shadow-2xl hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Fundación <br />
                <span className="text-blue-600">Afecto</span> y{" "}
                <span className="text-amber-500">Efecto</span>
              </h1>
              <p className="text-2xl text-amber-600 font-bold mb-6">
                {organizacion.tagline}
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Promovemos el desarrollo integral de niños, niñas y adolescentes en
                comunidades vulnerables de Colombia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button variant="secondary" size="lg">
                    Apoyar Ahora
                    <ArrowRight className="ml-2 inline" size={20} />
                  </Button>
                </Link>
                <Link href="/nosotros">
                  <Button variant="ghost" size="lg">
                    Conocer más
                  </Button>
                </Link>
              </div>
            </div>
            <ImageSlot
              alt="Fundación Afecto y Efecto"
              width={600}
              height={500}
              filename="hero.jpg"
              category="imagenes/hero"
              priority
            />
          </div>
        </Container>
      </Section>

      {/* Misión */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ImageSlot
              alt="Nuestra misión"
              width={500}
              height={400}
              filename="mision.jpg"
              category="imagenes/programas"
            />
            <div>
              <h2 className="text-4xl font-bold mb-6 text-blue-600">
                Nuestra Misión
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {organizacion.mision.contenido}
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="italic text-slate-700">
                  "{organizacion.citaBio}"
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Programas Preview */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Nuestros Programas</h2>
            <p className="text-lg text-slate-600">
              Trabajamos en diferentes áreas para impactar de manera integral
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(0, 3).map((program) => (
              <Link key={program.id} href={`/programas/${program.slug}`}>
                <Card className="h-full hover:shadow-xl cursor-pointer flex flex-col">
                  <ImageSlot
                    alt={program.title}
                    width={400}
                    height={250}
                    filename={program.image}
                    category="imagenes/programas"
                    className="mb-4 -mx-6 -mt-6 rounded-t-lg"
                  />
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-slate-600 mb-4 flex-grow">
                    {program.description}
                  </p>
                  <div className="text-blue-600 font-semibold flex items-center gap-2">
                    Ver más
                    <ArrowRight size={16} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programas">
              <Button variant="primary" size="lg">
                Ver todos los programas
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Impact */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Nuestro Impacto</h2>
            <p className="text-xl text-blue-100">
              Números que demuestran nuestro compromiso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizacion.impacto.metricas.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-5xl font-bold mb-2">{metric.value}</div>
                <div className="text-lg font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-blue-100">{metric.description}</div>
                {metric.historical && (
                  <div className="text-xs text-blue-200 mt-2">
                    Cifra reportada en {metric.year}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Actividades */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Actividades y Celebraciones</h2>
            <p className="text-lg text-slate-600">
              Momentos especiales a lo largo del año
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actividades.slice(0, 3).map((act) => (
              <Card key={act.id} className="flex flex-col">
                <ImageSlot
                  alt={act.name}
                  width={400}
                  height={250}
                  filename={act.image}
                  category="imagenes/actividades"
                  className="mb-4 -mx-6 -mt-6 rounded-t-lg"
                />
                <h3 className="text-xl font-bold mb-2">{act.name}</h3>
                <p className="text-slate-600 mb-3 flex-grow">{act.description}</p>
                <p className="italic text-sm text-slate-500">"{act.quote}"</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/actividades">
              <Button variant="primary" size="lg">
                Ver todas las actividades
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section className="bg-gradient-to-br from-amber-50 to-red-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Heart className="text-red-500 mx-auto mb-4" size={48} />
            <h2 className="text-4xl font-bold mb-4">¿Quieres Apoyar?</h2>
            <p className="text-lg text-slate-700 mb-8">
              Hay muchas formas de ser parte de esta transformación. Tu aporte, grande o pequeño,
              hace diferencia en la vida de nuestros niños y niñas.
            </p>
            <Link href="/donar">
              <Button variant="secondary" size="lg">
                Conocer formas de apoyo
                <Sparkles className="ml-2 inline" size={20} />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
