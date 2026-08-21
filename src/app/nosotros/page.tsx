import { Container, Section, Card } from "@/components/ui/Card";
import { ImageSlot } from "@/components/media/ImageSlot";
import { organizacion } from "@/content/organizacion";
import { principios } from "@/content/principios";

export default function NosotrosPage() {
  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Quiénes Somos</h1>
          <p className="text-xl text-blue-100">
            Conoce nuestra historia y propósito
          </p>
        </Container>
      </Section>

      {/* Institución */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Fundación Afecto y Efecto</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {organizacion.institucional.descripcion}
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="font-bold text-slate-900 mb-2">
                  Desde el año {organizacion.founded}
                </p>
                <p className="text-slate-600">
                  Trabajando en Yumbo, Valle del Cauca, por el desarrollo integral de
                  niños, niñas y adolescentes en comunidades vulnerables.
                </p>
              </div>
            </div>
            <ImageSlot
              alt="Fundación Afecto y Efecto"
              width={500}
              height={400}
              filename="nosotros.jpg"
              category="imagenes/programas"
            />
          </div>
        </Container>
      </Section>

      {/* Misión y Visión */}
      <Section className="bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Misión */}
            <Card>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {organizacion.mision.titulo}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {organizacion.mision.contenido}
              </p>
            </Card>

            {/* Visión */}
            <Card>
              <h3 className="text-2xl font-bold text-amber-600 mb-4">
                {organizacion.vision.titulo}
              </h3>
              {organizacion.vision.pendiente ? (
                <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-500">
                  <p className="text-sm text-amber-800">
                    Este contenido está siendo preparado. Para mayor información,
                    <a href="/contacto" className="font-semibold text-amber-700">
                      {" "}contáctanos
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <p className="text-slate-700 leading-relaxed">
                  {organizacion.vision.contenido}
                </p>
              )}
            </Card>
          </div>

          {/* Historia */}
          <Card className="bg-white border-2 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {organizacion.historia.titulo}
            </h3>
            {organizacion.historia.pendiente ? (
              <div className="bg-slate-50 p-4 rounded border-l-4 border-slate-400">
                <p className="text-sm text-slate-700">
                  Este contenido está siendo preparado. Para mayor información,
                  <a href="/contacto" className="font-semibold text-slate-900">
                    {" "}contáctanos
                  </a>
                  .
                </p>
              </div>
            ) : (
              <p className="text-slate-700 leading-relaxed">
                {organizacion.historia.contenido}
              </p>
            )}
          </Card>
        </Container>
      </Section>

      {/* Principios */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Nuestros Principios</h2>
            <p className="text-lg text-slate-600">
              Valores que guían nuestro trabajo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principios.map((principio) => (
              <Card key={principio.id} className="text-center">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  {principio.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {principio.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
