import { Container, Section, Card } from "@/components/ui/Card";
import { ImageSlot } from "@/components/media/ImageSlot";
import { actividades } from "@/content/actividades";

export default function ActividadesPage() {
  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-br from-amber-500 to-red-600 text-white">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Actividades y Celebraciones</h1>
          <p className="text-xl text-amber-100">
            Momentos especiales a lo largo del año
          </p>
        </Container>
      </Section>

      {/* Actividades */}
      <Section className="bg-white">
        <Container>
          <div className="space-y-12">
            {actividades.map((actividad, idx) => (
              <div
                key={actividad.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  idx % 2 === 1 ? "md:[&>:first-child]:order-2" : ""
                }`}
              >
                <ImageSlot
                  alt={actividad.name}
                  width={500}
                  height={400}
                  filename={actividad.image}
                  category="imagenes/actividades"
                  className="rounded-lg overflow-hidden"
                />
                <div>
                  <h2 className="text-4xl font-bold mb-4 text-slate-900">
                    {actividad.name}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6">
                    {actividad.description}
                  </p>
                  <Card className="bg-gradient-to-br from-amber-50 to-red-50 border-0">
                    <p className="italic text-lg text-slate-700">
                      "{actividad.quote}"
                    </p>
                  </Card>
                  {actividad.videoUrl && (
                    <div className="mt-6 bg-slate-900 rounded-lg overflow-hidden aspect-video">
                      <iframe
                        src={`${actividad.videoUrl}?h=400`}
                        width="100%"
                        height="100%"
                        allow="autoplay; fullscreen; picture-in-picture"
                        title={actividad.name}
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
